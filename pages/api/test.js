import dbConnect from "../../util/dbConnect";

dbConnect();

export default async (req, res) => {
  res.json({ test: "test" });
};
