"use client";

import { useState, useEffect } from "react";
import { Activity, Target, TrendingUp, Zap, Award } from "lucide-react";
import apiService from "../Services/apiService";

interface WeightEntry {
  id: number;
  weight_kg: number;
  date: string;
}

interface WorkoutHistory {
  id: number;
  name: string;
  exercises: Array<{
    name: string;
    sets: number;
    reps: number;
    weight: number;
  }>;
  date: string;
}

interface DietLog {
  id?: number;
  meal_name: string;
  food_items: string;
  calories: number;
  date: string;
}

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    currentWeight: 0,
    weeklyCalories: 0,
    fitnessScore: 0,
  });
  const [recentWorkouts, setRecentWorkouts] = useState<WorkoutHistory[]>([]);
  const [weightProgress, setWeightProgress] = useState<WeightEntry[]>([]);
  const [recentMeals, setRecentMeals] = useState<DietLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setIsLoading(true);

      // Load all dashboard data in parallel
      const [workoutHistory, weightHistory, dietLogs] =
        await Promise.allSettled([
          apiService.getWorkoutHistory(),
          apiService.getWeightHistory(),
          apiService.getDietLogs(),
        ]);

      // Process workout data
      if (workoutHistory.status === "fulfilled") {
        const workouts = workoutHistory.value || [];
        setRecentWorkouts(workouts.slice(0, 5)); // Get last 5 workouts
        setStats((prev) => ({ ...prev, totalWorkouts: workouts.length }));
      }

      // Process weight data
      if (weightHistory.status === "fulfilled") {
        const weights = weightHistory.value || [];
        setWeightProgress(weights.slice(-10)); // Get last 10 weight entries
        if (weights.length > 0) {
          setStats((prev) => ({
            ...prev,
            currentWeight: weights[weights.length - 1].weight_kg,
          }));
        }
      } // Process diet data
      if (dietLogs.status === "fulfilled") {
        const meals = dietLogs.value || [];
        setRecentMeals(meals.slice(0, 5)); // Get last 5 meals

        // Calculate weekly calories
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const weeklyMeals = meals.filter(
          (meal: DietLog) => new Date(meal.date) >= oneWeekAgo
        );
        const weeklyCalories = weeklyMeals.reduce(
          (total: number, meal: DietLog) => total + (meal.calories || 0),
          0
        );
        setStats((prev) => ({ ...prev, weeklyCalories }));
      }

      // Calculate fitness score based on activity
      const totalActivities =
        workoutHistory.status === "fulfilled"
          ? workoutHistory.value?.length || 0
          : 0;
      const recentActivities =
        workoutHistory.status === "fulfilled"
          ? workoutHistory.value?.filter((w: WorkoutHistory) => {
              const workoutDate = new Date(w.date);
              const oneWeekAgo = new Date();
              oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
              return workoutDate >= oneWeekAgo;
            }).length || 0
          : 0;

      const fitnessScore = Math.min(
        100,
        recentActivities * 20 + totalActivities * 2
      );
      setStats((prev) => ({ ...prev, fitnessScore }));
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="animate-pulse space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-800 h-24 rounded-lg"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 h-64 rounded-lg"></div>
            <div className="bg-gray-800 h-64 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Workouts",
      value: stats.totalWorkouts,
      icon: Activity,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      title: "Current Weight",
      value: `${stats.currentWeight} kg`,
      icon: Target,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      title: "Weekly Calories",
      value: stats.weeklyCalories.toLocaleString(),
      icon: Zap,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      title: "Fitness Score",
      value: `${stats.fitnessScore}%`,
      icon: Award,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-red-100">Ready to crush your fitness goals today?</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Workouts */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">
              Recent Workouts
            </h2>
            <Activity className="w-5 h-5 text-red-400" />
          </div>
          <div className="space-y-3">
            {recentWorkouts.length > 0 ? (
              recentWorkouts.map((workout, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
                >
                  <div>
                    <p className="text-white font-medium">{workout.name}</p>
                    <p className="text-gray-400 text-sm">
                      {workout.exercises && workout.exercises.length > 0
                        ? `${workout.exercises.length} exercises`
                        : "No exercises logged"}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm">
                    {new Date(workout.date).toLocaleDateString()}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <Activity className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400">No workouts logged yet</p>
                <p className="text-gray-500 text-sm">
                  Start your fitness journey today!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Weight Progress */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">
              Weight Progress
            </h2>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="space-y-3">
            {weightProgress.length > 0 ? (
              weightProgress.slice(-5).map((entry, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
                >
                  <div>
                    <p className="text-white font-medium">
                      {entry.weight_kg} kg
                    </p>
                    <p className="text-gray-400 text-sm">Weight Entry</p>
                  </div>
                  <span className="text-gray-400 text-sm">
                    {new Date(entry.date).toLocaleDateString()}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <TrendingUp className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400">No weight entries yet</p>
                <p className="text-gray-500 text-sm">Track your progress!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recent Meals */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Recent Meals</h2>
          <Zap className="w-5 h-5 text-orange-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentMeals.length > 0 ? (
            recentMeals.map((meal, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-400 text-sm font-medium capitalize">
                    {meal.meal_name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {meal.calories} cal
                  </span>
                </div>
                <p className="text-white font-medium">{meal.food_items}</p>
                <p className="text-gray-400 text-sm">
                  {new Date(meal.date).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <Zap className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">No meals logged yet</p>
              <p className="text-gray-500 text-sm">
                Start tracking your nutrition!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
