let operators = {
    '÷':'/',
    '×':'*',
    '-':'-',
    '+':'+',
}
let calc_params = [];
let calc_result = 0;
let now_number = '';
$(function(){
    $('.num').on('click', function(){
        if (calc_result !== 0) {
            allClear();
        }
        showMainDisplay($(this).text());
        now_number = now_number + $(this).text();
    })
    $('.calc').on('click', function(){
        calc_result = 0;
        setNowNumber();
        showMainDisplay($(this).text());
        calc_params.push(operators[$(this).text()]);
        now_number = '';
    })
    $('#equal').on('click', function(){
        if (calc_params.length === 0) {
            return false;
        }
        setNowNumber()
        calc_result = safeEval(calc_params.join(''));
        let main_text = $('#main-display').text();
        $('#sub-display').text(main_text + '=');
        $('#main-display').text(calc_result);
        calc_params = [];
        now_number = calc_result
    });
    $('#ac').on('click', function(){
        allClear();
    });
});

function setNowNumber()
{
    if (isCalc()) {
        removeOneMainDisplay();
        calc_params.pop();
    } else {
        calc_params.push(parseFloat(now_number));
    }
}

function showMainDisplay(param)
{
    $('#main-display').append(param);
}
function allClear()
{
    calc_result = 0;
    calc_params = [];
    now_number = '';
    $('#main-display').text('');
    $('#sub-display').text('');
}
function removeOneMainDisplay()
{
    let disp_text = $('#main-display').text();
    disp_text =  disp_text.slice(0, -1);
    $('#main-display').text(disp_text);
}
function isCalc()
{
    let last_text = $('#main-display').text().slice( -1 ) ;
    return last_text in operators
}
function safeEval(val){
    return Function('"use strict";return ('+val+')')();
}