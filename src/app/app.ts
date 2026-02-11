import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../pages/header/header";



import { ActionButtonsComponent } from "../pages/components/molecules/action-buttons.component";


import { AuthCard } from "./cards/auth-card/auth-card";

import { CountryComponent } from "./cards/country.component/country.component";
import { Panel } from "./cards/panel/panel";
import { Card2 } from "./cards/card2/card2";
import { Tab } from "./pages 1/tab/tab";
import { Tab2 } from "./pages 1/tab2/tab2";
import { Card3 } from "./pages 1/card3/card3";
import { CountryCard } from "../stories/country-card.component/country-card.component";
import { CountryComponent2 } from "./cards/upov-country2/upov-country2";


@Component({

  selector: 'app-root',
  imports: [ Tab2, Card3,Card2 ],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  protected readonly title = signal('techstory');
}
