'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string }
  reset: () => void
}>) {
  return (
    <html lang="pt-BR" translate="no">
      <body className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
        <h1 className="animate-pulse text-8xl font-bold text-primary">Erro</h1>
        <p className="mt-4 text-lg text-muted-foreground">Algo deu errado!</p>
        <div className="mt-6">
          <Button variant="outline" onClick={() => reset()}>
            Tentar novamente
          </Button>
        </div>
        <div className="mt-6">
          <Link href="/">
            <Button variant="outline">Ir para Home</Button>
          </Link>
        </div>
      </body>
    </html>
  )
}
