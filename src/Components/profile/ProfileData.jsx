import { React, useEffect, useState } from "react";
import { initialState } from "../context/reducer";
import { useLocation, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { getProfile, getImage } from "../services/profileAPI";
import { baseURL } from "../services/api";

const navigation = [
   { name: "Dashboard", href: "#", current: true },
   { name: "Team", href: "#", current: false },
   { name: "Projects", href: "#", current: false },
   { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}
export function ProfileData() {
   const [bool, setbool] = useState(true)
   const navigate = useNavigate()

   async function fetchdata() {
      const id = initialState.userDetails.profileID
      const res = await getProfile(id)
      setphoto(res.image._id)
      console.log(res)
      const img = await getImage(res.image._id)
      console.log(img)
      setData(res)
   }
   const [Data, setData] = useState({})
   const [photo, setphoto] = useState()
   const location = useLocation();

   useEffect(() => {
      const profileID = initialState.userDetails.profileID
      if (profileID === null) {
         navigate("/Profile")
      }
      if (bool) {
         fetchdata()
         setbool(false)
      }
   }, [])
   useEffect(() => {
   }, [photo])
   useEffect(() => {
   }, [Data])


   return (
      <div class="h-screen bg-inherit font-serif">
         <div class="container mx-auto my-10 p-5">
            <div class="md:flex no-wrap md:mx-2 ">
               {/* <!-- Left Side --> */}
               <div class="w-full md:w-5/12 lg:w-3/12 md:mx-6">
                  {/* <!-- Profile Card --> */}
                  <div class="bg-white  mx-auto px-4 border-t-8 border-b-8 border-green-400">
                     <div class="image overflow-hidden mt-8">
                        <img
                           class="xs:h-32 xs:w-32 sm:h-48 sm:w-48 mx-auto rounded-full" //src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                           src={`http://localhost:3200/api/auth/image/${photo}`}
                           alt="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        ></img>
                     </div>
                     <h1 class="text-gray-900 font-semibold text-3xl text-center lg:my-8 leading-8 mt-8">
                        {Data.fullname}
                     </h1>
                     <h3 class="text-gray-600 font-normal text-base leading-7 capitalize mx-4 my-8">
                     {Data.Aboutme}
                     </h3>
                     
                  </div>
                  {/* <!-- End of profile card --> */}
                  <div class="my-4"></div>

                  {/* <!-- End of friends card --> */}
               </div>
               {/* <!-- Right Side --> */}
               <div class="w-full md:w-7/12 lg:w-9/12 mx-2 h-64">
                  {/* <!-- Profile tab --> */}
                  {/* <!-- About Section --> */}
                  <div class="bg-white p-3 shadow-sm rounded-sm">
                     <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                           <svg
                              class="h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 stroke-width="2"
                                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                           </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                     </div>
                     <div class="text-gray-700">
                        <div class="grid lg:grid-cols-2 text-sm">
                           <div class="grid grid-cols-2">
                              <div class="px-4 py-2 font-semibold">First Name</div>
                              <div class="px-4 py-2">Jane</div>
                           </div>
                           <div class="grid grid-cols-2">
                              <div class="px-4 py-2 font-semibold">Last Name</div>
                              <div class="px-4 py-2">Doe</div>
                           </div>
                           <div class="grid grid-cols-2">
                              <div class="px-4 py-2 font-semibold">Gender</div>
                              <div class="px-4 py-2">Female</div>
                           </div>
                           <div class="grid grid-cols-2">
                              <div class="px-4 py-2 font-semibold">Contact No.</div>
                              <div class="px-4 py-2">+11 998001001</div>
                           </div>
                           <div class="grid grid-cols-2">
                              <div class="px-4 py-2 font-semibold">Current Address</div>
                              <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                           </div>
                           <div class="grid grid-cols-2">
                              <div class="px-4 py-2 font-semibold">Permanant Address</div>
                              <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                           </div>
                           <div class="grid grid-cols-2">
                              <div class="px-4 py-2 font-semibold">Email.</div>
                              <div class="px-4 py-2">
                                 <a class="text-blue-800" href="mailto:jane@example.com">
                                    jane@example.com
                                 </a>
                              </div>
                           </div>
                           <div class="grid grid-cols-2">
                              <div class="px-4 py-2 font-semibold">Birthday</div>
                              <div class="px-4 py-2">Feb 06, 1998</div>
                           </div>
                        </div>
                     </div>
                     <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                        Show Full Information
                     </button>
                  </div>
                  {/* <!-- End of about section --> */}

                  <div class="my-4"></div>

                  {/* <!-- Experience and education --> */}
                  <div class="bg-white p-3 shadow-sm rounded-sm">
                     <div class="grid grid-cols-2">
                        <div>
                           <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                              <span clas="text-green-500">
                                 <svg
                                    class="h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                 >
                                    <path
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       stroke-width="2"
                                       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                 </svg>
                              </span>
                              <span class="tracking-wide">Experience</span>
                           </div>
                           <ul class="list-inside space-y-2">
                              <li>
                                 <div class="text-teal-600">Owner at Her Company Inc.</div>
                                 <div class="text-gray-500 text-xs">March 2020 - Now</div>
                              </li>
                              <li>
                                 <div class="text-teal-600">Owner at Her Company Inc.</div>
                                 <div class="text-gray-500 text-xs">March 2020 - Now</div>
                              </li>
                              <li>
                                 <div class="text-teal-600">Owner at Her Company Inc.</div>
                                 <div class="text-gray-500 text-xs">March 2020 - Now</div>
                              </li>
                              <li>
                                 <div class="text-teal-600">Owner at Her Company Inc.</div>
                                 <div class="text-gray-500 text-xs">March 2020 - Now</div>
                              </li>
                           </ul>
                        </div>
                        <div>
                           <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                              <span clas="text-green-500">
                                 <svg
                                    class="h-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                 >
                                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path
                                       fill="#fff"
                                       d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    />
                                    <path
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       stroke-width="2"
                                       d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    />
                                 </svg>
                              </span>
                              <span class="tracking-wide">Education</span>
                           </div>
                           <ul class="list-inside space-y-2">
                              <li>
                                 <div class="text-teal-600">Masters Degree in Oxford</div>
                                 <div class="text-gray-500 text-xs">March 2020 - Now</div>
                              </li>
                              <li>
                                 <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                 <div class="text-gray-500 text-xs">March 2020 - Now</div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     {/* <!-- End of Experience and education grid --> */}
                  </div>
                  {/* <!-- End of profile tab --> */}
               </div>
            </div>
         </div>
      </div >
   );
}
// NAVBAR ENDS

// USER PROFILE GRID


export default ProfileData;