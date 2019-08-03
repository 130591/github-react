import React from "react";

// COMPONENTS
import { CardContent, CardBody, CardInfo, Avatar, Details } from "./style";

export const CardProfile = () => {
  return (
    <CardContent>
      <Avatar
        src={"https://avatars0.githubusercontent.com/u/20320981?s=400&v=4"}
        alt="avatar"
      />
      <CardBody>
        <h2>everton</h2>
        <h3>chagas</h3>
        <CardInfo>
          <Details>rio de janeiro</Details>
          <Details>everton.paixao16@gmail.com</Details>
        </CardInfo>
      </CardBody>
    </CardContent>
  );
};
