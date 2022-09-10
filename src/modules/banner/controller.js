const modul = require("./modul.js");
const upload = require("../../lib/multer.js");

const bannerImage = upload.single("bannerImage");

const POST = async (req, res) => {
  try {
    let banner = await modul.ADDBANNER(req.file);
    if (banner) {
      res
        .status(201)
        .json({
          status: 201,
          message: "banner added successfully",
          data: banner,
        });
    } else {
      res.status(404).json({ status: 404, message: "client error" });
    }
  } catch (error) {
    console.log(error);
  }
};

const GET = async (req, res) => {
  try {
    let banner = await modul.GETBANNER();
    if (banner) {
      res.status(200).json({ status: 200, message: "success", data: banner });
    } else {
      res.status(404).json({ status: 404, message: "client error" });
    }
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async (req, res) => {
  try {
    let banner = await modul.DELETEBANNER(req.body);
    if (banner) {
      res
        .status(202)
        .json({
          status: 202,
          message: "the banner has been removed from the list",
          data: banner,
        });
    } else {
      res.status(404).json({ status: 404, message: "client error" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  POST,
  bannerImage,
  GET,
  DELETE,
};
