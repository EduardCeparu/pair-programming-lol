import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ItemService{

    private headers:HttpHeaders = new HttpHeaders({'Content-type' : 'Application/json'})
    url:string = "http://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/item.json"
    
    constructor(private http:HttpClient) {}

    //list items
    listItems() : Observable<any>{
        return this.http.get<any>(this.url)
    }

}