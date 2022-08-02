var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
     let products = [{
      name:'iPhone 12',
      details: 'iPhone',
      Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dUM8vQroUs9EW5GcxGxPJfXLprHX-ryDY_eIcJTsMelfvMeRBN4dMra0ywEEUPnLmMk&usqp=CAU'
     },{
      name:'Oppo',
      details:'chinese',
      Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDqsfcigor6VQvhzoXf-UOrAl5Eft5A8BRHw&usqp=CAU'
     },{
      name:'Google',
      details:'Google phone',
      Image:'https://lh3.googleusercontent.com/JvkJ21-2-D7d9LCn_-S2lsI10QFGxELt6_vADdYEGeQjmTQzSzG8UWwcABlJksXzwqT4duCT3USEd9MyJ97Q0vmF_5T7HUz-M4c'
     },{
      name:'Samsung',
      details:'Galaxy s22',
      Image:'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s901eiddinu/gallery/in-galaxy-s22-s901-412948-412948-sm-s901eiddinu-532390637?$650_519_PNG$'
     }];
     res.render("index", { products, admin:false });
});

module.exports = router;
