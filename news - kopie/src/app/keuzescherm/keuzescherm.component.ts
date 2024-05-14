import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SubcategorieenComponent} from "../subcategorieen/subcategorieen.component";
import {OpsommingComponent} from "../opsomming/opsomming.component";

@Component({
  selector: 'app-keuzescherm',
  standalone: true,
  imports: [
    SubcategorieenComponent,
    OpsommingComponent
  ],
  templateUrl: './keuzescherm.component.html',
  styleUrl: './keuzescherm.component.css'
})
export class KeuzeschermComponent implements OnInit{
  onderwerpId: string | null="";
  subOnderwerp: string | null = "";

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.onderwerpId = this.route.snapshot.paramMap.get('onderwerp');
  }

  veranderSubOndw(event:any){
    this.subOnderwerp = event.toString();
  }

}
