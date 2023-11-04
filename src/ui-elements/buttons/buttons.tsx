import React from 'react';
import './buttons.scss'
// import mouseClick from '../../assets/sounds/click.wav'

type ButtonProps = {
    text: string
    onClick: () => void
    category?: 'primary' | 'secondary' | 'warning'
    fill?: 'solid' | 'ghost' | 'gradient'
    edges?: 'sharp' | 'round'
    border?: boolean
    disabled?: boolean
};

const Button:React.FC<ButtonProps> = ({text, onClick, category, fill, edges, border, disabled}) => {

    // const mouseAudio = new Audio(mouseClick);

    const onButtonClick = () => {
        // mouseAudio.play()
        onClick();
    }
    
    return (
        <div className={`button-wrapper ${border ? 'border': ''} ${edges}`} >
            <div className={`button ${category} ${fill} ${edges} ${disabled ? "disabled" : ""}`} onClick={disabled ? ()=>{} : onButtonClick}>
            {text}
            </div>
        </div>
        
    )
}
export default Button;