import ResultClient from './ResultClient'
import { Suspense } from 'react'

export default function ResultPage() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ResultClient />
      </Suspense>
    )
  }