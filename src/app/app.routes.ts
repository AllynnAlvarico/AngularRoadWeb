import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent} from './quiz/quizapp/quizapp.component';
import { TimelineComponent } from './development-map/timeline/timeline.component';
import { LearnComponent } from './learn/learn.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './developer/portfolio/portfolio.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'learn', component: LearnComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component: ContactComponent}
];
const routerOptions : ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling:'enabled',
}
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
