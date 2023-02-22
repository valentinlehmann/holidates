import {Holiday, State} from './types';
import * as fs from "fs";
import _states from './states.json';
import * as ical from 'node-ical';
const states = _states as State[];
export const holidays: Holiday[] = [];

export const stateCodeToState = (code: String) => states.find(state => state.code === code) || states[0];

export const loadHolidayData = async () => {
    const files = fs.readdirSync('./holidays/');
    const icalFiles = files.filter(file => file.endsWith('.ics'));

    icalFiles.forEach(icalFile => {
        const content = fs.readFileSync('./holidays/' + icalFile, 'utf8');

        parseIcalData(stateCodeToState(icalFile.split('_')[0]), ical.sync.parseICS(content))
            .forEach(holiday => holidays.push(holiday));
    });

    holidays.sort((a, b) => a.start.getTime() - b.start.getTime());
}

const parseIcalData = (state: State, icalData: Object) => {
    const events = Object.values(icalData).filter(event => event.type === 'VEVENT');

    return events.map(event => {
        return new Holiday(event.summary, state, new Date(JSON.stringify(event.start).replaceAll('"', '')),
             new Date(JSON.stringify(event.end).replaceAll('"', '')))
    });
}