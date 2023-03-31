import mongoose from "mongoose";

const DailyReward = mongoose.Schema({

    RecordOwner: {
        type: String,
        required: false,
        default:"null"
    },
    RecordUpperline: {
        type: String,
        required: false,
        default:"null"
    },
    StakedPackage: {
        type: String,
        required: false,
        default:"null"
    },
    CoinEarned: {
        type: String,
        required: false,
        default:"null"
    },
    CoinPercantage: {
        type: String,
        required: false,
        default:"null"
    }

},
    {
        timestamps: true
    })
export default mongoose.models.DailyRewardss || mongoose.model('DailyRewardss', DailyReward)
