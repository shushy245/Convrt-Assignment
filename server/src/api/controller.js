import User from "../models/User.js";
import Company from "../models/Company.js";

export const authenticateUser = async (req, res) => {
  const user = await User.findOne({ user: req.params?.username });

  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.status(200);
    res.json(user);
  }
};

export const getAllCompanies = async (req, res) => {
  const { page, limit } = req.query;

  const skip = (parseInt(page) - 1) * parseInt(limit);

  try {
    const companies = await Company.find({}, 'name website size location')
      .skip(skip)
      .limit(parseInt(limit));

    const length = await Company.countDocuments();

    res.status(200);
    res.json({ companies, length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const getCompanyByID = async (req, res) => {
  const { id } = req.params;

  try {
    const company = await Company.findById(id);

    res.status(200);
    res.json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}

export const decrementCredit = async (req, res) => {
  const { userID } = req.params;

  try {
    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({ error: 'User not logged in' });
    }

    --user.credits;
    await user.save();

    res.status(200);
    res.json({ credits: user.credits });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}