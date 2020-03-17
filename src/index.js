const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':  ' ',
};

function decode(expr) {
    var end_result = '';
    var result = [];
    var symbol_code;
    var mass = [];
    var mass_coded = [];
    var decode_value = '';
    for(var k = 0; k<= expr.length-1; k++){
        symbol_code = expr.slice(0, 10);
        expr = expr.slice(10, expr.length);
        mass.push(symbol_code);
        k--;
    }
console.log(mass);
    for(var i = 0; i<=mass.length-1; i++){
        for(var j = 0; j<= mass[i].length-1; j+=2){
            if(mass[i][j] == 1 && mass[i][j+1] == 0){
                decode_value += '.';
            }
            if(mass[i][j] == 1 && mass[i][j+1] == 1){
                decode_value += '-';
            }
        }
        if(mass[i] == '**********'){
            decode_value += ' ';
        }
        mass_coded.push(decode_value);
        decode_value = '';
    }
    console.log(mass_coded);
    for(var i = 0; i<= mass_coded.length-1; i++){
        for(var j = 0; j<= Object.keys(MORSE_TABLE).length-1; j++){
            if(mass_coded[i] == Object.keys(MORSE_TABLE)[j]){
                result.push(MORSE_TABLE[mass_coded[i]]);
                console.log(MORSE_TABLE[mass_coded[i]]);
            }
        }
    }
    for(var i = 0; i<=result.length-1;i++){
        end_result +=  result[i];
    }
    return end_result;
}

//var lol = decode("000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110");
//console.log(lol);
module.exports = {
    decode
}