import { dbContext } from "../db/DbContext"



class GalaxiesService{
    async getAll() {
        const galaxies = await dbContext.Galaxies.find()
        return galaxies
    }
    async getOne(id) {
        const galaxy = await dbContext.Galaxies.findById(id)
        return galaxy
    }
    async create(data){
        const galaxy = await dbContext.Galaxies.create(data)
        return galaxy
    }
}


export const galaxiesService = new GalaxiesService