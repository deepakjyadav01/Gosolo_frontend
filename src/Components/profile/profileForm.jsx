import { React, useRef, useState, useEffect } from "react";
import { initialState } from "../context/reducer";

export function ProfileForm() {
    const [QArray, setQArray] = useState([])
    const [WArray, setWArray] = useState([])
    const [JArray, setJArray] = useState([])
    const [Qualifications, setQualifications] = useState({
        types: "",
        institute: "",
        marks: "",
        year: ""
    })
    const [worksample, setworksample] = useState({
        name: "",
        link: "",
    })
    const [Job, setJob] = useState({
        company: "",
        duration: "",
        position: "",
    })
    // Qualifications
    const handleChange = (e) => {
        setQualifications({ ...Qualifications, [e.target.name]: e.target.value });
    };
    const pushQ = (e) => {
        e.preventDefault()
        setQArray(prev => [...prev, Qualifications])
        setQualifications({
            type: "",
            institute: "",
            marks: "",
            year: ""
        })
    }
    useEffect(() => {
    }, [QArray])
    const remove = (e, index) => {
        e.preventDefault()
        const q = QArray.filter((p) => p.index !== index);
        setQArray(q);
    }
    //job
    const handleChangeJ = (e) => {
        setJob({ ...Job, [e.target.name]: e.target.value });
    };
    const pushJ = (e) => {
        e.preventDefault()
        setJArray(prev => [...prev, Job])
        setJob({
            company: "",
            duration: "",
            position: "",
        })
    }
    const removeJ = (e, index) => {
        e.preventDefault()
        const q = JArray.filter((p) => p.index !== index);
        setJArray(q);
    }
    useEffect(() => {
    }, [JArray])
    //work
    const handleChangeW = (e) => {
        setworksample({ ...worksample, [e.target.name]: e.target.value });
    };
    const pushW = (e) => {
        e.preventDefault()
        setWArray(prev => [...prev, worksample])
        setJob({
            name: "",
            link: ""
        })
    }
    const removeW = (e, index) => {
        e.preventDefault()
        const q = WArray.filter((p) => p.index !== index);
        setWArray(q);
    }
    useEffect(() => {
    }, [WArray])

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoChange = (event) => {
        const photo = event.target.files[0];
        setSelectedPhoto(photo);
    };

    return (
        <>

            <div className=" h-max mx-auto mt-32">
                <div className="lg:flex font-serif lg:w-3/4 mx-auto my-12">
                    <div className="bg-white md:w-2/3 m-8 p-8 md:mx-auto md:px-20 lg:m-0 border-2 shadow-2xl lg:rounded-l-3xl border-white">
                        <h1 className="flex justify-center mt-4 mb-4 text-3xl leading-8  text-gray-700 py-6">Profile Data</h1>
                        <hr className=" bg-slate-600" />
                        {/* FOR FULL HR LINE PUT -mx-20 IN HR className  */}
                        <div className="py-8">
                            <div className="flex mb-8">
                                <span className="flex justify-center border rounded-full w-7 h-7 mr-3 border-blue-500 text-blue-500">
                                    1
                                </span>
                                <span className="font-base xs:font-semibold text-lg capitalize tracking-wide text-gray-700">
                                    Personal Information
                                </span>
                            </div>
                            <div className="flex-auto sm:flex my-2">
                                <div className="w-full sm:w-2/3 ">
                                    <label className="block text-gray-700 font-bold">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="shadow appearance-none  w-full h-10 mt-2 mb-6 px-2 py-1 border outline-none leading-tight rounded text-gray-700 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="w-full sm:w-2/3 my-2">
                                <label className="block text-gray-700 font-bold">Email </label>
                                <input
                                    type="email"
                                    placeholder="Email" value={initialState.userDetails.email} disabled={true}
                                    className="shadow appearance-none w-full h-10 mt-2 mb-6 px-2 py-1 border outline-none leading-tight rounded text-gray-700 focus:outline-none"
                                />
                            </div>
                            <div className="w-full sm:w-2/3 my-2">
                                <label className="block text-gray-700 font-bold">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="shadow appearance-none w-full h-10 mt-2 mb-6 px-2 py-1 border outline-none rounded leading-tight text-gray-700 focus:outline-none"
                                />
                            </div>
                            <div className="w-full sm:w-2/3 mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
                                    Gender
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="gender"
                                    name="gender"
                                >
                                    <option value="">Select a gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="w-full sm:w-2/3 my-4">
                                <label className="py-3 block text-gray-700 font-bold " htmlFor="dateOfBirth">
                                    Date of Birth
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="dateOfBirth"
                                    type="date"
                                    placeholder="Enter your date of birth"

                                />
                            </div>
                        </div>
                        <hr className=" bg-slate-600" />
                        <hr className=" bg-slate-600" />

                        <div className="py-12">
                            <div className="flex mb-8">
                                <span className="flex justify-center border rounded-full w-7 h-7 mr-3 border-blue-500 text-blue-500">
                                    2
                                </span>
                                <span className="font-base xs:font-semibold text-lg capitalize tracking-wide text-gray-700">
                                    Educational Qualifications
                                </span>
                            </div>
                            <div className="flex-auto sm:flex my-2">
                                <div className="w-full px-1 my-2">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
                                        Type
                                    </label>
                                    <select
                                        className="shadow appearance-none border rounded w-full h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="type"
                                        name="types" value={Qualifications.types} onChange={handleChange}
                                    >
                                        <option value="">Select Type</option>
                                        <option value="10">10</option>
                                        <option value="12">12</option>
                                        <option value="Graduation">Graduation</option>
                                    </select>
                                </div>
                                <div className="w-full px-1 my-2">
                                    <label className="block text-gray-700 font-bold ">Institute</label>
                                    <input
                                        type="text" name="institute" value={Qualifications.institute} onChange={handleChange}
                                        placeholder="Institute"
                                        className="shadow appearance-none w-full h-10 mt-2 mb-6 px-2 py-1 border outline-none leading-tight rounded text-gray-700 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex-auto sm:flex my-2">
                                <div className="w-full px-1">
                                    <label className="block text-gray-700 font-bold">Marks</label>
                                    <input
                                        type="text" name="marks" value={Qualifications.marks} onChange={handleChange}
                                        placeholder="marks cgpa/%"
                                        className="shadow appearance-none  w-full h-10 mt-2 mb-6 px-2 py-1 border outline-none leading-tight rounded text-gray-700 focus:outline-none"
                                    />
                                </div>
                                <div className="w-full px-1">
                                    <label className="block text-gray-700 font-bold ">Year</label>
                                    <input
                                        type="text" name="year"
                                        placeholder="Year of passing" value={Qualifications.year} onChange={handleChange}
                                        className="shadow appearance-none w-full h-10 mt-2 mb-6 px-2 py-1 border outline-none leading-tight rounded text-gray-700 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={pushQ}
                                    className="bg-secondary mt-2 w-24 hover:bg-tertiary rounded text-white p-2">  Add
                                </button>
                            </div>
                            <div className=" mt-6" >
                                {QArray.map((q, i) => (
                                    <div key={i} className="my-4">
                                        <div className="bg-white font-sans flex my-4 py-4 justify-around sm:justify-between leading-tight w-full md:mx-auto md:px-20 lg:m-0 border-2 shadow-2xl rounded-lg border-white">
                                            <div>
                                                <ol className="text-lg font-normal my-2 "> <li>{i + 1}. {q.types}</li> </ol>
                                                <ul className="font-light text-base capitalize"> <li>{q.institute} </li><li>{q.marks} CGPA / Percentage</li><li>Year of passing: {q.year}  </li>
                                                </ul>
                                            </div>
                                            <div className="mt-8 flex justify-center justify-self-center bg-primary w-16 h-10 hover:bg-tertiary rounded text-white p-2">
                                                <button onClick={remove}
                                                    className="">delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr className=" bg-slate-600" />
                        <hr className=" bg-slate-600" />

                        <div className="py-12">
                            <div className="flex mb-8">
                                <span className="flex justify-center border rounded-full w-7 h-7 mr-3 border-blue-500 text-blue-500">
                                    3
                                </span>
                                <span className="font-base xs:font-semibold text-lg capitalize tracking-wide text-gray-700">
                                    Job Experience
                                </span>
                            </div>
                            <div className="flex-auto sm:flex my-2">
                                <div className="w-full px-1 my-2">
                                    <label className="block text-gray-700 font-bold ">Company</label>
                                    <input
                                        type="text" name="company" value={Job.company} onChange={handleChangeJ}
                                        placeholder="Company name"
                                        className="shadow appearance-none w-full h-10 mt-2 mb-6 px-2 py-1 border outline-none leading-tight rounded text-gray-700 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex-auto sm:flex my-2">
                                <div className="w-full px-1">
                                    <label className="block text-gray-700 font-bold">Position</label>
                                    <input
                                        type="text" name="position" value={Job.position} onChange={handleChangeJ}
                                        placeholder="Position.. eg: content manager"
                                        className="shadow appearance-none  w-full h-10 mt-2 mb-6 px-2 py-1 border outline-none leading-tight rounded text-gray-700 focus:outline-none"
                                    />
                                </div>
                                <div className="w-full px-1">
                                    <label className="block text-gray-700 font-bold ">Duration</label>
                                    <input
                                        type="text" name="duration"
                                        placeholder="duration eg.. 2 years" value={Job.duration} onChange={handleChangeJ}
                                        className="shadow appearance-none w-full h-10 mt-2 mb-6 px-2 py-1 border outline-none leading-tight rounded text-gray-700 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={pushJ}
                                    className="bg-secondary mt-2 w-24 hover:bg-tertiary rounded text-white p-2">  Add
                                </button>
                            </div>
                            <div className=" mt-6" >
                                {JArray.map((q, i) => (
                                    <div key={i} className="my-4">
                                        <div className="bg-white font-sans flex my-4 py-4 justify-around sm:justify-between leading-tight w-full md:mx-auto md:px-20 lg:m-0 border-2 shadow-2xl rounded-lg border-white">
                                            <div>
                                                <ol className="text-lg font-normal my-2"> <li>{i + 1}. Company: {q.company}</li> </ol>
                                                <ul className="font-light text-base capitalize"> <li>Position: {q.position} </li><li>Duration: {q.duration} </li>
                                                </ul>
                                            </div>
                                            <div className="mt-6 flex justify-center justify-self-center bg-primary w-16 h-10 hover:bg-tertiary rounded text-white p-2">
                                                <button onClick={removeJ}
                                                    className="">delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr className="bg-slate-600" />
                        <hr className="bg-slate-600" />
                        <div className="py-12">
                            <div className="flex mb-8">
                                <span className="flex justify-center border rounded-full w-7 h-7 mr-3 border-blue-500 text-blue-500">
                                    4
                                </span>
                                <span className="font-base xs:font-semibold text-lg capitalize tracking-wide text-gray-700">
                                    Work Sample
                                </span>
                            </div>
                            <div className="flex-auto sm:flex my-2">
                                <div className="w-full px-1">
                                    <label className="block text-gray-700 font-bold">Name/Title</label>
                                    <input
                                        type="text" name="name" value={worksample.name} onChange={handleChangeW}
                                        placeholder="title "
                                        className="shadow appearance-none  w-full h-10 mt-2 mb-6 px-2 py-1 border outline-none leading-tight rounded text-gray-700 focus:outline-none"
                                    />
                                </div>
                                <div className="w-full px-1">
                                    <label className="block text-gray-700 font-bold ">Link</label>
                                    <input
                                        type="text" name="link"
                                        placeholder="link to the work" value={worksample.link} onChange={handleChangeW}
                                        className="shadow appearance-none w-full h-10 mt-2 mb-6 px-2 py-1 border outline-none leading-tight rounded text-gray-700 focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={pushW}
                                    className="bg-secondary mt-2 w-24 hover:bg-tertiary rounded text-white p-2">  Add
                                </button>
                            </div>
                            <div className=" mt-6" >
                                {WArray.map((q, i) => (
                                    <div key={i} className="my-4">
                                        <div className="bg-white font-sans flex my-4 py-4 justify-around sm:justify-between leading-tight w-full md:mx-auto md:px-20 lg:m-0 border-2 shadow-2xl rounded-lg border-white">
                                            <div>
                                                <ol className="text-lg font-normal my-2 "> <li>{i + 1}. {q.name}</li> </ol>
                                                <ul className="font-light text-base capitalize"> <li>{q.link} </li>
                                                </ul>
                                            </div>
                                            <div className="mt-8 flex justify-center justify-self-center bg-primary w-16 h-10 hover:bg-tertiary rounded text-white p-2">
                                                <button onClick={removeW}
                                                    className="">delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="py-8 flex justify-end">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Save & Register
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/3 py-8 lg:m-0 m-8 flex sm:w-2/3 md:w-3/4 lg:rounded-r-3xl shadow-2xl sm:mx-auto bg-blue-500">
                        <div className="px-auto flex-col ">
                            <div className=" mt-40">
                                <div className="flex flex-col items-center">
                                    <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden">
                                        {selectedPhoto ? (
                                            <img src={URL.createObjectURL(selectedPhoto)} alt="Profile" />
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-full w-full text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <label htmlFor="photo" className="mt-2 cursor-pointer">
                                        <span className="text-xl leading-10 font-semibold text-white">Select Photo</span>
                                        <input
                                            type="file"
                                            id="photo"
                                            className="sr-only"
                                            accept="image/*"
                                            onChange={handlePhotoChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        
                            <hr className=" text-white mt-24 mb-12" />
                            <div className="mt-12 font-bold mx-auto my-auto pt-8 pb-3 px-8 text-gray-100 text-2xl">
                                Welcome EveryBody!!!
                            </div>
                            <div className="mt-12">
                                <span className=" text-gray-100 text-3xl px-4">₹</span>
                                <span className="text-gray-100 text-3xl">0.00</span>
                                <sub className=" text-gray-100"> / Year</sub>
                                <div className="italic text-gray-200 text-xl py-4 px-4">
                                    You saw it right. This website is free!
                                </div>
                            </div>
                            <div className="text-gray-100 px-4 mt-4 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <div className="px-2">
                                    <p>Search jobs</p>
                                </div>
                            </div>
                            <div className="text-gray-100 px-4 mt-3 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <div className="px-2">
                                    <p>Interact with providers</p>
                                </div>
                            </div>
                            <div className="text-gray-100 px-4 mt-3 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <div className="px-2">
                                    <p>Earn money</p>
                                </div>
                            </div>
                            <div className="text-gray-100 px-4 mt-3 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <div className="px-2">
                                    <p>Post blogs </p>
                                </div>
                            </div>
                            <hr className="mt-8" />
                            <div className="mt-8 px-3">
                                <p className="text-white content-center">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}

export default ProfileForm;