import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hookscomponent/hooks.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormBindingComponent } from '../components/formsbindingcomponents/forms.binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App, PrimerComponent
    , HooksComponent,
    DeportesComponent,
    FormBindingComponent

  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
