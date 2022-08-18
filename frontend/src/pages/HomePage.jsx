import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import {BsSearch} from 'react-icons/bs'
import AddCard from '../components/AddCard'

const HomePage = () => {
    const [adds, setadds] = useState([])
    const [keyword, setkeyword] = useState("")
    const [isChange, setisChange] = useState(false)
    const fetchData=async()=>{
      setisChange(true)

      console.log(keyword)
      const {data}=await axios.get(`/api/v1/adds/${keyword}`)

      setadds(data)
      console.log(data)
    }
     

  return ( 
    <div className='bg-red-100 h-screen '>
        <Navbar/>
        <div className='px-20 flex'>
            <input 
            type="text"
            className='w-full py-6 my-4 px-8 border-[1px] border-slate-400 outline-none text-2xl'
            value={keyword}
            onChange={(e)=>setkeyword(e.target.value)}
            placeholder="Search here"
            onClick={()=>fetchData()}
            />
            <BsSearch 
             onClick={()=>fetchData()}
            className='mt-9 -ml-14 cursor-pointer'
            size={30}/>
        </div>

        <div className='grid grid-cols-4 gap-4 px-20'>
          {adds.length>0 ? 
          adds.map((add)=>(
            <AddCard image={add.imageUrl} heading={add.headline} CTA={add.CTA}/>
          ))
          :
            <p className='text-6xl text-red-500'>No Adds Available</p>
          
          }
        </div>
    </div>
  )
}

export default HomePage