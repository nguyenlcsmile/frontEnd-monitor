import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { Store, State } from '@ngrx/store';
import { AppState } from 'src/store/store.action';
import { OnBoarding } from 'src/store/information';
import { RestApiService } from 'src/api/rest-api.service';
import { CommentStmt } from '@angular/compiler';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
    valueMonitor: any;
    updateMonitor: any;
    checkCustPhone: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    };
    submitEKYC: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    };
    checkKYCStatus: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    };
    videoStatement: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    };
    faceMatch: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    };
    signContract: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    };
    getContract: any = {
        daily: {
            total: 0,
            success: 0,
            fail: 0,
        },
        week: {
            total: 0,
            success: 0,
            fail: 0,
        },
        month: {
            total: 0,
            success: 0,
            fail: 0,
        }
    };
    attending: any = {
        daily: 0,
        week: 0,
        month: 0
    };
    passOnboarding: any = {
        daily: 0,
        week: 0,
        month: 0
    };

    dataWeek: any;
    dataMonth: any;
    dataDaily: any;

    constructor(
        private api: APIService,
        private store: Store<AppState>,
        private state: State<{}>,
        public restApi: RestApiService
    ) {
        const persisted = localStorage.getItem('MONITOR');
        const timeDay = localStorage.getItem('TimeDay');

        const timeToday = new Date();
        const timeDaily = timeToday.getDate();

        if (persisted && timeDaily === JSON.parse(timeDay)) {
            this.updateMonitor = JSON.parse(persisted);
            this.dataDaily = this.updateMonitor.daily;
            // this.disPatchMonitor(this.updateMonitor.daily, this.updateMonitor.week, this.updateMonitor.month);
        } else {
            localStorage.clear();
        }
    }

    ngOnInit() {
        this.api.SubscribeToNewMessageListener().subscribe({
            next: async (data) => {
                let newData = data.value.data.subscribeToNewMessage;
                let item = JSON.parse(newData.value);
                console.log(">>>Check data receive:", item);
                this.getValueMonitor();
                if (item) {
                    // console.log(item);
                    this.dataDaily = item;
                    this.disPatchMonitor(item, this.dataWeek, this.dataMonth);
                    this.updateMonitor = this.valueMonitor.slice(-1)[0];
                    console.log(">>>Check data update:", this.updateMonitor);
                    localStorage.setItem("MONITOR", JSON.stringify(this.updateMonitor));
                }
            }
        })
    }

    formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2){
            let preDay = Number(day) - 1;
            day = '0' + preDay;
        }
    
        return [year, month, day].join('-');
    }
     
    ngAfterViewInit() {
        let yourDate = new Date();
        localStorage.setItem("TimeDay", JSON.stringify(yourDate.getDate()));

        yourDate.toISOString().split('T')[0]
        let timeDay = this.formatDate(yourDate);

        const timeWeek = `${timeDay}-week`;
        const timeMonth = `${timeDay}-month`;
        this.getDataDashboard(timeWeek);
        this.getDataDashboard('2023-01-04-month');
    }

    ngDoCheck() {
        if (this.dataWeek) {
            // console.log(">>> Check data week:", this.dataWeek);
            Object.keys(this.dataWeek).map(keyName => {
                if (keyName === 'check_cust_box') this.checkCustPhone.week = this.dataWeek.check_cust_box;
                if (keyName === 'submit_ekyc_box') this.submitEKYC.week = this.dataWeek.submit_ekyc_box;
                if (keyName === 'submit_kyc_status_box') this.checkKYCStatus.week = this.dataWeek.submit_kyc_status_box;
                if (keyName === 'video_statement_box') this.videoStatement.week = this.dataWeek.video_statement_box;
                if (keyName === 'face_match_box') this.faceMatch.week = this.dataWeek.face_match_box;
                if (keyName === 'get_contract_box') this.getContract.week = this.dataWeek.get_contract_box;
                if (keyName === 'sign_contract_box') this.signContract.week = this.dataWeek.sign_contract_box;
                if (keyName === 'onboarding_new_customer') this.attending.week = this.dataWeek.onboarding_new_customer;
                if (keyName === 'pass_onboarding') this.passOnboarding.week = this.dataWeek.pass_onboarding;
            })
        }
        if (this.dataMonth) {
            // console.log(">>> Check data month:", this.dataMonth);
            Object.keys(this.dataMonth).map(keyName => {
                if (keyName === 'check_cust_box') this.checkCustPhone.month = this.dataMonth.check_cust_box;
                if (keyName === 'submit_ekyc_box') this.submitEKYC.month = this.dataMonth.submit_ekyc_box;
                if (keyName === 'submit_kyc_status_box') this.checkKYCStatus.month = this.dataMonth.submit_kyc_status_box;
                if (keyName === 'video_statement_box') this.videoStatement.month = this.dataMonth.video_statement_box;
                if (keyName === 'face_match_box') this.faceMatch.month = this.dataMonth.face_match_box;
                if (keyName === 'get_contract_box') this.getContract.month = this.dataMonth.get_contract_box;
                if (keyName === 'sign_contract_box') this.signContract.month = this.dataMonth.sign_contract_box;
                if (keyName === 'onboarding_new_customer') this.attending.month = this.dataMonth.onboarding_new_customer;
                if (keyName === 'pass_onboarding') this.passOnboarding.month = this.dataMonth.pass_onboarding;
            })
        }
        this.getValueMonitor();
        // console.log(this.valueMonitor);
    }

    async getDataDashboard(timeData) {
        const auth_token = 'dXNlcl9kYXNoYm9hcmRfbG9nX3YyX3VhdDpwYXNzd29yZF90dWFuYW5oX3Rlc3Rpbmc=';
        let body = {
            "uuid": timeData
        }

        await this.restApi.getDataOnboarding(auth_token, body).subscribe(res => {
            if (timeData.split('-').slice(-1)[0] === 'week') {
                res['data'].map(item => {
                    if (item._id === timeData) {
                        this.dataWeek = item._source;
                    }
                })
            }
            if (timeData.split('-').slice(-1)[0] === 'month') {
                res['data'].map(item => {
                    if (item._id === timeData) {
                        this.dataMonth = item._source;
                    }
                })
            }

            if (this.dataWeek && this.dataMonth) {
                this.disPatchMonitor(this.dataDaily, this.dataWeek, this.dataMonth);
            }
        })
    }

    disPatchMonitor(dataDaily, dataWeek, dataMonth) {
        this.store.dispatch({
            type: 'Monitor',
            payload: <OnBoarding>{
                daily: dataDaily,
                week: dataWeek,
                month: dataMonth
            }
        });
    }

    getValueMonitor() {
        this.store.select(state => state.informationdata).subscribe(
            getdata => this.valueMonitor = getdata
        );
    }
}
