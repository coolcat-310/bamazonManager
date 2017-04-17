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


getTable = function(){
    /***
     * getTable prints the inventory table and then calls the function, ask, in prompt.js
     */
    connection.query(constant.selecAll, function (err, res) {
        if(err) throw err;
       console.table('\n',res);
       prompt.ask();
    });
};

lowQuantityItems = function () {
    /***
     * lowQuantityItems prints items which have a stock_quantity less than five
     */
    connection.query(constant.lowQuantityItems, function (err, res){
        if(err) throw err;
        console.table('\n', res);
        prompt.ask();
    })
};

addStock = function(id, stock){
    /***
     * addStock modifies the stock_quantity of a given id
     */
    connection.query(constant.addInventory,[stock, id],function(err, res){
        if(err){
            console.log(err);
        }else {
            if (res.affectedRows === 0) {
                console.log(constant.invalidInput.red);
                prompt.ask();
            } else {
                getTable();
            }
        }
    })
};

addItem = function(name, department, price, stock){
    /***
     * addItem inserts a new item into the database
     */
    connection.query(constant.addItem,[name,department,price,stock], function(err, res){
        if(err){
            console.log(err);
        }else {
            if (res.affectedRows === 0) {
                console.log(constant.invalidInput.red);
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
