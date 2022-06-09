import { dbContext } from "../db/DbContext"




class StarsService{
    async getAll() {
        let stars = await dbContext.Stars.find()
        return stars
    }
    async getOne(id) {
        let star = await dbContext.Stars.findById(id)
        return star
    }
    async create(data) {
        let star = await dbContext.Stars.create(data)
        return star
    }


}

export const starsService = new StarsService()