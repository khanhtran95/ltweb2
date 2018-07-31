const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM sanpham';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cuahangdienthoai'

});
connection.connect(err => {
    if(err)
    {
        return err;
    }    
});

// console.log(connection);

app.use(cors());

app.get('/', (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err);
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});

// app.get('/products/add', (req, res) => {
//     const {idsp, tensp, giasp, anhsp} = req.query;
//     const INSERT_PRODUCT_QUERY = `insert into sanpham (idsp, tensp, giasp, anhsp) values ('${idsp}', '${tensp}', '${giasp}', '${anhsp}')`;
//     connection.query(INSERT_PRODUCT_QUERY, (err, results) => {
//         if(err) {
//             return res.send(err);
//         }
//         else {
//             return res.send('Đã thêm sản phẩm thành công');
//         }
//     });
// });

// app.get('/products', (req, res) => {
//     connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
//         if(err) {
//             return res.send(err);
//         }
//         else {
//             return res.json({
//                 data: results
//             })
//         }
//     });
// });

app.listen(4000, () => {
    console.log('Server đang lắng nghe ở port 4000')
});