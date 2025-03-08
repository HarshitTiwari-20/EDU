"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, LogOut, Trophy, Wallet } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export default function Rewards() {
  const [eduBalance, setEduBalance] = useState(1000)

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
            <Link href="/rewards" className="text-sm font-medium text-primary">
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
            <h1 className="text-3xl font-bold">Rewards</h1>
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <Tabs defaultValue="nfts">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="nfts">NFT Rewards</TabsTrigger>
              <TabsTrigger value="tokens">Token Rewards</TabsTrigger>
            </TabsList>
            <TabsContent value="nfts" className="space-y-4 pt-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <NFTCard
                  title="JavaScript Master"
                  description="Awarded for completing all JavaScript challenges"
                  rarity="Rare"
                  dateEarned="Mar 1, 2025"
                />
                <NFTCard
                  title="Blockchain Pioneer"
                  description="Awarded for completing your first blockchain challenge"
                  rarity="Common"
                  dateEarned="Feb 28, 2025"
                />
              </div>
            </TabsContent>
            <TabsContent value="tokens" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Token Rewards History</CardTitle>
                  <CardDescription>Track your EDU-token earnings from completed challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 gap-4 p-4 font-medium border-b">
                      <div>Challenge</div>
                      <div>Date</div>
                      <div>Staked</div>
                      <div>Earned</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <div>Array Manipulation</div>
                        <div className="text-muted-foreground">Mar 1, 2025</div>
                        <div>50 EDU</div>
                        <div className="text-green-600">+65 EDU</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <div>String Parsing</div>
                        <div className="text-muted-foreground">Feb 28, 2025</div>
                        <div>50 EDU</div>
                        <div className="text-red-600">-15 EDU</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4">
                        <div>Basic Algorithms</div>
                        <div className="text-muted-foreground">Feb 25, 2025</div>
                        <div>40 EDU</div>
                        <div className="text-green-600">+52 EDU</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-between w-full">
                    <div>
                      <span className="text-muted-foreground">Total Earned:</span>
                    </div>
                    <div className="font-bold">+102 EDU</div>
                  </div>
                </CardFooter>
              </Card>
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

interface NFTCardProps {
  title: string
  description: string
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary"
  dateEarned: string
}

function NFTCard({ title, description, rarity, dateEarned }: NFTCardProps) {
  const rarityColor = {
    Common: "text-gray-600 bg-gray-100",
    Uncommon: "text-green-600 bg-green-100",
    Rare: "text-blue-600 bg-blue-100",
    Epic: "text-purple-600 bg-purple-100",
    Legendary: "text-yellow-600 bg-yellow-100",
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <span className={`${rarityColor[rarity]} text-xs px-2 py-1 rounded-full`}>{rarity}</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="aspect-square relative rounded-lg overflow-hidden border mb-4">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt={title}
            width={300}
            height={300}
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-xs">
            <div className="flex justify-between">
              <span>ID: #1234</span>
              <span>Earned: {dateEarned}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Token ID</span>
          <span className="font-mono">0x1a2b...3c4d</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Trophy className="h-4 w-4 mr-2" />
          View on Blockchain
        </Button>
      </CardFooter>
    </Card>
  )
}

