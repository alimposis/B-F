import { InputHTMLAttributes } from "react";

export const formInputs: Array<Partial<InputHTMLAttributes<HTMLInputElement>>> = [
    {
        type: 'text',
        name: 'userName',
        placeholder:'Введите свое имя',
        pattern:'[A-Za-zА-Яа-яЁё\s]+',
        required:true
    },
    {
        type: 'text',
        name: 'lastName',
        placeholder:'Введите свою фамилию',
        pattern:'[A-Za-zА-Яа-яЁё\s]+',
        required:true
    },
    {
        type: 'tel',
        name: 'tel',
        placeholder:'+375(00)0000000',
        pattern:'(\+375)(29|33|44|25|17)\d{7}',
        required:true
    },
    {
        type: 'email',
        name: 'mail',
        placeholder:'Введите свой email',
        pattern:'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',
        required:true
    },
]