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
  },{
    id: '5',
    name: 'Polichinelo',
    muscleGroup: 'cardio',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVvn6mNMDKyZ4dLWjskG2V3HsjsjQ_3muMg&s',
    videoUrl: 'https://www.youtube.com/embed/RF9Jj6H160c',
    instructions: [
      'Fique em pé com os pés juntos e os braços ao longo do corpo.',
      'Salte, afastando os pés lateralmente enquanto eleva os braços acima da cabeça.',
      'Retorne à posição inicial com outro salto, juntando os pés e baixando os braços.',
      'Repita o movimento de forma rítmica.'
    ],
    safetyTips: [
      'Mantenha o abdômen contraído durante o exercício.',
      'Aterre suavemente para minimizar o impacto nas articulações.',
      'Use calçados adequados para absorver o impacto.'
    ],
    repetitions: '3 séries de 30 segundos'
  },
  {
    id: '6',
    name: 'Abdominal Remador',
    muscleGroup: 'abdômen',
    image: 'https://totalpass.com/wp-content/uploads/2024/11/abdominal-remador-1.jpg',
    videoUrl: 'https://www.youtube.com/embed/tGSHCWHi9P0',
    instructions: [
      'Deite-se de costas com os braços estendidos atrás da cabeça e as pernas retas.',
      'Simultaneamente, eleve o tronco e as pernas, tentando tocar os pés com as mãos.',
      'Retorne à posição inicial de forma controlada.',
      'Repita o movimento.'
    ],
    safetyTips: [
      'Evite puxar o pescoço com as mãos; o movimento deve ser conduzido pelo abdômen.',
      'Mantenha o movimento controlado para evitar lesões na lombar.',
      'Respire adequadamente, expirando ao subir e inspirando ao descer.'
    ],
    repetitions: '3 séries de 15 repetições'
  },
  {
    id: '7',
    name: 'Elevação Pélvica',
    muscleGroup: 'glúteos',
    image: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/10/10/1234100312-elevacao-pelvica-na-maquina-ou-livre-1.jpg',
    videoUrl: 'https://www.youtube.com/embed/NEv-JyB7x2w',
    instructions: [
      'Deite-se de costas com os joelhos flexionados e os pés apoiados no chão.',
      'Eleve o quadril até que o corpo forme uma linha reta dos ombros aos joelhos.',
      'Contraia os glúteos no topo do movimento.',
      'Desça lentamente o quadril de volta ao chão.'
    ],
    safetyTips: [
      'Mantenha os pés e ombros firmemente apoiados durante o exercício.',
      'Evite arquear excessivamente a lombar; o movimento deve ser controlado.',
      'Não segure a respiração; mantenha uma respiração constante.'
    ],
    repetitions: '3 séries de 12-15 repetições'
  },
  {
    id: '8',
    name: 'Afundo',
    muscleGroup: 'pernas',
    image: 'https://uniguacu.com.br/wp-content/uploads/2024/02/afundo-scaled.jpg',
    videoUrl: 'https://www.youtube.com/embed/io3KJ3oN5mk',
    instructions: [
      'Fique em pé com os pés na largura dos quadris.',
      'Dê um passo à frente com uma perna, flexionando ambos os joelhos até que o joelho traseiro quase toque o chão.',
      'Empurre o calcanhar da perna da frente para retornar à posição inicial.',
      'Repita com a outra perna.'
    ],
    safetyTips: [
      'Mantenha o tronco ereto durante todo o movimento.',
      'Não permita que o joelho da frente ultrapasse a linha dos dedos do pé.',
      'Mantenha o peso distribuído igualmente entre ambas as pernas.'
    ],
    repetitions: '3 séries de 10 repetições por perna'
  },
  {
    id: '9',
    name: 'Prancha Lateral',
    muscleGroup: 'abdômen oblíquo',
    image: 'https://blog.ciaathletica.com.br/wp-content/uploads/2023/10/Cia-Athletica-Nacional-Prancha-lateral-Autores-Grupo-S2-Marketing-Freepik.jpg',
    videoUrl: 'https://www.youtube.com/embed/7wwAHCQvgcw',
    instructions: [
      'Deite-se de lado com o antebraço apoiado no chão, alinhado abaixo do ombro.',
      'Empilhe os pés e eleve os quadris, formando uma linha reta dos ombros aos pés.',
      'Mantenha a posição, contraindo os músculos do core.',
      'Repita do outro lado.'
    ],
    safetyTips: [
      'Certifique-se de que o cotovelo esteja diretamente abaixo do ombro para suporte adequado.',
      'Mantenha o corpo alinhado; evite deixar os quadris caírem.',
      'Respire normalmente durante a manutenção da posição.'
    ],
    repetitions: '2 séries de 30 segundos de cada lado'
  }
  
];