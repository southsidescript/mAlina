import './ClassicButton.css'
import Link from 'next/link';
const ClassicButton = ({children}) => {
 



    return(
        <Link href="https://wa.me/79283912509"   >
            <button className='classic-button'>
                
    
                {children}
        


            </button>
        </Link>
    )
}

export default ClassicButton;