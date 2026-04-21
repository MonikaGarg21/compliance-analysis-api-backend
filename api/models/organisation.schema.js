import mongoose from "mongoose";
import { randomUUID } from "crypto";


const companySchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      default: () => randomUUID(),
      unique: true,
      index: true,
    },
    legalName: { type: String, required: true, trim: true }, // as Alphabet Company
    dbaName: { type: String, required: true }, // dbname - doing business as name   eg. Google cause Alphabet is the parent company of google
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
    //contact
    primaryContact: {
      name: String,
      email: { type: String, lowercase: true, trim: true },
    },
    phoneNumber: String,
    website: String,

    //system fields:
    createBy: { type: mongoose.Schema.Types.ObjectId, ref: "Auth" },
    isActive: { type: Boolean, default: true },
    deleteAt: { type: Date, default: null },

    //regularity:
    identifiers: {
      //usa/gloabal
      fdafai: String,
      labellerCode: String,
      dunsNumber: String, // data universal number system

      //indian/corporate
      cin: String,
      gstin: String,
      pan: String,

      //indian regularity
      cdsco:String,          //centeral standard drug correction organisation
      others:String,
    },
  },
  {
    timestamps: true,
  },
);

export const Organisation = mongoose.model("Organisation",companySchema);

// export const Organisation = mongoose.model("Organisation",company);