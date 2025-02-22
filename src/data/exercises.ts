import { Exercise } from '../types';

export const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Flexão de Braço',
    muscleGroup: 'peito',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/jZmOquLOmzI',
    instructions: [
      'Posicione-se em posição de prancha com os braços estendidos',
      'Mantenha as costas retas e o core contraído',
      'Flexione os cotovelos, descendo o peito em direção ao chão',
      'Retorne à posição inicial empurrando o corpo para cima'
    ],
    safetyTips: [
      'Mantenha os cotovelos próximos ao corpo',
      'Não deixe o quadril cair durante o movimento',
      'Respire de forma controlada durante o exercício'
    ],
    repetitions: '3 séries de 10-12 repetições'
  },
  {
    id: '2',
    name: 'Agachamento',
    muscleGroup: 'pernas',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/aclHkVaku9U',
    instructions: [
      'Posicione os pés na largura dos ombros',
      'Mantenha o peito erguido e as costas retas',
      'Flexione os joelhos como se fosse sentar em uma cadeira',
      'Retorne à posição inicial empurrando através dos calcanhares'
    ],
    safetyTips: [
      'Mantenha os joelhos alinhados com os pés',
      'Não deixe os joelhos ultrapassarem a ponta dos pés',
      'Mantenha os calcanhares no chão durante todo o movimento'
    ],
    repetitions: '4 séries de 15 repetições'
  },
  {
    id: '3',
    name: 'Prancha Abdominal',
    muscleGroup: 'abdomen',
    image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/ASdvN_XEl_c',
    instructions: [
      'Apoie os antebraços no chão, alinhados com os ombros',
      'Estenda as pernas para trás, apoiando-se nas pontas dos pés',
      'Mantenha o corpo em linha reta da cabeça aos calcanhares',
      'Contraia o abdômen e mantenha a posição'
    ],
    safetyTips: [
      'Não deixe o quadril cair ou subir',
      'Mantenha a respiração constante',
      'Pare se sentir dor nas costas'
    ],
    repetitions: '3 séries de 30-60 segundos'
  },
  {
    id: '4',
    name: 'Remada com Toalha',
    muscleGroup: 'costas',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/rUGZwSa9WUE',
    instructions: [
      'Coloque uma toalha resistente sob uma mesa ou móvel fixo',
      'Segure as pontas da toalha e sente-se no chão',
      'Mantenha os braços estendidos e as costas retas',
      'Puxe a toalha em direção ao abdômen, contraindo as costas',
      'Retorne lentamente à posição inicial'
    ],
    safetyTips: [
      'Mantenha os cotovelos próximos ao corpo',
      'Evite movimentos bruscos',
      'Certifique-se que o móvel está bem fixo'
    ],
    repetitions: '3 séries de 12-15 repetições'
  },
  {
    id: '5',
    name: 'Extensão de Tríceps na Cadeira',
    muscleGroup: 'bracos',
    image: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/6kALZikXxLc',
    instructions: [
      'Posicione-se de costas para uma cadeira estável',
      'Apoie as mãos na borda do assento, dedos apontando para frente',
      'Flexione os cotovelos, baixando o corpo em direção ao chão',
      'Estenda os braços, retornando à posição inicial'
    ],
    safetyTips: [
      'Mantenha os cotovelos apontando para trás',
      'Use uma cadeira firme e estável',
      'Não trave os cotovelos no topo do movimento'
    ],
    repetitions: '3 séries de 12-15 repetições'
  },
  {
    id: '6',
    name: 'Elevação de Panturrilha',
    muscleGroup: 'pernas',
    image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/gwLzBJYoWlI',
    instructions: [
      'Fique em pé com os pés afastados na largura dos quadris',
      'Eleve os calcanhares do chão, ficando na ponta dos pés',
      'Mantenha a posição por um segundo',
      'Desça controladamente de volta à posição inicial'
    ],
    safetyTips: [
      'Mantenha o equilíbrio usando uma parede ou cadeira se necessário',
      'Evite balançar o corpo durante o movimento',
      'Faça o movimento de forma controlada'
    ],
    repetitions: '3 séries de 20 repetições'
  },
  {
    id: '7',
    name: 'Abdominal Bicicleta',
    muscleGroup: 'abdomen',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/1we3bh9uhqY',
    instructions: [
      'Deite-se de costas com as mãos atrás da cabeça',
      'Eleve as pernas do chão, dobrando os joelhos',
      'Alterne tocando o cotovelo no joelho oposto',
      'Mantenha o movimento fluido e controlado'
    ],
    safetyTips: [
      'Não puxe o pescoço com as mãos',
      'Mantenha o baixo das costas pressionado contra o chão',
      'Respire de forma ritmada durante o exercício'
    ],
    repetitions: '3 séries de 20 repetições (cada lado)'
  }
];