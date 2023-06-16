import novedadesDatos from './novedades.json'

import { pool } from '../libs/postgres.pool';
import { getConnection } from '../libs/postgres';

const novedades = novedadesDatos

class NovedadesService {
  listNovedades;
  pool;

  constructor() {
    this.listNovedades = novedades;
    this.pool = pool;
    this.generate();
  }

  generate() {

  }

  async create(data:any){
    const newNovedad = {
      ... data
    }
    this.listNovedades.push(newNovedad);
    return newNovedad;
  }

  async find() {
    const query = 'SELECT * from zabbix';
    const rta = await this.pool.query(query)
    return rta.rows
  }

  async findOne(id:any) {
    return this.listNovedades.find(item => item.id == id);
  }

  async update(id:any, changes:any) {
    const index = this.listNovedades.findIndex(item => item.id == id);

    if (index === -1) {
      throw new Error('Evento no encontrado');
    }
    else {
      const objNovedad = this.listNovedades[index];
      this.listNovedades[index] = {
        ...objNovedad,
        ...changes
      };
    };

    return this.listNovedades[index];
  }

  async delete(id:any) {
    const index = this.listNovedades.findIndex(item => item.id == id);

    if (index === -1) {
      throw new Error('Evento no encontrado');
    }
    this.listNovedades.splice(index,1)
    return { id };
  }
}

export default NovedadesService;
