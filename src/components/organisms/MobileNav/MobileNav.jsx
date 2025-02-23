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
                    <Link href={'#'}>Консалтинг</Link>
                 </li>
                 <li>
                    <Link href={'#'}>Анализ бренда</Link>
                 </li>
                 <li>
                    <Link href={'#'}>Стратегия</Link>
                 </li>
                 <li>
                    <Link href={'#'}>Smm&pr</Link>
                 </li>
              </ul>


    </div>
)
}
export default MobileNav;