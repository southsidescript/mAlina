import Image from "next/image";
import style from '@/app/global.module.scss';

const AdvantageItem = (props) => {


return(
    <div className={style.advantage_item}>
             {props.text}
    </div>
)
}

export default AdvantageItem;