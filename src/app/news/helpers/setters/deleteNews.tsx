import { News } from "@/app/types/news";
import { Dispatch, SetStateAction } from "react";

export const deleteNews = async ( id : number ,setMyNews : Dispatch<SetStateAction<News[]>>) => {
    try {
        const response = await fetch(`/api/news/${id}`, {
            method: 'DELETE'
        });

        setMyNews((prev : News[] ) => {
            let update : News[] = [...prev];
            update = update.filter( news => news.id !== id);
            return update;
          });
          
        if (!response.ok) {
            throw new Error('erreur de suppression');
        }
    } catch (error) {
        console.error(error);
    }
};
