// login & register
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    res.json({ msg: "login works" })
    res.end();
})

router.post("/post", (req, res) => {
    console.log(req.body);
    
    res.json({ msg: "login works post" })
    res.end();
})


module.exports = router;