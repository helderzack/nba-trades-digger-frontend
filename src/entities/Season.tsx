export class Season {
    
    year: number;
    type: number;
    name: string;
    displayName: string;

    constructor(year: number,
        type: number,
        name: string,
        displayName: string) {
            this.year = year;
            this.type = type;
            this.name = name;
            this.displayName =displayName;
    }
}