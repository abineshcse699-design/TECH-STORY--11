import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../pages/header/header";
import { Components } from "./pages 1/components/components";
import { Components2 } from "./pages 1/components2/components2";
import { TablesComponent } from "./pages 1/tables.component/tables.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Components, Components2, TablesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('techstory');
}
