import React, { useEffect, useState } from "react";

//  COMPONENTS
import { YoursRepos, InfoRepors } from "../repositories/style";
import { Input, WrapperInput } from "../../UI/form/input";
import { TitleCard } from "../../UI/tabs/style";

export const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <>
      <WrapperInput>
        <Input placeholder="Search repositories..." />
      </WrapperInput>
      <YoursRepos>
        <TitleCard>DropBox</TitleCard>
        <ul>
          <li>clone mvp </li>
          <li>dropbox </li>
          <li>with react js</li>
        </ul>
        <InfoRepors>
          <div className="yellowcircule" />
          <span>
            javascript
            <i className="fa fa-star" />1<i className="fa fa-code-fork" />0<i />
          </span>
          <div className="currentime"> 7 hours ago</div>
        </InfoRepors>
      </YoursRepos>
    </>
  );
};
