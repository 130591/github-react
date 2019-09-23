import React, { useState } from "react";
import { TabList, TabNav } from "./style";
import { useTabState } from "@bumaga/tabs";

const Tab = ({ children }) => {
  const { onClick } = useTabState();

  return <div onClick={onClick}>{children}</div>;
};

export const TabHeader = props => {
  return (
    <TabList>
      <Tab>
        <TabNav >overview</TabNav>
      </Tab>
      <Tab >
        <TabNav>
          repositories <span>152</span>
        </TabNav>
      </Tab>
      <Tab >
        <TabNav>
          projects <span>0</span>
        </TabNav>
      </Tab>
      <Tab >
        <TabNav>
          stars <span>131</span>
        </TabNav>
      </Tab>
      <Tab >
        <TabNav>
          followers <span>201</span>
        </TabNav>
      </Tab>
      <Tab >
        <TabNav>
          following <span>14</span>
        </TabNav>
      </Tab>
    </TabList>
  );
};
