import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { OnBoarding } from 'src/store/information';
import { AppState } from 'src/store/store.action';

@Component({
  selector: 'app-functionals',
  templateUrl: './functionals.component.html',
  styleUrls: ['./functionals.component.scss']
})
export class FunctionalsComponent implements OnInit {
  issueCard: OnBoarding[] = [];
  EStatement: OnBoarding[] = [];
  createSignature: OnBoarding[] = [];
  EContract: OnBoarding[] = [];
  TerminateTDAcount: OnBoarding[] = [];
  CashwithDrawal: OnBoarding[] = [];
  valueFuntionals: OnBoarding[] = [];

  constructor(
    private store: Store<AppState>,
    private state: State<{}>,
  ) { }

  ngOnInit() {

  }

  ngDoCheck() {
    this.store.select(state => state.inforBoxOnboarding).subscribe(
      getdata => this.valueFuntionals = getdata
    );
    if (this.valueFuntionals.length !== 0) {
      this.valueFuntionals.map(item => {
        if (item.nameBox === 'E-Statement') {
          this.EStatement = [item];
        }
        else if (item.nameBox === 'E-Contract') {
          this.EContract = [item];
        }
        else if (item.nameBox === 'Create Signature') {
          this.createSignature = [item];
        }
        else if (item.nameBox === 'Issue Card') {
          this.issueCard = [item];
        }
        else if (item.nameBox === 'Terminate TD Acount') {
          this.TerminateTDAcount = [item];
        }
        else if (item.nameBox === 'Cash with Drawal') {
          this.CashwithDrawal = [item];
        }
      })
    }
  }

}
