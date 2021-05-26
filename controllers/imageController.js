const sharp = require("sharp");
const { uploadToS3 } = require("./../utils/amazonS3");

exports.uploadImage = async (req, res) => {
  try {
    const [fileName] = req.file.originalname.split(".");
    const imgBuffer = await sharp(req.file.buffer).png().toBuffer();

    // Upload to S3
    const data = await uploadToS3(imgBuffer);

    return res.status(201).json({ status: "success", message: data });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: "fail", message: err });
  }
};
