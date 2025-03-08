"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, ArrowLeft, CheckCircle, Clock, Code, Wallet } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Slider } from "@/components/ui/slider"
import { AIAssistant } from "@/components/ai-assistant"

export default function ChallengePage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [stakeAmount, setStakeAmount] = useState(50)
  const [isStaking, setIsStaking] = useState(false)
  const [isStaked, setIsStaked] = useState(false)
  const [code, setCode] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<"success" | "failure" | null>(null)
  const [showResultDialog, setShowResultDialog] = useState(false)
  const [usedAI, setUsedAI] = useState(false)

  // Format the slug for display
  const challengeName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Mock challenge data
  const challenge = {
    title: challengeName,
    difficulty: "Intermediate",
    reward: stakeAmount * 1.3,
    description:
      "Write a function that takes an array of integers and returns the sum of all positive numbers in the array.",
    instructions:
      "1. The function should be named 'sumPositiveNumbers'\n2. It should take one parameter: an array of integers\n3. It should return the sum of all positive numbers in the array\n4. If there are no positive numbers, it should return 0",
    examples: [
      { input: "[1, -4, 7, 12]", output: "20" },
      { input: "[-1, -2, -3]", output: "0" },
      { input: "[1, 2, 3, 4, 5]", output: "15" },
    ],
    timeLimit: "30 minutes",
  }

  const handleStake = () => {
    setIsStaking(true)

    // Simulate staking process
    setTimeout(() => {
      setIsStaking(false)
      setIsStaked(true)
    }, 1500)
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate code evaluation
    setTimeout(() => {
      setIsSubmitting(false)

      // For demo purposes, we'll randomly determine success or failure
      const isSuccess = Math.random() > 0.5
      setResult(isSuccess ? "success" : "failure")
      setShowResultDialog(true)
    }, 2000)
  }

  const handleClaimReward = () => {
    router.push("/dashboard")
  }

  const handleUseAI = () => {
    setUsedAI(true)
  }

  // Calculate final reward based on AI usage
  const calculateReward = () => {
    let reward = challenge.reward

    // If AI was used, deduct 40% of staked amount
    if (usedAI) {
      reward -= stakeAmount * 0.4
    }

    return Math.max(0, Math.round(reward))
  }

  const renderDialogContent = () => {
    if (result === "success") {
      const finalReward = calculateReward()
      const aiDeduction = usedAI ? Math.round(stakeAmount * 0.4) : 0

      return (
        <div className="text-center space-y-4">
          <div className="bg-green-100 dark:bg-green-900/20 rounded-full p-3 inline-flex">
            <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="font-medium">You've earned:</p>
            <p className="text-2xl font-bold">{finalReward} EDU-Tokens</p>
            {usedAI && <p className="text-amber-600">(-{aiDeduction} EDU for AI assistance)</p>}
            <p className="text-green-600">+ 1 NFT Reward</p>
          </div>
        </div>
      )
    } else {
      const aiDeduction = usedAI ? Math.round(stakeAmount * 0.4) : 0
      const penaltyDeduction = Math.round(stakeAmount * 0.3)
      const totalDeduction = aiDeduction + penaltyDeduction
      const returnedAmount = Math.max(0, stakeAmount - totalDeduction)

      return (
        <div className="text-center space-y-4">
          <div className="bg-red-100 dark:bg-red-900/20 rounded-full p-3 inline-flex">
            <AlertCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <p className="font-medium">Tokens deducted:</p>
            <p className="text-2xl font-bold text-red-600">{totalDeduction} EDU-Tokens</p>
            {usedAI && (
              <p className="text-amber-600 text-sm">
                ({penaltyDeduction} EDU penalty + {aiDeduction} EDU for AI assistance)
              </p>
            )}
            <p>Returned to wallet: {returnedAmount} EDU-Tokens</p>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => router.push("/dashboard")}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="font-bold">
              <Code className="h-6 w-6 text-primary inline mr-2" />
              <span>EDU-Chain Learning</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Wallet className="h-4 w-4" />
              <span>1000 EDU</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Time Remaining: 30:00</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{challenge.title}</h1>
            <div className="flex items-center gap-2">
              <span className="text-yellow-600 font-medium">{challenge.difficulty}</span>
            </div>
          </div>

          {!isStaked ? (
            <Card>
              <CardHeader>
                <CardTitle>Stake EDU-Tokens</CardTitle>
                <CardDescription>
                  Stake your EDU-tokens to participate in this challenge. If you solve it correctly, you'll earn back
                  your tokens plus 30% more and an NFT reward.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Stake Amount</Label>
                    <span>{stakeAmount} EDU</span>
                  </div>
                  <Slider
                    value={[stakeAmount]}
                    min={10}
                    max={500}
                    step={10}
                    onValueChange={(value) => setStakeAmount(value[0])}
                  />
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Important</AlertTitle>
                  <AlertDescription>
                    If your solution is incorrect, 30% of your staked tokens ({Math.round(stakeAmount * 0.3)} EDU) will
                    be deducted, and the rest will be returned to your wallet.
                  </AlertDescription>
                </Alert>

                <div className="rounded-md border p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Potential Reward</p>
                      <p className="text-sm text-muted-foreground">If your solution is correct</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{Math.round(challenge.reward)} EDU</p>
                      <p className="text-sm text-green-600">+ NFT Reward</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handleStake} disabled={isStaking}>
                  {isStaking ? "Staking..." : `Stake ${stakeAmount} EDU-Tokens`}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="space-y-6">
              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                  <TabsTrigger value="ai-help">AI Help</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Problem Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{challenge.description}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Instructions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="whitespace-pre-line font-sans">{challenge.instructions}</pre>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="solution" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Solution</CardTitle>
                      <CardDescription>
                        Write your code solution below. Make sure it follows all the requirements.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        className="font-mono min-h-[300px]"
                        placeholder="// Write your solution here"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={handleSubmit} disabled={isSubmitting || !code.trim()}>
                        {isSubmitting ? "Submitting..." : "Submit Solution"}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="examples" className="space-y-4 pt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Examples</CardTitle>
                      <CardDescription>Here are some examples to help you understand the problem.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {challenge.examples.map((example, index) => (
                          <div key={index} className="rounded-md border p-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="font-medium mb-2">Input:</p>
                                <pre className="bg-muted p-2 rounded-md">{example.input}</pre>
                              </div>
                              <div>
                                <p className="font-medium mb-2">Output:</p>
                                <pre className="bg-muted p-2 rounded-md">{example.output}</pre>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="ai-help" className="space-y-4 pt-4">
                  <AIAssistant challengeId={params.slug} stakedAmount={stakeAmount} onUseAI={handleUseAI} />
                </TabsContent>
              </Tabs>

              <Alert>
                <Clock className="h-4 w-4" />
                <AlertTitle>Time Limit</AlertTitle>
                <AlertDescription>You have {challenge.timeLimit} to complete this challenge.</AlertDescription>
              </Alert>
            </div>
          )}
        </div>
      </main>

      <Dialog open={showResultDialog} onOpenChange={setShowResultDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{result === "success" ? "Challenge Completed!" : "Challenge Failed"}</DialogTitle>
            <DialogDescription>
              {result === "success"
                ? "Congratulations! Your solution passed all test cases."
                : "Your solution did not pass all test cases."}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-4">{renderDialogContent()}</div>
          <DialogFooter>
            <Button onClick={handleClaimReward} className="w-full">
              {result === "success" ? "Claim Reward" : "Return to Dashboard"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

