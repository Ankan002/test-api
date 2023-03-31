import mongoose from "mongoose";


const TransactionRecipt = mongoose.Schema({

    RecordOwner: {
        type: String,
        required: true
    },
    TransactionFrom: {
        type: String,
        required: true
    },
    TransactionTo: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    Remark: {
        type: String,
        required: true
    },
    Method: {
        type: String,
        required: true
    },
    TransactionType: {
        type: String,
        required: true
    }


},
    {
        timestamps: true
    })
export default mongoose.models.TransactionRecipt || mongoose.model('TransactionRecipt', TransactionRecipt)
