import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
  
  body {

    background: #FFFFFF;
    font-family: "Roboto", sans-serif;
    font-size: 100%;
    color: #3C3C3C ;
    text-rendering: optimizeSpeed;
    line-height: 1.5;

    

    
  }
 
  html, body{
    width: 100%;
    position: relative;
    overflow-x: hidden;
}



  /* Remove styles from a elements */

a {
  text-decoration: none;
  color: inherit;
}

ul, li {
  list-style: none;
}

/* Make images easier to work with */

img,
picture {
  max-width: 100%;
  display: block;
}


/* Inherit fonts for inputs and buttons */
input,
textarea,
select {
  font: inherit;
}

/* Remove default button & fieldset styles */
button,
fieldset {
  border: none;
  background: none;
  cursor: pointer;
}

button:focus, input:focus, a:focus{
  outline: 2px solid #55a5b5;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }


 


  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}





`;

export default GlobalStyles;
