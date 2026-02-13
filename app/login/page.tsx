"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Building2, User, ArrowLeft } from "lucide-react"

type Role = "government" | "landowner"

export default function LoginPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedRole === "government") {
      router.push("/dashboard/government")
    } else {
      router.push("/dashboard/landowner")
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex h-16 items-center border-b border-border bg-card px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Shield className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">ABIMS</span>
        </Link>
      </div>

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="font-display text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Select your role and sign in to access the monitoring dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!selectedRole ? (
              <div className="flex flex-col gap-4">
                <p className="text-center text-sm font-medium text-muted-foreground">
                  Select your role
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedRole("government")}
                    className="flex flex-col items-center gap-3 rounded-lg border-2 border-border bg-background p-6 transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-foreground">Government Officer</p>
                      <p className="text-xs text-muted-foreground">
                        Monitor all lands
                      </p>
                    </div>
                  </button>
                  <button
                    onClick={() => setSelectedRole("landowner")}
                    className="flex flex-col items-center gap-3 rounded-lg border-2 border-border bg-background p-6 transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-foreground">Land Owner</p>
                      <p className="text-xs text-muted-foreground">
                        View your property
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="h-3 w-3" />
                  Back to role selection
                </button>

                <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-3">
                  {selectedRole === "government" ? (
                    <Building2 className="h-5 w-5 text-primary" />
                  ) : (
                    <User className="h-5 w-5 text-primary" />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {selectedRole === "government"
                        ? "Government Officer"
                        : "Land Owner"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {selectedRole === "government"
                        ? "Administrative access"
                        : "Property owner access"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="officer@gov.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Button type="submit" className="mt-2 w-full">
                  Sign In
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  This is a demo. Click Sign In with any credentials.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
