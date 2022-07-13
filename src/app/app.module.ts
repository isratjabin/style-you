import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const AppElement = createCustomElement(AppComponent, { injector: this.injector });
    window.customElements.define('app-root', AppElement);
  }

  // Empty bootstrap call allow our custom elements to bootstrap them selves
  // Required by Angular since we did not specify which component to bootstrap in @NgModule
  ngDoBootstrap() {
  }
}

