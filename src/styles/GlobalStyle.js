import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

    ${reset}
    * {
        box-sizing: border-box;

        font-family:
        'Pretendard Variable',
        Pretendard,
        -apple-system,
        BlinkMacSystemFont,
        system-ui,
        Roboto,
        'Helvetica Neue',
        'Segoe UI',
        'Apple SD Gothic Neo',
        'Noto Sans KR',
        'Malgun Gothic',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        sans-serif;
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

    @font-face {
    font-family: Pretendard;
    src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css')
      format('woff');
  }
`;

export default GlobalStyle;
