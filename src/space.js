function Cow () {
    this.mowed = false;
    this.moo = function moo() {
        this.mowed = true; // mootable state: don't do that at home
        return 'moo!';
    };
}





//  this is for linking files for testing
module.exports = Cow;
