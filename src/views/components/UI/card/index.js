import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import { DefaultButton } from "../buttons/style";
import { Box } from "./style";
import { CardContent, CardBody, CardInfo, Avatar, Details } from "./style";

export const CardProfile = ({ avatar, name, bio, location, login }) => {
  return (
    <CardContent>
      {avatar && <Avatar src={avatar} alt="avatar" />}
      <CardBody>
        {name && <h2>{name}</h2>}
        {login && <h3>{login}</h3>}
        <DefaultButton>follow</DefaultButton>
        <CardInfo>
          {location && <Details>{location}</Details>}
          <Details>
            <Link to="">everton.paixao16@gmail.com</Link>
          </Details>
        </CardInfo>
      </CardBody>
    </CardContent>
  );
};

export const Card = props => {
  return <Box>{props.children}</Box>;
};
