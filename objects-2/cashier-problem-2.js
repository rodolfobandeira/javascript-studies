var cashRegister = {
    total:0,
    lastTransactionAmount:0,

    add: function(itemCost) {
        this.total +=  itemCost;
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },

    voidLastTransaction: function() {
        return this.total -= this.lastTransactionAmount;   
    }
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);

console.log('Your bill is ' + cashRegister.total);


