'use client'

import Image from 'next/image'
import { useSession } from "next-auth/react"
import { SessionProvider } from "next-auth/react"

function Home() {

  const { data: session, status, update } = useSession()

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {session.user.name}</p>
      </>
    )
  }

  return <a href="/api/auth/signin">Sign in</a>
}

export default function Main() {

  return <SessionProvider>
    <Home />
  </SessionProvider>
}