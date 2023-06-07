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
    const newZabbixAlert= {
      ... data
    }
    this.listZabbix.push(newZabbixAlert);
    return newZabbixAlert;
  }

  async find() {
    return new Promise( (resolve, _reject) => {
      setTimeout( () => {
        resolve(this.listZabbix);
      }, 100);
    })
  }

  async findOne(time:string) {
    const parseTime = Number(time)
    const alertaZabbix:Object | undefined = await this.listZabbix.find(item => item.Time === parseTime);
    console.log("alertaZabbix es tipo:", typeof(alertaZabbix))
    console.log("Jujuuu el profe Guss")
    if (alertaZabbix == null) {
      throw boom.notFound('Alerta Zabbix NO encontrada!');
    }
    else {
      return alertaZabbix;
    }
  }

  async update(time:any, changes:any) {
    const parseTime:number = Number(time)
    const index = await this.listZabbix.findIndex(item => item.Time === parseTime);

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

  async delete(time:any) {
    const index = await this.listZabbix.findIndex(item => item.Time == time);

    if (index === -1) {
      throw boom.notFound("Alerta no encontrada")
    }
    this.listZabbix.splice(index,1)
    return { time };
  }
}

export default ZabbixService;
