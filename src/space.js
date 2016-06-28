function Space (name, description, price) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.available = true;
}

Space.prototype = {
  booked: function() {
    this.available = false;
  }
}





//  this is for linking files for testing
module.exports = Space;
