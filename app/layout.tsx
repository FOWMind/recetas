import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { RecipesProvider } from "./context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Recetas",
  description: "¡Encuentra todo tipo de recetas!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-LA">
      <body className={inter.className}>
        <RecipesProvider>{children}</RecipesProvider>
      </body>
    </html>
  )
}
