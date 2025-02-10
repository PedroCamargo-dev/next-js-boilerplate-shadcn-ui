'use client'

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes'
import * as React from 'react'
import { useEffect, useState } from 'react'

export function ThemeProvider({
  children,
  ...props
}: Readonly<ThemeProviderProps>) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return null
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
