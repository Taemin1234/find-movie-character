import ResultClient from './ResultClient'
import Loading from '@/components/loading'
import { Suspense } from 'react'

export default function ResultPage() {
    return (
      <Suspense fallback={<Loading/>}>
        <ResultClient />
      </Suspense>
    )
  }