import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { PresentSimpleComponent } from '../app/components/present-simple/present-simple.component';
import { PresentContinuousComponent } from '../app/components/present-continuous/present-continuous.component';
import { PastSimpleComponent } from '../app/components/past-simple/past-simple.component';
import { PastContinuousComponent } from '../app/components/past-continuous/past-continuous.component';
import { PresentPerfectComponent } from '../app/components/present-perfect/present-perfect.component';
import { GrammarCheckComponent } from '../app/components/grammar-check/grammar-check.component';
import { HomeComponent } from '../app/components/home/home.component';
import { TranslateComponent } from '../app/components/translate/translate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentsimple', component: PresentSimpleComponent },
  { path: 'presentcontinuous', component: PresentContinuousComponent },
  { path: 'pastsimple', component: PastSimpleComponent },
  { path: 'pastcontinuous', component: PastContinuousComponent },
  { path: 'presentperfect', component: PresentPerfectComponent },
  { path: 'grammarcheck', component: GrammarCheckComponent },
  { path: 'translate', component: TranslateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
