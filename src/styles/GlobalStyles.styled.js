import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  //this defines what 1 rem is
  font-size: 62.5%;
}

body {
  box-sizing: border-box;  
  -webkit-overflow-scrolling: touch;
  font-family: 'Public Sans', sans-serif;;
  font-weight: normal;
  margin: 0;
  padding: 0;

}
a{
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  &:active{
   color:transparent;

  }
}
`;
