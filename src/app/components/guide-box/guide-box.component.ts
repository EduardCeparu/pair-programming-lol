import { Component, OnInit } from '@angular/core';
import { ChampionService } from 'src/services/ChampionService';
import {ItemService} from 'src/services/ItemService'
@Component({
  selector: 'app-guide-box',
  templateUrl: './guide-box.component.html',
  styleUrls: ['./guide-box.component.css']
})
export class GuideBoxComponent implements OnInit {
  
  constructor(private championService:ChampionService, private itemService:ItemService) {
   }
  name:any
  tags:any = []
  items:any = []
  ngOnInit(): void {
    this.getInfo()
    this.getItems()
  }

  getItems(){
    this.itemService.listItems().subscribe(
      res=>{
        this.items = res;
        console.log(res.data[1004].tags)
      }
    )
  }

  getInfo(){
    this.championService.listChamps().subscribe(
      res=>{
        this.name = res[4].name;
       this.tags = res[4].tags
        // console.log(this.name)
        // console.log(this.tags)
      }
    )
  }
}
