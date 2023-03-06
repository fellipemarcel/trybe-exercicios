const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
    const minDamage = 15;
    const maxDamage = dragon.strength
    dragon.damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
    return dragon.damage;
};

const warriorDamage = () => {
    const minDamage = warrior.strength;
    const maxDamage = warrior.strength * warrior.weaponDmg;
    warrior.damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
    return warrior.damage;
};

const mageManaAndDamage = () => {
    const minDamage = mage.intelligence;
    const maxDamage = mage.intelligence * 2;
    const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
    if (mage.mana > 15) {
        mage.mana -= 15;
        return {damage: damage, mana: mage.mana};
    }
    mage.damage = 'Não possui mana suficiente';
    mage.mana -= 0;
    return {damage: damage, mana: mage.mana};
};
console.log();