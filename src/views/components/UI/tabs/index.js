import React from "react";
import { Tabs, usePanelState } from "@bumaga/tabs";

// COMPONENTS
import Start from '../../containers/starts';
import Followers from '../../containers/follow';
import Following from '../../containers/folling';
import SectionOverview from "../../containers/overview";
import Repositories from "../../containers/repositories";
import { Project } from '../../containers/projects'
import { TabHeader } from "./tabContainer";
import { TabContent } from "./style";

const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <div>{children}</div> : null;
};

const TabContainer = props => (
  <TabContent>
    <Tabs>
      <TabHeader />
      <Panel>
        <SectionOverview />
      </Panel>
      <Panel>
        <Repositories />
      </Panel>
      <Panel>
        <Project />
      </Panel>
      <Panel>
        <Start />
      </Panel>
      <Panel>
        <Followers />
      </Panel>
      <Panel>
        <Following />
      </Panel>
    </Tabs>
  </TabContent>
);

export default TabContainer;
