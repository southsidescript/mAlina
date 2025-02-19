import Logo from "@/components/atoms/Logo/Logo";
import style from '@/app/global.module.scss';
import Link from "next/link";
import Image from "next/image";
const Header = () => {



    return(
        <header className={style.header}>
           <Logo/>
            
            <nav> 
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
            </nav>

      <div className={style.header_actions}>
              <div className={style.header_locale}>
                  EN/RU 
               </div>
               
               <div>
                  <button className={style.mobile_v_button}> 
                     <Image 
                     width={42}
                     height={42}
                     src={'/icons/mobile-menux64.png'}
                     alt="mobile_v"
                     />
                     </button> 
               </div>
      </div>

     
        
        </header>
    )
}

export default Header;