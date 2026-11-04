import { Article } from '../types';
import { AUTHORS } from './authors';

export const PRIMEROS_PASOS_ARTICLES: Article[] = [
  {
    id: 'art-primeros-pasos-1',
    slug: 'como-empezar-crochet-guia-principiantes',
    title: 'Cómo empezar a tejer crochet: guía completa para principiantes',
    metaTitle: 'Cómo empezar a tejer crochet: guía completa principiantes',
    metaDescription: 'Aprende a tejer crochet desde cero: materiales, postura, primeros puntos y consejos prácticos para avanzar sin frustrarte. Paso a paso.',
    category: 'primeros-pasos',
    categoryLabel: 'Primeros pasos',
    difficulty: 'Principiante',
    readingTime: '14 min de lectura',
    date: '4 de Noviembre, 2026',
    isoDate: '2026-11-04',
    author: AUTHORS.clara,
    heroImage: '/assets/images/crochet_beginner_guide_1793795743138',
    pinterestImage: '/assets/images/pin_beginner_guide_1793795787795',
    imageAlt: 'Manos de tejedora sosteniendo un ganchillo ergonómico de madera y tejiendo los primeros puntos con hilo de algodón rosa pastel sobre mesa de madera',
    estimatedTime: 'Guía de iniciación (lectura y práctica: 2 horas)',
    hookSize: '4.0 mm o 4.5 mm',
    excerpt: 'Si nunca has cogido una aguja de crochet y sientes que los hilos se te escapan de las manos, esta guía es para ti. Te explico sin tecnicismos cómo empezar, qué necesitas y el orden exacto para aprender sin desanimarte.',
    tableOfContents: [
      { id: 'por-que-aprender-crochet', title: '1. ¿Por qué el crochet engancha tanto?' },
      { id: 'materiales-minimos', title: '2. Qué necesitas exactamente para arrancar hoy' },
      { id: 'ruta-de-aprendizaje', title: '3. La ruta de aprendizaje que a mí me hubiera gustado tener' },
      { id: 'postura-y-tensión', title: '4. La postura de las manos y el misterio de la tensión' },
      { id: 'tu-primera-muestra', title: '5. Paso a paso: tejiendo tu primera muestra sin agobios' },
      { id: 'errores-comunes', title: '6. Errores comunes que todas cometemos al inicio' },
      { id: 'preguntas-frecuentes', title: '7. Preguntas frecuentes de principiantes' },
      { id: 'conclusion-primeros-pasos', title: '8. Conclusión y siguientes pasos' }
    ],
    materials: [
      { item: 'Un ganchillo ergonómico de 4.0 mm o 4.5 mm', detail: 'Preferiblemente con mango de silicona suave o madera lisa para cuidar las articulaciones.' },
      { item: 'Un ovillo de hilo de algodón o acrílico suave grosor DK o Worsted', detail: 'Elige un color claro (beige, verde menta o rosa empolvado); con colores oscuros es imposible contar puntos.' },
      { item: '2 marcadores de punto tipo candado', detail: 'Imprescindibles para señalar el primer y el último punto de cada hilera.' },
      { item: 'Tijeras de costura y aguja lanera de punta roma', detail: 'Para rematar las hebras finales sin pincharte.' }
    ],
    contentSections: [
      {
        id: 'por-que-aprender-crochet',
        title: '1. ¿Por qué el crochet engancha tanto y por dónde empezar?',
        paragraphs: [
          'Recuerdo con total claridad la primera tarde que me senté con un ovillo en el regazo y un ganchillo prestado. Sentía una mezcla de ilusión tremenda y una frustración que casi me hace tirar la toalla: la hebra se me abría, las cadenetas me quedaban tan apretadas que no entraba la aguja y mis dedos parecían de madera.',
          'Si estás pasando por ese momento exacto ahora mismo, respira hondo: es completamente normal. Tejer a crochet no es un don innato con el que se nace; es pura memoria muscular. Tu cerebro y tus manos necesitan apenas unos días para sincronizar el movimiento de lazada y tiro.',
          'A diferencia de las dos agujas (donde tienes decenas de puntos vivos en tensión que pueden escaparse), en el crochet solo gestionas un único punto activo a la vez. Si te equivocas, deshaces tres centímetros tirando del hilo suavemente y vuelves a empezar sin ningún drama. Es una técnica profundamente terapéutica, portátil y con una versatilidad infinita: con la misma aguja puedes tejer desde un delicado [osito amigurumi](/blog/primeros-amigurumi-osito-paso-a-paso) hasta un [top fresco de verano](/blog/top-verano-crochet-brisa-patron-gratis).',
          '[FOTO: Plano cenital de una taza de café humeante junto a una muestra cuadrada recién tejida en tono crudo y una madeja de algodón peinado] [ALT: Mesa de tejedora con muestra de crochet beige, aguja de madera y taza de café]'
        ]
      },
      {
        id: 'materiales-minimos',
        title: '2. Qué necesitas exactamente para arrancar hoy (sin gastar de más)',
        paragraphs: [
          'Uno de los errores más caros de principiante es entrar en una mercería y comprar un set de veinte agujas baratas, lanas de fantasía con pelo o un hilo negro porque "es muy elegante". En mi experiencia, el 80% de los abandonos en crochet ocurren por culpa de un material inadecuado.',
          'Para empezar hoy mismo, solo necesitas tres elementos bien escogidos. Te he preparado un desglose exhaustivo en nuestra guía dedicada a los [materiales básicos de crochet: qué comprar la primera vez](/blog/materiales-basicos-crochet-primera-vez), pero quédate con esta regla de oro: un ganchillo de 4.0 mm o 4.5 mm de aluminio o ergonómico y un ovillo de algodón peinado o acrílico liso de grosor medio en color claro.',
          '¿Por qué un color claro? Porque cuando estás aprendiendo necesitas ver las dos hebras que forman la "V" del punto. Si tejes con azul marino o negro, tejerás a ciegas y contar los puntos será una auténtica tortura.'
        ]
      },
      {
        id: 'ruta-de-aprendizaje',
        title: '3. La ruta de aprendizaje que a mí me hubiera gustado tener',
        paragraphs: [
          'Internet está repleto de tutoriales maravillosos, pero cuando una ve proyectos avanzados en Instagram suele intentar tejer un jersey en su segunda semana y se frustra. En crochetsimply defendemos el aprendizaje por capas lógicas. Este es el orden natural con el que todas mis alumnas han triunfado:',
          '1. Aprender a hacer el nudo corredizo y regular la tensión de la cadeneta inicial.\n2. Dominar el punto bajo (o medio punto), que es la columna vertebral de casi todo en ganchillo.\n3. Aprender a identificar el primer y último punto de la vuelta para que los bordes queden rectos.\n4. Pasar al medio punto alto y al punto alto (las varetas).\n5. Probar labores en espiral (como el anillo mágico para amigurumis).\n6. Aprender a rematar hebras y bloquear las piezas.',
          'Si sigues este camino peldaño a peldaño, te garantizo que en dos o tres tardes estarás tejiendo con fluidez y sin pensar en los movimientos de tus dedos.'
        ]
      },
      {
        id: 'postura-y-tensión',
        title: '4. La postura de las manos y el misterio de la tensión',
        paragraphs: [
          'La duda que más recibo en el correo del blog es: «Clara, ¿por qué mis puntos quedan o como piedras imposibles de atravesar o tan flojos que parece una red de pescar?». La respuesta siempre es la misma: la mano que sujeta la lana todavía no ha encontrado su ritmo de freno.',
          'Hay dos maneras principales de coger el ganchillo: como un lápiz (agarre de pluma) o como un cuchillo de mesa (agarre de cuchillo). Ninguna es mejor que otra; yo personalmente uso el agarre de cuchillo porque me fatiga menos la muñeca tras horas tejiendo. En nuestro tutorial detallado sobre [cómo sostener el ganchillo y la lana paso a paso](/blog/como-sostener-ganchillo-lana-paso-a-paso) te muestro fotos detalladas de cada ángulo para que elijas el tuyo.',
          '[FOTO: Detalle de las dos manos en posición de tejer, mostrando cómo la hebra pasa por el dedo meñique e índice de la mano izquierda] [ALT: Manos colocadas para tejer crochet mostrando el recorrido del hilo para regular la tensión]',
          'Para la mano que alimenta la hebra (la izquierda si eres diestra), el truco reside en enroscar el hilo alrededor del meñique y luego pasarlo por encima del dedo índice. El índice actúa como una antena que sube o baja para dar más o menos hilo al ganchillo.'
        ]
      },
      {
        id: 'tu-primera-muestra',
        title: '5. Paso a paso: tejiendo tu primera muestra sin agobios',
        paragraphs: [
          'Antes de intentar tejer una bufanda de dos metros, vamos a hacer una muestra de práctica de diez por diez centímetros. Esta muestra te servirá para soltar la muñeca y entender cómo nace la trama del tejido.'
        ],
        steps: [
          {
            number: 1,
            heading: 'Haz el nudo corredizo sobre el ganchillo',
            text: 'Deja unos 10 cm de cola de hilo. Forma un lazo cruzando la hebra larga sobre la corta, introduce el ganchillo por el aro y tira con suavidad de la hebra que viene del ovillo hasta que el lazo abrace la aguja. Debe deslizarse libremente, sin estrangular el metal. Si necesitas ver el movimiento al detalle, echa un ojo a nuestro tutorial del [nudo corredizo y cadeneta paso a paso](/blog/nudo-corredizo-cadeneta-primer-paso-crochet).',
            tip: 'El bucle que queda sobre el ganchillo debe poder bailar con holgura. Si cuesta deslizarlo, aflójalo un milímetro.'
          },
          {
            number: 2,
            heading: 'Teje una cadeneta base de 15 puntos',
            text: 'Pasa la hebra sobre el ganchillo de atrás hacia adelante (hacer una "lazada") y gira levemente la cabeza del ganchillo hacia abajo para enganchar el hilo y sacarlo a través del bucle que tenías en la aguja. Ya tienes tu primera cadeneta. Repite el proceso 15 veces intentando que todos los eslabones tengan un tamaño similar.',
            tip: 'No aprietes con los dedos. Mantén los hombros relajados y respira tranquilamente.'
          },
          {
            number: 3,
            heading: 'Primer punto bajo en la segunda cadeneta desde el ganchillo',
            text: 'Ignora el bucle que está en tu ganchillo (ese nunca cuenta como punto). Salta la primera cadeneta e introduce la punta de la aguja en la segunda cadeneta. Haz una lazada y saca la hebra: ahora tienes 2 bucles en el ganchillo. Haz otra lazada y pásala a través de los dos bucles a la vez. ¡Has tejido tu primer punto bajo (pb)! Coloca un marcador en este primer punto.',
            tip: 'Revisa las abreviaturas oficiales en nuestro [glosario de puntos de crochet](/glosario) si tienes dudas con los nombres de cada puntada.'
          },
          {
            number: 4,
            heading: 'Completa la primera fila y gira el tejido',
            text: 'Continúa tejiendo un punto bajo en cada una de las cadenetas restantes hasta llegar al final. Al terminar, cuenta los puntos: debes tener exactamente 14 puntos bajos. Haz 1 cadeneta al aire (cadeneta de subida), gira la labor como si pasaras la página de un libro y teje el primer punto bajo de la vuelta 2 en el último punto que hiciste en la vuelta anterior.',
            tip: 'El marcador te salvará la vida para no comerte los puntos de los extremos.'
          }
        ]
      },
      {
        id: 'errores-comunes',
        title: '6. Errores comunes que todas cometemos al inicio',
        paragraphs: [
          'En mis talleres presenciales veo repetirse los mismos tres o cuatro tropiezos una y otra vez. Saber qué esperar te evitará pensar que "el ganchillo no está hecho para ti".'
        ]
      },
      {
        id: 'preguntas-frecuentes',
        title: '7. Preguntas frecuentes de principiantes',
        paragraphs: [
          'Aquí doy respuesta directa a las consultas más habituales que me hacéis en la comunidad de crochetsimply.'
        ]
      },
      {
        id: 'conclusion-primeros-pasos',
        title: '8. Conclusión y siguientes pasos en tu viaje tejedor',
        paragraphs: [
          'Tejer a ganchillo es uno de los pasatiempos más reconfortantes que existen. Te desconecta de las pantallas, entrena tu atención plena y te permite decir con orgullo: «Esto lo he hecho yo con mis propias manos».',
          'No te compares con piezas acabadas de tejedoras expertas que llevan diez años en esto. Celebra cada cadeneta que te salga bonita y disfruta del proceso. Ahora que ya conoces los fundamentos, te invito a profundizar en la elección de tu equipo con nuestra guía de [materiales básicos de crochet: qué comprar la primera vez](/blog/materiales-basicos-crochet-primera-vez) o a explorar [cómo elegir la lana y el ganchillo adecuados para tu labor](/blog/elegir-lana-ganchillo-adecuados-proyecto). ¡Feliz tejido!',
          '[FOTO: Bodegón final con una cesta de mimbre llena de ovillos en tonos pastel y una libreta de notas de tejedora con muestras] [ALT: Cesta de mimbre con lanas pastel y cuaderno de notas con muestras de crochet]'
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Tejer la cadeneta de inicio demasiado apretada',
        consequence: 'La base de tu labor quedará curvada en forma de media luna y la primera fila costará horrores de tejer.',
        solution: 'Usa una aguja medio número mayor (por ejemplo un 5.0 mm) únicamente para tejer la cadeneta inicial y luego cambia a tu aguja de 4.0 mm para las vueltas de tejido.'
      },
      {
        mistake: 'Perder puntos en los extremos y que el tejido se convierta en un triángulo',
        consequence: 'Tu labor rectangular se irá encogiendo vuelta tras vuelta sin darte cuenta.',
        solution: 'Coloca siempre un marcador de candado en el primer punto de la vuelta nada más tejerlo. Así, cuando vuelvas en la siguiente hilera, sabrás con certeza matemática dónde clavar el último punto.'
      },
      {
        mistake: 'Clavar el ganchillo solo bajo una de las hebras de la "V"',
        consequence: 'Aparecen líneas en relieve horizontales y el tejido pierde consistencia y firmeza.',
        solution: 'Asegúrate de que la cabeza de la aguja pasa por debajo de las dos hebras que forman la espiga superior del punto, salvo que el patrón pida explícitamente tejer en hebra trasera (BLO).'
      },
      {
        mistake: 'Tensionar el hilo con fuerza excesiva provocando dolor en dedos y muñeca',
        consequence: 'Dolores articulares y agujetas musculares tras apenas quince minutos tejiendo.',
        solution: 'Deja que la hebra corra suavemente entre los dedos. El grosor del punto lo determina el cuello del ganchillo, no la fuerza de tu mano.'
      }
    ],
    faqs: [
      {
        question: '¿Es más fácil aprender crochet o punto a dos agujas?',
        answer: 'Para la inmensa mayoría de principiantes, el crochet resulta mucho más accesible. Solo sostienes una herramienta, tienes un único punto activo bajo control y reparar un error es tan sencillo como tirar del hilo sin miedo a que se desbarate toda la labor.'
      },
      {
        question: 'Soy zurda, ¿puedo aprender crochet con estos mismos tutoriales?',
        answer: '¡Por supuesto! Como zurda, realizarás exactamente los mismos movimientos pero en espejo (de izquierda a derecha en lugar de derecha a izquierda). También puedes sentarte frente a una persona diestra para replicar sus gestos frente a un espejo.'
      },
      {
        question: '¿Cuánto tiempo se tarda en tejer con soltura?',
        answer: 'Practicando entre 15 y 20 minutos al día durante una semana, la memoria muscular se asienta por completo. Al quinto día ya no mirarás los dedos con tensión y tus puntos empezarán a salir uniformes.'
      },
      {
        question: '¿Qué proyecto sencillo me recomiendas hacer primero?',
        answer: 'Empieza por posavasos cuadrados o una pequeña toalla de tocador en punto bajo con algodón peinado. Una vez te sientas cómoda, el salto perfecto es nuestro [osito amigurumi paso a paso](/blog/primer-amigurumi-osito-paso-a-paso).'
      }
    ],
    relatedSlugs: [
      'materiales-basicos-crochet-primera-vez',
      'como-sostener-ganchillo-lana-paso-a-paso',
      'nudo-corredizo-cadeneta-primer-paso-crochet',
      'elegir-lana-ganchillo-adecuados-proyecto'
    ]
  },
  {
    id: 'art-primeros-pasos-2',
    slug: 'materiales-basicos-crochet-primera-vez',
    title: 'Materiales básicos de crochet: qué comprar la primera vez',
    metaTitle: 'Materiales básicos de crochet: qué comprar la primera vez',
    metaDescription: 'Descubre los materiales indispensables para empezar a tejer crochet sin gastar de más: agujas, lanas recomendadas y accesorios útiles.',
    category: 'primeros-pasos',
    categoryLabel: 'Primeros pasos',
    difficulty: 'Principiante',
    readingTime: '13 min de lectura',
    date: '4 de Noviembre, 2026',
    isoDate: '2026-11-04',
    author: AUTHORS.sofia,
    heroImage: '/assets/images/crochet_starter_kit_1793795743535',
    pinterestImage: '/assets/images/pin_starter_kit_1793795786429',
    imageAlt: 'Kit básico de crochet ordenado sobre tela de lino: agujas ergonómicas de colores con milímetros grabados, ovillos de algodón peinado, tijeras clásicas y marcadores',
    estimatedTime: 'Guía de compras consciente (lectura: 13 min)',
    hookSize: '4.0 mm recomendado para novatas',
    excerpt: '¿Vas a hacer tu primera compra de ganchillo y te abruma la cantidad de agujas y lanas disponibles? Te cuento con total honestidad qué necesitas en tu estuche, qué accesorios son prescindibles y en qué merece la pena invertir desde el día uno.',
    tableOfContents: [
      { id: 'el-mito-del-kit-gigante', title: '1. El mito del kit gigante de 50 piezas' },
      { id: 'las-agujas-de-crochet', title: '2. Agujas de ganchillo: materiales, mangos y grosores' },
      { id: 'tu-primer-ovillo', title: '3. La lana o hilo ideal para no volverte loca' },
      { id: 'accesorios-imprescindibles', title: '4. Accesorios pequeños que marcan una diferencia enorme' },
      { id: 'donde-comprar', title: '5. Dónde comprar: mercería local vs tiendas online' },
      { id: 'errores-comunes', title: '6. Errores comunes al comprar materiales de crochet' },
      { id: 'preguntas-frecuentes', title: '7. Preguntas frecuentes sobre materiales' },
      { id: 'conclusion-kit-basico', title: '8. Conclusión y lista de la compra recomendada' }
    ],
    materials: [
      { item: '1 Ganchillo ergonómico de 4.0 mm o 4.5 mm', detail: 'De punta de aluminio suave con mango de silicona o madera lisa.' },
      { item: '1 o 2 ovillos de algodón peinado grosor DK / Aran (50g)', detail: 'Color claro: crudo, lavanda pastel, salvia o rosa empolvado.' },
      { item: '1 paquete de marcadores de punto de candado plástico', detail: 'Evita los aros cerrados de dos agujas; necesitas marcadores que abran y cierren.' },
      { item: '1 aguja lanera sin punta (punta roma)', detail: 'Número 14 o 16 con ojo ancho para enhebrar lanas sin deshilachar.' },
      { item: '1 cinta métrica flexible de costura y tijeras pequeñas' }
    ],
    contentSections: [
      {
        id: 'el-mito-del-kit-gigante',
        title: '1. El mito del kit gigante de 50 piezas: menos es más',
        paragraphs: [
          'Cuando decidí aprender a tejer, lo primero que hice fue pedir por internet un maletín enorme que traía 25 agujas de todos los colores, dedales extraños, pomponeras y reglas de plástico. ¿Sabes cuántas de esas cosas utilicé durante mis primeros seis meses? Exactamente dos agujas y una tijera que cortaba fatal.',
          'La industria del DIY adora vendernos sets completísimos que terminan guardados en un cajón acumulando polvo. En mi experiencia, gastar 12 o 15 euros en una aguja ergonómica excelente y un buen ovillo de algodón peinado te dará cien veces mejor resultado que un set de saldo de veinte agujas que arañan el hilo.',
          'En esta guía vamos a filtrar el ruido comercial para que compres con cabeza, ahorres dinero y tengas en tus manos herramientas que hagan que tejer sea un placer sensorial desde el primer minuto.',
          '[FOTO: Bodegón cenital de kit minimalista para principiante con 1 aguja ergonómica 4.0 mm, 1 ovillo color menta, 3 marcadores y aguja lanera en estuche de tela] [ALT: Kit minimalista de crochet para principiantes en estuche de lino]'
        ]
      },
      {
        id: 'las-agujas-de-crochet',
        title: '2. Agujas de ganchillo: materiales, mangos y grosores',
        paragraphs: [
          'La aguja o ganchillo es la extensión de tu mano tejedora. En España y Europa nos guiamos por el sistema métrico en milímetros (desde 0.5 mm para encajes finísimos hasta 20 mm para trapillo gigante). Para quien empieza, el grosor sagrado se encuentra entre **4.0 mm y 5.0 mm**.',
          'Existen principalmente tres tipos de materiales en el mercado:',
          '• **Aluminio con mango ergonómico:** La mejor opción sin discusión. La punta metálica permite que la fibra se deslice con suavidad sin engancharse, mientras que el mango engomado amortigua la presión de los dedos pulgar e índice.\n• **Madera o bambú:** Son agujas muy cálidas y bonitas al tacto. Ofrecen mayor agarre ("frenan" más el hilo), lo que viene bien si tejes con fibras resbaladizas como la seda, pero pueden partirse si son finas.\n• **Plástico:** Suelen venir en grosores gruesos (a partir de 7 mm). Para grosores pequeños resultan flexibles y chirrían con algunas fibras sintéticas.',
          'Si vas a comprar una sola aguja hoy, busca una de **4.0 mm de aluminio con mango ergonómico**. Te servirá para aprender todos los puntos de nuestra [guía completa para principiantes](/blog/como-empezar-crochet-guia-principiantes) y confeccionar tus primeras muestras.'
        ]
      },
      {
        id: 'tu-primer-ovillo',
        title: '3. La lana o hilo ideal para no volverte loca tejiendo',
        paragraphs: [
          'Entrar en una tienda de lanas y tocar ovillos suaves es maravilloso, pero no todas las fibras son amables con quien está aprendiendo.',
          'La mejor fibra para debutar es el **algodón peinado 100%** (como el clásico grosor DK o medio) o un **acrílico premium antipilling**. Tienen una torsión definida: las hebras van bien enrolladas entre sí y no se abren cuando introduces la punta de la aguja.',
          '¿Qué fibras debes evitar tajantemente en tus primeras tres semanas?:\n1. **Mohair o lanas con pelo largo (bouclé):** Es imposible ver el agujero donde clavar el punto y, si te equivocas, desbaratar la labor es una auténtica pesadilla porque los pelos se anudan.\n2. **Trapillo pesado o cordón rígido:** Requiere mucha fuerza muscular y te dejará la muñeca dolorida en diez minutos.\n3. **Hilos oscuros (negro, marrón chocolate, azul marino):** Absorben la luz y no verás las espigas de las cadenetas.\n4. **Hilos de fantasía con lentejuelas o grosores irregulares.**',
          '[FOTO: Comparativa de dos madejas: a la izquierda una madeja de algodón peinado liso color salvia con hebras definidas, a la derecha una lana mohair peluda negra con el rótulo de no recomendada] [ALT: Comparación visual de hilo adecuado de algodón vs lana con pelo inadecuada para principiantes]'
        ]
      },
      {
        id: 'accesorios-imprescindibles',
        title: '4. Accesorios pequeños que marcan una diferencia enorme',
        paragraphs: [
          'Más allá de la aguja y el ovillo, hay tres pequeños aliados que cuestan céntimos y transformarán tu experiencia:',
          '• **Marcadores de punto tipo imperdible/candado:** Cómpralos siempre de plástico con cierre. Los aros cerrados de metal son para dos agujas (no se pueden enganchar ni sacar de un punto ya cerrado). Los marcadores te servirán para marcar el inicio de cada vuelta en un amigurumi o el primer punto de una hilera para no perder puntos por el camino.\n• **Aguja lanera de punta roma (tapestry needle):** A diferencia de las agujas de coser ropa, la aguja lanera tiene la punta redondeada para deslizarse entre las fibras sin cortarlas y un ojo grande para enhebrar lanas gruesas.\n• **Cinta métrica flexible de costurera:** La necesitarás para medir tus muestras de tensión antes de tejer proyectos de talla como nuestro [top de verano Brisa](/blog/top-verano-crochet-brisa-patron-gratis).\n• **Tijeras pequeñas y afiladas:** Unas tijeras de cigüeña o de precisión para cortar cabos limpios.'
        ]
      },
      {
        id: 'donde-comprar',
        title: '5. Dónde comprar: mercería de barrio vs tiendas online',
        paragraphs: [
          'Si tienes cerca una mercería tradicional o tienda de lanas de barrio, ve allí para tu primera compra. Dile a la dependienta: «Quiero aprender a hacer crochet, ¿me enseñas un ovillo de algodón suave de grosor medio en color claro y una aguja ergonómica del cuatro?». Te aconsejarán con cariño y podrás tocar el tacto de la fibra.',
          'Si compras por internet, busca tiendas especializadas en labores donde especifiquen claramente la composición, el metraje por ovillo y el número de aguja recomendado en la ficha técnica del producto. En nuestro artículo sobre [cómo elegir la lana y el ganchillo adecuados para tu labor](/blog/elegir-lana-ganchillo-adecuados-proyecto) te enseño a descifrar todas esas etiquetas.'
        ]
      },
      {
        id: 'errores-comunes',
        title: '6. Errores comunes al comprar materiales de crochet',
        paragraphs: [
          'Comprar materiales con entusiasmo desmedido suele desembocar en compras impulsivas que luego no sirven para aprender.'
        ]
      },
      {
        id: 'preguntas-frecuentes',
        title: '7. Preguntas frecuentes sobre materiales de crochet',
        paragraphs: [
          'Respondo a las dudas sobre marcas, precios y materiales que siempre surgen al empezar.'
        ]
      },
      {
        id: 'conclusion-kit-basico',
        title: '8. Conclusión y lista de la compra recomendada',
        paragraphs: [
          'No necesitas una fortuna para adentrarte en el maravilloso mundo del crochet. Con una inversión de menos de quince euros tienes en tu cesta todo lo necesario para aprender los puntos básicos, dominar la tensión y crear tus primeras labores hechas a mano.',
          'Prepara tu aguja de 4.0 mm, abre tu ovillo de algodón y da el siguiente salto aprendiendo [cómo sostener el ganchillo y la hebra con comodidad](/blog/como-sostener-ganchillo-lana-paso-a-paso). ¡Nos vemos en la siguiente lección!',
          '[FOTO: Estuche de tela abierto sobre la mesa con todos los materiales ordenados listos para empezar una sesión de tejido] [ALT: Estuche enrollable con ganchillos ergonómicos, marcadores y tijeras]'
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Comprar agujas metálicas rectas antiguas sin mango ergonómico',
        consequence: 'Al cabo de 20 minutos te dolerán los tendones de los dedos por la presión continuada del metal fino.',
        solution: 'Invierte en ganchillos con mango de goma siliconada o plástico anatómico (tipo Clover Amour o similar); tus manos te lo agradecerán durante años.'
      },
      {
        mistake: 'Elegir ovillos de lanas 100% acrílicas de baja calidad (ásperas)',
        consequence: 'El hilo se deshilacha, suelta pelusa desagradable y chirría al deslizar por la aguja metálica.',
        solution: 'Si eliges acrílico, busca que sea acrílico premium antipilling o Dralón. O mejor aún: empieza con algodón 100% peinado.'
      },
      {
        mistake: 'Comprar madejas en madeja trenzada (hanks) sin saber devanarlas en ovillo',
        consequence: 'Al intentar tirar de la hebra se formará una maraña gigante imposible de desenredar.',
        solution: 'Compra ovillos listos para tejer (balls/skeins) que vengan enrollados de fábrica, no madejas abiertas que requieren devanadora.'
      },
      {
        mistake: 'Usar marcadores circulares de punto cerrado para dos agujas',
        consequence: 'No podrás engancharlos en los puntos de crochet ni extraerlos al finalizar la hilera.',
        solution: 'Asegúrate de que sean marcadores tipo imperdible o candado con cierre basculante.'
      }
    ],
    faqs: [
      {
        question: '¿Cuánto dinero cuesta un kit básico de iniciación?',
        answer: 'Entre 12 y 18 euros en total: unos 4-6 € para una buena aguja ergonómica, 3-4 € por un ovillo de algodón peinado de 50g, 2 € por una cajita de marcadores y 2 € por agujas laneras.'
      },
      {
        question: '¿Qué número de aguja es el más polivalente para todo?',
        answer: 'La aguja de 4.0 mm (o 4.5 mm) es la reina de la polivalencia. Sirve para bufandas, mantitas, gorros, neceseres y prendas con hilados de grosor DK o Worsted.'
      },
      {
        question: '¿Es mejor el hilo de algodón o la lana acrílica para debutar?',
        answer: 'El algodón peinado mate es mi preferido porque ofrece una definición de punto inmejorable: ves cada agujero y cada lazada como en un dibujo técnico. El acrílico suave también es buena opción si buscas una textura más esponjosa y económica.'
      },
      {
        question: '¿Puedo usar tijeras normales de cocina para cortar la lana?',
        answer: 'Puedes usarlas al principio, pero las tijeras desafiladas muerden la lana y deshilachan los cabos, dificultando enhebrar la aguja lanera. Unas tijeritas de costura afiladas te facilitarán mucho la vida.'
      }
    ],
    relatedSlugs: [
      'como-empezar-crochet-guia-principiantes',
      'elegir-lana-ganchillo-adecuados-proyecto',
      'como-sostener-ganchillo-lana-paso-a-paso',
      'mejores-tipos-hilo-crochet-ganchillo'
    ]
  },
  {
    id: 'art-primeros-pasos-3',
    slug: 'elegir-lana-ganchillo-adecuados-proyecto',
    title: 'Cómo elegir la lana y el ganchillo adecuados para cada proyecto',
    metaTitle: 'Cómo elegir lana y ganchillo adecuados para tu labor',
    metaDescription: 'Aprende a leer la etiqueta de la lana, combinar grosores de hilo con la aguja perfecta y adaptar la tensión en prendas o amigurumis.',
    category: 'primeros-pasos',
    categoryLabel: 'Primeros pasos',
    difficulty: 'Principiante',
    readingTime: '13 min de lectura',
    date: '4 de Noviembre, 2026',
    isoDate: '2026-11-04',
    author: AUTHORS.sofia,
    heroImage: '/assets/images/yarn_hook_guide_1793795743901',
    pinterestImage: '/assets/images/pin_yarn_hook_1793795802449',
    imageAlt: 'Muestrario de madejas de lanas de diferentes grosores (Fingering, DK, Worsted, Chunky) alineadas con sus ganchillos correspondientes y etiquetas técnicas',
    estimatedTime: 'Guía técnica de fibras y calibres (lectura: 13 min)',
    hookSize: 'Adaptable a cada grosor de hilo',
    excerpt: '¿Alguna vez has tejido algo y ha quedado rígido como cartón o tan flojo que parecía una malla deforme? La clave no está en tu habilidad, sino en el matrimonio entre el grosor de la fibra y el número de aguja. Te enseño a acertar siempre.',
    tableOfContents: [
      { id: 'el-binomio-fibra-aguja', title: '1. Por qué la relación lana-aguja define el éxito de tu labor' },
      { id: 'como-leer-la-etiqueta', title: '2. Cómo descifrar la etiqueta de un ovillo como una experta' },
      { id: 'clasificacion-grosores', title: '3. Clasificación estándar de grosores y sus agujas recomendadas' },
      { id: 'diferencia-amigurumi-ropa', title: '4. La gran excepción: amigurumis versus prendas de vestir' },
      { id: 'la-muestra-de-tension', title: '5. La muestra de tensión (gauge): por qué te ahorrará lágrimas' },
      { id: 'errores-comunes', title: '6. Errores habituales al emparejar hilo y aguja' },
      { id: 'preguntas-frecuentes', title: '7. Preguntas frecuentes sobre lanas y ganchillos' },
      { id: 'conclusion-eleccion-fibra', title: '8. Conclusión y resumen práctico' }
    ],
    materials: [
      { item: 'Varios ovillos de diferente calibre para comparar', detail: 'Fingering (fino), DK (medio) y Worsted (grueso).' },
      { item: 'Ganchillos de 2.5 mm, 3.5 mm, 4.0 mm y 5.0 mm', detail: 'Para experimentar con el drapeado de cada tejido.' },
      { item: 'Regla o calibrador de muestras de 10x10 cm' }
    ],
    contentSections: [
      {
        id: 'el-binomio-fibra-aguja',
        title: '1. Por qué la relación lana-aguja define el éxito de tu labor',
        paragraphs: [
          'En el crochet existe una verdad inmutable: una misma lana tejida con una aguja de 3.0 mm parecerá un escudo impenetrable, y esa misma lana tejida con un ganchillo de 6.0 mm caerá con la fluidez y suavidad de una nube.',
          'Cuando empezamos, tendemos a pensar que las recomendaciones del fabricante son una orden estricta. Nada más lejos de la realidad: la etiqueta te da un punto de partida orientativo, pero el resultado final dependerá de dos factores clave: qué proyecto vas a tejer (un muñeco, una prenda o una manta) y cuál es tu tensión personal al apretar el hilo.',
          'Comprender este equilibrio te dará una libertad creativa absoluta. Ya no dependerás de comprar exactamente la misma marca que indica un patrón: podrás sustituir lanas con total confianza sabiendo que el proyecto quedará impecable.',
          '[FOTO: Tres muestras del mismo hilo tejido con agujas de 3.0 mm, 4.5 mm y 6.0 mm, mostrando la diferencia radical de textura y densidad] [ALT: Tres muestras de ganchillo teñidas con el mismo hilo pero diferente tamaño de aguja]'
        ]
      },
      {
        id: 'como-leer-la-etiqueta',
        title: '2. Cómo descifrar la etiqueta de un ovillo como una experta',
        paragraphs: [
          'La faja de papel que envuelve un ovillo es su documento de identidad. Antes de tirarla a la papelera, guárdala siempre hasta terminar la labor. En ella encontrarás:',
          '• **Composición:** El porcentaje de materias primas (ej. 100% algodón, 70% lana merino + 30% poliamida). Para principiantes, te recomiendo revisar nuestra comparativa de los [mejores tipos de hilo para crochet](/blog/mejores-tipos-hilo-crochet-ganchillo).\n• **Peso y metraje:** Te indica cuántos gramos pesa el ovillo y cuántos metros de hebra contiene (por ejemplo: 50 g / 125 m). Esta proporción es el dato más fiable para saber si un hilo es fino o grueso.\n• **Icono de ganchillo:** Un dibujito de una aguja con un número en milímetros (por ejemplo, 3.5 - 4.5 mm). Es la sugerencia del fabricante para tejer plano estándar.\n• **Número de tintada (Dye Lot / Lote):** Crucial para labores grandes. Si compras ovillos de diferente lote, aunque el color sea teóricamente el mismo, notarás un corte de tono visible en la pieza terminada.\n• **Instrucciones de lavado:** Temperatura máxima y si admite plancha o secadora.',
          '[FOTO: Primer plano macro de la etiqueta de un ovillo señalando con el dedo los símbolos de aguja de ganchillo recomendada y número de lote de tintada] [ALT: Detalle de etiqueta de ovillo de lana con iconos de lavado y número de ganchillo]'
        ]
      },
      {
        id: 'clasificacion-grosores',
        title: '3. Clasificación estándar de grosores y sus agujas recomendadas',
        paragraphs: [
          'En el mercado internacional existe una tabla estándar del Craft Yarn Council que cataloga las fibras del 0 al 7. En España solemos llamarlas por sus nombres en inglés o por su metraje aproximado:',
          '1. **Lace / Encaje (Nº 0):** Hilos ultrafinos para puntillas y tapetes tradicionales. Se tejen con ganchillos de acero de 1.0 mm a 2.0 mm.\n2. **Fingering / Sock (Nº 1):** Unos 400 metros por cada 100g. Ideal para calcetines, chales ligeros y ropa de bebé. Se teje con 2.5 mm a 3.5 mm.\n3. **Sport / Bebé (Nº 2):** Unos 300 metros por cada 100g. Perfecto para jerséis de entretiempo y prendas de primavera. Aguja de 3.0 mm a 4.0 mm.\n4. **DK / Light Worsted (Nº 3):** El rey de los hilados (unos 200-240 m por 100g). Es el más polivalente para amigurumis y mantas. Aguja recomendada: 3.5 mm a 4.5 mm.\n5. **Worsted / Aran (Nº 4):** Más grueso y abrigado (unos 160-200 m por 100g). Se teje a toda velocidad con agujas de 5.0 mm a 6.0 mm.\n6. **Chunky / Bulky (Nº 5 y 6):** Lanas gruesas de invierno para gorros, bufandas XXL y cestas. Agujas de 7.0 mm a 10 mm.'
        ]
      },
      {
        id: 'diferencia-amigurumi-ropa',
        title: '4. La gran excepción: amigurumis versus prendas de vestir',
        paragraphs: [
          'Aquí es donde el 90% de las tejedoras novatas tropiezan. Supongamos que tienes un ovillo de algodón DK cuya etiqueta recomienda usar ganchillo de 4.0 mm:',
          '• **Si vas a tejer un amigurumi:** Debes usar una aguja de **2.5 mm o 3.0 mm** (es decir, entre 1 y 1.5 milímetros MENOR que lo indicado por la etiqueta). ¿Por qué? Porque un muñeco necesita un tejido súper apretado y denso para que, al meter el relleno sintético, la guata blanca no asome entre los agujeros. Puedes ver esta técnica en acción en nuestro [tutorial del primer osito amigurumi](/blog/primer-amigurumi-osito-paso-a-paso).\n• **Si vas a tejer un top o prenda de ropa:** Debes usar la aguja recomendada (4.0 mm) o incluso medio número mayor (4.5 mm o 5.0 mm). La ropa necesita "drapeado" (caída fluida); si la tejes apretada, quedará como una armadura incómoda que no se adapta al cuerpo.'
        ]
      },
      {
        id: 'la-muestra-de-tension',
        title: '5. La muestra de tensión (gauge): por qué te ahorrará lágrimas',
        paragraphs: [
          'Sé que da una pereza tremenda tejer un cuadrado de 10x10 cm cuando te mueres de ganas de empezar tu proyecto, pero tejer una muestra de tensión es tu seguro de vida.',
          'Cada tejedora tiene una tensión única: algunas tejen muy apretado por nerviosismo y otras tejen con la mano muy suelta. Si un patrón indica que 18 puntos altos equivalen a 10 cm y a ti te miden 12 cm, tu prenda quedará dos tallas más grande de lo previsto.',
          'Si tu muestra queda más pequeña que el patrón, cambia a una aguja medio número mayor. Si tu muestra queda más grande, baja medio número de aguja. Así de simple.'
        ]
      },
      {
        id: 'errores-comunes',
        title: '6. Errores habituales al emparejar hilo y aguja',
        paragraphs: [
          'Evita estos desaciertos recurrentes al elegir lanas y números de ganchillo.'
        ]
      },
      {
        id: 'preguntas-frecuentes',
        title: '7. Preguntas frecuentes sobre lanas y ganchillos',
        paragraphs: [
          'Dudas resueltas para que no te equivoques al comprar en mercerías físicas u online.'
        ]
      },
      {
        id: 'conclusion-eleccion-fibra',
        title: '8. Conclusión y resumen práctico para tus proyectos',
        paragraphs: [
          'No tengas miedo a experimentar. Guarda siempre restos de lana con una etiqueta donde anotes la aguja con la que la tejiste y cómo te sentiste al manipularla. Con el tiempo, mirarás un ovillo y tus manos sabrán al instante qué ganchillo le sienta como un guante.',
          'Ahora que sabes elegir tu hilado perfecto, aprende la técnica corporal idónea en nuestro artículo sobre [cómo sostener el ganchillo y la lana paso a paso](/blog/como-sostener-ganchillo-lana-paso-a-paso) o da tus primeras puntadas con el [nudo corredizo y la cadeneta](/blog/nudo-corredizo-cadeneta-primer-paso-crochet).',
          '[FOTO: Varias muestras de crochet apiladas ordenadamente en tonos salvia, crudo y terracota con una cinta métrica de madera al lado] [ALT: Muestras de tejido de crochet cuadradas con cinta métrica]'
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Tejer amigurumis con la aguja que sugiere la etiqueta',
        consequence: 'Al rellenar la cabeza o el cuerpo del muñeco, el tejido se estira y el relleno blanco se ve por todas partes.',
        solution: 'Resta siempre entre 1 y 1.5 mm a la aguja recomendada de la etiqueta (por ejemplo: hilo para 3.5 mm se teje con aguja de 2.5 mm en amigurumis).'
      },
      {
        mistake: 'Comprar ovillos del mismo color pero de diferente lote de tintada',
        consequence: 'Bajo la luz del sol se apreciará una franja de tono más claro o más oscuro a mitad de tu jersey o manta.',
        solution: 'Comprueba el número de lote (Lot / Dye Lot) en la etiqueta de todos los ovillos antes de pasar por caja para asegurarte de que son idénticos.'
      },
      {
        mistake: 'Ignorar la muestra de tensión al tejer prendas de ropa a medida',
        consequence: 'Horas de trabajo que resultan en una talla equivocada imposible de ponerte.',
        solution: 'Teje siempre una pequeña muestra de 12x12 cm con el punto principal del patrón, lávala y mídelo con una regla antes de montar los puntos definitivos.'
      },
      {
        mistake: 'Usar fibras sintéticas brillantes que resbalan demasiado en agujas metálicas',
        consequence: 'Los puntos se abren y la tensión se vuelve incontrolable.',
        solution: 'Si tejes con lino, viscosa o sedas resbaladizas, pásate a ganchillos de madera o bambú que frenan de forma natural la fibra.'
      }
    ],
    faqs: [
      {
        question: '¿Qué significa el término "DK" o "Worsted" que veo en los patrones?',
        answer: 'Son las denominaciones anglosajonas estándar para el grosor de la fibra: DK significa grosor medio (para aguja de 3.5 a 4.5 mm) y Worsted / Aran significa grosor semigrueso (para aguja de 5.0 a 6.0 mm).'
      },
      {
        question: '¿Se puede tejer un hilo doble para usar una aguja más grande?',
        answer: '¡Totalmente! Poner dos hebras de hilo fino (por ejemplo dos cabos de Fingering) equivale aproximadamente a tejer un grosor DK con aguja de 4.0 mm, creando un precioso efecto jaspeado si combinas colores diferentes.'
      },
      {
        question: '¿Cómo sé qué aguja usar si he perdido la etiqueta del ovillo?',
        answer: 'Aplica el truco del cuello del ganchillo: apoya la hebra en la hendidura de la aguja. El hilo debe llenar la hendidura sin sobresalir excesivamente por los lados ni quedar hundido en el fondo.'
      },
      {
        question: '¿Por qué la misma aguja produce un tejido diferente en dos personas?',
        answer: 'Porque cada persona tiene una tensión biomecánica propia (la fuerza con la que sujeta el hilo con la mano izquierda y la altura a la que eleva el bucle). Por eso los patrones dan la tensión de muestra y no solo el número de aguja.'
      }
    ],
    relatedSlugs: [
      'materiales-basicos-crochet-primera-vez',
      'como-empezar-crochet-guia-principiantes',
      'como-sostener-ganchillo-lana-paso-a-paso',
      'top-verano-crochet-brisa-patron-gratis'
    ]
  },
  {
    id: 'art-primeros-pasos-4',
    slug: 'como-sostener-ganchillo-lana-paso-a-paso',
    title: 'Cómo sostener el ganchillo y la lana (con fotos paso a paso)',
    metaTitle: 'Cómo sostener el ganchillo y la lana: postura paso a paso',
    metaDescription: 'Aprende los dos métodos para agarrar el ganchillo (cuchillo y lápiz) y cómo tensar la hebra entre los dedos sin dolor ni tensión en la muñeca.',
    category: 'primeros-pasos',
    categoryLabel: 'Primeros pasos',
    difficulty: 'Principiante',
    readingTime: '12 min de lectura',
    date: '4 de Noviembre, 2026',
    isoDate: '2026-11-04',
    author: AUTHORS.clara,
    heroImage: '/assets/images/holding_crochet_hook_1793795756244',
    pinterestImage: '/assets/images/pin_holding_hook_1793795803271',
    imageAlt: 'Fotografía en primer plano de manos tejedoras mostrando la colocación de la hebra por el meñique e índice y la sujeción del ganchillo de madera con agarre de cuchillo',
    estimatedTime: 'Práctica postural guiada (lectura: 12 min)',
    hookSize: '4.0 mm ergonómico',
    excerpt: '¿Se te cansa la mano al poco rato de tejer o sientes que la hebra se te escapa entre los dedos? Te muestro con fotografías paso a paso los dos agarres principales y la colocación exacta del hilo para tejer relajada durante horas.',
    tableOfContents: [
      { id: 'el-secreto-de-la-comodidad', title: '1. El secreto de tejer sin dolor ni tensión' },
      { id: 'agarre-cuchillo-vs-lapiz', title: '2. Agarre de cuchillo frente a agarre de lápiz: pros y contras' },
      { id: 'paso-a-paso-sujecion-ganchillo', title: '3. Paso a paso: cómo coger el ganchillo correctamente' },
      { id: 'como-enhebrar-la-mano', title: '4. El recorrido de la hebra por la mano izquierda para tensar' },
      { id: 'guia-crochet-para-personas-zurdas', title: '5. ¿Eres zurda? Cómo invertir las manos para tejer' },
      { id: 'ergonomia-y-descansos', title: '6. Ergonomía tejedora: hombros, muñecas y pausas saludables' },
      { id: 'errores-comunes', title: '7. Errores habituales de agarre y postura' },
      { id: 'preguntas-frecuentes', title: '8. Preguntas frecuentes sobre postura y tensión' },
      { id: 'conclusion-postura', title: '9. Conclusión: encuentra tu propio estilo' }
    ],
    materials: [
      { item: 'Un ganchillo con mango ergonómico suave (4.0 mm)', detail: 'Permite descansar la yema del pulgar en la zona plana.' },
      { item: 'Un ovillo de algodón suave de color claro' },
      { item: 'Un cojín para apoyar los codos o el antebrazo' }
    ],
    contentSections: [
      {
        id: 'el-secreto-de-la-comodidad',
        title: '1. El secreto de tejer sin dolor ni tensión',
        paragraphs: [
          'Cuando alguien empieza a tejer, el cuerpo reacciona como cuando aprendemos a conducir: agarramos el ganchillo con una fuerza descomunal, subimos los hombros hasta las orejas y contenemos la respiración. Al cabo de veinte minutos, nos duelen el cuello, la muñeca y los nudillos.',
          'Quiero decirte algo fundamental: tejer a ganchillo NO debe doler jamás. Si sientes dolor, no es que tus manos sean débiles; es que estás aplicando una técnica de agarre antinatural o una tensión excesiva.',
          'Tus manos van a trabajar en equipo como un baile coordinado: la mano dominante (la derecha para las diestras) dirige el ganchillo; la mano no dominante (la izquierda) controla el suministro de lana y sostiene la base del tejido. En esta guía te enseño paso a paso a colocarlas para que tejer sea puro disfrute.',
          '[FOTO: Detalle cenital de tejedora sentada en sillón con postura relajada, codos apoyados en cojines y manos tejiendo a la altura del pecho] [ALT: Postura corporal correcta para tejer crochet relajada con apoyo de antebrazos]'
        ]
      },
      {
        id: 'agarre-cuchillo-vs-lapiz',
        title: '2. Agarre de cuchillo frente a agarre de lápiz: pros y contras',
        paragraphs: [
          'En el mundo del crochet existen dos escuelas principales para sostener la aguja. No hay una "correcta" y otra "incorrecta": la correcta es la que a ti te resulte cómoda.',
          '• **Agarre de Cuchillo (Knife Grip):** Sostienes el ganchillo por encima, con la palma de la mano sobre el mango, exactamente como cuando cortas con un cuchillo de mesa. El dedo pulgar descansa en la cara delantera y el índice se apoya ligeramente en la parte superior para guiar la punta. Es el método más popular en Europa y Norteamérica porque distribuye el esfuerzo en todo el brazo y reduce la tensión en los tendones de la muñeca.\n• **Agarre de Lápiz (Pencil Grip):** Sostienes el ganchillo por debajo, entre las yemas del pulgar y el índice, descansando sobre el dedo corazón como si fueras a escribir una carta con bolígrafo. Ofrece una precisión milimétrica ideal para trabajos con hilo muy fino y encajes, aunque a algunas personas les carga más la articulación del pulgar si tejen con lanas gruesas.',
          'Mi recomendación: prueba ambos durante quince minutos en tu [primera muestra de cadenetas](/blog/nudo-corredizo-cadeneta-primer-paso-crochet) y escucha las sensaciones de tu cuerpo.'
        ]
      },
      {
        id: 'paso-a-paso-sujecion-ganchillo',
        title: '3. Paso a paso: cómo coger el ganchillo correctamente',
        paragraphs: [
          'Vamos a colocar la mano dominante con el agarre de cuchillo, que es el más ergonómico para empezar:'
        ],
        steps: [
          {
            number: 1,
            heading: 'Localiza la hendidura o zona plana del mango',
            text: 'Casi todos los ganchillos ergonómicos tienen una zona rebajada donde suele venir grabado el número de milímetros. Ese es el soporte natural para tu dedo pulgar.',
            tip: 'No cojas el ganchillo ni muy cerca de la punta metálica ni en el extremo final del mango; colócate justo en esa zona plana de apoyo.'
          },
          {
            number: 2,
            heading: 'Apoya el pulgar en el frente y el corazón por detrás',
            text: 'Coloca la yema del pulgar sobre la zona plana frontal del mango. El dedo corazón se apoya por detrás para hacer pinza suave y estabilizar la aguja.',
            tip: 'Imagina que sostienes un pajarito: con suficiente firmeza para que no se escape, pero sin apretar para no hacerle daño.'
          },
          {
            number: 3,
            heading: 'Apoya el dedo índice como guía superior',
            text: 'Deja que el dedo índice descanse suavemente a lo largo de la parte superior del cuello del ganchillo. Este dedo te servirá para frenar el bucle cuando hagas lazadas complejas.',
            tip: 'Mantén la muñeca en línea recta con el antebrazo; evita doblarla en ángulos forzados.'
          }
        ]
      },
      {
        id: 'como-enhebrar-la-mano',
        title: '4. El recorrido de la hebra por la mano izquierda para tensar',
        paragraphs: [
          'Esta es la habilidad mágica del crochet. La mano que sostiene la lana debe cumplir dos misiones a la vez: regular la tensión del hilo que viene del ovillo y sujetar la labor para que no se mueva.',
          'Este es el método de enhebrado clásico que enseño en mis clases:',
          '1. Abre la palma de tu mano izquierda mirando hacia ti.\n2. Pasa la hebra que viene del ovillo entre el dedo meñique y el anular.\n3. Rodea el dedo meñique dando una vuelta (este giro actúa como freno regulador natural).\n4. Cruza el hilo por detrás de los dedos anular y corazón.\n5. Pasa el hilo por encima de tu dedo índice, de atrás hacia adelante.\n6. Junta las yemas del pulgar y el dedo corazón de esa misma mano para pellizcar la base del punto que estás tejiendo.',
          '[FOTO: Secuencia de 4 fotos macro mostrando el recorrido del hilo paso a paso: entrada por el meñique, cruce por la palma, salida por el índice y pinza con pulgar] [ALT: Secuencia paso a paso del hilo recorriendo los dedos de la mano izquierda para tejer crochet]',
          'Tu dedo índice extendido actúa como un mástil flexible: si lo levantas, tensas la hebra; si lo bajas, liberas hilo. Con la práctica, este movimiento se volverá tan automático como parpadear.'
        ]
      },
      {
        id: 'guia-crochet-para-personas-zurdas',
        title: '5. ¿Eres zurda o zurdo? Cómo invertir las manos para tejer',
        paragraphs: [
          'Si tu mano dominante es la izquierda, ¡el crochet también es 100% para ti! No necesitas agujas especiales ni patrones distintos: la técnica es exactamente la misma, con la única particularidad de que debes invertir el papel de ambas manos como si te miraras frente a un espejo:',
          '• **Mano izquierda (tu mano dominante):** Sostendrá el ganchillo (mediante agarre de cuchillo o de lápiz, según te resulte más natural). Será tu mano activa encargada de hacer las lazadas, entrar en los puntos y tejer.\n• **Mano derecha (tu mano guía):** Sostendrá la hebra de lana y regulará la tensión. Harás el recorrido del hilo por tu mano derecha (entrando por el meñique y saliendo por encima del índice) y usarás la pinza de pulgar y corazón derechos para sostener firmemente la base de la labor.\n• **Dirección natural del tejido:** Mientras que las personas diestras avanzan de derecha a izquierda, las personas zurdas tejen de izquierda a derecha de forma totalmente fluida y ergonómica.\n• **Patrones y aumentos:** Todos los puntos básicos (cadenetas, puntos bajos, puntos altos) y conteos de vueltas se tejen exactamente igual; no tienes que cambiar ninguna cifra.\n• **Consejo de oro para seguir vídeos de diestros:** Si sigues tutoriales en vídeo grabados por diestras, utiliza una extensión de navegador de "modo espejo" (mirror/flip horizontal). Al voltear la pantalla, verás los movimientos ejecutados con la mano izquierda tal como tú los haces.',
          '[FOTO: Plano cenital de manos de tejedora zurda sosteniendo el ganchillo con la mano izquierda y tensando la hebra con la mano derecha sobre base de madera clara] [ALT: Posición de manos para tejer crochet para personas zurdas con ganchillo en mano izquierda]'
        ]
      },
      {
        id: 'ergonomia-y-descansos',
        title: '6. Ergonomía tejedora: hombros, muñecas y pausas saludables',
        paragraphs: [
          'Tejer es un ejercicio de micro-movimientos repetitivos. Para que puedas tejer toda tu vida sin contracturas ni dolores articulares, incorpora estos hábitos desde hoy:',
          '• **Apoya los codos:** No tejas con los brazos en el aire. Coloca un cojín de lactancia o dos cojines normales en tu regazo para descansar los antebrazos.\n• **Buena iluminación:** Teje siempre con luz natural o una lámpara flexible cálida dirigida directamente a tus manos para no forzar la vista.\n• **Pausas y estiramientos:** Haz pausas cada cierto tiempo para estirar manos y muñecas. Suelta el ganchillo, abre y cierra las manos extendiendo suavemente los dedos y rota los hombros hacia atrás para relajar la musculatura.'
        ]
      },
      {
        id: 'errores-comunes',
        title: '7. Errores habituales de agarre y postura',
        paragraphs: [
          'Corregir estos vicios posturales en tus primeros días te ahorrará meses de molestias.'
        ]
      },
      {
        id: 'preguntas-frecuentes',
        title: '8. Preguntas frecuentes sobre postura y tensión',
        paragraphs: [
          'Respuestas a las dudas más comunes sobre el manejo de las manos en crochet.'
        ]
      },
      {
        id: 'conclusion-postura',
        title: '9. Conclusión: encuentra tu propio estilo y disfruta',
        paragraphs: [
          'No hay dos tejedoras en el mundo que cojan el hilo exactamente igual. Algunas dan dos vueltas en el meñique, otras pasan el hilo entre el índice y el corazón y otras tejen con el ganchillo inclinado hacia el pecho. La mejor técnica es la que te permite tejer puntos uniformes sin que te duela nada.',
          'Ahora que tus manos están listas y colocadas, ponte manos a la obra con el siguiente tutorial indispensable: [nudo corredizo y cadeneta: tu primer paso en crochet](/blog/nudo-corredizo-cadeneta-primer-paso-crochet).',
          '[FOTO: Primer plano sonriente de tejedora sosteniendo su labor con postura cómoda en un rincón de lectura acogedor] [ALT: Tejedora relajada tejiendo en sillón cómodo]'
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Apretar el ganchillo con fuerza excesiva ("blanquear los nudillos")',
        consequence: 'Dolor y calambres en la palma de la mano a los quince minutos de sesión.',
        solution: 'Haz pausas conscientes: cada vez que acabes una hilera, abre las manos y sacúdelas suavemente. La aguja se sostiene con firmeza ligera, no con fuerza.'
      },
      {
        mistake: 'Pellizcar el tejido demasiado lejos del punto donde se clava la aguja',
        consequence: 'La labor se bambolea en el aire, cuesta clavar el ganchillo y el punto se abre deforma.',
        solution: 'Sujeta siempre la base del punto inmediatamente anterior con las yemas de tu pulgar y dedo corazón, a menos de un centímetro del ganchillo.'
      },
      {
        mistake: 'Tejer con los codos suspendidos en el aire sin punto de apoyo',
        consequence: 'Sobrecarga muscular en trapecios, cervicales y hombros.',
        solution: 'Coloca un cojín mullido sobre tus muslos para apoyar los codos y mantener los hombros abajo y relajados.'
      },
      {
        mistake: 'Intentar forzar un agarre que viste en un vídeo aunque te resulte incómodo',
        consequence: 'Frustración y movimientos torpes antinaturales.',
        solution: 'Si el agarre de lápiz te molesta, pásate al de cuchillo sin dudarlo; miles de patronistas internacionales tejen con agarre de cuchillo.'
      }
    ],
    faqs: [
      {
        question: '¿Por qué la hebra se me escapa todo el rato del dedo índice?',
        answer: 'Suele ocurrir porque no has creado un punto de fricción previo. Asegúrate de dar una vuelta con la hebra alrededor del dedo meñique antes de llevarla hacia el índice; el meñique es el freno que retiene el hilo.'
      },
      {
        question: '¿Se puede cambiar de agarre de cuchillo a lápiz según el proyecto?',
        answer: '¡Por supuesto! Muchas tejedoras usan agarre de cuchillo para mantas y jerséis gruesos, y cambian a agarre de lápiz cuando tejen tapetes con hilos de encaje finísimos.'
      },
      {
        question: '¿Cómo sé si mi tensión es demasiado apretada?',
        answer: 'Si te cuesta introducir la punta del ganchillo en el punto de la vuelta anterior, estás tejiendo demasiado apretada. El bucle en el ganchillo debe deslizarse hacia adelante y hacia atrás con un suave empujón.'
      },
      {
        question: '¿Qué ejercicios de estiramiento van mejor para las manos?',
        answer: 'Extiende el brazo con la palma abierta hacia arriba y, con la otra mano, tira suavemente de los dedos hacia abajo durante 15 segundos. Luego rota las muñecas en círculos lentos en ambos sentidos.'
      }
    ],
    relatedSlugs: [
      'nudo-corredizo-cadeneta-primer-paso-crochet',
      'como-empezar-crochet-guia-principiantes',
      'materiales-basicos-crochet-primera-vez',
      'elegir-lana-ganchillo-adecuados-proyecto'
    ]
  },
  {
    id: 'art-primeros-pasos-5',
    slug: 'nudo-corredizo-cadeneta-primer-paso-crochet',
    title: 'Nudo corredizo y cadeneta: tu primer paso en crochet',
    metaTitle: 'Nudo corredizo y cadeneta: tu primer paso en crochet',
    metaDescription: 'Aprende a hacer el nudo corredizo y la cadeneta de inicio en crochet. Guía con fotos paso a paso, trucos de tensión y errores habituales.',
    category: 'primeros-pasos',
    categoryLabel: 'Primeros pasos',
    difficulty: 'Principiante',
    readingTime: '13 min de lectura',
    date: '4 de Noviembre, 2026',
    isoDate: '2026-11-04',
    author: AUTHORS.clara,
    heroImage: '/assets/images/crochet_slip_knot_chain_1793795756670',
    pinterestImage: '/assets/images/pin_slip_knot_1793795803743',
    imageAlt: 'Primer plano macro de una aguja de ganchillo sosteniendo un nudo corredizo perfecto y una cadeneta recta con puntos uniformes en hilo de algodón verde salvia',
    estimatedTime: 'Tutorial práctico guiado (30 min de práctica)',
    hookSize: '4.0 mm o 5.0 mm',
    excerpt: 'Toda labor de crochet comienza con dos gestos mágicos: el nudo corredizo que sujeta la lana a la aguja y la cadeneta que forma los cimientos de tu tejido. Te enseño a tejerlos paso a paso con eslabones perfectos.',
    tableOfContents: [
      { id: 'los-cimientos-del-crochet', title: '1. Los cimientos de cualquier labor a ganchillo' },
      { id: 'metodos-nudo-corredizo', title: '2. Dos métodos sencillos para hacer el nudo corredizo' },
      { id: 'paso-a-paso-cadeneta', title: '3. Paso a paso: cómo tejer la cadeneta de inicio' },
      { id: 'anatomia-de-la-cadeneta', title: '4. Anatomía de la cadeneta: hebra superior, inferior y lomito' },
      { id: 'como-contar-puntos', title: '5. Cómo contar las cadenetas sin equivocarte jamás' },
      { id: 'errores-comunes', title: '6. Errores habituales con el nudo y la cadeneta' },
      { id: 'preguntas-frecuentes', title: '7. Preguntas frecuentes sobre cadenetas' },
      { id: 'conclusion-primeros-puntos', title: '8. Conclusión: ¡ya eres tejedora!' }
    ],
    materials: [
      { item: 'Un ganchillo de 4.0 mm o 5.0 mm', detail: 'Una aguja un poco más gruesa te facilitará ver los eslabones con nitidez.' },
      { item: 'Un ovillo de algodón peinado color crudo o verde salvia', detail: 'Evita hebras deshilachables o lanas con pelo.' },
      { item: 'Un marcador de punto para fijar la última cadeneta' }
    ],
    contentSections: [
      {
        id: 'los-cimientos-del-crochet',
        title: '1. Los cimientos de cualquier labor a ganchillo',
        paragraphs: [
          'Si un edificio necesita unos cimientos sólidos para no derrumbarse, una labor de crochet necesita una cadeneta bien tejida para no torcerse ni encogerse.',
          'El nudo corredizo y la cadeneta de inicio (que en los patrones en español verás abreviada como **cad** y en inglés como **ch**) son los dos primeros movimientos que aprenderás. Son tan sencillos que, una vez que tus dedos memoricen el gesto, podrás hacerlos mientras charlas o ves tu serie favorita.',
          'En esta lección vamos a aprender a tejer una hilera de cadenetas elásticas, rectas y con la tensión perfecta para que tu primera fila de puntos bajos sea coser y cantar.',
          '[FOTO: Vista cenital de una cadeneta de crochet de unos 20 eslabones extendida en línea recta sobre una tela de lino beige] [ALT: Cadeneta de inicio de crochet recta y uniforme sobre fondo de lino]'
        ]
      },
      {
        id: 'metodos-nudo-corredizo',
        title: '2. Dos métodos sencillos para hacer el nudo corredizo',
        paragraphs: [
          'El nudo corredizo se llama así porque, al tirar de la hebra larga (la que viene del ovillo), el bucle se ajusta al grosor de cualquier ganchillo sin deformarse. Te enseño mis dos métodos preferidos:'
        ],
        subsections: [
          {
            title: 'Método A: El truco de los dos dedos (el más rápido)',
            text: 'Deja unos 10 cm de cabo suelto. Junta tus dedos índice y corazón de la mano izquierda y enrolla la lana alrededor de ellos formando una "X" en la parte superior. Con la mano derecha o con la punta del ganchillo, pasa por debajo de la primera hebra, engancha la segunda hebra y tira de ella hacia afuera. Retira los dedos y tira suavemente de ambos cabos para cerrar el lazo.'
          },
          {
            title: 'Método B: El bucle sobre la mesa (el más visual para debutar)',
            text: 'Apoya el hilo sobre una mesa formando un círculo o letra "e", con el cabo suelto por debajo del hilo del ovillo. Ahora dobla la hebra del ovillo por detrás del círculo y pásala por dentro del aro formando una orejita. Tira de esa orejita hacia arriba mientras sujetas los dos extremos inferiores. Ya tienes tu nudo corredizo.'
          }
        ]
      },
      {
        id: 'paso-a-paso-cadeneta',
        title: '3. Paso a paso: cómo tejer la cadeneta de inicio',
        paragraphs: [
          'Una vez que tienes el nudo corredizo montado en la aguja, coloca la hebra en tu mano izquierda según aprendimos en [cómo sostener el ganchillo y la lana](/blog/como-sostener-ganchillo-lana-paso-a-paso). Ahora sigue estos tres movimientos rítmicos:'
        ],
        steps: [
          {
            number: 1,
            heading: 'Pellizca el nudo con pulgar y corazón',
            text: 'Con las yemas de los dedos pulgar y corazón de tu mano izquierda, sujeta con firmeza el nudo corredizo justo debajo del ganchillo. Esto evita que la labor gire en redondo cuando intentes pasar la aguja.',
            tip: 'Ve subiendo los dedos cada 2 o 3 cadenetas para pellizcar siempre el eslabón más cercano a la aguja.'
          },
          {
            number: 2,
            heading: 'Haz una lazada (tomar hebra)',
            text: 'Lleva la cabeza del ganchillo por debajo de la hebra que sostiene tu dedo índice, y luego pásala por encima hacia ti (movimiento de atrás hacia adelante). En crochet esto se llama formalmente "hacer una lazada" o "echar hebra".',
            tip: 'Asegúrate de que la ranura de la cabeza del ganchillo mira hacia el tejido.'
          },
          {
            number: 3,
            heading: 'Gira la punta hacia abajo y atraviesa el bucle',
            text: 'Gira levemente la punta del ganchillo hacia abajo (mirando hacia tus rodillas) para que el gancho atrape el hilo sin soltarlo. Desliza suavemente la aguja hacia atrás a través del bucle que tenías en el ganchillo. ¡Acabas de completar tu primera cadeneta!',
            tip: 'Eleva el ganchillo un milímetro hacia arriba para darle holgura al nuevo bucle antes de hacer la siguiente lazada.'
          }
        ]
      },
      {
        id: 'anatomia-de-la-cadeneta',
        title: '4. Anatomía de la cadeneta: hebra superior, inferior y lomito',
        paragraphs: [
          'Si miras de cerca una cadeneta de ganchillo, verás que tiene dos caras completamente diferentes:',
          '• **La cara delantera:** Parece una pequeña trenza de espigas. Cada eslabón está formado por dos hebras que dibujan una "V": la **hebra superior** (la más lejana a ti) y la **hebra inferior** (la más cercana a ti).\n• **La cara trasera:** Si giras la cadeneta sobre sí misma, verás una línea de pequeños bultitos o costillitas en el centro. Eso se llama el **lomito trasero** (back bump en inglés).',
          '[FOTO: Foto macro con etiquetas señalando la hebra delantera, la hebra trasera y el lomito posterior en una cadeneta gruesa verde salvia] [ALT: Anatomía de la cadeneta de crochet mostrando la espiga delantera y el lomito trasero]',
          '¿Por dónde se clava la aguja al tejer la primera vuelta? Tienes tres opciones válidas:\n1. Bajo la hebra superior de la V (la más fácil y habitual para novatas).\n2. Bajo las dos hebras de la V.\n3. Bajo el lomito trasero (produce un borde inferior elástico e idéntico al remate final de la labor, ideal para bufandas y mantas).'
        ]
      },
      {
        id: 'como-contar-puntos',
        title: '5. Cómo contar las cadenetas sin equivocarte jamás',
        paragraphs: [
          'Contar cadenetas suele ser el quebradero de cabeza de quien empieza. Aplica esta regla universal de tejedora:',
          '1. **El bucle que está actualmente sobre la aguja NO cuenta como cadeneta.**\n2. **El nudo corredizo del inicio TAMPOCO cuenta como cadeneta.**\n3. Solo cuentas las pequeñas "V" o espigas completas que quedan formadas entre el nudo y tu ganchillo.',
          'Si estás tejiendo una labor larga (por ejemplo 80 cadenetas para una manta), coloca un marcador de candado cada 20 puntos. Si te despistas, no tendrás que volver a contar desde el principio.'
        ]
      },
      {
        id: 'errores-comunes',
        title: '6. Errores habituales con el nudo y la cadeneta',
        paragraphs: [
          'Estos son los tres fallos que impiden que tu cadeneta sea perfecta y cómo ponerles remedio.'
        ]
      },
      {
        id: 'preguntas-frecuentes',
        title: '7. Preguntas frecuentes sobre cadenetas',
        paragraphs: [
          'Dudas resueltas sobre tensión, torsiones y cadenetas de subida.'
        ]
      },
      {
        id: 'conclusion-primeros-puntos',
        title: '8. Conclusión: ¡ya eres oficialmente tejedora!',
        paragraphs: [
          'Enhorabuena: con el nudo corredizo y la cadeneta has desbloqueado la llave de todo el universo del crochet. Cualquier manta, gorro, jersey o amigurumi que veas en revistas empieza exactamente con estos mismos movimientos.',
          'Practica tejiendo una cadeneta de 30 o 40 puntos hasta que todos los eslabones tengan el mismo tamaño. Cuando lo consigas, estarás lista para tu siguiente aventura: tejer el punto bajo en nuestra [guía completa para principiantes](/blog/como-empezar-crochet-guia-principiantes) o lanzarte a tejer tu primer [osito amigurumi paso a paso](/blog/primer-amigurumi-osito-paso-a-paso). ¡Bienvenida a esta maravillosa comunidad!',
          '[FOTO: Madeja de hilo pastel con una cadeneta larga ondulada rodeando una taza de té y unas tijeras vintage doradas] [ALT: Cadeneta de crochet ondeada alrededor de taza de té en mesa de manualidades]'
        ]
      }
    ],
    commonMistakes: [
      {
        mistake: 'Tejer las cadenetas demasiado apretadas con la punta del ganchillo',
        consequence: 'No podrás meter la aguja para tejer la primera fila y la base quedará encogida y deforme.',
        solution: 'Desliza cada nuevo bucle hasta la parte ancha del cuello del ganchillo para que tome su calibre real antes de enganchar la siguiente lazada.'
      },
      {
        mistake: 'Retorcer la cadeneta de inicio al cerrar en círculo o tejer la vuelta 1',
        consequence: 'La labor quedará torcida como una banda de Moebius y tendrás que desbaratarla entera.',
        solution: 'Antes de clavar la aguja en el primer punto, alisa la cadeneta sobre una mesa asegurándote de que todas las "V" miran hacia arriba en la misma dirección.'
      },
      {
        mistake: 'Contar el lazo que está en el ganchillo como si fuera un punto',
        consequence: 'Tendrás una cadeneta de menos en tu labor y el patrón no cuadrará.',
        solution: 'Recuerda el mantra: «El bucle del ganchillo es solo una herramienta en espera, nunca cuenta como punto tejido».'
      },
      {
        mistake: 'Apretar el nudo corredizo hasta estrangular la aguja',
        consequence: 'La aguja no se deslizará y forzarás la muñeca desde el primer movimiento.',
        solution: 'Deja que el bucle del nudo abrace el metal con un milímetro de holgura; debe moverse hacia adelante y hacia atrás libremente.'
      }
    ],
    faqs: [
      {
        question: '¿Qué es una "cadeneta de subida" o de giro?',
        answer: 'Es la cadeneta extra que se teje al final de una hilera para elevar el hilo a la altura de la siguiente fila de puntos. Para punto bajo se teje 1 cadeneta de subida; para punto medio alto, 2; y para punto alto, 3 cadenetas.'
      },
      {
        question: '¿Qué hago si mi cadeneta queda con unos puntos grandes y otros diminutos?',
        answer: 'Es síntoma normal de que tu mano izquierda aún no regula la tensión. Deshaz la cadeneta (es lo bonito del crochet: tiras del hilo y listo) y vuelve a tejerla despacio prestando atención a que cada lazada suba a la misma altura.'
      },
      {
        question: '¿Por qué la cadeneta se me riza como un tirabuzón?',
        answer: 'Ocurre cuando tejes con una tensión excesiva o cuando el hilo se retuerce al salir del ovillo. Aflójala un poco y tira del hilo desde el centro del ovillo en lugar de por fuera.'
      },
      {
        question: '¿Existe alguna alternativa a la cadeneta tradicional?',
        answer: 'Sí, las tejedoras avanzadas usan a veces la "cadeneta con punto bajo incorporado" (foundation single crochet), que teje la cadeneta y la primera fila a la vez, creando una base súper elástica.'
      }
    ],
    relatedSlugs: [
      'como-sostener-ganchillo-lana-paso-a-paso',
      'como-empezar-crochet-guia-principiantes',
      'materiales-basicos-crochet-primera-vez',
      'primer-amigurumi-osito-paso-a-paso'
    ]
  }
];
