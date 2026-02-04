import { type ReactNode } from "react";   

interface propTypes {
    children?: ReactNode
    className?: string;
}


const Header = (props: propTypes) => {
    const { children, className = '' } = props;
    return (
        <header className={`bg-[var(--bg-primary)] shadow-sm border-b border-[var(--neutral-200)] ${className}`}>
            {children}
        </header>
    )


}

export default Header;