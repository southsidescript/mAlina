import style from '@/app/global.module.scss'
import Container from '@/layouts/Container/Container';
import Accordion from '@/components/organisms/Accordion/Accordion';
import TypeWritter from '@/components/organisms/TypeWritter/Typewritter';
import Acc from '@/components/organisms/Accordion/Accordion';
import Heading from '@/components/atoms/Heading/Heading';
const Services = () => {
  
  const data = [
    {
        title: 'Консалтинг',
        text: 'Квалифицированная консультация направленная на выявление уникальных возможностей бизнеса в результате которой, получаем решения ориентированные на достижение цели'
    },
    {
        title: 'Анализ бренда',
        text: 'Оценка позиций на рынке с учетом предпочтений потенциальных клиентов в результате которой,выявляем четкое понимание сильных и слабых сторон'
    },
    {
        title: 'Стратегия',
        text: 'Построение четкой системы развития бизнеса с указанием маркетинговых инструментов в результате которой,укрепляются позиции бренда на рынке и эффективнее достигаются цели'
    },
    {
        title: 'SMM & PR',
        text: 'Разработка контента ,пресс релизов,помощь в организации мероприятий ,создания спецпредложений в результате которых,формируется благоприятный имидж'

    }
    
  ];
  const dataForTypewritter = [
    'Продвижение, которое работает. Стратегии, которые приводят к результату!',
    'Ключ к успеху — в стратегии, а не в удаче.',
    'Мы делаем больше, чем просто привлекаем внимание. Мы создаем доверие.',
    'Инновационные стратегии для устойчивого роста вашего бизнеса.'
  ]


    return(

        
        <section id='services' className={style.services}>

                <div className={style.services_heading}>
                  <Heading> Услуги</Heading>
                    <p className={style.services_heading_title}><TypeWritter content={dataForTypewritter}/></p>
                </div>    
           
                 <div className={style.services_list}>
                     { 
                        data.map((item, index) => {
                            return(
                                <Accordion key={index} title={item.title} text={item.text} />
                            )
                        })

                    } 





                 </div>


 


          
        </section>
    )

}

export default Services;