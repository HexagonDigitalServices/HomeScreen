import React from 'react'
import { OrbitingCircle } from './OrbitAnimation'
import { FaJava, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";


const Icons = {
    github: () => <FaGithub size='1.5em' className='md:text-[2em]' color='black' />,
    mongo: () => <SiMongodb size='1.5em' className='md:text-[2em]' color='green' />,
    express: () => <SiExpress size='1.5em' className='md:text-[2em]' color='indigo' />,
    java: () => <FaJava size='1.5em' className='md:text-[2em]' color='white' />,
    tailwind: () => <SiTailwindcss size='1.5em' className='md:text-[2em]' color='black' />
}

export function OrbitingCirclesDemo() {
    return (
        <div className='relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background px-4 
         sm:px-6 lg:px-8'
            style={{ minHeight: 'calc(100vh - 80px)' }}>
            {/* TITLE SCREEN */}
            <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-green-200 to-emerald-500
             bg-clip-text text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight 
              text-transparent dark:from-white dark:to-black'
                style={{ marginBottom: '2rem' }}>
                GlideSphere
            </span>

            {/* FIRST ORBIT */}
            <OrbitingCircle iconSize={30}
                className='mt-4'
                radius={110}>
                <Icons.tailwind />
                <Icons.mongo />
                <Icons.express />
                <Icons.java />
                <Icons.tailwind />
            </OrbitingCircle>

            {/* SECOND ORBIT */}
            <OrbitingCircle
                iconSize={20}
                radius={80}
                reverse
                speed={2}
                className='mt-6'>
                <Icons.mongo />
                <Icons.express />
                <Icons.java />
                <Icons.tailwind />
            </OrbitingCircle>
        </div>
    )
}

export default OrbitingCirclesDemo