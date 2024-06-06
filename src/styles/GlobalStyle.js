import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

    ${reset}
    * {
        box-sizing: border-box;
    }

    html,
    body {
        box-sizing: border-box; /* default */
        margin: 0 auto;

        font-size: 62.5%;

        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;    }
    
    body::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    input {
        outline: none;
    }

    a {
        color: inherit;
        text-decoration: none;

        cursor: pointer;
    }

    button {
        font: inherit;

        background: none;
        cursor: pointer;
        border: none;
        padding: 0;
    }

    select {
        cursor: pointer;
    }

    body{
        -ms-overflow-style: none;
    }
 
    ::-webkit-scrollbar {
        display: none;
    }

    @font-face {
    font-family: Pretendard;
    src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css')
      format ('woff');
  }
`;

export default GlobalStyle;
