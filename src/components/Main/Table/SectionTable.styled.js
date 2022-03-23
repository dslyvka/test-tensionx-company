import styled from '@emotion/styled';
import upload from '../../../images/upload.svg';

export const SectionTable = styled.section`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 8px;

  .sectionTable {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-right: 133px;
    h1 {
      margin: 0;
      padding-right: 28px;
      //   margin-right: 324px;

      font-family: 'Rubik';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2;
      /* identical to box height */

      text-transform: uppercase;

      color: #5b5b5b;
    }

    input {
      display: inline-block;

      position: relative;
      left: 55px;

      width: 499px;
      height: 32px;

      padding: 6px 12px;

      margin: 0;

      box-sizing: border-box;

      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.42;

      //   #C0C0C0;

      background-color: #f2f2f2;

      border: none;
      outline: none;
    }

    input::placeholder {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.42;

      color: #c0c0c0;
    }

    button {
      width: 98px;

      padding: 0;

      font-family: 'Rubik';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 1.42;

      text-transform: uppercase;

      color: #c0c0c0;
      background-color: transparent;

      display: flex;

      svg {
        // margin-right: 9.33px;
        // fill: red;
      }

      border: none;
      text-transform: uppercase;
      //   display: inline-block;
    }
  }
`;
