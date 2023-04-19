import { Header } from '@/components'
import { CreateToDo } from '@/components/CreateToDo'
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
  return (
    <div className={`${inter.className} h-screen border-gray-700`}>
      <Header/>      

      <CreateToDo/>

    </div>
  )
}
