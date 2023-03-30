import React from "react";
import { useParams} from 'react-router-dom';

 export function Post() {
    const { id } = useParams();
        return (
            <> 
             <div className="container bg-slate-400 mx-auto my-28">
                {id}
             </div>
            </>
        )
    }

export default Post;