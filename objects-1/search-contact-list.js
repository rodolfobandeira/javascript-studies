var friends = {};

friends.bill = {};
friends.steve = {};

friends.bill.firstName = 'Bill';
friends.bill.lastName = 'Obama';
friends.bill.number = 111111;
friends.bill.address = ['Rua Bla Bla', '100'];

friends.steve.firstName = 'Steve';
friends.steve.lastName = 'Clinton';
friends.steve.number = 222222;
friends.steve.address = ['Rua Yow Yow', '200'];

var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
}

var list = function(friedsObject) {
    for (var value in friends) {
        console.log(value);
    }
};

search('Steve');

