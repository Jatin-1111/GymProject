"use client";

import { useState, useEffect } from "react";
import {
  User,
  Phone,
  Calendar,
  Ruler,
  Weight,
  Target,
  Trophy,
  Save,
  Edit,
  Activity,
  Clock,
  Moon,
  Heart,
} from "lucide-react";
import apiService from "../Services/apiService";

interface UserProfile {
  id: number;
  email: string;
  name: string;
  phone_number?: string;
  age?: number;
  gender?: string;
  height_cm?: number;
  weight_kg?: number;
  fitness_goals?: string;
  workouts_per_week?: string;
  workout_duration?: number;
  sleep_hours?: string;
  stress_level?: string;
  disliked_foods?: string;
  allergies?: string;
  health_conditions?: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    phone_number: "",
    age: "",
    gender: "",
    height_cm: "",
    weight_kg: "",
    fitness_goals: "",
    workouts_per_week: "",
    workout_duration: "",
    sleep_hours: "",
    stress_level: "",
    disliked_foods: "",
    allergies: "",
    health_conditions: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setIsLoading(true);
      const userData = await apiService.getUserProfile();
      setProfile(userData);

      // Initialize edit form with current data
      setEditForm({
        name: userData.name || "",
        phone_number: userData.phone_number || "",
        age: userData.age?.toString() || "",
        gender: userData.gender || "",
        height_cm: userData.height_cm?.toString() || "",
        weight_kg: userData.weight_kg?.toString() || "",
        fitness_goals: userData.fitness_goals || "",
        workouts_per_week: userData.workouts_per_week || "",
        workout_duration: userData.workout_duration?.toString() || "",
        sleep_hours: userData.sleep_hours || "",
        stress_level: userData.stress_level || "",
        disliked_foods: userData.disliked_foods || "",
        allergies: userData.allergies || "",
        health_conditions: userData.health_conditions || "",
      });
    } catch (error) {
      console.error("Error loading profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);

      const updateData = {
        name: editForm.name,
        age: editForm.age ? parseInt(editForm.age) : undefined,
        gender: editForm.gender,
        phone_number: editForm.phone_number,
        height_cm: editForm.height_cm
          ? parseFloat(editForm.height_cm)
          : undefined,
        weight_kg: editForm.weight_kg
          ? parseFloat(editForm.weight_kg)
          : undefined,
        fitness_goals: editForm.fitness_goals,
        workouts_per_week: editForm.workouts_per_week,
        workout_duration: editForm.workout_duration
          ? parseInt(editForm.workout_duration)
          : undefined,
        sleep_hours: editForm.sleep_hours,
        stress_level: editForm.stress_level,
        disliked_foods: editForm.disliked_foods,
        allergies: editForm.allergies,
        health_conditions: editForm.health_conditions,
      };

      await apiService.updateUserProfile(updateData);
      await loadProfile(); // Reload the profile data
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateBMI = () => {
    if (profile?.height_cm && profile?.weight_kg) {
      const heightInMeters = profile.height_cm / 100;
      const bmi = profile.weight_kg / (heightInMeters * heightInMeters);
      return bmi.toFixed(1);
    }
    return null;
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Underweight", color: "text-blue-400" };
    if (bmi < 25) return { category: "Normal weight", color: "text-green-400" };
    if (bmi < 30) return { category: "Overweight", color: "text-yellow-400" };
    return { category: "Obese", color: "text-red-400" };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
        <div className="text-white text-xl">Failed to load profile</div>
      </div>
    );
  }

  const bmi = calculateBMI();
  const bmiInfo = bmi ? getBMICategory(parseFloat(bmi)) : null;

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">My Profile</h1>
          <button
            onClick={
              isEditing ? () => setIsEditing(false) : () => setIsEditing(true)
            }
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <Edit className="w-4 h-4" />
            <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
          </button>
        </div>

        {/* Profile Overview */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                {profile.name}
              </h2>
              <p className="text-gray-400">{profile.email}</p>
            </div>
          </div>

          {/* BMI Card */}
          {bmi && (
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Body Mass Index (BMI)</p>
                  <p className="text-2xl font-bold text-white">{bmi}</p>
                  <p className={`text-sm ${bmiInfo?.color}`}>
                    {bmiInfo?.category}
                  </p>
                </div>
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
          )}
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Personal Information
            </h3>
            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Name</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:border-red-500 focus:outline-none"
                  />
                ) : (
                  <span className="text-white">
                    {profile.name || "Not provided"}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Phone</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    name="phone_number"
                    value={editForm.phone_number}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:border-red-500 focus:outline-none"
                  />
                ) : (
                  <span className="text-white">
                    {profile.phone_number || "Not provided"}
                  </span>
                )}
              </div>

              {/* Age */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Age</span>
                </div>
                {isEditing ? (
                  <input
                    type="number"
                    name="age"
                    value={editForm.age}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:border-red-500 focus:outline-none w-20"
                  />
                ) : (
                  <span className="text-white">
                    {profile.age ? `${profile.age} years` : "Not provided"}
                  </span>
                )}
              </div>

              {/* Gender */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Gender</span>
                </div>
                {isEditing ? (
                  <select
                    name="gender"
                    value={editForm.gender}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:border-red-500 focus:outline-none"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <span className="text-white capitalize">
                    {profile.gender || "Not provided"}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Physical Information */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Physical Information
            </h3>
            <div className="space-y-4">
              {/* Height */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Ruler className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Height</span>
                </div>
                {isEditing ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      name="height_cm"
                      value={editForm.height_cm}
                      onChange={handleInputChange}
                      className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:border-red-500 focus:outline-none w-20"
                    />
                    <span className="text-gray-400">cm</span>
                  </div>
                ) : (
                  <span className="text-white">
                    {profile.height_cm
                      ? `${profile.height_cm} cm`
                      : "Not provided"}
                  </span>
                )}
              </div>

              {/* Weight */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Weight className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Weight</span>
                </div>
                {isEditing ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      name="weight_kg"
                      value={editForm.weight_kg}
                      onChange={handleInputChange}
                      className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:border-red-500 focus:outline-none w-20"
                    />
                    <span className="text-gray-400">kg</span>
                  </div>
                ) : (
                  <span className="text-white">
                    {profile.weight_kg
                      ? `${profile.weight_kg} kg`
                      : "Not provided"}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Fitness Information */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Fitness Information
            </h3>
            <div className="space-y-4">
              {/* Fitness Goals */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Goals</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    name="fitness_goals"
                    value={editForm.fitness_goals}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:border-red-500 focus:outline-none"
                  />
                ) : (
                  <span className="text-white">
                    {profile.fitness_goals || "Not provided"}
                  </span>
                )}
              </div>

              {/* Workouts per week */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Workouts/Week</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    name="workouts_per_week"
                    value={editForm.workouts_per_week}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:border-red-500 focus:outline-none w-20"
                  />
                ) : (
                  <span className="text-white">
                    {profile.workouts_per_week || "Not provided"}
                  </span>
                )}
              </div>

              {/* Workout Duration */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Duration</span>
                </div>
                {isEditing ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      name="workout_duration"
                      value={editForm.workout_duration}
                      onChange={handleInputChange}
                      className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:border-red-500 focus:outline-none w-20"
                    />
                    <span className="text-gray-400">min</span>
                  </div>
                ) : (
                  <span className="text-white">
                    {profile.workout_duration
                      ? `${profile.workout_duration} min`
                      : "Not provided"}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Health Information */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              Health Information
            </h3>
            <div className="space-y-4">
              {/* Sleep Hours */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Moon className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Sleep</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    name="sleep_hours"
                    value={editForm.sleep_hours}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:border-red-500 focus:outline-none w-20"
                  />
                ) : (
                  <span className="text-white">
                    {profile.sleep_hours || "Not provided"}
                  </span>
                )}
              </div>

              {/* Stress Level */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">Stress Level</span>
                </div>
                {isEditing ? (
                  <select
                    name="stress_level"
                    value={editForm.stress_level}
                    onChange={handleInputChange}
                    className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:border-red-500 focus:outline-none"
                  >
                    <option value="">Select Level</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                ) : (
                  <span className="text-white capitalize">
                    {profile.stress_level || "Not provided"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Additional Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Disliked Foods */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Disliked Foods
              </label>
              {isEditing ? (
                <textarea
                  name="disliked_foods"
                  value={editForm.disliked_foods}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-red-500 focus:outline-none h-20 resize-none"
                />
              ) : (
                <p className="text-white">
                  {profile.disliked_foods || "None specified"}
                </p>
              )}
            </div>

            {/* Allergies */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Allergies
              </label>
              {isEditing ? (
                <textarea
                  name="allergies"
                  value={editForm.allergies}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-red-500 focus:outline-none h-20 resize-none"
                />
              ) : (
                <p className="text-white">
                  {profile.allergies || "None specified"}
                </p>
              )}
            </div>

            {/* Health Conditions */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">
                Health Conditions
              </label>
              {isEditing ? (
                <textarea
                  name="health_conditions"
                  value={editForm.health_conditions}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-red-500 focus:outline-none h-20 resize-none"
                />
              ) : (
                <p className="text-white">
                  {profile.health_conditions || "None specified"}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Save Button */}
        {isEditing && (
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center space-x-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? "Saving..." : "Save Changes"}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
