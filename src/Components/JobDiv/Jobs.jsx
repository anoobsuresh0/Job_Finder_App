import React from 'react'
import { BiTimeFive } from 'react-icons/bi'

//imported Images-----------

//using map.. storing values in DATA

const Data = [
  {
    id: 1,
    Image: 'https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business.png',
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    company: 'Google Inc'
  },
  {
    id: 2,
    Image: 'https://w7.pngwing.com/pngs/54/524/png-transparent-figma-app-logo-tech-companies-thumbnail.png',
    title: 'Ui/UX Developer',
    time: 'Now',
    location: 'India',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    company: 'Figma'
  },
  {
    id: 3,
    Image: 'https://png.pngitem.com/pimgs/s/509-5093420_huawei-logo-png-transparent-png.png',
    title: 'Software Engineer',
    time: '1 month',
    location: 'Dubai',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    company: 'Huawei'
  },
  {
    id: 4,
    Image: 'https://app.flutterflow.io/icons/ff-icon-192.png',
    title: 'Flutter Devloper',
    time: '2 month',
    location: 'Remote',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    company: 'Flutterflow.io'
  },
  {
    id: 5,
    Image: 'https://e7.pngegg.com/pngimages/14/125/png-clipart-logo-nikon-camera-nikon-logo-text-logo.png',
    title: 'IoT Engineer',
    time: 'Now',
    location: 'India',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    company: 'Nikon'
  },
  {
    id: 6,
    Image: 'https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png',
    title: 'Front-end Developer',
    time: '3 month',
    location: 'India',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    company: 'Twitter'
  },
  {
    id: 7,
    Image: 'src/assets/tesla.png',
    title: 'Electrical Trainee',
    time: 'Now',
    location: 'USA',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    company: 'Tesla'
  },
  {
    id: 8,
    Image: 'https://w7.pngwing.com/pngs/175/949/png-transparent-fedex-logo-logos-logos-and-brands-icon-thumbnail.png',
    title: 'Delivery Partner',
    time: '5 month',
    location: 'Europe',
    desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    company: 'FedEx'
  },
]

//Above is a single company



const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 ">

        {/* <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg ">

          <span className='flex justify-between items-center gap-4 ' >
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white ' >Web Developer</h1>
            <span className='flex items-center text-[#ccc] gap-1' >
              <BiTimeFive />Now
            </span>
          </span>
          <h6 className='text-[#ccc]  ' >Canada</h6>

          <p className='text-[13px]  text-[#95959] pt-20px border-t-[2px] mt-[20px] group-hover:text-white ' >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit!
          </p>



          <div className="company flex items-center gap-2 ">
            <img src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="flutter" className='w-[10%]' />
            <span className='text-[14px] py-[1rem] block group-hover:text-white' >Google</span>
          </div>

          <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold  text-textColor hover:bg-[#3d4546]  group-hover/item:text-textColor group-hover:text-white ' >Apply Now</button>

        </div> */}


        {/* ----------------- Above muted for one container job values------------ */}

        {
          Data.map(({ id, Image, title, time, location, desc, company }) => {
            return (
              // ----------------This will return a single job post based on the id--------

              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-2xl shadow-blue-500/20 shadow-greyIsh-400/700 hover:shadow-lg ">

                <span className='flex justify-between items-center gap-4 ' >
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white ' >{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1' >
                    <BiTimeFive />{time}
                  </span>
                </span>
                <h6 className='text-[#ccc]  ' >{location}</h6>

                <p className='text-[13px]  text-[#95959] pt-20px border-t-[2px] mt-[20px] group-hover:text-white ' >
                  {desc}
                </p>



                <div className="company flex items-center gap-2 ">
                  <img src={Image} alt="flutter" className='w-[10%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white' >{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold  text-textColor hover:bg-white  group-hover:text-textColor group-focus:text-white ' >Apply Now</button>

              </div>

            )
          })

        }

      </div>
    </div>
  )
}

export default Jobs