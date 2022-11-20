const path = require('path');

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

// const bodyparser = require('body-parser');
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({
//     extended: true
// }));
//  Alternative for bodyparser !

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


// const login = require(path.join(__dirname, "appJsContent", "login"));
// app.use("/", login);

// const dashboard = require(path.join(__dirname, "dashboard"));
// app.use("/", dashboard);

// const { v4: uuidv4 } = require('uuid');
// const session = require('express-session');
// app.use(session({
//     secret: uuidv4(),
//     resave: false,
//     saveUninitialized: true
// }));
// app.get("/dashboard", function (request, response) {
//     response.render('dashboard', {
//         title: "Login System"
//     });
// });

app.get('/', function (req, res) {
    res.render('homepage', { title: "home" });
});

app.get("/about", (req, res) => {
      res.render('aboutpage', { title: "about" });
});

app.get("/phone", (req, res) => {
      res.render('phonepage', { title: "phone" });
});
app.get("/earpod", (req, res) => {
    res.render('earpod', { title: "earpod" });
});
app.get("/headset", (req, res) => {
    res.render('headset', { title: "headset" });
});
app.get("/smartwatch", (req, res) => {
    res.render('smartwatch', { title: "smartwatch" });
});
app.get("/earphone", (req, res) => {
    res.render('earphone', { title: "earphone" });
});
app.get("/tv", (req, res) => {
    res.render('tv', { title: "tv" });
});
app.listen(5000, () => { console.log("server is up !") });

