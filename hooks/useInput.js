import React from "react";

const useInput = (initValue, validator) => {
    const [value, setValue] = useState(initValue)
    const onChange = e => {
        const {
            target : { value }
        } = e;
        console.log(e.target.value);
        
        let willUpdate = true;
        if(willUpdate) {
            setValue(value)
        }
    }
    return { value, onChange }
}



const App = () => {
    const name = useInput("Miss. ")
    return (
        <div className="App">
            <h1>how are you</h1>
            <input placeholder="name" {...name} />
            == <input placeholder="nana" value={name.value} onChange={name.onChange}/>
        </div>
    )
}