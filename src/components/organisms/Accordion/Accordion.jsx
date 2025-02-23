'use client'

import './Accordion.scss'
import Image from 'next/image';
import { useState } from 'react';

const Accordion = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const {text,title} = props;
    


    return(



        <div className="accordion">

              <div className="accordion_summary" onClick={()=>{
                setIsOpen(!isOpen);
              }}>

{title}
                <div className={isOpen?'accordion_summary_open': 'accordion_summary_close'} >
                        <Image
                         src={'/icons/arrow_down.png'}
                         width={26}
                         height={26}
                         alt='arrow-down'
                        />
                </div>    
              </div>
      
       { isOpen ? <div className='accordion_content'>{text}</div> : null }
           

        </div>
    )

}

export default Accordion;