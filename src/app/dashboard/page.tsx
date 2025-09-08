"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Activity,
  Calendar,
  Trophy,
  LogOut,
  Menu,
  Settings,
  Apple,
  Dumbbell,
  TrendingUp,
  X,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import DashboardOverview from "../components/DashboardOverview";
import Profile from "../components/Profile";
import DietManagement from "../components/DietManagement";
import WorkoutManagement from "../components/WorkoutManagement";
import ProgressTracking from "../components/ProgressTracking";
import RewardsSection from "../components/RewardsSection";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogout = async () => {
    await logout();
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render anything if not authenticated (will be redirected)
  if (!isAuthenticated) {
    return null;
  }

  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Activity,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10 border-blue-500/20",
    },
    {
      id: "diet",
      label: "Diet Management",
      icon: Apple,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10 border-green-500/20",
    },
    {
      id: "workouts",
      label: "Workout Management",
      icon: Dumbbell,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10 border-orange-500/20",
    },
    {
      id: "progress",
      label: "Progress Tracking",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10 border-purple-500/20",
    },
    {
      id: "rewards",
      label: "Rewards",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10 border-yellow-500/20",
    },
    {
      id: "profile",
      label: "Profile",
      icon: User,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      id: "schedule",
      label: "Schedule",
      icon: Calendar,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/10 border-pink-500/20",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "diet":
        return <DietManagement />;
      case "workouts":
        return <WorkoutManagement />;
      case "progress":
        return <ProgressTracking />;
      case "rewards":
        return <RewardsSection />;
      case "profile":
        return <Profile />;
      case "schedule":
        return (
          <div className="text-white p-6">
            Schedule Management - Coming Soon!
          </div>
        );
      case "dashboard":
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <aside
        className={`bg-black w-64 min-h-screen transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed lg:relative z-30`}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <Image
              src="/gymlogo.png"
              alt="Armour Zone Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-white">Armour Zone</h1>
              <p className="text-red-400 text-sm">Member Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    isActive
                      ? `${item.bgColor} border text-white shadow-lg`
                      : "hover:bg-gray-800 text-gray-300 hover:text-white border border-transparent"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {isActive && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-90 rounded-xl`}
                      layoutId="activeBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.9 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <div className="relative z-10 flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: isActive ? 0 : 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent
                        className={`h-5 w-5 ${
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white"
                        }`}
                      />
                    </motion.div>
                    <span
                      className={`font-medium ${
                        isActive
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      className="absolute right-3 w-2 h-2 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-6 left-6 right-6">
            <motion.button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white rounded-xl transition-all duration-300 group border border-transparent hover:border-red-500/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <LogOut className="w-5 h-5 group-hover:text-white" />
              </motion.div>
              <span className="font-medium">Logout</span>
            </motion.button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <motion.header
          className="bg-black lg:bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-white hover:text-red-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
            <motion.h2
              className="text-xl font-semibold text-white capitalize"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              key={activeTab}
            >
              {activeTab.replace("-", " ")}
            </motion.h2>
          </div>
          <div className="flex items-center space-x-4">
            <motion.div
              className="hidden sm:block text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Welcome back, Member!
            </motion.div>
            <motion.button
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Settings className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.header>

        {/* Content Area */}
        <motion.div
          className="flex-1 p-6 overflow-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          key={activeTab}
        >
          {renderContent()}
        </motion.div>
      </main>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
