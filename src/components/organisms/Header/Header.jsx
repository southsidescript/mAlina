import Logo from "@/components/atoms/Logo/Logo";
import style from '@/app/global.module.scss';
import Link from "next/link";
import Image from "next/image";
import MobileMenuBtn from "@/components/atoms/MobileMenuBtn/MobileMenuBtn";
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
               
               <MobileMenuBtn/>
      </div>

     
        
        </header>
    )
}

export default Header;