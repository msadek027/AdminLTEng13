import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:65161/api";
  readonly PhotoUrl = "http://localhost:65161/Photos/";

  constructor(private http: HttpClient) {}
  
  getDeptList(): Observable < any[] > {
      return this.http.get < any > (this.APIUrl + '/department');
  }
addDepartment(val: any) 
{
    return this.http.post(this.APIUrl + '/Department', val);
}
updateDepartment(val: any) {
  return this.http.put(this.APIUrl + '/Department', val);
}
deleteDepartment(val: any) {
  return this.http.delete(this.APIUrl + '/Department/' + val);
}



getEmpList(): Observable < any[] > {
  return this.http.get < any > (this.APIUrl + '/Employee');
}
addEmployee(val: any) {
return this.http.post(this.APIUrl + '/Employee', val);
}
updateEmployee(val: any) {
return this.http.put(this.APIUrl + '/Employee', val);
}
deleteEmployee(val: any) {
return this.http.delete(this.APIUrl + '/Employee/' + val);
}



UploadPhoto(val: any) {
  return this.http.post(this.APIUrl + '/Employee/SaveFile', val);
  }
getAllDepartmentNames():Observable < any[] > {
  return this.http.get < any > (this.APIUrl + '/Employee/GetAllDepartmentNames');
}




addMasterDetail(model: any) 
{
    return this.http.post(this.APIUrl + '/MasterDetail', model);
}

getMasterDetailObjectArray(): Observable < any[] > {
  //http://localhost:65161/api/MasterDetail/
  return this.http.get < any > (this.APIUrl + '/MasterDetail');
}
getMasterDetailObjectArray2(): Observable < any[] > {
  return this.http.get < any > (this.APIUrl + '/MasterDetail/GetObjectArray');
}
getMasterDetailObject(): Observable < any[] > {
  return this.http.get < any > (this.APIUrl + '/MasterDetail/GetObject');
}
}
