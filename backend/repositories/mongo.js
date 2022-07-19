const { User } = require("../database");

const findUserMongoDB = async (_obj) => {
  return await User.findOne({ ..._obj });
};

const insertUserMongoDB = async (_obj) => {
  return await User.create(_obj);
};

const insertMovies = async (movie, id, query) => {
  try {
    const updated = await User.findOne({ _id: id });
    const movieAlreadyExist = updated[`${query}`].find(elem => elem.id === movie.id)
    console.log(updated[`${query}`])

    if(movieAlreadyExist){
      throw new Error("Movie already exist.")
    }

    updated[`${query}`].push(movie);

    console.log("======== UP ============")
    console.log(`updated[${query}]`);
    
    // updated.updated_At = new Date();
    // await updated.save();
    // delete updated.password;

    return { updated };
  } catch (error) {
    return { error };
  }
}

const updateUserDataMongoDB = async (updates, id) => {
  try {
    const updated = await User.findOneAndUpdate(
      { _id: id },
      { $push: updates },
      {
        returnDocument: "after",
      }
    );

    updated.updated_At = new Date();
    await updated.save();
    delete updated.password;

    return { updated };
  } catch (error) {
    return { error };
  }
};

const updateRemoveDataMongoDB = async (updates, id, query) => {
  try {
    console.log(query);
    const updated = await User.findOne({ _id: id });

    const up = await updated[`${query}`].map((elem) => {
      if (elem.id === updates[`${query}`].id) {
        elem.delete = true;
        return elem;
      }
      return elem;
    });

    updated.wishlist = up;

    updated.updated_At = new Date();
    await updated.save();
    delete updated.password;

    return { updated };
  } catch (error) {
    return { error };
  }
};

const deleteHistoryMongo = async (id, query) => {
  try {
    const updated = await User.findOne({ _id: id });

    updated[`${query}`] = [];

    updated.updated_At = new Date();
    await updated.save();
    delete updated.password;

    return { updated };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  findUserMongoDB,
  insertUserMongoDB,
  updateUserDataMongoDB,
  updateRemoveDataMongoDB,
  deleteHistoryMongo,
  insertMovies,
};
