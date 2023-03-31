import mongoose from "mongoose";

const RoyaltyBonusEligible =  mongoose.Schema({

    Club50Eligible:{
        type: mongoose.Schema.Types.Mixed,
        default: []
    },
    Club100Eligible:{
        type: mongoose.Schema.Types.Mixed,
        default: []
    },
    Club150Eligible:{
        type: mongoose.Schema.Types.Mixed,
        default: []
    },
    Club200Eligible:{
        type: mongoose.Schema.Types.Mixed,
        default: []
    },
    Club500Eligible:{
        type: mongoose.Schema.Types.Mixed,
        default: []
    },
    Club1000Eligible:{
        type: mongoose.Schema.Types.Mixed,
        default: []
    },
},
{
    timestamps: true
})
export default mongoose.models.RoyaltyBonusEligib || mongoose.model('RoyaltyBonusEligib', RoyaltyBonusEligible)
