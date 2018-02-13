function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;

}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and size is " + this.size + ".");
};


var iPhone6S = new Phone("Apple", 2250, "silver","5");
var SamsungGalaxyS6 = new Phone("Samsung", 2000, "black","4.8");
var OnePlusOne = new Phone("OnePlus", 1500, "grey","4.7");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();

///// BONUS

Phone.prototype.returnHigherSize = function() {
	if (this.size > 4.7) {
		return "This phone have bigger screen than 4.7'";
	} else {
		return "This phone havae smaller screen than 4.7";
	}
};

console.log(iPhone6S.returnHigherSize());
console.log(SamsungGalaxyS6.returnHigherSize());
console.log(OnePlusOne.returnHigherSize());

Phone.prototype.filter = function() {
	if (this.price >= 2000 && (this.color === 'black' || this.color === 'grey')) {
		return "I will buy it!!!";
	} else {
		return "not really";
	}
};

console.log(iPhone6S.filter());
console.log(SamsungGalaxyS6.filter());
console.log(OnePlusOne.filter());