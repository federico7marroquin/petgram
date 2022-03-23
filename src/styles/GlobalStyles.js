import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        html {
                box-sizing: border-box;
        }
        
        *, *::before, *::after {
                box-sizing: inherit;
        }
        
        ul, li, h1, h2, h3, p, button {
                margin: 0;
        }

        ul {
                padding: 0;
                list-style: none;
        }

        button {
                background: transparent;
                border: 0;
                outline: 0;
        }

        body {
                background: #fefefe;
                height: 100vh;
                margin: 0 auto;
                max-width: 500px;
                overscroll-behavior: none;
                width: 100%;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        }

        #app {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
                overflow-x: hidden;
                min-height: 100vh;
                padding-bottom: 10px;
        }
    }


`