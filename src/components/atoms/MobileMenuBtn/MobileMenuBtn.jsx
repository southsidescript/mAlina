'use client'
import style from '@/app/global.module.scss'
import { useState } from 'react';
import MobileNav from '@/components/organisms/MobileNav/MobileNav';
import Image from 'next/image';
const MobileMenuBtn = () => {

const [isOpen,setIsOpen] = useState(false);

return(
    <>
       <button onClick={()=>{
        setIsOpen(true)
       }}  className={style.mobile_v_button}> 
        <Image 
        width={42}
        height={42}
        src={'/icons/mobile-menux64.png'}
        alt="mobile_v"
        />
        </button> 

     {isOpen?<MobileNav setIsOpen={setIsOpen} />:''}
  
    </>
     
)


}




export default MobileMenuBtn;