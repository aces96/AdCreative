import Image from 'next/image'
import { HomeHeader } from './components/home.header'

export default function Home() {
  return (
    <main className="min-h-screen pt-12 bg-gradient-to-t from-pink-200 to-purple-300">
      <HomeHeader/> 
    </main>
  )
}
