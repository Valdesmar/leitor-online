/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Input = (props) => {
    
    const placeholderChanged = `${props.placeholder}...` 

    const whenTyped = (evt) => {
        props.whenChanged(evt.target.value);
    }

    return (   
        <div className="flex flex-col m-6">
            <label className="mb-2 text-lg font-bold">
                {props.label}
            </label>
            <input 
                value={props.value} 
                placeholder={placeholderChanged} 
                required={props._required}
                type={props.type}
                onChange={whenTyped}
                className={
                    `
                    p-1
                    mb-1
                    bg-slate-700
                    text-neutral-50
                    font-medium 
                    opacity-80
                    shadow-lg
                    shadow-slate-800
                    rounded-md
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