'use client'
import dynamic from 'next/dynamic'

const CustomWagmiProvider = dynamic(
  () => import('@/providers/WagmiProvider'),
  { ssr: false }
) 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomWagmiProvider>
          {children}
        </CustomWagmiProvider>
      </body>
    </html>
  )
}