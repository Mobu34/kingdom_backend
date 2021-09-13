const router = require("express").Router();

const Item = require("../models/Item");
const Status = require("../models/Status");

router.post("/item/add", async (req, res) => {
  try {
    const {
      name,
      isManga,
      isAnime,
      chapter = 1,
      sprintToChapter = null,
      lastChapter = null,
      season = 1,
      episode = 1,
      description = "",
      status = null,
    } = req.fields;

    const checkIfItemExists = await Item.findOne({ name });

    if (checkIfItemExists)
      return res.status(208).json({ message: "Item already exists" });
    else {
      const newItem = new Item({
        name,
        isManga,
        isAnime,
        mangaDetails: { chapter, sprintToChapter, lastChapter },
        animeDetails: { season, episode },
        description,
        status,
      });

      await newItem.save();

      return res.status(200).json({ message: "success", newItem });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get("/items", async (req, res) => {
  try {
    const items = await Item.find().populate("status");

    return res.status(200).json(items);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
