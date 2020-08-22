import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { SmallComponent } from './components/small/small.component';
import { YellowBackgroundDirective } from './directives/yellow-background.directive';
import { ShowNameComponent } from './components/show-name/show-name.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SmallComponent,
    YellowBackgroundDirective,
    ShowNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
