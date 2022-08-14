class Product {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}
const pencil = new Product("pencil", "pencil", "1$");
const pen = new Product("pen", "pen", "1.5$");
const notebook = new Product("notebook", "notebook", "2.5$");
const book = new Product("book", "book", "4$");
class ShoppingCart {
    constructor() {
        this.cart = [];
    }
    addProduct(...product) {
        const groupObj = {};
        product.forEach((element) => {
            if (groupObj[element.type] === undefined) {
                groupObj[element.type] = [element];
            } else {
                groupObj[element.type].push(element);
            }
        });
        const limit = 10;
        for (let key in groupObj) {
            if (groupObj[key].length <= limit) {
                this.cart.push(...groupObj[key]);
            } else {
                console.log(`"${key}" this product max limit "${limit}"`);
            }
        }
    }
    removeProduct(...product) {
        product.forEach((item) => {
            this.cart = this.cart.filter((element) => element.type !== item);
        });
    }
    totalPrice() {
        const discount = "10%";
        let totalPrice = this.cart.reduce((totalPrice, price) => {
            return totalPrice += Number(price.price.slice(0, -1));
        }, 0);
        const groupObj = {};
        for (let product of this.cart) {
            const group = product.type;
            if (groupObj[group] === undefined) {
                groupObj[group] = [product];
            } else {
                groupObj[group].push(product);
            }
        }
        for (let key in groupObj) {
            if (groupObj[key].length >= 3) {
                const countOfProducts = Math.floor(groupObj[key].length / 3);
                totalPrice = totalPrice - Number(groupObj[key][0].price.slice(0, -1)) * countOfProducts;
            }
        }
        if (this.cart.length >= 5) {
            totalPrice -= totalPrice * Number(discount.slice(0, -1)) / 100;
        }
        return totalPrice + "$";
    }
    replace(productName, replacementProduct) {
        this.cart = this.cart.filter((element) => {
            return element.name !== productName;
        });
        this.cart.push(replacementProduct);
    }
}
const shoppingCar = new ShoppingCart();
shoppingCar.addProduct(pencil, pen, notebook, notebook, notebook, notebook, book, book, book, book, book, book, book);
shoppingCar.removeProduct("pencil");
shoppingCar.replace("pen", pencil);
console.log(shoppingCar.totalPrice());
console.log(shoppingCar);