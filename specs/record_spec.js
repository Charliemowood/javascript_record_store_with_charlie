var assert = require('assert');
var Record = require('../record.js');

describe('Record', function(){

  var record;

  beforeEach(function(){
    record = new Record("Shania Twain", "Still The One", "Country", 99);
  })

  it("Should have an artist", function(){
    assert.strictEqual("Shania Twain", record.artist);
  });

  it("should have an title.", function(){
    assert.strictEqual("Still The One", record.title);
  });

  it("should have a genre.", function(){
    assert.strictEqual("Country", record.genre);
  });

  it("should have a price", function(){
    assert.strictEqual(99, record.price);
  });

  it("should print out details as string", function() {
    var string = "Artist : Shania Twain, Title : Still The One, Genre : Country, Price : 99"
    assert.strictEqual(string, record.printDetails());
  });
















})