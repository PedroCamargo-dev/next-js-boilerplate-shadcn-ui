import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="animate-pulse text-8xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
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
