/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let s = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            s += i;
        }
    }
    return s;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let i = 0;
    while (a > 0.1) {
        a /= 2;
        i++;
    }
    return i;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let str = '';
    let i = 0;
    let len = message.length;
    const leng = message.length;
    do {
        if (len >= 3) {
            i += 3;
            str += message[i - 3] + message[i - 2] + '_';
            len = len - 3;
        }
        if (len == 2) {
            i += 2;
            str += message[i - 2] + message[i - 1];
            len = -2;
        }
        if (len == 1) {
            i++;
            str += message[i - 1];
            len--;
        }
    } while (i <= leng - 3);
    return str;
}
