import Header from './components/Header';
import { mockData } from './data';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <p>Список студентів:</p>
        {mockData.map((student) => (
          <div
            key={student.student}
            style={{
              color: student.active ? 'inherit' : 'gray',
              textDecoration: student.active ? 'none' : 'line-through',
            }}
          >
            {student.student} - {student.mark}
          </div>
        ))}

        <p>Студенти в яких бал більше 60:</p>
        {mockData
          .filter((student) => student.active && student.mark > 60)
          .map((student) => (
            <div key={student.student}>
              {student.student} - {student.mark}
            </div>
          ))}

        <p>
          Загальний бал активних студентів:
          <span>
            {mockData
              .filter((student) => student.active)
              .reduce((acc, student) => acc + student.mark, 0)}
          </span>
        </p>

        <p>Список студентів (відсортований за спаданням балів):</p>
        {[...mockData]
          .sort((a, b) => b.mark - a.mark)
          .map((student) => (
            <div key={student.student}>
              {student.student} - {student.mark}
            </div>
          ))}
      </main>
    </>
  );
}
