import { SectionTable as Section } from './SectionTable.styled';
import Table from './Table';
import { ReactComponent as Upload } from '../../../images/upload.svg';

export default function SectionTable() {
  return (
    <>
      <Section>
        <div>
          <h1>Students</h1>
          <input
            type="text"
            placeholder="Enter Student Name, Parent or ID here"
          />
          <button>
            <Upload width={16} />
            Export csv
          </button>
        </div>
        <Table />
      </Section>
    </>
  );
}
