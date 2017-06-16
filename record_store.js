var _ = require('lodash')

var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 100;
}

RecordStore.prototype = {
  addRecord: function(record) {
    this.inventory.push(record);
  },
  list: function(){
    var returnString = ""
    for (var item of this.inventory){
      returnString += item.printDetails() + "\n";
    }
    return returnString;
  },
  sell: function(record) {
    this.balance += record.price;
    var index = _.indexOf(this.inventory, record);
    this.inventory.splice(index, 1);
  },
  status: function(){
    return "The balance is "+this.balance+" and the inventory level is "+ this.inventory.length;
  }
}

module.exports = RecordStore;