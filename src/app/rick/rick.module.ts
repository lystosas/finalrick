import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickRoutingModule } from './rick-routing.module';
import { AppComponent } from './components/app/app.component';
import { MaterialModule } from '../material/material.module';
import { RickService } from './services/rick.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogoComponent } from './components/dialogo/dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogoComponent
  ],
  imports: [
    CommonModule,
    RickRoutingModule,
    MaterialModule,
    HttpClientModule,
    
  ],
  providers: [
    RickService
  ]
})
export class RickModule { }
