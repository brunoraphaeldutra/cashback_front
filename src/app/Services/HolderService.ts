import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class HolderService {

  constructor() { }
  requisicao = false;

  public startReq() {
    this.requisicao = true;
  }

  public stopReq() {
    this.requisicao = false;
  }

  public situacaoReq(): boolean {
    return this.requisicao;
  }
}
