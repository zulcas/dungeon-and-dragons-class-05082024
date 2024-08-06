class Character {
    constructor(name, attackPower, intelligence, hitPoints) {
        this.name = name;
        this.attackPower = attackPower;
        this.intelligence = intelligence;
        this.hitPoints = hitPoints;
        this.level = 0;
    }

    // Método para subir de nivel
    levelUp() {
        this.level += 1;
    }

    // Método para recibir daño
    receiveDamage(damage) {
        this.hitPoints -= damage;
    }

    // Método para verificar si el personaje está vivo
    isAlive() {
        return this.hitPoints > 0;
    }
}

// Definición de la subclase Warrior
class Warrior extends Character {
    constructor(name, attackPower, intelligence, hitPoints) {
        // Sumar +1 a los puntos de vida antes de llamar al constructor de la clase base
        super(name, attackPower, intelligence, hitPoints + 1);
    }

    // Método exclusivo para el guerrero: strongAttack
    strongAttack() {
        // COMPLETAR
        return Math.ceil(Math.random()*this.attackPower)*2;
    }
}

// Definición de la subclase Healer
class Healer extends Character {
   // COMPLETAR : constructor y método heal
   constructor(name, attackPower, intelligence, hitPoints){
    //Inicializo varibales constructor
    super(name, attackPower, intelligence+1, hitPoints);
   }
   //Método exclusivo curandero
   heal(){
    return Math.ceil(Math.random()*this.intelligence)*2;
   }
}

// Creación de un guerrero y un curandero
const warrior = new Warrior("Thor", 10, 5, 20);
const healer = new Healer("Luna", 3, 8, 15);

// Mostrar las propiedades del guerrero
console.log(`Guerrero: ${warrior.name}`);
console.log(`Poder de ataque: ${warrior.attackPower}`);
console.log(`Inteligencia: ${warrior.intelligence}`);
console.log(`Puntos de vida: ${warrior.hitPoints}`);
console.log(`Nivel: ${warrior.level}`);

// Mostrar las propiedades del curandero (hasta que no completes la subclase Healer esto no va a funcionar)
console.log(`Curandero: ${healer.name}`);
console.log(`Poder de ataque: ${healer.attackPower}`);
console.log(`Inteligencia: ${healer.intelligence}`);
console.log(`Puntos de vida: ${healer.hitPoints}`);
console.log(`Nivel: ${healer.level}`);

// Probar el método strongAttack del guerrero
const damage = warrior.strongAttack();
console.log(`Daño causado por ataque fuerte: ${damage}`);

// Probar el método heal del curandero
const healing = healer.heal();
console.log(`Puntos de curación: ${healing}`);


// El guerrero lucha contra el curandero
healer.receiveDamage(warrior.strongAttack());
console.log(`¿Sigue con vida el curandero? ${healer.isAlive()}`);