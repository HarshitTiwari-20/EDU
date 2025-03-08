"use client"

import { NextResponse } from "next/server"

// This is a simulated AI API call
// In a real application, you would connect to OpenAI, Grok, or another AI provider
export async function POST(request: Request) {
  try {
    const { prompt, challengeId } = await request.json()

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate a response based on the challenge ID
    // In a real app, you would call an actual AI API here
    let aiResponse = ""

    if (prompt.toLowerCase().includes("javascript") || challengeId.includes("javascript")) {
      aiResponse = `
Here's a solution for your JavaScript challenge:

\`\`\`javascript
function sumPositiveNumbers(arr) {
  return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}
\`\`\`

This function works by:
1. Using filter() to keep only positive numbers (num > 0)
2. Using reduce() to sum all the positive numbers
3. Starting with an initial sum of 0

The time complexity is O(n) where n is the length of the array.
      `
    } else if (prompt.toLowerCase().includes("react") || challengeId.includes("react")) {
      aiResponse = `
Here's a solution for your React component challenge:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
\`\`\`

This component:
1. Uses the useState hook to manage the counter state
2. Provides buttons to increment, decrement, and reset the counter
3. Displays the current count value
      `
    } else if (prompt.toLowerCase().includes("blockchain") || challengeId.includes("blockchain")) {
      aiResponse = `
Here's a solution for your blockchain challenge:

\`\`\`javascript
class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(
      this.index + 
      this.previousHash + 
      this.timestamp + 
      JSON.stringify(this.data) + 
      this.nonce
    ).toString();
  }

  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Block mined: " + this.hash);
  }
}
\`\`\`

This code:
1. Creates a Block class for a basic blockchain implementation
2. Includes a method to calculate the hash of the block
3. Implements a simple proof-of-work algorithm with the mineBlock method
      `
    } else {
      // Default response for any other challenge
      aiResponse = `
Based on your challenge, here's a general approach:

1. Break down the problem into smaller steps
2. Consider edge cases in your solution
3. Think about time and space complexity

Here's a template to get started:

\`\`\`javascript
function solve(input) {
  // Parse the input if needed
  
  // Process the data
  
  // Handle edge cases
  
  // Return the result
}
\`\`\`

Remember to test your solution with different inputs to ensure it works correctly.
      `
    }

    return NextResponse.json({
      response: aiResponse,
      tokensUsed: 40, // Simulated token usage
    })
  } catch (error) {
    console.error("AI Assist Error:", error)
    return NextResponse.json({ error: "Failed to generate AI response" }, { status: 500 })
  }
}

