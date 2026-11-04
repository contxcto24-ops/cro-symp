import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Sparkles, HelpCircle, ArrowRight, Check, Copy } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface StitchDefinition {
  abbr: string;
  nameEs: string;
  nameLatam: string;
  nameUs: string;
  nameUk: string;
  category: 'basicos' | 'aumentos' | 'fantasia' | 'tecnicas';
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  description: string;
  howTo: string;
  proTip?: string;
}

const GLOSSARY_ITEMS: StitchDefinition[] = [
  {
    abbr: 'AM',
    nameEs: 'Anillo Mágico',
    nameLatam: 'Círculo Mágico / Anillo Deslizado',
    nameUs: 'Magic Ring (MR) / Magic Circle',
    nameUk: 'Magic Ring',
    category: 'basicos',
    difficulty: 'Principiante',
    description: 'Bucle inicial ajustable que permite tejer en redondo y cerrar el centro por completo sin dejar ningún hueco visible.',
    howTo: 'Envuelve el hilo alrededor de dos dedos formando una "X". Introduce el ganchillo por debajo de la primera hebra, engancha la segunda, gira y haz 1 cadeneta para fijar. Teje los puntos necesarios dentro del anillo y tira firmemente de la cola corta para cerrarlo.',
    proTip: 'En amigurumis, tira despacio pero con firmeza constante para no romper la hebra.'
  },
  {
    abbr: 'cad',
    nameEs: 'Cadeneta al aire',
    nameLatam: 'Cadena',
    nameUs: 'Chain stitch (ch)',
    nameUk: 'Chain (ch)',
    category: 'basicos',
    difficulty: 'Principiante',
    description: 'El punto de inicio fundamental de casi todas las labores rectas y la base para dar altura al comienzo de cada vuelta.',
    howTo: 'Haz un nudo corredizo en la aguja. Toma hebra con el ganchillo (lazada) y pásala a través del bucle que tienes en la aguja. Cada repetición crea un eslabón o cadeneta.',
    proTip: 'No aprietes la cadeneta inicial; usa una aguja medio milímetro más gruesa si sueles tejer muy ajustado.'
  },
  {
    abbr: 'pb / mp',
    nameEs: 'Punto Bajo',
    nameLatam: 'Medio Punto',
    nameUs: 'Single Crochet (sc)',
    nameUk: 'Double Crochet (dc)',
    category: 'basicos',
    difficulty: 'Principiante',
    description: 'Punto corto, denso y resistente. Es el punto por excelencia de los amigurumis porque crea un tejido compacto que no deja escapar el relleno.',
    howTo: 'Inserta la aguja en el punto de la vuelta anterior, toma hebra y saca el bucle (2 bucles en la aguja). Toma hebra de nuevo y pásala a través de ambos bucles.',
    proTip: 'Para contar vueltas en espiral, fíjate en las pequeñas "V" que forma el punto en la superficie.'
  },
  {
    abbr: 'mpa / mv',
    nameEs: 'Medio Punto Alto',
    nameLatam: 'Media Vareta',
    nameUs: 'Half Double Crochet (hdc)',
    nameUk: 'Half Treble Crochet (htr)',
    category: 'basicos',
    difficulty: 'Principiante',
    description: 'Tiene una altura intermedia entre el punto bajo y el punto alto. Produce un tejido suave, esponjoso y con excelente elasticidad para gorros y bufandas.',
    howTo: 'Toma hebra antes de insertar la aguja. Inserta en el punto base, toma hebra y saca (3 bucles en la aguja). Toma hebra una vez más y pásala a través de los tres bucles juntos de una sola vez.',
    proTip: 'Crea una bonita tercera hebra en la parte trasera del punto que puedes aprovechar para texturas decorativas.'
  },
  {
    abbr: 'pa / v',
    nameEs: 'Punto Alto',
    nameLatam: 'Vareta / Punto Entero',
    nameUs: 'Double Crochet (dc)',
    nameUk: 'Treble Crochet (tr)',
    category: 'basicos',
    difficulty: 'Principiante',
    description: 'Uno de los puntos más populares y versátiles del crochet. Rápido de tejer, con buena caída y ligereza, ideal para mantas, tops de verano y prendas de vestir.',
    howTo: 'Toma hebra, inserta la aguja en el punto, toma hebra y saca (3 bucles). Toma hebra y pasa por los primeros 2 bucles (quedan 2). Toma hebra de nuevo y pasa por los 2 restantes.',
    proTip: 'Para subir de vuelta en punto alto, 2 o 3 cadenetas de altura suelen ser equivalentes a un primer punto alto.'
  },
  {
    abbr: 'pad / vd',
    nameEs: 'Punto Alto Doble',
    nameLatam: 'Vareta Doble',
    nameUs: 'Treble Crochet (tr)',
    nameUk: 'Double Treble (dtr)',
    category: 'basicos',
    difficulty: 'Intermedio',
    description: 'Punto alto y calado que aporta gran flexibilidad y ligereza. Muy usado en motivos florales, encajes y cenefas bohemias.',
    howTo: 'Envuelve dos veces la hebra en la aguja antes de insertar. Inserta en el punto base, toma hebra (4 bucles). Ve cerrando de dos en dos bucles tomando hebra 3 veces consecutivas.',
    proTip: 'Mantén una tensión relajada para que el cuerpo del punto no se doble sobre sí mismo.'
  },
  {
    abbr: 'pr / pe',
    nameEs: 'Punto Raso / Punto Enano',
    nameLatam: 'Punto Deslizado',
    nameUs: 'Slip Stitch (sl st)',
    nameUk: 'Slip Stitch (ss)',
    category: 'basicos',
    difficulty: 'Principiante',
    description: 'El punto más plano de todos. No añade altura y se utiliza para cerrar vueltas en redondo, trasladar el hilo a otra zona o crear remates invisibles.',
    howTo: 'Inserta la aguja en el punto, toma hebra y pásala directamente a través del punto y del bucle que ya tenías en la aguja en un solo movimiento continuo.',
    proTip: 'No tenses demasiado el punto raso o te costará tejer sobre él en la siguiente vuelta.'
  },
  {
    abbr: 'aum',
    nameEs: 'Aumento',
    nameLatam: 'Aumento',
    nameUs: 'Increase (inc)',
    nameUk: 'Increase (inc)',
    category: 'aumentos',
    difficulty: 'Principiante',
    description: 'Técnica para agrandar la circunferencia o el ancho de una pieza tejiendo más de un punto en el mismo espacio.',
    howTo: 'Teje un punto normalmente (por ejemplo un pb) y, a continuación, teje un segundo punto exactamente en el mismo hueco donde acabas de tejer el anterior.',
    proTip: 'Distribuye los aumentos de forma alternada entre vueltas para evitar que los círculos se conviertan en hexágonos.'
  },
  {
    abbr: 'dism / 2pb jun',
    nameEs: 'Disminución',
    nameLatam: 'Disminución',
    nameUs: 'Decrease (dec) / sc2tog',
    nameUk: 'Decrease (dec)',
    category: 'aumentos',
    difficulty: 'Principiante',
    description: 'Reduce el conteo de puntos uniendo dos puntos contiguos en uno solo.',
    howTo: 'Inserta en el primer punto, toma hebra (2 bucles). Inserta en el siguiente punto, toma hebra (3 bucles). Toma hebra y pasa por los tres bucles a la vez.',
    proTip: 'En amigurumis, usa siempre la disminución invisible para un acabado liso sin huecos.'
  },
  {
    abbr: 'dism inv',
    nameEs: 'Disminución Invisible',
    nameLatam: 'Disminución Invisible',
    nameUs: 'Invisible Decrease (inv dec)',
    nameUk: 'Invisible Decrease',
    category: 'aumentos',
    difficulty: 'Principiante',
    description: 'La técnica maestra del amigurumi para reducir puntos sin dejar bultos ni estirar el tejido.',
    howTo: 'Inserta la aguja únicamente bajo la hebra delantera (front loop) del primer punto, y sin tomar hebra, pásala bajo la hebra delantera del segundo punto. Toma hebra, pasa por ambos bucles delanteros, toma hebra y cierra.',
    proTip: 'Tira suavemente antes de cerrar el punto para asegurar que no se abra la base.'
  },
  {
    abbr: 'BLO',
    nameEs: 'Hebra Trasera Únicamente',
    nameLatam: 'Tomar hebra posterior',
    nameUs: 'Back Loop Only (BLO)',
    nameUk: 'Back Loop Only (BLO)',
    category: 'tecnicas',
    difficulty: 'Intermedio',
    description: 'Al tejer solo por la hebra trasera se crea una cresta frontal en relieve y el tejido adquiere una gran elasticidad similar a un elástico de dos agujas.',
    howTo: 'Observa la "V" superior del punto: inserta la aguja solo bajo el hilo más alejado de ti y teje el punto indicado.',
    proTip: 'Perfecto para puños de jerséis, cuellos y cinturillas de tops.'
  },
  {
    abbr: 'FLO',
    nameEs: 'Hebra Delantera Únicamente',
    nameLatam: 'Tomar hebra delantera',
    nameUs: 'Front Loop Only (FLO)',
    nameUk: 'Front Loop Only (FLO)',
    category: 'tecnicas',
    difficulty: 'Intermedio',
    description: 'Se teje exclusivamente bajo el bucle más cercano a ti, dejando la hebra trasera libre para tejer sobre ella en capas posteriores.',
    howTo: 'Inserta el ganchillo desde abajo hacia arriba tomando solo la hebra delantera de la "V" superior.',
    proTip: 'Muy útil para añadir faldas, solapas o volantes a vestidos de muñecas.'
  },
  {
    abbr: 'pc',
    nameEs: 'Punto Cangrejo',
    nameLatam: 'Punto Cangrejo',
    nameUs: 'Reverse Single Crochet (crab stitch)',
    nameUk: 'Reverse Double Crochet',
    category: 'fantasia',
    difficulty: 'Intermedio',
    description: 'Punto bajo trabajado hacia atrás (hacia la derecha para diestras). Crea un borde cordado decorativo y firme muy elegante.',
    howTo: 'Sin girar la labor, inserta el ganchillo en el punto situado a la derecha del actual. Toma hebra y sácala hacia el frente, toma hebra de nuevo y cierra ambos bucles.',
    proTip: 'No tenses demasiado al retroceder para que el cordón mantenga su volumen redondeado.'
  },
  {
    abbr: 'p-puff',
    nameEs: 'Punto Puff / Garbanzo',
    nameLatam: 'Punto Puff / Motita',
    nameUs: 'Puff Stitch',
    nameUk: 'Puff Stitch',
    category: 'fantasia',
    difficulty: 'Intermedio',
    description: 'Punto con relieve acolchado que parece una pequeña nube. Aporta textura tridimensional a mantas de bebé y gorros.',
    howTo: '*Toma hebra, inserta en el punto, saca hebra estirando a la altura deseada* (repite 3 o 4 veces en el mismo punto). Toma hebra y pasa a través de todos los bucles de la aguja. Cierra con 1 cadeneta.',
    proTip: 'Asegúrate de estirar cada lazada a la misma altura para que el garbanzo quede uniforme.'
  }
];

export function GlosarioPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [copiedAbbr, setCopiedAbbr] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return GLOSSARY_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'todos' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        q === '' ||
        item.abbr.toLowerCase().includes(q) ||
        item.nameEs.toLowerCase().includes(q) ||
        item.nameLatam.toLowerCase().includes(q) ||
        item.nameUs.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAbbr(text);
    setTimeout(() => setCopiedAbbr(null), 2000);
  };

  return (
    <>
      <SeoHead
        title="Glosario de Puntos y Abreviaturas de Crochet – crochetsimply"
        description="Aprende el significado de cad, pb, pa, aum, dism y todas las abreviaturas de crochet en español e inglés. Guía definitiva para leer patrones sin dudas."
        canonicalPath="/glosario"
        breadcrumbs={[
          { name: 'Inicio', url: '/' },
          { name: 'Glosario de puntos y abreviaturas', url: '/glosario' }
        ]}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-12 space-y-10">
        {/* MIGAS DE PAN VISIBLES */}
        <Breadcrumbs
          items={[{ label: 'Glosario de puntos y abreviaturas' }]}
          onNavigate={onNavigate}
        />

        {/* ENCABEZADO */}
        <header className="space-y-4 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8FA998]">
            Diccionario de Ganchillo
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-[#3D352E]">
            Glosario de Puntos y Abreviaturas de Crochet
          </h1>
          <p className="text-sm sm:text-base text-[#6B5C4F] leading-relaxed">
            ¿Te has encontrado con una abreviatura desconocida en un patrón? Aquí tienes la guía completa con el paso a paso de cada punto, equivalencias entre España, Latinoamérica y términos en inglés (US/UK), y consejos prácticos para no perderte nunca.
          </p>
        </header>

        {/* CONTROLES DE FILTRO Y BÚSQUEDA */}
        <section aria-label="Buscador en el glosario" className="space-y-4 bg-white p-5 rounded-2xl border border-[#E8DDD0] shadow-xs">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#8C7A6B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por abreviatura (ej. 'AM', 'dism', 'pb') o nombre del punto..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#FAF4ED] border border-[#DFCFC1] rounded-xl focus:outline-none focus:border-[#8FA998] text-[#3D352E]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C7A6B] hover:text-[#3D352E]"
                >
                  Limpiar
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'todos', label: 'Todos los puntos' },
              { id: 'basicos', label: 'Puntos básicos' },
              { id: 'aumentos', label: 'Aumentos y disminuciones' },
              { id: 'tecnicas', label: 'Técnicas (BLO/FLO)' },
              { id: 'fantasia', label: 'Puntos de textura' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#8FA998] text-white shadow-xs'
                    : 'bg-[#FDFBF7] text-[#6B5C4F] border border-[#DFCFC1] hover:bg-[#FAF4ED]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* LISTADO DE PUNTOS */}
        <section aria-label="Definiciones de puntos" className="space-y-4">
          <div className="flex items-center justify-between text-xs text-[#8C7A6B] border-b border-[#EFE3D5] pb-2">
            <span>
              Mostrando <strong className="font-semibold text-[#3D352E]">{filteredItems.length}</strong> {filteredItems.length === 1 ? 'definición' : 'definiciones'}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.abbr}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8DDD0] space-y-4 shadow-2xs hover:border-[#8FA998] transition-colors"
              >
                {/* Cabecera del punto */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F5EDE3] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-base px-3 py-1 bg-[#FAF4ED] text-[#B86B5D] border border-[#DFCFC1] rounded-lg">
                      {item.abbr}
                    </span>
                    <div>
                      <h2 className="font-heading font-bold text-lg text-[#3D352E]">
                        {item.nameEs}
                      </h2>
                      <span className="text-xs text-[#8C7A6B]">
                        Latinoamérica: <em>{item.nameLatam}</em>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#8FA998]/10 text-[#8FA998] font-medium">
                      {item.difficulty}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.abbr)}
                      className="p-1.5 text-[#8C7A6B] hover:text-[#3D352E] hover:bg-[#FAF4ED] rounded-lg transition-colors inline-flex items-center gap-1 text-xs"
                      title="Copiar abreviatura"
                    >
                      {copiedAbbr === item.abbr ? <Check className="w-3.5 h-3.5 text-[#8FA998]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4A3E34] leading-relaxed">
                  {item.description}
                </p>

                {/* Paso a paso cómo tejerlo */}
                <div className="p-3.5 bg-[#FAF4ED] rounded-xl border border-[#EFE3D5] text-xs text-[#6B5C4F] space-y-1">
                  <strong className="font-semibold text-[#3D352E] block">¿Cómo se teje?</strong>
                  <p className="leading-relaxed">{item.howTo}</p>
                </div>

                {/* Equivalencia en inglés */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#8C7A6B] pt-1">
                  <div>
                    <span className="font-medium text-[#4A3E34]">Inglés US: </span>
                    <code className="text-[#8FA998] font-mono">{item.nameUs}</code>
                  </div>
                  <div>
                    <span className="font-medium text-[#4A3E34]">Inglés UK: </span>
                    <code className="text-[#8FA998] font-mono">{item.nameUk}</code>
                  </div>
                  {item.proTip && (
                    <div className="w-full text-[11px] text-[#B86B5D] pt-1">
                      💡 <strong>Consejo del taller:</strong> {item.proTip}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TABLA COMPARATIVA RÁPIDA DE EQUIVALENCIAS */}
        <section aria-labelledby="tabla-comparativa-heading" className="bg-[#FAF4ED] p-6 sm:p-8 rounded-3xl border border-[#DFCFC1] space-y-4">
          <h2 id="tabla-comparativa-heading" className="font-heading font-bold text-xl text-[#3D352E]">
            Tabla Resumen: Términos en Español vs Inglés (US)
          </h2>
          <p className="text-xs text-[#6B5C4F]">
            Muchos patrones internacionales están en inglés estadounidense (US). Aquí tienes la chuleta rápida para traducir patrones en segundos:
          </p>

          <div className="overflow-x-auto bg-white rounded-xl border border-[#E8DDD0]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F5EDE3] text-[#3D352E] font-semibold border-b border-[#E8DDD0]">
                <tr>
                  <th className="p-2.5">Abreviatura</th>
                  <th className="p-2.5">Término en España</th>
                  <th className="p-2.5">Término en Latinoamérica</th>
                  <th className="p-2.5">Término en Inglés (US)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5EDE3] text-[#6B5C4F]">
                <tr>
                  <td className="p-2.5 font-mono font-bold text-[#8FA998]">cad</td>
                  <td className="p-2.5">Cadeneta</td>
                  <td className="p-2.5">Cadena</td>
                  <td className="p-2.5 font-mono">ch (chain)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-bold text-[#8FA998]">pb / mp</td>
                  <td className="p-2.5">Punto bajo</td>
                  <td className="p-2.5">Medio punto</td>
                  <td className="p-2.5 font-mono">sc (single crochet)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-bold text-[#8FA998]">mpa / mv</td>
                  <td className="p-2.5">Medio punto alto</td>
                  <td className="p-2.5">Media vareta</td>
                  <td className="p-2.5 font-mono">hdc (half double crochet)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-bold text-[#8FA998]">pa / v</td>
                  <td className="p-2.5">Punto alto</td>
                  <td className="p-2.5">Vareta</td>
                  <td className="p-2.5 font-mono">dc (double crochet)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-bold text-[#8FA998]">pr / pe</td>
                  <td className="p-2.5">Punto raso / enano</td>
                  <td className="p-2.5">Punto deslizado</td>
                  <td className="p-2.5 font-mono">sl st (slip stitch)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-bold text-[#8FA998]">aum</td>
                  <td className="p-2.5">Aumento</td>
                  <td className="p-2.5">Aumento</td>
                  <td className="p-2.5 font-mono">inc (increase)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-mono font-bold text-[#8FA998]">dism</td>
                  <td className="p-2.5">Disminución</td>
                  <td className="p-2.5">Disminución</td>
                  <td className="p-2.5 font-mono">dec / sc2tog</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA A LOS PATRONES */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={() => onNavigate('/blog')}
            className="px-6 py-3 bg-[#8FA998] hover:bg-[#7D9786] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors inline-flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Poner en práctica estos puntos en nuestros patrones gratis</span>
          </button>
        </div>
      </main>
    </>
  );
}
