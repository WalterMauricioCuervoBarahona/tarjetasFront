import { Injectable } from '@angular/core';
import {HttpHelperService} from '../httpHelper/http-helper.service';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class generateRandom {

  
  private GENERATE_RANDOM: string =  'localhost:9090/transaction/file-generation';


  constructor(private httpHelperService: HttpHelperService) { }

  setGenerateAction(object: any): Promise<[any]> {
    let formData = new FormData();
    formData.append("json", object);
    return new Promise((resolve, reject) => {
      this.httpHelperService.postRequest(
        this.GENERATE_RANDOM,
        formData,
        resolve,
        reject
      );
    });
  }
}
