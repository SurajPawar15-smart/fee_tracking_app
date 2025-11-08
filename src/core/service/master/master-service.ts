import { IApiResponseModel } from './../../model/interfaces/APIResponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MasterModel } from '../../model/classes/master.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getAllMaster(): Observable<IApiResponseModel> {
    return this.http.get<IApiResponseModel>(
      'https://feestracking.freeprojectapi.com/api/Master/get-all-masters'
    );
  }
  saveMaster(obj: MasterModel): Observable<IApiResponseModel> {
    return this.http.post<IApiResponseModel>(
      'https://feestracking.freeprojectapi.com/api/Master/create-master',
      obj
    );
  }

  deleteMaster(masterId: number): Observable<IApiResponseModel> {
    return this.http.delete<IApiResponseModel>(
      'https://feestracking.freeprojectapi.com/api/Master/delete-master/'+masterId
    
    );
  }

  updateMaster(obj: MasterModel): Observable<IApiResponseModel> {
    return this.http.put<IApiResponseModel>(
      'https://feestracking.freeprojectapi.com/api/Master/update-master/' + obj.masterId,obj
    );
  }
}
