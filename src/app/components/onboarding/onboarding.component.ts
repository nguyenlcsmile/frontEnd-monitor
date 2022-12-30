import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import {Store, State} from '@ngrx/store';
import { AppState } from 'src/store/store.action';
import { Information } from 'src/store/information';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
    totalCusAttending:any = 0;
    totalCusAttending1:any = 10;
    color: any = false;
    result: any;
    result1: any;
    value: Information[];

    constructor(
        private api: APIService,
        private store: Store<AppState>,
        private state: State<{}>,
    ) {
        // this.products = this.store.select(statee => statee);
        // console.log(this.products);
    }

    ngOnInit() {
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
    }

    ngAfterViewInit() {
        let value = this.addValueOnboarding('ONBOARDING', 'ATTENDING');
        console.log(value);
        this.getValueOnboarding();
        let value1 = this.addValueOnboarding('ONBOARDING', 'ATTENDING');
        console.log(value1);
        this.getValueOnboarding1();
    }

    addValueOnboarding(nameBoard, nameBox) {
        this.store.dispatch({
        type: nameBoard,
        payload: <Information> {
            nameBoard: nameBoard,
            nameBox: nameBox,
            daily: {
                total: 1,
                success: 1,
                failure: 1
            },
            week: {
                total: 1,
                success: 1,
                failure: 1
            },
            month: {
                total: 1,
                success: 1,
                failure: 1
            },

        }
    });
        return this.state.value;
    }

    getValueOnboarding() {
        this.store.select(state => state.information).subscribe(
            data => this.value = data
        );
        console.log(this.value);
    }

    getValueOnboarding1() {
        this.store.select(state => state.information).subscribe(
            data => this.value = data
        );
        console.log(this.value);
    }


}
