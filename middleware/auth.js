/**
 * Auth Middleware for Get Token....
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 * @param {String} next
 */
const auth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith("Bearer")) {
    try {
      // Get Token from header
      token = authorization.split(" ")[1];
      // Get User Information From Token
      req.accessToken = token;
      // console.log(req.accessToken);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send({ status: "Fail", message: "Invalid Token.." });
    }
  }
  if (!token) {
    res.status(401).send({ status: "Fail", message: "Token Is Empty" });
  }
};

export default auth;
