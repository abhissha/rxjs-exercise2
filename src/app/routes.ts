import { Routes } from '@angular/router';
import { PagingExampleComponent } from "./rxjs/paging-example/paging-example.component";


export const routes: Routes = [
  { path: 'paging', component: PagingExampleComponent },
  { path: '', component: PagingExampleComponent}
]
