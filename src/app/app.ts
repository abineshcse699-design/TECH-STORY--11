import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../pages/header/header";



import { ActionButtonsComponent } from "../pages/components/molecules/action-buttons.component";


import { AuthCard } from "./cards/auth-card/auth-card";

import { CountryComponent } from "./cards/country.component/country.component";
import { Panel } from "./cards/panel/panel";
import { Card2 } from "./cards/card2/card2";
import { Tab } from "./pages 1/tab/tab";





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ActionButtonsComponent, AuthCard, CountryComponent, Panel, Card2, Tab],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('techstory');
}
