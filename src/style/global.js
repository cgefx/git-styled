import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --border-radius-small: 0.25rem;
    --border-radius: 8px;
    --transition-main: all 0.2s ease-in-out;
    --shadow-high: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
	  --shadow-low: 0 10px 30px -15px rgba(0, 0, 0, 0.2);
    --shadow-hover: 0 8px 20px -15px rgba(0, 0, 0, 0.2);
  }

  ::selection {
	  background-color: ${({ theme }) => theme.primary};
	  color: ${({ theme }) => theme.textPrimary};
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  *,
  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
	//100% = 16px
	font-size: 62.5%; // 1rem = 10px
  }

  body {
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.textPrimary};
    background: ${({ theme }) => theme.backgroundDark};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
    font-weight: 500;
    font-family: 'Space Mono', monospace;
  }

  p {
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    transition: var(--transition-main);
    color: ${({ theme }) => theme.primary};
    display: inline-block;

  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  svg {
    fill: currentColor;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    transition: var(--transition-main);
    &:focus,
    &:active {
      outline: 0;
    }
  }

  input {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  .section {
    padding: 3rem 2.4rem;
    margin: 0 auto;

    & > div {
      max-width: 1110px;
      margin: 0 auto;
    }
  }
`;
