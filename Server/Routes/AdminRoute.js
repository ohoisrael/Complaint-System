import express from 'express'
import con from '../utils/db.js'
import jwt from 'jsonwebtoken';

const router = express.Router()

router.post('/adminlogin', (req, res) => {
    const sql = "SELECT * from  admin Where email = ? and password = ?"
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query Error" })
        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign(
                { role: "admin", email: email },
                "jwt_secret_key",
                { expiresIn: "1d" }
            );
            res.cookie('token', token)
            return res.json({ loginStatus: true })
        } else {
            return res.json({ loginStatus: false, Error: "Wrong email or password" })
        }
    })
})

router.post('/add_complaint', (req, res) => {
    const sql = `INSERT INTO complaints
    (indexnumber, fullname, contact, currentlevel, coursecode, coursetitle, courselevel, academicyear, semester, lecturername, issue, intake, yearofadmission, studentstatus, faculty, status)
    VALUES (?)`;
    const values = [
        req.body.indexnumber,
        req.body.fullname,
        req.body.contact,
        req.body.currentlevel,
        req.body.coursecode,
        req.body.coursetitle,
        req.body.courselevel,
        req.body.academicyear,
        req.body.semester,
        req.body.lecturername,
        req.body.issue,
        req.body.intake,
        req.body.yearofadmission,
        req.body.studentstatus,
        req.body.faculty,
        req.body.status,
    ]
    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true })
    })
})

router.get('/home', (req, res) => {
    const sql = "SELECT * FROM complaints";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })

    })
})

router.get('/home/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM complaints WHERE id = ?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" })
        return res.json({ Status: true, Result: result })

    })
})

router.put('/edit_complaint/:id', (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE complaints
    SET indexnumber=?, fullname=?, contact=?, currentlevel=?, coursecode=?, coursetitle=?, courselevel=?, academicyear=?, semester=?, lecturername=?, issue =?, intake=?, yearofadmission=?, studentstatus=?, faculty=?, status=?
    Where id =?`
    const values = [
        req.body.indexnumber,
        req.body.fullname,
        req.body.contact,
        req.body.currentlevel,
        req.body.coursecode,
        req.body.coursetitle,
        req.body.courselevel,
        req.body.academicyear,
        req.body.semester,
        req.body.lecturername,
        req.body.issue,
        req.body.intake,
        req.body.yearofadmission,
        req.body.studentstatus,
        req.body.faculty,
        req.body.status,
    ];
    con.query(sql, [...values, id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" + err });
        return res.json({ Status: true, Result: result });
    });
})


router.get('/complaint_count', (req, res) => {
    const sql = "select count(id) as complaint from complaints";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" + err })
        return res.json({ Status: true, Result: result })
    })
})

router.delete('/delete_home/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from complaints where id =?"
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" + err })
        return res.json({ Status: true, Result: result })
    })
})

export { router as adminRouter }