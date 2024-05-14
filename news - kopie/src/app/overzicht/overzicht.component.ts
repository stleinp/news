import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {NieuwsService} from "../nieuws.service";
import {Onderwerp} from "../Onderwerp";

@Component({
  selector: 'app-overzicht',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './overzicht.component.html',
  styleUrl: './overzicht.component.css'
})
export class OverzichtComponent implements OnInit{
  onderwerpen: Onderwerp[] = [];

  constructor(private nieuwsService: NieuwsService){}

  ngOnInit() {
    this.nieuwsService.onderwerpen().subscribe((onderwerpen)=>{
      this.onderwerpen = onderwerpen;
    })
  }
}
