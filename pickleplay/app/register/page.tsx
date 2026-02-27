"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email,
        password,
        role,
      }),
    }).then((response) => response.json());
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 md:px-0">
      <div>
        <h1 className="text-4xl font-bold">Register</h1>
        <p className="mt-4 text-lg">
          Create an account to start booking courts and playing pickleball!
        </p>
        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full border rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full border rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium "
            >
              Role
            </label>
            <Select value={role} onValueChange={(value) => setRole(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem value="PLAYER" className="hover:bg-slate-100 text-black">
                    Player
                  </SelectItem>
                  <SelectItem
                    value="COURT_ADMIN"
                    className="hover:bg-slate-100 text-black"
                  >
                    Court Admin
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
