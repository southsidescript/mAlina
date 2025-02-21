import Image from "next/image";
import style from '@/app/global.module.scss';

const AdvantageItem = (props) => {


return(
    <div className={style.advantage_item}>
         <Image
             src={props.ico}
             width={30}
             height={30} 
             alt="Иконка"
             />
             {props.text}
    </div>
)
}

export default AdvantageItem;