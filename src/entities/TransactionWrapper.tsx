import { RequestedYear } from "./RequestedYear";
import { Season } from "./Season";
import { Transaction } from "./Transaction";

export class TransactionWrapper {

    timestamp: Date;
    status: string;
    season: Season;
    requestedYear: RequestedYear;
    count: number;
    pageIndex: number;
    pageSize: number;
    pageCount: number;
    transactions: Array<Transaction>;

    constructor(timestamp: Date,
        status: string,
        season: Season,
        requestedYear: RequestedYear,
        count: number,
        pageIndex: number,
        pageSize: number,
        pageCount: number,
        transactions: Array<Transaction>) {
            this.timestamp = timestamp;
            this.status = status;
            this.season = season;
            this.requestedYear = requestedYear;
            this.count = count;
            this.pageIndex = pageIndex;
            this.pageSize = pageSize;
            this.pageCount = pageCount;
            this.transactions = transactions;
    }
}