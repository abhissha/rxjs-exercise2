import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import * as routes from './routes';
import { PagingExampleComponent } from './rxjs/paging-example/paging-example.component';

@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot(routes.routes) 
  ],
  declarations: 
  [ 
    AppComponent, 
    PagingExampleComponent
  ],
  exports:      
  [        
  ],
  bootstrap:    
  [ 
    AppComponent 
  ]
})
export class AppModule { }
