'use client'
import { Typewriter } from 'react-simple-typewriter'

const TypeWritter = (props) => {

    const {content,isCursor,color} = props;
return(  
    <Typewriter {
        ...{
            words:content,
            loop:true,
            delay: 50,
            typingSpeed: 200,
            cursor: isCursor,
            cursorColor: color,
              cursorStyle:'|'
        }

    } />
)
}
export default TypeWritter;