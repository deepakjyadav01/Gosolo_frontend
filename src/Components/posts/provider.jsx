import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getpostbyID } from "../services/postAPI";
import MDEditor, { selectWord } from "@uiw/react-md-editor";
import { initialState } from "../context/reducer";

export function Provider(props) {
    const [post, setpost] = useState({})
    const [body, setbody] = useState()
    async function fetchpostdata(id) {
        const res = await getpostbyID(id)
        if (res) {
            console.log(res)
            setpost(res)
            setbody(res.body)
        }
    }
    useEffect(() => {
        fetchpostdata(props.id)
    }, [])
    useEffect(() => {
        console.log(post)
    }, [post])
    useEffect(() => {

    }, [body])

    return (
        <>
            <div class="flex h-max bg-transparent font-roboto">
                {/* <!-- left --> */}

                {/* <!-- main --> */}
                <div class="flex-1 flex flex-col overflow-hidden">
                    <main class="flex-1 overflow-x-hidden overflow-y-auto ">
                        <div class="w-2/3 mx-auto my-10 mb-20 px-20 pb-12 bg-white shadow-xl rounded-2xl">
                            {/* <!-- search --> */}

                            {/* <!-- title --> */}
                            <div class=" flex flex-col justify-center items-center">
                                <div>
                                    <h1 className="flex justify-center mt-8 mb-4 text-4xl leading-8 text-gray-700 py-6">
                                        {post.title}
                                    </h1>

                                </div>
                            </div>
                            <hr class="border-gray-500 mt-8 mb-4" />
                            <div className="text-lg bg-inherit">
                            <MDEditor.Markdown source={body}  />
                            </div>
                            <div class="flex flex-col items-center mt-8">
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
                                    <ul class="list-disc ml-4 font-bold space-y-2 py-4">
                                        <span class="font-semibold text-lg text-gray-800 -ml-4">
                                             Details
                                        </span>
                                        <li class="text-gray-600 text-base">
                                            {post.price} {post.currency}
                                        </li>
                                        <li class="text-gray-600 text-base">
                                            {post.location}
                                        </li>
                                    </ul>
                                    <hr class="border-gray-500 my-4" />
                                    <div className="py-6">
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
                                   
                                </div>
                                <div class="mt-8">
                                    { initialState.userDetails.role[0] === 'FREELANCER' && (
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
                                    )}
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