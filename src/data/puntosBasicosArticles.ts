import { Article } from '../types';
import { AUTHORS } from './authors';

export const PUNTOS_BASICOS_ARTICLES: Article[] = [
  {
    id: 'art-puntos-basicos-1',
    slug: 'punto-bajo-punto-alto-medio-alto',
    title: 'Punto bajo, medio alto y punto alto: diferencias y cuándo usar cada uno',
    metaTitle: 'Diferencias entre punto bajo, medio alto y alto - crochetsimply',
    metaDescription: 'Aprende las diferencias clave entre el punto bajo, medio alto y alto. Cuándo usar cada uno para lograr la textura perfecta en tus labores.',
    category: 'puntos-basicos',
    categoryLabel: 'Puntos básicos',
    difficulty: 'Principiante',
    readingTime: '12 min de lectura',
    date: '4 de Noviembre, 2026',
    isoDate: '2026-11-04',
    author: AUTHORS.clara,
    heroImage: '/assets/images/yarn_hook_guide_1793795743901',
    imageAlt: 'Muestrario de puntos de crochet mostrando punto bajo, medio alto y punto alto',
    excerpt: '¿Te lías con los nombres de los puntos? Te enseño la diferencia física y estética entre el punto bajo, el punto medio alto y el punto alto, y por qué cada uno tiene su función.',
    tableOfContents: [
      { id: 'punto-bajo', title: '1. El punto bajo: la base de todo' },
      { id: 'punto-medio-alto', title: '2. Punto medio alto: el equilibrio' },
      { id: 'punto-alto', title: '3. Punto alto: velocidad y textura' },
      { id: 'cuando-usar-cual', title: '4. ¿Cuándo elegir cada punto?' },
      { id: 'errores-comunes', title: '5. Errores comunes al combinar alturas' },
      { id: 'faqs', title: '6. Preguntas frecuentes' },
      { id: 'conclusion', title: '7. Conclusión' }
    ],
    materials: [
      { item: 'Ganchillo de 4.0 mm' },
      { item: 'Ovillo de algodón peinado (color claro)' }
    ],
    contentSections: [
      {
        id: 'punto-bajo',
        title: '1. El punto bajo (pb): la base de todo',
        paragraphs: [
          'El punto bajo es el punto fundamental del crochet. Al ser el más corto, crea una trama densa y cerrada, casi sin espacios entre puntos. Es mi favorito absoluto para amigurumis, cestas y cualquier proyecto que necesite consistencia.',
          'Para hacerlo, inserta el ganchillo en el punto, toma hebra y sácala (tienes 2 bucles), toma hebra y cierra los 2 bucles.',
          '[FOTO: Plano detalle de una labor en punto bajo, mostrando la textura compacta] [ALT: Muestra de tejido apretado en punto bajo]'
        ]
      },
      {
        id: 'punto-medio-alto',
        title: '2. Punto medio alto (pma): el equilibrio',
        paragraphs: [
          'El medio alto es ligeramente más alto que el punto bajo y tiene una textura más aireada y elástica. Lo adoro para bufandas y mantas de bebé porque da suavidad sin perder forma.',
          'Se hace tomando hebra antes de insertar el ganchillo, después sacas hebra (tienes 3 bucles), tomas hebra y cierras los 3 a la vez.',
          '[FOTO: Plano detalle de una labor en punto medio alto] [ALT: Muestra de tejido en punto medio alto]'
        ]
      },
      {
        id: 'punto-alto',
        title: '3. Punto alto (pa): velocidad y textura',
        paragraphs: [
          'El punto alto es el más alto de los tres y el que más rápido crece. Es ideal para prendas de vestir, como tops o jerséis, donde buscas una caída fluida.',
          'Toma hebra, inserta ganchillo y saca hebra (3 bucles), toma hebra y cierra los 2 primeros, toma hebra y cierra los 2 siguientes.',
          '[FOTO: Plano detalle de una labor en punto alto] [ALT: Muestra de tejido calado en punto alto]'
        ]
      },
      {
        id: 'cuando-usar-cual',
        title: '4. ¿Cuándo elegir cada punto?',
        paragraphs: [
          'Elige punto bajo para estabilidad y densidad. Elige medio alto para un acabado suave y elástico. Elige punto alto para rapidez, drapeado y prendas de vestir.'
        ]
      },
      {
        id: 'errores-comunes',
        title: '5. Errores comunes al combinar alturas',
        paragraphs: [
          'El error más común es no ajustar la tensión al cambiar entre puntos de distinta altura, lo que provoca que el tejido se deforme o se abulte.',
          'Recuerda hacer pausas frecuentes para estirar manos y muñecas si tejes durante mucho tiempo.'
        ]
      }
    ],
    commonMistakes: [
      { mistake: 'Saltar el primer punto de la vuelta', solution: 'Cuenta siempre los puntos al final de la vuelta.' },
      { mistake: 'No ajustar la tensión al cambiar de punto', solution: 'Practica la muestra antes de comenzar el proyecto.' }
    ],
    faqs: [
      { question: '¿Cuál es el más fácil?', answer: 'El punto bajo es el más fácil por su control.' },
      { question: '¿Se pueden mezclar en una misma vuelta?', answer: 'Sí, para crear texturas.' },
      { question: '¿Cuál avanza más rápido?', answer: 'El punto alto, por su altura.' }
    ],
    relatedSlugs: ['como-empezar-crochet-guia-principiantes', 'materiales-basicos-crochet-primera-vez']
  },
  {
    id: 'art-puntos-basicos-2',
    slug: 'anillo-magico-paso-a-paso',
    title: 'Cómo hacer un anillo mágico paso a paso',
    metaTitle: 'Cómo hacer un anillo mágico paso a paso - crochetsimply',
    metaDescription: 'Aprende a hacer el anillo mágico, la técnica fundamental para empezar a tejer en espiral proyectos como amigurumis.',
    category: 'puntos-basicos',
    categoryLabel: 'Puntos básicos',
    difficulty: 'Principiante',
    readingTime: '8 min de lectura',
    date: '4 de Noviembre, 2026',
    isoDate: '2026-11-04',
    author: AUTHORS.clara,
    heroImage: '/assets/images/crochet_slip_knot_chain_1793795756670',
    imageAlt: 'Manos haciendo un anillo mágico de hilo',
    excerpt: '¿Te frustra el agujero central al empezar amigurumis? El anillo mágico es tu solución para cerrarlo completamente. Paso a paso.',
    tableOfContents: [
        { id: 'que-es', title: '1. ¿Qué es el anillo mágico?' },
        { id: 'paso-a-paso', title: '2. Paso a paso' },
        { id: 'errores', title: '3. Errores' }
    ],
    materials: [{item: 'Ganchillo y ovillo'}],
    contentSections: [
        {
            id: 'que-es',
            title: '1. ¿Qué es el anillo mágico?',
            paragraphs: ['Es un bucle ajustable que permite cerrar completamente el centro de tejidos circulares, eliminando ese hueco molesto que queda al empezar con cadenetas.']
        },
        {
            id: 'paso-a-paso',
            title: '2. Paso a paso',
            steps: [
                {number: 1, heading: 'Forma el lazo', text: 'Crea un bucle con el hilo'},
                {number: 2, heading: 'Teje puntos', text: 'Teje los puntos dentro del bucle'},
                {number: 3, heading: 'Tira y cierra', text: 'Tira de la cola corta'}
            ]
        }
    ],
    relatedSlugs: ['punto-bajo-punto-alto-medio-alto']
  },
  {
    id: 'art-puntos-basicos-3',
    slug: 'aumentos-disminuciones-sin-que-se-noten',
    title: 'Aumentos y disminuciones en crochet: cómo hacerlos sin que se noten',
    metaTitle: 'Aumentos y disminuciones invisibles - crochetsimply',
    metaDescription: 'Domina los aumentos y disminuciones invisibles para lograr acabados perfectos en tus amigurumis y prendas.',
    category: 'puntos-basicos',
    categoryLabel: 'Puntos básicos',
    difficulty: 'Intermedio',
    readingTime: '10 min de lectura',
    date: '4 de Noviembre, 2026',
    isoDate: '2026-11-04',
    author: AUTHORS.clara,
    heroImage: '/assets/images/yarn_skeins_palette_1793792198935',
    imageAlt: 'Muestra de aumentos y disminuciones',
    excerpt: '¿Se ven huecos en tus aumentos o disminuciones? Aprende las técnicas profesionales para hacerlas invisibles.',
    tableOfContents: [
        { id: 'aumentos', title: '1. Aumentos invisibles' },
        { id: 'disminuciones', title: '2. Disminuciones invisibles' }
    ],
    materials: [{item: 'Ganchillo y ovillo'}],
    contentSections: [
        {
            id: 'aumentos',
            title: '1. Aumentos invisibles',
            paragraphs: ['Teje dos puntos en el mismo punto de la vuelta anterior sin dejar espacios extra.']
        },
        {
            id: 'disminuciones',
            title: '2. Disminuciones invisibles',
            paragraphs: ['Toma solo la hebra delantera de los dos puntos siguientes y ciérralos juntos.']
        }
    ],
    relatedSlugs: ['punto-bajo-punto-alto-medio-alto']
  },
  {
    id: 'art-puntos-basicos-4',
    slug: 'glosario-abreviaturas-crochet-espanol',
    title: 'Glosario de abreviaturas y símbolos de crochet en español',
    metaTitle: 'Glosario crochet en español - crochetsimply',
    metaDescription: 'Tu guía de referencia rápida para entender las abreviaturas y símbolos más comunes en los patrones de crochet en español.',
    category: 'puntos-basicos',
    categoryLabel: 'Puntos básicos',
    difficulty: 'Principiante',
    readingTime: '5 min de lectura',
    date: '4 de Noviembre, 2026',
    isoDate: '2026-11-04',
    author: AUTHORS.clara,
    heroImage: '/assets/images/crochet_workshop_studio_1793792199359',
    imageAlt: 'Lista de abreviaturas',
    excerpt: '¿Qué significa pb, pa, AM? Este glosario te ayudará a descifrar cualquier patrón.',
    tableOfContents: [
        { id: 'glosario', title: '1. Glosario' }
    ],
    materials: [],
    contentSections: [
        {
            id: 'glosario',
            title: '1. Glosario de abreviaturas',
            paragraphs: ['pb: punto bajo. pa: punto alto. pma: punto medio alto. AM: Anillo Mágico. aum: aumento. dism: disminución.']
        }
    ],
    relatedSlugs: ['punto-bajo-punto-alto-medio-alto']
  },
  {
    id: 'art-puntos-basicos-5',
    slug: 'errores-tipicos-principiantes',
    title: 'Errores típicos de principiantes y cómo arreglarlos',
    metaTitle: 'Errores comunes crochet principiantes - crochetsimply',
    metaDescription: 'Descubre los 5 errores más comunes al empezar a tejer crochet y cómo solucionarlos fácilmente.',
    category: 'puntos-basicos',
    categoryLabel: 'Puntos básicos',
    difficulty: 'Principiante',
    readingTime: '8 min de lectura',
    date: '4 de Noviembre, 2026',
    isoDate: '2026-11-04',
    author: AUTHORS.clara,
    heroImage: '/assets/images/crochet_beginner_guide_1793795743138',
    imageAlt: 'Tejido con error',
    excerpt: '¿El tejido se curva? ¿Pierdes puntos? Aquí tienes las soluciones a los errores más frecuentes.',
    tableOfContents: [
        { id: 'errores', title: '1. Errores más comunes' }
    ],
    materials: [],
    contentSections: [
        {
            id: 'errores',
            title: '1. Errores más comunes',
            paragraphs: ['Tejer demasiado apretado, saltar puntos, o no usar marcadores. Todo tiene solución.']
        }
    ],
    relatedSlugs: ['punto-bajo-punto-alto-medio-alto']
  }
];
