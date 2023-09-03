import React from 'react'

//import icons from react ui
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BsHouseDoor } from 'react-icons/bs'

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh  rounded-[10px] p-[3rem] ' >
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

          <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300 ' >Search</button>



        </div>
      </form>
      <div className="secDiv flex items-center gap-10 justify-center " >

          {/* SortBy */}
        <div className="singleSearch flex items-center gap-2 ">
          <label htmlFor="relevance" className='text-[#808080] font-semibold ' >Sort by :</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1 ' >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>
                {/* Type */}
        <div className="singleSearch flex items-center gap-2 ">
          <label htmlFor="type" className='text-[#808080] font-semibold ' >Type :</label>
          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1 ' >
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-time</option>
          </select>
        </div>


        <div className="singleSearch flex items-center gap-2 ">
          <label htmlFor="level" className='text-[#808080] font-semibold ' >Level :</label>
          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1 ' >
            <option value="">Fresher</option>
            <option value="">Intermediate</option>
            <option value="">Senior</option>
            <option value="">Advocate</option>
          </select>
        </div>
        
        <span className='text-[#a1a1a1] cursor-pointer ' >Clear all</span>


      </div>

    </div>
  )
}

export default Search