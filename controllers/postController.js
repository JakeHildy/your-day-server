exports.getAllPostings = async (req, res) => {
  try {
    res.status(200).json({ status: "success", message: "get all postings EP" });
  } catch (err) {
    res.status(400).json({ status: "error" });
  }
};
