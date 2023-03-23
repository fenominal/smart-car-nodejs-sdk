import smartcar from "smartcar";
import * as variables from "../config/env.js";

/**
 * Controller Function for SignIn.
 * @author Patel Ayush
 * @returns true or false.
 */
const client = new smartcar.AuthClient({
  clientId: variables.clientId, // fallback to SMARTCAR_CLIENT_ID ENV variable
  clientSecret: variables.clientSecret, // fallback to SMARTCAR_CLIENT_SECRET ENV variable
  redirectUri: variables.redirectUri, // fallback to SMARTCAR_REDIRECT_URI ENV variable
  mode: "test",
});

export default client;
