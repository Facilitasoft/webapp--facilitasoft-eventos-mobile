import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { MOCK_CONSULTA_EVENTOS } from '../mock';
import { EventoDTO } from '../model/evento';
import { CustomHttpClient, ResponseDefault } from '../util/request';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private HOST: string = environment.services.service_gestao_eventos.host;

  constructor(private httpClient: CustomHttpClient) { }

  consultarEventosPublicos(): Promise<ResponseDefault<EventoDTO[]>> {
    return this.httpClient.sendRequest(this.HOST + "/publico/eventos", MOCK_CONSULTA_EVENTOS)
  }

  consultarDetalheEventoPublico(idEvento: string): Promise<ResponseDefault<EventoDTO>> {
    return this.httpClient.sendRequest(this.HOST + `/publico/eventos?idEvento=${idEvento}`, MOCK_CONSULTA_EVENTOS)
  }

  reservarIngressos(payload: any): Promise<any> {
    return this.httpClient.sendPostRequest(this.HOST + "/pedidos/reservar", payload);
  }
}
