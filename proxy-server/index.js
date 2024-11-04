import express from 'express';
import cors from 'cors';
import { CacheProvider } from './cache.js';

const app = express();
const PORT = 4000;
const PROXY_URL = 'https://news.ycombinator.com';

app.use(cors());

const cache = new CacheProvider();

async function getNews() {
    try {
        const res = await fetch(PROXY_URL);
        return res.text();
    } catch (error) {
        console.error("Error fetching the page:", error);
    }
}

app.get('/news', async (req, res, next) => {
    let news = cache.get('news');
    if (news == null) {
        news = await getNews();
        cache.set('news', news);
    }
    res.send(news);
});

app.listen(PORT, () => {
    console.log(`Proxy server listening on http://localhost:${PORT}`)
})