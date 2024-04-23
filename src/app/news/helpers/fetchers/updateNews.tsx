import { Props_ForSetNews, News } from "@/app/types/news";

export const fetchUpdateNews = async (id: number, { newsNameValue, setNewsNameValue, onClose, setNews }: Props_ForSetNews) => {
  try {
    const response = await fetch(`/api/news/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newsNameValue),
    });
    if (!response.ok) {
      throw new Error('Error updating news');
    }
    const result = await response.json();

    setNews((prev: News[]) => {
      let update = [...prev];
      update = update.map((news) => {
        if (news.id === id) return { ...news, name: result.name };
        else return news;
      });
      return update;
    });


    setNewsNameValue("");
    onClose();
  } catch (error) {
    console.error(error);
  }
};