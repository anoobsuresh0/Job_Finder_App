import React from 'react'

//import icons from react ui
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsHouseDoor} from 'react-icons/bs'

const Search = () => {
  return (
    <div className='searchDiv grid gp-10 bg-greyIsh  rounded-[10px] p-[3rem] ' >
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700 ">
           
           
              {/* First search bar */}
          <div className="flex gap-2 items-centre ">   
            <AiOutlineSearch className='text-[25px] icon ' />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search for jobs' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon ' />
          </div>


              {/* Middle Search Bar */}
          <div className="flex gap-2 items-centre ">
            <BsHouseDoor className='text-[25px] icon ' />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by company' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon ' />
          </div>

            {/* Last Search Bar */}
          <div className="flex gap-2 items-centre ">
            <GoLocation className='text-[25px] icon ' />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by location' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon ' />
          </div>



        </div>
      </form>
    </div>
  )
}

export default Search