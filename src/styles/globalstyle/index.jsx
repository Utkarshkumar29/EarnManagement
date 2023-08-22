import { createGlobalStyle } from 'styled-components';
import Background1 from '../../assets/images/Background.png'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    color: white;
    background-image: url(${Background1});
    background-size: cover;                    
    background-repeat: no-repeat;   
    font-family: 'Outfit', sans-serif;
  }
`;
 
export default GlobalStyle;