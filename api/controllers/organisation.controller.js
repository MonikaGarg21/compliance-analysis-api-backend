import { Organisation } from "../models/organisation.schema.js";


export const createOrganisation = async (req,res,next) =>{
  console.log("hello");
  
  try {
    const {
      legalName,
      dbaName,
      address,
      primaryContact,
      phoneNumber,
      website,
      createBy,
      identifiers
    } = req.body

    if(!legalName||!dbaName){
      return res.status(400).json({message:"LegalName & DbaName is required"});
    }

    const organisation = await Organisation.create({
      legalName,
      dbaName,
      address,
      primaryContact,
      phoneNumber,
      website,
      createBy:req.user.id,
      identifiers
    })


    //create query
    return res.status(201).json({message: "organisation created successfully",data:organisation});
  } catch (error) {
    return res.status(500).json({message: error.messsage});
  }
};