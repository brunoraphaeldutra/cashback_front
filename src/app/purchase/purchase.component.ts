import { Component, OnInit, Input } from '@angular/core';
import { CashBackService } from '../Services/cashbackService';
import { Purchase } from '../model/PurchaseModel';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  compras: Purchase[];
  @Input() cpf: string;
  erro = false;
  modalDelete = false;
  modalCreate = false;
  modalUpdate = false;
  itemDelete: Purchase;
  itemCreate = new Purchase();
  itemUpdate = new Purchase();

  constructor(protected cashbackService: CashBackService) { }

  ngOnInit() {
    this.getPurchases();
  }

  getPurchases() {
    this.cashbackService.findPurchase(this.cpf).toPromise().then((data) => {
      this.compras = data.body;
    }).catch((erro) => {
      this.erro = true;
      console.log('Erro ao consumir:' + erro.message);
    });
  }

  prepararDelete(item) {
    this.itemDelete = item;
    this.modalDelete = true;
  }

  cancelarModal() {
    this.modalDelete = false;
    this.itemDelete = null;
    this.itemCreate = new Purchase();
    this.modalCreate = false;
    this.modalUpdate = false;
    this.itemUpdate = new Purchase();
  }

  realizarDelete() {
    this.modalDelete = false;
    this.cashbackService.deletePurchase(this.itemDelete.id).toPromise().then((data) => {
      this.getPurchases();
    }).catch((erro) => {
      this.getPurchases();
      console.log('Erro ao deletar:' + erro.message);
    });
  }

  prepararCreate() {
    this.itemCreate = new Purchase();
    this.modalCreate = true;
  }

  realizarCreate() {
    this.modalCreate = false;
    this.itemCreate.date = formatDate(this.itemCreate.date, 'yyyy-MM-ddT00:00:00', 'en-US');
    this.itemCreate.value = parseInt(this.itemCreate.value.toString());
    this.cashbackService.addPurchase(this.itemCreate).toPromise().then((data) => {
      this.getPurchases();
    }).catch((erro) => {
      this.getPurchases();
      console.log('Erro ao criar:' + erro.message);
    });
  }

  prepararUpdate(item){
    this.itemUpdate = item;
    this.modalUpdate = true;
  }

  realizarUpdate() {
    this.modalUpdate = false;
    this.itemUpdate.date = formatDate(this.itemUpdate.date, 'yyyy-MM-ddT00:00:00', 'en-US');
    //this.itemUpdate.value = this.itemUpdate.value.toString();
    this.cashbackService.editPurchase(this.itemUpdate).toPromise().then((data) => {
      this.getPurchases();
    }).catch((erro) => {
      this.getPurchases();
      console.log('Erro ao criar:' + erro.message);
    });
  }
}
