import React, { ChangeEvent, useState } from 'react';
import './inputFields.scss'

type InputFieldsProps = {
    label?: string
    edges?: 'sharp' | 'round'
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    placeholder?: string
    type?: string
    prefixIcon?: string
    suffixIcon?: string
    onSuffixClick?: () => void
    required?: boolean
    error?: boolean
    errorMsg?: string
    theme?: 'light' | 'dark' 
    
} & React.HTMLProps<HTMLInputElement>

const InputFields:React.FC<InputFieldsProps> = ({label, edges, onChange, disabled, type, placeholder, prefixIcon, suffixIcon, required, error, onSuffixClick, errorMsg, theme, ...props}) => {
    
    const [focussed, setFocus] = useState<boolean>()
    const onFocus = () => {
        setFocus(true)
    }

    const onTextInputBlur = () =>{
        setFocus(false)
    }

    return (
        <div className={`input-container ${type}`}>
            
            {label ? <div className={`label ${error ? "error" : ""} ${theme}`}>{label}{required ? " *" : " (optional)"}</div> : null}

            <div className={`input-box ${focussed ? "active" : ""} ${edges} ${disabled ? "disabled" : ""} ${error ? "error" : ""} ${theme}`}>
                <div className='prefix'>
                    {prefixIcon? 
                        <img className='prefix-icon' src={prefixIcon} alt=''/> : null
                    }
                    <input 
                        type= {type}
                        className={`input ${error ? "error" : ""}`} 
                        onChange={(e)=>{
                            onChange(e)
                        }}
                        onFocus={onFocus}
                        onBlur={onTextInputBlur}
                        placeholder={placeholder}
                        {...props}
                        disabled={disabled}
                    />
                </div>
                {suffixIcon?
                    <img className='suffix-icon' onClick={onSuffixClick} src={suffixIcon} alt=''/> : null 
                }
            </div>

            {error && errorMsg ? 
                <div className='error-msg'>{errorMsg}</div> : null
            }
        </div>
    )
}
export default InputFields;