import { CustomJwtPayload } from "../../@Types";

const UserProfilePic = ({profilePic}: CustomJwtPayload ) => {
    
  return (
    <div>
      <img src={profilePic} className="rounded-full w-8" alt="user profile"/>
    </div>
  );
};

export default UserProfilePic;
