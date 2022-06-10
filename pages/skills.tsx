import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useState } from 'react';

const Title = ({name}:any) => <h1 className='text-3xl '>{name}</h1>
const Skills: NextPage = () => {
  const [name,setName] = useState("")
  return <div className='bg-blue-900 min-h-screen container mx-auto'>
    
    <Title name="Our Project" />

    <input type="text" className='m-4 border' value={name} onChange={(e) => setName(e.target.value)} />
    <div className='lg:text-5xl md:text-3xl font-mono uppercase text-center hover:text-red-700' >

      {name} 

    </div>

  </div>
}



export default Skills