import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { Store, State } from '@ngrx/store';
import { AppState } from 'src/store/store.action';
import { OnBoarding } from 'src/store/information';
import { CHECK_CUST_PHONE } from './modalTypes';

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
    valueOnboarding: OnBoarding[];
    checkCustPhone: CHECK_CUST_PHONE;

    datas: any = [
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "159843b8-d686-4536-9792-321a1c50a896",
            "timeRequest": "2022-12-26 16:49:03",
            "timeResponse": "2022-12-26 16:49:04",
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
            "id": "8c9eda2b-f9c4-426c-ac97-9fe59bfb1a8b",
            "timeRequest": "2022-12-26 16:48:52",
            "timeResponse": "2022-12-26 16:48:53",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/producer/push/PUT",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Video Statement",
            "id": "3340f6e1-d30a-412d-92b8-b2bd8033bfbb",
            "timeRequest": "2022-12-26 16:48:05",
            "timeResponse": "2022-12-26 16:48:05",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/producer/push/PUT",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Video Statement",
            "id": "04f1cc15-e9c1-4c22-8144-6777775912ed",
            "timeRequest": "2022-12-26 16:45:21",
            "timeResponse": "2022-12-26 16:45:21",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/producer/push/PUT",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Video Statement",
            "id": "9350af17-6d4b-4a2d-866e-367cebdabcd4",
            "timeRequest": "2022-12-26 16:42:52",
            "timeResponse": "2022-12-26 16:42:52",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/producer/push/PUT",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check KYC Status",
            "id": "26caeeae-4e0a-4f95-8067-d3785a00fa40",
            "timeRequest": "2022-12-26 16:42:12",
            "timeResponse": "2022-12-26 16:42:12",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "doantung99",
            "url": "/v1/top-up/kyc-status/POST",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "76be80a1-72bc-4d2f-8529-bba46682c749",
            "timeRequest": "2022-12-26 16:41:22",
            "timeResponse": "2022-12-26 16:41:22",
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
            "id": "8feb6968-66cf-4e95-bb8c-5a1062419d50",
            "timeRequest": "2022-12-26 16:41:21",
            "timeResponse": "2022-12-26 16:41:21",
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
            "id": "16c048b6-78af-4919-93c8-47b2a852fa81",
            "timeRequest": "2022-12-26 16:41:14",
            "timeResponse": "2022-12-26 16:41:16",
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
            "id": "32c3c3f3-c1cb-401b-a3ba-b0409686139e",
            "timeRequest": "2022-12-26 16:40:36",
            "timeResponse": "2022-12-26 16:40:37",
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
            "id": "281a45eb-a761-48aa-b4a8-4f58ccbf86d9",
            "timeRequest": "2022-12-26 16:39:21",
            "timeResponse": "2022-12-26 16:39:21",
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
            "id": "62dede26-3ff6-4cbd-b45d-ba4a5eb0b2bf",
            "timeRequest": "2022-12-26 16:39:20",
            "timeResponse": "2022-12-26 16:39:20",
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
            "step": "Get Contract",
            "id": "89e0a3a7-63bc-47ff-8a95-46f99a4d51d8",
            "timeRequest": "2022-12-26 16:38:33",
            "timeResponse": "2022-12-26 16:38:34",
            "phone": null,
            "nid": null,
            "cifId": "555309958",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/jao-contract/POST",
            "statusCode": 400
        },
        {
            "dashboard": "OnBoarding",
            "step": "Video Statement",
            "id": "104de479-33f5-476a-b03c-4aa5e2b4b618",
            "timeRequest": "2022-12-26 16:38:29",
            "timeResponse": "2022-12-26 16:38:29",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/producer/push/PUT",
            "statusCode": 200
        },
        {
            "dashboard": "OnBoarding",
            "step": "Check Customer Phone",
            "id": "e06febcb-6dde-491f-9951-3c158e562d90",
            "timeRequest": "2022-12-26 16:38:18",
            "timeResponse": "2022-12-26 16:38:18",
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
            "id": "34e0ee60-bca6-4e1e-9330-c4357845e3f4",
            "timeRequest": "2022-12-26 16:37:48",
            "timeResponse": "2022-12-26 16:37:48",
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
            "id": "74eac4f2-4da0-458b-abcc-251da2cdc2d8",
            "timeRequest": "2022-12-26 16:37:47",
            "timeResponse": "2022-12-26 16:37:47",
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
            "id": "20bc3a96-524f-444a-97b1-c1eca1f73a0f",
            "timeRequest": "2022-12-26 16:37:19",
            "timeResponse": "2022-12-26 16:37:19",
            "phone": null,
            "nid": null,
            "cifId": "",
            "accountNumber": "",
            "username": "thuy.nguyen.106",
            "url": "/v1/jao/check-cust/GET",
            "statusCode": 200
        }
    ]

    constructor(
        private api: APIService,
        private store: Store<AppState>,
        private state: State<{}>,
    ) { }

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

        for (let i = 0; i < this.datas.length; i++) {
            this.getValueOnboarding();
            this.addValueOnboarding(this.valueOnboarding, this.datas[i]);
        }

    }

    ngAfterViewInit() {
        this.getValueOnboarding();
        console.log(this.valueOnboarding);
        this.valueOnboarding.map((item, index) => {
            // if (item.nameBox === 'Check Customer Phone') {

            // }
        })
    }

    getValueOnboarding() {
        this.store.select(state => state.inforBoxOnboarding).subscribe(
            getdata => this.valueOnboarding = getdata
        );
    }

    disPatchOnboarding(data, listPhones, listUsernames, dataDaily, index) {
        this.store.dispatch({
            type: data.dashboard,
            index: index,
            payload: <OnBoarding>{
                nameBox: data.step,
                phoneCustomers: listPhones,
                url: data.url,
                usernames: listUsernames,
                daily: dataDaily
            }
        });
    }

    addFirstBoxOnboarding(statusCode, data, listPhones, listUsernames) {
        if (statusCode === 200) {
            let dataDaily = {
                total: 1,
                success: 1,
                failure: 0
            }
            this.disPatchOnboarding(data, listPhones, listUsernames, dataDaily, null);
        } else {
            let dataDaily = {
                total: 1,
                success: 0,
                failure: 1
            }
            this.disPatchOnboarding(data, listPhones, listUsernames, dataDaily, null);
        }
    }

    addValueOnboarding(dataOnboarding, data) {
        const statusCode = data.statusCode;
        let listPhones = [], listUsernames = [], nameBoxs = [], valueDaily = [];

        if (dataOnboarding.length !== 0) {
            dataOnboarding.map(item => {
                if (item.nameBox) nameBoxs.push(item.nameBox);
                if (item.daily) valueDaily.push(item.daily);
                // console.log(item.phoneCustomers, item.usernames);
                if (item.phoneCustomers.length !== 0) listPhones.push(item.phoneCustomers);
                if (item.usernames.length !== 0) listUsernames.push(item.usernames);
            })
        } else {
            if (data.phone) listPhones.push(data.phone);
            if (data.username) listUsernames.push(data.username);
        }

        if (dataOnboarding.length === 0 && data) {
            this.addFirstBoxOnboarding(statusCode, data, listPhones, listUsernames);
        }

        else if (dataOnboarding.length !== 0 && data) {
            if (nameBoxs.includes(data.step)) {
                let index = nameBoxs.indexOf(data.step);
                let dataDaily = valueDaily[index];
                let listPhone = [], listUsername = [];
                if (data.phone) {
                    listPhone = [...listPhones[index], data.phone];
                }
                if (data.username) {
                    listUsername = [...listUsernames[index], data.username];
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
                this.disPatchOnboarding(data, listPhone, listUsername, dataDaily, index);
            }
            else {
                let listPhones = [];
                let listUsernames = [];
                if (data.phone) listPhones.push(data.phone);
                if (data.username) listUsernames.push(data.username);

                this.addFirstBoxOnboarding(statusCode, data, listPhones, listUsernames);
            }
        }

        return this.state.value;
    }
}
