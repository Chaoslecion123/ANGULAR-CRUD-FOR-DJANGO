import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { PortafolioService } from '../../services/portafolio.service';
import { Portafolio } from '../../models/portafolio';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [PortafolioService]
})
export class AboutComponent implements OnInit {

    public portafolios: Portafolio[];
    public url: String;
    public nombre:String;
    public titulo:String;
    public lenguajes: String;
    
    constructor(private _portafolioService:PortafolioService) {
      this.titulo = "Developers";
      this.url = Global.url;
      this.nombre = "Nombre";
      this.lenguajes= "lenguajes";
     }

    ngOnInit() {

      this.getPortafolios();
    }

    getPortafolios(){
      this._portafolioService.getPortafolios().subscribe(
        
        response => {
          if(response){
            this.portafolios = response;
             
          }
        },

        error => {
          console.log(<any>error);
        }


      )
    }


}
