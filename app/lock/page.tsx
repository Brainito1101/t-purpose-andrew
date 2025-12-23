import { Suspense } from 'react'
import LockForm from '@/components/lock-form'

export default function LockPage() {
  return (
    <Suspense fallback={<div />}> 
      <LockForm />
    </Suspense>
  )
}
