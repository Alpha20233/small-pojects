import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipcardComponent } from './flipcard/flipcard.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

const routes: Routes = [
  {path:'',redirectTo:'flip',pathMatch:'full'},
  {path:'flip',component:FlipcardComponent},
  {path:'credit',component:CreditCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
