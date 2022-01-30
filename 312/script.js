'use strict';

class Rectangle { //Создаем класс. Название всегда с большой буквы!
    constructor(height, width) { //Задаем ему свойства. В данном случае - высота и ширина
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width; //Создаем метод. В данном случае, посчитать площадь
    }
}

class ColoredRectangleWithText extends Rectangle { //Новый класс, extends - наследует свойства предыдущего
    constructor(height, width, text, bgColor) {
        super(height, width); //Вызывает свойства предыдущего икласса - родителя. super() - всегда должна быть на 1 месте в конструкторе
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

/* const square = new Rectangle(10, 10);  //Сщздаем объект с этим классом
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea()); */

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());