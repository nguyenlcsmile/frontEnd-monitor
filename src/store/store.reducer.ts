import { Action } from '@ngrx/store';
import { OnBoarding } from './information';

export function addInformationReducer(state: OnBoarding[] = [], action) {
    switch (action.type) {
        case 'OnBoarding':
            if (action.index !== undefined) {
                return [...state, action.payload].filter(item => {
                    return item !== state[action.index]
                })
            } else {
                return [...state, action.payload];
            }
        default:
            return state;
    }
}