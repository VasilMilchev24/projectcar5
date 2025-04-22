
"use client"

import Link from "next/link";
import { useState } from "react";
import { useRegister } from "./hooks";

export default function RegisterPage() {
  
  const { handleRegister, handleGoogleSignUp, loading, error } = useRegister();

  const [username, setUsername]   = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-100">
            Create your account
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          <form action={handleGoogleSignUp}>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-gray-600 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-white"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                />
              </svg>
              Continue with Google
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">Or sign up with email</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2.5 border border-gray-600 bg-gray-700 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2.5 border border-gray-600 bg-gray-700 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2.5 border border-gray-600 bg-gray-700 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2.5 border border-gray-600 bg-gray-700 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-600 rounded bg-gray-700"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                By signing up, I accept the FlickFair Terms of Service.
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                {loading ? "Registering..." : "Register"}
              </button>
              {error && (
                <div className="mt-4 flex justify-center">
                  <p className="text-red-400 text-sm bg-red-950 border border-red-700 rounded-md px-4 py-2 shadow-md text-center max-w-xs">
                    {error}
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:text-primary/80"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}