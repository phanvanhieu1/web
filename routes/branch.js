
var express = require("express")
var branch = express.Router()
var branchs = require("../models/branch.js");
var products = require("../models/products.model.js");
branch.get("/ibranch",(req,res)=>{
  
    res.render("admin/insert_branch")
    
});
branch.get("/listbranch",(req,res)=>{
    branchs.find().then(function (data) {
        console.log(data)
        res.render("user/list_branch", { item: data });
      });
})
branch.get("/admin/listbranch",checkadmin,(req,res)=>{
    var message = req.flash("error");
    branchs.find().then(function (data) {
        res.render("admin/list_branch", { item: data,
            message: message, });
      });
})
branch.get("/admin/insertbranch",checkadmin,(req,res)=>{

        res.render("admin/insert_branch");
   
})

branch.post("/insertbranch",(req,res)=>{

    var branch = branchs({
        
        namebranch : req.body.namebranch
    })
    branch.save(function(err,data){
if(err){
    res.redirect("/ibranch",{
        message : "Thêm mới không thành công"
    })
}else{
    branchs.find().then(function (data) {
        res.render("admin/list_branch", { item: data,
            message: "Thêm mới thành công", });
      });
}
    })

})
branch.get("/admin/edit_branch/:id",(req,res)=>{
    branchs.findById(req.params.id,function(err,data){
        if(!err){
res.render("admin/edit_branch",{
    item : data
})
        }
    })
})
branch.post("/updatebranch",(req,res)=>{
branchs.updateOne({
    namebranch : req.body.namebranch
},
function(err){
if(err){
    res.redirect("/admin/edit_branch",{
        message :"Cập nhật không thành công"
    })
}else{
     
    branchs.find().then(function (data) {
        res.render("admin/list_branch", { item: data,
            message: "Cập nhật thành công", });
      });

}


   
}
)
})
branch.get("/branch/:id",(req,res)=>{

    branchs.find().then(function(data){
        item = data
     products.find({branchID: req.params.id} ).then(function (data) { 
        res.render("user/view_branch", { ca: data });
      });
    })
})
branch.get("/delete_branch/:id", (req, res) => {
    if (req.session.loggin) {
        branchs.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
          res.redirect("/admin/listbranch");
        } else {
            branchs.find().then(function (data) {
                res.render("admin/list_branch", { item: data,
                    message: "Xóa thành công", });
              });
        }
      });
    } else {
      res.redirect("/home");
    }
  });
function checkadmin(req,res,next){
    if(!req.session.loggin){
      
            res.redirect("/")
        
    }else{
        next()
    }
}
module.exports = branch