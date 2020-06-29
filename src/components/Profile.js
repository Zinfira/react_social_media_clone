import React from "react";
import ProfileName from "./ProfileName";
import ProfileBar from "./ProfileBar";
import ProfilePhoto from "./ProfilePhoto";

function Profile(){
  return (
    <React.Fragment>
      <ProfilePhoto />
      <ProfileName />
      <ProfileBar />
    </React.Fragment>
  )
}

export default Profile;