import { Montserrat, Pangolin } from 'next/font/google'

export const montserratFont = Montserrat({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat'
})

export const pangolinFont = Pangolin({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pangolin'
})
