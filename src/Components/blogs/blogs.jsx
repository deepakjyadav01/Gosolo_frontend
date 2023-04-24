import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { getblogs } from '../services/blogAPI';


export function Blogs() {
  const [blog, setblog] = useState([])
  const navigate = useNavigate()
  async function fetchblogs() {
    const res = await getblogs()
    if (res) {
      console.log(res)
      setblog(res)
      if (res) {
        // res.forEach(q => {
        //   if (q.Provider._id === initialState.userDetails.id) {
        //     let filteredArray =  res.filter(item => item !== q)
        //     setpost(filteredArray)
        //   }
        // });
      }
    }
  }
  const gotoblog = (ID) => {
    navigate("/ViewBlog", { state: { id: ID } })
 }
  useEffect(() => {
    fetchblogs()
  }, [])

  return (
    <>
      <div className="bg-inherit px-8 my-20 font-sans  font-medium">
        <div class="h-max  grid grid-col-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-row-4 gap-10 ">
          <div class="text-black bg-white text-center mx-2 text-5xl rounded-2xl shadow-2xl row-span-6 md:row-span-3 my-12 ">
            ads
          </div>

          {blog.map((q, i) => (

            <div className="bg-white w-2/3 md:w-full mx-auto  font-sans my-12 text-black border-slate-300 rounded-2xl shadow-2xl">
              <div className="h-42 overflow-hidden relative">
                <img
                  className="mb-2 rounded-t-2xl  "
                  src="https://picsum.photos/500/350?random=5"
                  alt=""
                />
              </div>
              <div className=" w-full bg-white px-4 py-4 shadow-md rounded-b-2xl transition transform duration-500 ">
                <div className="flex flex-col justify-start">
                  <div className="flex justify-between items-center w-auto">
                    <div className="ml-1 text-xl w-auto shrink max-h-11 text-clip capitalize font-semibold text-bookmark-blue flex flex-1 items-center mb-2">
                      <div> {q.title} </div>
                    </div>
                  </div>
                  <div className=" ml-1 mt-2 text-base text-gray-500 flex space-x-1 items-center">
                    <div className="font-medium"> {q.category} </div>
                  </div>
                  <div className=" text-base text-gray-500 flex space-x-1 items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 mr-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>

                    <span className="ml-4">
                      {" "}
                      blog by: <span> {q.user.fullname} </span>
                      <span className=" hover:underline cursor-pointer">

                      </span>
                    </span>
                  </div>

                  <hr className="h-px my-4 ml-2 mr-2 bg-gray-200 border-0 dark:bg-gray-700" />

                  {/* <p className="space-x-1 px-4 text-base">Posted by ..... "Bradly Ramos"</p> */}
                  <div>
                    <div className="flex flex-col mb-4 mt-4">
                      <button onClick={() => { gotoblog(q._id) }}
                        className="mr-2 my-1 uppercase tracking-wider px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white border text-sm font-semibold rounded py-1 transition transform duration-500 cursor-pointer"
                      >
                        View Details
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div></>
  )

}

export default Blogs;