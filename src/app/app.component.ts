import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from "primeng/table";

@Component({
    selector: 'app-root',
    imports: [TableModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-app';

  // generate 1000 random customers
  customers: {name: string; country: string; company: string;}[] = Array.from({length: 10_000}, (_,index) => generateCustomer(index));

}


const generateCustomer = (index: number) => {
  const countries = ['USA', 'Germany', 'Japan'];
  const companies = ['Apple', 'BMW', 'Sony', 'Ford'];
  return {
    index,
    name: Math.random().toString(36).substring(7),
    country: countries[Math.floor(Math.random() * countries.length)],
    company: companies[Math.floor(Math.random() * companies.length)]
  };
}
