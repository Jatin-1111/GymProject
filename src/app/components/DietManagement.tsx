"use client";

import { useState, useEffect } from "react";
import {
  ChefHat,
  Plus,
  Calendar,
  TrendingUp,
  BookOpen,
  Utensils,
  Target,
} from "lucide-react";
import apiService from "../Services/apiService";

interface DietLog {
  meal_name: string;
  food_items: string;
  calories: number;
  protein_g?: number;
  carbs_g?: number;
  fat_g?: number;
  date: string;
}

interface DietPlan {
  day: string;
  meals: {
    [key: string]: {
      items: string;
      portion: string;
      calories: number;
    };
  };
}

interface DietSummary {
  period: string;
  total_calories: number;
  average_daily_calories: number;
  target_calories: number;
  adherence_score: number;
  daily_breakdown: Array<{
    date: string;
    calories: number;
  }>;
  macros_breakdown: {
    protein_percentage: number;
    carbs_percentage: number;
    fat_percentage: number;
  };
  top_meals: Array<{
    meal_name: string;
    frequency: number;
    avg_calories: number;
  }>;
}

export default function DietManagement() {
  const [activeSection, setActiveSection] = useState("overview");
  const [dietLogs, setDietLogs] = useState<DietLog[]>([]);
  const [latestPlan, setLatestPlan] = useState<DietPlan[]>([]);
  const [dietSummary, setDietSummary] = useState<DietSummary | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showMealForm, setShowMealForm] = useState(false);
  const [showPlanForm, setShowPlanForm] = useState(false);

  // Meal logging form state
  const [mealForm, setMealForm] = useState({
    meal_name: "",
    food_items: "",
    calories: "",
    protein_g: "",
    carbs_g: "",
    fat_g: "",
  });

  // Diet plan generation form state
  const [planForm, setPlanForm] = useState({
    diet_type: "veg",
    budget: "5000",
    activityLevel: "moderatelyActive",
    optional_cuisines: [] as string[],
  });

  useEffect(() => {
    if (activeSection === "logs") {
      loadDietLogs();
    } else if (activeSection === "plans") {
      loadLatestPlan();
    } else if (activeSection === "summary") {
      loadDietSummary();
    }
  }, [activeSection]);

  const loadDietLogs = async () => {
    try {
      setIsLoading(true);
      const logs = await apiService.getDietLogs();
      setDietLogs(logs);
    } catch (error) {
      console.error("Error loading diet logs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadLatestPlan = async () => {
    try {
      setIsLoading(true);
      const plan = await apiService.getLatestDietPlan();
      setLatestPlan(plan);
    } catch (error) {
      console.error("Error loading diet plan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadDietSummary = async () => {
    try {
      setIsLoading(true);
      const summary = await apiService.getDietSummary();
      setDietSummary(summary);
    } catch (error) {
      console.error("Error loading diet summary:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogMeal = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const mealData = {
        meal_name: mealForm.meal_name,
        food_items: mealForm.food_items,
        calories: parseInt(mealForm.calories),
        macros: {
          protein_g: mealForm.protein_g
            ? parseFloat(mealForm.protein_g)
            : undefined,
          carbs_g: mealForm.carbs_g ? parseFloat(mealForm.carbs_g) : undefined,
          fat_g: mealForm.fat_g ? parseFloat(mealForm.fat_g) : undefined,
        },
      };

      await apiService.logMeal(mealData);
      setShowMealForm(false);
      setMealForm({
        meal_name: "",
        food_items: "",
        calories: "",
        protein_g: "",
        carbs_g: "",
        fat_g: "",
      });

      if (activeSection === "logs") {
        loadDietLogs();
      }
    } catch (error) {
      console.error("Error logging meal:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGeneratePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await apiService.generateDietPlan(planForm);
      setShowPlanForm(false);

      if (activeSection === "plans") {
        loadLatestPlan();
      }
    } catch (error) {
      console.error("Error generating diet plan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const sections = [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "logs", label: "Meal Logs", icon: Utensils },
    { id: "plans", label: "Diet Plans", icon: BookOpen },
    { id: "summary", label: "Weekly Summary", icon: Calendar },
  ];

  const renderOverview = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => setShowMealForm(true)}
                className="w-full flex items-center space-x-2 p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Log Meal</span>
              </button>
              <button
                onClick={() => setShowPlanForm(true)}
                className="w-full flex items-center space-x-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Target className="w-4 h-4" />
                <span>Generate Diet Plan</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <Utensils className="w-6 h-6 text-green-400" />
          <h3 className="text-lg font-semibold text-white">Recent Meals</h3>
        </div>
        <p className="text-gray-400">View your meal logging history</p>
        <button
          onClick={() => setActiveSection("logs")}
          className="mt-3 text-green-400 hover:text-green-300 transition-colors"
        >
          View All Logs →
        </button>
      </div>

      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-6 h-6 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Diet Plans</h3>
        </div>
        <p className="text-gray-400">AI-generated personalized diet plans</p>
        <button
          onClick={() => setActiveSection("plans")}
          className="mt-3 text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Plans →
        </button>
      </div>
    </div>
  );

  const renderMealLogs = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h3 className="text-xl font-semibold text-white">Meal Logs</h3>
        <button
          onClick={() => setShowMealForm(true)}
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors w-full sm:w-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Log New Meal</span>
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="text-gray-400 mt-2">Loading meal logs...</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {dietLogs.map((log, index) => (
            <div
              key={`${log.date}-${log.meal_name}-${index}`}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-semibold">{log.meal_name}</h4>
                  <p className="text-gray-400 text-sm">{log.food_items}</p>
                  <div className="flex space-x-4 mt-2 text-sm">
                    <span className="text-orange-400">{log.calories} cal</span>
                    {log.protein_g && (
                      <span className="text-green-400">
                        {log.protein_g}g protein
                      </span>
                    )}
                    {log.carbs_g && (
                      <span className="text-blue-400">
                        {log.carbs_g}g carbs
                      </span>
                    )}
                    {log.fat_g && (
                      <span className="text-yellow-400">{log.fat_g}g fat</span>
                    )}
                  </div>
                </div>
                <span className="text-gray-500 text-sm">
                  {new Date(log.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderDietPlans = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h3 className="text-xl font-semibold text-white">Diet Plans</h3>
        <button
          onClick={() => setShowPlanForm(true)}
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors w-full sm:w-auto"
        >
          <Target className="w-4 h-4" />
          <span>Generate New Plan</span>
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="text-gray-400 mt-2">Loading diet plan...</p>
        </div>
      ) : latestPlan.length > 0 ? (
        <div className="space-y-4">
          {latestPlan.map((dayPlan) => (
            <div
              key={dayPlan.day}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700"
            >
              <h4 className="text-white font-semibold mb-3">{dayPlan.day}</h4>
              <div className="grid gap-2">
                {Object.entries(dayPlan.meals).map(([mealName, meal]) => (
                  <div
                    key={mealName}
                    className="border-l-2 border-blue-500 pl-3"
                  >
                    <div className="flex justify-between">
                      <span className="text-blue-400 font-medium">
                        {mealName}
                      </span>
                      <span className="text-orange-400">
                        {meal.calories} cal
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{meal.items}</p>
                    <p className="text-gray-500 text-xs">{meal.portion}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">No diet plans available</p>
          <p className="text-gray-500 text-sm">
            Generate your first personalized diet plan
          </p>
        </div>
      )}
    </div>
  );

  const renderDietSummary = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">
          Weekly Diet Summary
        </h3>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="text-gray-400 mt-2">Loading diet summary...</p>
        </div>
      ) : dietSummary ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Summary Stats */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">
              Weekly Overview
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Period:</span>
                <span className="text-white">{dietSummary.period}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Calories:</span>
                <span className="text-orange-400">
                  {dietSummary.total_calories.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Daily Average:</span>
                <span className="text-blue-400">
                  {dietSummary.average_daily_calories}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Target Calories:</span>
                <span className="text-green-400">
                  {dietSummary.target_calories}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Adherence Score:</span>
                <span className="text-purple-400">
                  {dietSummary.adherence_score.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Macros Breakdown */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">
              Macros Breakdown
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Protein:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-400 h-2 rounded-full"
                      style={{
                        width: `${dietSummary.macros_breakdown.protein_percentage}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-green-400">
                    {dietSummary.macros_breakdown.protein_percentage}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Carbs:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-400 h-2 rounded-full"
                      style={{
                        width: `${dietSummary.macros_breakdown.carbs_percentage}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-blue-400">
                    {dietSummary.macros_breakdown.carbs_percentage}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Fat:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{
                        width: `${dietSummary.macros_breakdown.fat_percentage}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-yellow-400">
                    {dietSummary.macros_breakdown.fat_percentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Meals */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">Top Meals</h4>
            <div className="space-y-3">
              {dietSummary.top_meals.map((meal) => (
                <div
                  key={meal.meal_name}
                  className="flex justify-between items-center"
                >
                  <div>
                    <span className="text-white font-medium">
                      {meal.meal_name}
                    </span>
                    <p className="text-gray-400 text-sm">
                      {meal.frequency} times
                    </p>
                  </div>
                  <span className="text-orange-400">
                    {meal.avg_calories} cal
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Breakdown Chart */}
          <div className="md:col-span-2 lg:col-span-3 bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4">
              Daily Calorie Intake
            </h4>
            <div className="space-y-2">
              {dietSummary.daily_breakdown.map((day) => (
                <div key={day.date} className="flex items-center space-x-4">
                  <span className="text-gray-400 w-24 text-sm">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <div className="flex-1 bg-gray-700 rounded-full h-4 relative">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-400 h-4 rounded-full"
                      style={{
                        width: `${Math.min(
                          (day.calories / dietSummary.target_calories) * 100,
                          100
                        )}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-orange-400 w-16 text-sm">
                    {day.calories} cal
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">No diet summary available</p>
          <p className="text-gray-500 text-sm">
            Start logging meals to see your weekly summary
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <ChefHat className="w-8 h-8 text-green-400" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Diet Management
          </h1>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-left">
          <div className="inline-flex flex-wrap gap-2 bg-gray-800 p-2 rounded-lg">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-md transition-colors flex-shrink-0 ${
                    activeSection === section.id
                      ? "bg-green-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{section.label}</span>
                  <span className="sm:hidden">
                    {section.label.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-96">
          {activeSection === "overview" && renderOverview()}
          {activeSection === "logs" && renderMealLogs()}
          {activeSection === "plans" && renderDietPlans()}
          {activeSection === "summary" && renderDietSummary()}
        </div>

        {/* Meal Logging Modal */}
        {showMealForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg w-full max-w-md mx-auto max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-semibold text-white mb-4">
                Log Meal
              </h3>
              <form onSubmit={handleLogMeal} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Meal Name
                  </label>
                  <input
                    type="text"
                    value={mealForm.meal_name}
                    onChange={(e) =>
                      setMealForm({ ...mealForm, meal_name: e.target.value })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                    placeholder="e.g., Breakfast, Lunch, Dinner"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Food Items
                  </label>
                  <textarea
                    value={mealForm.food_items}
                    onChange={(e) =>
                      setMealForm({ ...mealForm, food_items: e.target.value })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                    rows={3}
                    placeholder="Describe what you ate..."
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Calories
                    </label>
                    <input
                      type="number"
                      value={mealForm.calories}
                      onChange={(e) =>
                        setMealForm({ ...mealForm, calories: e.target.value })
                      }
                      className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                      placeholder="Total calories"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">
                      Protein (g)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={mealForm.protein_g}
                      onChange={(e) =>
                        setMealForm({ ...mealForm, protein_g: e.target.value })
                      }
                      className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                      placeholder="Optional"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowMealForm(false)}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors order-2 sm:order-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50 order-1 sm:order-2"
                  >
                    {isLoading ? "Logging..." : "Log Meal"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Plan Generation Modal */}
        {showPlanForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg w-full max-w-md mx-auto max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-semibold text-white mb-4">
                Generate Diet Plan
              </h3>
              <form onSubmit={handleGeneratePlan} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Diet Type
                  </label>
                  <select
                    value={planForm.diet_type}
                    onChange={(e) =>
                      setPlanForm({ ...planForm, diet_type: e.target.value })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="veg">Vegetarian</option>
                    <option value="non-veg">Non-Vegetarian</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Monthly Budget (₹)
                  </label>
                  <input
                    type="number"
                    value={planForm.budget}
                    onChange={(e) =>
                      setPlanForm({ ...planForm, budget: e.target.value })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your monthly food budget"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Activity Level
                  </label>
                  <select
                    value={planForm.activityLevel}
                    onChange={(e) =>
                      setPlanForm({
                        ...planForm,
                        activityLevel: e.target.value,
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="sedentary">Sedentary</option>
                    <option value="lightlyActive">Lightly Active</option>
                    <option value="moderatelyActive">Moderately Active</option>
                    <option value="veryActive">Very Active</option>
                    <option value="extraActive">Extra Active</option>
                  </select>
                </div>
                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowPlanForm(false)}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors order-2 sm:order-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 order-1 sm:order-2"
                  >
                    {isLoading ? "Generating..." : "Generate Plan"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
