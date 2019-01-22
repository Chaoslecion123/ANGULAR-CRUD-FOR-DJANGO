import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../../services/portafolio.service';
import { Portafolio } from '../../models/portafolio';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [PortafolioService]
})
export class DetailComponent implements OnInit {

  public url: String;
  public portafolio: Portafolio;
  public confirm: boolean;

  constructor(
    private _portafolioService: PortafolioService,
    private _router: Router,
    private _route: ActivatedRoute
    ) {
      this.url = Global.url;

     }

  ngOnInit() {
    this._route.params.subscribe(value  => {
      let id = value.id;     
      this.detailPortafolio(id);
      this.confirm = false;
    });
  }

  detailPortafolio(id){
    this._portafolioService.detailPortafolio(id).subscribe(

      response => {
        this.portafolio = response;
      },

      error => {
        console.log(<any>error);
      }
    );
  }

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deletePortafolio(id){
    this._portafolioService.deletePortafolio(id).subscribe(
      
      response => {
        console.log(response);
        if(id){
          this._router.navigate(['/']);
        }

      },
      error => {
        console.log(<any>error);
      }
    );
  }


}
