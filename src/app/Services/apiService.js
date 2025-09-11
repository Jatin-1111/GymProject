// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_FITNESS_API_URL || 'https://fitness-tracker-v4.vercel.app/api';

// Demo API key for Armour Zone
const API_KEY = process.env.NEXT_PUBLIC_ARMOUR_ZONE_API_KEY || 'poppy_armour_zone_demo_key_2024';

class ApiService {
    constructor() {
        this.baseURL = API_BASE_URL;
        this.apiKey = API_KEY;
        this.accessToken = null;
        this.refreshToken = null;
        this.isOfflineMode = false;
        this.debugMode = process.env.NEXT_PUBLIC_DEBUG_API === 'true';

        // Load tokens from localStorage if available
        this.loadTokens();
    }

    // Token management
    loadTokens() {
        if (typeof window !== 'undefined') {
            this.accessToken = localStorage.getItem('access_token');
            this.refreshToken = localStorage.getItem('refresh_token');
        }
    }

    saveTokens(accessToken, refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        if (typeof window !== 'undefined') {
            localStorage.setItem('access_token', accessToken);
            if (refreshToken) {
                localStorage.setItem('refresh_token', refreshToken);
            }
        }
    }

    clearTokens() {
        this.accessToken = null;
        this.refreshToken = null;
        if (typeof window !== 'undefined') {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
        }
    }

    // Get headers for API requests
    getHeaders(includeAuth = false) {
        const headers = {
            'Content-Type': 'application/json',
            'X-API-KEY': this.apiKey
        };

        if (includeAuth && this.accessToken) {
            headers['Authorization'] = `Bearer ${this.accessToken}`;
        }

        return headers;
    }

    // Generic API request method with token refresh and fallback
    async makeRequest(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            mode: 'cors',
            ...options,
            headers: {
                ...this.getHeaders(options.requireAuth),
                ...options.headers
            }
        };

        try {
            let response = await fetch(url, config);

            // If token expired, try to refresh
            if (response.status === 401 && options.requireAuth && this.refreshToken) {
                const refreshed = await this.refreshAccessToken();
                if (refreshed) {
                    // Retry the original request with new token
                    config.headers['Authorization'] = `Bearer ${this.accessToken}`;
                    response = await fetch(url, config);
                }
            }

            // Handle different response types
            let data;
            const contentType = response.headers.get('content-type');

            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                data = { message: await response.text() };
            }

            if (!response.ok) {
                // For error responses, throw the entire data object to preserve details
                const error = new Error(data.error || data.message || `HTTP error! status: ${response.status}`);
                error.details = data.details; // Preserve validation details
                error.statusCode = response.status;
                throw error;
            }

            return data;

        } catch (error) {
            console.error(`API request failed: ${endpoint}`, error);

            // Handle CORS and network errors with fallback
            if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
                console.warn('Network error detected, switching to offline mode');
                this.isOfflineMode = true;
                return this.handleOfflineRequest(endpoint, options);
            }

            // Handle CORS errors
            if (error.message.includes('CORS')) {
                console.warn('CORS error detected, using fallback response');
                return this.handleOfflineRequest(endpoint, options);
            }

            throw error;
        }
    }

    // Fallback for when API is not available
    handleOfflineRequest(endpoint, options) {

        // Mock responses for development/demo purposes
        if (endpoint === '/auth/login' && options.method === 'POST') {
            return {
                access_token: 'demo_access_token',
                refresh_token: 'demo_refresh_token',
                message: 'Demo login successful'
            };
        }

        if (endpoint === '/auth/register' && options.method === 'POST') {
            return {
                message: 'User registered successfully (Demo Mode)',
                user_id: Math.floor(Math.random() * 1000) + 1
            };
        }

        if (endpoint === '/user/profile/me') {
            return {
                id: 1,
                name: 'Demo User',
                email: 'demo@armourzone.com',
                age: 28,
                gender: 'Male',
                phone_number: '+1 (555) 123-4567',
                height_cm: 175,
                weight_kg: 70,
                fitness_goals: 'I want to build muscle and improve overall fitness',
                workouts_per_week: '3-4',
                workout_duration: 60,
                sleep_hours: '7-8',
                stress_level: 'medium',
                disliked_foods: 'mushrooms',
                allergies: '',
                health_conditions: ''
            };
        }

        if (endpoint === '/workout/history/me') {
            return [
                {
                    id: 1,
                    exercise_name: 'Bench Press',
                    sets: 3,
                    reps: 10,
                    weight_kg: 80,
                    date_logged: new Date().toISOString()
                },
                {
                    id: 2,
                    exercise_name: 'Squats',
                    sets: 4,
                    reps: 12,
                    weight_kg: 100,
                    date_logged: new Date(Date.now() - 86400000).toISOString()
                }
            ];
        }

        if (endpoint === '/diet/logs/me') {
            return [
                {
                    id: 1,
                    meal_type: 'breakfast',
                    food_item: 'Oatmeal with berries',
                    calories: 350,
                    date_logged: new Date().toISOString()
                }
            ];
        }

        if (endpoint === '/progress/weight/me') {
            return [
                {
                    id: 1,
                    weight_kg: 70,
                    date_logged: new Date().toISOString()
                }
            ];
        }

        if (endpoint === '/progress/measurements/me') {
            return [
                {
                    id: 1,
                    waist_cm: 32,
                    chest_cm: 42,
                    arms_cm: 15,
                    hips_cm: 38,
                    date: new Date().toISOString()
                },
                {
                    id: 2,
                    waist_cm: 31,
                    chest_cm: 43,
                    arms_cm: 16,
                    hips_cm: 37,
                    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
                }
            ];
        }

        // Default success response for other endpoints
        return {
            message: 'Success (Demo Mode)',
            demo: true
        };
    }

    // Refresh access token
    async refreshAccessToken() {
        if (!this.refreshToken) return false;

        try {
            const response = await fetch(`${this.baseURL}/auth/refresh`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.refreshToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                this.saveTokens(data.access_token, this.refreshToken);
                return true;
            } else {
                this.clearTokens();
                return false;
            }
        } catch (error) {
            console.error('Token refresh failed:', error);
            this.clearTokens();
            return false;
        }
    }

    // Authentication methods
    async login(email, password) {
        const data = await this.makeRequest('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            requireAuth: false
        });

        this.saveTokens(data.access_token, data.refresh_token);
        if (typeof window !== 'undefined') {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
        }

        return data;
    }

    async register(userData) {
        const data = await this.makeRequest('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
            requireAuth: false
        });
        return data;
    }

    async logout() {
        try {
            await this.makeRequest('/auth/logout', {
                method: 'POST',
                requireAuth: true
            });
        } catch (error) {
            console.error('Logout API call failed:', error);
        } finally {
            this.clearTokens();
        }
    }

    // User profile methods
    async getUserProfile() {
        return await this.makeRequest('/user/profile/me', {
            method: 'GET',
            requireAuth: true
        });
    }

    async updateUserProfile(profileData) {
        return await this.makeRequest('/user/profile/me', {
            method: 'PUT',
            body: JSON.stringify(profileData),
            requireAuth: true
        });
    }

    // Workout methods
    async getWorkoutHistory() {
        return await this.makeRequest('/workout/history/me', {
            method: 'GET',
            requireAuth: true
        });
    }

    // Alias for backwards compatibility
    async getWorkoutLogs() {
        return await this.getWorkoutHistory();
    }

    async logWorkout(workoutData) {
        return await this.makeRequest('/workout/log', {
            method: 'POST',
            body: JSON.stringify(workoutData),
            requireAuth: true
        });
    }

    async generateWorkoutPlan(planData) {
        return await this.makeRequest('/workout/generate-plan', {
            method: 'POST',
            body: JSON.stringify(planData),
            requireAuth: true
        });
    }

    async getLatestWorkoutPlan() {
        return await this.makeRequest('/workout/plan/latest/me', {
            method: 'GET',
            requireAuth: true
        });
    }

    // Diet methods
    async getDietLogs() {
        return await this.makeRequest('/diet/logs/me', {
            method: 'GET',
            requireAuth: true
        });
    }

    async logMeal(mealData) {
        return await this.makeRequest('/diet/log', {
            method: 'POST',
            body: JSON.stringify(mealData),
            requireAuth: true
        });
    }

    async getLatestDietPlan() {
        return await this.makeRequest('/diet/plan/latest/me', {
            method: 'GET',
            requireAuth: true
        });
    }

    async generateDietPlan(planData) {
        return await this.makeRequest('/diet/generate-plan', {
            method: 'POST',
            body: JSON.stringify(planData),
            requireAuth: true
        });
    }

    async getDietSummary() {
        return await this.makeRequest('/diet/weekly-summary/me', {
            method: 'GET',
            requireAuth: true
        });
    }

    // Progress methods
    async getWeightHistory() {
        return await this.makeRequest('/progress/weight/me', {
            method: 'GET',
            requireAuth: true
        });
    }

    async logWeight(weightData) {
        return await this.makeRequest('/progress/weight/log', {
            method: 'POST',
            body: JSON.stringify(weightData),
            requireAuth: true
        });
    }

    async logMeasurements(measurementData) {
        return await this.makeRequest('/progress/measurements/log', {
            method: 'POST',
            body: JSON.stringify(measurementData),
            requireAuth: true
        });
    }

    async getMeasurementHistory() {
        return await this.makeRequest('/progress/measurements/me', {
            method: 'GET',
            requireAuth: true
        });
    }

    async getWeeklyReport() {
        return await this.makeRequest('/progress/weekly-report/me', {
            method: 'GET',
            requireAuth: true
        });
    }

    // Rewards and achievements methods
    async getRewardStatus() {
        return await this.makeRequest('/reward/status/me', {
            method: 'GET',
            requireAuth: true
        });
    }

}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;
