function Coffeeshop(name){
    this.name=name

    this.meniu =[{
        'name': 'Pasta',
        'type': 'food',
        'price': 2500
    },
        {
            'name': 'Cappuccino',
            'type': 'drink',
            'price': 3500
        }
    ]

    this.order=[]
    this.itam = 0

    this.addOrder = function (orderItmName){
        const orderItm = this.meniu.find((itam)=>
            itam.name === orderItmName)
        if(orderItm){
            this.order.push(orderItmName);
            this.ordersTotalPrice += currentItem.price;
        } else {
            throw new Error('This item is currently unavailable!')
        }
    }

    this.fulfillOrder = function (){
        if(this.order.length!==0){
            console.log(`${this.order} is ready!`)
        }
        else{
            console.log('All orders have been fulfilled!')
        }
    }
    this.listOrders= function (){
        if(this.order.length !==0){
            console.log(this.order)
        }else{
            console.log([])
        }
    }
    this.dueAmount=function (){
        return  this.order.map((price)=>{
            let orderSum= this.meniu.find((menuItem) => menuItem.name === price )
            return orderSum.price
        }).reduce((acc,curr)=>{
            return acc+curr
        },0)
    }
    this.cheapestItem = function() {
        let cheapestPrice = this.meniu[0];
        this.meniu.forEach(element => {
            if (element.meniu.slice(0, -1) < cheapestPrice.meniu.slice(0, -1)) {
                cheapestPrice = element;
            }
        });
        return cheapestPrice;
    };

    this.drinksOnly=function (){
        let drinkName=[]
        let drink = this.meniu.find((item)=>{
            if(this.meniu.type==="drink"){
                drinkName.push(item.name)
            }
            return drink
        })
    }

    this.drinksOnly=function (){
        let foodName=[]
        let food = this.meniu.find((item)=>{
            if(this.meniu.type==="food"){
                foodName.push(item.name)
            }
            return food
        })
    }


}

const starbucks = new Coffeeshop('starbucks');
starbucks.addOrder('Pasta');
starbucks.addOrder('Cappuccino')
console.log(starbucks.drinksOnly())
console.log(starbucks.foodOnly())
starbucks.fulfillOrder();

console.log(starbucks.dueAmount());
starbucks.listOrders();
console.log(starbucks.cheapestItem());