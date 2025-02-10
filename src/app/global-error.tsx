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
      <body className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-primary animate-pulse text-8xl font-bold">Erro</h1>
        <p className="text-muted-foreground mt-4 text-lg">
          Algo deu errado!
        </p>
        <div className="mt-6">
          <Button variant="outline" onClick={() => reset()}>Tentar novamente</Button>
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
