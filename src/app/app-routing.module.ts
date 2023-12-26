import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { DressComponent } from './dress/dress.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { BuyComponent } from './buy/buy.component';

const routes: Routes = [
  {path:"regi",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:HomeComponent},
  {path:"mobiles",component:MobileComponent},
  {path:"dress",component:DressComponent},
  {path:"ear",component:EarphonesComponent},
  {path:"buy",component:BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
