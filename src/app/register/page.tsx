"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Phone,
  ArrowLeft,
  Calendar,
} from "lucide-react";
import apiService from "../services/apiService";
import apiUtils from "../utils/apiUtils";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    dateOfBirth: "",
    gender: "Male",
    height: "",
    weight: "",
    fitnessGoals: "I want to lose weight and get fit",
    workoutsPerWeek: "3-4",
    workoutDuration: "60",
    sleepHours: "7-8",
    stressLevel: "medium",
    dislikedFoods: "",
    allergies: "",
    healthConditions: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const registrationData = apiUtils.transformRegistrationData(formData);

      // Validate the data
      const validation = apiUtils.validateRegistrationData(registrationData);
      if (!validation.isValid) {
        setError(validation.errors.join(". "));
        setIsLoading(false);
        return;
      }

      const response = await apiService.register(registrationData);

      if (response.message && response.message.includes("successfully")) {
        setSuccess(
          "Registration successful! You can now login with your credentials."
        );
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (error: unknown) {
      console.error("Registration error:", error);
      const errorMessage = apiUtils.formatApiError(error);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-center bg-repeat"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Back to Login Button */}
        <Link
          href="/login"
          className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Link>

        {/* Registration Form Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Image
                src="/gymlogo.png"
                alt="Armour Zone Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <h1 className="text-2xl font-bold text-white">Armour Zone</h1>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Create Account
            </h2>
            <p className="text-white/80 text-sm">Join the fitness revolution</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="bg-green-500/20 border border-green-500/50 text-green-200 p-3 rounded-lg mb-6 text-sm">
              {success}
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-white text-sm font-medium mb-2"
                >
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                    placeholder="First name"
                    required
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-white text-sm font-medium mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                    placeholder="Confirm password"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Date of Birth
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label
                  htmlFor="gender"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                >
                  <option value="Male" className="bg-gray-800">
                    Male
                  </option>
                  <option value="Female" className="bg-gray-800">
                    Female
                  </option>
                  <option value="Other" className="bg-gray-800">
                    Other
                  </option>
                </select>
              </div>

              {/* Height */}
              <div>
                <label
                  htmlFor="height"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  min="100"
                  max="250"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                  placeholder="Height"
                />
              </div>
            </div>

            {/* Weight and Fitness Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Weight */}
              <div>
                <label
                  htmlFor="weight"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  min="30"
                  max="200"
                  step="0.1"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                  placeholder="Weight"
                />
              </div>

              {/* Workouts Per Week */}
              <div>
                <label
                  htmlFor="workoutsPerWeek"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Workouts Per Week
                </label>
                <select
                  id="workoutsPerWeek"
                  name="workoutsPerWeek"
                  value={formData.workoutsPerWeek}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                >
                  <option value="1-2" className="bg-gray-800">
                    1-2 times
                  </option>
                  <option value="3-4" className="bg-gray-800">
                    3-4 times
                  </option>
                  <option value="5-6" className="bg-gray-800">
                    5-6 times
                  </option>
                  <option value="daily" className="bg-gray-800">
                    Daily
                  </option>
                </select>
              </div>
            </div>

            {/* Additional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Workout Duration */}
              <div>
                <label
                  htmlFor="workoutDuration"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Workout Duration (minutes)
                </label>
                <select
                  id="workoutDuration"
                  name="workoutDuration"
                  value={formData.workoutDuration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                >
                  <option value="30" className="bg-gray-800">
                    30 minutes
                  </option>
                  <option value="45" className="bg-gray-800">
                    45 minutes
                  </option>
                  <option value="60" className="bg-gray-800">
                    60 minutes
                  </option>
                  <option value="90" className="bg-gray-800">
                    90 minutes
                  </option>
                  <option value="120" className="bg-gray-800">
                    2+ hours
                  </option>
                </select>
              </div>

              {/* Sleep Hours */}
              <div>
                <label
                  htmlFor="sleepHours"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Sleep Hours per Night
                </label>
                <select
                  id="sleepHours"
                  name="sleepHours"
                  value={formData.sleepHours}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                >
                  <option value="4-5" className="bg-gray-800">
                    4-5 hours
                  </option>
                  <option value="6-7" className="bg-gray-800">
                    6-7 hours
                  </option>
                  <option value="7-8" className="bg-gray-800">
                    7-8 hours
                  </option>
                  <option value="8-9" className="bg-gray-800">
                    8-9 hours
                  </option>
                  <option value="9+" className="bg-gray-800">
                    9+ hours
                  </option>
                </select>
              </div>
            </div>

            {/* Fitness Goals and Stress Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Fitness Goals */}
              <div>
                <label
                  htmlFor="fitnessGoals"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Fitness Goals
                </label>
                <textarea
                  id="fitnessGoals"
                  name="fitnessGoals"
                  value={formData.fitnessGoals}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all resize-none"
                  placeholder="Describe your fitness goals..."
                />
              </div>

              {/* Stress Level */}
              <div>
                <label
                  htmlFor="stressLevel"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Stress Level
                </label>
                <select
                  id="stressLevel"
                  name="stressLevel"
                  value={formData.stressLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                >
                  <option value="low" className="bg-gray-800">
                    Low
                  </option>
                  <option value="medium" className="bg-gray-800">
                    Medium
                  </option>
                  <option value="high" className="bg-gray-800">
                    High
                  </option>
                </select>
              </div>
            </div>

            {/* Optional Health Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Optional Health Information
              </h3>

              {/* Disliked Foods */}
              <div>
                <label
                  htmlFor="dislikedFoods"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Disliked Foods (optional)
                </label>
                <input
                  type="text"
                  id="dislikedFoods"
                  name="dislikedFoods"
                  value={formData.dislikedFoods}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                  placeholder="e.g., mushrooms, spinach, seafood"
                />
              </div>

              {/* Allergies */}
              <div>
                <label
                  htmlFor="allergies"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Allergies (optional)
                </label>
                <input
                  type="text"
                  id="allergies"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                  placeholder="e.g., nuts, dairy, gluten"
                />
              </div>

              {/* Health Conditions */}
              <div>
                <label
                  htmlFor="healthConditions"
                  className="block text-white text-sm font-medium mb-2"
                >
                  Health Conditions (optional)
                </label>
                <input
                  type="text"
                  id="healthConditions"
                  name="healthConditions"
                  value={formData.healthConditions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                  placeholder="e.g., diabetes, hypertension"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-white/80 text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-red-400 hover:text-red-300 font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
