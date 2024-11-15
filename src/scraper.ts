import { Post } from "./types";

export class HackerNewsScraper {
    private dom: Document | undefined;
    private ready: Promise<void>;

    constructor() {
        this.ready = fetch('http://localhost:4000/news')
            .then(res => res.text()) 
            .then(data => {
                const parser = new DOMParser();
                this.dom = parser.parseFromString(data, "text/html");
            })
    }

    async getPosts(): Promise<Post[]> {
        await this.ready;
        const newsElement = this.dom?.querySelectorAll(".athing");
        const posts: Post[] = []

        newsElement?.forEach((element) => {
            posts.push({
                title: element?.childNodes[4]?.innerText,
                link: element?.childNodes[4]?.childNodes[0]?.childNodes[0]?.href
            })
        })

        return posts;
    }
}