import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { firstValueFrom } from 'rxjs';
import { CheckoutRequestDTO, CheckoutResponsDTO, ConsultarPedidoResponseDTO, PedidoService, ReservaIngressoDTO } from './../../service/pedido.service';

interface FormDadosComprador {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  logradouro: string;
  numero: string;
  cep: string;
  cidade: string;
}

@Component({
  selector: 'app-detalhe-pedido',
  imports: [],
  templateUrl: './detalhe-pedido.component.html',
  styleUrl: './detalhe-pedido.component.css'
})
export class DetalhePedidoComponent implements OnInit {

  private idPedido: string | null;
  public pedido: ConsultarPedidoResponseDTO | null = null;
  public form = new FormGroup<any>({});
  public formDadosComprador = new FormGroup<any>({});
  public reservasProcessadas: { reserva: any, formulario: any }[] = [];

  // private formAlunoModel: FormAlunoModel = {};
  formDadosCompradorModel: FormDadosComprador = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    logradouro: '',
    numero: '',
    cep: '',
    cidade: ''
  }

  fieldsFormDadosComprador: FormlyFieldConfig[] = [
    {
      key: "comprador",
      fieldGroup: [
        {
          type: 'input',
          key: 'nome',
          defaultValue: this.formDadosCompradorModel.nome,
          props: {
            label: 'Nome completo',
            placeholder: 'Informe o nome completo',
            type: 'text',
            addonLeft: { class: 'bi bi-person' }
          }
        },
        {
          type: 'input',
          key: 'email',
          props: {
            label: 'E-mail',
            placeholder: 'Informe o e-mail',
            type: 'email',
            addonLeft: { class: 'bi bi-envelope' }
          }
        },
        {
          type: 'input',
          key: 'cpf',
          defaultValue: this.formDadosCompradorModel.cpf,
          props: {
            label: 'CPF',
            placeholder: 'Informe o CPF',
            type: 'text',
            addonLeft: { class: 'bi bi-card-text' }
          }
        },
        {
          type: 'input',
          key: 'telefone',
          defaultValue: this.formDadosCompradorModel.telefone,
          props: {
            label: 'Telefone',
            placeholder: 'Informe o telefone',
            type: 'tel',
            addonLeft: { class: 'bi bi-telephone' }
          }
        },
        {
          type: 'input',
          key: 'cep',
          defaultValue: this.formDadosCompradorModel.cep,
          props: {
            label: 'CEP',
            placeholder: 'Informe o CEP',
            type: 'text',
            addonLeft: { class: 'bi bi-mailbox' }
          }
        },
        {
          type: 'input',
          key: 'logradouro',
          defaultValue: this.formDadosCompradorModel.logradouro,
          props: {
            label: 'Logradouro',
            placeholder: 'Informe o logradouro',
            type: 'text',
            addonLeft: { class: 'bi bi-house' }
          }
        },
        {
          type: 'input',
          key: 'numero',
          defaultValue: this.formDadosCompradorModel.numero,
          props: {
            label: 'Número',
            placeholder: 'Nº',
            type: 'text',
            addonLeft: { class: 'bi bi-hash' }
          }
        },
        {
          type: 'input',
          key: 'cidade',
          defaultValue: this.formDadosCompradorModel.cidade,
          props: {
            label: 'Cidade',
            placeholder: 'Informe a cidade',
            type: 'text',
            addonLeft: { class: 'bi bi-geo-alt' }
          }
        },
      ],
    },
  ];

  constructor(
    private pedidoService: PedidoService,
    private activedRoute: ActivatedRoute
  ) {
    this.idPedido = this.activedRoute.snapshot.paramMap.get('idPedido');
  }

  ngOnInit(): void {
    if (this.idPedido) {
      firstValueFrom(this.pedidoService.getPedidoDetalhe(this.idPedido))
        .then((pedido: ConsultarPedidoResponseDTO) => {
          this.pedido = pedido;
          this.processarReservas();
        })
        .catch((error: any) => { })
        .finally(() => { });
    } else {
      alert('ID do pedido não encontrado');
    }
  }

  cancelarCheckout() {

  }

  private processarReservas(): void {

    let reservas: ReservaIngressoDTO[] | undefined = this.pedido?.reservasIngresso;

    if (!reservas) {
      this.reservasProcessadas = [];
      return;
    }

    this.reservasProcessadas = reservas.map((reserva: ReservaIngressoDTO) => {
      reserva.formulario = {
        fields: this.buildFields(reserva),
        model: this.formDadosComprador || {}
      };

      return {
        reserva: reserva,
        formulario: {
          fields: reserva.formulario?.fields
        }
      };
    });
  }

  fazerCheckout() {
    if (this.idPedido) {
      const requestBody: CheckoutRequestDTO = {
        dadosResponsavelIngresso: this.formDadosComprador.get("comprador")?.value,
        reservas: this.form.value
      };

      firstValueFrom(this.pedidoService.fazerCheckout(this.idPedido, requestBody))
        .then((response: CheckoutResponsDTO) => {
          window.location.href = response.urlCobranca;
        })
        .catch((err) => {
          console.log("err ", err)
        })
    } else {
      alert('Pedido não encontrado para checkout');
    }
  }

  salvarDadosReserva(idReserva: string, dadosReserva: any): void {
    console.log(this.form)
    console.log('Salvando dados da reserva:', idReserva, dadosReserva);
  }

  buildFields(reserva: ReservaIngressoDTO): FormlyFieldConfig[] {

    let inputs: FormlyFieldConfig[] = reserva.formulario.fields.map((input: FormlyFieldConfig) => {
      console.log('Input original:', input);
      return {
        className: 'col-12 col-md-12 col-xl-8',
        type: input.type || 'input',
        key: input.key,
        props: {
          addonLeft: { class: 'bi bi-person' },
          placeholder: input.props?.placeholder,
          options: input.props?.options || [],
        }
      };
    });

    return [
      {
        key: reserva.idReserva,
        className: 'form-block form-block-white',
        fieldGroup: inputs
      }
    ]
  }
}
