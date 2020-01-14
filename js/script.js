var voorgerechtenLijst = document.querySelector('.voorgerechten');
var voorgerechtenKnop = document.querySelector('.voorgerechtenTitel');

voorgerechtenKnop.addEventListener('click', voorgerechtenUitklap);

function voorgerechtenUitklap() {
    voorgerechtenLijst.classList.toggle('hidden');
}

var hoofdgerechtenLijst = document.querySelector('.hoofdgerechten');
var hoofdgerechtenKnop = document.querySelector('.hoofdgerechtenTitel');

hoofdgerechtenKnop.addEventListener('click', hoofdgerechtenUitklap);

function hoofdgerechtenUitklap() {
    hoofdgerechtenLijst.classList.toggle('hidden');
}

var nagerechtenLijst = document.querySelector('.nagerechten');
var nagerechtenKnop = document.querySelector('.nagerechtenTitel');

nagerechtenKnop.addEventListener('click', nagerechtenUitklap);

function nagerechtenUitklap() {
    nagerechtenLijst.classList.toggle('hidden');
}






document.getElementById('knopje').addEventListener('click', function(){
    
    document.querySelector('.randzwart').style.display = 'flex';
    
});




















