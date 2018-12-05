import { Component, ViewChild } from '@angular/core';
import { TestInputComponent } from './test-input/test-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  utilisateur: string;
  motDePass: string;

  @ViewChild(TestInputComponent)
  testInput: TestInputComponent;

  appelAfficheMessage() {
    this.testInput.afficheMessage();
  }
}
