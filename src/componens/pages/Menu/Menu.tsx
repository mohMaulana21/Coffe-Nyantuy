import Card from "@/componens/ui/Card";
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
            <div className="flex justify-center gap-2 flex-wrap">
                {menu.map((item) => (
                    <Card key={item.id} 
                    imageSrc={item.image_url} 
                    name={item.name} 
                    price={item.price} 
                    description={item.description}>  

                    </Card>
                ))}
            </div>
            
           
        </div>
           
        
    )
}

export default Menu;