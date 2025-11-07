import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user.name}</p>
        <img src={session.user.image} alt="avatar" width={50} />
        <a href="/dashboard">Go to Dashboard →</a>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div>
      <p>Not signed in</p>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
    </div>
  )
}