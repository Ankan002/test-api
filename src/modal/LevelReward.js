import mongoose from "mongoose";

const LevelReward = mongoose.Schema({
    
    RecordOwner: {
        type: String,
        required: false,
        default:"null"
    },
    RecordUser: {
        type: String,
        required: false,
        default:"null"
    },
    LevelEarned: {
        type: String,
        required: false,
        default:"null"
    },
    CoinEarned: {
        type: String,
        required: false,
        default:"null"
    },
    EarnedPackage: {
        type: String,
        required: false,
        default:"null"
    },
    RewardFrom: {
        type: String,
        required: false,
        default:"null"
    }
},
    {
        timestamps: true
    })
export default mongoose.models.LevelRewards || mongoose.model('LevelRewards', LevelReward)
