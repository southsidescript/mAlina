
import './PrimaryButton.css';

const PrimaryButton = ({children,send}) => {
    return (
      
        <button onClick={send}  className="primary-button">
          {children}
         
        </button>
    )

}

export default PrimaryButton;