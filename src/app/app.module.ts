import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { SortPipe } from './sort.pipe';
import { TestInputComponent } from './test-input/test-input.component';
import { FormsModule } from '@angular/Forms';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    SortPipe,
    TestInputComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
