/**
 * Created by juancarlosnavarrete on 4/16/17.
 */

var mysql = require("mysql");
var table = require('console.table');
var prompt = require('./prompt');
var constant = require('./constants');
var colors = require('colors');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "Bamazon"
});


function testConnnection() {

    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
    });

};

getTable = function(){
    //Retrieves all
    connection.query(constant.selecAll, function (err, res) {
        if(err) throw err;
       console.table('\n',res);
       prompt.ask();
    });
};

lowQuantityItems = function () {
    connection.query(constant.lowQuantityItems, function (err, res){
        if(err) throw err;
        console.table('\n', res);
        prompt.ask();
    })
};

addStock = function(id, stock){
    connection.query(constant.addInventory,[stock, id],function(err, res){
        if(err){
            console.log(err);
        }else {
            if (res.affectedRows === 0) {
                console.log('\n\tInvalid input(s), please Try again.\n'.red);
                prompt.ask();
            } else {
                getTable();

            }
        }


    })
};

addItem = function(name, department, price, stock){
    connection.query('INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (?,?,?,?)',[name,department,price,stock], function(err, res){
        if(err){
            console.log(err);
        }else {
            if (res.affectedRows === 0) {
                console.log('\n\tInvalid input(s), please Try again.\n'.red);
                prompt.ask();
            } else {
                getTable();
            }
        }
    })
};





exports.getTable = getTable;
exports.lowQuantityItems = lowQuantityItems;
exports.addStock = addStock;
exports.addItem = addItem;
