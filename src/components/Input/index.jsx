/* eslint-disable react/prop-types */
const Input = (props) => {
    
    const placeholderModificada = `${props.placeholder}...` 

    return (   
        <div className="m-6 text-2xl">
            <label className="mb-2">
                {props} 
            </label>
            <input placeholder={placeholderModificada}/>
        </div>
    )
}

export default Input;