import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {QuestionsComponent} from "./components/questions/questions.component";

const routes: Routes = [
  {path:"",redirectTo:"welcome", pathMatch:"full"},
  {path:"welcome", component:WelcomeComponent},
  {path:"questions", component:QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
