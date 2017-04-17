/**
 * Created by juancarlosnavarrete on 4/16/17.
 */


var myChoices = [ 'Views Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add new Product', 'exit'];

var lowInventory = 'SELECT * FROM products WHERE stock_quantity < 5';
var selectAll = 'SELECT * FROM products';
var addInventory = 'UPDATE products SET stock_quantity=? where id = ?';
var addItem = 'INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (?,?,?,?)';
var invalidInput = '\n\tInvalid input(s), please Try again.\n';

exports.myChoices = myChoices;
exports.lowQuantityItems = lowInventory;
exports.selecAll = selectAll;
exports.addInventory = addInventory;
exports.addItem = addItem;
exports.invalidInput = invalidInput;
