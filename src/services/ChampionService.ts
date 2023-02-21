import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Champion } from 'src/app/model/Champion';

@Injectable({
    providedIn: 'root'
})

export class ChampionService{

    private headers:HttpHeaders = new HttpHeaders({'Content-type' : 'Application/json'})
    // url:string = "http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json"
    url:string = "https://gist.githubusercontent.com/jfisher446/2844002/raw/077bdbbeece2d20b254304c035bd05bbe780b9b2/lol-champions.json"

    constructor(private http:HttpClient) {}

    //list champs
    listChamps() : Observable<any>{
        return this.http.get<any>(this.url)
    }

}