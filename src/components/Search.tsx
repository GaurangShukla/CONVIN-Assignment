import React from 'react'
import { useState, useEffect } from 'react'
export default function Search() {
//Theme initialization
    const [theme , setTheme ] = useState("dark")
    const colorTheme = theme ===  'dark' ? 'light' : 'dark'
    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
    },[theme , colorTheme])

    return (
        <nav className="flex flex-row justify-between px-4 h-20 items-center">
            <h1 initial={{y : 0}}   className="sans-serif font-bold text-mobile-title dark:text-white ">DevFinder by Gaurang Shukla</h1>
            <div className=" items-center gap-4">
                <div initial={{y : 0}}   className="hidden dark:flex gap-3 items-center group" onClick={() => setTheme(colorTheme)}>
                    <button className="sans-serif font-medium tracking-widest group-hover:text-navy-blue text-white">LIGHT</button>
                    <div className="dark:flex dark:items-center hidden">
                    <svg width="20" height="20" className="group-hover:text-navy-blue group-hover:cursor-pointer text-white fill-current" xmlns="http://www.w3.org/2000/svg"><g  fillRule="nonzero"><path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"/></g></svg>
                    </div>
                </div>
                <div initial={{y : 0}}  className="flex dark:hidden flex-row items-center gap-4 group" onClick={() => setTheme(colorTheme)}>
                    <button   className="sans-serif font-bold text-navy-blue tracking-widest group-hover:text-black">DARK</button>
                    <div className=" flex items-center ">
                    <svg width="20" height="20" className="fill-current text-navy-blue group-hover:text-black" xmlns="http://www.w3.org/2000/svg"><path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" fill="" fillRule="nonzero"/></svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}
