import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse()

export default class Controllers {
    constructor(service) {
        this.service = service;
    }
    getAll = async (req, res, next) => {
        try {
            const data = await this.service.getAll();
            if (!data) return httpResponse.notFound(res, data)
            else return httpResponse.Ok(res, data)
        } catch (error) {
            console.log("Se encuentra en el controller");
            next(error)
        }
    }
    getById = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = await this.service.getById(id);
            if (!data) return httpResponse.notFound(res, data)
            else return httpResponse.Ok(res, data)
        } catch (error) {
            console.log("Se encuentra en el controller");
            next(error)
        }
    }
    create = async (req, res, next) => {
        try {
            const data = this.service.create(req.body);
            if (!data) return httpResponse.notFound(res, data)
            else return httpResponse.Ok(res, data)
        } catch (error) {
            console.log("Se encuentra en el controller");
            next(error)
        }
    }
    update = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = await this.service.update(id, req.body)
            if (!data) return httpResponse.notFound(res, data)
            else return httpResponse.Ok(res, data)
        } catch (error) {
            console.log("Se encuentra en el controller");
            next(error)
        }
    }
    delete = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = await this.service.delete(id);
            if (!data) return httpResponse.notFound(res, data)
            else return httpResponse.Ok(res, data)
        } catch (error) {
            console.log("Se encuentra en el controller");
            next(error)
        }
    }

}