import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Onderwerp} from "./Onderwerp";
import {RestOnderwerp} from "./RestOnderwerp";
import {NieuwsItem} from "./NieuwsItem";
import {RestNieuwsItem} from "./RestNieuwsItem";

@Injectable({
  providedIn: 'root'
})
export class NieuwsService {

  constructor(private http: HttpClient) { }

  haalAlleNieuwsItems(): Observable<NieuwsItem[]>{
    return this.http.get<RestNieuwsItem[]>("https://623b4a952e056d1037f0689b.mockapi.io/items")
      .pipe(
        map(nieuwsItems => nieuwsItems.map(
          ni => new NieuwsItem(ni.id, ni.category, ni.subcategory, ni.title, ni.content)
        ))
      )
  }

  haalNieuwsItem(id: string): Observable<NieuwsItem>{
    return this.http.get<RestNieuwsItem>("https://623b4a952e056d1037f0689b.mockapi.io/items/"+id)
      .pipe(
        map(ni=> {
          return new NieuwsItem(ni.id, ni.category, ni.subcategory, ni.title, ni.content)
          }
        )
      )
  }

  onderwerpen(): Observable<Onderwerp[]>{
    return this.http.get<RestOnderwerp[]>("https://623b4a952e056d1037f0689b.mockapi.io/onderwerpen")
      .pipe(
        map(onderwerpen => onderwerpen.map(
          o => new Onderwerp(o.title, o.subcategorieen, o.id)
        ))
      )
  }
  subOnderwerpen(id:string|undefined|null): Observable<string[]>{
    return this.http.get<Onderwerp>("https://623b4a952e056d1037f0689b.mockapi.io/onderwerpen/"+id)
      .pipe(
        map((onderwerp: Onderwerp)=>{return onderwerp.subcategorieen})
      )
  }
}
