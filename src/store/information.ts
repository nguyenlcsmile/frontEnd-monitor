export interface OnBoarding {
    readonly nameBox: string;
    readonly phoneCustomers: any;
    readonly url: string;
    readonly usernames: any;
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