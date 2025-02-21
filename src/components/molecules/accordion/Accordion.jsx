const Accordion = (props) => {

    return(
        <details>
                        <summary>
                            {props.title}
                            
                        </summary>
                        <p>
                            {props.text}
                        </p>
                    </details>

    )
}

export default Accordion