'use client';
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const Score = () => {
  const params = useSearchParams()
  const wins = params.get("wins")
  const losses = params.get("losses")
  const ties = params.get("ties")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-80 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Result</h2>
        <p className="text-gray-700 mb-2">Wins: <span className="text-green-600 font-semibold">{wins}</span></p>
        <p className="text-gray-700 mb-2">Losses: <span className="text-red-600 font-semibold">{losses}</span></p>
        <p className="text-gray-700 mb-4">Ties: <span className="text-yellow-600 font-semibold">{ties}</span></p>
        <Link
          href="/game"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Play Again
        </Link>
      </div>
    </div>
  )
}

export default Score
