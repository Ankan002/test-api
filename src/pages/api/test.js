import initDB from "../../helper/initDB"
import PlanInvoice from "../../modal/Record/PlanRecord";
import DailyReward from "../../modal/DailyReward";
import TransactionRecipt from "../../modal/TransactionRecord/TransactionRecipt";
import ShortRecord from "../../modal/ShortRecord"
import DailyShortReward from "../../modal/DailyShortReward"

initDB()

export default async(req,res)=>{

  const { pkg } = req.body;


  try {
    // Finding Plan Invoices
    const allPackages = await PlanInvoice.find().lean();

    const dailyShortRewards = {};

    // Iterate over all the packages
   
      const price = Number(pkg.PackagePrice);
      const percentage = pkg.DailyReward;
      const recordOwner = pkg.RecordOwner;
      const calculateReward = price * percentage / 100;

      // Get the daily short reward for the current package
      let dailyShortReward = dailyShortRewards[recordOwner];

      if (!dailyShortReward) {
        dailyShortReward = await DailyShortReward.findOne({ RecordOwner: recordOwner });

        console.log(dailyShortReward)

        if (!dailyShortReward) {
          dailyShortReward = await DailyShortReward.create({
            RecordOwner: recordOwner,
            StakedPackage: price,
            CoinEarned: 0,
            CoinPercentage: percentage,
            RecordUpperline: pkg.OwnerUpperline
          });
        }

        dailyShortRewards[recordOwner] = dailyShortReward;
      }

      const updatedCoinEarned = Number(dailyShortReward.CoinEarned) + calculateReward;

      // Update the daily short reward for the current package
      await DailyShortReward.findByIdAndUpdate(
        dailyShortReward._id,
        { CoinEarned: updatedCoinEarned },
        { new: true }
      );

      DailyReward.create({
        RecordOwner: recordOwner,
        StakedPackage: price,
        CoinEarned: calculateReward,
        CoinPercentage: percentage,
        RecordUpperline: pkg.OwnerUpperline
      });
    

    console.log("Done :+")
    res.json("Cron Job Done :)");
  } catch (error) {
    // If something wrong happened then it will come here
    console.log(error)
    res.status(500).json({ error: "Something Went Wrong" });
  }















  res.json("Done For This")
}