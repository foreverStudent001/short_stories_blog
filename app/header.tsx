'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { ThemeSwitch } from '@/components/ui/theme-switch'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="text-lg font-medium text-black dark:text-white">
          Short stories
        </Link>
        {/* <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Design Engineer
        </TextEffect> */}
      </div>
      <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
    </header>
  )
}
