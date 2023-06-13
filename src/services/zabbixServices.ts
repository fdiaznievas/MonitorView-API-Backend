import zabbixDatos from './zabbix.json'
import boom from '@hapi/boom'

const zabbix = zabbixDatos;


class ZabbixService {
  listZabbix;

  constructor() {
    this.listZabbix = zabbix;
    this.generate();
  }

  generate() {

  }

  async create(data:any){
    console.log("Ejecutando create en zabbixServices.ts")
    const newZabbixAlert= {
      ... data
    }
    this.listZabbix.push(newZabbixAlert);
    return newZabbixAlert;
  }

  async find() {
    console.log("Ejecutando find en zabbixServices.ts")
    return new Promise( (resolve, _reject) => {
      setTimeout( () => {
        resolve(this.listZabbix);
      }, 100);
      console.log("Se ejecutó un setTimeout")
    })
  }

  async findOne(time:string) {
    console.log("Ejecutando findOne en zabbixServices.ts")
    const parseTime = Number(time)
    const alertaZabbix:Object | undefined = await this.listZabbix.find(item => item.time === parseTime);
    if (alertaZabbix == null) {
      throw boom.notFound('Alerta Zabbix NO encontrada!');
    }
    else {
      return alertaZabbix;
    }
  }

  async update(time:any, changes:any) {
    console.log("Ejecutando update en zabbixServices.ts")
    const parseTime:number = Number(time)
    const index = await this.listZabbix.findIndex(item => item.time === parseTime);

    if (index === -1) {
      throw boom.notFound('Novedad no existe')
    }
    else {
      const objNovedad = this.listZabbix[index];
      this.listZabbix[index] = {
        ...objNovedad,
        ...changes
      };
    };
    return this.listZabbix[index];
  }

  async replace(time:any, changes:any) {
    console.log("Ejecutando replace en zabbixServices.ts")
    const parseTime:number = Number(time)
    const index = await this.listZabbix.findIndex(item => item.time === parseTime);

    if (index === -1) {
      throw boom.notFound('Novedad no existe')
    }
    else {
      const objNovedad = this.listZabbix[index];
      this.listZabbix[index] = {
        "time": parseTime,
        ...changes
      };
    };
    return this.listZabbix[index];
  }

  async delete(time:any) {
    const index = await this.listZabbix.findIndex(item => item.time == time);
    console.log("Ejecutando delete en zabbixServices.ts")
    if (index === -1) {
      throw boom.notFound("Alerta no encontrada")
    }
    this.listZabbix.splice(index,1)
    return { time };
  }
}

export default ZabbixService;
