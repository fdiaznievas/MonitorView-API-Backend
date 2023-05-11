export type Weather = 'sunny' | 'cloudy' | 'windy' | 'stormy'
export type Status = 'true' | 'false'
export type Provincia = 'Cordoba' | 'Buenos Aires' | 'Entre Rios'


export interface NovedadesEntry {
  id: number,
  active: boolean,
  cidSitio: number,
  sitio: string,
  descripcion: string,
  fecha: string
}


interface EspecialNovedadesEntry extends NovedadesEntry {
  extensionMostrador: boolean,
  provincia: Provincia
}
