import styled from '@emotion/styled';

import user from '../../images/user.png';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 40px 14px 221px;

  //   a {
  //     font-family: 'Rubik';
  //     font-style: normal;
  //     font-weight: 700;
  //     font-size: 35px;
  //     line-height: 1.4;

  //     text-decoration: none;
  //     display: inline-block;
  //   }

  //   a:visited {
  //     color: #a6192e;
  //   }

  select {
    border: none;
    outline: none;

    text-transform: uppercase;

    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;

    margin-right: 75px;
  }

  ul {
    list-style: none;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    margin: 0;
    padding: 0;

    li {
      text-transform: uppercase;

      a {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.43;
        text-transform: uppercase;

        padding: 6px 12px;

        text-decoration: none;
        display: inline-block;
      }

      a:visited {
        color: #777777;
      }

      a:hover,
      a:focus {
        font-weight: 700;
        background-color: #a6192e;
        color: #ffffff;
      }
    }

    li:not(:first-of-type) {
      margin-left: 16px;
    }
  }

  div {
    display: flex;

    margin-left: 300px;

    button {
      display: block;

      padding: 0;

      border: 0;

      background-color: transparent;

      position: relative;

      img {
        display: block;

        width: 32px;
        height: 32px;

        margin-right: 11px;
      }

      svg {
        position: absolute;
        top: 14px;
        right: 0;
      }

      width: 60px;
      height: 32px;
    //   background-color: black;
    }
  }
`;
