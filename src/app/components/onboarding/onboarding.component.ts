import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { Store, State } from '@ngrx/store';
import { AppState } from 'src/store/store.action';
import { OnBoarding } from 'src/store/information';
import { RestApiService } from 'src/api/rest-api.service';

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
    faceMatch: OnBoarding[] = [];
    signContract: OnBoarding[] = [];
    getContract: OnBoarding[] = [];
    attending: OnBoarding[] = [];
    passOnboarding: OnBoarding[] = [];
    userPassOnboarding: any = [];
    userAttending: any = [];

    constructor(
        private api: APIService,
        private store: Store<AppState>,
        private state: State<{}>,
        public restApi: RestApiService
    ) { }

    ngOnInit() {
        this.api.SubscribeToNewMessageListener().subscribe({
            next: async (data) => {
                let newData = data.value.data.subscribeToNewMessage;
                let item = JSON.parse(newData.value);

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
                else if (item.nameBox === 'Face Match') {
                    this.faceMatch = [item];
                }
                else if (item.nameBox === 'Get Contract') {
                    this.getContract = [item];
                }
                else if (item.nameBox === 'Sign Contract') {
                    this.signContract = [item];
                }
            }
        })
    }

    ngAfterViewInit() { }

    ngDoCheck() {
        // this.checkCifIdOnboarding();
        this.checkAttending();
        this.checkOnboarding();
    }

    checkAttending() {
        if (this.attending.length !== 0) {
            console.log(this.attending);
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
}
