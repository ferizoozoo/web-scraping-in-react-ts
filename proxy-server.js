import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;
const PROXY_URL = 'https://news.ycombinator.com';

app.use(cors());

async function getNews() {
    try {
        const res = await fetch(PROXY_URL);
        return res.text();
    } catch (error) {
        console.error("Error fetching the page:", error);
    }
}

app.get('/news', async (req, res, next) => {
    const news = await getNews();
    res.send(news);
});

app.listen(PORT, () => {
    console.log(`Proxy server listening on http://localhost:${PORT}`)
})