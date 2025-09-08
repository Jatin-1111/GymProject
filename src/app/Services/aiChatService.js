// AI Chat Service - Enhanced integration with backend AI capabilities
class AIChatService {
    constructor(apiService) {
        this.apiService = apiService;
        this.conversationHistory = [];
        this.userProfile = null;
    }

    async initializeChat() {
        try {
            // Load user profile for personalized responses
            this.userProfile = await this.apiService.getUserProfile();
            return true;
        } catch (error) {
            console.warn('Could not load user profile for AI chat:', error);
            return false;
        }
    }

    async sendMessage(message) {
        // Add user message to history
        this.conversationHistory.push({
            role: 'user',
            content: message,
            timestamp: new Date()
        });

        try {
            // AI Chat functionality disabled - backend support not available
            throw new Error("AI Chat feature is currently disabled as backend support is not available");

            // Add AI response to history
            this.conversationHistory.push({
                role: 'assistant',
                content: response.message,
                timestamp: new Date(response.timestamp),
                type: response.type,
                data: response.data
            });

            return response;
        } catch (error) {
            console.error('AI Chat error:', error);
            const errorResponse = {
                message: "I'm experiencing some technical difficulties. Please try again in a moment.",
                timestamp: new Date().toISOString(),
                type: 'error'
            };

            this.conversationHistory.push({
                role: 'assistant',
                content: errorResponse.message,
                timestamp: new Date(),
                type: 'error'
            });

            return errorResponse;
        }
    }

    getPersonalizedSuggestions() {
        if (!this.userProfile) {
            return [
                "Create workout plan",
                "Create diet plan",
                "Nutrition advice",
                "Form tips"
            ];
        }

        const suggestions = [];

        // Goal-based suggestions
        if (this.userProfile.fitness_goals?.toLowerCase().includes('weight loss')) {
            suggestions.push("Weight loss diet plan", "Cardio workout plan");
        } else if (this.userProfile.fitness_goals?.toLowerCase().includes('muscle gain')) {
            suggestions.push("Muscle building diet", "Strength training plan");
        }

        // General suggestions
        suggestions.push(
            "Analyze my progress",
            "Nutrition for my goals",
            `${this.userProfile.workout_duration || 60}-minute workout`,
            "Meal prep ideas"
        );

        return suggestions.slice(0, 5); // Limit to 5 suggestions
    }

    getContextualWelcome() {
        if (!this.userProfile) {
            return "Hi! I'm your AI fitness trainer. I can help create personalized workout and diet plans, provide nutrition advice, and answer fitness questions. How can I assist you today?";
        }

        const name = this.userProfile.name?.split(' ')[0] || 'there';
        const goal = this.userProfile.fitness_goals || 'your fitness goals';

        return `Hi ${name}! I'm your AI fitness trainer. I see your goal is "${goal}" and you prefer ${this.userProfile.workouts_per_week || '3-4'} workouts per week. I can create personalized plans, track your progress, and provide expert advice. What would you like to work on today?`;
    }

    clearHistory() {
        this.conversationHistory = [];
    }

    getHistory() {
        return this.conversationHistory;
    }

    // Quick action methods
    async createDietPlan(preferences = {}) {
        const message = `Create a personalized diet plan${preferences.dietType ? ` for ${preferences.dietType}` : ''}${preferences.goal ? ` focused on ${preferences.goal}` : ''}`;
        return await this.sendMessage(message);
    }

    async createWorkoutPlan(preferences = {}) {
        const message = `Generate a workout plan${preferences.level ? ` for ${preferences.level} level` : ''}${preferences.equipment ? ` using ${preferences.equipment}` : ''}`;
        return await this.sendMessage(message);
    }

    async analyzeProgress() {
        return await this.sendMessage("Analyze my current progress and provide recommendations");
    }
}

export default AIChatService;
