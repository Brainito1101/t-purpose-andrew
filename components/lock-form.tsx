'use client'

import { useState, useTransition, FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'

export default function LockForm() {
  const params = useSearchParams()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()
  const returnTo = params.get('returnTo') || '/'

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    startTransition(async () => {
      try {
        const res = await fetch('/api/lock/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        })
        const data = await res.json()
        if (!res.ok) {
          setError(data?.message || 'Invalid credentials')
          return
        }
        window.location.href = returnTo
      } catch (err) {
        setError('Something went wrong. Please try again.')
      }
    })
  }

  return (
    <div className="min-h-dvh flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-sm rounded-xl border bg-white p-6 shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-semibold">Site Locked</h1>
          <p className="mt-1 text-sm text-gray-600">Enter credentials to continue.</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Username"
              required
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Password"
              required
              autoComplete="current-password"
            />
          </div>
          {error && (
            <div className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>
          )}
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-black/90 disabled:opacity-60"
          >
            {isPending ? 'Unlocking…' : 'Unlock Site'}
          </button>
        </form>
      </div>
    </div>
  )
}
