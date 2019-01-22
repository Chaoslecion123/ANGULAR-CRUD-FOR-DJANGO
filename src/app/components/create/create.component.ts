import { Component, OnInit } from '@angular/core';
import { Portafolio } from '../../models/portafolio';
import { PortafolioService } from '../../services/portafolio.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [PortafolioService]
})
export class CreateComponent implements OnInit {

  public title: String;
  public portafolio : Portafolio;
  public save_project;
  public status:String;
 

  constructor(
    private _portafolioService:PortafolioService,
   
    ) { 
    this.title = "Crear Proyecto";
   
    this.portafolio = new Portafolio('','','','');

  }

  ngOnInit(
    
  ) {
  
  }

  onSubmit(form){
    //console.log(this.portafolio);
    this._portafolioService.savePortafolio(this.portafolio).subscribe(
      
      response => {
        if(response){
          console.log(response);
          this.save_project=response;
          console.log(this.save_project);
          this.status="succes";
          form.reset();
          
        }else{
          this.status="failed";
        }
      

      },
      error => {
        console.log(<any>error);

      }

    );
  }

}
