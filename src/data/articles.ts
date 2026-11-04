import { Article } from '../types';
import { AUTHORS } from './authors';
import { PRIMEROS_PASOS_ARTICLES } from './primerosPasosArticles';

export { AUTHORS };

export const CATEGORIES = [
  { id: 'primeros-pasos', label: 'Primeros pasos', description: 'Guías completas para principiantes: materiales, postura, puntos básicos y tu primera labor.' },
  { id: 'patrones', label: 'Patrones', description: 'Instrucciones paso a paso para tejer tus propios proyectos.' },
  { id: 'tutoriales', label: 'Tutoriales', description: 'Guías técnicas, puntos básicos y trucos para perfeccionar tu ganchillo.' },
  { id: 'materiales', label: 'Materiales', description: 'Comparativas de hilos, lanas, agujas ergonómicas y accesorios.' },
  { id: 'amigurumis', label: 'Amigurumis', description: 'Muñecos y animalitos tejidos con ternura y técnicas impecables.' },
  { id: 'ropa', label: 'Ropa y accesorios', description: 'Tops, chalecos, bolsos y prendas contemporáneas para tu armario.' }
] as const;

const BASE_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'primer-amigurumi-osito-paso-a-paso',
    title: 'Guía definitiva: Cómo hacer tu primer Amigurumi de Osito paso a paso',
    metaTitle: 'Cómo hacer tu primer Amigurumi de Osito paso a paso – crochetsimply',
    metaDescription: 'Patrón gratis y tutorial para principiantes: teje un tierno osito amigurumi con anillo mágico, aumentos invisibles y técnicas sin complicaciones.',
    category: 'amigurumis',
    categoryLabel: 'Amigurumis',
    difficulty: 'Principiante',
    readingTime: '12 min de lectura',
    date: '18 de Octubre, 2026',
    isoDate: '2026-10-18',
    author: AUTHORS.clara,
    heroImage: '/src/assets/images/amigurumi_bear_toy_1793792197834.jpg',
    pinterestImage: '/src/assets/images/pin_amigurumi_bear_1793793547292.jpg',
    imageAlt: 'Pequeño osito de peluche tejido a ganchillo sentado en tela de lino junto a una madeja de algodón y aguja de madera',
    estimatedTime: '4 - 5 horas de tejido',
    hookSize: '2.5 mm',
    excerpt: 'Si nunca has tejido un muñeco a ganchillo, este osito es el punto de partida perfecto. Aprenderás el anillo mágico, el punto bajo continuo y cómo rellenar sin deformar.',
    tableOfContents: [
      { id: 'materiales-necesarios', title: '1. Materiales recomendados' },
      { id: 'abreviaturas', title: '2. Abreviaturas y puntos empleados' },
      { id: 'cabeza-y-hocico', title: '3. Cabeza y hocico' },
      { id: 'orejas-y-cuerpo', title: '4. Orejas, cuerpo y extremidades' },
      { id: 'relleno-y-montaje', title: '5. Relleno y ensamblado sin costuras visibles' },
      { id: 'trucos-y-consejos', title: '6. Consejos de la tejedora' }
    ],
    materials: [
      { item: 'Hilo de algodón 100% grosor DK o Sport (50g color crema / beige suave)', detail: 'Recomendamos fibra mate no mercerizada para un acabado más tierno.' },
      { item: 'Un resto de hilo marrón oscuro o negro', detail: 'Para bordar la nariz y las cejas.' },
      { item: 'Aguja de ganchillo de 2.5 mm', detail: 'Usa una aguja medio milímetro menor que la recomendada por el fabricante para evitar huecos.' },
      { item: 'Ojos de seguridad de 6 mm', detail: 'Con arandelas de presión (o hilo negro si es para bebés menores de 3 años).' },
      { item: 'Relleno sintético hipoalergénico (guata o floca siliconada)', detail: 'Aproximadamente 30 gramos.' },
      { item: 'Aguja lanera sin punta y tijeras de precisión' },
      { item: 'Marcador de vueltas', detail: 'Indispensable para tejer en espiral continua.' }
    ],
    gauge: '10 cm x 10 cm = 24 puntos bajos x 26 vueltas con aguja de 2.5 mm. La tensión debe ser compacta para que el relleno no asome.',
    abbreviations: [
      { abbr: 'AM', full: 'Anillo Mágico', description: 'Bucle inicial para tejer en redondo' },
      { abbr: 'cad', full: 'Cadeneta' },
      { abbr: 'pb', full: 'Punto bajo (o medio punto)' },
      { abbr: 'aum', full: 'Aumento (2 puntos bajos tejidos en el mismo punto)' },
      { abbr: 'dism', full: 'Disminución invisible (cerrar 2 puntos juntos tomando solo la hebra delantera)' },
      { abbr: 'pe', full: 'Punto enano o raso' },
      { abbr: '(...) x 6', full: 'Repetir la secuencia indicada entre paréntesis 6 veces' }
    ],
    contentSections: [
      {
        id: 'materiales-necesarios',
        title: '1. Materiales recomendados y elección del hilo',
        paragraphs: [
          'El secreto de un amigurumi pulcro reside en dos factores: un buen hilo de algodón y una tensión consistente. A diferencia de las mantas, en los amigurumis buscamos una trama cerrada para que la fibra del relleno no se escape ni se transparente.',
          'Si estás empezando, evita los hilos tipo chenilla o terciopelo porque sus hebras ocultan la forma del punto. El algodón peinado tradicional te permitirá contar vueltas con facilidad y corregir cualquier despiste.'
        ]
      },
      {
        id: 'abreviaturas',
        title: '2. Abreviaturas y puntos empleados',
        paragraphs: [
          'Todo este osito se teje en punto bajo trabajando en espiral continua, lo que significa que no cerramos cada vuelta con punto raso ni subimos con cadeneta. Coloca tu marcador en el primer punto de cada vuelta para no perder la cuenta.'
        ]
      },
      {
        id: 'cabeza-y-hocico',
        title: '3. Cabeza y hocico del osito',
        steps: [
          {
            number: 1,
            heading: 'Vuelta 1: La base del anillo mágico',
            text: 'Haz un anillo mágico con 6 puntos bajos (6 pb). Tira firmemente de la cola corta para cerrar el centro por completo.',
            tip: 'No aprietes en exceso el primer punto; debe dejar entrar la aguja en la siguiente vuelta.'
          },
          {
            number: 2,
            heading: 'Vuelta 2: Primera ronda de aumentos',
            text: 'Teje 1 aumento en cada uno de los 6 puntos de la vuelta anterior (12 pb). Coloca tu marcador en el primer aumento.',
            tip: 'Tendrás el doble de puntos al terminar la vuelta.'
          },
          {
            number: 3,
            heading: 'Vueltas 3 a 5: Expansión de la circunferencia',
            text: 'V3: (1 pb, 1 aum) x 6 (18 pb). V4: (2 pb, 1 aum) x 6 (24 pb). V5: (3 pb, 1 aum) x 6 (30 pb).'
          },
          {
            number: 4,
            heading: 'Vueltas 6 a 11: Altura de la cabeza',
            text: 'Teje 1 pb en cada punto durante 6 vueltas completas (30 pb en cada vuelta). Verás cómo la pieza adopta forma de cuenco.'
          },
          {
            number: 5,
            heading: 'Colocación de los ojos de seguridad',
            text: 'Entre las vueltas 8 y 9, inserta los dos ojos de seguridad con una separación de 6 puntos entre ellos. Coloca las arandelas traseras presionando hasta escuchar el clic firme.'
          },
          {
            number: 6,
            heading: 'Vueltas 12 a 15: Disminuciones y cierre parcial',
            text: 'V12: (3 pb, 1 dism) x 6 (24 pb). V13: (2 pb, 1 dism) x 6 (18 pb). Rellena firmemente la cabeza con guata dando forma esférica. V14: (1 pb, 1 dism) x 6 (12 pb). Remata dejando hebra larga para coser.'
          }
        ]
      },
      {
        id: 'orejas-y-cuerpo',
        title: '4. Orejas, cuerpo y extremidades',
        paragraphs: [
          'Las piezas accesorias son rápidas de tejer. Mantén la misma tensión en las dos orejas y en los cuatro bracitos para que queden simétricos.'
        ],
        steps: [
          {
            number: 1,
            heading: 'Orejas (hacer 2 unidades)',
            text: 'V1: Anillo mágico de 6 pb. V2: (1 pb, 1 aum) x 3 (9 pb). V3-4: 9 pb. No se rellenan. Dobla la abertura y cose plana.'
          },
          {
            number: 2,
            heading: 'Cuerpo',
            text: 'V1: AM de 6 pb. V2: 6 aum (12 pb). V3: (1 pb, 1 aum) x 6 (18 pb). V4: (2 pb, 1 aum) x 6 (24 pb). V5-8: 24 pb. V9: (2 pb, 1 dism) x 6 (18 pb). V10: 18 pb. V11: (1 pb, 1 dism) x 6 (12 pb). Rellena generosamente.'
          },
          {
            number: 3,
            heading: 'Brazos y patas (hacer 2 de cada)',
            text: 'Brazos: V1: AM de 5 pb. V2: 5 aum (10 pb). V3-7: 10 pb. Rellenar solo la mitad inferior. Patas: V1: AM de 6 pb. V2: 6 aum (12 pb). V3-7: 12 pb.'
          }
        ]
      },
      {
        id: 'relleno-y-montaje',
        title: '5. Relleno y ensamblado sin costuras visibles',
        paragraphs: [
          'El montaje es el paso donde el osito cobra vida. Antes de coser de forma definitiva, fija cada pieza con alfileres de cabeza redonda. Míralo de frente y de perfil para verificar la expresión.',
          'Borda la nariz triangular con hilo marrón justo debajo de la línea de los ojos y añade una pequeña línea vertical hacia abajo. Cose las orejas en curva entre las vueltas 4 y 7 de la cabeza.'
        ]
      },
      {
        id: 'trucos-y-consejos',
        title: '6. Consejos de la tejedora para un acabado impecable',
        subsections: [
          {
            title: 'Usa siempre la disminución invisible',
            text: 'En lugar de cerrar dos puntos tradicionales, introduce la aguja únicamente por las hebras delanteras (front loops) de ambos puntos antes de tomar hebra. El resultado es plano e indistinguible de un punto normal.'
          },
          {
            title: 'El truco de rellenar poco a poco',
            text: 'Introduce pequeñas porciones de guata del tamaño de una nuez, empujando suavemente hacia las paredes exteriores para que no queden grumos duros en el centro.'
          }
        ]
      }
    ],
    expertTip: 'Si notas que tus puntos quedan flojos o que se ve el relleno blanco, baja medio número de aguja (por ejemplo de 3 mm a 2.5 mm). En amigurumi es mejor tejer ligeramente ajustado.',
    relatedSlugs: ['top-verano-crochet-brisa-patron-gratis', 'mejores-tipos-hilo-crochet-ganchillo']
  },
  {
    id: 'art-2',
    slug: 'top-verano-crochet-brisa-patron-gratis',
    title: "Top de verano a crochet 'Brisa': Patrón gratis y fácil con hilo de algodón",
    metaTitle: "Patrón Top de Verano a Crochet 'Brisa' Gratis – crochetsimply",
    metaDescription: 'Teje un top crop halter fresco y elegante a ganchillo. Patrón paso a paso con medidas ajustables, copas triangulares y calado inferior floral.',
    category: 'ropa',
    categoryLabel: 'Ropa y accesorios',
    difficulty: 'Intermedio',
    readingTime: '15 min de lectura',
    date: '24 de Octubre, 2026',
    isoDate: '2026-10-24',
    author: AUTHORS.sofia,
    heroImage: '/src/assets/images/crochet_summer_top_1793792197726.jpg',
    pinterestImage: '/src/assets/images/pin_crochet_summer_top_1793793547258.jpg',
    imageAlt: 'Top halter de verano tejido a ganchillo en verde salvia y crudo colgado en percha de madera frente a pared clara',
    estimatedTime: '8 - 10 horas de tejido',
    hookSize: '3.0 mm',
    excerpt: 'Ligero, transpirable y con una caída espectacular. Este top combina copas triangulares estructuradas con una cenefa calada inferior inspirada en la brisa mediterránea.',
    tableOfContents: [
      { id: 'guia-tallas-materiales', title: '1. Tallas y materiales necesarios' },
      { id: 'muestra-tension', title: '2. Muestra de tensión y medidas' },
      { id: 'tejiendo-las-copas', title: '3. Elaboración de las copas paso a paso' },
      { id: 'cenefa-calada', title: '4. Cenefa calada y franja inferior' },
      { id: 'tirantes-y-acabados', title: '5. Tirantes, lazadas y bloqueo final' }
    ],
    materials: [
      { item: '150g (Talla S) / 200g (M) / 250g (L) de algodón orgánico fino', detail: 'Grosor Fingering o Sport (aprox. 160m por cada 50g) en verde salvia o color crudo.' },
      { item: 'Aguja de ganchillo de 3.0 mm (o la necesaria para obtener la muestra)' },
      { item: 'Aguja lanera para rematar hebras' },
      { item: 'Cinta métrica flexible' },
      { item: '4 marcadores de puntos tipo candado' }
    ],
    gauge: '10 cm x 10 cm en punto alto = 20 puntos x 11 vueltas con aguja de 3.0 mm sin estirar.',
    abbreviations: [
      { abbr: 'cad', full: 'Cadeneta al aire' },
      { abbr: 'pa', full: 'Punto alto o vareta' },
      { abbr: 'pb', full: 'Punto bajo' },
      { abbr: 'pr', full: 'Punto raso o deslizado' },
      { abbr: 'sp', full: 'Espacio de cadeneta' },
      { abbr: 'salt', full: 'Saltar punto(s)' }
    ],
    contentSections: [
      {
        id: 'guia-tallas-materiales',
        title: '1. Tallas y materiales necesarios',
        paragraphs: [
          'Tejer tus propias prendas es uno de los mayores placeres del ganchillo. Para este top utilizamos algodón 100% natural, una fibra fresca que absorbe la humedad y permite que la piel respire durante los meses cálidos.',
          'El patrón está estructurado para tallas S (pecho 80-86 cm), M (pecho 88-94 cm) y L (pecho 96-104 cm). Las instrucciones indican las variaciones entre corchetes: S [M, L].'
        ]
      },
      {
        id: 'muestra-tension',
        title: '2. Muestra de tensión y medidas clave',
        paragraphs: [
          'No te saltes la muestra. Si tejes muy apretado, las copas quedarán rígidas y pequeñas; si tejes muy suelto, perderán estructura. Mide sobre una muestra de 12x12 cm lavada y secada en plano.'
        ]
      },
      {
        id: 'tejiendo-las-copas',
        title: '3. Elaboración de las copas paso a paso',
        steps: [
          {
            number: 1,
            heading: 'Cadeneta base de la copa',
            text: 'Monta 13 [15, 17] cadenetas con aguja de 3.0 mm. La longitud determinará la profundidad de la copa desde la base hasta el centro del pecho.',
            tip: 'Teje la cadeneta floja para evitar que la base tire hacia adentro.'
          },
          {
            number: 2,
            heading: 'Vuelta 1: La primera mitad y el pico superior',
            text: 'Comenzando en la 3ª cadeneta desde el ganchillo, teje pa en cada cadeneta hasta llegar a la última. En la última cadeneta teje la esquina: (2 pa, 1 cad, 2 pa). Continúa tejiendo pa por el otro lado de la cadeneta base.',
            tip: 'Coloca un marcador en el hueco de 1 cadeneta para identificar la cúspide.'
          },
          {
            number: 3,
            heading: 'Vueltas sucesivas en abanico',
            text: 'Gira el tejido, 2 cad de subida (no cuentan como punto), teje pa en cada punto hasta el hueco de la esquina. En el hueco de la esquina trabaja siempre: (2 pa, 1 cad, 2 pa). Sigue en pa por el otro lado. Repite durante 6 [7, 8] vueltas en total.'
          },
          {
            number: 4,
            heading: 'Unión de ambas copas',
            text: 'Una vez completadas las dos copas idénticas, colócalas lado a lado y únelas por la base en el centro con 2 puntos bajos o un pequeño puente de 2 cadenetas según el escote deseado.'
          }
        ]
      },
      {
        id: 'cenefa-calada',
        title: '4. Cenefa calada y franja inferior',
        steps: [
          {
            number: 1,
            heading: 'Base de la banda bajo el pecho',
            text: 'Engancha el hilo en el extremo inferior izquierdo y teje una vuelta uniforme de puntos bajos por toda la base de ambas copas, asegurando un número par de puntos (aprox. 72 [80, 92] puntos).'
          },
          {
            number: 2,
            heading: 'Patrón de calado en ondas',
            text: 'V1: 3 cad, saltar 1 punto, *1 pa, 1 cad, saltar 1 punto*, repetir hasta el final. V2: Vuelta de punto concha (5 pa en un mismo espacio, saltar 2 puntos, 1 pb). Repetir este motivo calado durante 8 vueltas para lograr un borde estilo boho chic.'
          }
        ]
      },
      {
        id: 'tirantes-y-acabados',
        title: '5. Tirantes, lazadas y bloqueo final',
        paragraphs: [
          'Para los tirantes del cuello, engancha hilo en el vértice de cada copa y teje una cadeneta reforzada de 120 puntos con punto deslizado de regreso. Para la espalda, teje dos cordones similares en los laterales inferiores que permitan cruzarse como un corsé ajustable.',
          'Finaliza bloqueando la prenda: humedece el top con agua templada, colócalo sobre una esterilla de bloqueo sujetándolo con alfileres inoxidables y déjalo secar al aire. Este paso abrirá los calados y dará una suavidad única al algodón.'
        ]
      }
    ],
    expertTip: 'El bloqueo con vapor suave a unos 2 centímetros de distancia (sin tocar directamente el tejido) hace maravillas con el algodón 100%, asentando las puntadas al instante.',
    relatedSlugs: ['primer-amigurumi-osito-paso-a-paso', 'mejores-tipos-hilo-crochet-ganchillo']
  },
  {
    id: 'art-3',
    slug: 'mejores-tipos-hilo-crochet-ganchillo',
    title: 'Los 5 mejores tipos de hilo para tejer a ganchillo según tu proyecto',
    metaTitle: 'Los 5 mejores tipos de hilo para crochet y ganchillo – crochetsimply',
    metaDescription: 'Aprende a elegir entre algodón peinado, lanas merino, acrílicos antipilling y mezclas de lino para que tus labores de crochet duren años perfectas.',
    category: 'materiales',
    categoryLabel: 'Materiales',
    difficulty: 'Principiante',
    readingTime: '9 min de lectura',
    date: '2 de Noviembre, 2026',
    isoDate: '2026-11-02',
    author: AUTHORS.clara,
    heroImage: '/src/assets/images/yarn_skeins_palette_1793792198935.jpg',
    pinterestImage: '/src/assets/images/pin_yarn_guide_palette_1793793546805.jpg',
    imageAlt: 'Cesta de mimbre con madejas de hilo en tonos rosa empolvado, verde salvia, crudo y melocotón',
    estimatedTime: '9 min de lectura',
    hookSize: 'Todas las medidas',
    excerpt: '¿No sabes qué madeja comprar para tu próximo proyecto? Te explicamos las ventajas y desventajas de las 5 fibras más utilizadas para no malgastar tiempo ni dinero.',
    tableOfContents: [
      { id: 'por-que-importa-la-fibra', title: '1. ¿Por qué es crucial la composición de la fibra?' },
      { id: 'algodon-100', title: '2. Algodón 100%: El rey de los amigurumis y el verano' },
      { id: 'lana-merino', title: '3. Lana Merino: Calor y elasticidad para el invierno' },
      { id: 'acrilico-premium', title: '4. Acrílico Premium antipilling: Económico y resistente' },
      { id: 'bambu-y-lino', title: '5. Bambú y Lino: Caída elegante y brillo sedoso' },
      { id: 'tabla-comparativa', title: '6. Tabla comparativa rápida por proyecto' }
    ],
    materials: [
      { item: 'Muestrario de lanas o etiquetas de tus madejas', detail: 'Aprenderás a interpretar el metraje, composición y recomendación de aguja.' },
      { item: 'Calibrador de agujas y regla de tensión' }
    ],
    contentSections: [
      {
        id: 'por-que-importa-la-fibra',
        title: '1. ¿Por qué es crucial la composición de la fibra?',
        paragraphs: [
          'Entrar a una tienda de lanas es una tentación para la vista y el tacto, pero elegir el hilo equivocado para un proyecto puede arruinar semanas de trabajo. Una manta pesada con un hilo que encoge al lavarse o un muñeco tejido con lana elástica que pierde su forma son frustraciones muy habituales.',
          'Cada fibra posee características naturales de memoria, peso térmico, elasticidad y resistencia al roce. Conocerlas es la clave para tejer con confianza.'
        ]
      },
      {
        id: 'algodon-100',
        title: '2. Algodón 100%: El rey de los amigurumis y el verano',
        paragraphs: [
          'El algodón no tiene elasticidad natural, lo que en el ganchillo resulta ser una gran virtud para principiantes: los puntos quedan bien definidos, no se deforman y la tensión es fácil de controlar.',
          'Existen dos tipos principales: el algodón peinado mate (muy suave, ideal para prendas infantiles y muñecos) y el algodón mercerizado (con un proceso químico que le otorga brillo y rigidez, perfecto para posavasos y manteles).'
        ],
        subsections: [
          {
            title: 'Ideal para:',
            text: 'Amigurumis, tops de verano, bolsas de red para la compra, agarraderas de cocina y ropa para bebés.'
          }
        ]
      },
      {
        id: 'lana-merino',
        title: '3. Lana Merino: Calor y elasticidad para el invierno',
        paragraphs: [
          'A diferencia de la lana tradicional que puede picar en la piel, la lana de oveja merina tiene fibras ultrafinas y onduladas. Es termo-reguladora, cálida y posee una gran elasticidad que perdona pequeñas irregularidades de tensión.',
          'Si buscas prendas de invierno que se laven en lavadora, opta por lana merino con tratamiento Superwash.'
        ],
        subsections: [
          {
            title: 'Ideal para:',
            text: 'Gorros, bufandas gruesas, cuellos, jerséis y mantas de sofá cálidas.'
          }
        ]
      },
      {
        id: 'acrilico-premium',
        title: '4. Acrílico Premium antipilling: Económico y resistente',
        paragraphs: [
          'Atrás quedaron los acrílicos ásperos y brillantes de los años 80. Hoy en día, los acrílicos de microfibra de alta calidad son ultrasuaves, no irritan pieles sensibles y resisten infinidad de lavados.',
          'El tratamiento "antipilling" evita la formación de bolitas por el roce continuado.'
        ],
        subsections: [
          {
            title: 'Ideal para:',
            text: 'Mantas grandes familiares de bajo mantenimiento, cojines decorativos y proyectos de práctica.'
          }
        ]
      },
      {
        id: 'bambu-y-lino',
        title: '5. Bambú y Lino: Caída elegante y brillo sedoso',
        paragraphs: [
          'La fibra de bambú posee una caída líquida y un brillo natural similar a la seda, mientras que el lino aporta una textura orgánica rústica que se vuelve más suave con cada lavado.',
          'Ambas fibras son ideales para climas muy cálidos o para tejedoras que busquen un estilo sofisticado.'
        ]
      },
      {
        id: 'tabla-comparativa',
        title: '6. Tabla comparativa rápida por proyecto',
        paragraphs: [
          '• Para Amigurumis: Algodón 100% grosor Sport/DK (Aguja 2.5 mm).\n• Para Tops de vestir: Bambú o Algodón peinado Fingering (Aguja 3.0 mm).\n• Para Mantas duraderas: Acrílico premium antipilling DK/Worsted (Aguja 4.5 mm).\n• Para Cuellos y gorros: Lana Merino Superwash Worsted (Aguja 5.0 mm).'
        ]
      }
    ],
    expertTip: 'Guarda siempre la faja de papel que envuelve la madeja: incluye el número de tintada (lote de color). Si compras más madejas después y el lote es diferente, notarás un salto de tono en la prenda.',
    relatedSlugs: ['primer-amigurumi-osito-paso-a-paso', 'top-verano-crochet-brisa-patron-gratis']
  }
];

export const ARTICLES: Article[] = [
  ...PRIMEROS_PASOS_ARTICLES,
  ...BASE_ARTICLES
];
