import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('../../public/fonts/segoe-ui-9.ttf');
  @import url('../../public/fonts/segoe-mt-bold-italic.ttf');
  @import url('../../public/fonts/segoe-mt-bold-italic.ttf');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Segoe UI', sans-serif;
    background: #FAFBFC;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
