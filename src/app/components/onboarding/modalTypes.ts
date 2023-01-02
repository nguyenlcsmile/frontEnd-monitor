export interface STEP_ONBOARDING {
    daily: {
        total: number,
        success: number,
        failure: number,
    };
    week: {
        total: number,
        success: number
        failure: number,
    };
    month: {
        total: number,
        success: number
        failure: number,
    }
}
