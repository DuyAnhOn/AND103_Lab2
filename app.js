//import thu vien
const express = require('express');
const mongoose = require('mongoose');
const sinhvien = require('./sinhvienModel');
//tao doi tuong express
const app = express();
app.set('view engine', 'ejs');
//ket noi voi csdl
mongoose.connect('mongodb://localhost:27017/AND103', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Da ket noi thanh cong voi MongoDB");
}).catch((err) => {
    console.error(err);//in ra loi
});
//khi nguoi dung goi localhost:3000/sinhvien => doc du lieu tu CSDL
app.get('/sinhvien', async (req, res) => {
    try {
        const sinhviens = await sinhvien.find();//doc du lieu tu csdl
        //res.json(sinhviens);//chuyen du lieu sang json
        res.render('students', { sinhviens: sinhviens });
        console.log(sinhviens);//in ket qua ra log
    }
    catch (err) {
        console.error(err);//in ra loi
        res.status(500).json({ error: 'Internel Server Error' });//tra ve loi cho nguoi dung
    }
});
//tao cong dich vu
const PORT = process.env.PORT || 3000;
//server lang nghe
app.listen(PORT, () => {
    console.log('server dang chay o cong 3000');
});
