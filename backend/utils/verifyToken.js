import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated"));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Invalid access_token"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id) {
      next();
    } else {
      return next(
        createError(401, "You are not authorised")
      );
    }
  });
};

export const verifySeller = (req, res, next) => {
  verifyToken(req, res, () => {
    
  });
};
