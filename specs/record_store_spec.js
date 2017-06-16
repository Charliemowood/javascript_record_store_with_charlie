var assert = require('assert');
var RecordStore = require('../record_store.js');
var Record = require('../record.js');

describe('Record Store', function(){

  var recordStore;
  var record;

  beforeEach(function(){
    recordStore = new RecordStore("Paulz", "Edinburgh");
    record = new Record("Shania Twain", "Still The One", "Country", 99);
  })

  it("Should have an name", function(){
    assert.strictEqual("Paulz", recordStore.name);
  });

  it("should have a city", function() {
    assert.strictEqual("Edinburgh", recordStore.city);
  });

  it("should have an inventory", function () {
    assert.deepEqual([], recordStore.inventory);
  });

  it("record store has balance", function(){
    assert.strictEqual( 100, recordStore.balance );
  });

  it("should add record to inventory", function () {
    recordStore.addRecord(record);
    assert.strictEqual(1, recordStore.inventory.length);
  })

  it("should list the inventory", function() {
    var string = "Artist : Shania Twain, Title : Still The One, Genre : Country, Price : 99\nArtist : Shania Twain, Title : Still The One, Genre : Country, Price : 99\n"
    recordStore.addRecord(record);
    recordStore.addRecord(record);
    assert.strictEqual(string, recordStore.list());
  });

  it("can sell record", function(){
    recordStore.addRecord(record);
    recordStore.sell(record);
    assert.strictEqual( 199, recordStore.balance);
  });

  it("should remove record when sold", function() {
    recordStore.addRecord(record);
    recordStore.sell(record);
    assert.strictEqual( 0, recordStore.inventory.length);
  });

  it("should report status of store with balance and inventory size", function () {         
    recordStore.addRecord(record);
    recordStore.addRecord(record);
    assert.strictEqual("The balance is 100 and the inventory level is 2", recordStore.status());
  })

  
  





})