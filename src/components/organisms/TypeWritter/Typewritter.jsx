'use client'
import { Typewriter } from 'react-simple-typewriter'

const TypeWritter = (props) => {

    const {content} = props;
return(  
    <Typewriter {
        ...{
            words:content,
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