import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { PaginatedResult } from 'src/app/models/paginatedResult';
import { Car } from 'src/app/models/car';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, CommonModule],
})
export class Tab1Page implements OnInit{
  paginatedCarResult: PaginatedResult<Car>
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getCars()
  }

  getCars(){
    this.httpClient.get<PaginatedResult<Car>>(`${environment.apiUrl}Cars?Page=0&PageSize=10`).subscribe({
      next: (value) => {
        this.paginatedCarResult = value;
        console.log(value)
      }
    });
  }

  handleChange(event: any){
    const search = event.detail["value"];
    if (search)
      this.paginatedCarResult.items = this.paginatedCarResult.items.
        filter(car => car.brandName.toLowerCase().startsWith(search.toLowerCase()))
    else{
      this.getCars();
    }
  }

}
