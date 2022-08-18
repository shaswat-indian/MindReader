const symbols=['&hearts;','&clubs;','&spades;','&diams;','&epsilon;','&eta;','&euro;','&fnof;','&delta;','&dagger;','&ETH;','&gamma;','&theta;','&Omega;','&laquo;','&lambda;','&rho;','&THORN;','&zeta;','&equiv;','&infin;'];

function myfunction() {
var numText = '<table><tr>';

for(i=0;i<=99;i++){

    var symbol = symbols[Math.floor(Math.random()*symbols.length)];
    var numAndSymbol =  i+':'+'<span class= numAndSymbol id=symbol'+i+'>'+symbol+'</span>'+'&nbsp;';
    numText += '<td>'+numAndSymbol+'</td>';
    if ((i+1) % 15 == 0) {
        numText += '</tr><tr>';
    }

}
numText += '</tr></table>';


const numberTable  = document.getElementById('numberTable');
numberTable.innerHTML = numText;

document.getElementById('resetBtn').style.display = 'none';
}


function resetSymbols(){
    const uniqueSymbol=symbols[Math.floor(Math.random()*symbols.length)];
    const crystalSymbol = document.getElementById('symbol');
    crystalSymbol.innerHTML = uniqueSymbol;
    crystalSymbol.style.display = 'none';
    for(i=0;i<=81;i++){ // 9x where x = [1..9]
        const numCell = document.getElementById('symbol'+i);
        if ((i%9) == 0) {
            numCell.innerHTML = uniqueSymbol;
        }
    }
}

function showSymbol() {
    const audioFileName = 'mixkit-melodical-flute-music-notification-2310.wav';
    const crystalSymbol = document.getElementById('symbol');
    if (crystalSymbol.style.display == 'none') {
        const audio = new Audio(audioFileName);
        audio.play();
    }
    crystalSymbol.style.display = 'block';
    document.getElementById('resetBtn').style.display = 'block'
}

function resetPage() {
    myfunction();
    resetSymbols();
}

window.onload = function() {
    resetPage();
}
    