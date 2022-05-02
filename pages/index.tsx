import type { NextPage } from 'next'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import axios from 'axios'
import Search from '../src/components/Search'
import search from '../src/icons/icon-search.svg'
import company from '../src/icons/company.svg'
import twitter from '../src/icons/twitter.svg'
import website from '../src/icons/website.svg'
import location from '../src/icons/location.svg'
import { useState, useEffect } from 'react'
const Home: NextPage = () => {
  const [User, setUser] = useState('Octocat')
  const [Info, setInfo] = useState<any>([])
  const [valid, setValid] = useState<any>(true)
  const fetchData = () => {
    return axios.get(`https://api.github.com/users/${User}`)
    .then((res) => {
      setInfo(res.data)
      setValid(true)
      return res.data
    })
    .catch((err) => {
      console.log(err)
      setValid(false)
    })
  }

  useEffect(() => {
    fetchData()
  },[])

  const Months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec',]

  const dateString = String(Info.created_at)
  const fullDate : any = dateString.substring(0, 10)
  const secondMonth = fullDate[5] + fullDate[6] -1
  return (
  <div className="bg-snow flex h-screen g flex-col gap-4  dark:bg-dark-mode-bg transition duration-75">
    <Search/>
    <div initial={{y : 0}} animate={{y : 0}} className="flex md:w-4/5 md:max-w-md-width  flex-row items-center px-3 mx-auto gap-2 h-16 rounded-2xl dark:bg-dark-blue bg-white shadow-xl w-full max-w-mob-search">
      <Image src={search} alt="search icon"/>
      <input onChange={(e) => setUser(e.target.value)} type="text" className="bg-transparent outline-none dark:text-white text-sm font-Space-Mono w-full" placeholder="Search GitHub username..." />
      <p className={`w-40 text-red-600 a font-Space-Mono font-semibold ${!valid ? 'flex' : 'hidden'}`}>No Results</p>
      <button whileHover={{scale : 1.1}} whileTap={{scale : 0.9}} onClick={() => fetchData()} className="h-11 bg-sky-blue w-20 font-Space-Mono text-white px-2 rounded-xl font-medium">Search</button>
    </div>
    <div className="w-full md:w-4/5 md:max-w-md-width gap-7 max-w-mob-search shadow-lg flex flex-col dark:bg-dark-blue rounded-2xl h-mob-container mx-auto">
      <div className="flex flex-row gap-5 ml-6 mt-6 u md:items-center md:mt-10">
        <img initial={{y : -50 , opacity : 0}} animate={{y : 0 , opacity : 1 }} transition={{duration : 0}} src={Info.avatar_url} className="w-mob-profile h-mob-profile rounded-full md:w-tablet-profile md:h-tablet-profile" alt="profic picture" />
        <div className="flex flex-col gap-1  lg:grid lg:grid-cols-2">
          <h2 initial={{y : -80 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{ duration : 0}} className="font-Space-Mono font-bold text-base dark:text-white md:text-2xl">{Info.name}</h2>
          <a href={Info.html_url} >
            <h3 initial={{y : -100 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{ duration : 0}}  className="font-Space-Mono lg:hidden text-sky-blue md:text-base">{'@' + Info.login}</h3>
          </a>
          <h3 initial={{y : -100 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{ duration : 0}}  className="font-Space-Mono hidden lg:flex text-sky-blue md:text-base">{'@' + Info.login}</h3>
          <h3 initial={{y : -110 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{duration : 0}}  className="font-Space-Mono text-sm dark:text-white text-light-grey md:text-base ">
            {"Joined" + ' ' + fullDate[8] + fullDate[9] + ' ' + Months[secondMonth] + ' ' + fullDate[0] + fullDate[1] + fullDate[2] + fullDate[3]}
          </h3>
        </div>
      </div>
      <p initial={{y : -120 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{duration : 0}} className={`font-Space-Mono text-sm leading-6 md:text-base ml-6 w-72 md:w-11/12  ${!Info.bio ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`}>{Info.bio !== null ? Info.bio : 'This profile has no bio'}</p>
      <div initial={{y : -130 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{duration : 0}} className="dark:bg-dark-mode-bg font-Space-Mono place-items-center pr-3 dark:text-white w-72 h-20 ml-6 rounded-2xl  bg-blue-50 grid grid-cols-3 md:w-11/12 ">
        <p className=" text-navy-blue r text-sm dark:text-white">Repos</p>
        <p className="text-navy-blue text-sm dark:text-white">Followers</p>
        <p className="text-navy-blue text-sm dark:text-white">Following</p>
        <p className="text-xl font-bold">{Info.public_repos}</p>
        <p className="text-xl font-bold">{Info.followers}</p>
        <p className="text-xl a font-bold">{Info.following}</p>
      </div>
      <div initial={{opacity : 0 , y : -150}} animate={{opacity : 1 , y : 0}} transition={{duration : 0}} className="flex flex-col ml-5 mt-6 gap-4 md:grid md:grid-cols-2">
      
      <div className="flex flex-row gap-5">
      <Image src={location}  className={`fill-current ${!Info.location ? 'text-light-grey' : 'dark:text-white text-navy-blue'}`}/>
          <p className={`sans-serif ${!Info.location  ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`}>{!Info.location ? 'Not Available' : Info.location}</p>
      </div>


      <div className="flex flex-row n gap-4">
        <Image src={twitter}  className={`fill-current ${!Info.twitter_username ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`} />
        <a className={`sans-serif ${!Info.twitter_username  ? 'text-light-grey bg-transparent' : 'text-light-grey bg-transparent dark:text-white'}`} href={'https://twitter.com/' + Info.twitter_username}> <p> {!Info.twitter_username ? 'Not Available' : Info.twitter_username} </p></a> 
      </div>


      <div className="flex flex-row gap-4  ">
      <Image src={website}  className={`fill-current ${!Info.blog ? 'text-light-grey' : 'text-navy-blue g dark:text-white'}`} />
        <a href={Info.blog} className={`sans-serif break-words w-4/5 hover:underline  ${!Info.blog  ? 'text-light-grey ' : 'text-light-grey  dark:text-white'}`}>{!Info.blog ? 'Not Available' : Info.blog}</a>
      </div>


      <div className="flex flex-row gap-4">
        <Image src={company} className={`fill-current ${!Info.company ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`} width="20" />
        <a href={`https://github.com/${Info.company}`} className={`sans-serif ${!Info.company ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`}>{!Info.company ? 'Not Available' : Info.company}</a>
      </div>
    </div>
  </div>
</div>
)
}

export default Home
