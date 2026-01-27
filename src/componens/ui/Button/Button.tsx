import 'style/global.css';
import { type ReactNode } from 'react';

interface Proptypes{
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
    onClick?: () => void;
    colorText?: 'primary' | 'secondary' | 'danger';
    bgColor?: 'primary' | 'secondary' | 'danger';
    className?: string;
    variant?: 'default' | 'ghost';
}

const Button = (props: Proptypes) => {
    const {type = 'button', children, colorText = 'primary', bgColor = 'primary', className = '', variant = 'default'} = props;
    
    const bgColorMap = {
        primary: 'bg-[var(--button-primary)] hover:bg-[var(--button-hover)]',
        secondary: 'bg-[var(--accent-500)] hover:bg-[var(--accent-600)]',
        danger: 'bg-[var(--error)] hover:bg-red-700',
    };

    const textColorMap = {
        primary: 'text-white',
        secondary: 'text-[var(--text-primary)]',
        danger: 'text-black',
    };

    const baseClasses = variant === 'ghost' 
        ? 'cursor-pointer transition' 
        : `px-4 py-2 rounded-4xl cursor-pointer transition ${bgColorMap[bgColor]} ${textColorMap[colorText]}`;

    return (
        <button 
            className={`${baseClasses} ${className}`} 
            type={type}
            onClick={props.onClick}
        >
        {children}
        </button>
    )
};

export default Button;
