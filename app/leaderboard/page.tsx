"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, LogOut, Medal, Search, Trophy, Wallet } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Leaderboard() {
  const [eduBalance, setEduBalance] = useState(1000)

  // Mock leaderboard data
  const leaderboardData = [
    { rank: 1, name: "Alex Johnson", score: 2450, challenges: 32, nfts: 15 },
    { rank: 2, name: "Maria Garcia", score: 2120, challenges: 28, nfts: 12 },
    { rank: 3, name: "David Kim", score: 1980, challenges: 25, nfts: 10 },
    { rank: 4, name: "Sarah Williams", score: 1840, challenges: 24, nfts: 9 },
    { rank: 5, name: "James Brown", score: 1720, challenges: 22, nfts: 8 },
    { rank: 6, name: "Emily Davis", score: 1650, challenges: 21, nfts: 7 },
    { rank: 7, name: "Michael Wilson", score: 1540, challenges: 20, nfts: 7 },
    { rank: 8, name: "Lisa Martinez", score: 1480, challenges: 19, nfts: 6 },
    { rank: 9, name: "Robert Taylor", score: 1350, challenges: 18, nfts: 5 },
    { rank: 10, name: "Jennifer Anderson", score: 1290, challenges: 17, nfts: 5 },
    { rank: 11, name: "John Doe", score: 1150, challenges: 15, nfts: 4 },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Code className="h-6 w-6 text-primary" />
            <span>EDU-Chain Learning</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link href="/challenges" className="text-sm font-medium transition-colors hover:text-primary">
              Challenges
            </Link>
            <Link href="/rewards" className="text-sm font-medium transition-colors hover:text-primary">
              Rewards
            </Link>
            <Link href="/leaderboard" className="text-sm font-medium text-primary">
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
            <h1 className="text-3xl font-bold">Leaderboard</h1>
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Top Learner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-yellow-500">
                    <AvatarImage src="/placeholder.svg" alt="Top Learner" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">{leaderboardData[0].name}</div>
                    <div className="text-sm text-muted-foreground">Score: {leaderboardData[0].score}</div>
                  </div>
                  <Trophy className="ml-auto h-8 w-8 text-yellow-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Second Place</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-gray-400">
                    <AvatarImage src="/placeholder.svg" alt="Second Place" />
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">{leaderboardData[1].name}</div>
                    <div className="text-sm text-muted-foreground">Score: {leaderboardData[1].score}</div>
                  </div>
                  <Medal className="ml-auto h-8 w-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Third Place</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-orange-500">
                    <AvatarImage src="/placeholder.svg" alt="Third Place" />
                    <AvatarFallback>DK</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">{leaderboardData[2].name}</div>
                    <div className="text-sm text-muted-foreground">Score: {leaderboardData[2].score}</div>
                  </div>
                  <Medal className="ml-auto h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Global Leaderboard</CardTitle>
              <CardDescription>Top performers on EDU-Chain Learning platform</CardDescription>
              <div className="mt-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search users..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Rank</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead className="text-right">Challenges</TableHead>
                    <TableHead className="text-right">NFTs</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboardData.map((user) => (
                    <TableRow key={user.rank} className={user.name === "John Doe" ? "bg-muted/50" : ""}>
                      <TableCell className="font-medium">{user.rank}</TableCell>
                      <TableCell className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg" alt={user.name} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {user.name}
                        {user.rank <= 3 && (
                          <Trophy
                            className={`h-4 w-4 ${
                              user.rank === 1
                                ? "text-yellow-500"
                                : user.rank === 2
                                  ? "text-gray-400"
                                  : "text-orange-500"
                            }`}
                          />
                        )}
                      </TableCell>
                      <TableCell className="text-right">{user.score}</TableCell>
                      <TableCell className="text-right">{user.challenges}</TableCell>
                      <TableCell className="text-right">{user.nfts}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
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

