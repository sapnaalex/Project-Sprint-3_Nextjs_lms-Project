"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "../layout/navbar";
import InputField from "../global/input-field";
import Button from "../global/button";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Email and password are required.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (res?.error) {
        setError("Invalid credentials");
        setIsLoading(false);
        return;
      }

      if (res?.ok) {
        setTimeout(async () => {
          const sessionRes = await fetch("/api/auth/session");
          const session = await sessionRes.json();
          const role = session?.user?.role;

          if (role === "admin") {
            router.push("/admin_dashboard");
          } else if (role === "student") {
            router.push("/student_dashboard");
          } else {
            console.log(session);
          }
        }, 100);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-black mb-6">
            Sign In
          </h2>

          {error && (
            <p className="text-red-600 text-center text-sm mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={isLoading}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              disabled={isLoading}
            />

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
