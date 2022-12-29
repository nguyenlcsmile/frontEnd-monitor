import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  totalCusAttending:any = 0;

  constructor(private api: APIService) {}

  ngOnInit() {
    const result = this.api.SubscribeToNewMessageListener().subscribe({
      next: (data) => {
        let newData = data.value.data.subscribeToNewMessage;
        this.totalCusAttending = newData.value;
      }
    })
  }

}
