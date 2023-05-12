import novedadesDatos from './novedades.json'

const novedades = novedadesDatos

class NovedadesService {
  listNovedades;

  constructor() {
    this.listNovedades = novedades;
    this.generate();
  }

  generate() {

  }

  create(){

  }

  find() {
    return this.listNovedades;
  }

  findOne(id:any) {
    return this.listNovedades.find(item => item.id == id);
  }

  update() {

  }

  delete() {

  }
}

export default NovedadesService;

export const getEntries = () => novedades;

export const addEntry = () => null;
