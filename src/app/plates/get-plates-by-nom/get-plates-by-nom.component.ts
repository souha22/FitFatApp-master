import { Component, OnInit } from '@angular/core';
import {Plates} from "../plates";
import {ActivatedRoute, Router} from "@angular/router";
import {PlatesService} from "../plates.service";

@Component({
  selector: 'app-get-plates-by-nom',
  templateUrl: './get-plates-by-nom.component.html',
  styleUrls: ['./get-plates-by-nom.component.css']
})
export class GetPlatesByNomComponent implements OnInit {
  plateslist :Plates[]=[] ;
  platesnom : any;
  constructor(private activatedRoute: ActivatedRoute,
              private platesService: PlatesService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.platesnom = data.nom;

      console.log(data)
    });
    this.platesService.getPlatesbyNom(this.platesnom).subscribe((result)=>{

      this.plateslist= result['hydra:member'];
      // console.log("====> ", result);
    });
  }

}
