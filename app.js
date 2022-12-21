let audio = new Audio('sounds/clap.wav');
let audio1 = new Audio('sounds/hihat.wav');
let audio2 = new Audio('sounds/kick.wav');
let audio3 = new Audio('sounds/openhat.wav');
let audio4 = new Audio('sounds/boom.wav');
let audio5 = new Audio('sounds/ride.wav');
let audio6 = new Audio('sounds/snare.wav');
let audio7 = new Audio('sounds/tom.wav');
let audio8 = new Audio('sounds/tink.wav');

$('body').keypress(function(event){
    console.log("La touche " + event.which + " a été préssée");
    if (event.which === 97) {
        $('#key1').addClass('playing');
    }
    if (event.which === 115) {
        $('#key2').addClass('playing');
    }
    if (event.which === 100) {
        $('#key3').addClass('playing');
    }
    if (event.which === 102) {
        $('#key4').addClass('playing');
    }
    if (event.which === 103) {
        $('#key5').addClass('playing');
    }
    if (event.which === 104) {
        $('#key6').addClass('playing');
    }
    if (event.which === 106) {
        $('#key7').addClass('playing');
    }
    if (event.which === 107) {
        $('#key8').addClass('playing');
    }
    if (event.which === 108) {
        $('#key9').addClass('playing');
    }
})

$('html').keyup(function(event){
    console.log("La touche " + event.which + " a été relâchée");
    if (event.which === 65) {
        audio.play();
        $('#key1').removeClass('playing');
    }

    if (event.which === 83) {
        audio1.play();
        $('#key2').removeClass('playing');
    }

    if (event.which === 68) {
        audio2.play();
        $('#key3').removeClass('playing');
    }

    if (event.which === 70) {
        audio3.play();
        $('#key4').removeClass('playing');
    }

    if (event.which === 71) {
        audio4.play();
        $('#key5').removeClass('playing');
    }

    if (event.which === 72) {
        audio5.play();
        $('#key6').removeClass('playing');
    }

    if (event.which === 74) {
        audio6.play();
        $('#key7').removeClass('playing');
    }

    if (event.which === 75) {
        audio7.play();
        $('#key8').removeClass('playing');
    }

    if (event.which === 76) {
        audio8.play();
        $('#key9').removeClass('playing');
    }

})

