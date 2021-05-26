const AWS = require("aws-sdk");
const { v4 } = require("uuid");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

exports.uploadToS3 = (imgBuffer) => {
  return new Promise((resolve, reject) => {
    s3.upload({
      Bucket: `${process.env.AWS_BUCKET_NAME}`,
      Key: `${Date.now()}-${v4()}.png`,
      Body: imgBuffer,
    })
      .promise()
      .then((data) => resolve(data))
      .catch((err) => reject(new Error(err)));
  });
};
