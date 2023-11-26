import { Routes } from '@angular/router';
import { ProfileCard1Component } from './profile-card1/profile-card1.component';
import { ProfileCard2Component } from './profile-card2/profile-card2.component';

export const routes: Routes = [
    {path:'',redirectTo:'card',pathMatch:'full'},
    {path:'card1',component:ProfileCard1Component},
    {path:'card2',component:ProfileCard2Component},
    {path:'card',loadChildren: () => import('../app/card/card.module').then(m => m.CardModule)}
];
