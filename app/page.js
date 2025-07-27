import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to ROCK PAPER SCISSOR LIZARD SPOCK</h1>
      <Link
        href="/game"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Play
      </Link>
    </div>
  )
}

export default page
