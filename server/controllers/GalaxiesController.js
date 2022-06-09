import { galaxiesService } from "../services/GalaxiesService";
import BaseController from "../utils/BaseController";


export class GalaxiesController extends BaseController{
    constructor(){
        super('api/galaxies')
        this.router 
            .get('', this.getAll)
            .get('/:id', this.getOne)
            .post('', this.create)
    }
async getAll(req, res, next) {
       try{
            let galaxies = await galaxiesService.getAll()
            return res.send(galaxies)
       } catch(error){
           next(error)
       }
    }

async getOne(req, res, next) {
        try {
            let galaxy = await galaxiesService.getOne(req.params.id)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

async create(req, res, next) {
        try {
           let galaxy = await galaxiesService.create(req.body)
           return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}