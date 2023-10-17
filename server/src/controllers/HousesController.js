import { response } from "express";
import BaseController from "../utils/BaseController.js";
import { housesService } from "../services/HousesService.js";
import { Auth0Provider } from "@bcwdev/auth0provider";

export class HousesController extends BaseController {

    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/:houseId', this.getHouseById)


            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createHouse)
    }

    async getHouses(req, response, next) {
        try {
            const houses = await housesService.getCars()
            return response.send(houses)
        } catch (error) {
            next(error)

        }
    }

    async createHouse(req, res, next) {
        try {
            const houseData = req.body
            const userInfo = req.userInfo
            houseData.creatorId = userInfo.id
            const house = await housesService.createHouse(houseData)
            return res.send(house)

        } catch (error) {
            next(error)
        }


    }
    async getHouseById(req, res, next) {
        try {
            const houseId = req.params.houseId
            const house = await housesService.getHouseById(houseId)
            return res.send(house)

        } catch (error) {
            next(error)
        }

    }
}