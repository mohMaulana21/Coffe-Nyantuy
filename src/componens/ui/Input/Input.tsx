import { type ReactNode } from 'react';

interface InputProps {
    type?: string;
    label?: string;
    name: string;
    id: string;
    placeholder?: string;
    required?: boolean;
    icon?: ReactNode;
}


const Input = (props: InputProps) => {
    const { type = 'text', label, name, id, placeholder, required = false, icon } = props;
    return (
        <label htmlFor={id} className={`flex flex-col gap-2 text-sm font-medium text-[var(--text-primary)] mb-4`}>
            {label && <span>{label}</span>}
            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
                        {icon}
                    </div>
                )}
                <input 
                    className={`px-6 py-2 border border-[var(--neutral-300)] rounded-4xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] transition bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] w-full ${icon ? 'pl-10' : ''}`}
                    type={type} 
                    name={name} 
                    id={id} 
                    placeholder={placeholder} 
                    required={required} />
            </div>
        </label>
    )
}

export default Input;