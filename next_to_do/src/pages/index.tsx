import { Header } from '@/components'
import { getAllTodos } from '@lib/db'
import { GetServerSideProps } from 'next'
import { Inter } from 'next/font/google'
import { useState } from 'react'
  
const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps: GetServerSideProps = async () => {
  const todos = await getAllTodos();
  return {
    props: {
      todos,
    }
  }
}

export default function Home() {

  const [] = useState()

  return (
    <div className={`${inter.className} h-screen border-gray-700`}>
      <Header/>      

    </div>
  )
}
