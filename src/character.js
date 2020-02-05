export function Character(hp) {
    // this.name = name;
    // this.species = species;
    // this.job = job;
    // this.alignment = alignment;
    this.hp = hp;
}

Character.prototype.battleLost = function () {
	if (this.hp <= 0) {
		return true
	} else {
		return false
	}
}