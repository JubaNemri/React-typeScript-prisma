import { News, Props_ForSetNews } from "@/app/types/news";

export const fetchCreateNews = async ( {newsNameValue , setNewsNameValue , onClose, setNews } : Props_ForSetNews )  => {
    try{
        const response = await fetch('/api/news', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsNameValue) })

        const result : News = await response.json();
        
        setNews((prev :News[] ) => {
            const update : News[] = [...prev] ;
            update.push(result);
            return update;
        });
  
    } catch (error){
        console.error(error)
    }
    setNewsNameValue("");
    onClose();
  }
  