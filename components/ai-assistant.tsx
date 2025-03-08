"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Code, HelpCircle } from "lucide-react"

interface AIAssistantProps {
  challengeId: string
  stakedAmount: number
  onUseAI: () => void
}

export function AIAssistant({ challengeId, stakedAmount, onUseAI }: AIAssistantProps) {
  const [prompt, setPrompt] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleGetHelp = async () => {
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/ai-assist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, challengeId }),
      })

      if (!response.ok) {
        throw new Error("Failed to get AI assistance")
      }

      const data = await response.json()
      setAiResponse(data.response)
      onUseAI()
    } catch (error: any) {
      setError(error.message || "Failed to get AI assistance")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Assistant</CardTitle>
        <CardDescription>
          Get help from AI to solve this challenge. Using AI will deduct 40% of your staked amount if you succeed.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <HelpCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <div className="space-y-2">
          <Textarea
            placeholder="Describe your problem or ask a question..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        {aiResponse && (
          <div className="space-y-2">
            <Alert>
              <Code className="h-4 w-4" />
              <AlertTitle>AI Response</AlertTitle>
              <AlertDescription>
                <pre className="whitespace-pre-line font-mono">{aiResponse}</pre>
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
      <Button className="w-full" onClick={handleGetHelp} disabled={isLoading}>
        {isLoading ? "Getting Help..." : "Get AI Help"}
      </Button>
    </Card>
  )
}

