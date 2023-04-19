import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export const Header = () => (
  <nav className="flex justify-center p-4 bg-gray-600">
    <h1 className = {`${inter.className} text-white text-2xl font-bold`}>
      Todo App
    </h1>
  </nav>
)
