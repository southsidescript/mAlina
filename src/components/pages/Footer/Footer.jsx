import style from '@/app/global.module.scss';
import Container from '@/layouts/Container/Container';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {



    return(
        <footer className={style.footer}>
          <Container>
              <h2>СВЯЖИТЕСЬ С НАМИ 
                  <Image src={'/icons/arrow-down-left.svg'}
                   width={44}
                    height={44}
                    alt='arrow-down-left'
                    />
                </h2> 

              <div className={style.footer_info}>
                   <div className={style.footer_about}>
                        <div className={style.footer_about_logo}>
                            Logo
                        </div>
                        
                        <div className={style.footer_about_title}>
                            Мы rasSVET ценим вашу конфиденциальность и принимаем все необходимые меры для защиты ваших персональных данных.
                            Эта политика конфиденциальности описывает, как мы собираем, используем, сохраняем и защищаем вашу информацию при использовании нашего веб-сайта.
                        </div>
                        <div className={style.footer_about_title}>
                        <strong>Сбор информации</strong> <br /> 
                            Мы можем собирать следующую информацию, когда вы используете наш сайт:
                            Персональные данные (имя, контактная информация, данные для связи).
                            Информацию, предоставленную через формы на сайте.
                            Данные об использовании веб-сайта (например, IP-адрес, браузер, страницы, которые вы посещаете).
                        </div>
                        <div className={style.footer_about_title}>
                        <strong>Использование информации</strong> <br />
                                Собранные данные используются для:
                                Обработки ваших запросов и заявок.
                                Улучшения качества наших услуг.
                                Направления вам обновлений, новостей и предложений (если вы подписались на рассылку).
                        </div>
                        <div className={style.footer_about_title}>
                            <strong>    Защита данных</strong> <br />
                            Мы предпринимаем разумные меры для защиты ваших данных от несанкционированного доступа, раскрытия, изменения или уничтожения.
                            Использование файлов cookie
                            Наш сайт использует файлы cookie для улучшения пользовательского опыта и анализа трафика. Вы можете настроить браузер на блокировку cookie или уведомление о них.
                        </div>
                            
                   </div>

                   <div className={style.footer_other}>

                            <div className={style.footer_other_email}>rassvetpr@gmail.com</div>
              
                            
                            <div className={style.footer_other_medias}>
                                     <Link href={''}> 
                                        <div className={style.footer_other_medias_vk}>Vkontakte</div>
                                      </Link>
                                     <Link href={''}> 
                                        <div className={style.footer_other_medias_tme}>Telegram</div>
                                     </Link>
                                     <Link href={''}> 
                                         <div className={style.footer_other_medias_twitter}>Twitter</div>
                                     </Link>


                            </div>
                            
                            <div className={style.footer_other_form}>
                               <p> Подписаться на рассылку</p>
                                <fieldset>
                                    <legend>Email</legend>
                                    <input type="text"  />
                                    <button>Подписаться</button>
                                </fieldset>
                           
                            </div>


                   </div>
                  
              </div>

          </Container>
             

        </footer>
    )
}

export default Footer;