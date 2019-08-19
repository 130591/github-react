import React, { useState } from "react";

import { Drop, DetailsNav, SummaryMenu } from "./style";

export const NavDropDown = () => {
  const [active, setActive] = useState(false);
  
  const handleActive = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <Drop>
      <DetailsNav onClick={() => handleActive()}>
        <img src="" alt="" />
        {active && <Summary />}
      </DetailsNav>
    </Drop>
  );
};

const Summary = () => {
  return (
    <SummaryMenu>
      <div className="header">
        Singed in as <span>130591</span>
      </div>
      <div className="status">
        <span>set status</span>
      </div>
      <div className="body" />
    </SummaryMenu>
  );
};
