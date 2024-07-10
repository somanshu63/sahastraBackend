var express = require("express");
var router = express.Router();
var ContactUs = require("../models/contactUs");
var Query = require("../models/faqs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/contact-us", async function (req, res, next) {
  try {
    const contactUs = await ContactUs.create(req.body);
    res.json(contactUs);
  } catch (error) {
    next(error);
  }
});
router.get("/contact-us", async function (req, res, next) {
  try {
    const allContactUs = await ContactUs.find({});
    res.json(allContactUs);
  } catch (error) {
    next(error);
  }
});
router.post("/faq", async function (req, res, next) {
  try {
    const faq = await Query.create(req.body);
    res.json(faq);
  } catch (error) {
    next(error);
  }
});
router.get("/faq", async function (req, res, next) {
  try {
    const allFaqs = await Query.find({});
    res.json(allFaqs);
  } catch (error) {
    next(error);
  }
});
router.put("/faq/:id", async function (req, res, next) {
  var id = req.params.id;
  const updateData = req.body;
  try {
    const query = await Query.findByIdAndUpdate(id, updateData);
    const updatedData = await Query.findById(id);
    res.json(updateData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
