import React, { Children, useState } from "react";
import Button from "../Button";


interface PropType{
    children?: React.ReactNode;
    description?: string;
    imageSrc?: string;
    price?: string;
    name?: string;
    ClassName?: string;
    onClick?: () => void;

}



const Card = (props: PropType) => {
    const { children, description, imageSrc, price, name, ClassName, onClick } = props;
    const [tambah, setTambah] = useState(0);
    console.log(tambah);
    return (
    <div className={`border border-[var(--neutral-300)] rounded-xl flex flex-col md:flex-row w-sm bg-[var(--bg-primary)] text-[var(--text-primary)] shadow-md items-stretch gap-2 p-2 overflow-hidden ${ClassName}`}>
      <div className="md:basis-5/12 flex flex-col items-center justify-between rounded-lg gap-1 p-0">            
        <img 
        src={imageSrc} 
        alt={name} 
        className="w-full h-32 md:h-40 object-cover rounded-lg ring-1 ring-[var(--neutral-300)]"/>
        <div className="flex items-center gap-1 rounded-full px-1.5 py-0.5 ring-1 ring-[var(--neutral-300)]">
          <button className="w-6 h-6 rounded-full bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--neutral-200)] active:scale-95 transition text-xs" onClick={() => setTambah(tambah - 1)}>-</button>
          <label className="text-xs font-semibold tracking-wide text-[var(--text-secondary)]">{tambah}</label>
          <button className="w-6 h-6 rounded-full bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--neutral-200)] active:scale-95 transition text-xs" onClick={() => setTambah(tambah + 1)}>+</button>
        </div>
      </div>
      <div className="md:basis-7/12 p-1.5 rounded-lg flex flex-col gap-1.5 justify-between items-start min-w-0">
            <h1 className="text-xs md:text-base font-semibold text-[var(--text-primary)] flex items-center gap-1">
             {name}
              <span className="text-xs font-bold text-[var(--text-primary)] bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded-full ring-1 ring-[var(--neutral-300)]">
                {` $ ${price}`}
              </span>
            </h1>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed break-words">
              {description}
            </p>
            <div className="w-full mt-auto">
              <Button className="w-full text-xs">add to Cart</Button>
            </div>
        </div>
    </div>
  )
}

export default Card;