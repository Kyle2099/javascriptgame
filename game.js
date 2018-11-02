
var person = function(){

    this._name;
    this._items = [];
    this._health = 100;

    this.name = function(str) {
        if (typeof(str) == 'string') {
            this._name = str;
        }
        return this._name;
    };

    this.addItem = function(i) {
        this._items.push(i);
        return this._items;
    };

    this.health = function(hp){
        if (typeof(hp) == 'number') {
            this._health += hp;
        }
        return this._health;
    };

    this.hit = function(person,item) {
        person.health(item.power()*-1);
        console.log(this.name() + ' hit ' + person.name() + ' with a ' + item.name() + ' worth ' + item.power() + ' points');
        console.log(person.name() + ' has ' + person._health + ' health remaining');
        return;
    };

    this.eat = function(i){
        if (i.type() !== 'FOOD') {
            console.log('You can\'t eat a ' + i.name() + ', silly!');
            return;
        }
        this.health(i.power());
        console.log(this.name() + ' ate a ' + i.name() + ' worth ' + i.power() + ' points!');
        console.log(this.name() + ' now has ' + this.health() + ' health');
        return;
    };

    return this;
};


var item = function() {

    this._type;
    this._name;
    this._power;

    this.name = function(str) {
        if (typeof(str) == 'string') {
            this._name = str;
        }
        return this._name;
    };

    this.type = function(str) {
        if (typeof(str) == 'string') {
            this._type = str;
        }
        return this._type;
    };

    this.power = function(p) {
        if (typeof(p) == 'number') {
            this._power = p;
        }
        return this._power;
    };

    return this;
};

r = new person();
r.name('Rob');

k = new person();
k.name('Kyle');

s = new item();
s.name('Rune Sword');
s.type('SWORD');
s.power(10);

k.addItem(s);

fish = new item();
fish.type('FOOD');
fish.name('Manta Ray');
fish.power(25);

r.addItem(fish);

r.eat(fish)
r.eat(s);
k.hit(r,s);
