import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../intefaces/gifs.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private apiKey: string = `${environment.apiKey}`
  private url: string = "https://api.giphy.com/v1/gifs"
  private _history: string[] = []

  //Data
  public results: Gif[] = []

  constructor(
    private http: HttpClient
  ) {
    this._history = JSON.parse(localStorage.getItem('history')!) || []
    this.results = JSON.parse(localStorage.getItem('results')!) || []


  }
  get history() {
    return [...this._history]
  }


  searchGifs(word: string = 'Shingeky'): void {
    word = word.trim().toLocaleLowerCase()
    if (!this._history.includes(word)) {
      this._history.unshift(word)
      this._history = this._history.splice(0, 10)
      localStorage.setItem('history', JSON.stringify(this._history))
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '12')
      .set('q', word)
    this.http.get<SearchGifsResponse>(`${this.url}/search`, { params })
      .subscribe(res => {
        this.results = res.data
        localStorage.setItem('results', JSON.stringify(this.results))
      })
  }


}
