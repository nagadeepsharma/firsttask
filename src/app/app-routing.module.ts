import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { KudoswalldiscoverComponent } from "./kudoswalldiscover/kudoswalldiscover.component";
import { KudoswalleduComponent } from "./kudoswalledu/kudoswalledu.component";
import { LoginComponent } from "./login/login.component";
import { ProkudoswallComponent } from "./prokudoswall/prokudoswall.component";

const routes:Routes=[
    {
        path:'prokudoswall',component:ProkudoswallComponent
    },
    {
        path:'kudoswalledu',component:KudoswalleduComponent
    },
    {
        path:'kudoswalldiscover',component:KudoswalldiscoverComponent
    },
    {
        path:'',component:HomeComponent
    },
    {
        path:'login',component:LoginComponent
    }

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}