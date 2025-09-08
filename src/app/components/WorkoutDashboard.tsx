"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Activity,
  Calendar,
  Target,
  Clock,
  Weight,
  RotateCcw,
} from "lucide-react";
import apiService from "../services/apiService";

interface WorkoutEntry {
  id: number;
  exercise_name: string;
  sets: number;
  reps: number;
  weight?: number;
  duration?: number;
  date: string;
}

interface WorkoutPlan {
  id: number;
  plan_name: string;
  plan_details: string;
  created_at: string;
}

export default function WorkoutDashboard() {
  const [workoutHistory, setWorkoutHistory] = useState<WorkoutEntry[]>([]);
  const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingWorkout, setIsLoggingWorkout] = useState(false);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);
  const [showLogForm, setShowLogForm] = useState(false);
  const [showPlanForm, setShowPlanForm] = useState(false);

  const [workoutForm, setWorkoutForm] = useState({
    exercise_name: "",
    sets: "",
    reps: "",
    weight: "",
    duration: "",
  });

  const [planForm, setPlanForm] = useState({
    goal: "muscle_gain",
    fitness_level: "intermediate",
    equipment: "gym",
    days_per_week: "4",
  });

  useEffect(() => {
    loadWorkoutData();
  }, []);

  const loadWorkoutData = async () => {
    try {
      setIsLoading(true);
      const history = await apiService.getWorkoutHistory();
      setWorkoutHistory(history || []);
    } catch (error) {
      console.error("Error loading workout data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogWorkout = async () => {
    if (!workoutForm.exercise_name || !workoutForm.sets || !workoutForm.reps) {
      return;
    }

    try {
      setIsLoggingWorkout(true);

      const workoutData = {
        exercise_name: workoutForm.exercise_name,
        sets: parseInt(workoutForm.sets),
        reps: parseInt(workoutForm.reps),
        weight: workoutForm.weight ? parseFloat(workoutForm.weight) : undefined,
        duration: workoutForm.duration
          ? parseInt(workoutForm.duration)
          : undefined,
      };

      await apiService.logWorkout(workoutData);

      // Reset form and reload data
      setWorkoutForm({
        exercise_name: "",
        sets: "",
        reps: "",
        weight: "",
        duration: "",
      });
      setShowLogForm(false);
      await loadWorkoutData();
    } catch (error) {
      console.error("Error logging workout:", error);
    } finally {
      setIsLoggingWorkout(false);
    }
  };

  const handleGeneratePlan = async () => {
    try {
      setIsGeneratingPlan(true);

      const planData = {
        goal: planForm.goal,
        fitness_level: planForm.fitness_level,
        equipment: planForm.equipment,
        days_per_week: parseInt(planForm.days_per_week),
      };

      await apiService.generateWorkoutPlan(planData);

      setShowPlanForm(false);
      // Could add generated plans to a separate state if needed
    } catch (error) {
      console.error("Error generating workout plan:", error);
    } finally {
      setIsGeneratingPlan(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setWorkoutForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlanInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPlanForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-6">
          <div className="bg-gray-800 h-32 rounded-lg"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 h-64 rounded-lg"></div>
            <div className="bg-gray-800 h-64 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Workout Dashboard</h1>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowLogForm(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Log Workout</span>
          </button>
          <button
            onClick={() => setShowPlanForm(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Target className="w-4 h-4" />
            <span>Generate Plan</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Workouts</p>
              <p className="text-2xl font-bold text-white">
                {workoutHistory.length}
              </p>
            </div>
            <Activity className="w-8 h-8 text-red-400" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">This Week</p>
              <p className="text-2xl font-bold text-white">
                {
                  workoutHistory.filter((w) => {
                    const workoutDate = new Date(w.date);
                    const oneWeekAgo = new Date();
                    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                    return workoutDate >= oneWeekAgo;
                  }).length
                }
              </p>
            </div>
            <Calendar className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Average Sets</p>
              <p className="text-2xl font-bold text-white">
                {workoutHistory.length > 0
                  ? Math.round(
                      workoutHistory.reduce((acc, w) => acc + w.sets, 0) /
                        workoutHistory.length
                    )
                  : 0}
              </p>
            </div>
            <RotateCcw className="w-8 h-8 text-blue-400" />
          </div>
        </div>
      </div>

      {/* Workout History */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-4">
          Recent Workouts
        </h2>
        <div className="space-y-3">
          {workoutHistory.length > 0 ? (
            workoutHistory.slice(0, 10).map((workout, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {workout.exercise_name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {workout.sets} sets × {workout.reps} reps
                      {workout.weight && ` @ ${workout.weight}kg`}
                      {workout.duration && ` • ${workout.duration} min`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">
                    {new Date(workout.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(workout.date).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <Activity className="w-12 h-12 text-gray-600 mx-auto mb-3" />
              <p className="text-gray-400">No workouts logged yet</p>
              <p className="text-gray-500 text-sm">
                Start tracking your exercises!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Log Workout Modal */}
      {showLogForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-white mb-4">
              Log Workout
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">
                  Exercise Name
                </label>
                <input
                  type="text"
                  name="exercise_name"
                  value={workoutForm.exercise_name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                  placeholder="e.g., Bench Press"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Sets
                  </label>
                  <input
                    type="number"
                    name="sets"
                    value={workoutForm.sets}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="3"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Reps
                  </label>
                  <input
                    type="number"
                    name="reps"
                    value={workoutForm.reps}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="10"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={workoutForm.weight}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="80"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">
                    Duration (min)
                  </label>
                  <input
                    type="number"
                    name="duration"
                    value={workoutForm.duration}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                    placeholder="45"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowLogForm(false)}
                className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogWorkout}
                disabled={isLoggingWorkout}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center justify-center"
              >
                {isLoggingWorkout ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  "Log Workout"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Generate Plan Modal */}
      {showPlanForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-white mb-4">
              Generate Workout Plan
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">Goal</label>
                <select
                  name="goal"
                  value={planForm.goal}
                  onChange={handlePlanInputChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                >
                  <option value="muscle_gain">Muscle Gain</option>
                  <option value="weight_loss">Weight Loss</option>
                  <option value="strength">Strength</option>
                  <option value="endurance">Endurance</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">
                  Fitness Level
                </label>
                <select
                  name="fitness_level"
                  value={planForm.fitness_level}
                  onChange={handlePlanInputChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">
                  Equipment
                </label>
                <select
                  name="equipment"
                  value={planForm.equipment}
                  onChange={handlePlanInputChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                >
                  <option value="gym">Full Gym</option>
                  <option value="home">Home Equipment</option>
                  <option value="bodyweight">Bodyweight Only</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">
                  Days per Week
                </label>
                <select
                  name="days_per_week"
                  value={planForm.days_per_week}
                  onChange={handlePlanInputChange}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500"
                >
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5">5 Days</option>
                  <option value="6">6 Days</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowPlanForm(false)}
                className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleGeneratePlan}
                disabled={isGeneratingPlan}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center justify-center"
              >
                {isGeneratingPlan ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  "Generate Plan"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
