import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NieuwsService} from "../nieuws.service";
import {NgForOf} from "@angular/common";
import {Onderwerp} from "../Onderwerp";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-subcategorieen',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './subcategorieen.component.html',
  styleUrl: './subcategorieen.component.css'
})
export class SubcategorieenComponent implements OnInit {
  @Input() onderwerpId: string = "";
  subOnderwerp: string[] = []

  constructor(private nieuwsService: NieuwsService) {
  }

  ngOnInit() {
    this.nieuwsService.subOnderwerpen(this.onderwerpId)
      .subscribe(so => this.subOnderwerp = so);

  }

  @Output() subCatGekozen = new EventEmitter<string>();
  veranderSub(event:any){
    this.subCatGekozen.emit(event.target.innerText)
  }
}
