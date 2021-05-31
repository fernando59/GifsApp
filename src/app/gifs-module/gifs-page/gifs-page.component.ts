import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styleUrls: ['./gifs-page.component.css']
})
export class GifsPageComponent implements OnInit {

  constructor(
    private gifsService:GifsService
  ) { }

  ngOnInit(): void {
  }

  get history(){
    return this.gifsService.history
  }
  search(word:string){
    console.log(word)
    this.gifsService.searchGifs(word)
  }


}
