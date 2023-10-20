import { useContext } from "react";
import { UserContext } from "../UserContext.jsx";
import { Link, Navigate, useParams } from "react-router-dom";

const AccountPage = () => {
  const {ready, user} = useContext(UserContext);

  if(!ready) {
    return "Loading...";
  }

  if(ready && !user){
    return <Navigate to={"/login"}/> 
  }

  const {subpage} = useParams();

  function linkClasses (type=null) {
   let classes = "py-2 px-6";
   if(type === subpage || (subpage === undefined && type === "profile")) {
    console.log("poklapa se tip");
    classes = "py-2 px-6 bg-red-500 text-white rounded-full"
   }
   return classes;
  }
 
  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link className={linkClasses("profile")} to={"/account"}>My profile</Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>My bookings</Link>
        <Link className={linkClasses("places")} to={"/account/places"}>My accomodations</Link>
      </nav>

      
    </div>
  )
}

export default AccountPage