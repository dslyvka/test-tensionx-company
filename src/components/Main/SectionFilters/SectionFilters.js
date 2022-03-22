import { SectionFilters as SectionFiltersStyled} from './SectionFilters.styled';

export default function SectionFilters() {
  return (
    <>
      <SectionFiltersStyled>
        <ul>
          <li>
            <select name="" id="">
              <option value="">Show all</option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="">All grades</option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="">All classes</option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="">Av.score</option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="">Av.speed</option>
            </select>
          </li>
          <li>
            <select name="" id="">
              <option value="">All classes</option>
            </select>
          </li>
          <li>
            <button>Clear All</button>
          </li>
        </ul>
      </SectionFiltersStyled>
    </>
  );
}
