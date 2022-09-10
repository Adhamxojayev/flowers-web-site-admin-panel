const { fetch, fetchAll } = require("../../lib/postgres.js");
const { ADD, GET, DELETE } = require("./query.js");

const ADDBANNER = async ({ filename: bannerImage }) => {
  try {
    return await fetch(ADD, bannerImage);
  } catch (error) {
    console.log(error);
  }
};

const GETBANNER = async () => {
  try {
    return await fetchAll(GET);
  } catch (error) {
    console.log(error);
  }
};

const DELETEBANNER = async ({ bannerId }) => {
  try {
    return await fetchAll(DELETE, bannerId);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  ADDBANNER,
  GETBANNER,
  DELETEBANNER,
};
