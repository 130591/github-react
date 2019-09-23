import React from "react";

// COMPONENTS
import { Content } from "./style";
import { CardProfile } from "../../UI/card/";

const Profile = ({ userFullName, username, organizations, location, bio, avatarUrl }) => {
  return (
    <Content>
      {
        <CardProfile
          name={userFullName}
          avatar={avatarUrl}
          bio={bio}
          location={location}
          login={username}
        />
      }
    </Content>
  );
};

export default Profile;
