import Link from "next/link";
import style from '@/app/global.module.scss';
import Image from "next/image";



const MobileNav = (props) => {
 
const {setIsOpen} = props;
     

return(
    
    <div className={style.mobile_nav}>
         
       <button className={style.mobile_nav_close} onClick={()=>{
             setIsOpen(false) 
       }}>
         <Image
         src={'/icons/closex24.svg'} 
         alt={'close'}
         width={24}
         height={24}

         />
         </button>  

      <ul>
                 <li>
                    <Link onClick={()=>{setIsOpen(false)}} href={'#home'}>Главная</Link>
                 </li>
                 <li>
                    <Link onClick={()=>{setIsOpen(false)}} href={'#services'}>Услуги</Link>
                 </li>
                 <li>
                    <Link onClick={()=>{setIsOpen(false)}} href={'#contacts'}>Контакты</Link>
                 </li>
                 <li>
                    <Link onClick={()=>{setIsOpen(false)}} href={'#advantages'}>Анализ</Link>
                 </li>
              </ul>


    </div>
)
}
export default MobileNav;