import { Team } from "./Team";

export class Transaction {
    
    date: Date;
    description: string;
    team: Team;

    constructor(date: Date,
        description: string,
        team: Team) {
            this.date = date;
            this.description = description;
            this.team = team;
    }
}