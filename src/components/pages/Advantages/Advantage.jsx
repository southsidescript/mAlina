import style from '@/app/global.module.scss';
import ClassicButton from '@/components/atoms/Button/ClassicButton';
import AdvantageItem from '@/components/molecules/advantage-item/advantageItem';

const Advantage = () => {
  
  const data = [

    {   
        ico:'./icons/activity.svg',
        text:'Экспертиза'
    },
    {
        ico:'./icons/bar-chart-2.svg',
        text:'Персональный подход'
    },
    {
        ico:'./icons/box.svg',
        text:'Профессионализм'
    },
    {
        ico:'./icons/dollar-sign.svg',
        text:'Экономия времени & ресурсов'
    }

  ]

return(
       


    <section className={style.advantage}>
   
       <h2>Преимущества работы со мной</h2>
        
        <div className={style.advantage_list}>
              {data.map((item,index) => <AdvantageItem key={index} {...item} />)}
        </div>
  
        <ClassicButton>Получить консультацию</ClassicButton>
      



    </section>


)


}



export default Advantage;