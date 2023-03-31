import { React, useEffect ,useState} from "react";
import { initialState } from "../context/reducer";
import { ProfileForm } from "./profileForm"
import Loader from "../home/loader";
import ProfileData from "./ProfileData";

export function Profile() {
   const [loading, setloading] = useState(true)
   const onLoadEffect = () => {
      setTimeout(() => {
         setloading(false);
      }, 3000);

   };useEffect(onLoadEffect, []);
   if (loading) {
      return <Loader />;
   } return (
      <>
         {initialState.userDetails.profileID === null ? <ProfileForm /> : <></>}

      </>
   )
}

export default Profile;