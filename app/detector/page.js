'use client'

import AIDetector from '@/components/AIDetector'
import Link from 'next/link'

export default function DetectorPage() {
  return (
    <div>
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
      <AIDetector />
    </div>
  )
}
