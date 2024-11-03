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

    async getPosts(): Promise<NodeListOf<Element> | undefined> {
        await this.ready;
        return this.dom?.querySelectorAll(".athing");
    }
}