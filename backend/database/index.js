const { mongoose } = require("./mongo");

const MovieSchema = new mongoose.Schema({
  adult: Boolean,
  backdrop_path: String,
  genre_ids: [Number],
  id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
  delete: {
    type: Boolean,
    default: false,
  },
});

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  wishlist: [MovieSchema],
  cart: [MovieSchema],
  history: [MovieSchema],
  create_At: {
    type: Date,
    default: Date.now(),
  },
  updated_At: {
    type: Date,
  },
  deleted_At: {
    type: Date,
  },
});

const User = mongoose.model("UserSchema", UserSchema);

module.exports = { User };
