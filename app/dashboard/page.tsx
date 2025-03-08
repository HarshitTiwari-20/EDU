"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, LogOut, Trophy, User, Wallet } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  const [eduBalance, setEduBalance] = useState(1000)
  const [stakedTokens, setStakedTokens] = useState(0)
  const [nftCount, setNftCount] = useState(2)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Code className="h-6 w-6 text-primary" />
            <span>EDU-Chain Learning</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link href="/challenges" className="text-sm font-medium transition-colors hover:text-primary">
              Challenges
            </Link>
            <Link href="/rewards" className="text-sm font-medium transition-colors hover:text-primary">
              Rewards
            </Link>
            <Link href="/leaderboard" className="text-sm font-medium transition-colors hover:text-primary">
              Leaderboard
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Wallet className="h-4 w-4" />
              <span>{eduBalance} EDU</span>
            </div>
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">EDU-Token Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{eduBalance}</div>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Available for staking</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Staked Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{stakedTokens}</div>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Currently at stake</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">NFT Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{nftCount}</div>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Earned from challenges</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="challenges">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="challenges">Active Challenges</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            <TabsContent value="challenges" className="space-y-4 pt-4">
              <h2 className="text-xl font-semibold">Available Challenges</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ChallengeCard title="JavaScript Basics" difficulty="Beginner" reward={50} completionRate={75} />
                <ChallengeCard title="React Components" difficulty="Intermediate" reward={100} completionRate={45} />
                <ChallengeCard title="Blockchain Fundamentals" difficulty="Advanced" reward={200} completionRate={25} />
              </div>
            </TabsContent>
            <TabsContent value="history" className="pt-4">
              <h2 className="text-xl font-semibold mb-4">Challenge History</h2>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 gap-4 p-4 font-medium border-b">
                  <div>Challenge</div>
                  <div>Date</div>
                  <div>Result</div>
                  <div>Reward</div>
                </div>
                <div className="divide-y">
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>Array Manipulation</div>
                    <div className="text-muted-foreground">Mar 1, 2025</div>
                    <div className="text-green-600">Success</div>
                    <div>+65 EDU</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>String Parsing</div>
                    <div className="text-muted-foreground">Feb 28, 2025</div>
                    <div className="text-red-600">Failed</div>
                    <div>-15 EDU</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 p-4">
                    <div>Basic Algorithms</div>
                    <div className="text-muted-foreground">Feb 25, 2025</div>
                    <div className="text-green-600">Success</div>
                    <div>+52 EDU</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="profile" className="pt-4">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center space-y-4">
                          <Avatar className="h-24 w-24">
                            <AvatarImage src="/placeholder.svg" alt="User" />
                            <AvatarFallback className="text-2xl">JD</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1 text-center">
                            <h3 className="font-medium text-lg">John Doe</h3>
                            <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                          </div>
                          <Button variant="outline" className="w-full">
                            <User className="h-4 w-4 mr-2" />
                            Edit Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="md:w-2/3 space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Wallet Information</CardTitle>
                        <CardDescription>Your connected blockchain wallet details</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Address</span>
                            <span className="font-mono text-sm">0x1a2...3b4c</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Network</span>
                            <span>EDU-Chain Testnet</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Status</span>
                            <span className="text-green-600">Connected</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Statistics</CardTitle>
                        <CardDescription>Your learning progress and achievements</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Challenges Completed</span>
                              <span>12/50</span>
                            </div>
                            <Progress value={24} />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Success Rate</span>
                              <span>75%</span>
                            </div>
                            <Progress value={75} />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Total Earnings</span>
                              <span>450 EDU</span>
                            </div>
                            <Progress value={45} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 EDU-Chain Learning. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface ChallengeCardProps {
  title: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  reward: number
  completionRate: number
}

function ChallengeCard({ title, difficulty, reward, completionRate }: ChallengeCardProps) {
  const difficultyColor = {
    Beginner: "text-green-600",
    Intermediate: "text-yellow-600",
    Advanced: "text-red-600",
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <span className={difficultyColor[difficulty]}>{difficulty}</span>
        </div>
        <CardDescription>Reward: {reward} EDU + NFT</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Completion Rate</span>
            <span>{completionRate}%</span>
          </div>
          <Progress value={completionRate} />
        </div>
        <Link href={`/challenges/${title.toLowerCase().replace(/\s+/g, "-")}`}>
          <Button className="w-full">Start Challenge</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

