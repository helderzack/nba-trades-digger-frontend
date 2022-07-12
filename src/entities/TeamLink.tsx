export class TeamLink {
    
    language: string;
    rel: Array<string>;
    href: string;
    text: string;
    shortText: string;
    isExternal: boolean;
    isPremium: boolean;

    constructor(language: string,
        rel: Array<string>,
        href: string,
        text: string,
        shortText: string,
        isExternal: boolean,
        isPremium: boolean) {
            this.language = language;
            this.rel = rel;
            this.href = href;
            this.text = text;
            this.shortText = shortText;
            this.isExternal = isExternal;
            this.isPremium = isPremium;
    }
}