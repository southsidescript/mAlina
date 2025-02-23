import style from '@/app/global.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/layouts/Container/Container';
import PrimaryButton from '@/components/atoms/Button_Primary/PrimaryButton';
const Contacts = () => {

    return(
        <section className={style.contacts}>
               <Container>
                 
               <div className={style.contacts_heading}>
                    <h2>Оставить заявку</h2>
                </div>  
           
                 <div className={style.contacts_content}>
                       

                        <div className={style.contacts_social_medias}>
                        <Link href={'#'}>
                                  <Image
                                  src={'/icons/twitterx72.png'}
                                  width={67}
                                  height={47}
                                  alt='twitter'
                                  />
                                </Link>

                                <Link href={''}>
                                  <Image
                                  src={'/icons/vkx100.png'}
                                  width={46}
                                  height={46}
                                  alt='vk'
                                  />
                                </Link>


                                <Link href={''}>
                                  <Image
                                  src={'/icons/tmex72.png'}
                                  width={46}
                                  height={46}
                                  alt='tme'
                                  />
                                </Link>



                        </div>
                        
                        <div className={style.contacts_form}>
                            <form>
                             <input type="text"  placeholder='Как вас зовут ?'/>
                             <input type="text"  placeholder='Какой у вас email ?'/>
                             <input type="text"  placeholder='Какой у вас номер телефона ?'/>
                          <PrimaryButton>Связаться</PrimaryButton>

                            </form>
                        </div>

                 </div>
 
 

               </Container>
               
        </section>
    )
}
export default Contacts;