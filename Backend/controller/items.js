import Items from "../models/items.js"

async function createItems(req, res) {
  try {
    const { name, email } = req.body;
    await Items.create({
      name,
      email,
    });
    const items = await Items.find({});
    return res.status(200).json({ items });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export default createItems;