"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ConnectWallet() {
  const router = useRouter()
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState("")

  const handleConnectWallet = async () => {
    setIsConnecting(true)
    setError("")

    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Check if window.ethereum exists (MetaMask or other wallet)
      if (typeof window !== "undefined" && (window as any).ethereum) {
        // In a real app, you would connect to the wallet here
        setIsConnected(true)

        // Redirect after successful connection
        setTimeout(() => {
          router.push("/dashboard")
        }, 1000)
      } else {
        setError("No wallet detected. Please install MetaMask or another Ethereum wallet.")
      }
    } catch (err) {
      setError("Failed to connect wallet. Please try again.")
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Connect Your Wallet</CardTitle>
          <CardDescription>Connect your blockchain wallet to access EDU-Chain Learning</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {isConnected && (
            <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-600 dark:text-green-400">Success</AlertTitle>
              <AlertDescription className="text-green-600 dark:text-green-400">
                Wallet connected successfully! Redirecting to dashboard...
              </AlertDescription>
            </Alert>
          )}

          <div className="rounded-lg border p-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <Wallet className="h-10 w-10 text-primary" />
              <h3 className="font-medium">Connect Your Wallet</h3>
              <p className="text-sm text-muted-foreground">
                You need to connect your wallet to stake EDU-tokens and participate in challenges.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleConnectWallet} disabled={isConnecting || isConnected}>
            {isConnecting ? "Connecting..." : isConnected ? "Connected" : "Connect Wallet"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

