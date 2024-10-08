import Controllers from "./class.controller.js";
import TicketService from "../services/ticket.service.js";
import { HttpResponse } from "../utils/http.response.js";

const httpResponse = new HttpResponse();
const ticketService = new TicketService();

export default class TicketController extends Controllers {
  constructor() {
    super(ticketService);
  }

  async generateTicket(req, res, next) {
    try {
      const user = req.user;
      const ticket = await ticketService.generateTicket(user);
      if (!data) return httpResponse.notFound(res, data)
      else return httpResponse.Ok(res, data)
    } catch (error) {
      next(error);
    }
  }
}