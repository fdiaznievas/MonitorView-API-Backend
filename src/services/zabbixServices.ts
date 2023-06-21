import zabbixDatos from './zabbix.json';
import boom from '@hapi/boom';

import { Zabbix } from './../db/models/zabbix.model';

import { sequelize } from '../libs/sequelize';
import { getConnection } from '../libs/postgres';

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
    const newUser = await sequelize.models.Zabbix.create(data);
    console.log("Ejecutando create en zabbixServices.ts")
    return newUser;
    // ↓↓ TODO ESTO SE APLICABA ANTES DE SEQUELIZE ↓↓
    // const newZabbixAlert= {
    //   ... data
    // }
    // this.listZabbix.push(newZabbixAlert);
    // return newZabbixAlert;
  }

  async find() {
    const rta = await sequelize.models.Zabbix.findAll();
    return rta;
  }
  // {
  //   console.log("Ejecutando find en zabbixServices.ts")
  //   return new Promise( (resolve, _reject) => {
  //     setTimeout( () => {
  //       resolve(this.listZabbix);
  //     }, 100);
  //     console.log("Se ejecutó un setTimeout")
  //   })
  // }

  async findOne(id:string) {
    const user:any|null = await sequelize.models.Zabbix.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
    // console.log("Ejecutando findOne en zabbixServices.ts")
    // const parseTime = Number(time)
    // const alertaZabbix:Object | undefined = await this.listZabbix.find(item => item.time === parseTime);
    // if (alertaZabbix == null) {
    //   throw boom.notFound('Alerta Zabbix NO encontrada!');
    // }
    // else {
    //   return alertaZabbix;
    // }
  }

  async update(id:string, changes:object) {
    const user:any = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
    // console.log("Ejecutando update en zabbixServices.ts")
    // const parseTime:number = Number(time)
    // const index = await this.listZabbix.findIndex(item => item.time === parseTime);

    // if (index === -1) {
    //   throw boom.notFound('Novedad no existe')
    // }
    // else {
    //   const objNovedad = this.listZabbix[index];
    //   this.listZabbix[index] = {
    //     ...objNovedad,
    //     ...changes
    //   };
    // };
    // return this.listZabbix[index];
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

  async delete(id:string) {
    const user:any = await this.findOne(id)
    await user.destroy();
    return { id }

    // const index = await this.listZabbix.findIndex(item => item.time == time);
    // console.log("Ejecutando delete en zabbixServices.ts")
    // if (index === -1) {
    //   throw boom.notFound("Alerta no encontrada")
    // }
    // this.listZabbix.splice(index,1)
    // return { time };
  }
}

export default ZabbixService;
