import React, { useState } from 'react';
import './messagePopup.scss'

type MessagePopupProps = {
    icon?: string
    message: string
    position: 'bottom-center' | 'bottom-right' | 'top-center' | 'top-right'
    category?: 'info' | 'success' | 'warning'
    delay?:number
};

const MessagePopup:React.FC<MessagePopupProps> = ({icon, message, position, category,delay}) => {

    const [show, setShow] = useState<boolean>(true)

    if(delay )setTimeout(() => setShow(false), delay*1000);
    
    return (
        <div className={`popup-wrapper ${position} ${category}`}>
            {show ? 
                <div className={`message-popup-container ${category}`}>
                    {icon ? <img className='icon' alt='Icon' src={icon}/> : null}
                    <div className='message'>{message}</div>
                </div> : null
            }
        </div>
    )
}
export default MessagePopup;