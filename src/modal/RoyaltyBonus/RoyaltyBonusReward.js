import mongoose from "mongoose";

const RoyaltyBonusReward =  mongoose.Schema({

   RecordOwner:{
    type:String,
    default:"null"
   },
   GotReward:{
    type:String,
    default:"null"
   },
   CompanyJoinings:{
    type:String,
    default:"null"
   },
   IncomePerId:{
    type:String,
    default:"2"
   },
   AchievedMembers:{
    type:String,
    default:"null"
   },
   ClubRoyality:{
    type:String,
    default:"null"
   },
   Club:{
    type:String,
    default:"null"
   }

},
{
    timestamps: true
})
export default mongoose.models.RoyaltyBonusRew || mongoose.model('RoyaltyBonusRew', RoyaltyBonusReward)
