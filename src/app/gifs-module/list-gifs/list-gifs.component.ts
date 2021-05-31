import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-list-gifs',
  templateUrl: './list-gifs.component.html',
  styleUrls: ['./list-gifs.component.css']
})
export class ListGifsComponent implements OnInit {

  constructor(
    private gifsService:GifsService
  ) { }

  ngOnInit(): void {
  }

  get results(){
    return this.gifsService.results
  }

}
