import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { EventoDTO } from '../model/evento';
import { CustomHttpClient, ResponseDefault } from '../util/request';
import { MOCK_CONSULTA_EVENTOS } from '../mock';


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

}
