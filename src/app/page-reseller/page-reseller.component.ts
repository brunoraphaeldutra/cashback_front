import { Component, OnInit } from '@angular/core';
import { Reseller } from '../model/ResellerModel';
import { CashBackService } from '../Services/cashbackService';

@Component({
  selector: 'app-page-reseller',
  templateUrl: './page-reseller.component.html',
  styleUrls: ['./page-reseller.component.css']
})
export class PageResellerComponent implements OnInit {

  itemCreate = new Reseller();
  mostrarDiv = false;
  mensagem = '';
  constructor(protected cashbackService: CashBackService) { }

  ngOnInit() {
  }

  createReseller() {
    this.mostrarDiv = false;
    this.cashbackService.addReseller(this.itemCreate).subscribe(
        () => {
          this.mensagem = 'Criado com suscesso';
          this.mostrarDiv = true;
          this.itemCreate = new Reseller();
        }
        , (error) => {
          console.error(error);
          this.mensagem = 'Problemas ao criar item, tente novamente.';
          this.mostrarDiv = true;
        }
      );
  }

}
