export interface Information {
    readonly nameBoard: string;
    readonly nameBox: string;
    readonly daily: {
        total: number,
        success: number
        failure: number,
    };
    readonly week: {
        total: number,
        success: number
        failure: number,
    };
    readonly month: {
        total: number,
        success: number
        failure: number,
    }
}