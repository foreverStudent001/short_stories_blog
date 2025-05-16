'use client'
import { MagneticSocialLink } from '@/components/ui/magnetic-social-link'
import { TextLoop } from '@/components/ui/text-loop'
import { ThemeSwitch } from '@/components/ui/theme-switch'
import { motion } from 'motion/react'
import { EMAIL, SOCIAL_LINKS } from './data'

export function Footer() {
  const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }
  
  const TRANSITION_SECTION = {
    duration: 0.3,
  }
  return (
    <footer className="absolute border-t border-zinc-100 px-0 py-4 dark:border-zinc-800 w-full" style={{bottom: '20px'}}>
      <div className="flex items-center justify-between">
      <motion.section
        className='bottom-20'
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        {/* <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p> */}
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
      </div>
    </footer>
  )
}
