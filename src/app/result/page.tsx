'use client'

import { useSearchParams } from "next/navigation"

export default function Result() {
    const searchParams = useSearchParams();
    const res = searchParams.get('res')

    return (
        <div>
            <h1>{res}</h1>
        </div>
    )
} 