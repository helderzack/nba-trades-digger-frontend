export class Logo {
    
    href: string;
    width: number;
    height: number;
    alt: string;
    rel: Array<string>;
    lastUpdated: Date;

    constructor(href: string,
        width: number,
        height: number,
        alt: string,
        rel: Array<string>,
        lastUpdated: Date) {
            this.href = href;
            this.width = width;
            this.height = height;
            this.alt = alt;
            this.rel = rel;
            this.lastUpdated = lastUpdated;
    }
}