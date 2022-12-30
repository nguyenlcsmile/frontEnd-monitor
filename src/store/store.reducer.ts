// import { createReducer, on } from "@ngrx/store";
// import { saveData } from "./store.action";

// export interface Product {
//     name: string;
//     price: number;
// }

// export const totalData = {
//     'dashboard': '',
//     'detail': {
//         'eventCode': '',
//         'data': ''
//     }
// };

// export const saveDataReducer = createReducer(
//     totalData,
//     on(saveData, (data) => {
//         return {...totalData, data}
//     })
// )

import { Action } from '@ngrx/store';
import { Information } from './information';

export function addInformationReducer(state: Information[] = [], action) {
    switch (action.type) {
        case 'ONBOARDING':
            return [...state, action.payload];
        default:
            return state;
        }
}