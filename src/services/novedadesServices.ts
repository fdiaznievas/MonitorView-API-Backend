import boom from '@hapi/boom';

import sequelize from '../libs/sequelize';


class NovedadesService {

  constructor() {}


  async create(data:any){
    const newNovedad = await sequelize.models.Novedad.create(data);
    return newNovedad;
  }

  async find() {
    const rta = await sequelize.models.Novedad.findAll();
    return rta;
  }

  async findOne(id:string) {
    const user:any|null = await sequelize.models.Novedad.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id:any, changes:any) {
    const user:any = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
  }

  // async replace(time:any, changes:any) {
  //   return
  // }

  async delete(id:any) {
    const user:any = await this.findOne(id)
    await user.destroy();
    return { id }
  }
}

export default NovedadesService;
