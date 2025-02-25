'use client'
import './Heading.css';
import { useInView } from 'react-intersection-observer';


const Heading = ({children}) => {

   const {ref, inView} = useInView({
    threshold: 0.9,
    triggerOnce: false
   })

    return (
       <h2 className={ `heading ${inView?'visible':''}`} ref={ref}>
        {children}
       </h2>
    )

}
export default Heading;