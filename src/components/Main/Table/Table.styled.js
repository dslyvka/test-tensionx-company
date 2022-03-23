import styled from '@emotion/styled';
import SortArrows from '../../../images/unfold_more.svg';
import info from '../../../images/info.svg';
import arrow from '../../../images/arrow.svg';
import alphabet from '../../../images/alphabet.svg';

export const TableStyled = styled.table`
  width: 100%;
  thead {
    width: 100%;
    display: inline-block;
    padding: 12px 0;

    tr {
      width: 100%;
      display: inline-block;
      padding-right: 188px;
    }

    th {
      text-align: start;

      display: inline-block;

      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 1.42;

      color: #777777;

      opacity: 0.8;
    }

    th:nth-of-type(1) {
      padding-left: 22px;
      //   width: 32px;
    }

    th:nth-of-type(2) {
      width: 300px;
      margin-left: 30px;

      background-image: url(${alphabet});
      background-repeat: no-repeat;
      background-position: right center;
    }

    th:nth-of-type(3) {
      width: 96px;
      margin-left: 37px;

      background-image: url(${SortArrows});
      background-repeat: no-repeat;
      background-position: right center;
    }

    th:nth-of-type(4) {
      width: 40px;
      margin-left: 25px;
    }

    th:nth-of-type(5) {
      width: 100px;
      margin-left: 29px;

      background-image: url(${SortArrows});
      background-repeat: no-repeat;
      background-position: right center;
    }

    th:nth-of-type(6) {
      width: 112px;
      margin-left: 29px;

      background-image: url(${SortArrows});
      background-repeat: no-repeat;
      background-position: right center;
    }
    th:nth-of-type(7) {
      width: 384px;
      //   padding-right: auto;
      margin-left: 25px;
    }
    th:nth-of-type(8) {
      // width: 384px;
      //   padding-right: auto;
      margin-left: 24px;
    }
  }

  tbody {
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

    tr.img {
      width: 100%;
      padding: 14px 0;
      display: inline-block;
      // box-shadow: 0px 1px 4px rgba(60, 52, 135, 0.15);

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

      color: #828282;
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

    .nestedTable {
      display: block;
    }
  }
`;
