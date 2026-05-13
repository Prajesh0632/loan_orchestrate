import { Hero } from '@/components/sections/Hero'
import { Platform } from '@/components/sections/Platform'
import { Features } from '@/components/sections/Features'
import { Agents } from '@/components/sections/Agents'
import { Compliance } from '@/components/sections/Compliance'
import { Impact } from '@/components/sections/Impact'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Platform />
      <Features />
      <Agents />
      <Compliance />
      <Impact />
      <Contact />
    </>
  )
}
