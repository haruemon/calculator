let operators = {
    '÷':'/',
    '×':'*',
    '-':'-',
    '+':'+',
}
let calc_text = '';
let calc_result = 0;
$(function(){
    $('.num').on('click', function(){
        if (calc_result !== 0) {
            allClear();
        }
        showMainDisplay($(this).text());
        calc_text += $(this).text();
    })
    $('.calc').on('click', function(){
        calc_result = 0;
        if (isCalc()) {
            removeOneMainDisplay();
        }
        showMainDisplay($(this).text());
        calc_text += operators[$(this).text()];
    })
    $('#equal').on('click', function(){
        calc_result = safeEval(calc_text);
        let main_text = $('#main-display').text();
        $('#sub-display').text(main_text + '=');
        $('#main-display').text(calc_result);
        calc_text = calc_result;
    });
    $('#ac').on('click', function(){
        allClear();
    });
});

function showMainDisplay(param)
{
    $('#main-display').append(param);
}
function allClear()
{
    calc_result = 0;
    calc_text = '';
    $('#main-display').text('');
    $('#sub-display').text('');
}
function removeOneMainDisplay()
{
    let disp_text = $('#main-display').text();
    disp_text =  disp_text.slice(0, -1);
    $('#main-display').text(disp_text);
    calc_text = calc_text.slice(0, -1);
}
function isCalc()
{
    let last_text = $('#main-display').text().slice( -1 ) ;
    return last_text in operators
}
function safeEval(val){
    return Function('"use strict";return ('+val+')')();
}