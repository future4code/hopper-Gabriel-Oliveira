import { useState } from "react";

const useForm = (initialState) =>{
    const [form, setForm] = useState(initialState)


    const onChange = (event) =>{
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    };

    return { form , onChange};

}

export default useForm;





