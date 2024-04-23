import { News } from "@/app/types/news";
import { Dispatch, SetStateAction } from "react";

export const fetchDeleteNews = async (id: number, setNews: Dispatch<SetStateAction<News[]>>) => {
    try {
        const response = await fetch(`/api/news/${id}`, {
            method: 'DELETE'
        });

        setNews((prev: News[]) => {
            let update: News[] = [...prev];
            update = update.filter(news => news.id !== id);
            return update;
        });

        if (!response.ok) {
            throw new Error('erreur de suppression');
        }
    } catch (error) {
        console.error(error);
    }
};
