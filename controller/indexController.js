import smartcar from "smartcar";
// import Vehicle from "smartcar/lib/vehicle.js";

import client from "../connection/coonectionFile.js";
import carModel from "../models/carModel.js";

// global variable to save our accessToken
let access;
let scope;

/**
 * Login PageController...
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 * @param {String} next
 */
export const indexPage = async (req, res) => {
  scope = [
    "read_vehicle_info",
    "read_tires",
    "read_engine_oil",
    "read_battery",
    "read_charge",
    "control_charge",
    "control_security",
    "read_vin",
    "read_fuel",
    "read_location",
    "read_odometer",
  ];
  try {
    const link = client.getAuthUrl(scope);
  res.redirect(link);
  } catch (error) {
    console.log(error);
  }
  
};

/**
 * Exchange Access token....
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 * @param {String} next
 */
export const exchangeController = async (req, res) => {
  const code = req.query.code;
  access = await client.exchangeCode(code);

  console.log(access);
  try {
    const insertCar = new carModel({
      client_ID: client.clientId,
      client_secrate: client.clientSecret,
      client_code: access,
      car_scope: scope,
    });
    await insertCar.save();

    res.status(200).json({
      status: "Success",
      Message: "Car Inseterd",
      Access_Token: access.accessToken,
      Refresh_Token: access.refreshToken,
      Token_Expire: access.refreshToken,
      Refresh_Expire: access.refreshExpiration,
    });
  } catch (error) {
    res.status(200).json({ status: "Error", Message: error });
    console.log("Here error", error);
  }
};

/**
 * Get Vechical information Controller....
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 * @param {String} next
 */
export const getVechical = async (req, res) => {
  console.log("=== getVechical ===");
  let allVehicles = await smartcar.getVehicles(req.accessToken);
  res.status(200).json({ status: "Success", Message: allVehicles });
};

/**
 * Get User information Controller....
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 * @param {String} next
 */
export const userData = async (req, res) => {
  const user = await smartcar.getUser(req.accessToken);
  res.status(200).json({ status: "Success", Message: user });
};

/**
 * Tire information Controller....
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 * @param {String} next
 */
export const getTireInfo = async (req, res) => {
  const { id: _id } = req.params;
  // instantiate the first vehicle in the vehicle id list
  const vehicle = new smartcar.Vehicle(_id, req.accessToken);
  const Presser = await vehicle.tirePressure();
  res.status(200).json({ status: "Success", Message: Presser });
};

/**
 * Permission information Controller....
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 * @param {String} next
 */
export const getpermission = async (req, res) => {
  const { id: _id } = req.params;
  // instantiate the first vehicle in the vehicle id list
  const vehicle = new smartcar.Vehicle(_id, req.accessToken);
  const attributes = await vehicle.permissions();
  res.status(200).json({ status: "Success", Message: attributes });
};

/**
 * Car information Controller....
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 * @param {String} next
 */
export const getCarInformation = async (req, res) => {
  const { id: _id } = req.params;
  const vehicle = new smartcar.Vehicle(_id, req.accessToken);
  const attributes = await vehicle.attributes();
  res.status(200).json({ status: "Success", Message: attributes });
};

/**
 * Car information Controller....
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 * @param {String} next
 */
export const getCarOil = async (req, res) => {
  const { id: _id } = req.params;
  const vehicle = new smartcar.Vehicle(_id, req.accessToken);
  const engineOil = await vehicle.engineOil();
  res.status(200).json({ status: "Success", Message: engineOil });
};
