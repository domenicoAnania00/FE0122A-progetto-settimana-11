import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Route } from '@angular/router';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dettagli/:id',
    component: DettagliComponent,
  },
  {
    path: 'carrello',
    component: CarrelloComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrelloComponent,
    NavbarComponent,
    DettagliComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
