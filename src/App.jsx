import Table from "./component/Table.jsx";
import Button from "./component/Button.jsx";
import { useState } from "react";
import '../src/App.css'

function App() {
  const numberAssessment = 4 
  const numberStudent = 10
  const [scores, setScores] = useState(() => {
    return [...Array(numberAssessment)].reduce((result, _, i) => {
      const assessmentKey = `aspek_penilaian_${i + 1}`;

      result[assessmentKey] = [...Array(numberStudent)].reduce((students, _, j) => {
        students[`mahasiswa_${j + 1}`] = 1;
        return students;
      }, {});

      return result;
    }, {})
  })

  function handleScoreChange(assessmentIndex, studentIndex, value){
    const assessment = `aspek_penilaian_${assessmentIndex}`
    const student = `mahasiswa_${studentIndex}`
    setScores((prev => ({
      ...prev,
      [assessment]: {
        ...prev[assessment],
        [student]: value
      }
    })))
  }

  function handleSave() {
    console.log(JSON.stringify(scores, null, 2));
  }

  return (
    <>
      <h1>Aplikasi Penilaian Mahasiswa</h1>
        <Table numberAssessment={numberAssessment}
               numberStudent={numberStudent}
               scores={scores}
               onScoreChange={handleScoreChange}
        />
        <Button title={'Simpan'} handleClick={handleSave}/>
    </>
  )
}

export default App