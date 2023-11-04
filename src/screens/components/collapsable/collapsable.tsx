import React, { useState } from 'react';
import './collapsable.scss';
// import downArrow from '../../assets/icons/ArrowDown-Circle.svg'
// import collapsableSound from '../../assets/sounds/collapsable.mp3'

type CollapsableProps = {
    children: React.ReactNode
    prefixIcon?: string
    heading: string
};

const Collapsable:React.FC<CollapsableProps> = ({children, prefixIcon, heading}) => {

    const [showChildren, setShowChildren] = useState(false)

    // const collapsableAudio = new Audio(collapsableSound)
    
    return (
        <div className={`collapsable-container ${showChildren ? "active" : ""}`}>
                                                                                    
            <div 
                className='initial' 
                onClick={() => {
                    setTimeout(()=>{setShowChildren(!showChildren)}, 1000)
                    setShowChildren(!showChildren)
                    if(!showChildren){
                        // collapsableAudio.play();
                        // setTimeout(()=>{collapsableAudio.pause()}, 1000)
                    }
                }}
            >
                <div className='prefix'>
                    {prefixIcon? 
                        <img className='prefix-icon' alt='' src={prefixIcon}/> : null
                    }

                    <div className='heading'>{heading}</div>
                </div>

                {/* <img className={`suffix-icon ${showChildren ? "active" : ""}`} alt='' src={downArrow} */}
                {/* /> */}
            </div>

            <div className={`children ${showChildren ? "active" : ""}`}>
                {children}
            </div>

        </div>
    )
}
export default Collapsable;