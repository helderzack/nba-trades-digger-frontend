import { Logo } from "./Logo";
import { TeamLink } from "./TeamLink";

export class Team {
    
    id: number;
    location: string;
    name: string;
    abbreviation: string;
    displayName: string;
    color: string;
    alternateColor: string;
    logos: Array<Logo>;
    links: Array<TeamLink>;

    constructor(id: number,
        location: string,
        name: string,
        abbreviation: string,
        displayName: string,
        color: string,
        alternateColor: string,
        logos: Array<Logo>,
        links: Array<TeamLink>) {
            this.id = id;
            this.location = location;
            this.name = name;
            this.abbreviation = abbreviation;
            this.displayName = displayName;
            this.color = color;
            this.alternateColor = alternateColor;
            this.logos = logos;
            this.links = links;
    }
}