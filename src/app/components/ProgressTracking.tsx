"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Scale, Ruler, Plus, BarChart3 } from "lucide-react";
import apiService from "../Services/apiService";

interface WeightEntry {
  weight_kg: number; // ✅ Weight in kg
  date: string; // ✅ ISO datetime string
}

interface MeasurementEntry {
  id: number;
  waist_cm?: number;
  chest_cm?: number;
  arms_cm?: number;
  hips_cm?: number;
  date: string;
}

interface WeeklyReport {
  user_name: string;
  period: string;
  summary: {
    weight_change_kg: number;
    workouts_completed: number;
    diet_adherence_score: number;
    target_daily_calories: number;
  };
}

export default function ProgressTracking() {
  const [activeSection, setActiveSection] = useState("overview");
  const [weightHistory, setWeightHistory] = useState<WeightEntry[]>([]);
  const [measurementHistory, setMeasurementHistory] = useState<
    MeasurementEntry[]
  >([]);
  const [weeklyReport, setWeeklyReport] = useState<WeeklyReport | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showWeightForm, setShowWeightForm] = useState(false);
  const [showMeasurementForm, setShowMeasurementForm] = useState(false);

  // Weight logging form state
  const [weightForm, setWeightForm] = useState({
    weight_kg: "",
    date: new Date().toISOString().split("T")[0],
  });

  // Measurement logging form state
  const [measurementForm, setMeasurementForm] = useState({
    waist_cm: "",
    chest_cm: "",
    arms_cm: "",
    hips_cm: "",
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    if (activeSection === "weight") {
      loadWeightHistory();
    } else if (activeSection === "measurements") {
      loadMeasurementHistory();
    } else if (activeSection === "reports") {
      loadWeeklyReport();
    }
  }, [activeSection]);

  const loadWeightHistory = async () => {
    try {
      setIsLoading(true);
      const history = await apiService.getWeightHistory();
      setWeightHistory(history);
    } catch (error) {
      console.error("Error loading weight history:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMeasurementHistory = async () => {
    try {
      setIsLoading(true);
      const history = await apiService.getMeasurementHistory();
      setMeasurementHistory(history);
    } catch (error) {
      console.error("Error loading measurement history:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadWeeklyReport = async () => {
    try {
      setIsLoading(true);
      const report = await apiService.getWeeklyReport();
      setWeeklyReport(report);
    } catch (error) {
      console.error("Error loading weekly report:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogWeight = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const weightData = {
        weight_kg: parseFloat(weightForm.weight_kg),
        date: weightForm.date,
      };

      await apiService.logWeight(weightData);
      setShowWeightForm(false);
      setWeightForm({
        weight_kg: "",
        date: new Date().toISOString().split("T")[0],
      });

      if (activeSection === "weight") {
        loadWeightHistory();
      }
    } catch (error) {
      console.error("Error logging weight:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogMeasurements = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const measurementData = {
        waist_cm: measurementForm.waist_cm
          ? parseFloat(measurementForm.waist_cm)
          : undefined,
        chest_cm: measurementForm.chest_cm
          ? parseFloat(measurementForm.chest_cm)
          : undefined,
        arms_cm: measurementForm.arms_cm
          ? parseFloat(measurementForm.arms_cm)
          : undefined,
        hips_cm: measurementForm.hips_cm
          ? parseFloat(measurementForm.hips_cm)
          : undefined,
        date: measurementForm.date,
      };

      await apiService.logMeasurements(measurementData);
      setShowMeasurementForm(false);
      setMeasurementForm({
        waist_cm: "",
        chest_cm: "",
        arms_cm: "",
        hips_cm: "",
        date: new Date().toISOString().split("T")[0],
      });

      // Reload measurement history if we're on the measurements section
      if (activeSection === "measurements") {
        loadMeasurementHistory();
      }
    } catch (error) {
      console.error("Error logging measurements:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const sections = [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "weight", label: "Weight Tracking", icon: Scale },
    { id: "measurements", label: "Body Measurements", icon: Ruler },
    { id: "reports", label: "Weekly Reports", icon: BarChart3 },
  ];

  const getWeightTrend = () => {
    if (weightHistory.length < 2) return null;
    const latest = weightHistory[0];
    const previous = weightHistory[1];
    const change = latest.weight_kg - previous.weight_kg;
    return {
      change: Math.abs(change),
      direction: change > 0 ? "increased" : "decreased",
      isPositive: change < 0, // Weight loss is typically positive
    };
  };

  const renderOverview = () => {
    const trend = getWeightTrend();

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Quick Actions Card */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button
              onClick={() => setShowWeightForm(true)}
              className="w-full flex items-center justify-center space-x-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Log Weight</span>
            </button>
            <button
              onClick={() => setShowMeasurementForm(true)}
              className="w-full flex items-center justify-center space-x-2 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Log Measurements</span>
            </button>
          </div>
        </div>

        {/* Current Weight Card */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <Scale className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Current Weight</h3>
          </div>
          {weightHistory.length > 0 ? (
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {weightHistory[0].weight_kg} kg
              </p>
              {trend && (
                <p
                  className={`text-sm ${
                    trend.isPositive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {trend.direction} by {trend.change.toFixed(1)}kg
                </p>
              )}
            </div>
          ) : (
            <p className="text-gray-400">No weight data available</p>
          )}
          <button
            onClick={() => setActiveSection("weight")}
            className="mt-4 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            View History →
          </button>
        </div>

        {/* Progress Reports Card */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <BarChart3 className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-semibold text-white">
              Progress Reports
            </h3>
          </div>
          <p className="text-gray-400 mb-4">
            Weekly progress analysis and insights
          </p>
          <button
            onClick={() => setActiveSection("reports")}
            className="text-green-400 hover:text-green-300 transition-colors text-sm"
          >
            View Reports →
          </button>
        </div>
      </div>
    );
  };

  const renderWeightTracking = () => (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h3 className="text-xl font-semibold text-white">Weight History</h3>
        <button
          onClick={() => setShowWeightForm(true)}
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors w-full sm:w-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Log Weight</span>
        </button>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading weight history...</p>
        </div>
      ) : weightHistory.length > 0 ? (
        <div className="grid gap-3 sm:gap-4">
          {weightHistory.map((entry, index) => {
            const previous = weightHistory[index + 1];
            const change = previous ? entry.weight_kg - previous.weight_kg : 0;

            return (
              <div
                key={`${entry.weight_kg}-${entry.date}-${index}`}
                className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div className="flex-1">
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {entry.weight_kg} kg
                    </p>
                    {previous && (
                      <p
                        className={`text-sm ${
                          change < 0
                            ? "text-green-400"
                            : change > 0
                            ? "text-red-400"
                            : "text-gray-400"
                        }`}
                      >
                        {change > 0 ? "+" : ""}
                        {change.toFixed(1)}kg from previous
                      </p>
                    )}
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-gray-300 text-sm font-medium">
                      {new Date(entry.date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {new Date(entry.date).toLocaleDateString("en-US", {
                        weekday: "long",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <Scale className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-2">No weight data available</p>
          <p className="text-gray-500 text-sm">
            Start tracking your weight to see progress
          </p>
        </div>
      )}
    </div>
  );

  const renderMeasurements = () => (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h3 className="text-xl font-semibold text-white">Body Measurements</h3>
        <button
          onClick={() => setShowMeasurementForm(true)}
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors w-full sm:w-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Log Measurements</span>
        </button>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading measurement history...</p>
        </div>
      ) : measurementHistory.length > 0 ? (
        <div className="grid gap-3 sm:gap-4">
          {measurementHistory.map((entry, index) => {
            return (
              <div
                key={entry.id}
                className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <h4 className="text-lg font-semibold text-white">
                    {new Date(entry.date).toLocaleDateString()}
                  </h4>
                  <span className="text-sm text-gray-400">
                    {index === 0 ? "Latest" : `${index + 1} entries ago`}
                  </span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {entry.waist_cm && (
                    <div className="bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-400 mb-1">
                        Waist
                      </p>
                      <p className="text-lg sm:text-xl font-semibold text-white">
                        {entry.waist_cm} cm
                      </p>
                    </div>
                  )}
                  {entry.chest_cm && (
                    <div className="bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-400 mb-1">
                        Chest
                      </p>
                      <p className="text-lg sm:text-xl font-semibold text-white">
                        {entry.chest_cm} cm
                      </p>
                    </div>
                  )}
                  {entry.arms_cm && (
                    <div className="bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-400 mb-1">
                        Arms
                      </p>
                      <p className="text-lg sm:text-xl font-semibold text-white">
                        {entry.arms_cm} cm
                      </p>
                    </div>
                  )}
                  {entry.hips_cm && (
                    <div className="bg-gray-700 p-3 sm:p-4 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-400 mb-1">
                        Hips
                      </p>
                      <p className="text-lg sm:text-xl font-semibold text-white">
                        {entry.hips_cm} cm
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <Ruler className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-2">
            No measurement history yet
          </p>
          <p className="text-gray-500 text-sm">
            Start tracking your body measurements to see progress over time
          </p>
        </div>
      )}
    </div>
  );

  const renderReports = () => (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-xl font-semibold text-white">
        Weekly Progress Reports
      </h3>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading weekly report...</p>
        </div>
      ) : weeklyReport ? (
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
            {/* Report Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
              <h4 className="text-lg font-semibold text-white">
                Weekly Summary for {weeklyReport.user_name}
              </h4>
              <span className="text-sm text-gray-400">
                {weeklyReport.period}
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Weight Change */}
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <Scale className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-400">Weight Change</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {weeklyReport.summary.weight_change_kg >= 0 ? "+" : ""}
                  {weeklyReport.summary.weight_change_kg}kg
                </div>
                <span
                  className={`text-xs ${
                    weeklyReport.summary.weight_change_kg < 0
                      ? "text-green-400"
                      : weeklyReport.summary.weight_change_kg > 0
                      ? "text-red-400"
                      : "text-gray-400"
                  }`}
                >
                  {weeklyReport.summary.weight_change_kg < 0
                    ? "Lost"
                    : weeklyReport.summary.weight_change_kg > 0
                    ? "Gained"
                    : "No change"}
                </span>
              </div>

              {/* Workouts */}
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400">Workouts</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {weeklyReport.summary.workouts_completed}
                </div>
                <span className="text-xs text-gray-400">
                  completed this week
                </span>
              </div>

              {/* Diet Adherence */}
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <BarChart3 className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-400">Diet Adherence</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {weeklyReport.summary.diet_adherence_score.toFixed(1)}%
                </div>
                <span
                  className={`text-xs ${
                    weeklyReport.summary.diet_adherence_score >= 80
                      ? "text-green-400"
                      : weeklyReport.summary.diet_adherence_score >= 60
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {weeklyReport.summary.diet_adherence_score >= 80
                    ? "Excellent"
                    : weeklyReport.summary.diet_adherence_score >= 60
                    ? "Good"
                    : "Needs improvement"}
                </span>
              </div>

              {/* Target Calories */}
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <Ruler className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-gray-400">Target Calories</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {weeklyReport.summary.target_daily_calories}
                </div>
                <span className="text-xs text-gray-400">calories per day</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 text-lg mb-2">No report data available</p>
          <p className="text-gray-500 text-sm">
            Reports are generated based on your tracked data
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
          <TrendingUp className="w-8 h-8 text-blue-400" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Progress Tracking
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
                      ? "bg-blue-600 text-white"
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
          {activeSection === "weight" && renderWeightTracking()}
          {activeSection === "measurements" && renderMeasurements()}
          {activeSection === "reports" && renderReports()}
        </div>
      </div>

      {/* Weight Logging Modal */}
      {showWeightForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg w-full max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Log Weight
            </h3>
            <form onSubmit={handleLogWeight} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={weightForm.weight_kg}
                  onChange={(e) =>
                    setWeightForm({ ...weightForm, weight_kg: e.target.value })
                  }
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your weight"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Date</label>
                <input
                  type="date"
                  value={weightForm.date}
                  onChange={(e) =>
                    setWeightForm({ ...weightForm, date: e.target.value })
                  }
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowWeightForm(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 order-1 sm:order-2"
                >
                  {isLoading ? "Logging..." : "Log Weight"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Measurement Logging Modal */}
      {showMeasurementForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg w-full max-w-lg mx-auto max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Log Body Measurements
            </h3>
            <form onSubmit={handleLogMeasurements} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Waist (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={measurementForm.waist_cm}
                    onChange={(e) =>
                      setMeasurementForm({
                        ...measurementForm,
                        waist_cm: e.target.value,
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    placeholder="Waist measurement"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Chest (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={measurementForm.chest_cm}
                    onChange={(e) =>
                      setMeasurementForm({
                        ...measurementForm,
                        chest_cm: e.target.value,
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    placeholder="Chest measurement"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Arms (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={measurementForm.arms_cm}
                    onChange={(e) =>
                      setMeasurementForm({
                        ...measurementForm,
                        arms_cm: e.target.value,
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    placeholder="Arms measurement"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Hips (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={measurementForm.hips_cm}
                    onChange={(e) =>
                      setMeasurementForm({
                        ...measurementForm,
                        hips_cm: e.target.value,
                      })
                    }
                    className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    placeholder="Hips measurement"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Date</label>
                <input
                  type="date"
                  value={measurementForm.date}
                  onChange={(e) =>
                    setMeasurementForm({
                      ...measurementForm,
                      date: e.target.value,
                    })
                  }
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowMeasurementForm(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors disabled:opacity-50 order-1 sm:order-2"
                >
                  {isLoading ? "Logging..." : "Log Measurements"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
