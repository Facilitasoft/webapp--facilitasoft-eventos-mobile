import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environment/environment';

export interface ResponseDefault<T> {
  statusCode: number;
  sucessoResponse: boolean;
  data: T | null;
  errorMessage: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class CustomHttpClient {

  constructor(private httpClient: HttpClient) { }

  async sendRequest<ResponseType>(url: string, mockData: any): Promise<ResponseDefault<ResponseType>> {
    if(environment.isMockMode) {
      console.log("mock mode ativo")
      return Promise.resolve({
        sucessoResponse: mockData.responseSucesso,
        statusCode: mockData.statusCode,
        data: mockData,
        errorMessage: mockData.errorMessage
      });
    }

    return firstValueFrom(this.httpClient.get<ResponseType>(url))
      .then((response: ResponseType) => {
        return {
          sucessoResponse: true,
          statusCode: 200,
          data: response,
          errorMessage: null
        };
      })
      .catch((err: HttpErrorResponse) => {
        return {
          sucessoResponse: false,
          statusCode: err.status,
          data: null,
          errorMessage: err.error
        };
      });
  }
}
