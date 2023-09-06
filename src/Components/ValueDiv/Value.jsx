import React from 'react'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem] ' >
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block ' >The value that hold us true and to account</h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center ">

        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]  ">
          <div className="flex items-center gap-3 ">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center  ">
              <img src="src/assets/Xbox_one_logo.png" alt="" className='w-[70%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px] ' >
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ' >
            Things being made beautiful simple are at the heart of everything we do.
          </p>
        </div>

        {/* ------First Value---- */}


        <div className="singleGrid rounded-[10px] hover:bg-[#f7d1e1] p-[1.5rem]  ">
          <div className="flex items-center gap-3 ">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center  ">
              <img src="src/assets/NicePng_refresh-icon-png_2047577.png" alt="" className='w-[70%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px] ' >
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ' >
            We believe in making things better for everyone, even if just by a little bit !
          </p>
        </div>
        {/* ---------second value---- */}

        <div className="singleGrid rounded-[10px] hover:bg-[#f3f2ad] p-[1.5rem]  ">
          <div className="flex items-center gap-3 ">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center  ">
              <img src="src/assets/transparent-logo.jpg" alt="" className='w-[70%]' />
            </div>

            <span className='font-semibold text-textColor text-[18px] ' >
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ' >
            We work on the basis of creating trust which can be nurtured through authenticity and transparency
          </p>
        </div>

        {/* ----------Third Value------ */}

      </div>


    </div>

  )
}

export default Value