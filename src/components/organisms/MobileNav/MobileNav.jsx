import Link from "next/link";
import style from '@/app/global.module.scss';

const MobileNav = () => {
 

     

return(
    
    <div className={style.mobile_nav}>
    
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