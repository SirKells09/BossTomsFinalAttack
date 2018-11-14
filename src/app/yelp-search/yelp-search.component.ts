import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms'
import { ServiceService } from '../yelp/service.service'



@Component({
  selector: 'app-yelp-search',
  templateUrl: './yelp-search.component.html',
  styleUrls: ['./yelp-search.component.css']
})
export class YelpSearchComponent implements OnInit {

  public results:Object;
  
  yelpForm: FormGroup;

  constructor(private serviceService:ServiceService) { }
 price= new FormControl()
location= new FormControl()
  ngOnInit() {
  
  
  }
    onRestaurantSearch(){
      this.serviceService.getRestuarants(this.location.value, this.price.value)
      .subscribe((resdata=>{this.results = resdata}))
      console.log(this.results)
    }
}
