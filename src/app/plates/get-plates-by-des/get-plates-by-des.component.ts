import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { PlatesService } from "../../plates/plates.service";
import {Plates} from "../plates";

@Component({
  selector: 'app-get-plates-by-des',
  templateUrl: './get-plates-by-des.component.html',
  styleUrls: ['./get-plates-by-des.component.css']
})
export class GetPlatesByDesComponent implements OnInit {
  plateslist :Plates[]=[] ;
  platesdescription : any;
  constructor(private activatedRoute: ActivatedRoute,
              private platesService: PlatesService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.platesdescription = data.description;

      console.log(data)
    });
    this.platesService.getPlatesbyDes(this.platesdescription).subscribe((result)=>{

      this.plateslist= result['hydra:member'];
      // console.log("====> ", result);
    });
  }

}
