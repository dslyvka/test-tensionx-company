import { HeaderStyled } from './Header.styled';

import { ReactComponent as Arrow } from '../../images/arrow.svg';

export default function Header() {
  return (
    <>
      <HeaderStyled>
        {/* <a href="">Students</a> */}
        <select name="" id="">
          <option value="">School 1</option>
          <option value="">School 2</option>
          <option value="">School 3</option>
          <option value="">School 4</option>
        </select>
        <nav>
          <ul>
            <li>
              <a href="">Analytics</a>{' '}
            </li>
            <li>
              <a href="">Gradebooks</a>
            </li>
            <li>
              <a href="">Tests</a>
            </li>
            <li>
              <a href="">Students</a>
            </li>
            <li>
              <a href="">Teachers</a>
            </li>
            <li>
              <a href="">Archive</a>
            </li>
          </ul>
        </nav>

        <div>
          <button type="button">
            {' '}
            <img src={require('../../images/user.png')} alt="user" />
            <Arrow />
          </button>
        </div>
      </HeaderStyled>
    </>
  );
}
