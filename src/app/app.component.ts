import { Component } from '@angular/core';
import { Amplify } from "@aws-amplify/core";
import config from '../aws-exports';

Amplify.configure(config)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontEnd';
}
