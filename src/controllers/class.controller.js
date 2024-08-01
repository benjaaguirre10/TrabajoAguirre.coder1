import { createResponse } from "../utils.js";

export default class Controllers{
    constructor(service){
        this.service = service;
    }
    getAll = async(req, res, next) =>{
        try {
            const data =  await this.service.getAll();
           !data ? createResponse(res, 404, data) : createResponse(res, 200, data);
        } catch (error) {
            next(error)
        }
    }
    getById = async(req, res, next) =>{
        try {
            const { id } = req.params;
            const data =  await this.service.getById(id);
            !data ? createResponse(res, 404, data) : createResponse(res, 200, data);
        } catch (error) {
            next(error)
        }
    }
    create = async(req, res, next) =>{
        try {
            const data = this.service.create(req.body);
            !data ? createResponse(res, 404, data) : createResponse(res, 200, data);
        } catch (error) {
            next(error)
        }
    }
    update = async(req, res, next) =>{
        try {
           const { id } = req.params;
           const data = await this.service.update(id, req.body)
           !data ? createResponse(res, 404, data) : createResponse(res, 200, data);
        } catch (error) {
            next(error)
        }
    }
    delete = async(req, res, next) =>{
        try {
            const { id } = req.params;
            const data = await this.service.delete(id);
            !data ? createResponse(res, 404, data) : createResponse(res, 200, data);
        } catch (error) {
            
        }
    }

}