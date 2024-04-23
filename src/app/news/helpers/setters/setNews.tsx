import { News, Props_ForSetNews } from "@/app/types/news";

export const setNews = async ( {newNewsName , setNewNewsName , onClose, setMyNews } : Props_ForSetNews )  => {
    try{
        const response = await fetch('/api/news', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newNewsName) })

        const result : News = await response.json();
        
        setMyNews((prev :News[] ) => {
            const update : News[] = [...prev] ;
            update.push(result);
            return update;
        });
  
    } catch (error){
        console.error(error)
    }
    setNewNewsName("");
    onClose();
  }
  