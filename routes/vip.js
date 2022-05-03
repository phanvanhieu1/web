var express = require("express");
var vip = express.Router();

vip.get("/homestay", (req, res) => {
  res.render("user/homestay");
}
);
vip.get("/resort",(req,res) =>{
    res.render("user/resort")
});
vip.get("/phuot",(req,res) =>{
    res.render("user/phuot")
});
vip.get("/dulich",(req,res) =>{
    res.render("user/dulich")
});
vip.get("/chinhsach",(req,res) =>{
    res.render("user/chinhsach")
});
vip.get("/baomat",(req,res) =>{
    res.render("user/baomat")
});
module.exports = vip;