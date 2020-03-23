import { Component, OnInit } from '@angular/core';
import { CashBackService } from '../Services/cashbackService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  texts: string[];
  results: string[];
  cashBack = '00010101';

  constructor(protected cashbackService: CashBackService) { }

  ngOnInit() {
    this.getCashBack();
  }

  search(event) {
    this.results = ['valor 1', 'valor 2'];
  }

  getCashBack() {
    this.cashbackService.getCashBackAmount('04147166989').toPromise().then((a) =>
        this.cashBack = a.body
      ).catch((ex) => {
      this.cashBack = '0000';
      console.log('Erro ao consumir' + ex.message);
      });
  }

}
