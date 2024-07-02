/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Input = (props) => {
    
    const placeholderChanged = `${props.placeholder}...` 

    const whenTyped = (evt) => {
        props.whenChanged(evt.target.value);
    }

    return (   
        <div className="m-6">
            <label className="mb-2 text-2xl">
                {props.label}
            </label>
            <input value={props.value} 
                placeholder={placeholderChanged} 
                required={props._required}
                onChange={whenTyped}
                className={
                    `
                    mb-1
                    bg-neutral-50
                    text-neutral-950
                    font-semibold
                    shadow-md
                    shadow-neutral-50
                    ` 
                    // background-color: "#fff";
                    // box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
                    // width: 100%;
                    // border: none;
                    // font-size: 24px;
                    // padding: 24px;
                    // box-sizing: border-box;
                }
            
            />
        </div>
    );
}

export default Input;