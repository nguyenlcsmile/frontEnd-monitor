import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { Store, State } from '@ngrx/store';
import { AppState } from 'src/store/store.action';
import { OnBoarding } from 'src/store/information';
import { STEP_ONBOARDING } from './modalTypes';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
    totalCusAttending: any = 0;
    totalCusAttending1: any = 10;
    color: any = false;
    // result: any;
    // result1: any;
    valueOnboarding: OnBoarding[] = [];
    checkCustPhone: STEP_ONBOARDING[] = [];
    submitEKYC: STEP_ONBOARDING[] = [];
    checkKYCStatus: STEP_ONBOARDING[] = [];
    videoStatement: STEP_ONBOARDING[] = [];
    signContract: STEP_ONBOARDING[] = [];
    getContract: STEP_ONBOARDING[] = [];

    datas: any = [
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "f069a016-9fa6-4a98-9f3a-276250f2112d",
            "timeRequest": "2022-12-22 15:39:50",
            "timeResponse": "2022-12-22 15:39:50",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/check-cust/GET",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "7c426ad9-6ea8-4ba2-a7c4-082111204415",
            "timeRequest": "2022-12-22 15:39:46",
            "timeResponse": "2022-12-22 15:39:46",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/check-cust/GET",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "31c4705e-00a5-4dba-911e-14d5b4b635b8",
            "timeRequest": "2022-12-22 15:39:25",
            "timeResponse": "2022-12-22 15:39:27",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/check-cust/GET",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "fe452592-b7f5-4db9-8a57-3cd3fbd7ffd0",
            "timeRequest": "2022-12-22 15:39:22",
            "timeResponse": "2022-12-22 15:39:22",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/check-cust/GET",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "209dd762-9d92-435f-ae45-d2e10a90b200",
            "timeRequest": "2022-12-22 15:39:19",
            "timeResponse": "2022-12-22 15:39:19",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/check-cust/GET",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Sign Contract",
            "id": "8bb84fac-c4d1-499d-a624-f873bb012432",
            "timeRequest": "2022-12-22 15:38:56",
            "timeResponse": "2022-12-22 15:38:57",
            "phone": null,
            "nid": null,
            "cifId": "555313112",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/verify-otp/POST",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "25e35594-9177-490b-81a2-8ef5eab8b7cb",
            "timeRequest": "2022-12-22 15:38:45",
            "timeResponse": "2022-12-22 15:38:46",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/check-cust/GET",
            "statusCode": 400
        },
        {
            "dashboard": "OnBoarding",
            "step": "Get Contract",
            "id": "230a4f6c-769a-46bc-b53d-adbdd81659af",
            "timeRequest": "2022-12-22 15:38:40",
            "timeResponse": "2022-12-22 15:38:40",
            "phone": null,
            "nid": null,
            "cifId": "555313112",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/jao-contract/POST",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "cd5b3e19-6732-4720-b905-7aff254077b0",
            "timeRequest": "2022-12-22 15:38:26",
            "timeResponse": "2022-12-22 15:38:26",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/check-cust/GET",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "7cee0aea-5aca-4ccb-9dca-2eea39256237",
            "timeRequest": "2022-12-22 15:38:25",
            "timeResponse": "2022-12-22 15:38:25",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/check-cust/GET",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "0db1072c-68fb-4acc-b1d3-f69173daed86",
            "timeRequest": "2022-12-22 15:35:49",
            "timeResponse": "2022-12-22 15:35:50",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/check-cust/GET",
            "statusCode": 400
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "5cb617f5-1550-447a-aba7-65b148ae6bca",
            "timeRequest": "2022-12-22 15:35:28",
            "timeResponse": "2022-12-22 15:35:30",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/check-cust/GET",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Video Statement",
            "id": "e2bd5a7e-368e-400d-828d-f3b88efee84f",
            "timeRequest": "2022-12-22 15:35:22",
            "timeResponse": "2022-12-22 15:35:23",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/producer/push/PUT",
            "statusCode": 200
        }
    ]
    constructor(
        private api: APIService,
        private store: Store<AppState>,
        private state: State<{}>
    ) {
        const persisted = localStorage.getItem('ONBOARDING');
        if (persisted) {
            this.valueOnboarding = JSON.parse(persisted);
            this.valueOnboarding.map((item, index) => {
                this.store.dispatch({
                    type: 'OnBoarding',
                    index: null,
                    payload: <OnBoarding>{
                        nameBox: item.nameBox,
                        detailCustomers: item.detailCustomers,
                        daily: item.daily
                    }
                });

                if (item.nameBox === 'Check Customer Phone') {
                    this.checkCustPhone = [item];
                    this.color = true;
                }
                else if (item.nameBox === 'Submit EKYC') {
                    this.submitEKYC = [item];
                    this.color = true;
                }
                else if (item.nameBox === 'Check KYC Status') {
                    this.checkKYCStatus = [item];
                    this.color = true;
                }
                else if (item.nameBox === 'Video Statement') {
                    this.videoStatement = [item];
                    this.color = true;
                }
                else if (item.nameBox === 'Get Contract') {
                    this.getContract = [item];
                    this.color = true;
                }
                else if (item.nameBox === 'Sign Contract') {
                    this.signContract = [item];
                    this.color = true;
                }
            })
        } else {
            this.getValueOnboarding();
        }
    }

    ngOnInit() {
        // console.log(this.valueOnboarding);

        // const result = this.api.SubscribeToNewMessageListener().subscribe({
        //   next: (data) => {
        //     let newData = data.value.data.subscribeToNewMessage;
        //     this.totalCusAttending = newData.value;
        //     this.color = true;
        //   }
        // })

        // const result1 = this.api.SubscribeToNewMessage1Listener().subscribe({
        //   next: (data) => {
        //     let newData = data.value.data.subscribeToNewMessage1;
        //     this.totalCusAttending1 = newData.value;
        //     this.color = true;
        //   }
        // })

        setInterval(() => {
            for (let i = 0; i < this.datas.length; i++) {
                this.getValueOnboarding();
                this.addValueOnboarding(this.valueOnboarding, this.datas[i]);
                this.valueOnboarding.map((item, index) => {
                    if (item.nameBox === 'Check Customer Phone') {
                        this.checkCustPhone = [item];
                        this.color = true;
                    }
                    else if (item.nameBox === 'Submit EKYC') {
                        this.submitEKYC = [item];
                        this.color = true;
                    }
                    else if (item.nameBox === 'Check KYC Status') {
                        this.checkKYCStatus = [item];
                        this.color = true;
                    }
                    else if (item.nameBox === 'Video Statement') {
                        this.videoStatement = [item];
                        this.color = true;
                    }
                    else if (item.nameBox === 'Get Contract') {
                        this.getContract = [item];
                        this.color = true;
                    }
                    else if (item.nameBox === 'Sign Contract') {
                        this.signContract = [item];
                        this.color = true;
                    }
                })
                if (this.valueOnboarding.length !== 0) {
                    localStorage.setItem('ONBOARDING', JSON.stringify(this.valueOnboarding));
                }
            }
        }, 5000)
    }

    ngAfterViewInit() {
        console.log(this.valueOnboarding);
    }

    ngDoCheck() {
        if (this.color) {
            setTimeout(() => {
                this.color = false;
            }, 2000)
        }
    }

    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }


    getValueOnboarding() {
        this.store.select(state => state.inforBoxOnboarding).subscribe(
            getdata => this.valueOnboarding = getdata
        );
    }

    disPatchOnboarding(data, listInformation, dataDaily, index) {
        this.store.dispatch({
            type: data.dashboard,
            index: index,
            payload: <OnBoarding>{
                nameBox: data.step,
                detailCustomers: listInformation,
                daily: dataDaily
            }
        });
    }

    addFirstBoxOnboarding(statusCode, data, listInformation) {
        if (statusCode === 200) {
            let dataDaily = {
                total: 1,
                success: 1,
                failure: 0
            }
            this.disPatchOnboarding(data, listInformation, dataDaily, null);
        } else {
            let dataDaily = {
                total: 1,
                success: 0,
                failure: 1
            }
            this.disPatchOnboarding(data, listInformation, dataDaily, null);
        }
    }

    addValueOnboarding(dataOnboarding, data) {
        const statusCode = data.statusCode;
        let listInformations = [], nameBoxs = [], valueDaily = [];

        if (dataOnboarding.length !== 0) {
            dataOnboarding.map(item => {
                if (item.nameBox) nameBoxs.push(item.nameBox);
                if (item.daily) valueDaily.push(item.daily);
                // console.log(item.phoneCustomers, item.usernames);
                if (item.detailCustomers.length !== 0) listInformations.push(item.detailCustomers);
            })
        } else {
            if (data.phone || data.username || data.statusCode) listInformations.push({
                statusCode: data.statusCode, phone: data.phone, username: data.username, url: data.url
            });
            // if (data.username) listUsernames.push(data.username);
        }

        if (dataOnboarding.length === 0 && data) {
            this.addFirstBoxOnboarding(statusCode, data, listInformations);
        }

        else if (dataOnboarding.length !== 0 && data) {
            if (nameBoxs.includes(data.step)) {
                let index = nameBoxs.indexOf(data.step);
                let dataDaily = valueDaily[index];
                let listInformation = [];
                if (data.phone || data.username || data.statusCode) {
                    let dataAdd = {
                        statusCode: data.statusCode, phone: data.phone, username: data.username, url: data.url
                    }
                    let checkExist = listInformations[index].some(item => {
                        if (item.phone === data.phone && item.username === data.username) {
                            return true;
                        }
                        return false;
                    });
                    if (checkExist === false) listInformation = [...listInformations[index], dataAdd];
                    else listInformation = [...listInformations[index]];
                }
                if (statusCode === 200) {
                    dataDaily = {
                        total: dataDaily.total + 1,
                        success: dataDaily.success + 1,
                        failure: dataDaily.failure
                    }
                } else {
                    dataDaily = {
                        total: dataDaily.total + 1,
                        success: dataDaily.success,
                        failure: dataDaily.failure + 1
                    }
                }
                this.disPatchOnboarding(data, listInformation, dataDaily, index);
            }
            else {
                let listInformations = [];
                if (data.phone || data.username || data.statusCode) listInformations.push({
                    statusCode: data.statusCode, phone: data.phone, username: data.username, url: data.url
                });
                this.addFirstBoxOnboarding(statusCode, data, listInformations);
            }
        }

        return this.state.value;
    }
}
