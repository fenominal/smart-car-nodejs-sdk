// User model schema file.//

import mongoose from "mongoose";

const smartCar = mongoose.Schema({
  client_ID: {
    type: String,
    require: true,
  },
  client_secrate: {
    type: String,
    require: true,
  },
  client_code: {
    type: Object,
    require: true,
  },
  car_scope: [
    {
      type: Object,
      enum: [
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
      ],
      require: true,
    },
  ],
});

export default mongoose.model("CARCODE", smartCar);
