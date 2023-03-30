import { React, useEffect } from "react";
import { initialState } from "../context/reducer";
import {ProfileForm} from "./profileForm"
import Loader from "../home/loader";
import ProfileData from "./ProfileData";

export function Profile(){
   useEffect(() => {
      if(initialState.loading){
         initialState.loading = !initialState.loading
      }
   }, [])
   return(
      <>
      {initialState.userDetails.profileID === null ? <ProfileForm/> : <ProfileData/>}

      </>
   )
}

export default Profile;