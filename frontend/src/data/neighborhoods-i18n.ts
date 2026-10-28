// Spanish and Portuguese versions of the neighborhood pages Jose's rental clients use
// most. Each entry mirrors the English fields in neighborhoods.ts; when you change the
// English copy (or the facts in it), update these too.
//
// Place, school, and street names stay in English: that's what people search for and
// see on signs. `pois` is keyed by the English point-of-interest name.

import { type Locale, TRANSLATED_NEIGHBORHOODS } from '@/i18n/locales';
import type { Neighborhood } from './neighborhoods';

export interface NeighborhoodTranslation {
  name?: string;
  tagline: string;
  description: string;
  highlights: string[];
  lifestyleTags: string[];
  /** Same order as the English budgetGuide; tiers (price ranges) are reused. */
  budgetGuide: { label: string; description: string }[];
  schoolNote: string;
  pois: Record<string, string>;
  rental: string;
  buyerNote: string;
  sellerNote: string;
}

type TranslatedLocale = Exclude<Locale, 'en'>;

export { TRANSLATED_NEIGHBORHOODS };

export function isTranslatedNeighborhood(slug: string): boolean {
  return (TRANSLATED_NEIGHBORHOODS as readonly string[]).includes(slug);
}

const UNDER: Record<TranslatedLocale, string> = { es: 'Menos de', pt: 'Até' };

const translations: Record<TranslatedLocale, Record<string, NeighborhoodTranslation>> = {
  es: {
    'royal-palm-beach': {
      tagline:
        'Casas con patio, parques grandes y un mercado de alquiler estable, a unos 20 minutos al oeste del centro de West Palm Beach.',
      description:
        'Royal Palm Beach se fundó como municipio en 1959 y hoy es una villa de unos 39,000 habitantes. Los parques son parte de la vida diaria: Commons Park ocupa unos 160 acres alrededor de un lago de 19 acres, hay parques de barrio por toda la villa, y el Royal Palm Beach Pines Natural Area del condado suma unos 770 acres de pinares con senderos. La villa es Tree City USA desde 1990 y todo su territorio es santuario de aves.\n\nAquí ocurre la mayor parte del trabajo de alquiler de Jose. Los inquilinos encuentran casas de tres habitaciones con patio, y muchas familias alquilan en la villa antes de comprar en ella. Los compradores encuentran esas mismas casas familiares, con escuelas primarias calificadas de 7 a 10 sobre 10. Cerca del 29% de los residentes nació fuera de Estados Unidos, y después del inglés los idiomas más hablados son el español, el portugués y el criollo haitiano. Para los vendedores, el 82% de las viviendas está ocupado por sus dueños, así que los compradores que llegan son en su mayoría familias que piensan quedarse.',
      highlights: [
        'Commons Park: unos 160 acres alrededor de un lago de 19 acres, más los 770 acres del Pines Natural Area del condado',
        'Tree City USA desde 1990, y toda la villa es santuario de aves',
        'Escuelas primarias calificadas de 7 a 10 en GreatSchools; Western Academy Charter tiene un 10',
        'Cerca del 29% de los residentes nació en otro país; se habla mucho español, portugués y criollo haitiano',
        'Las casas se vendieron a una mediana de $566,000 entre enero y septiembre de 2026',
        '82 alquileres anunciados a fines de octubre de 2026; las de tres habitaciones pedían una mediana de $2,800',
      ],
      lifestyleTags: [
        'Primera vivienda',
        'Mercado de alquiler activo',
        'Buenas escuelas primarias',
        'Oeste del condado de Palm Beach',
      ],
      budgetGuide: [
        {
          label: 'Condominios y townhomes',
          description:
            'Sobre todo condominios y townhomes de dos habitaciones, desde condominios para mayores de 55 en Greenway Village South hasta townhouses en Village Walk. Algunas comunidades tienen restricción de edad, así que verifíquelo antes de enamorarse de un anuncio. Los condominios y townhouses se vendieron a una mediana de $265,000 entre enero y septiembre de 2026; pida el presupuesto de la HOA y cualquier cuota especial prevista antes de ofertar.',
        },
        {
          label: 'Casas unifamiliares',
          description:
            'Casas más antiguas de tres y cuatro habitaciones con patio en barrios establecidos. Las casas se vendieron a una mediana de $566,000 entre enero y septiembre de 2026, así que las de este rango suelen ser las que necesitan techo, cocina o aire acondicionado nuevos.',
        },
        {
          label: 'Construcción más nueva',
          description:
            'Casas unifamiliares más nuevas, con más metros, ventanas de impacto y espacios abiertos, además de casas más grandes en comunidades cerradas. Se venden pocas, así que espere más competencia cuando aparece una.',
        },
      ],
      schoolNote:
        'Western Academy Charter tiene 10/10 en GreatSchools, Cypress Trails Elementary y Western Pines Community Middle tienen 8/10, y Royal Palm Beach Elementary y H.L. Johnson Elementary tienen 7/10. Royal Palm Beach High School tiene 3/10. Las familias con hijos en secundaria deberían revisar temprano las opciones de elección escolar y los programas magnet del distrito. La escuela asignada depende de la dirección, así que confirme cada casa con el localizador de zonas del School District of Palm Beach County.',
      pois: {
        'Commons Park':
          'Unos 160 acres alrededor de un lago de 19 acres, con senderos, una fuente para mojarse y el complejo deportivo de la villa.',
        'Veterans Park':
          'Un parque de 6 acres en Royal Palm Beach Blvd. con pabellones de picnic, un área de juegos y un monumento a los veteranos locales.',
        'Crossroads at Royal Palm Beach':
          'El principal centro comercial de Royal Palm Beach Blvd., con un Publix que tiene farmacia, deli y panadería.',
        'Mall at Wellington Green':
          "Centro comercial regional a unos 10 minutos al sur, en Wellington, con Macy's, Dillard's, JCPenney, una Apple Store y un cine CMX.",
        'Southern Blvd Dining Corridor':
          'Panaderías, restaurantes latinoamericanos y restaurantes familiares a lo largo de Southern Blvd., la mayoría de dueños locales.',
        'Royal Palm Beach Public Library':
          'Biblioteca del condado con actividades para niños, salas de estudio y espacio para reuniones comunitarias.',
        'Royal Palm Beach Cultural Center':
          'El espacio de eventos y arte de la villa, con presentaciones, clases y actividades comunitarias durante todo el año.',
        'Royal Palm Beach Recreation Center':
          'Gimnasio completo, equipos de ejercicio y actividades para niños y adultos durante todo el año.',
      },
      rental:
        'La mayor parte del trabajo de alquiler de Jose está en Royal Palm Beach. El 26 de octubre de 2026 había 82 casas y condominios anunciados en alquiler; las de dos habitaciones pedían una mediana de $2,200 y las de tres, $2,800. Los alquileres estuvieron anunciados una mediana de 34 días, así que las buenas casas se van en más o menos un mes.',
      buyerNote:
        'Las casas se vendieron a una mediana de $566,000 entre enero y septiembre de 2026, y el 52% de los anuncios actuales ya bajó su precio al menos una vez. Hay margen para negociar en las casas que salieron caras.',
      sellerNote:
        'Las casas vendidas en septiembre de 2026 cerraron al 99% de su último precio pedido, tras una mediana de 33 días. El análisis comparativo de mercado gratis de Jose le muestra dónde está su casa en el mercado de hoy.',
    },

    'west-palm-beach': {
      tagline:
        'La sede del condado: un centro para recorrer a pie, frente al Intracoastal, y viviendas desde condominios de $200K hasta casas históricas.',
      description:
        'West Palm Beach es la sede del condado, una ciudad de unos 120,000 habitantes y una de las tres ciudades donde Jose hace la mayor parte de su trabajo. Las viviendas van desde condominios antiguos de dos habitaciones hasta casas de los años veinte en distritos históricos como El Cid y Flamingo Park, y casas frente al Intracoastal. Entre enero y septiembre de 2026, las casas se vendieron a una mediana de $575,000 y los condominios y townhouses a $240,000.\n\nLa mitad de los hogares alquila, así que el mercado de alquiler es grande: a fines de octubre de 2026 había 943 casas y condominios anunciados. El centro tiene Clematis Street, Rosemary Square, el Kravis Center y el Norton Museum, y la ciudad organiza el GreenMarket de los sábados frente al agua de otoño a primavera. Los precios y el ambiente cambian de cuadra en cuadra, así que aquí el barrio importa más que el código postal.',
      highlights: [
        'Centro para recorrer a pie: Clematis Street, Rosemary Square y el paseo frente al agua',
        'Distritos históricos con casas de los años veinte a cuarenta, como El Cid y Flamingo Park',
        'Condominios y townhouses a una mediana de $240,000 en 2026; casas a $575,000',
        'El Norton Museum of Art y el Kravis Center for the Performing Arts',
        'Cerca de la mitad de los hogares alquila; 943 alquileres anunciados a fines de octubre de 2026',
      ],
      lifestyleTags: [
        'Urbano y caminable',
        'Frente al Intracoastal',
        'Arte y cultura',
        'Mercado de alquiler activo',
        'Barrios históricos',
      ],
      budgetGuide: [
        {
          label: 'Condominios y townhomes',
          description:
            'Sobre todo condominios y townhomes de dos habitaciones en complejos de 40 a 60 años. Hay mucho para elegir, con 7.6 meses de inventario de condominios en octubre de 2026, pero los edificios antiguos pueden tener cuotas especiales, así que pida los informes de inspección y el estudio de reservas.',
        },
        {
          label: 'Casas unifamiliares',
          description:
            'Casas de tres habitaciones y dos baños, normalmente de 30 a 50 años, algunas renovadas. Este rango está por debajo de la mediana de casas de 2026, de $575,000, así que espere casas más chicas o barrios más alejados del centro.',
        },
        {
          label: 'Casas renovadas e históricas',
          description:
            'Casas renovadas o más nuevas en barrios como Flamingo Park, El Cid, SoSo y Northwood Shores, que cada vez se cruzan más con el mercado histórico, donde las casas renovadas de los años veinte a cuarenta se pagan más.',
        },
      ],
      schoolNote:
        'Bak Middle School of the Arts tiene 10/10 en GreatSchools y Dreyfoos School of the Arts tiene 8/10, pero ambas son escuelas magnet de todo el condado que requieren solicitud y audición. Everglades Elementary tiene 6/10, y Forest Hill Community High School, la secundaria asignada para gran parte del oeste de West Palm, tiene 3/10. Las zonas cambian dentro de la ciudad, así que revise cada dirección con el localizador de zonas del School District of Palm Beach County.',
      pois: {
        'Clematis Street':
          'La calle principal del centro, con restaurantes, bares y tiendas, y los conciertos gratis de Clematis by Night los jueves por la noche en el Great Lawn frente al agua.',
        'WPB GreenMarket':
          'Un mercado de agricultores los sábados por la mañana frente al agua del centro, de otoño a primavera, con unos 150 puestos.',
        'Grassy Waters Preserve':
          'Humedal de la ciudad en Northlake Blvd. con un centro de naturaleza, un sendero de pasarela y paseos guiados en canoa con reserva; la entrada es gratis.',
        'Okeeheelee Park':
          'Un parque del condado de 1,700 acres, justo al oeste de Greenacres, con pista de BMX, disc golf de 18 hoyos, un campo de golf de 27 hoyos y wakeboard con cable en Shark Wake Park.',
        'Palm Beach Zoo and Cox Science Center':
          'Un zoológico de 23 acres en Dreher Park, al lado del Cox Science Center, con su planetario y su minigolf.',
        'Manatee Lagoon':
          'Un centro ecológico gratis de FPL sobre el Intracoastal, con un mirador donde los manatíes se juntan en invierno junto a la salida de agua tibia.',
        'Rosemary Square (CityPlace)':
          'Tiendas y restaurantes al aire libre junto al Kravis Center, con un cine AMC y restaurantes alrededor de una plaza central.',
        'Publix at Village Commons': 'Un Publix junto a Okeechobee Blvd., en el centro comercial Village Commons.',
      },
      rental:
        'El 26 de octubre de 2026 había 943 casas y condominios anunciados en alquiler en West Palm Beach. Las de una habitación pedían una mediana de $1,600, las de dos $2,185 y las de tres $3,000, y los alquileres estuvieron anunciados una mediana de 33 días. Estar cerca del centro o del agua sube bastante el alquiler.',
      buyerNote:
        'West Palm tiene más de 15 barrios distintos con valores muy diferentes, y 5.1 meses de inventario de casas en octubre de 2026. Compare varios barrios antes de decidir su rango de precio.',
      sellerNote:
        'Los valores en West Palm cambian mucho según el barrio y se han movido bastante en los últimos años. El análisis comparativo de mercado gratis de Jose le muestra exactamente dónde está su casa en el mercado de hoy.',
    },

    'the-acreage': {
      name: 'The Acreage y Loxahatchee',
      tagline: 'Terrenos de 1.25 acres, muchos sin HOA, a unos 15 minutos de Wellington.',
      description:
        'The Acreage y Loxahatchee son comunidades no incorporadas del oeste del condado de Palm Beach. Las calles y el drenaje de The Acreage los maneja el Indian Trail Improvement District, no una ciudad ni una HOA. Los terrenos estándar son de 1.25 acres, muchas casas usan pozo y pozo séptico propios, y el ambiente es rural: caballos, gallinas y espacio entre vecinos. Jose ha atendido a compradores e inquilinos aquí por años, incluso en Arden, una comunidad cerrada más nueva en Loxahatchee construida alrededor de una granja de 5 acres, una piscina estilo resort y más de 20 millas de senderos.\n\nEn los 12 meses hasta septiembre de 2026, las casas de Loxahatchee se vendieron a una mediana de $700,000, un 3.2% más que el año anterior. Pero las ventas se han frenado: a fines de octubre de 2026 había 4.9 meses de inventario de casas, más que en Royal Palm Beach o Lake Worth Beach.',
      highlights: [
        'Terrenos estándar de 1.25 acres, a unos 15 minutos de Wellington',
        'Zonificación que permite caballos en la mayoría de las áreas',
        'Sin HOA en muchos vecindarios',
        'Comunidades cerradas nuevas como Arden junto a propiedades rurales establecidas',
        'Al lado del J.W. Corbett Wildlife Management Area, de 60,000 acres',
      ],
      lifestyleTags: [
        'Sin HOA',
        'Terrenos de 1+ acre',
        'Cultura ecuestre',
        '92% de dueños',
        'Rural y espacioso',
        'Pozo y séptico',
      ],
      budgetGuide: [
        {
          label: 'Terrenos y casas para arreglar',
          description:
            'Terrenos vacíos de 1.25 acres para quien quiere construir, o a veces una casa antigua que necesita mucho trabajo. Las casas en mal estado pueden ser difíciles de financiar, así que los vendedores suelen preferir ofertas en efectivo. Cuente con más tiempo.',
        },
        {
          label: 'Casas familiares establecidas',
          description:
            'Casas de bloque de concreto de tres habitaciones y dos baños, de 1,500 a 2,200 pies cuadrados y de 20 a 40 años, en terrenos cercados de 1.25 acres, muchas veces con piscina y garaje o taller aparte. Este rango está por debajo de la mediana de 12 meses de $700,000, así que espere acabados más viejos. Pregunte por la edad del techo, el pozo y el séptico.',
        },
        {
          label: 'Propiedades renovadas y ecuestres',
          description:
            'Casas renovadas o más nuevas de cuatro y cinco habitaciones en terrenos de 1.25 a más de 2 acres, muchas listas para mudarse y con piscina. Las propiedades ecuestres con establos y potreros empiezan aquí, y la construcción nueva en terrenos de más de un acre suele pasar de $800K.',
        },
      ],
      schoolNote:
        'Frontier Elementary tiene 8/10 en GreatSchools y Acreage Pines Elementary 7/10. Osceola Creek Middle tiene 6/10 y Seminole Ridge Community High School 4/10; Seminole Ridge ofrece cursos AP y Cambridge AICE. Las zonas cambian en un área tan grande, así que confirme cada dirección con el localizador de zonas del School District of Palm Beach County.',
      pois: {
        'Acreage Community Park':
          'El parque principal del Indian Trail Improvement District, con canchas deportivas, áreas de juegos y senderos.',
        'Arthur R. Marshall Loxahatchee National Wildlife Refuge':
          'Unos 145,000 acres de los Everglades del norte al sur de Southern Blvd., con una pasarela por el pantano de cipreses, una ruta en canoa y más de 250 especies de aves; el área principal de visitantes está en la entrada de Boynton Beach.',
        'JW Corbett Wildlife Management Area':
          'Unos 60,000 acres de tierras estatales justo al norte y al oeste de The Acreage, abiertos para caminatas, pesca, caza y campamento rústico.',
        'Lion Country Safari':
          'Un safari para recorrer en auto en Southern Blvd., abierto desde 1967, con un área a pie para los niños más pequeños.',
        'Fox Trail Equestrian Community':
          'Un vecindario ecuestre cerca de Lion Country Safari con unos 210 terrenos de cinco acres, calles privadas pavimentadas y cerca de 29 millas de senderos para caballos.',
        'Acreage Athletic League': 'Ligas juveniles de béisbol, softbol y fútbol americano organizadas por voluntarios.',
        'Publix at The Acreage': 'El Publix del vecindario, con deli, panadería y farmacia.',
        'Tractor Supply Co. at Loxahatchee':
          'Alimento para animales, cercas, suministros para ganado y equipo de granja para propiedades con caballos y huertos.',
      },
      rental:
        'Hay pocos alquileres y casi todos son casas unifamiliares. Este verano, las casas de tres habitaciones en el código postal 33470 pedían entre unos $3,600 y $3,950 al mes, y las de cuatro alrededor de $4,500. Jose ha colocado inquilinos aquí, incluso en Arden, para familias que quieren probar este estilo de vida antes de comprar.',
      buyerNote:
        'Más de la mitad de los anuncios de casas actuales ya bajó su precio, y las casas que seguían a la venta a fines de octubre de 2026 llevaban una mediana de 76 días anunciadas. Incluya en su presupuesto las inspecciones del pozo y del séptico, y revise la zona de inundación del terreno.',
      sellerNote:
        'Las casas vendidas en septiembre de 2026 quedaron bajo contrato en una mediana de 28 días, al 98% de su último precio pedido, mientras que las que salieron caras pasaron meses en el mercado. El análisis comparativo de mercado gratis de Jose valora el terreno además de la casa.',
    },

    'lake-worth-beach': {
      tagline:
        'Un centro histórico para recorrer a pie a dos millas del Atlántico, con Tri-Rail y bungalows sin HOA todavía por debajo de $500,000.',
      description:
        'Lake Worth Beach es una ciudad costera con un centro para recorrer a pie lleno de restaurantes independientes, galerías y un teatro histórico. Se llamaba "Lake Worth" hasta 2019, está a menos de dos millas del Atlántico y tiene una estación de Tri-Rail dentro de la ciudad. Tiene una gran comunidad hispanohablante, algo que encaja naturalmente con el trabajo multilingüe de Jose.\n\nEl mercado está dividido por tipo de propiedad. Entre enero y septiembre de 2026, las casas se vendieron a una mediana de $560,000, mientras que los condominios y townhouses se vendieron a $207,500, con 6.1 meses de inventario de condominios. Cerca del 54% de los residentes alquila.',
      highlights: [
        'Centro para recorrer a pie en Lake Avenue y Lucerne Avenue, con restaurantes independientes y arte',
        'Condominios y townhouses a una mediana de $207,500 en 2026, a menos de dos millas de la playa',
        'Playa de la ciudad con muelle de pesca y el Casino Building de los años veinte, reconstruido',
      ],
      lifestyleTags: [
        'Caminable y artístico',
        'Acceso a Tri-Rail',
        'Mayoría inquilinos',
        'Bungalows históricos',
        'Playa y muelle',
      ],
      budgetGuide: [
        {
          label: 'Condominios y cooperativas',
          description:
            'Sobre todo condominios y cooperativas, desde unidades antiguas que necesitan trabajo hasta unidades renovadas en edificios de mediados de siglo y para mayores de 55. Con 6.1 meses de inventario de condominios en octubre de 2026, los vendedores están negociando, pero pida el informe de inspección estructural, el estudio de reservas y cualquier cuota especial prevista antes de ofertar.',
        },
        {
          label: 'Townhomes y casas más pequeñas',
          description:
            'Condominios renovados, townhomes o casas más pequeñas de dos y tres habitaciones, de 900 a 1,500 pies cuadrados, en barrios establecidos cerca del centro. La mayoría se construyó entre los años cuarenta y setenta, y algunas necesitan arreglos estéticos.',
        },
        {
          label: 'Casas renovadas e históricas',
          description:
            'Bungalows históricos renovados, casas frente a canales y casas más grandes de tres y cuatro habitaciones en mejor estado. Las casas se vendieron a una mediana de $560,000 en 2026, y las que están al este de Dixie Hwy. o cerca del Intracoastal cuestan bastante más.',
        },
      ],
      schoolNote:
        'North Grade Elementary y South Grade Elementary tienen 5/10 en GreatSchools, y ambas son escuelas magnet. Lake Worth Community Middle tiene 3/10 y Lake Worth High 2/10. Muchas familias de aquí usan las opciones de elección escolar y los programas magnet del condado de Palm Beach. Confirme cada dirección con el localizador de zonas del School District of Palm Beach County y visite las escuelas antes de decidir.',
      pois: {
        'Lake Worth Beach Park and Municipal Pier':
          "Playa de la ciudad con zona vigilada para nadar, muelle de pesca, piscina pública y el Casino Building, con Benny's on the Beach al pie del muelle.",
        'Bryant Park':
          'Un parque gratis frente al Intracoastal con rampa para botes, muelle de pesca y un escenario para conciertos al aire libre.',
        'Downtown Lake Avenue and Lucerne Avenue':
          'Restaurantes independientes, galerías, cafés y tiendas en unas diez cuadras para recorrer a pie, más el Street Painting Festival cada febrero.',
        'Lake Worth Playhouse':
          'Un teatro comunitario en Lake Avenue, en un antiguo cine de los años veinte, con obras, conciertos y funciones de cine.',
        'Snook Islands Natural Area':
          'Unos 100 acres de islas y humedales restaurados en la Lake Worth Lagoon, con pasarela, rampa para kayaks y muelle de pesca; la entrada es gratis.',
        'John Prince Memorial Park':
          'Un parque del condado de 726 acres en el lago Osborne, con zona de campamento, senderos, rampas para botes, canchas y un parque para perros.',
        'Publix at Lake Worth':
          'El Publix cercano al centro, en N. Dixie Hwy., a poca distancia a pie de gran parte del área residencial.',
        'Cultural Council for Palm Beach County':
          'La agencia de arte del condado, con sede en Lake Avenue y exposiciones gratis que cambian durante el año.',
      },
      rental:
        'Cerca del 54% de los residentes alquila. El 26 de octubre de 2026 había 151 casas y condominios anunciados en alquiler, con una mediana de $1,995. Las de una habitación pedían $1,600, las de dos $2,100 y las de tres $3,000, y los alquileres estuvieron anunciados una mediana de 27 días. Estar cerca del centro o del agua sube el alquiler.',
      buyerNote:
        'Los compradores de condominios tienen ventaja: 6.1 meses de inventario y una rebaja mediana del 10.4% en octubre de 2026. Para casas el mercado está más ajustado, con 3.2 meses de inventario, y las casas bien de precio quedan bajo contrato en más o menos un mes.',
      sellerNote:
        'Como cerca del 54% de los residentes alquila, Lake Worth Beach atrae tanto a familias que van a vivir en la casa como a inversionistas. Los precios de las casas subieron un 11% interanual en septiembre de 2026. El análisis comparativo de mercado gratis de Jose le muestra dónde está su casa.',
    },
  },

  pt: {
    'royal-palm-beach': {
      tagline:
        'Casas com quintal, parques grandes e um mercado de aluguel estável, a uns 20 minutos a oeste do centro de West Palm Beach.',
      description:
        'Royal Palm Beach virou município em 1959 e hoje é uma vila de uns 39 mil moradores. Os parques fazem parte do dia a dia: o Commons Park tem cerca de 160 acres em volta de um lago de 19 acres, há parques de bairro espalhados pela vila, e o Royal Palm Beach Pines Natural Area, do condado, soma uns 770 acres de pinheirais com trilhas. A vila é Tree City USA desde 1990, e todo o seu território é santuário de aves.\n\nÉ aqui que acontece a maior parte do trabalho de aluguel do Jose. Os inquilinos encontram casas de três quartos com quintal, e muitas famílias alugam na vila antes de comprar nela. Os compradores encontram essas mesmas casas de família, com escolas de ensino fundamental com notas de 7 a 10. Cerca de 29% dos moradores nasceram fora dos EUA, e depois do inglês os idiomas mais falados são o espanhol, o português e o crioulo haitiano. Para quem vende, 82% dos imóveis são ocupados pelos donos, então quem aparece para comprar são, na maioria, famílias que pretendem ficar.',
      highlights: [
        'Commons Park: cerca de 160 acres em volta de um lago de 19 acres, mais os 770 acres do Pines Natural Area do condado',
        'Tree City USA desde 1990, e a vila inteira é santuário de aves',
        'Escolas de ensino fundamental com notas de 7 a 10 no GreatSchools; a Western Academy Charter tem 10',
        'Cerca de 29% dos moradores nasceram em outro país; fala-se muito espanhol, português e crioulo haitiano',
        'As casas foram vendidas a uma mediana de US$ 566 mil entre janeiro e setembro de 2026',
        '82 imóveis para alugar anunciados no fim de outubro de 2026; os de três quartos pediam uma mediana de US$ 2.800',
      ],
      lifestyleTags: [
        'Primeiro imóvel',
        'Mercado de aluguel ativo',
        'Boas escolas fundamentais',
        'Oeste do condado de Palm Beach',
      ],
      budgetGuide: [
        {
          label: 'Condomínios e townhomes',
          description:
            'Principalmente condomínios e townhomes de dois quartos, desde condomínios para maiores de 55 anos em Greenway Village South até townhouses em Village Walk. Algumas comunidades têm restrição de idade, então confira antes de se apaixonar por um anúncio. Condomínios e townhouses foram vendidos a uma mediana de US$ 265 mil entre janeiro e setembro de 2026; peça o orçamento da HOA e qualquer taxa extra prevista antes de fazer a proposta.',
        },
        {
          label: 'Casas',
          description:
            'Casas mais antigas de três e quatro quartos com quintal em bairros estabelecidos. As casas foram vendidas a uma mediana de US$ 566 mil entre janeiro e setembro de 2026, então as desta faixa costumam ser as que precisam de telhado, cozinha ou ar-condicionado novos.',
        },
        {
          label: 'Construção mais nova',
          description:
            'Casas mais novas, com mais área, janelas resistentes a furacão e ambientes integrados, além de casas maiores em condomínios fechados. Poucas são vendidas, então espere mais concorrência quando aparece uma.',
        },
      ],
      schoolNote:
        'A Western Academy Charter tem nota 10 no GreatSchools, a Cypress Trails Elementary e a Western Pines Community Middle têm 8, e a Royal Palm Beach Elementary e a H.L. Johnson Elementary têm 7. A Royal Palm Beach High School tem nota 3. Famílias com filhos no ensino médio devem olhar cedo as opções de escolha de escola e os programas magnet do distrito. A escola depende do endereço, então confirme cada casa no localizador de zonas do School District of Palm Beach County.',
      pois: {
        'Commons Park':
          'Cerca de 160 acres em volta de um lago de 19 acres, com caminhos, uma fonte para as crianças se molharem e o complexo esportivo da vila.',
        'Veterans Park':
          'Um parque de 6 acres na Royal Palm Beach Blvd. com quiosques para piquenique, um parquinho e um memorial aos veteranos da região.',
        'Crossroads at Royal Palm Beach':
          'O principal centro comercial da Royal Palm Beach Blvd., com um Publix que tem farmácia, frios e padaria.',
        'Mall at Wellington Green':
          "Shopping regional a uns 10 minutos ao sul, em Wellington, com Macy's, Dillard's, JCPenney, uma Apple Store e um cinema CMX.",
        'Southern Blvd Dining Corridor':
          'Padarias, restaurantes latino-americanos e lanchonetes de família ao longo da Southern Blvd., quase todos de donos locais.',
        'Royal Palm Beach Public Library':
          'Biblioteca do condado com atividades para crianças, salas de estudo e espaço para reuniões da comunidade.',
        'Royal Palm Beach Cultural Center':
          'O espaço de eventos e cultura da vila, com apresentações, aulas e eventos da comunidade ao longo do ano.',
        'Royal Palm Beach Recreation Center':
          'Ginásio completo, aparelhos de ginástica e atividades para crianças e adultos o ano todo.',
      },
      rental:
        'A maior parte do trabalho de aluguel do Jose é em Royal Palm Beach. Em 26 de outubro de 2026, 82 casas e condomínios estavam anunciados para alugar; os de dois quartos pediam uma mediana de US$ 2.200 e os de três, US$ 2.800. Os imóveis ficaram anunciados uma mediana de 34 dias, então as boas casas saem em cerca de um mês.',
      buyerNote:
        'As casas foram vendidas a uma mediana de US$ 566 mil entre janeiro e setembro de 2026, e 52% dos anúncios atuais já baixaram o preço pelo menos uma vez. Há espaço para negociar nas casas que começaram caras.',
      sellerNote:
        'As casas vendidas em setembro de 2026 fecharam a 99% do último preço pedido, depois de uma mediana de 33 dias. A análise comparativa de mercado gratuita do Jose mostra onde a sua casa se encaixa no mercado de hoje.',
    },

    'west-palm-beach': {
      tagline:
        'A sede do condado: um centro para fazer tudo a pé, a orla do Intracoastal e imóveis desde condomínios de US$ 200 mil até casas históricas.',
      description:
        'West Palm Beach é a sede do condado, uma cidade de uns 120 mil moradores e uma das três cidades onde o Jose faz a maior parte do trabalho. Os imóveis vão de condomínios antigos de dois quartos a casas dos anos 1920 em bairros históricos como El Cid e Flamingo Park, e casas na beira do Intracoastal. Entre janeiro e setembro de 2026, as casas foram vendidas a uma mediana de US$ 575 mil e os condomínios e townhouses a US$ 240 mil.\n\nMetade dos domicílios aluga, então o mercado de aluguel é grande: no fim de outubro de 2026 havia 943 casas e condomínios anunciados. O centro tem a Clematis Street, a Rosemary Square, o Kravis Center e o Norton Museum, e a cidade organiza o GreenMarket aos sábados na orla, do outono à primavera. Preços e clima mudam de quarteirão em quarteirão, então aqui o bairro importa mais do que o CEP.',
      highlights: [
        'Centro para fazer tudo a pé: Clematis Street, Rosemary Square e a orla',
        'Bairros históricos com casas dos anos 1920 a 1940, como El Cid e Flamingo Park',
        'Condomínios e townhouses a uma mediana de US$ 240 mil em 2026; casas a US$ 575 mil',
        'O Norton Museum of Art e o Kravis Center for the Performing Arts',
        'Cerca de metade dos domicílios aluga; 943 imóveis para alugar anunciados no fim de outubro de 2026',
      ],
      lifestyleTags: [
        'Urbano e a pé',
        'Orla do Intracoastal',
        'Arte e cultura',
        'Mercado de aluguel ativo',
        'Bairros históricos',
      ],
      budgetGuide: [
        {
          label: 'Condomínios e townhomes',
          description:
            'Principalmente condomínios e townhomes de dois quartos em prédios de 40 a 60 anos. Há muita opção, com 7,6 meses de estoque de condomínios em outubro de 2026, mas prédios antigos podem ter taxas extras, então peça os laudos de inspeção e o estudo de reservas.',
        },
        {
          label: 'Casas',
          description:
            'Casas de três quartos e dois banheiros, normalmente com 30 a 50 anos, algumas reformadas. Esta faixa fica abaixo da mediana das casas de 2026, de US$ 575 mil, então espere casas menores ou bairros mais longe do centro.',
        },
        {
          label: 'Casas reformadas e históricas',
          description:
            'Casas reformadas ou mais novas em bairros como Flamingo Park, El Cid, SoSo e Northwood Shores, cada vez mais próximas do mercado histórico, onde casas reformadas dos anos 1920 a 1940 valem mais.',
        },
      ],
      schoolNote:
        'A Bak Middle School of the Arts tem nota 10 no GreatSchools e a Dreyfoos School of the Arts tem 8, mas as duas são escolas magnet de todo o condado que exigem inscrição e audição. A Everglades Elementary tem nota 6, e a Forest Hill Community High School, escola de ensino médio de boa parte do oeste de West Palm, tem 3. As zonas mudam dentro da cidade, então confira cada endereço no localizador de zonas do School District of Palm Beach County.',
      pois: {
        'Clematis Street':
          'A rua principal do centro, com restaurantes, bares e lojas, e os shows gratuitos do Clematis by Night às quintas à noite no Great Lawn, na orla.',
        'WPB GreenMarket':
          'Uma feira de produtores aos sábados de manhã na orla do centro, do outono à primavera, com cerca de 150 barracas.',
        'Grassy Waters Preserve':
          'Área alagada da prefeitura na Northlake Blvd. com centro de natureza, trilha em passarela e passeios guiados de canoa com reserva; a entrada é gratuita.',
        'Okeeheelee Park':
          'Um parque do condado de 1.700 acres, logo a oeste de Greenacres, com pista de BMX, disc golf de 18 buracos, campo de golfe de 27 buracos e wakeboard no cabo no Shark Wake Park.',
        'Palm Beach Zoo and Cox Science Center':
          'Um zoológico de 23 acres no Dreher Park, ao lado do Cox Science Center, com planetário e minigolfe.',
        'Manatee Lagoon':
          'Um centro ecológico gratuito da FPL no Intracoastal, com um mirante onde os peixes-boi se juntam no inverno perto da saída de água morna.',
        'Rosemary Square (CityPlace)':
          'Lojas e restaurantes ao ar livre ao lado do Kravis Center, com um cinema AMC e restaurantes em volta de uma praça.',
        'Publix at Village Commons': 'Um Publix perto da Okeechobee Blvd., no centro comercial Village Commons.',
      },
      rental:
        'Em 26 de outubro de 2026, 943 casas e condomínios estavam anunciados para alugar em West Palm Beach. Os de um quarto pediam uma mediana de US$ 1.600, os de dois US$ 2.185 e os de três US$ 3.000, e os imóveis ficaram anunciados uma mediana de 33 dias. Morar perto do centro ou da água aumenta bastante o aluguel.',
      buyerNote:
        'West Palm tem mais de 15 bairros diferentes, com valores muito distintos, e 5,1 meses de estoque de casas em outubro de 2026. Compare alguns bairros antes de definir sua faixa de preço.',
      sellerNote:
        'Os valores em West Palm variam muito de bairro para bairro e mudaram bastante nos últimos anos. A análise comparativa de mercado gratuita do Jose mostra exatamente onde a sua casa está no mercado de hoje.',
    },

    'the-acreage': {
      name: 'The Acreage e Loxahatchee',
      tagline: 'Terrenos de 1,25 acre, muitos sem HOA, a uns 15 minutos de Wellington.',
      description:
        'The Acreage e Loxahatchee são comunidades não incorporadas do oeste do condado de Palm Beach. As ruas e a drenagem de The Acreage são cuidadas pelo Indian Trail Improvement District, não por uma prefeitura ou HOA. Os terrenos padrão têm 1,25 acre, muitas casas usam poço e fossa séptica próprios, e o clima é rural: cavalos, galinhas e espaço entre os vizinhos. O Jose atende compradores e inquilinos aqui há anos, inclusive no Arden, um condomínio fechado mais novo em Loxahatchee construído em volta de uma fazenda de 5 acres, uma piscina estilo resort e mais de 20 milhas de trilhas.\n\nNos 12 meses até setembro de 2026, as casas de Loxahatchee foram vendidas a uma mediana de US$ 700 mil, 3,2% a mais que no ano anterior. Mas as vendas desaceleraram: no fim de outubro de 2026 havia 4,9 meses de estoque de casas, mais do que em Royal Palm Beach ou Lake Worth Beach.',
      highlights: [
        'Terrenos padrão de 1,25 acre, a uns 15 minutos de Wellington',
        'Zoneamento que permite cavalos na maior parte da região',
        'Sem HOA em muitos bairros',
        'Condomínios fechados novos, como o Arden, ao lado de propriedades rurais antigas',
        'Vizinho do J.W. Corbett Wildlife Management Area, com 60 mil acres',
      ],
      lifestyleTags: [
        'Sem HOA',
        'Terrenos de 1+ acre',
        'Cultura equestre',
        '92% de donos',
        'Rural e espaçoso',
        'Poço e fossa',
      ],
      budgetGuide: [
        {
          label: 'Terrenos e casas para reformar',
          description:
            'Terrenos vazios de 1,25 acre para quem quer construir, ou às vezes uma casa antiga que precisa de muita obra. Casas em mau estado podem ser difíceis de financiar, então os vendedores costumam preferir propostas à vista. Conte com um prazo maior.',
        },
        {
          label: 'Casas de família estabelecidas',
          description:
            'Casas de bloco de concreto de três quartos e dois banheiros, de 1.500 a 2.200 pés quadrados e 20 a 40 anos, em terrenos cercados de 1,25 acre, muitas vezes com piscina e garagem ou oficina separada. Esta faixa fica abaixo da mediana de 12 meses, de US$ 700 mil, então espere acabamentos mais antigos. Pergunte a idade do telhado, do poço e da fossa.',
        },
        {
          label: 'Imóveis reformados e equestres',
          description:
            'Casas reformadas ou mais novas de quatro e cinco quartos em terrenos de 1,25 a mais de 2 acres, muitas prontas para morar e com piscina. Propriedades equestres com baias e piquetes começam aqui, e construções novas em terrenos de mais de um acre costumam passar de US$ 800 mil.',
        },
      ],
      schoolNote:
        'A Frontier Elementary tem nota 8 no GreatSchools e a Acreage Pines Elementary, 7. A Osceola Creek Middle tem 6 e a Seminole Ridge Community High School, 4; a Seminole Ridge oferece cursos AP e Cambridge AICE. As zonas mudam numa região tão grande, então confirme cada endereço no localizador de zonas do School District of Palm Beach County.',
      pois: {
        'Acreage Community Park':
          'O principal parque do Indian Trail Improvement District, com campos esportivos, parquinhos e caminhos.',
        'Arthur R. Marshall Loxahatchee National Wildlife Refuge':
          'Cerca de 145 mil acres dos Everglades do norte, ao sul da Southern Blvd., com passarela no pântano de ciprestes, trilha de canoa e mais de 250 espécies de aves; a principal área de visitantes fica na entrada de Boynton Beach.',
        'JW Corbett Wildlife Management Area':
          'Cerca de 60 mil acres de terras estaduais logo ao norte e a oeste de The Acreage, abertos para caminhada, pesca, caça e acampamento rústico.',
        'Lion Country Safari':
          'Um safári para fazer de carro na Southern Blvd., aberto desde 1967, com uma área a pé para as crianças menores.',
        'Fox Trail Equestrian Community':
          'Um bairro equestre perto do Lion Country Safari com cerca de 210 terrenos de cinco acres, ruas particulares asfaltadas e umas 29 milhas de trilhas para cavalos.',
        'Acreage Athletic League': 'Ligas infantis de beisebol, softbol e futebol americano organizadas por voluntários.',
        'Publix at The Acreage': 'O Publix do bairro, com frios, padaria e farmácia.',
        'Tractor Supply Co. at Loxahatchee':
          'Ração, cercas, produtos para animais e equipamentos agrícolas para propriedades com cavalos e hortas.',
      },
      rental:
        'Há poucos imóveis para alugar, quase todos casas. Neste verão, casas de três quartos no CEP 33470 pediam entre US$ 3.600 e US$ 3.950 por mês, e as de quatro, cerca de US$ 4.500. O Jose já colocou inquilinos aqui, inclusive no Arden, para famílias que querem experimentar esse estilo de vida antes de comprar.',
      buyerNote:
        'Mais da metade dos anúncios de casas atuais já baixou o preço, e as casas ainda à venda no fim de outubro de 2026 estavam anunciadas havia uma mediana de 76 dias. Inclua no orçamento a inspeção do poço e da fossa e confira a zona de enchente do terreno.',
      sellerNote:
        'As casas vendidas em setembro de 2026 fecharam contrato em uma mediana de 28 dias, a 98% do último preço pedido, enquanto as que começaram caras ficaram meses à venda. A análise comparativa de mercado gratuita do Jose avalia o terreno além da casa.',
    },

    'lake-worth-beach': {
      tagline:
        'Um centro histórico para fazer tudo a pé, a duas milhas do Atlântico, com Tri-Rail e bangalôs sem HOA ainda abaixo de US$ 500 mil.',
      description:
        'Lake Worth Beach é uma cidade litorânea com um centro para fazer tudo a pé, cheio de restaurantes independentes, galerias e um teatro histórico. Chamava-se "Lake Worth" até 2019, fica a menos de duas milhas do Atlântico e tem uma estação do Tri-Rail dentro da cidade. Tem uma grande comunidade que fala espanhol, o que combina naturalmente com o trabalho em vários idiomas do Jose.\n\nO mercado é dividido por tipo de imóvel. Entre janeiro e setembro de 2026, as casas foram vendidas a uma mediana de US$ 560 mil, enquanto condomínios e townhouses saíram por US$ 207.500, com 6,1 meses de estoque de condomínios. Cerca de 54% dos moradores alugam.',
      highlights: [
        'Centro para fazer tudo a pé na Lake Avenue e na Lucerne Avenue, com restaurantes independentes e arte',
        'Condomínios e townhouses a uma mediana de US$ 207.500 em 2026, a menos de duas milhas da praia',
        'Praia da cidade com píer de pesca e o Casino Building dos anos 1920, reconstruído',
      ],
      lifestyleTags: [
        'A pé e artístico',
        'Acesso ao Tri-Rail',
        'Maioria inquilinos',
        'Bangalôs históricos',
        'Praia e píer',
      ],
      budgetGuide: [
        {
          label: 'Condomínios e cooperativas',
          description:
            'Principalmente condomínios e cooperativas, desde unidades antigas que precisam de obra até unidades reformadas em prédios dos anos 1950 a 1970 e para maiores de 55 anos. Com 6,1 meses de estoque de condomínios em outubro de 2026, os vendedores estão negociando, mas peça o laudo de inspeção estrutural, o estudo de reservas e qualquer taxa extra prevista antes da proposta.',
        },
        {
          label: 'Townhomes e casas menores',
          description:
            'Condomínios reformados, townhomes ou casas menores de dois e três quartos, de 900 a 1.500 pés quadrados, em bairros estabelecidos perto do centro. A maioria foi construída entre os anos 1940 e 1970, e algumas precisam de reparos estéticos.',
        },
        {
          label: 'Casas reformadas e históricas',
          description:
            'Bangalôs históricos reformados, casas na beira de canais e casas maiores de três e quatro quartos em melhor estado. As casas foram vendidas a uma mediana de US$ 560 mil em 2026, e as que ficam a leste da Dixie Hwy. ou perto do Intracoastal custam bem mais.',
        },
      ],
      schoolNote:
        'A North Grade Elementary e a South Grade Elementary têm nota 5 no GreatSchools, e as duas são escolas magnet. A Lake Worth Community Middle tem nota 3 e a Lake Worth High, 2. Muitas famílias daqui usam as opções de escolha de escola e os programas magnet do condado de Palm Beach. Confirme cada endereço no localizador de zonas do School District of Palm Beach County e visite as escolas antes de decidir.',
      pois: {
        'Lake Worth Beach Park and Municipal Pier':
          "Praia da cidade com área vigiada para nadar, píer de pesca, piscina pública e o Casino Building, com o Benny's on the Beach na entrada do píer.",
        'Bryant Park':
          'Um parque gratuito na beira do Intracoastal, com rampa para barcos, píer de pesca e um palco para shows ao ar livre.',
        'Downtown Lake Avenue and Lucerne Avenue':
          'Restaurantes independentes, galerias, cafés e lojas em cerca de dez quarteirões para fazer a pé, além do Street Painting Festival todo mês de fevereiro.',
        'Lake Worth Playhouse':
          'Um teatro comunitário na Lake Avenue, num antigo cinema dos anos 1920, com peças, shows e sessões de cinema.',
        'Snook Islands Natural Area':
          'Cerca de 100 acres de ilhas e áreas alagadas restauradas na Lake Worth Lagoon, com passarela, rampa para caiaque e píer de pesca; a entrada é gratuita.',
        'John Prince Memorial Park':
          'Um parque do condado de 726 acres no lago Osborne, com área de camping, trilhas, rampas para barcos, quadras e um parque para cães.',
        'Publix at Lake Worth':
          'O Publix perto do centro, na N. Dixie Hwy., a uma caminhada de boa parte da área residencial.',
        'Cultural Council for Palm Beach County':
          'A agência de cultura do condado, com sede na Lake Avenue e exposições gratuitas que mudam ao longo do ano.',
      },
      rental:
        'Cerca de 54% dos moradores alugam. Em 26 de outubro de 2026, 151 casas e condomínios estavam anunciados para alugar, com mediana de US$ 1.995. Os de um quarto pediam US$ 1.600, os de dois US$ 2.100 e os de três US$ 3.000, e os imóveis ficaram anunciados uma mediana de 27 dias. Morar perto do centro ou da água aumenta o aluguel.',
      buyerNote:
        'Quem compra condomínio tem vantagem: 6,1 meses de estoque e um desconto mediano de 10,4% em outubro de 2026. Para casas o mercado está mais apertado, com 3,2 meses de estoque, e casas com preço certo fecham contrato em cerca de um mês.',
      sellerNote:
        'Como cerca de 54% dos moradores alugam, Lake Worth Beach atrai tanto famílias que vão morar no imóvel quanto investidores. Os preços das casas subiram 11% em um ano até setembro de 2026. A análise comparativa de mercado gratuita do Jose mostra onde a sua casa se encaixa.',
    },
  },
};

/** The neighborhood with its text swapped for the given language (English is returned as-is). */
export function localizeNeighborhood(n: Neighborhood, locale: Locale): Neighborhood {
  if (locale === 'en') return n;
  const t = translations[locale][n.slug];
  if (!t) return n;
  return {
    ...n,
    name: t.name ?? n.name,
    tagline: t.tagline,
    description: t.description,
    highlights: t.highlights,
    lifestyleTags: t.lifestyleTags,
    budgetGuide: n.budgetGuide?.map((tier, i) => ({
      tier: tier.tier.replace(/^Under /, `${UNDER[locale]} `),
      label: t.budgetGuide[i]?.label ?? tier.label,
      description: t.budgetGuide[i]?.description ?? tier.description,
    })),
    schoolNote: t.schoolNote,
    pointsOfInterest: n.pointsOfInterest?.map((poi) => ({
      ...poi,
      description: t.pois[poi.name] ?? poi.description,
    })),
    rentalMarket: n.rentalMarket ? { ...n.rentalMarket, description: t.rental } : n.rentalMarket,
    buyerNote: t.buyerNote,
    sellerNote: t.sellerNote,
  };
}
