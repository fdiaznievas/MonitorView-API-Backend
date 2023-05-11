import { NovedadesEntry } from '../types';
import novedadesDatos from './novedades.json'


const novedades: Array<NovedadesEntry> = novedadesDatos as Array<NovedadesEntry>

export const getEntries = () => novedades;

export const addEntry = () => null;
