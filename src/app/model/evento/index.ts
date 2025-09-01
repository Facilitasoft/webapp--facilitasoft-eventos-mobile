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

export interface EventoDTO {
  idEvento: string;
  nomeEvento: string;
  dataInicioEvento: string;
  dataFimEvento: string;
  descricaoEvento: string;
  urlImagem: string | null;
  idCategoriaEvento: string;
  idLocalEvento: string;
  dataHoraCadastro: string;
  endereco: EnderecoEventoDTO;
  sessoes: any[];
  ingressos: any[];
}
