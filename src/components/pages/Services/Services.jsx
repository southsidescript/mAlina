import style from '@/app/global.module.scss'
import Container from '@/layouts/Container/Container';
import Accordion from '@/components/molecules/accordion/Accordion';
const Services = () => {
  
  const data = [
    {
        title: 'Консалтинг',
        text: 'Квалифицированная консультация направленная на выявление уникальных возможностей бизнеса в результате которой, получаем решения ориентированные на достижение цели'
    },
    {
        title: 'Анализ бренда',
        text: 'Квалифицированная консультация направленная на выявление уникальных возможностей бизнеса в результате которой, получаем решения ориентированные на достижение цели'
    },
    {
        title: 'Стратегия',
        text: 'Квалифицированная консультация направленная на выявление уникальных возможностей бизнеса в результате которой, получаем решения ориентированные на достижение цели'
    },
    {
        title: 'SMM & PR',
        text: 'Квалифицированная консультация направленная на выявление уникальных возможностей бизнеса в результате которой, получаем решения ориентированные на достижение цели'

    }
    
  ]


    return(

        
        <section className={style.services}>

                <div className={style.services_heading}>
                    <h2>Услуги</h2>
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