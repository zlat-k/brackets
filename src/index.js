module.exports = function check(str, bracketsConfig) {
    let arrBrackets = [];
    let tmp = 0;
    arrBrackets = bracketsConfig.map((item) => item.join('') );
    while (tmp < arrBrackets.length) {
        if (str.includes(arrBrackets[tmp])) {
            str = str.replace(arrBrackets[tmp], '');
            tmp = 0;
        } else {
            tmp++;
        }
    }if (str.length === 0){
        return true
    }
    return false;

}
