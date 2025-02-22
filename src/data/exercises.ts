import { Exercise } from '../types';

export const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Flexão de Braço',
    muscleGroup: 'peito',
    image: 'https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dHgoYiCraCw?si=CaAgqFyKYsWNsRFy',
    instructions: [
      'Apoie as mãos no chão na largura dos ombros',
      'Mantenha o corpo reto, formando uma linha reta dos pés à cabeça',
      'Flexione os cotovelos até o peito quase tocar o chão',
      'Empurre o corpo de volta à posição inicial'
    ],
    safetyTips: [
      'Mantenha o core contraído durante todo o movimento',
      'Não deixe os cotovelos abrirem muito para os lados',
      'Mantenha o pescoço alinhado com a coluna'
    ],
    repetitions: '3 séries de 8-12 repetições'
  },
  {
    id: '2',
    name: 'Agachamento Livre',
    muscleGroup: 'pernas',
    image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/exercicio-de-agachamento-livre.jpg?w=1024',
    videoUrl: 'https://www.youtube.com/embed/86ZW7tmmLuU?si=KTy5WaKBv3CTYvlA',
    instructions: [
      'Pés na largura dos ombros, levemente voltados para fora',
      'Inicie o movimento empurrando o quadril para trás',
      'Desça até as coxas ficarem paralelas ao chão',
      'Mantenha o peito erguido e a coluna neutra'
    ],
    safetyTips: [
      'Joelhos alinhados com os dedos dos pés',
      'Mantenha os calcanhares no chão',
      'Evite curvar a coluna para frente'
    ],
    repetitions: '4 séries de 12-15 repetições'
  },
  {
    id: '3',
    name: 'Prancha',
    muscleGroup: 'abdomen',
    image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/qNRqGqESAWU?si=LgGT-hFQzgksnb3W',
    instructions: [
      'Apoie os antebraços no chão, cotovelos sob os ombros',
      'Mantenha o corpo em linha reta',
      'Contraia o abdômen e os glúteos',
      'Respire normalmente mantendo a posição'
    ],
    safetyTips: [
      'Evite arquear as costas',
      'Não deixe o quadril cair',
      'Mantenha o olhar direcionado para baixo'
    ],
    repetitions: '3 séries de 30-45 segundos'
  },{
    id: '4',
    name: 'Burpee',
    muscleGroup: 'corpo inteiro',
    image: 'https://venatio.com.br/images/noticias/4/burpee.jpg',
    videoUrl: 'https://www.youtube.com/embed/am8r0CH2X74',
    instructions: [
      'Fique em pé com os pés na largura dos ombros',
      'Agache e coloque as mãos no chão',
      'Pule com os pés para trás, entrando na posição de prancha',
      'Realize uma flexão de braço (opcional)',
      'Traga os pés de volta para a posição de agachamento',
      'Salte explosivamente para cima'
    ],
    safetyTips: [
      'Mantenha o core contraído durante o movimento',
      'Realize o movimento de forma controlada',
      'Evite impactar as articulações ao aterrissar'
    ],
    repetitions: '3 séries de 10-15 repetições'
  }
];