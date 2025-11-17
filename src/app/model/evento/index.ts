export interface Evento {
  id: string;
  name: string;
  dataInicioEvento: string;
  dataFimEvento: string;
  description: string;
  urlImagem: string | null;
  categories: string[];
}

export interface EnderecoEventoDTO {
  idEvento: string;
  nomeLocal: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  urlGoogleMaps: string | null;
}

export interface IngressoDTO {
  idIngresso: string;
  idEvento: string;
  tipoIngresso: string;
  tituloIngresso: string;
  valorIngresso: number;
  quantidadeDisponivel: number;
  dataHoraCadastro: string;
  formularioId: string;
}

export interface SessaoDTO {
  idSessao: string;
  idEvento: string;
  recorrente: boolean;
  frequencia: string | null;
  intervalo: number;
  horaInicioSessao: string;
  horaFimSessao: string;
  incluiFeriado: boolean;
  dataSessao: string;
  isSelected: boolean;
}

export interface TipoIngressoDTO {
  idTipoIngresso: string;
  nome: string;
  preco: number;
  quantidadeDisponivel: number;
}

export interface SessaoDTO {
  idSessao: string;
  idEvento: string;
  dataSessao: string;
  horaInicioSessao: string;
  horaFimSessao: string;
  dataPorExtenso: string;
  nomeDiaSemana: string;
  tiposIngresso: TipoIngressoDTO[];
}

export interface EventoDTO {
  idEvento: string;
  nomeEvento: string;
  descricaoEvento: string;
  urlImagem: string | null;
  dataInicioEvento: string;
  dataFimEvento: string;
  datasEvento: string[] | null;
  idCategoriaEvento: string;
  idLocalEvento: string;
  eventoAtivo: boolean | null;
  statusEvento: string | null;
  endereco: EnderecoEventoDTO;
  sessoes: SessaoDTO[];
}
