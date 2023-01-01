export interface CHECK_CUST_PHONE {
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