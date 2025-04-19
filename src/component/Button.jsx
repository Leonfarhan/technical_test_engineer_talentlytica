import {memo} from 'react'
import './style/Button.css'

const Button = memo(function Button({title, handleClick}){
    return(
        <button onClick={handleClick}>
            {title}
        </button>
    )
})

export default Button