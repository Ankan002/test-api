import mongoose from "mongoose";


const PackageInvoice = mongoose.Schema({

    RecordOwner: {
        type: String,
        required: true
    },
    OwnerUsername: {
        type: String,
        required: true
    },
    OwnerSponsorId: {
        type: String,
        required: true
    },
    OwnerUpperline: {
        type: String,
        required: true
    },
    PackageName: {
        type: String,
        required: true
    },
    PackagePrice: {
        type: Number,
        required: true
    },
    DailyReward: {
        type: Number,
        required: true
    },
    MaxDays: {
        type: String,
        required: true
    },
    PackagePurchasedOn: {
        type: String,
        required: true
    },
    PackageExpireOn: {
        type: String,
        required: true
    },
    TotalEarnedFromThisPackage: {
        type: Number,
        required: true
    },
    TotalLeftEarningsFromThisPackage: {
        type: Number,
        required: true
    },
    Type: {
        type: String,
        required: true
    }  
    
},
    {
        timestamps: true
    })
export default mongoose.models.PackageInvoice || mongoose.model('PackageInvoice', PackageInvoice)
