# Dragones y Mazmorras con clases JavaScript

## ex1 : Creación de una clase simple

Crea una clase de nombre Character

- La clase debe tener las propiedades name, race, attackPower, intelligence y level.
- Un constructor debe inicializar estas propiedades, salvo level, que siempre empieza a 0.
- Implementa un método de nombre _levelUp_ que incrementa en uno el nivel del personaje

## ex1.5: Métodos en la clase

La clase Character tiene dos métdos

### receiveDamage

El método receiveDamage tiene un argumento de tipo number.
Simula el daño recibido por un persoaje.
Resta el daño recibido al personaje cuando el método es invocado

### isAlive

El método isDead no tiene argumentos.
Retorna un true si el personaje está vivo, y false en caso contrario

## ex2: Herencia

En este mundo de fantasía hay diferentes tipos de clases de personaje. Cada clase define unos poderes y habilidades en concreto.Además, por el hecho de ser de una clase u otra, algunos de sus características quedan alteradas a la hora de crearlo
  
  http://carmensminiaturepainting.blogspot.com/2011/03/elf-sniper-and-d-classes.html
 
Extiende https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes#subclases_con_extends la clase 'Personaje' y crea dos subclases 

### Warrior

Crea una subclase de nombre Warrior

- Al crear un guerrero debemos sumar +1 a sus puntos de vida 
- Solamente los guerreros poseen un método de nombre _strongAttack_
  - El método strongAttack cuando se invoca calcula un número entre 0 y el _attackPower_ del guerrero. Debe retornar este número

### Healer

Crea una subclase de nombre Healer

- Al crear un curandero debemos sumar +1 a sus puntos de inteligencia
- Solamente los curandores poseen un método de nomnre _heal_
  - El método _heal_ calcula un número entre 0 y la _intelligence_ del curandero. Debe retornar esta número

### Iteración 3: Clases estáticas

Crea un método estático dentro de la clase _Character_

El método estático sirve para comparar el nivel de dos personajes
El método recibe dos _Characters_

Devuelve un string indicando qué personaje tiene más nivel de los dos