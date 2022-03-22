import styled from '@emotion/styled';
import info from '../../../images/info.svg';
import arrow from '../../../images/arrow.svg';

export const ArchivedTableStyled = styled.table`
  width: 100%;
  padding-top: 8px;

  caption {
    display: inline-block;
    text-align: start;

    margin: 0 0 8px 0;
    padding-left: 24px;

    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.42;

    text-transform: uppercase;

    color: #5b5b5b;
  }

  tbody {
    background: #f9f9f9;
    box-shadow: 0px 1px 4px rgba(60, 52, 135, 0.15);
    .blue {
      color: #4285f4;
    }

    .green {
      color: #0f9d58;
    }

    .yellow {
      color: #e2b534;
    }

    .red {
      color: #db4437;
    }

    tr {
      width: 100%;
      padding: 14px 0;
      display: inline-block;
      box-shadow: 0px 1px 4px rgba(60, 52, 135, 0.15);

      background-image: url(${arrow});
      background-repeat: no-repeat;
      background-position: right 21px center;
    }

    tr:nth-of-type(even) {
      background-color: #f9f9f9;
    }

    td {
      display: inline-block;
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.43;

      color: #c0c0c0;
    }
    td:nth-of-type(1) {
      padding-left: 22px;
      //   width: 32px;
    }

    td:nth-of-type(2) {
      width: 300px;
      margin-left: 30px;
    }

    td:nth-of-type(3) {
      width: 96px;
      margin-left: 37px;
    }

    td:nth-of-type(4) {
      width: 40px;
      margin-left: 25px;
    }

    td:nth-of-type(5) {
      width: 100px;
      margin-left: 29px;
    }

    td:nth-of-type(6) {
      width: 112px;
      margin-left: 29px;
    }
    td:nth-of-type(7) {
      width: 384px;
      padding-left: 22px;
      margin-left: 25px;

      background-image: url(${info});
      background-repeat: no-repeat;
      background-position: left center;
    }
  }
`;
