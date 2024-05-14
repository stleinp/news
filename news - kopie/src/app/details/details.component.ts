import {Component, OnInit} from '@angular/core';
import {NieuwsService} from "../nieuws.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NieuwsItem} from "../NieuwsItem";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  nieuwsItem: NieuwsItem |undefined;

  constructor(
    private nieuwsService: NieuwsService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("nieuwsitem")
    if(id != null){
      this.nieuwsService.haalNieuwsItem(id).subscribe((item)=>{
        this.nieuwsItem = item;
      })
    }
    console.log(this.nieuwsItem)
  }
}
