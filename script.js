/*global
alert, jQuery
*/
(function ($) {

    'use strict';

    var arr = new Array(9),
        win = $('.win span').text(),
        lose = $('.lose span').text();

    function checkEnd() {
        if ((arr[0] === 'ai' && arr[1] === 'ai' && arr[2] === 'ai') || (arr[3] === 'ai' && arr[4] === 'ai' && arr[5] === 'ai') || (arr[6] === 'ai' && arr[7] === 'ai' && arr[8] === 'ai')) {
            alert('you lose');
            lose += 1;
            $('.lose span').text(lose);
            arr = new Array(9);
            $('.cell').removeClass('ai player');
        }
        if ((arr[0] === 'ai' && arr[3] === 'ai' && arr[6] === 'ai') || (arr[1] === 'ai' && arr[4] === 'ai' && arr[7] === 'ai') || (arr[2] === 'ai' && arr[5] === 'ai' && arr[8] === 'ai')) {
            alert('you lose');
            lose += 1;
            $('.lose span').text(lose);
            arr = new Array(9);
            $('.cell').removeClass('ai player');
        }
        if ((arr[0] === 'ai' && arr[4] === 'ai' && arr[8] === 'ai') || (arr[2] === 'ai' && arr[4] === 'ai' && arr[6] === 'ai')) {
            alert('you lose');
            lose += 1;
            $('.lose span').text(lose);
            arr = new Array(9);
            $('.cell').removeClass('ai player');
        }
        if ((arr[0] === 'player' && arr[1] === 'player' && arr[2] === 'player') || (arr[3] === 'player' && arr[4] === 'player' && arr[5] === 'player') || (arr[6] === 'player' && arr[7] === 'player' && arr[8] === 'player')) {
            alert('you win');
            win += 1;
            $('.win span').text(win);
            arr = new Array(9);
            $('.cell').removeClass('ai player');
        }
        if ((arr[0] === 'player' && arr[3] === 'player' && arr[6] === 'player') || (arr[1] === 'player' && arr[4] === 'player' && arr[7] === 'player') || (arr[2] === 'player' && arr[5] === 'player' && arr[8] === 'player')) {
            alert('you win');
            win += 1;
            $('.win span').text(win);
            arr = new Array(9);
            $('.cell').removeClass('ai player');
        }
        if ((arr[0] === 'player' && arr[4] === 'player' && arr[8] === 'player') || (arr[2] === 'player' && arr[4] === 'player' && arr[6] === 'player')) {
            alert('you win');
            win += 1;
            $('.win span').text(win);
            arr = new Array(9);
            $('.cell').removeClass('ai player');
        }
        if (arr[0] && arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8]) {
            alert('draw');
            arr = new Array(9);
            $('.cell').removeClass('ai player');
        }
    }

    function player_turn(id) {
        arr[id] = 'player';
        $('#' + id + '').addClass('player');
        checkEnd();
    }

    function ai_turn() {
        var random = Math.floor(Math.random() * 9);
        if (arr[random] === undefined) {
            arr[random] = 'ai';
            $('#' + random + '').addClass('ai');
            checkEnd();
        } else {
            return ai_turn();
        }
    }

    function checkArr(array) {
        var i, item;
        for (i = 0; i < array.length; i += 1) {
            item = array[i];
            if (item === undefined) {
                return true;
            } else if (i < 9) {
                continue;
            }
        }
    }

    $('.cell').on('click', function () {
        var self = $(this),
            id = self.attr('id');
        if (arr[id] !== 'player' && arr[id] !== 'ai') {
            player_turn(id);
            if (checkArr(arr)) {
                setTimeout(function () {
                    ai_turn();
                }, 200);
            }
        } else {
            return;
        }
    });

}(jQuery));