import './ClassicButton.css'
import Link from 'next/link';
const ClassicButton = ({children}) => {
 



    return(
        <button className='classic-button'>
            
        <Link href="https://wa.me/79283912509"   >
            {children}
        </Link>


        </button>
    )
}

export default ClassicButton;