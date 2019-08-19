import React, { useEffect, useState } from "react";
import { TabList, TabNav } from "./style";
import { useTabState } from "@bumaga/tabs";

import { DataRepos } from "../../../../core/services/dataLayer";

const Tab = ({ children }) => {
  const { onClick } = useTabState();

  return <div onClick={onClick}>{children}</div>;
};

export const TabHeader = props => {
  const [onLoading, setOnLoading] = useState("overview");

  useEffect(() => {
    const resp = DataRepos.chooseTabs(onLoading);
    console.log(resp);
  }, [onLoading]);

  return (
    <TabList>
      <Tab>
        <TabNav>overview</TabNav>
      </Tab>
      <Tab onClick={() => setOnLoading("repositories")}>
        <TabNav>
          repositories <span>152</span>
        </TabNav>
      </Tab>
      <Tab onClick={() => setOnLoading("projects")}>
        <TabNav>
          projects <span>0</span>
        </TabNav>
      </Tab>
      <Tab onClick={() => setOnLoading("stars")}>
        <TabNav>
          stars <span>131</span>
        </TabNav>
      </Tab>
      <Tab onClick={() => setOnLoading("followers")}>
        <TabNav>
          followers <span>201</span>
        </TabNav>
      </Tab>
      <Tab onClick={() => setOnLoading("Following ")}>
        <TabNav>
          following <span>14</span>
        </TabNav>
      </Tab>
    </TabList>
  );
};
