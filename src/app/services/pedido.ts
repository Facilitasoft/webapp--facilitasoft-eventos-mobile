import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

export interface EnderecoEvento {
  logradouro: string;
  nomeLocal: string;
  numero: number;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export interface ConsultaReservaIngressoResponseDTO {
  id: string;
  nomeParticipante: string;
  documentoParticipante: string;
  nomeEvento: string;
  dataEvento: string;
  localEvento: string;
  valorIngresso: number;
  statusCheckin: string;
  dataCheckin?: string; // Opcional, pois pode não ter sido realizado ainda
}

export interface SolicitarReservaIngressoResponseDTO {
  idPedido: string;
}

export interface Pedido {
  detalhePedido: {
    idPedido: string;
    statusPedido: string;
  };
  evento: {
    nome: string;
    tipoLocalEvento: string; // PRESENCIAL, ONLINE
    dataInicioEvento: string;
    horaInicioSessao: string;
    enderecoEvento: EnderecoEvento
  },
  reservas: Reserva[]
}


export interface InputModel {
  key: any;
  type: any;
  label: any;
  placeholder: any;
  required: boolean;
  disabled: boolean;
}

export interface ReservaIngressoDTO {
  idReserva: string;
  idIngresso: string;
  idEvento: string;
  idSessao: string;
  dataReserva: string;
  formulario: {
    fields: FormlyFieldConfig[],
    model: any
  };
}

export interface ConsultarPedidoResponseDTO {
  idPedido: string;
  idSessao: string;
  idEvento: string;
  statusPedido: string;
  idReferenciaCliente: string;
  idReferenciaCheckout: string;
  dataHoraCadastro: string;
  valorTotal: number;
  reservasIngresso: ReservaIngressoDTO[];
}

export interface CheckoutRequestDTO {
  dadosResponsavelIngresso: {
    nome: string,
    cpf: string,
    email: string,
    telefone: string,
    logradouro: string,
    numero: string,
    cep: string,
    cidade: string
  };
  reservas: FormGroup<any>;
}

export interface CheckoutResponsDTO {
  urlCobranca: string;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  consultarMeusPedidos(): Observable<Pedido[]> {
    const headers = new HttpHeaders();
    return this.http.get<Pedido[]>(
      environment.services.service_gestao_eventos.host +
      environment.services.service_gestao_eventos.host,
      { headers }
    );
  }

  getPedidoDetalhe(idPedido: string): Observable<ConsultarPedidoResponseDTO> {
    const headers = new HttpHeaders();
    return this.http.get<ConsultarPedidoResponseDTO>(
      environment.services.service_gestao_eventos.host +
      environment.services.service_gestao_eventos.host.replace(':idPedido', idPedido),
      { headers }
    );
  }

  fazerCheckout(idPedido: string, requestBody: CheckoutRequestDTO): Observable<CheckoutResponsDTO> {
    const headers = new HttpHeaders();
    return this.http.post<CheckoutResponsDTO>(
      environment.services.service_gestao_eventos.host +
      environment.services.service_gestao_eventos.host.replace(':idPedido', idPedido),
      requestBody,
      { headers },
    );
  }
}
