/**
 * Created by juancarlosnavarrete on 4/16/17.
 */

var inquirer = require('inquirer');
var Mychoices = require('./constants').myChoices;
var colors = require('colors');
var data = require('./app');

ask = function() {

    var questions = [
        {
            type: 'rawlist',
            name: 'choices',
            message: 'Which of the following actions would like to perform?',
            choices: Mychoices

        }
    ];

    inquirer.prompt(questions).then(function (answer) {
        console.log(colors.blue('\n\tYou have selected: %s\n'), answer.choices);

        switch (answer.choices){
            case Mychoices[0]:
                data.getTable();
                break;
            case Mychoices[1]:
                data.lowQuantityItems();
                break;
            case Mychoices[2]:
                addInventory();
                break;
            case Mychoices[3]:
                //add new item
                addItem();
                break;
            case Mychoices[4]:
            default:
                console.log('\n\tGood Bye!'.cyan);
                break;
        }

    });
};


function addInventory(){
    var whichItem = [
        {
            type: 'input',
            name: 'item',
            message: 'Enter the id of the product: ',
            validate: function(value){
                if(isNaN(value) == false){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'updateStock',
            message: 'Enter the updated stock_quantity: ',
            validate: function(value){
                if(isNaN(value) == false){
                    return true;
                }else{
                    return false;
                }
            }
        }

    ];
    inquirer.prompt(whichItem).then(function (answer) {
        data.addStock(answer.item, answer.updateStock);
    });
}

function addItem(){
    var makeItem = [
        {
            type: 'input',
            name: 'product_name',
            message: 'Enter name of product: '
        },
        {
            type: 'input',
            name: 'department_name',
            message: 'Enter department section of  product: '
        },
        {
            type: 'input',
            name: 'price',
            message: 'Enter price of product: ',
            validate: function(value){
                if(isNaN(value) == false){
                    return true;
                }else{
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'stock_quantity',
            message: 'Enter quantity of product: ',
            validate: function(value){
                if(isNaN(value) == false){
                    return true;
                }else{
                    return false;
                }
            }
        }

    ];
    inquirer.prompt(makeItem).then(function (answer) {
        data.addItem(answer.product_name, answer.department_name, answer.price, answer.stock_quantity);
    });
}

ask();

exports.ask = ask;