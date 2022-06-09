import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";


export class StarsController extends BaseController{
    constructor(){
        super('api/stars')
        this.router 
            .get('', this.getAll)
            .get('/:id', this.getOne)
            .post('', this.create)
    }
    async getAll(req, res, next) {
        try {
            let stars = await starsService.getAll()
            return res.send(stars)
        } catch (error) {
            next(error)
        }
    }
    async getOne(req, res, next) {
        try {
            let star = await starsService.getOne(req.params.id)
            return res.send(star)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let star = await starsService.create(req.body)
            return res.send(star)
        } catch (error) {
            next(error)
        }
    }

}