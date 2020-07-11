/*Реализовать класс RangeValidator, со следующими свойствами:
    ■  from (number);
    ■  to (number);
Реализовать getter'ы и setter'ы для обоих свойств
Реализовать getter range, который будет возвращать массив с двумя числами диапазона
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.*/

class RangeValidator {
    /**
     *
     * @param {number} from
     * @param {number} to
     */
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    set from(v) {
        if (typeof v !== 'number' || isNaN(v)) {
            throw new TypeError('param "from" must be a number');
        }
        this._from = v;
    }

    get from() {
        return this._from;
    }

    set to(v) {
        if (typeof v !== 'number' || isNaN(v)) {
            throw new TypeError('param "to" must be a number');
        }
        if (v < this._from) {
            throw new RangeError('param "to" must be bigger than param "from"');
        }
        this._to = v;
    }

    get to() {
        return this._to;
    }

    get range() {
        return [this._from, this._to];
    }

    validate(v) {
        if (typeof v !== 'number' || isNaN(v)) {
            throw new TypeError('range includes only numbers');
        }
        return v >= this._from && v <= this._to;
    }
}

const arr = new RangeValidator(-5, 15);

console.log(arr.range);
console.log(arr.validate(-2.789));
console.log(arr);



