import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-primary animate-pulse text-8xl font-bold">404</h1>
      <p className="text-muted-foreground mt-4 text-lg">
        Oops! A página que você está procurando não existe.
      </p>
      <div className="mt-6">
        <Link href="/">
          <Button variant="outline">Ir para Home</Button>
        </Link>
      </div>
    </div>
  )
}
