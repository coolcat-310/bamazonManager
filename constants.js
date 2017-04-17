/**
 * Created by juancarlosnavarrete on 4/16/17.
 */


var myChoices = [ 'Views Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add new Product', 'exit'];

var lowInventory = 'SELECT * FROM products WHERE stock_quantity < 5';
var selectAll = 'SELECT * FROM products';
var addInventory = 'UPDATE products SET stock_quantity=? where id = ?';

exports.myChoices = myChoices;
exports.lowQuantityItems = lowInventory;
exports.selecAll = selectAll;
exports.addInventory = addInventory;
