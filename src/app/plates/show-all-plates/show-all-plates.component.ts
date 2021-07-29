import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Plates} from "../plates";
import {PlatesService} from "../plates.service";

@Component({
  selector: 'app-show-all-plates',
  templateUrl: './show-all-plates.component.html',
  styleUrls: ['./show-all-plates.component.css']
})
export class ShowAllPlatesComponent implements OnInit {
  nomm;
  dess;
  platesList: Plates[]=[] ;

  constructor(private platesService: PlatesService, private router:Router) { }

  ngOnInit(): void  {
    this.platesService.getAllPlates().subscribe( data =>
    { this.platesList = data['hydra:member'];

    });



  }
  rechercher(){

    this.platesService.getPlatesbyNom(this.nomm).subscribe( data =>
    { this.platesList = data['hydra:member'];

    });


  }
  recherchere() {
    this.platesService.getPlatesbyDes(this.dess).subscribe( data =>
    { this.platesList = data['hydra:member'];

    });
  }

}



