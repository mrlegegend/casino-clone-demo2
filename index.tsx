import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{padding:20, fontFamily:'Arial, sans-serif'}}>
      <h1>Casino Clone — Next.js + TypeScript (Demo)</h1>
      <p>This is a minimal Next.js conversion. Use API calls to the backend at http://localhost:4000.</p>
      <Link href='/play'>Go to Play (stub)</Link>
    </div>
  )
}
