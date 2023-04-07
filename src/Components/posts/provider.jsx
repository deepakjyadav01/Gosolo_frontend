import React,{useState ,useEffect} from "react";
import {  useNavigate,useParams } from "react-router-dom";
import { getpostbyID } from "../services/postAPI";

export function Provider(props) {
    const [post, setpost] = useState()
      async function fetchpostdata(id){
        const res = await getpostbyID(id)
        if(res){
            console.log(res)
            setpost(res)
        }
    }
    useEffect(() => {
            fetchpostdata(props.id)
    }, [])
    
    return (
        <>
        <div class="flex h-max bg-transparent font-roboto">
                {/* <!-- left --> */}

                {/* <!-- main --> */}
                <div class="flex-1 flex flex-col overflow-hidden">
                    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-transparent">
                        <div class="container mx-auto px-6 py-8">
                            {/* <!-- search --> */}

                            {/* <!-- title --> */}
                            <div class="px-8 pt-8 flex flex-col justify-center items-center">
                                <div class="bg-indigo-200 rounded-md p-4 my-2">
                                    <svg
                                        class="w-10 h-10"
                                        viewBox="0 0 256 262"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="xMidYMid"
                                    >
                                        <path
                                            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                            fill="#EB4335"
                                        />
                                    </svg>
                                </div>
                                <div class="text-center space-y-2">
                                    <p class="text-indigo-800 text-lg font-bold">
                                        UX Designer, <br />
                                        Google Pay
                                    </p>
                                    <p class="text-gray-700 text-lg">Google Inc, Sanghai China</p>
                                </div>
                            </div>
                            <hr class="border-gray-500 mt-8 mb-4" />
                            <div class="flex flex-col items-center ">
                                <div class="space-y-4 ">
                                    <ul class="list-disc ml-4 space-y-2">
                                        <span class="text-lg font-semibold text-gray-800 -ml-4">
                                            Minimum qualifications:
                                        </span>
                                        <li class="text-gray-600 text-base">
                                            Bachelor's degree in Design, related field, or equifalent
                                            practical experience.
                                        </li>
                                        <li class="text-gray-600 text-base">
                                            7 years of experience as a UX or Interaction Designer.
                                        </li>
                                    </ul>
                                    <ul class="list-disc ml-4 space-y-2">
                                        <span class="font-semibold text-lg text-gray-800 -ml-4">
                                            Prefered qualifications:
                                        </span>
                                        <li class="text-gray-600 text-base">
                                            Bachelor's degree in Design, related field, or equifalent
                                            practical experience.
                                        </li>
                                        <li class="text-gray-600 text-base">
                                            7 years of experience as a UX or Interaction Designer.
                                        </li>
                                    </ul>
                                    <hr class="border-gray-500 my-2" />
                                    <div>
                                        <span class="font-semibold text-lg text-gray-800">
                                            About the job:
                                        </span>
                                        <p class="text-base text-gray-600">
                                        Spam identification is one of the most basic applications of machine learning. Most of our email inboxes also have an unsolicited, bulk, or spam inbox, where our email provider automatically filters unwanted spam emails.
                But how do they know that the email is spam? consectetur adipisicing elit.
                                            Cumque, aspernatur. Sequi consequatur aspernatur architecto
                                            temporibus voluptatibus quidem a quas iure. Perspiciatis
                                            cumque, minus fuga dolorem repudiandae molestiae natus saepe
                                            quam!
                                        </p>
                                    </div>
                                    <p class="font-semibold text-indigo-500 text-xs">
                                        Read More
                                        <svg
                                            version="1.1"
                                            id="Capa_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            class="w-3 h-3 inline ml-2"
                                            viewBox="0 0 292.362 292.362"
                                            style={{ enableBackground: "new 0 0 292.362 292.362" }}
                                            xmlSpace="preserve"
                                        >
                                            <g>
                                                <path
                                                    fill="#667eea"
                                                    d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
                           C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
                               s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
                                                />
                                            </g>
                                        </svg>
                                    </p>
                                </div>
                                <div class="mt-8">
                                    <div class="flex items-center justify-between space-x-2">
                                        <button
                                            type="button"
                                            class="px-10 py-2 rounded-2xl bg-indigo-500 text-xs text-white font-semibold focus:outline-none focus:border-red-800"
                                        >
                                            Apply Now
                                        </button>
                                        <button
                                            type="button"
                                            class="px-4 py-2 rounded-2xl bg-indigo-500 text-white font-semibold"
                                        >
                                            <svg
                                                class="w-5 h-5 text-white"
                                                viewBox="0 0 512 512.0002"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill="white"
                                                    d="m256 0c-141.484375 0-256 114.496094-256 256 0 44.902344 11.710938 88.757812 33.949219 127.4375l-32.984375 102.429688c-2.300782 7.140624-.410156 14.96875 4.894531 20.273437 5.253906 5.253906 13.0625 7.214844 20.273437 4.894531l102.429688-32.984375c38.679688 22.238281 82.535156 33.949219 127.4375 33.949219 141.484375 0 256-114.496094 256-256 0-141.484375-114.496094-256-256-256zm0 472c-40.558594 0-80.09375-11.316406-114.332031-32.726562-4.925781-3.078126-11.042969-3.910157-16.734375-2.078126l-73.941406 23.8125 23.8125-73.941406c1.804687-5.609375 1.042968-11.734375-2.082032-16.734375-21.40625-34.238281-32.722656-73.773437-32.722656-114.332031 0-119.101562 96.898438-216 216-216s216 96.898438 216 216-96.898438 216-216 216zm25-216c0 13.804688-11.191406 25-25 25s-25-11.195312-25-25c0-13.808594 11.191406-25 25-25s25 11.191406 25 25zm100 0c0 13.804688-11.191406 25-25 25s-25-11.195312-25-25c0-13.808594 11.191406-25 25-25s25 11.191406 25 25zm-200 0c0 13.804688-11.191406 25-25 25-13.804688 0-25-11.195312-25-25 0-13.808594 11.195312-25 25-25 13.808594 0 25 11.191406 25 25zm0 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                </div>
                {/* <!-- right --> */}
            </div>
        </>
    )
}

export default Provider;