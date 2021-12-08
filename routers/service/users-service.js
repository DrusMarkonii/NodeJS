import { sequelize } from "../database/database.state.js"

export class UsersService {
    
    async getUsersList(id) {
        await sequelize.model('User').findOne({
            where: {
                id
            },
            attributes: ['firstName'],
        })
    }

    async createUser() {
        await sequelize.model('User').create({
            firstName: 'lolkek',
            lastName: 'keklol'
        })
    }
}