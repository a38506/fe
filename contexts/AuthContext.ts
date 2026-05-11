'use client';

import React, { createContext, useContext, useEffect, useState } from "react";
import apiClient from "@/lib/axios";

type User = {
  username: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (u: User | null) => void;
  login: (token: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // load user khi reload trang
  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) return;

    apiClient
      .get("/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser({ username: res.data.username }))
      .catch(() => {
        localStorage.removeItem("access_token");
        setUser(null);
      });
  }, []);

  const login = async (token: string) => {
    localStorage.setItem("access_token", token);

    const res = await apiClient.get("/api/v1/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUser({ username: res.data.username });
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
  };

  return React.createElement(
    AuthContext.Provider,
    { value: { user, setUser, login, logout } },
    children
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};