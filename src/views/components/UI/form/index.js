import React from "react";

import { InputContent, InputContainer } from "./input";

export const Input = ({ handleInput }) => {
  return (
    <InputContainer>
      <InputContent
        placeholder="Search or jump to..."
        onChange={e => handleInput(e)}
      />
    </InputContainer>
  );
};
