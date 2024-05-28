import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset};

 
  * {
    box-sizing: border-box;
    white-space: nowrap;


    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  body {
    width: 100%;
    font-size: 14px;
    font-family: 'NotoSansRegular', 'SF Pro Display', sans-serif;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    background-color: #FBFBFC;

    body::-webkit-scrollbar {
      display: none;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.blackColor};
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  input,
  textarea {
    font-size: 16px;
    font-family: 'NotoSansRegular';
    border: none;
    outline: none;
    background-color: inherit;

    &::placeholder {
      font-size: 15px;
      font-family: 'NotoSansRegular', 'SF Pro Display', sans-serif;
      color: ${({ theme }) => theme.colors.blackColor};
    }
    
    &:disabled {
      color: ${({ theme }) => theme.colors.blackColor};
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  button {
    font-size: 16px;
    padding: 0;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
  }

  select {
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

`;
