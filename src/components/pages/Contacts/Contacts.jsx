import style from '@/app/global.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/layouts/Container/Container';

import Heading from '@/components/atoms/Heading/Heading';
import Form from '@/components/organisms/Form/Form';
const Contacts = () => {

    return(
        <section id='contacts' className={style.contacts}>
               <Container>
                 
               <div className={style.contacts_heading}>
                    <Heading>Оставить заявку</Heading>
                </div>  
           
                 <div className={style.contacts_content}>
                       

                        <div className={style.contacts_social_medias}>
                        <Link href={'#'}>
                                  <Image
                                  src={'/icons/twitterx100.png'}
                                  width={40}
                                  height={40}
                                  alt='twitter'
                                  />
                                </Link>

                                <Link href={''}>
                                  <Image
                                  src={'/icons/vkx100.png'}
                                  width={40}
                                  height={40}
                                  alt='vk'
                                  />
                                </Link>


                                <Link href={''}>
                                  <Image
                                  src={'/icons/tmex100.png'}
                                  width={40}
                                  height={40}
                                  alt='tme'
                                  />
                                </Link>



                        </div>

                        <div className={style.contacts_form}>
                          <Form />
                        </div>

                 </div>
 
 

               </Container>
               
        </section>
    )
}
export default Contacts;