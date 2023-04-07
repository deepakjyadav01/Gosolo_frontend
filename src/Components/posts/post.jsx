import React,{useState ,useEffect} from "react";
import {  useNavigate,useParams } from "react-router-dom";
import { getpostbyID } from "../services/postAPI";
import Provider from "./provider";

export function Post(props) {
    const { id } = useParams();
    const [post, setpost] = useState()
      async function fetchpostdata(id){
        const res = await getpostbyID(id)
        if(res){
            console.log(res)
            setpost(res)
        }
    }
    useEffect(() => {
            fetchpostdata(id)
    }, [])
    
    return (
        <>
            <Provider/>
        </>
    )
}

export default Post;