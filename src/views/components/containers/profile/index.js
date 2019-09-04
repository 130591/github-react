import React from "react";

// COMPONENTS
import { Content } from "./style";
import { CardProfile } from "../../UI/card/";
//  CONTEXT
import { ProfileData } from "../../../pages/profile/context";

const Profile = () => {
  return (
    <Content>
      <ProfileData.Consumer>
        {overview => (
          <CardProfile
            name={overview.name}
            avatar={overview.avatar_url}
            bio={overview.bio}
            location={overview.location}
            login={overview.login}
          />
        )}
      </ProfileData.Consumer>
    </Content>
  );
};

export default Profile;
