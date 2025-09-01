export const MOCK_CONSULTA_EVENTOS = {
  statusCode: 200,
  errorMessage: null,
  responseSucesso: true,
  data: [
    {
      id: 1,
      name: 'Festival de Música Urbana',
      date: '10/09/2025',
      description: 'Venha curtir os melhores artistas da cena urbana em um festival inesquecível!',
      image: 'https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?auto=compress&cs=tinysrgb&w=400',
      categories: ['Música', 'Festival']
    },
    {
      id: 2,
      name: 'Feira de Tecnologia e Inovação',
      date: '15/09/2025',
      description: 'Descubra as novidades do mundo tech e faça networking com profissionais da área.',
      image: 'https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=400',
      categories: ['Tecnologia', 'Inovação']
    },
    {
      id: 3,
      name: 'Workshop de Fotografia',
      date: '20/09/2025',
      description: 'Aprenda técnicas incríveis com fotógrafos renomados e pratique em ambientes inspiradores.',
      image: 'https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=400',
      categories: ['Fotografia', 'Arte']
    },
    {
      id: 4,
      name: 'Encontro de Yoga ao Ar Livre',
      date: '25/09/2025',
      description: 'Relaxe e conecte-se com a natureza em uma sessão especial de yoga para todos os níveis.',
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=400',
      categories: ['Yoga', 'Bem-estar']
    }
  ]

}


export const MOCK_CONSULTA_DETALHE_EVENTO = {
    nomeEvento: 'Festival de Música Urbana',
    pathImagem: 'https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg?auto=compress&cs=tinysrgb&w=400',
    idLocalEvento: 'PRESENCIAL',
    datasEvento: '10/09/2025',
    descricaoEvento: 'Venha curtir os melhores artistas da cena urbana em um festival inesquecível!',
    endereco: {
      nomeLocal: 'Arena Centro',
      logradouro: 'Rua das Flores',
      numero: '123',
      bairro: 'Centro',
      cidade: 'São Paulo',
      estado: 'SP'
    },
    sessoesEvento: [
      {
        nomeDiaSemana: 'Sábado',
        dataPorExtenso: '10 de Setembro de 2025',
        horaInicioSessao: '18:00',
        horaFimSessao: '23:00',
        isSelected: false
      },
      {
        nomeDiaSemana: 'Domingo',
        dataPorExtenso: '11 de Setembro de 2025',
        horaInicioSessao: '16:00',
        horaFimSessao: '22:00',
        isSelected: false
      }
    ]
  }
