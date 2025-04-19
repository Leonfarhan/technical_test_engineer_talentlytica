import Dropdown from "./Dropdown.jsx";
import {memo} from 'react'
import './style/Table.css'

function createArrayFromLength(length) {
    return Array.from({length}, (_, i) => i + 1)
}

const Table = memo(function Table({ numberAssessment, numberStudent, scores, onScoreChange }) {
    const totalAssessmentAspects = createArrayFromLength(numberAssessment)
    const totalStudents = createArrayFromLength(numberStudent)

    return (
        <table>
            <thead>
            <tr>
                <th></th>
                {totalAssessmentAspects.map((assessmentValue) => (
                    <th key={assessmentValue}>{`Aspek Penilaian ${assessmentValue}`}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {totalStudents.map((studentValue) => (
                <tr key={studentValue}>
                    <th className="image-profile">
                        <img src="src/assets/profile-user.svg"/>
                        {`Mahasiswa ${studentValue}`}
                    </th>
                    {totalAssessmentAspects.map((assessmentValue) => {
                        const assessmentKey = `aspek_penilaian_${assessmentValue}`;
                        const studentsKey = `mahasiswa_${studentValue}`;
                        const combineKey = scores[assessmentKey]?.[studentsKey] || 1
                        console.info(combineKey);

                        return (
                            <td key={`${assessmentKey}${studentsKey}`}>
                            <Dropdown value={combineKey} handleChange={(e) => onScoreChange(assessmentValue, studentValue, Number(e.target.value))}/>
                        </td>
                        ) 
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    );
})

export default Table