"use client";

import { useState, useEffect } from "react";
import {
  Award,
  Trophy,
  Star,
  TrendingUp,
  Calendar,
  Target,
  CheckCircle,
} from "lucide-react";
import apiService from "../services/apiService";

interface Achievement {
  id: number;
  name: string;
  title?: string;
  description: string;
  icon?: string;
  unlocked?: boolean;
  progress?: number;
  target?: number;
  category?: string;
  unlocked_at?: string;
  user_id?: number;
  client_id?: number;
}

interface StatusMetrics {
  totalWorkouts: number;
  streakDays: number;
  weightLost: number;
  achievements: number;
  level: number;
  nextLevelProgress: number;
}

export default function RewardsSection() {
  const [activeSection, setActiveSection] = useState("overview");
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [metrics, setMetrics] = useState<StatusMetrics>({
    totalWorkouts: 0,
    streakDays: 0,
    weightLost: 0,
    achievements: 0,
    level: 1,
    nextLevelProgress: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        await Promise.all([loadAchievements(), loadMetrics()]);
      } catch (error) {
        console.error("Error loading rewards data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadAchievements = async () => {
    try {
      const rewardData = await apiService.getRewardStatus();
      if (rewardData.all_achievements) {
        // Transform backend achievements to include UI properties
        const transformedAchievements = rewardData.all_achievements.map(
          (achievement: Achievement) => ({
            ...achievement,
            title: achievement.name,
            unlocked: !!achievement.unlocked_at,
            icon: getAchievementIcon(achievement.name),
            category: getAchievementCategory(achievement.name),
            progress: achievement.unlocked_at ? 1 : 0,
            target: 1,
          })
        );
        setAchievements(transformedAchievements);
      } else {
        // Fallback to empty array if no achievements
        setAchievements([]);
      }
    } catch (error) {
      console.error("Error loading achievements:", error);
      // Set empty achievements array on error
      setAchievements([]);
    }
  };

  const getAchievementIcon = (name: string) => {
    const iconMap: Record<string, string> = {
      "First Steps": "🏃",
      "Cheat Meal Unlocked": "🍔",
      "5% Weight Loss Milestone": "⚖️",
      "Week Warrior": "🔥",
      "Century Club": "💯",
      "Weight Warrior": "⚖️",
      "Nutrition Ninja": "🥗",
      "Strength Builder": "💪",
    };
    return iconMap[name] || "🏆";
  };

  const getAchievementCategory = (name: string) => {
    if (name.includes("Weight") || name.includes("weight")) return "progress";
    if (
      name.includes("Cheat") ||
      name.includes("Nutrition") ||
      name.includes("meal")
    )
      return "diet";
    if (
      name.includes("Workout") ||
      name.includes("Steps") ||
      name.includes("Strength")
    )
      return "workout";
    if (name.includes("Week") || name.includes("Warrior")) return "streak";
    return "general";
  };
  const loadMetrics = async () => {
    try {
      // Use individual API calls instead of getUserStats
      const [workoutHistory, , rewardStatus] = await Promise.all([
        apiService.getWorkoutHistory().catch(() => []),
        apiService.getWeightHistory().catch(() => []),
        apiService.getRewardStatus().catch(() => ({ all_achievements: [] })),
      ]);

      // Calculate basic metrics
      const totalWorkouts = workoutHistory.length || 0;
      const achievements = rewardStatus.all_achievements
        ? rewardStatus.all_achievements.length
        : 0;

      setMetrics({
        totalWorkouts,
        streakDays: 0, // Simplified - no complex calculation
        weightLost: 0, // Simplified - no complex calculation
        achievements,
        level: 1, // Simplified - no complex calculation
        nextLevelProgress: 0, // Simplified - no complex calculation
      });
    } catch (error) {
      console.error("Error loading metrics:", error);
      // Keep default metrics on error
    }
  };

  const getProgressPercentage = (progress: number, target: number) => {
    return Math.min((progress / target) * 100, 100);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      workout: "text-blue-400",
      streak: "text-orange-400",
      progress: "text-green-400",
      diet: "text-purple-400",
      strength: "text-red-400",
    };
    return colors[category] || "text-gray-400";
  };

  const sections = [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "status", label: "Status & Level", icon: Star },
  ];

  const renderOverview = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-3">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <h3 className="text-lg font-semibold text-white">Level</h3>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-white">
          {metrics.level}
        </p>
        <div className="mt-2">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${metrics.nextLevelProgress}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            {metrics.nextLevelProgress}% to next level
          </p>
        </div>
      </div>

      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-3">
          <Award className="w-6 h-6 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Achievements</h3>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-white">
          {metrics.achievements}
        </p>
        <p className="text-gray-400 text-sm">/{achievements.length} unlocked</p>
      </div>

      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-3">
          <Target className="w-6 h-6 text-green-400" />
          <h3 className="text-lg font-semibold text-white">Total Workouts</h3>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-white">
          {metrics.totalWorkouts}
        </p>
        <p className="text-gray-400 text-sm">completed</p>
      </div>

      <div className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700">
        <div className="flex items-center space-x-3 mb-3">
          <Calendar className="w-6 h-6 text-orange-400" />
          <h3 className="text-lg font-semibold text-white">Current Streak</h3>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-white">
          {metrics.streakDays}
        </p>
        <p className="text-gray-400 text-sm">days in a row</p>
      </div>

      <div className="col-span-full">
        <h3 className="text-xl font-semibold text-white mb-4">
          Recent Achievements
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {achievements
            .filter((achievement) => achievement.unlocked)
            .slice(0, 2)
            .map((achievement) => (
              <div
                key={achievement.id}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Unlocked on{" "}
                      {achievement.unlocked_at &&
                        new Date(achievement.unlocked_at).toLocaleDateString()}
                    </p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-400 ml-auto" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">All Achievements</h3>
        <div className="text-gray-400">
          {achievements.filter((a) => a.unlocked).length} /{" "}
          {achievements.length} unlocked
        </div>
      </div>

      <div className="grid gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-6 rounded-lg border transition-all ${
              achievement.unlocked
                ? "bg-gray-800 border-green-600"
                : "bg-gray-800 border-gray-700"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-lg font-semibold text-white">
                      {achievement.title}
                    </h4>
                    {achievement.unlocked && (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    )}
                  </div>
                  <p className="text-gray-400 mb-3">
                    {achievement.description}
                  </p>

                  {!achievement.unlocked && (
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>
                          {achievement.progress} / {achievement.target}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${getProgressPercentage(
                              achievement.progress || 0,
                              achievement.target || 1
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                      achievement.category || "general"
                    )} bg-gray-700`}
                  >
                    {achievement.category || "general"}
                  </span>
                </div>
              </div>

              {achievement.unlocked && achievement.unlocked_at && (
                <div className="text-right">
                  <p className="text-gray-500 text-xs">Unlocked</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(achievement.unlocked_at).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStatus = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4">
          Your Fitness Level
        </h3>

        <div className="flex items-center space-x-4 mb-6">
          <div className="text-6xl font-bold text-yellow-400">
            {metrics.level}
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">
              Level {metrics.level}
            </p>
            <p className="text-gray-400">Intermediate Athlete</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Progress to Level {metrics.level + 1}</span>
            <span>{metrics.nextLevelProgress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full transition-all duration-300"
              style={{ width: `${metrics.nextLevelProgress}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-white">
              {metrics.totalWorkouts}
            </p>
            <p className="text-gray-400 text-sm">Workouts</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">
              {metrics.streakDays}
            </p>
            <p className="text-gray-400 text-sm">Day Streak</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">
              {metrics.weightLost.toFixed(1)}kg
            </p>
            <p className="text-gray-400 text-sm">Weight Lost</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">
              {metrics.achievements}
            </p>
            <p className="text-gray-400 text-sm">Achievements</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">
          Level Benefits
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">
              Access to advanced workout plans
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Detailed progress analytics</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Priority AI coaching support</span>
          </div>
          <div className="flex items-center space-x-3 opacity-50">
            <div className="w-5 h-5 border-2 border-gray-600 rounded-full"></div>
            <span className="text-gray-500">
              Custom meal planning (Level 5)
            </span>
          </div>
          <div className="flex items-center space-x-3 opacity-50">
            <div className="w-5 h-5 border-2 border-gray-600 rounded-full"></div>
            <span className="text-gray-500">
              Personal trainer matching (Level 10)
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <Award className="w-8 h-8 text-yellow-400" />
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Rewards & Achievements
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
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
              <p className="text-gray-400 mt-2">Loading rewards data...</p>
            </div>
          ) : (
            <>
              {activeSection === "overview" && renderOverview()}
              {activeSection === "achievements" && renderAchievements()}
              {activeSection === "status" && renderStatus()}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
