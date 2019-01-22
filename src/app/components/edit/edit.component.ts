import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params } from '@angular/router';
import { Global } from '../../services/global';
import { Portafolio } from '../../models/portafolio';
import { PortafolioService } from '../../services/portafolio.service';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PortafolioService]
})
export class EditComponent implements OnInit {

  public url: String;
  public portafolio : Portafolio;
  public status: String;
  public save_project;

  constructor(
    private _portafolioService : PortafolioService,
    private _router: Router,
    private _route: ActivatedRoute

  ) {
    this.portafolio = new Portafolio('','','','');
   }

   ngOnInit() {
    this._route.params.subscribe(value => {
      let id = value.id;
      this.detailPortafolio(id);
    });
  }

  detailPortafolio(id){
    this._portafolioService.detailPortafolio(id).subscribe(

      response => {
        this.portafolio = response;
        //console.log(this.portafolio);
      },

      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(){
    this._portafolioService.editarPortafolio(this.portafolio).subscribe(
      
      response => {
        console.log(response);
        if(response){
          
          this.save_project = response;
          this.status="succes";
          console.log(this.save_project);
          
        }else{
          this.status="faild";
        }
      },
      error => {
        console.log(<any>error);
      }


    );

     

      

    }
  }


