export const getNews = async () => {
    try {
        const res = await fetch('/api/news', {
            method: 'GET', 
            headers: {
            'Content-Type': 'application/json'
            },
             })
        const news = res.json()
        return news; 
    } catch(error)
    {
        console.log(error)
    }
}