import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HimnosService {
  private himnos: Himno[] = [
    {
      "Timestamp": "2021/06/29 2:39:30 PM CDT",
      "numero": 1,
      "titulo": "SEGUID A JES�S",
      "URL": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/yGcxyuKlR1Y\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      "autor": "JOS� M. PEREZ y VICTOR MENDOZA",
      "nota": "Si (B) bemol",
      "estrofa1": "Sed fieles a Cristo, el Rey. Su gracia abundante jam�s faltar�. Su brazo potente os defender�, Sed fieles a Cristo el Rey",
      "coro": "Seguid a Jes�s, andad en la luz, Sed fieles a Cristo el Rey. Servidle de amor, luchad con valor, Sed fieles a Cristo el Rey",
      "estrofa2": "Tentados ser�is, conflictos tendr�is. Sed fielesa Cristo el Rey. A vuestro favor est� el Salvador. Sed fieles a Cristo el Rey",
      "estrofa3": "Jam�s Jehov� os ha de faltar, Sed fieles a Cristo el Rey, Os sustentar�, el triunfo dar�, Sed fieles a Cristo el Rey.",
      "estrofa4": ""
    },
    {
      "Timestamp": "2021/06/29 3:46:28 PM CDT",
      "numero": 2,
      "titulo": "Gloriosa Hosana",
      "URL": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/seOYxkgDyq8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      "autor": "TOMAS N",
      "nota": "DO (C)",
      "estrofa1": "Gloriosa hosana, en gran memoria Canto gozoso al Rey de Gloria. Qu� amor tan grande del coraz�n, Que redimi� mi rebeli�n!",
      "coro": "Salvador m�o, te amo en verdad, T� quien te diste por mi maldad. Sufriste muerte, crucifixi�n, Para comprarme la salvaci�n",
      "estrofa2": "Sufriste pena que causa llanto, Angustias crueles y gran quebranto; Mas en la gloria en todo real, Tu nombre oh Cristo, ser� inmortal",
      "estrofa3": "Nunca mi deuda podr� pagarte, Que cancelaste porque me amastes; Servirle, amarte, es mi ambici�n, T� quien habitas mi coraz�n",
      "estrofa4": ""
    },
    {
      "Timestamp": "2021/06/29 3:54:40 PM CDT",
      "numero": 3,
      "titulo": "NO ME DEJES",
      "URL": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/WmfCXtZDRJs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      "autor": "An�nimo",
      "nota": "Fa (F)",
      "estrofa1": "No me dejes, no me olvides, tierno Salvador; Muchos gozan tus mercedes; oye mi clamor.",
      "coro": "Cristo, Cristo, oye T� mi voz; Salvador, tu gracia dame; oye mi clamor.",
      "estrofa2": "Ante el trono de tu gracia hallo dulce paz, Nada aqu� mi alma sacia, T� eres mi solaz.",
      "estrofa3": "S�lo f�o en tus bondades, gu�ame en tu luz; Y a mi alma no deseches, s�lvame, Jes�s",
      "estrofa4": "Fuente viva de consuelo, t� eres para m�, �A qui�n tengo en este suelo sino s�lo a ti?"
    },
    {
      "Timestamp": "2021/06/29 4:01:19 PM CDT",
      "numero": 4,
      "titulo": "POR FE EN JESUS EL SALVADOR",
      "URL": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qO9omuB3Pzg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      "autor": "EDGAR PAGE",
      "nota": "Sol (G)",
      "estrofa1": "Por fe en Jes�s, El Salvador, Se hace salvo el pecador, Sin merecer tan rico don, Recibe plena salvaci�n.",
      "coro": "�Oh! �Excelsa gracias del amor! Que Dios perdona al pecador! Si presto est� a confesar, Sus culpas y en Jes�s confiar, No hay otro autor de salvaci�n Pues Cristo obr� la redenci�n.",
      "estrofa2": "La vida antigua ya pas� Y todo nuevo se torn�, Aqu� cual peregrino es, Hogar con Dios tendr� despu�s.",
      "estrofa3": "A�n cuando El nada tenga aqu�, Su gran herencia tiene, s�, Arriba en gloria con Jes�s, Quien le ha salvador por su cruz.",
      "estrofa4": ""
    },
    {
      "Timestamp": "2021/06/29 4:08:58 PM CDT",
      "numero": 5,
      "titulo": "FUEGO DA, DANOS YA",
      "URL": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/m2SBo-UNsM8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      "autor": "RALPH D. WILLIAMS",
      "nota": "Mi (E) Bemol",
      "estrofa1": "�Oh, Cristo! con fervor clamamos, Fuego da, danos ya, �Oh, Se�or! Tu prometido don buscamos, Fuego da, danos ya �Oh, Se�or! Anhela nuestros corazones, Conocer la gloria de los dones, Y ver librar los pecadores, Fuego da, danos ya, �Oh, Se�or!",
      "coro": "N",
      "estrofa2": "�Oh, Padre Dios! oye el clamor, Fuego da, danos ya �Oh, Se�or! Tu iglesia quiere el poder, Fuego da, danos ya �Oh, Se�or! Consume toda la escoria, Y las vidas llena de tu gloria, Para predicar la bella historia, Fuego da, danos ya �Oh, Se�or!",
      "estrofa3": "Fuego del Esp�ritu queremos, Fuego da, danos ya �Oh, Se�or! Ser testigos tuyos anhelamos, Fuego da, danos ya �Oh, Se�or! Para triunfar en toda prueba, En tentaci�n ganar victoria, Guardar la santidad sin mancha, Fuego da, danos ya �Oh, Se�or!",
      "estrofa4": ""
    },
    {
      "Timestamp": "2021/06/29 4:16:35 PM CDT",
      "numero": 6,
      "titulo": "EL REY DE LOS REYES",
      "URL": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/9D9aqk11xWs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      "autor": "CELESTINO MARTINEZ Y RAFAEL RAMIREZ",
      "nota": "Fa (F)",
      "estrofa1": "Al Rey de los Reyes, Jehov� el glorioso, Cantemos con gozo en santa comuni�n, Con gran reverencia a �l nos lleguemos, Su nombre ensalcemos de todo coraz�n.",
      "coro": "Gozo y paz, hay en mi coraz�n, Su gracia me salv� Y asegur� mi salvaci�n. Es mi anhelo a mi Se�or servir, Su voluntad cumplir Y para El siempre vivir. �Oh, gran dulce esperanza! Nos alienta para seguir, La senda del Maestro nos marc� Con su ejemplo aqu�. All� en lontananza, al fin de la labor, Daremos alabanza a nuestro Salvador.",
      "estrofa2": "El Rey de los Reyes, Jes�s el amante, Sublime y truinfante al mundo volver�. Con todos sus santos, con alegres cantos, Su iglesia anhelante a El se unir�",
      "estrofa3": "Al Santo Esp�ritu, fiel y bendito. Oh demos bienvenida al hu�sped celestial, Y con su presencia, virtud y potencia, Se acabar� dolencia, pecado y todo mal.",
      "estrofa4": "Al Dios solo Sabio y Omnipotente, Den todos reverentes honor y majestad, Por sus beneficios recibe propicio, Mi humilde servicio, Divina Trinidad"
    },
    {
      "Timestamp": "2021/06/29 4:29:24 PM CDT",
      "numero": 7,
      "titulo": "MI REY Y MI AMIGO",
      "URL": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/tFwPrpDGfNA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
      "autor": "V. MENDOZA",
      "nota": "Re (D) bemol",
      "estrofa1": "Jes�s es mi Rey soberano, Mi gozo es cantar su loor; Es Rey me ve cual hermano, Es Rey y me imparte su amor, Dejando su trono de gloria, Me vino a sacar de la escoria, �Yo soy feliz; y soy feliz con El!",
      "coro": "N",
      "estrofa2": "Jes�s es mi amigo anhelado, Y en sombras o en luz siempre va, Paciente y humilde a mi lado, y ayuda y consuelo me d�. Por eso constante le sigo, Porque El es mi Rey y mi amigo, �Y yo soy feliz, y yo soy feliz con El!",
      "estrofa3": "Se�or, �qu� pudiera yo darte, Por tanta bondad para mi? �Me basta servirte y amarte? �Es todo entregarme yo a ti? Entonces, acepta mi vida, Que a ti solo queda rendida. �Pues yo soy feliz, pues yo soy feliz por ti!",
      "estrofa4": ""
    }
  ]

  constructor() { }

  getHimnos(){
    return this.himnos;
  }

}

export interface Himno{
  Timestamp: string;
  numero: number;
  titulo: string;
  URL: string;
  autor: string;
  nota: string;
  estrofa1: string;
  coro: string;
  estrofa2: string;
  estrofa3: string;
  estrofa4: string;
}