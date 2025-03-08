import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Trophy, Wallet } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Code className="h-6 w-6 text-primary" />
            <span>EDU-Chain Learning</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
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
          <div className="flex items-center gap-2">
            <Link href="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Learn to Code and Earn Crypto
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Stake EDU-tokens, solve programming challenges, and earn rewards on the blockchain.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link href="/challenges">
                  <Button size="lg" variant="outline">
                    View Challenges
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Wallet className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Stake EDU-Tokens</CardTitle>
                  <CardDescription>
                    Connect your wallet and stake EDU-tokens to participate in programming challenges.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Your staked tokens serve as your commitment to learning. The more you stake, the more you can earn.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Solve Challenges</CardTitle>
                  <CardDescription>
                    Test your programming skills with our curated challenges across different difficulty levels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Each challenge comes with clear requirements and test cases to verify your solution.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Trophy className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Earn Rewards</CardTitle>
                  <CardDescription>
                    Succeed and earn back your staked tokens plus 30% more and exclusive NFTs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    If your solution is incorrect, you'll lose 30% of your stake, but the rest will be returned to your
                    wallet.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
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

