import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChampionService } from 'src/services/ChampionService';
@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  constructor(private championService:ChampionService, private router:Router) { }

  champions:any = [];
  
  listChampions(){
    this.championService.listChamps().subscribe(
      res=>{
        this.champions = res
        console.log(this.champions)
      }
      
    )
  }
  goToGuide(name: string){
    this.router.navigate(['/guides/' + name])
  }
  
  ngOnInit(): void {
    this.listChampions()
  }

}
