import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { SystemErrorComponent } from './components/system-error/system-error.component';
import { FunctionalsComponent } from './components/functionals/functionals.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { StoreModule } from '@ngrx/store';
import { addInformationReducer } from 'src/store/store.reducer';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    SystemErrorComponent,
    FunctionalsComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ inforBoxOnboarding: addInformationReducer }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
