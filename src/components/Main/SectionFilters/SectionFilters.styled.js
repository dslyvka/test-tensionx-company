import styled from '@emotion/styled';
import arrow from '../../../images/arrow.svg';

export const SectionFilters = styled.section`
  background-color: #5b5b5b;

  padding-top: 4px;
  padding-bottom: 4px;

  ul {
    list-style: none;

    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: baseline;

    li {
      select,
      button {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.42;

        text-transform: uppercase;

        color: #c0c0c0;
        background-color: transparent;

        padding: 7.5px 36px 7.5px 12px;

        border: none;
        outline: none;
      }

      button {
        padding: 0;
        font-weight: 700;
      }

      select {
        appearance: none;

        background-image: url(${arrow});
        background-repeat: no-repeat;
        background-position: 81% center;
        background-size: 8.3px 4.1px;
      }
    }

    li:not(:last-of-type) {
      margin-right: 12px;
    }
  }
`;
