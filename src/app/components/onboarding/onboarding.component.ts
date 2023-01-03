import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { Store, State } from '@ngrx/store';
import { AppState } from 'src/store/store.action';
import { OnBoarding } from 'src/store/information';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
    totalCusAttending: any = 0;
    totalCusAttending1: any = 10;
    valueOnboarding: OnBoarding[] = [];
    checkCustPhone: OnBoarding[] = [];
    submitEKYC: OnBoarding[] = [];
    checkKYCStatus: OnBoarding[] = [];
    videoStatement: OnBoarding[] = [];
    signContract: OnBoarding[] = [];
    getContract: OnBoarding[] = [];
    attending: OnBoarding[] = [];
    passOnboarding: OnBoarding[] = [];
    userPassOnboarding: any = [];
    userAttending: any = [];

    constructor(
        private api: APIService,
        private store: Store<AppState>,
        private state: State<{}>
    ) {
        // const persisted = localStorage.getItem('ONBOARDING');
        // if (persisted) {
        //     this.valueOnboarding = JSON.parse(persisted);
        //     this.valueOnboarding.map((item, index) => {
        //         this.store.dispatch({
        //             type: 'OnBoarding',
        //             index: null,
        //             payload: <OnBoarding>{
        //                 nameBox: item.nameBox,
        //                 detailCustomers: item.detailCustomers,
        //                 daily: item.daily
        //             }
        //         });

        //         if (item.nameBox === 'Check Customer Phone') {
        //             this.checkCustPhone = [item];
        //             this.color = true;
        //         }
        //         else if (item.nameBox === 'Submit EKYC') {
        //             this.submitEKYC = [item];
        //             this.color = true;
        //         }
        //         else if (item.nameBox === 'Check KYC Status') {
        //             this.checkKYCStatus = [item];
        //             this.color = true;
        //         }
        //         else if (item.nameBox === 'Video Statement') {
        //             this.videoStatement = [item];
        //             this.color = true;
        //         }
        //         else if (item.nameBox === 'Get Contract') {
        //             this.getContract = [item];
        //             this.color = true;
        //         }
        //         else if (item.nameBox === 'Sign Contract') {
        //             this.signContract = [item];
        //             this.color = true;
        //         }
        //     })
        // } else {
        //     this.getValueOnboarding();
        // }
    }

    ngOnInit() {
        // console.log(this.valueOnboarding);
        this.api.SubscribeToNewMessageListener().subscribe({
            next: (data) => {
                let newData = data.value.data.subscribeToNewMessage;

                this.getValueOnboarding();
                this.addValueOnboarding(this.valueOnboarding, JSON.parse(newData.value));
                this.valueOnboarding.map((item, index) => {
                    if (item.nameBox === 'Check Customer Phone') {
                        this.attending = [item];
                        this.checkCustPhone = [item];
                    }
                    else if (item.nameBox === 'Submit EKYC') {
                        this.submitEKYC = [item];
                    }
                    else if (item.nameBox === 'Check KYC Status') {
                        this.checkKYCStatus = [item];
                    }
                    else if (item.nameBox === 'Video Statement') {
                        this.videoStatement = [item];
                    }
                    else if (item.nameBox === 'Get Contract') {
                        this.getContract = [item];
                    }
                    else if (item.nameBox === 'Sign Contract') {
                        this.signContract = [item];
                    }
                })
            }
        })
    }

    ngAfterViewInit() { }

    ngDoCheck() {
        // this.checkCifIdOnboarding();
        this.checkAttending();
        this.checkOnboarding();
        console.log(this.valueOnboarding);
        // console.log(this.cifIdContract)
    }

    checkAttending() {
        if (this.attending.length !== 0) {
            this.attending.map(item => {
                let detailCustomers = item.detailCustomers;
                detailCustomers.map(customer => {
                    if (!this.userAttending.includes(customer.phone) && customer.phone && customer.statusCode === 400) {
                        this.userAttending.push(customer.phone);
                    }
                });
            });
        }
    }

    checkOnboarding() {
        if (this.signContract.length !== 0) {
            this.signContract.map(item => {
                let detailCustomers = item.detailCustomers;
                detailCustomers.map(customer => {
                    if (customer.statusCode === 200 && customer.cifId && !this.userPassOnboarding.includes(customer.cifId)) {
                        this.userPassOnboarding.push(customer.cifId);
                    }
                })
            })
        }
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
        }
        else if (statusCode === 400 && data.step === 'Check Cust Phone') {
            let dataDaily = {
                total: 1,
                success: 1,
                failure: 0
            }
            this.disPatchOnboarding(data, listInformation, dataDaily, null);
        }
        else {
            let dataDaily = {
                total: 1,
                success: 0,
                failure: 1
            }
            this.disPatchOnboarding(data, listInformation, dataDaily, null);
        }
    }

    addValueOnboarding(dataOnboarding, data) {
        let dataDetail = data.dataDetail;
        const statusCode = dataDetail.statusCode;
        let listInformations = [], nameBoxs = [], valueDaily = [];

        if (dataOnboarding.length !== 0) {
            dataOnboarding.map(item => {
                if (item.nameBox) nameBoxs.push(item.nameBox);
                if (item.daily) valueDaily.push(item.daily);
                // console.log(item.phoneCustomers, item.usernames);
                if (item.detailCustomers.length !== 0) listInformations.push(item.detailCustomers);
            })
        } else {
            if (data.phone || statusCode) listInformations.push({
                statusCode: statusCode,
                phone: data.phone,
                url: dataDetail.url,
                cifId: data.cifId
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
                if (data.phone || dataDetail.statusCode) {
                    let dataAdd = {
                        statusCode: dataDetail.statusCode,
                        phone: data.phone,
                        url: dataDetail.url,
                        cifId: data.cifId
                    }
                    let checkExist = listInformations[index].some(item => {
                        if (item.phone === data.phone && item.cifId === data.cifId) {
                            return true;
                        }
                        return false;
                    });
                    if (checkExist === false) listInformation = [...listInformations[index], dataAdd];
                    else listInformation = [...listInformations[index]];
                }
                if (statusCode === 200 || (statusCode === 400 && data.step === 'Check Customer Phone')) {
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
                if (data.phone || dataDetail.statusCode) listInformations.push({
                    statusCode: dataDetail.statusCode,
                    phone: data.phone,
                    url: dataDetail.url,
                    cifId: data.cifId
                });
                this.addFirstBoxOnboarding(statusCode, data, listInformations);
            }
        }

        return this.state.value;
    }
}
