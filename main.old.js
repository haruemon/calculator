(function(){

    var first = null;
    var ten = null;
    var hundred = null;
    var thousand = null;
    var num;
    // first = $('.display__first').text();
    // ten = $('.display__ten').text();
    // hundred = $('.display__hundred').text();
    // thousand = $('.display__thousand').text();

    //  数字の入力
    $('.num').on('click', function() {
        if ( first === null ) {
            first = $(this).text();
            $('.display__first').text(first);
            $('.text2').text(first);
        } else if ( ten === null ) {
            if ( first === '0' ) {
                first = $(this).text();
                $('.display__first').text(first);
            } else {
                ten = first;
                $('.display__ten').text(ten);
            }
            num = first * 10;
            first = $(this).text();
            first = parseInt(first);
            num = num + first;
            $('.display__first').text(first);
            $('.text2').text(num);
        } else if ( hundred === null ) {
            hundred = ten;
            $('.display__hundred').text(hundred);
            ten = first;
            $('.display__ten').text(ten);
            num = num * 10;
            first = $(this).text();
            first = parseInt(first);
            num = num + first;
            $('.display__first').text(first);
            $('.text2').text(num);
        } else if ( thousand === null ) {
            thousand = hundred;
            $('.display__thousand').text(thousand);
            hundred = ten;
            $('.display__hundred').text(hundred);
            ten = first;
            $('.display__ten').text(ten);
            num = num * 10;
            first = $(this).text();
            first = parseInt(first);
            num = num + first;
            $('.display__first').text(first);
            $('.text2').text(num);
        } else {
            alert('4桁までです');
        }
    });

    //  足し算 + をクリックした場合
    var i, j, k, l;
    var a, b;
    var num1, num2, num3, num4;
    var result;
    var calc;
    var data = 0;
    $('.plus, .minus').on('click', function() {
        // resultに数値がある場合 計算の続きの場合
        result = parseInt(result);

        console.log(calc);

        if ( first ) {
            num1 = parseInt(first);
        }
        if ( ten ) {
            num2 = parseInt(ten);
        } else {
            num2 = ten;
        }
        if ( hundred ) {
            num3 = parseInt(hundred);
        } else {
            num3 = hundred;
        }
        if ( thousand ) {
            num4 = parseInt(thousand);
        } else {
            num4 = thousand;
        }
        if ( !result ) {
            a = num1 + num2 * 10 + num3 * 100 + num4 * 1000;
        } else {
            a = result;
        }
        // data = a;

        if ( calc === '+') {
            data = data + a;
        } else if ( calc === '-') {
            data = data - a;
        } else {
            data = a;
        }

        calc = $(this).text();

        console.log(calc);
        $('.text1').append(a + calc);
        $('.text2').text('');
        console.log('data = ' + data);
        first = null;
        ten = null;
        hundred = null;
        thousand = null;
        num1 = null;
        num2 = null;
        num3 = null;
        num4 = null;
    });

    //  合計 = をクリックした場合
    $('.equal').on('click', function() {

        // aが空の時処理を行わない
        if ( !a ) return;

        i = $('.display__first').text();
        if (i) {
            num1 = parseInt(i);
        }
        j = $('.display__ten').text();
        if (j) {
            num2 = parseInt(j);
        }
        k = $('.display__hundred').text();
        if (k) {
            num3 = parseInt(k);
        }
        l = $('.display__thousand').text();
        if (l) {
            num4 = parseInt(l);
        }
        b = num1 + num2 * 10 + num3 * 100 + num4 * 1000;
        console.log(a);
        console.log(b);
        console.log(data);
        // result = data + b;
        if ( calc === '+') {
            result = data + b;
        } else if ( calc === '-') {
            result = data - b;
        } else {
            result = a;
        }
        console.log('SUM =' + result);
        
        thousand = Math.floor( result / 1000 % 10 );
        hundred = Math.floor( result / 100 % 10 );
        ten = Math.floor( result / 10 % 10 );
        first = result % 10;

        console.log(hundred);
        console.log(ten);
        console.log(first);
        $('.text1').append(b + '=');
        $('.text2').text(result);

        $('.display__first').text(first);
        $('.display__ten').text(ten);
        if ( hundred != 0 ) {
            $('.display__hundred').text(hundred);
        }
        if ( thousand != 0 ) {
            $('.display__thousand').text(thousand);
        }
        a = null;
        b = null;
        first = null;
        ten = null;
        hundred = null;
        thousand = null;
    });

    $('.clear').on('click', function() {
        $('.text1, .text2').text('');
        first = null;
        ten = null;
        hundred = null;
        thousand = null;
        num1 = 0;
        num2 = 0;
        num3 = 0;
        num4 = 0;
        i = 0;
        j = 0;
        k = 0;
        l = 0;
        a = 0;
        b = 0;
        result = 0;
        data = 0;
    });

})();

    //  + を連続で押した時
    //  resultのletter spacing, position: abusolute; & opacityで制御する？