import { PostProps } from '@Types'
import { CreateToDo, Header } from '@Components'
import { getAllTodos } from '@lib/db'
import { GetServerSideProps } from 'next'
import { Inter } from 'next/font/google'
  
const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps: GetServerSideProps = async () => {
  const todos = await getAllTodos();
  return {
    props: {
      todos,
    }
  }
}

export default function Home({todos}:PostProps) {
  return (
    <div className={`${inter.className} h-screen border-gray-700`}>
      <Header/>      

      <CreateToDo/>

    </div>
  )
}
