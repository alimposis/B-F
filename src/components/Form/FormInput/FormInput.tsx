import { FC, InputHTMLAttributes } from "react"

export const FormInput:FC<Partial<InputHTMLAttributes<HTMLInputElement>>> = ({type,name,placeholder,pattern,required})=>{
    return(
        <>
            <input 
            type={type}
            name={name}
            placeholder={placeholder}
            pattern={pattern}
            required={required}
            />
        </>
    )
}