import React from "react";
import { Tabs, usePanelState } from "@bumaga/tabs";

// COMPONENTS
import { OverView } from "../../containers/overview";
import { Repositories } from "../../containers/repositories";
import { TabHeader } from "./tabContainer";
import { TabContent, TitleSection, Grid } from "./style";

const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <div>{children}</div> : null;
};

export default () => (
  <TabContent>
    <Tabs>
      <TabHeader />
      <Panel>
        <TitleSection> Popular repositories </TitleSection>
        <Grid>
          <OverView />
          <OverView />
          <OverView />
          <OverView />
          <OverView />
          <OverView />
        </Grid>
      </Panel>
      <Panel>
        <Repositories />
      </Panel>
      <Panel>
        <Repositories />
      </Panel>
    </Tabs>
  </TabContent>
);
