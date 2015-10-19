var user = {};

user.name = 'Rodolfo';
user.homeCountry = 'Brasil';
user.showInfo = function() {
    console.log('Name: ' + this.name + ' and was born in: ' + user.homeCountry);
};

user.showInfo();