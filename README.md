# Dragones y Mazmorras con clases JavaScript

## ex1 : Creación de una clase simple

Modifica solamente el código dentro del bloque class {}
Crea una clase de nombre Character

- La clase debe tener las propiedades name, attackPower, intelligence,hitPoints y level
- Todas las propiedades pueden ser inicializadas por el constructor, salgo la propiedad level, que siempre empieza a 0.

### Métodos en la clase

La clase Character tiene dos métodos

### levelUp

El método no recibe argumentos.
Incrementa en 1 el nivel del personaje.

#### receiveDamage

El método receiveDamage tiene un argumento de tipo number.
Simula el daño recibido por un persoaje.
Resta el daño recibido al personaje cuando el método es invocado

#### isAlive

El método isDead no tiene argumentos.
Retorna un true si el personaje está vivo, y false en caso contrario

<img src="https://oscarm.tinytake.com/media/16844ae?filename=1722851405230_TinyTake05-08-2024-11-50-02_638584482037893659.png&sub_type=thumbnail_preview&type=attachment&width=733&height=234" title="Powered by TinyTake Screen Capture"/>


## ex2: Herencia

En este mundo de fantasía hay [diferentes tipos de clases de personajes](http://carmensminiaturepainting.blogspot.com/2011/03/elf-sniper-and-d-classes.html). Cada clase define unos poderes y habilidades en concreto.Además, por el hecho de ser de una clase u otra, algunos de sus características quedan alteradas a la hora de crearlo. 
 
Extiende la clase 'Personaje' y crea dos [subclases](https://javascript.info/class-inheritance) 


### Warrior

Crea una subclase de nombre Warrior que herea de la clase Character

- Al crear un guerrero debemos sumar +1 a sus puntos de vida antes de crear la propiedad this.attackPower.
- Solamente los guerreros poseen un método de nombre _strongAttack_
  - El método strongAttack cuando se invoca calcula un número entre 0 y el _attackPower_ del guerrero, y además, lo multiplica por 2.  Debe retornar este número

### Healer

Crea una subclase de nombre Healer que hereda de la clase Character

- Al crear un curandero debemos sumar +1 a sus puntos de inteligencia
- Solamente los curandores poseen un método de nombre _heal_
  - El método _heal_ calcula un número entre 0 y la _intelligence_ del curandero, y además, lo multiplica por 2. Debe retornar esta número

<img src="https://oscarm.tinytake.com/media/16844b1?filename=1722851455468_TinyTake05-08-2024-11-50-32_638584482506799082.png&sub_type=thumbnail_preview&type=attachment&width=797&height=220" title="Powered by TinyTake Screen Capture"/><br>

### Iteración 3: Métodos estáticos

Crea un método estático de nombre _compareLevels_ dentro de la clase _Character_

El método estático sirve para comparar el nivel de dos personajes
El método recibe dos instancias de la clase _Characters_ (dos objetos)

Devuelve un 1 si el character1 tiene más nivel que el character2. 
Devuelve un -1 si el character2 tiene más nivel que el character1
Devuelve un 0 si tienen el mismo nivel

<img src="https://oscarm.tinytake.com/media/16844b8?filename=1722851516670_TinyTake05-08-2024-11-51-09_638584482714924458_638584483155873522.png&sub_type=thumbnail_preview&type=attachment&width=796&height=128" title="Powered by TinyTake Screen Capture"/>