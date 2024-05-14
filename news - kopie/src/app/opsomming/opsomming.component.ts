import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {NieuwsService} from "../nieuws.service";
import {NieuwsItem} from "../NieuwsItem";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-opsomming',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './opsomming.component.html',
  styleUrl: './opsomming.component.css'
})
export class OpsommingComponent implements OnInit{
  @Input() subOnderwerp: string | undefined;

  alleNieuwsitems: NieuwsItem[] = [];
  subNieuwsitems: NieuwsItem[] = [];

  constructor(private nieuwsService: NieuwsService){}

  ngOnInit() {
    this.nieuwsService.haalAlleNieuwsItems().subscribe((nieuwsitems)=>{
      this.alleNieuwsitems = nieuwsitems;
    })
  }

  ngOnChanges(changes: SimpleChanges){
    if(this.subOnderwerp != undefined){
      this.subNieuwsitems = [];
      for (let ni of this.alleNieuwsitems){
        if(ni.subcategory == this.subOnderwerp){
          this.subNieuwsitems.push(ni);
        }
      }
    }

  }

}
