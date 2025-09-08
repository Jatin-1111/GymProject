"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dumbbell,
  Plus,
  Calendar,
  Target,
  TrendingUp,
  Play,
  Pause,
  RotateCcw,
  X,
  Zap,
} from "lucide-react";
import apiService from "../Services/apiService";

interface WorkoutLog {
  name: string; // ✅ Workout session name
  date: string; // ✅ ISO datetime string
  exercises: WorkoutExercise[]; // ✅ Array of exercises
}

interface WorkoutExercise {
  name: string; // ✅ Exercise name
  sets: number; // ✅ Number of sets
  reps: number; // ✅ Reps per set
  weight: number; // ✅ Weight in kg
}

interface WorkoutPlan {
  created_at: string; // ✅ ISO datetime string
  generated_plan: {
    // ✅ AI-generated plan
    plan_name: string;
    weekly_schedule: {
      [day: string]: {
        day_type: string;
        exercises?: PlanExercise[];
      };
    };
  };
}

interface PlanExercise {
  name: string; // ✅ Exercise name
  sets: number; // ✅ Number of sets
  reps: number; // ✅ Reps per set
  rest_seconds: number; // ✅ Rest time in seconds
  form_guidance: string; // ✅ Form tips
}

export default function WorkoutManagement() {
  const [activeSection, setActiveSection] = useState("overview");
  const [workoutLogs, setWorkoutLogs] = useState<WorkoutLog[]>([]);
  const [latestWorkoutPlan, setLatestWorkoutPlan] =
    useState<WorkoutPlan | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogForm, setShowLogForm] = useState(false);
  const [showPlanGenerator, setShowPlanGenerator] = useState(false);

  // Workout logging form state
  const [logForm, setLogForm] = useState({
    exercise_name: "",
    sets: "",
    reps: "",
    weight_kg: "",
    duration_minutes: "",
    notes: "",
    date: new Date().toISOString().split("T")[0],
  });

  // Plan generation form state
  const [planForm, setPlanForm] = useState({
    fitness_goal: "",
    workout_type: "",
    difficulty_level: "intermediate",
    available_equipment: "",
    time_per_workout: "",
    sessions_per_week: "",
  });

  // Timer state for active workout
  const [timer, setTimer] = useState({
    isActive: false,
    time: 0,
    isResting: false,
  });

  useEffect(() => {
    if (activeSection === "logs") {
      loadWorkoutLogs();
    } else if (activeSection === "plans") {
      loadLatestWorkoutPlan();
    }
  }, [activeSection]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timer.isActive) {
      interval = setInterval(() => {
        setTimer((prev) => ({ ...prev, time: prev.time + 1 }));
      }, 1000);
    } else if (!timer.isActive && timer.time !== 0) {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer.isActive, timer.time]);

  const loadWorkoutLogs = async () => {
    try {
      setIsLoading(true);
      const logs = await apiService.getWorkoutHistory();
      setWorkoutLogs(logs);
    } catch (error) {
      console.error("Error loading workout logs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadLatestWorkoutPlan = async () => {
    try {
      const plan = await apiService.getLatestWorkoutPlan();
      setLatestWorkoutPlan(plan);
    } catch (error) {
      console.error("Error loading latest workout plan:", error);
    }
  };

  const handleLogWorkout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      // Format data to match backend schema
      const workoutData = {
        name: logForm.exercise_name, // Backend expects 'name' field
        exercises: [
          {
            name: logForm.exercise_name,
            sets: parseInt(logForm.sets),
            reps: parseInt(logForm.reps),
            weight: logForm.weight_kg ? parseFloat(logForm.weight_kg) : 0, // Backend expects 'weight' not 'weight_kg'
          },
        ],
      };

      await apiService.logWorkout(workoutData);
      setShowLogForm(false);
      setLogForm({
        exercise_name: "",
        sets: "",
        reps: "",
        weight_kg: "",
        duration_minutes: "",
        notes: "",
        date: new Date().toISOString().split("T")[0],
      });

      if (activeSection === "logs") {
        loadWorkoutLogs();
      }
    } catch (error) {
      console.error("Error logging workout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGeneratePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      // Send only what backend expects
      const backendData = {
        fitnessLevel: planForm.difficulty_level,
        equipment: planForm.available_equipment,
      };

      console.log("Sending plan generation request with data:", backendData);
      const plan = await apiService.generateWorkoutPlan(backendData);
      console.log("Generated workout plan:", plan);

      setShowPlanGenerator(false);
      setPlanForm({
        fitness_goal: "",
        workout_type: "",
        difficulty_level: "intermediate",
        available_equipment: "",
        time_per_workout: "",
        sessions_per_week: "",
      });

      // Show success message
      alert("Workout plan generated successfully!");

      // Refresh the latest workout plan
      await loadLatestWorkoutPlan();
    } catch (error) {
      console.error("Error generating workout plan:", error);

      // Show user-friendly error message
      let errorMessage = "Failed to generate workout plan. ";
      const errorString =
        error instanceof Error ? error.message : String(error);

      if (errorString.includes("Invalid input")) {
        errorMessage += "Please check your form inputs and try again.";
      } else if (errorString.includes("401")) {
        errorMessage += "Please log in again.";
      } else if (errorString.includes("500")) {
        errorMessage += "Server error. Please try again later.";
      } else {
        errorMessage +=
          "Please try again or contact support if the issue persists.";
      }

      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const startTimer = () => setTimer((prev) => ({ ...prev, isActive: true }));
  const pauseTimer = () => setTimer((prev) => ({ ...prev, isActive: false }));
  const resetTimer = () =>
    setTimer({ isActive: false, time: 0, isResting: false });

  const sections = [
    {
      id: "overview",
      label: "Overview",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "active",
      label: "Live Workout",
      icon: Play,
      color: "from-green-500 to-green-600",
    },
    {
      id: "logs",
      label: "Workout History",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "plans",
      label: "Training Plans",
      icon: Target,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const renderOverview = () => {
    const recentWorkouts = workoutLogs.slice(0, 3);

    return (
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Quick Actions Card */}
        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-600/30 shadow-xl backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50" />

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Quick Actions
              </h3>
            </div>

            <div className="space-y-3">
              <motion.button
                onClick={() => setShowLogForm(true)}
                className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 group shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="w-5 h-5" />
                </motion.div>
                <span className="font-medium">Log Workout</span>
              </motion.button>

              <motion.button
                onClick={() => setShowPlanGenerator(true)}
                className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl transition-all duration-300 group shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Target className="w-5 h-5" />
                </motion.div>
                <span className="font-medium">Generate Plan</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Recent Workouts Card */}
        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-600/30 shadow-xl backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-50" />

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <Dumbbell className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Recent Workouts
              </h3>
            </div>

            {recentWorkouts.length > 0 ? (
              <div className="space-y-3">
                {recentWorkouts.map((workout, index) => (
                  <motion.div
                    key={`${workout.name}-${workout.date}-${index}`}
                    className="p-4 bg-gray-700/50 rounded-lg border border-gray-600/30 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <p className="text-white font-medium">{workout.name}</p>
                    <div className="text-gray-400 text-sm space-y-1">
                      {workout.exercises.slice(0, 2).map((exercise, idx) => (
                        <div key={idx}>
                          {exercise.name}: {exercise.sets} sets ×{" "}
                          {exercise.reps} reps
                          {exercise.weight > 0 && ` @ ${exercise.weight}kg`}
                        </div>
                      ))}
                      {workout.exercises.length > 2 && (
                        <div className="text-gray-500">
                          +{workout.exercises.length - 2} more exercises
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.p
                className="text-gray-400 text-center py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                No workouts logged yet
              </motion.p>
            )}

            <motion.button
              onClick={() => setActiveSection("logs")}
              className="mt-4 text-orange-400 hover:text-orange-300 transition-colors font-medium group"
              whileHover={{ x: 5 }}
            >
              View All Logs
              <motion.span
                className="inline-block ml-1"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* Workout Plans Card */}
        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-600/30 shadow-xl backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-50" />

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Target className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Workout Plans
              </h3>
            </div>

            <motion.p
              className="text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              AI-generated personalized workout plans
            </motion.p>

            <motion.button
              onClick={() => setActiveSection("plans")}
              className="text-green-400 hover:text-green-300 transition-colors font-medium group"
              whileHover={{ x: 5 }}
            >
              View Plans
              <motion.span
                className="inline-block ml-1"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const renderActiveWorkout = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">Workout Timer</h3>

        <div className="text-center mb-6">
          <div className="text-6xl font-mono text-white mb-4">
            {formatTime(timer.time)}
          </div>
          <div className="flex justify-center space-x-4">
            {!timer.isActive ? (
              <button
                onClick={startTimer}
                className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <Play className="w-5 h-5" />
                <span>Start</span>
              </button>
            ) : (
              <button
                onClick={pauseTimer}
                className="flex items-center space-x-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
              >
                <Pause className="w-5 h-5" />
                <span>Pause</span>
              </button>
            )}
            <button
              onClick={resetTimer}
              className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setShowLogForm(true)}
            className="flex items-center justify-center space-x-2 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Log Exercise</span>
          </button>
          <button
            onClick={() => setActiveSection("plans")}
            className="flex items-center justify-center space-x-2 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <Target className="w-5 h-5" />
            <span>View Plans</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderWorkoutLogs = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">Workout History</h3>
        <button
          onClick={() => setShowLogForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Log Workout</span>
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="text-gray-400 mt-2">Loading workout logs...</p>
        </div>
      ) : workoutLogs.length > 0 ? (
        <div className="grid gap-4">
          {workoutLogs.map((log, index) => (
            <div
              key={`${log.name}-${log.date}-${index}`}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white">
                    {log.name}
                  </h4>
                  <div className="space-y-2 mt-2">
                    {log.exercises.map((exercise, exerciseIndex) => (
                      <div
                        key={exerciseIndex}
                        className="bg-gray-700 p-3 rounded-lg"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">
                            {exercise.name}
                          </span>
                          <div className="text-gray-400 text-sm">
                            <span>
                              {exercise.sets} sets × {exercise.reps} reps
                            </span>
                            {exercise.weight > 0 && (
                              <span className="ml-2">{exercise.weight}kg</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">
                    {new Date(log.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <Dumbbell className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">No workouts logged yet</p>
          <p className="text-gray-500 text-sm">
            Start tracking your workouts to see progress
          </p>
        </div>
      )}
    </div>
  );

  const renderWorkoutPlans = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">Workout Plans</h3>
        <button
          onClick={() => setShowPlanGenerator(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          <Target className="w-4 h-4" />
          <span>Generate Plan</span>
        </button>
      </div>

      {latestWorkoutPlan ? (
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold text-white">
              {latestWorkoutPlan.generated_plan?.plan_name ||
                "Latest Workout Plan"}
            </h4>
            <span className="text-sm text-gray-400">
              Created:{" "}
              {new Date(latestWorkoutPlan.created_at).toLocaleDateString()}
            </span>
          </div>

          {latestWorkoutPlan.generated_plan?.weekly_schedule && (
            <div className="space-y-4">
              <h5 className="text-md font-medium text-white">
                Weekly Schedule:
              </h5>
              {Object.entries(
                latestWorkoutPlan.generated_plan.weekly_schedule
              ).map(([day, dayData]) => (
                <div key={day} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h6 className="font-medium text-white">{day}</h6>
                    <span className="text-sm text-gray-400">
                      {dayData.day_type}
                    </span>
                  </div>

                  {dayData.exercises && dayData.exercises.length > 0 && (
                    <div className="space-y-2 mt-3">
                      {dayData.exercises.map((exercise, index) => (
                        <div key={index} className="bg-gray-600 rounded p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-white text-sm font-medium">
                              {exercise.name}
                            </span>
                            <div className="text-xs text-gray-300">
                              {exercise.sets} sets × {exercise.reps} reps
                              <span className="ml-2 text-gray-400">
                                Rest: {exercise.rest_seconds}s
                              </span>
                            </div>
                          </div>
                          {exercise.form_guidance && (
                            <p className="text-xs text-gray-400 mt-1">
                              💡 {exercise.form_guidance}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8">
          <Target className="w-12 h-12 text-gray-600 mx-auto mb-3" />
          <p className="text-gray-400">No workout plan found</p>
          <p className="text-gray-500 text-sm">
            Generate your first workout plan to get started
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
          <Dumbbell className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Workout Management
          </h1>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-left">
          <div className="inline-flex flex-wrap gap-2 bg-gray-800 p-2 rounded-lg">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-md transition-colors flex-shrink-0 ${
                    activeSection === section.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
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
        <motion.div
          className="min-h-96"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          key={activeSection}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === "overview" && renderOverview()}
              {activeSection === "active" && renderActiveWorkout()}
              {activeSection === "logs" && renderWorkoutLogs()}
              {activeSection === "plans" && renderWorkoutPlans()}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Workout Logging Modal */}
        <AnimatePresence>
          {showLogForm && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowLogForm(false)}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl w-full max-w-md max-h-screen overflow-y-auto border border-gray-600/30 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    Log Workout
                  </h3>
                  <motion.button
                    onClick={() => setShowLogForm(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                <form onSubmit={handleLogWorkout} className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Exercise Name
                    </label>
                    <input
                      type="text"
                      value={logForm.exercise_name}
                      onChange={(e) =>
                        setLogForm({
                          ...logForm,
                          exercise_name: e.target.value,
                        })
                      }
                      className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                      required
                      placeholder="e.g., Bench Press, Squats"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Sets
                      </label>
                      <input
                        type="number"
                        value={logForm.sets}
                        onChange={(e) =>
                          setLogForm({ ...logForm, sets: e.target.value })
                        }
                        className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Reps
                      </label>
                      <input
                        type="number"
                        value={logForm.reps}
                        onChange={(e) =>
                          setLogForm({ ...logForm, reps: e.target.value })
                        }
                        className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                        required
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
                        step="0.5"
                        value={logForm.weight_kg}
                        onChange={(e) =>
                          setLogForm({ ...logForm, weight_kg: e.target.value })
                        }
                        className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                        placeholder="Optional"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Duration (min)
                      </label>
                      <input
                        type="number"
                        value={logForm.duration_minutes}
                        onChange={(e) =>
                          setLogForm({
                            ...logForm,
                            duration_minutes: e.target.value,
                          })
                        }
                        className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Notes
                    </label>
                    <textarea
                      value={logForm.notes}
                      onChange={(e) =>
                        setLogForm({ ...logForm, notes: e.target.value })
                      }
                      className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 h-20"
                      placeholder="Optional notes about the workout"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={logForm.date}
                      onChange={(e) =>
                        setLogForm({ ...logForm, date: e.target.value })
                      }
                      className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <motion.button
                      type="button"
                      onClick={() => setShowLogForm(false)}
                      className="px-4 py-2 text-gray-400 hover:text-white transition-colors rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 disabled:opacity-50 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isLoading ? "Logging..." : "Log Workout"}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Plan Generation Modal */}
        <AnimatePresence>
          {showPlanGenerator && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowPlanGenerator(false)}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl w-full max-w-md max-h-screen overflow-y-auto border border-gray-600/30 shadow-2xl"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    Generate Workout Plan
                  </h3>
                  <motion.button
                    onClick={() => setShowPlanGenerator(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                <form onSubmit={handleGeneratePlan} className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Fitness Goal
                    </label>
                    <input
                      type="text"
                      value={planForm.fitness_goal}
                      onChange={(e) =>
                        setPlanForm({
                          ...planForm,
                          fitness_goal: e.target.value,
                        })
                      }
                      className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                      required
                      placeholder="e.g., Build muscle, Lose weight, Improve endurance"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Workout Type
                    </label>
                    <select
                      value={planForm.workout_type}
                      onChange={(e) =>
                        setPlanForm({
                          ...planForm,
                          workout_type: e.target.value,
                        })
                      }
                      className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                      required
                    >
                      <option value="">Select Workout Type</option>
                      <option value="Strength training">
                        Strength Training
                      </option>
                      <option value="Cardio">Cardio</option>
                      <option value="HIIT">HIIT (High Intensity)</option>
                      <option value="Mixed">Mixed (Strength + Cardio)</option>
                      <option value="Bodybuilding">Bodybuilding</option>
                      <option value="Powerlifting">Powerlifting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Difficulty Level
                    </label>
                    <select
                      value={planForm.difficulty_level}
                      onChange={(e) =>
                        setPlanForm({
                          ...planForm,
                          difficulty_level: e.target.value,
                        })
                      }
                      className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                      required
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-1">
                      Available Equipment
                    </label>
                    <select
                      value={planForm.available_equipment}
                      onChange={(e) =>
                        setPlanForm({
                          ...planForm,
                          available_equipment: e.target.value,
                        })
                      }
                      className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                      required
                    >
                      <option value="">Select Equipment Type</option>
                      <option value="bodyweight only">Bodyweight Only</option>
                      <option value="Home gym">Home Gym</option>
                      <option value="Gym access">Gym Access</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Time per Workout
                      </label>
                      <select
                        value={planForm.time_per_workout}
                        onChange={(e) =>
                          setPlanForm({
                            ...planForm,
                            time_per_workout: e.target.value,
                          })
                        }
                        className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                        required
                      >
                        <option value="">Select Duration</option>
                        <option value="30">30 minutes</option>
                        <option value="45">45 minutes</option>
                        <option value="60">60 minutes</option>
                        <option value="90">90 minutes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Sessions per Week
                      </label>
                      <select
                        value={planForm.sessions_per_week}
                        onChange={(e) =>
                          setPlanForm({
                            ...planForm,
                            sessions_per_week: e.target.value,
                          })
                        }
                        className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                        required
                      >
                        <option value="">Select Frequency</option>
                        <option value="2">2 sessions</option>
                        <option value="3">3 sessions</option>
                        <option value="4">4 sessions</option>
                        <option value="5">5 sessions</option>
                        <option value="6">6 sessions</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <motion.button
                      type="button"
                      onClick={() => setShowPlanGenerator(false)}
                      className="px-4 py-2 text-gray-400 hover:text-white transition-colors rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg transition-all duration-200 disabled:opacity-50 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isLoading ? "Generating..." : "Generate Plan"}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
