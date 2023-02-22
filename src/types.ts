export interface State {
    code: string,
    name: string
}

export class Holiday {
    fullName: string;
    shortName: string;
    state: State;
    start: Date;
    end: Date;

    constructor(name: string, state: State, start: Date, end: Date) {
        this.fullName = name;
        this.state = state;
        this.start = start;
        this.end = end;

        this.shortName = this.fullName.replace(this.start.getFullYear().toString(), '');
        this.shortName = this.shortName.replace(this.state.name, '');
        this.shortName = this.shortName.trim();
    }

    isInDateRange(date: Date) {
        return this.start <= date && this.end >= date;
    }
}