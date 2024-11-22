import {Component} from '@angular/core';
import {ProductsComponent} from "@angular-monorepo/products";

@Component({
  standalone: true,
  imports: [ProductsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'inventory';
}
