const mongoose = require("mongoose");

const Item = mongoose.model("Item", {
  name: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: new Date(),
  },
  modificationDate: {
    type: Date,
    default: new Date(),
  },
  isManga: {
    type: Boolean,
    required: true,
  },
  isAnime: {
    type: Boolean,
    required: true,
  },
  mangaDetails: {
    chapter: {
      type: Number,
      default: 1,
    },
    sprintToChapter: Number,
    lastChapter: Number,
  },
  animeDetails: {
    season: {
      type: Number,
      default: 1,
    },
    episode: {
      type: Number,
      default: 1,
    },
  },
  description: {
    type: String,
    default: "",
  },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Status",
  },
});

module.exports = Item;
