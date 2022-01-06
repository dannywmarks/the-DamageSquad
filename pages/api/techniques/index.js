import dbConnect from "../../../util/dbConnect";
import Technique from '../../../models/techniques'

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const techniques = await Technique.find({});
        res.status(200).json({ success: true, data: techniques });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const technique = await Technique.create(req.body)
        res.status(201).json({ success: true, data: technique})
      } catch(error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
