import fetchAPI from "@/utils/fetch";
import { useState, useEffect } from "react";





const Menu = () => {
    const [menu, setMenu] = useState<any[]>([]);
    
    

    useEffect(() => {
        const fetchMenu = async () => {
        const result = await fetchAPI(`${import.meta.env.VITE_API_URL}/menu`, {
            method: 'GET',
        });
        setMenu(result.data)
    }
    fetchMenu();
    }, []);
            
    return (
        <div>
           {menu.map((item: any) => (
            <div key={item.id}>
              <img
                src={item.image_url}
                alt={item.name}
                
              />
        </div>
           ))}
        </div>
    )
}

export default Menu;