import { React, useState, useEffect } from "react";
import img1 from "../assets/login.jpg";
import { useNavigate, Outlet } from 'react-router-dom';
import Loader from "../home/loader";

export function Viewposts(props) {
  const navigate = useNavigate();

  const toPost = (id) => {
    navigate(`/ViewPosts/:${id}`);
  }
  const [loading, setloading] = useState(true)
  const onLoadEffect = () => {
    setTimeout(() => {
      setloading(false);
    }, 3000);

  }; useEffect(onLoadEffect, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="bg-inherit m-2 xs:m-4 p-3 sm:m-3 sm:p-2 font-sans font-medium">
        <div class="h-max grid grid-col-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-row-4 gap-10 p-2 xs:p-8  sm:p-16">
          <div class="text-black bg-white text-center text-5xl rounded-2xl row-span-6 md:row-span-3 ">

          </div>

          <div class="bg-white  text-black border-slate-300 rounded-md shadow-lg">
            <div class="h-42 overflow-hidden">
              <img class=" rounded-lg rounded-r-xl" src="https://picsum.photos/500/350?random=5" alt="" />
            </div>
            <div className=" pt-4">
              <h3 class="px-4 text-lg font-bold">Machine Learning</h3>
              <p class="px-4 text-base">Posted by ..... "Bradly Ramos"</p>
              <hr class="h-px my-4 ml-2 mr-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <p class="px-4 text-sm mt-3">
                Spam identification is one of the most basic applications of machine learning. Most of our email inboxes also have an unsolicited, bulk, or spam inbox, where our email provider automatically filters unwanted spam emails.
                But how do they know that the email is spam?
                
              </p>
              <div class="mb-7">
                <button onClick={() => { toPost(234) }} class="bg-slate-300 hover:bg-slate-200 border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  View Details
                </button>

              </div>
            </div>
          </div>
          <div class="flex-col bg-white font-sans text-black border-slate-300 rounded-md shadow-lg">
            <div class="h-42 overflow-hidden">
              <img class=" rounded-lg rounded-r-xl" src="https://picsum.photos/500/350" alt="" />
            </div>
            <div className=" pt-4">
              <h3 class="px-4 text-lg font-bold ">Content writing</h3>
              <p class="px-4 text-base">Posted by ..... "Arun Kumar"</p>
              <hr class="h-px my-4 ml-2 mr-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <p class="px-4 text-sm mt-3">
              our writing can be absolutely stunning, but if it's not SEO-optimized, no one will ever read it.
As a content writer, it's critical you become familiar with SEO when it comes to writing.While SEO is critical for ensuring your content ranks on search engines like Google

              </p>
              <div class="mb-7 flex-col justify-end ">
                <button onClick={() => { toPost(234) }} class="bg-slate-300  hover:bg-slate-200 border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  View Details
                </button>

              </div>
            </div>
          </div>
          <div class="bg-white font-sans text-black border-slate-300 rounded-md shadow-lg">
            <div class="h-42 overflow-hidden">
              <img class=" rounded-lg rounded-r-xl" src="https://picsum.photos/500/350?random=2" alt="" />
            </div>
            <div className=" pt-4">
              <h3 class="px-4 text-lg font-bold">Deep Learning</h3>
              <p class="px-4 text-base">Posted by ..... "Ajay singh"</p>
              <hr class="h-px my-4 ml-2 mr-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <p class="px-4 text-sm mt-3">
              Deep neural networks consist of multiple layers of interconnected nodes, each building upon the previous layer to refine and optimize the prediction or categorization. develop such application with the use of the exisiting knowledge
              </p>
              <div class="mb-7">
                <button onClick={() => { toPost(234) }} class="bg-slate-300 hover:bg-slate-200 border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  View Details
                </button>

              </div>
            </div>
          </div>
          <div class="bg-white font-sans text-black border-slate-300 rounded-md shadow-lg">
            <div class="h-42 overflow-hidden">
              <img class=" rounded-lg rounded-r-xl" src="https://picsum.photos/500/350?random=1" alt="" />
            </div>
            <div className=" pt-4">
              <h3 class="px-4 text-lg font-bold">Web Development</h3>
              <p class="px-4 text-base">Posted by ..... Martin Guptill</p>
              <hr class="h-px my-4 ml-2 mr-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <p class="px-4 text-sm mt-3">
              The first thing that catches the viewer’s attention is usually an attractive design. People like to interact with attractive designs as well as web development. Everything created for marketing should be of high quality. This allows you to increase user engagement and conversions. 
              </p>
              <div class="mb-7">
                <button onClick={() => { toPost(234) }} class="bg-slate-300 hover:bg-slate-200 border text-center px-2 py-2 ml-4 mt-5 rounded-xl ">
                  View Details
                </button>

              </div>
            </div>
          </div>


        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Viewposts;
