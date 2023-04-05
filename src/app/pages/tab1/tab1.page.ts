import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { ListResult } from 'src/app/models/ListResult';
import { Car } from 'src/app/models/car';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import {TurkishCurrencyPipe} from "../../pipes/turkish-currency.pipe";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, CommonModule, TurkishCurrencyPipe],
})
export class Tab1Page implements OnInit{
  paginatedCarResult: ListResult<Car>
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getCars()
  }

  getCars(){
    this.httpClient.get<any>("http://localhost:56305/api/Cars/getcardetails").subscribe({
      next: (value) => {
        console.log(value)
        this.paginatedCarResult = value;
      }
    });
  }

  handleChange(event: any){
    const search = event.detail["value"];
    // if (search)
    //   this.paginatedCarResult.items = this.paginatedCarResult.items.
    //     filter(car => car.brandName.toLowerCase().startsWith(search.toLowerCase()))
    // else{
    //   this.getCars();
    // }
  }

}
