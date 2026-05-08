
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Ac_detail({
    formData,
    handleChange,
    nextStep,
    prevStep,
}) {

    const [showPassword, setShowPassword] =
        useState(false);

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex = /^.{8,}$/;

    const isEmailValid =
        emailRegex.test(formData.email);

    const isPasswordValid =
        passwordRegex.test(formData.password);

    const isPasswordMatch =
        formData.password ===
        formData.confirmPassword;

    const isFormValid =
        formData.email &&
        formData.password &&
        formData.confirmPassword &&
        isEmailValid &&
        isPasswordValid &&
        isPasswordMatch;

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Account Details
            </h2>

            <p className="text-gray-500 mb-8">
                Setup your login credentials
            </p>

            <div className="space-y-5">
                <div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full border rounded-xl px-4 py-3 outline-none focus:ring-4 transition
            ${formData.email &&
                                !isEmailValid
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-indigo-200 focus:border-indigo-500"
                            }`}
                    />

                    {formData.email &&
                        !isEmailValid && (
                            <p className="text-red-500 text-sm mt-1">
                                Invalid email address
                            </p>
                        )}
                </div>

                <div className="relative">
                    <input
                        type={
                            showPassword
                                ? "text"
                                : "password"
                        }
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-4 transition
            ${formData.password &&
                                !isPasswordValid
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-indigo-200 focus:border-indigo-500"
                            }`}
                    />

                    <button
                        type="button"
                        onClick={() =>
                            setShowPassword(!showPassword)
                        }
                        className="absolute right-4 top-3.5 text-gray-500"
                    >
                        {showPassword ? (
                            <EyeOff size={20} />
                        ) : (
                            <Eye size={20} />
                        )}
                    </button>

                    {formData.password &&
                        !isPasswordValid && (
                            <p className="text-red-500 text-sm mt-1">
                                Password must be at least 8 characters
                            </p>
                        )}
                </div>

                <div className="relative">
                    <input
                        type={
                            showConfirmPassword
                                ? "text"
                                : "password"
                        }
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full border rounded-xl px-4 py-3 pr-12 outline-none focus:ring-4 transition
            ${formData.confirmPassword &&
                                !isPasswordMatch
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-300 focus:ring-indigo-200 focus:border-indigo-500"
                            }`}
                    />

                    <button
                        type="button"
                        onClick={() =>
                            setShowConfirmPassword(
                                !showConfirmPassword
                            )
                        }
                        className="absolute right-4 top-3.5 text-gray-500"
                    >
                        {showConfirmPassword ? (
                            <EyeOff size={20} />
                        ) : (
                            <Eye size={20} />
                        )}
                    </button>

                    {formData.confirmPassword &&
                        !isPasswordMatch && (
                            <p className="text-red-500 text-sm mt-1">
                                Passwords do not match
                            </p>
                        )}
                </div>
            </div>

            <div className="flex gap-4 mt-8">
                <button
                    onClick={prevStep}
                    className="w-1/2 border border-gray-300 hover:bg-gray-100 py-3 rounded-xl font-semibold transition"
                >
                    ← Back
                </button>

                <button
                    onClick={nextStep}
                    disabled={!isFormValid}
                    className={`w-1/2 py-3 rounded-xl font-semibold text-white transition-all duration-300
          ${isFormValid
                            ? "bg-indigo-600 hover:bg-indigo-700 hover:scale-[1.02] shadow-lg"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                >
                    Next →
                </button>
            </div>
        </div>
    );
}

export default Ac_detail;