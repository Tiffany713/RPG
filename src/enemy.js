export function Enemy() {
    this.hp = 100;
}

Enemy.prototype.battleLost = function () {
	if (this.hp <= 0) {
		return true
	} else {
		return false
	}
}

Enemy.prototype.minScore = function () {
    this.hp -= 10;
    console.log(this.hp);
    return this.hp;
}