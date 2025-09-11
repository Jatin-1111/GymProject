// API utilities for data validation and transformation
export const apiUtils = {
    // Transform frontend registration data to backend format
    transformRegistrationData: (formData) => {
        // Calculate age from date of birth
        const birthDate = new Date(formData.dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear() -
            (today.getMonth() < birthDate.getMonth() ||
                (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) ? 1 : 0);

        // Convert sleep hours string to a numeric value
        const convertSleepHours = (sleepHours) => {
            if (!sleepHours) return 7.5; // Default
            if (typeof sleepHours === 'number') return sleepHours;

            // Handle ranges like "7-8", "6-7", etc.
            if (sleepHours.includes('-')) {
                const [min, max] = sleepHours.split('-').map(parseFloat);
                return (min + max) / 2; // Take average
            }

            // Handle "9+" 
            if (sleepHours.includes('+')) {
                return parseFloat(sleepHours.replace('+', '')) + 0.5;
            }

            return parseFloat(sleepHours) || 7.5;
        };

        return {
            email: formData.email,
            password: formData.password,
            phone_number: formData.phone || null,
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            age: age,
            gender: formData.gender, // Should already be capitalized
            height_cm: parseFloat(formData.height) || 170, // Provide reasonable default
            weight_kg: parseFloat(formData.weight) || 70,   // Provide reasonable default
            fitness_goals: formData.fitnessGoals || "I want to get fit",
            workouts_per_week: formData.workoutsPerWeek || "3-4",
            workout_duration: parseInt(formData.workoutDuration) || 60,
            sleep_hours: convertSleepHours(formData.sleepHours),
            stress_level: formData.stressLevel || "medium",
            disliked_foods: formData.dislikedFoods || null,
            allergies: formData.allergies || null,
            health_conditions: formData.healthConditions || null,
        };
    },

    // Validate required fields for registration
    validateRegistrationData: (data) => {
        const errors = [];

        if (!data.email) errors.push('Email is required');
        if (!data.password || data.password.length < 8) errors.push('Password must be at least 8 characters');
        if (!data.name || data.name.length < 2) errors.push('Name must be at least 2 characters');
        if (!data.age || data.age < 14 || data.age > 99) errors.push('Age must be between 14 and 99');
        if (!data.gender) errors.push('Gender is required');
        if (!data.height_cm || data.height_cm <= 100) errors.push('Height must be greater than 100cm');
        if (!data.weight_kg || data.weight_kg <= 20) errors.push('Weight must be greater than 20kg');
        if (!data.fitness_goals || data.fitness_goals.length < 5) errors.push('Fitness goals must be at least 5 characters');
        if (!data.workouts_per_week) errors.push('Workouts per week is required');
        if (!data.workout_duration || data.workout_duration <= 0) errors.push('Workout duration must be greater than 0');
        if (!data.sleep_hours || data.sleep_hours <= 0) errors.push('Sleep hours is required and must be positive');
        if (!data.stress_level) errors.push('Stress level is required');

        return {
            isValid: errors.length === 0,
            errors
        };
    },

    // Format API errors for display
    formatApiError: (error) => {
        console.log("Formatting error:", error); // Debug log

        if (typeof error === 'string') return error;

        // Handle Error objects with details property (from API service)
        if (error.details && Array.isArray(error.details)) {
            const formattedErrors = error.details.map(detail => {
                const field = detail.loc ? detail.loc.join('.') : 'field';
                const message = detail.msg || detail.message || 'Invalid value';
                return `${field}: ${message}`;
            });
            return formattedErrors.join(', ');
        }

        // Handle Pydantic validation errors from backend response
        if (error.error === 'Invalid input' && error.details && Array.isArray(error.details)) {
            const formattedErrors = error.details.map(detail => {
                const field = detail.loc ? detail.loc.join('.') : 'field';
                const message = detail.msg || detail.message || 'Invalid value';
                return `${field}: ${message}`;
            });
            return formattedErrors.join(', ');
        }

        if (error.error) return error.error;
        if (error.message) return error.message;

        // Handle network errors
        if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
            return 'Unable to connect to server. Please check your internet connection.';
        }

        return 'An unexpected error occurred. Please try again.';
    },

    // Check if API is available
    isApiAvailable: async (baseUrl) => {
        try {
            const response = await fetch(`${baseUrl}/health`, {
                method: 'GET',
                mode: 'cors',
                signal: AbortSignal.timeout(5000) // 5 second timeout
            });
            return response.ok;
        } catch (error) {
            return false;
        }
    },

    // Generate mock user data for offline mode
    generateMockUserData: (email = 'demo@armourzone.com') => {
        return {
            id: Math.floor(Math.random() * 1000) + 1,
            name: 'Demo User',
            email: email,
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
    },

    // Calculate BMI
    calculateBMI: (weightKg, heightCm) => {
        if (!weightKg || !heightCm) return null;
        const heightM = heightCm / 100;
        return (weightKg / (heightM * heightM)).toFixed(1);
    },

    // Get BMI category
    getBMICategory: (bmi) => {
        const bmiNum = parseFloat(bmi);
        if (bmiNum < 18.5) return { category: 'Underweight', color: 'text-blue-400' };
        if (bmiNum < 25) return { category: 'Normal weight', color: 'text-green-400' };
        if (bmiNum < 30) return { category: 'Overweight', color: 'text-yellow-400' };
        return { category: 'Obese', color: 'text-red-400' };
    }
};

export default apiUtils;
