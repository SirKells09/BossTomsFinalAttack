import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({'Authorization': 'Bearer 8SOnPTbaAKadZPzrB6aZdRg4gywdWAUOKbO1Kyre7Olt7szUZjvqFI3zchkq-kpXsrMWfIi7QJfxia7nGD17UYNmqpKFwE-K5fWxj1adBvhVuucYeXWiHu8KaHvrW3Yx'})
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  yelp_URL=`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=`
  

  

  constructor( private http: HttpClient) { }

getRestuarants(location, price){
  console.log(location,price)
  return this.http.get(this.yelp_URL + `${location}&price=${price}&open_now=true&limit=20`, httpOptions)

}
}