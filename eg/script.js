const $ = (e) => document.querySelector(e);

let start = moment();
let ileminut = 45;
let koniec = moment.diff(start, 'seconds');

setInterval(() =>{
    start = moment($('#start') .value);
    ileminut = parseInt($('#ileminut').value);
    koniec = koniec.diff(start);
    $('#pozostaly').in

}, 1000);