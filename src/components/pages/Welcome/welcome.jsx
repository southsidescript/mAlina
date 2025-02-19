import style from '@/app/global.module.scss'
import Typewritter from '@/components/organisms/TypeWritter/Typewritter';
import Image from 'next/image';
import TypeWritter from '@/components/organisms/TypeWritter/Typewritter';

const Welcome = () => {

    return(
        <section className={style.home}>
           <article      className={style.home_portret}>
            <Image
                src={'/main-img.JPG'}
                fill
                alt='portret'
                sizes="(max-width: 640px) 10vw, (max-width: 1024px) 50vw, 33vw"
            
                />   
            </article>     
           

            <article className={style.home_desc}>
                
                <div className={style.home_desc_name}>Алина</div>
                <div className={style.home_desc_title}>Квалифицированный маркетолог международного уровня</div> 
                 <div className={style.home_desc_skills}>
                     <TypeWritter/>
                 </div>

               
               
            </article>         
 

        </section>
    )
}

export default Welcome;