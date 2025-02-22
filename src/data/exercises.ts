import { Exercise } from '../types';
//# Contribuindo com Exercícios

//Se você está interessado em contribuir com mais exercícios ou melhorar os existentes, este guia fornecerá as instruções necessárias para adicionar e modificar os exercícios corretamente.

// Exercícios Disponíveis

///Os exercícios são representados por objetos que contêm informações como:

//- `id`: Identificador único do exercício
//- `name`: Nome do exercício
//- `muscleGroup`: Grupo muscular que o exercício trabalha
//- `image`: URL de uma imagem ilustrativa do exercício
//- `videoUrl`: URL de um vídeo explicativo do exercício  o padrao tem que ser https://www.youtube.com/embed/ e depois o id do video, clique no botao compartilhar e depois embed que aparece o link
//- `instructions`: Passo a passo de como realizar o exercício
//- `safetyTips`: Dicas de segurança para realizar o exercício corretamente
//- `repetitions`: Quantidade de séries e repetições recomendadas

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
  },
  {
    id: '4',
    name: 'Burpee',
    muscleGroup: 'cardio',
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
  },
  {
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
    muscleGroup: 'abdomen',
    image: 'https://totalpass.com/wp-content/uploads/2024/11/abdominal-remador-1.jpg',
    videoUrl: 'https://www.youtube.com/embed/2ephPjg2CZs',
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
    muscleGroup: 'abdomen',
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
  },{
    id: '10',
    name: 'Caminhada Estacionária',
    muscleGroup: 'cardio',
    image: 'https://s2-ge.glbimg.com/s71k70k8MXSuASkFCWJhbAjwzNc=/0x0:1212x866/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/H/h/Gd0HxBQQOtK8e5qwR2sw/simulacao-corrida-em-casa.jpg',
    videoUrl: 'https://www.youtube.com/embed/DkOctBqJJlI',
    instructions: [
      'Fique em pé com os pés afastados na largura dos ombros.',
      'Levante um joelho até a altura do quadril enquanto balança o braço oposto para frente.',
      'Alterne rapidamente para a outra perna, simulando uma caminhada no lugar.',
      'Mantenha um ritmo constante e respire regularmente durante o exercício.'
    ],
    safetyTips: [
      'Use calçados adequados para absorver o impacto.',
      'Mantenha o abdômen contraído para apoiar a coluna.',
      'Aterre suavemente no chão para minimizar o impacto nas articulações.'
    ],
    repetitions: '3 séries de 1 minuto cada'
  },{
    id: '11',
    name: 'Mountain Climbers',
    muscleGroup: 'abdomen',
    image: 'https://i.ytimg.com/vi/cnyTQDSE884/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/cnyTQDSE884?si=hvKj_6oHBWijC04-',
    instructions: [
      'Comece na posição de prancha alta, com as mãos alinhadas aos ombros e o corpo formando uma linha reta dos ombros aos calcanhares.',
      'Leve o joelho direito em direção ao peito, mantendo o core contraído e as costas retas.',
      'Retorne o pé direito à posição inicial enquanto traz o joelho esquerdo em direção ao peito.',
      'Alterne rapidamente as pernas, simulando uma corrida no lugar, mantendo o ritmo constante.'
    ],
    safetyTips: [
      'Mantenha as mãos firmes no chão e os ombros estáveis durante todo o exercício.',
      'Evite levantar o quadril; mantenha o corpo alinhado.',
      'Controle a respiração e o movimento para evitar lesões.'
    ],
    repetitions: '3 séries de 30 segundos cada'
  }, {
    id: '12',
    name: 'Remada com Toalha',
    muscleGroup: 'costas',
    image: 'https://i.ytimg.com/vi/uLDXbceMomc/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/uLDXbceMomc',
    instructions: [
      'Sente-se no chão com as pernas estendidas à frente.',
      'Enrole uma toalha ao redor dos pés, segurando uma extremidade em cada mão.',
      'Mantenha as costas retas e puxe a toalha em direção ao seu tronco, dobrando os cotovelos para trás.',
      'Retorne à posição inicial de forma controlada.'
    ],
    safetyTips: [
      'Mantenha o abdômen contraído para proteger a coluna.',
      'Evite curvar os ombros para frente durante o movimento.',
      'Realize o movimento de forma lenta e controlada.'
    ],
    repetitions: '3 séries de 12 repetições'
  },

  {
    id: '13',
    name: 'Alongamento de Isquiotibiais com Toalha',
    muscleGroup: 'posterior da coxa',
    image: 'https://i.ytimg.com/vi/V-zQZ0MTTvM/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/V-zQZ0MTTvM',
    instructions: [
      'Deite-se de costas com uma perna estendida no chão e a outra levantada.',
      'Enrole uma toalha ao redor do pé da perna levantada, segurando as extremidades com as mãos.',
      'Puxe suavemente a perna em direção ao seu tronco, mantendo-a reta.',
      'Mantenha a posição por alguns segundos e depois troque de perna.'
    ],
    safetyTips: [
      'Não force além do seu limite de flexibilidade.',
      'Mantenha a perna de apoio pressionada contra o chão.',
      'Respire profundamente durante o alongamento.'
    ],
    repetitions: '2 séries de 30 segundos para cada perna'
  },
  
  {
    id: '14',
    name: 'Alongamento Cervical com Toalha',
    muscleGroup: 'pescoço',
    image: 'https://i.ytimg.com/vi/u5KhhqzG3pI/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/u5KhhqzG3pI',
    instructions: [
      'Sente-se com a postura ereta e enrole uma toalha ao redor da parte posterior da cabeça.',
      'Segure as extremidades da toalha à frente do corpo.',
      'Puxe suavemente a toalha para frente, inclinando o queixo em direção ao peito.',
      'Mantenha o alongamento por alguns segundos e depois relaxe.'
    ],
    safetyTips: [
      'Aplique uma pressão suave para evitar lesões.',
      'Mantenha os ombros relaxados durante o alongamento.',
      'Respire profundamente e evite movimentos bruscos.'
    ],
    repetitions: '2 séries de 15 segundos'
  },{
    id: '15',
    name: 'Flexão Inclinada',
    muscleGroup: 'peito',
    image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/flexao-de-bracos-inclinada.gif',
    videoUrl: 'https://www.youtube.com/embed/so5nuzZWwmI',
    instructions: [
      'Posicione as mãos em uma superfície elevada (banco ou mesa).',
      'Mantenha o corpo alinhado e reto.',
      'Flexione os cotovelos, aproximando o peito da superfície.',
      'Empurre o corpo de volta até a posição inicial.'
    ],
    safetyTips: [
      'Mantenha o core ativado para proteger a coluna.',
      'Não deixe o corpo desalinhar durante o movimento.'
    ],
    repetitions: '3 séries de 10-12 repetições'
  },
  {
    id: '16',
    name: 'Afundo com Salto',
    muscleGroup: 'pernas',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8mb22IRJBMA9ig9ts_252MDxcA9xoEK6yrw&s',
    videoUrl: 'https://www.youtube.com/embed/7Vib0eOjJFo?si=bQFijDNCmNBb92Nq',
    instructions: [
      'Comece em posição de afundo, com uma perna à frente e outra atrás.',
      'Impulsione o corpo para cima realizando um salto e troque a posição das pernas no ar.',
      'Aterre suavemente e repita o movimento alternando as pernas.'
    ],
    safetyTips: [
      'Realize o movimento de forma controlada para minimizar o impacto nas articulações.',
      'Mantenha o joelho da frente alinhado com o pé durante a aterrissagem.'
    ],
    repetitions: '3 séries de 8-10 repetições por perna'
  },
  {
    id: '17',
    name: 'Prancha com Toque no Ombro',
    muscleGroup: 'abdomen',
    image: 'https://i.ytimg.com/vi/Hy-YhHE7t3c/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Hy-YhHE7t3c?si=2TtBUyuM4ZS8WDrZ',
    instructions: [
      'Inicie na posição de prancha alta, com o corpo alinhado.',
      'Sem mover os quadris, toque com a mão direita o ombro esquerdo.',
      'Retorne à posição inicial e repita com a mão oposta.',
      'Continue alternando os toques, mantendo a estabilidade do core.'
    ],
    safetyTips: [
      'Mantenha o core firme para evitar balanço excessivo do corpo.',
      'Realize o movimento de forma lenta e controlada.'
    ],
    repetitions: '3 séries de 20 toques (10 para cada lado)'
  },
  {
    id: '18',
    name: 'Salto Vertical com Impulso',
    muscleGroup: 'pernas',
    image: 'https://www.wikihow.com/images_en/thumb/9/9d/Increase-Your-Vertical-Leap-Step-8-Version-6.jpg/550px-nowatermark-Increase-Your-Vertical-Leap-Step-8-Version-6.jpg',
    videoUrl: 'https://www.youtube.com/embed/sXhwcq7BwL0?si=rMJLYmyNjYr4IL7H',
    instructions: [
      'Fique em pé com os pés afastados na largura dos ombros.',
      'Agache-se levemente e, em seguida, exploda para cima, tentando alcançar a máxima altura possível.',
      'Aterre suavemente, com os joelhos levemente flexionados, e retorne à posição inicial.'
    ],
    safetyTips: [
      'Aterre com os joelhos flexionados para absorver o impacto.',
      'Mantenha a postura correta durante o salto para evitar lesões.'
    ],
    repetitions: '3 séries de 8-10 saltos'
  },
  {
    id: '19',
    name: 'Shadowboxing',
    muscleGroup: 'cardio',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIJ9GP_5QFDcH58N4bsYW_dMxwRQ07eJArg&s',
    videoUrl: 'https://www.youtube.com/embed/KlRBgNgvEYU',
    instructions: [
      'Fique em pé com postura ereta e os pés na largura dos ombros.',
      'Movimente os braços realizando socos no ar, como se estivesse enfrentando um oponente.',
      'Mantenha o ritmo e a fluidez dos movimentos durante o exercício.'
    ],
    safetyTips: [
      'Mantenha os movimentos controlados para evitar sobrecarga nos ombros.',
      'Ative o core para manter a estabilidade do corpo durante o exercício.'
    ],
    repetitions: '3 séries de 1 minuto'
  },{
    id: '20',
    name: 'Rosca Bíceps com Mochila',
    muscleGroup: 'bracos',
    image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/04/rosca-biceps-com-toalha-e-mochila.jpg',
    videoUrl: 'https://www.youtube.com/embed/vbEd1Hv4qLg?si=gUIEY4M3BkybVvC8',
    instructions: [
      'Com o auxio de uma toalha segure a mochila com ambas as mãos, com os braços estendidos ao lado do corpo.',
      'Flexione os cotovelos, elevando a mochila em direção aos ombros.',
      'Mantenha os cotovelos fixos durante o movimento.',
      'Retorne à posição inicial de forma controlada.'
    ],
    safetyTips: [
      'Mantenha o core contraído para estabilidade.',
      'Evite movimentos bruscos para proteger as articulações.'
    ],
    repetitions: '3 séries de 10-12 repetições'
  },
  {
    id: '21',
    name: 'Tríceps no Sofá',
    muscleGroup: 'bracos',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9eY5UBvYfVuD9LZkuhhsFs50jDPgzjHzUeQ&s',
    videoUrl: 'https://www.youtube.com/embed/K3rbxUi0qTk',
    instructions: [
      'Sente-se na beira do sofá e posicione as mãos na borda, ao lado do corpo.',
      'Deslize o corpo para frente, flexionando os cotovelos para baixar o tronco.',
      'Estenda os braços para retornar à posição inicial.'
    ],
    safetyTips: [
      'Mantenha os ombros relaxados e o core firme.',
      'Não desça além do confortável para evitar sobrecarga nos cotovelos.'
    ],
    repetitions: '3 séries de 10-15 repetições'
  },
  {
    id: '22',
    name: "Tríceps Testa com Garrafa d'Água",
    muscleGroup: 'bracos',
    image: 'https://i.ytimg.com/vi/fSaBjlu1MMc/sddefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/XhQ4CEDAgEY',
    instructions: [
      'Deite-se em um colchonete com os pés apoiados no chão.',
      "Segure uma garrafa d'água com as duas mãos, com os braços estendidos acima da cabeça.",
      'Flexione os cotovelos para abaixar a garrafa em direção à testa.',
      'Estenda os braços para voltar à posição inicial.'
    ],
    safetyTips: [
      'Mantenha os cotovelos fixos e próximos à cabeça.',
      'Realize o movimento de forma controlada para evitar lesões.'
    ],
    repetitions: '3 séries de 10-12 repetições'
  },
  {
    id: '23',
    name: "Kickback de Tríceps com Garrafa d'Água",
    muscleGroup: 'bracos',
    image: 'https://static.vecteezy.com/ti/vetor-gratis/p1/26751874-mulher-fazendo-dobrado-sobre-duplo-braco-triceps-propinas-com-agua-garrafa-exercicio-vetor.jpg',
    videoUrl: 'https://www.youtube.com/embed/4wL2M8FXnmA',
    instructions: [
      'Apoie um joelho e uma mão em um banco ou cadeira para estabilidade.',
      'Com a outra mão, segure a garrafa d\'água com o braço dobrado a 90 graus.',
      'Estenda o braço para trás até a completa extensão.',
      'Retorne lentamente à posição inicial e repita para o outro braço.'
    ],
    safetyTips: [
      'Mantenha o tronco estável para evitar balanço.',
      'Realize o movimento lentamente para garantir o controle do exercício.'
    ],
    repetitions: '3 séries de 10-12 repetições por braço'
  },
  {
    id: '24',
    name: "Rosca Martelo com Garrafa d'Água",
    muscleGroup: 'bracos',
    image: 'https://i.ytimg.com/vi/_mcx3jyr1lg/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/_mcx3jyr1lg?si=su2F6fAuEZeGPAnG',
    instructions: [
      "Segure uma garrafa d'água em cada mão, com os braços ao lado do corpo e palmas voltadas uma para a outra.",
      'Flexione os cotovelos mantendo essa posição até que os antebraços fiquem paralelos ao chão.',
      'Retorne à posição inicial de forma controlada.'
    ],
    safetyTips: [
      'Mantenha os cotovelos próximos ao corpo durante o movimento.',
      'Evite balanço do tronco e realize o movimento de forma controlada.'
    ],
    repetitions: '3 séries de 10-12 repetições'
  },{
    id: '25',
    name: 'Superman',
    muscleGroup: 'costas',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZ1Xc7JdXXu7GQeUoWLqzapm9kAAiZffp1g&s',
    videoUrl: 'https://www.youtube.com/embed/3so4r5DFcJI',
    instructions: [
      'Deite-se de bruços com os braços estendidos à frente.',
      'Eleve simultaneamente braços, peito e pernas do chão, contraindo os músculos das costas.',
      'Mantenha a posição por alguns segundos.',
      'Retorne lentamente à posição inicial.'
    ],
    safetyTips: [
      'Mantenha o pescoço alinhado com a coluna.',
      'Realize o movimento de forma controlada para evitar lesões.'
    ],
    repetitions: '3 séries de 12-15 repetições'
  },
  {
    id: '26',
    name: 'Remada Unilateral com Garrafa d\'Água',
    muscleGroup: 'costas',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXpeBtC1HS8XaaYkTUTkXnR-hWd4Ay8mQ4Q&s',
    videoUrl: 'https://www.youtube.com/embed/5Gn2mPYlyRM?si=emcw7EDxSI969ee0',
    instructions: [
      'Apoie um joelho e a mão do mesmo lado em um banco ou cadeira para estabilidade.',
      'Segure uma garrafa d\'água com a mão oposta, mantendo o braço estendido.',
      'Puxe a garrafa em direção ao quadril, contraindo os músculos das costas.',
      'Retorne à posição inicial de forma controlada e repita para o outro lado.'
    ],
    safetyTips: [
      'Mantenha a postura ereta durante o movimento.',
      'Ative o core para garantir estabilidade e evitar sobrecarga na coluna.'
    ],
    repetitions: '3 séries de 10-12 repetições por lado'
  },
  {
    id: '27',
    name: 'Puxada com Toalha',
    muscleGroup: 'costas',
    image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/09/puxada-em-pe-com-a-toalha.gif',
    videoUrl: 'https://www.youtube.com/embed/5OEPwjUcIME',
    instructions: [
      'Prenda uma toalha resistente em um ponto fixo, como uma maçaneta ou poste.',
      'Segure as extremidades da toalha com ambas as mãos.',
      'Puxe seu corpo em direção ao ponto fixo, ativando os músculos das costas.',
      'Retorne lentamente à posição inicial.'
    ],
    safetyTips: [
      'Certifique-se de que a toalha esteja bem fixada para evitar acidentes.',
      'Mantenha o core ativado durante o exercício para proteção da coluna.'
    ],
    repetitions: '3 séries de 8-10 repetições'
  },
  {
    id: '28',
    name: 'Hiperextensão Lombar no Chão',
    muscleGroup: 'costas',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIr9vw9HdjWbWE6RhUXhizODAiDgvtCxHJoQ&s',
    videoUrl: 'https://www.youtube.com/embed/jcQCfZ3saUo?si=8ucoeQzsc09r8cZx',
    instructions: [
      'Deite-se de bruços com as mãos atrás da cabeça ou estendidas à frente.',
      'Eleve o tronco, contraindo os músculos lombares.',
      'Mantenha a posição por um breve momento.',
      'Retorne lentamente à posição inicial.'
    ],
    safetyTips: [
      'Evite elevar demais o tronco para não sobrecarregar a região lombar.',
      'Realize o movimento de forma controlada e com foco na contração dos músculos das costas.'
    ],
    repetitions: '3 séries de 12-15 repetições'
  },
  {
    id: '29',
    name: 'Prancha Invertida',
    muscleGroup: 'costas',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlXasWV2Cvl_8pwVWDLwMTACFpdWeBLwLOg&s',
    videoUrl: 'https://www.youtube.com/embed/3RIbXVRlKAQ',
    instructions: [
      'Sente-se no chão com as pernas estendidas e as mãos posicionadas atrás de você.',
      'Eleve o corpo, mantendo uma linha reta dos ombros aos calcanhares.',
      'Mantenha a posição, contraindo os músculos das costas e do core.',
      'Retorne lentamente à posição inicial.'
    ],
    safetyTips: [
      'Certifique-se de que os ombros estejam alinhados para evitar sobrecarga.',
      'Mantenha o core firme durante todo o movimento.'
    ],
    repetitions: '3 séries de 30-45 segundos'
  }

];