//constructor for space object
export function Space(value) {
    this.value = Math.floor(Math.random() * 3);
}

Space.prototype.assVal = function () {
    if ((this.value >= 0) && (this.value <= 2)) {
        return true;
    } else {
        return false;
    }    
}