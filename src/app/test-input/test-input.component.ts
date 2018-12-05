import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.css']
})
export class TestInputComponent implements OnInit {
  @Input()
  login: string;
  @Input()
  pass: string;

  afficheMessage() {
    alert(this.login + ''  + this.pass);
  }
  constructor() { }

  ngOnInit() {
  }

}
