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
      default: null,
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
    manga: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Status",
      default: null,
    },
    anime: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Status",
      default: null,
    },
  },
});

module.exports = Item;
