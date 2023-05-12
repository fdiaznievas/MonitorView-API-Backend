import agendaImport from './agenda.json'

const agenda = agendaImport;

class ContactosService {
  listContactos;

  constructor() {
    this.listContactos = agenda;
  }

  generate() {

  }

  create(){

  }

  find() {
    return this.listContactos;
  }

  findOne(id:any) {
    return this.listContactos.find(item => item.id == id);
  }

  update() {

  }

  delete() {

  }
}

export default ContactosService;

export const getEntries = () => agenda;

export const addEntry = () => null;
