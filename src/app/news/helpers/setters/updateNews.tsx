import { Props_ForSetNews ,News} from "@/app/types/news";

export const updateNews = async (id : number , {newNewsName, setNewNewsName,onClose,  setMyNews} : Props_ForSetNews ) => {
    try {
      const response = await fetch(`/api/news/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNewsName), 
      });
      if (!response.ok) {
        throw new Error('Error updating news');
      }
      const result = await response.json();

      setMyNews((prev: News[]) => {
        let update = [...prev];
        update = update.map((news) => {
          if (news.id === id) return { ...news, name: result.name };
          else return news;
        });
        return update;
      });


      setNewNewsName("");
      onClose();
    } catch (error) {
      console.error(error);
    }
  };