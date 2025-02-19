'use client'
import { Typewriter } from 'react-simple-typewriter'

const TypeWritter = () => {
return(  
    <Typewriter {
        ...{
            words: ['Разрабатывает стратегии', 'Создает положительный имидж', 'Повышает имидж бренда', 'Привлекает новых клиентов через эффективные стратегии'],
            loop:true,
            delay: 50,
            typingSpeed: 200,
            cursor: false,
            cursorColor: 'red',
              cursorStyle:'_'
        }

    } />
)
}
export default TypeWritter;