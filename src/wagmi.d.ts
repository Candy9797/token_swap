import { config } from '@/config/wagmi'
import type { Config } from 'wagmi'

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}