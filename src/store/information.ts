export interface OnBoarding {
    readonly nameBox: string;
    readonly detailCustomers: any;
    readonly daily: {
        total: number,
        success: number,
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