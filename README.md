# bamazonManager

BamazonManager is an inventory which contains a list of products, price, stock, and department.
Users have the option to display inventory, change stock quantity, display item(s) which are in low quantity( < 5), 
and add new item. 

## Technology Used

- Node.js
- inquirer
- console.table
- colors
- mySQL


## Resources

- JavaScript:   prompt.js, app.js, constants.js


## Get Started

- Download
```
git clone https://github.com/coolcat-310/bamazonManager.git

```

- Install node_module
```
$ node install
```

- Initiate prompt.js

```
$ node prompt.js

```


- Sample Run

```
? Which of the following actions would like to perform? Add new Product

        You have selected: Add new Product

? Enter name of product:  Hammer
? Enter department section of  product:  Hardware
? Enter price of product:  9.99
? Enter quantity of product:  12


--------------------------------------------------------
id  product_name  department_name  price  stock_quantity
--  ------------  ---------------  -----  --------------
1   Vitamins      Health           7.99   21            
2   Protein Bars  Health           1.99   25            
3   Tent          Recreation       50.99  6             
4   Sleeping Bag  Recreation       25.99  10            
5   Canteen       Recreation       5.99   2             
6   Batteries     Electronics      5.99   7             
7   Flash Light   Electronics      11.99  2             
8   Tire          Auto             50.99  20            
9   Motor Oil     Auto             8.99   12            
10  Brake fluid   Auto             9.99   2             
11  shampoo       Beauty           7.99   8             
12  Hammer        Hardware         9.99   12    

```