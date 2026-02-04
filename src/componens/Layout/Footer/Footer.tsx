import { FaCoffee, FaPhone, FaEnvelope } from 'react-icons/fa';

interface propTypes {
    className?: string;
}

const Footer = (props: propTypes) => {
    const {className} = props;
    return (
        <footer className={`flex bg-[var(--bg-primary)] border-t border-[var(--neutral-200)] px-4 text-[var(--text-secondary)] ${className}`}>
            <div className='size-10 grow-3 justify-start flex items-center gap-2'>
                <FaCoffee size={20} className='text-[var(--primary-400)] mr-2' />
                <span className='font-semibold'>Nyantuy' Coffe</span>
            </div>
            <div className='size-10 grow-7 justify-center flex items-center'>
                <span className='text-sm'>&copy; 2024 Nyantuy' Coffe. All rights reserved.</span>
            </div>
            <div className='size-10 grow-3 justify-end flex items-center gap-2'>
                <FaPhone size={20} className='text-[var(--primary-400)] mr-2' />
                <span className='font-semibold'>Contact Us : <span className='font-normal'> maulana.rosy21@gmail.com</span></span>
            </div>
            
        </footer>
    );
}

export default Footer;