import style from '@/app/global.module.scss';
import ClassicButton from '@/components/atoms/Button/ClassicButton';
import AdvantageItem from '@/components/molecules/advantage-item/advantageItem';
import Heading from '@/components/atoms/Heading/Heading';

const Advantage = () => {


  const data = [
    {
        ico:'./icons/box.svg',
        text:'Профессионализм'
    },
    {   
        ico:'./icons/activity.svg',
        text:'Экспертиза'
    },
    {
        ico:'./icons/bar-chart-2.svg',
        text:'Персональный подход'
    },
 
    {
        ico:'./icons/dollar-sign.svg',
        text:'Экономия времени & ресурсов'
    }

  ]

return(
       


    <section id='advantages' className={style.advantage}>
   
    <Heading>Преимущества работы вместе со мной</Heading>
        
        <div className={style.advantage_list}>
              {data.map((item,index) => <AdvantageItem key={index} {...item} />)}
        </div>
  
        <ClassicButton>Получить консультацию</ClassicButton>
      



    </section>


)


}



export default Advantage;