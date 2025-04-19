import {memo, useMemo} from 'react'

const Dropdown = memo(function Dropdown({value, handleChange}){
    const score = useMemo(() => Array.from({length: 10}, (_, i) => (i + 1)), [])

    return (
        <>
            <select value={value} onChange={handleChange}>
                {score.map((index) => (
                    <option key={index} value={index}>{index}</option>
                ))}
            </select>
        </>
    )
})

export default Dropdown