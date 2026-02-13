"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type UserRole = "government" | "landowner" | null

interface AuthContextType {
  role: UserRole
  userName: string
  setAuth: (role: UserRole, name: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>(null)
  const [userName, setUserName] = useState("")

  const setAuth = (newRole: UserRole, name: string) => {
    setRole(newRole)
    setUserName(name)
  }

  const logout = () => {
    setRole(null)
    setUserName("")
  }

  return (
    <AuthContext.Provider value={{ role, userName, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
