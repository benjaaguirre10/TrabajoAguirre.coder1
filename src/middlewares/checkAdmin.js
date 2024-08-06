import { HttpResponse } from "../utils/http.response";
const httpResponse = new HttpResponse()

export const checkAdmin = async (req, res, next) => {
  try {
    //   console.log(req.user)
    const { role } = req.user;
    if (role !== "admin") httpResponse.Unauthorized(res, "Este endpoint es solo para usuarios Type: Admin");
    else next();
  } catch (error) {
    next(error);
  }
};