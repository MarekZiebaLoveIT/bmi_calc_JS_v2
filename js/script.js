'use strict'

// zmienna dla wyniku po przesunięciu suwaków
const res = document.querySelector('#wynik');

// zmienna dla diva na którym ma się pojawić wynik skopiowany z poprzedniej strony
const divRes = document.querySelector('.bmiRes');

// zmienna dla drugiego (obracającego się) przycisku
const btn = document.querySelector('.secondbtn');

// zmienna dla obrazka rozety z zakresem BMI
const bmiClock = document.querySelector('.bmiClock');

// zmienna dla sekcji z suwakami
const choice = document.querySelector('#choose');

// zmienna dla diva w którym ma się pojawiać opis adekwatnie do wyniku BMI
const result = document.querySelector('.result');

// zmienna dla przycisku resetującego
const resetBtn = document.querySelector('.resetBtn');

// zmienna dla wszystkich p (aczkolwiek używam tylko 3,4,5)
const descs = document.querySelectorAll('p');

////////////////////////////////////////////////////////////////////


// zdarzenie do przesuwania ekranu bez ruszania suwaków
window.onscroll = function() {
    showClock();
};

function showClock () {
    if(res.value === '') {
        bmiClock.style.display = 'block';   // pokazanie tarczy wyników BMI
        divRes.style.display = 'none';      // ukrycie miejsca wyświetlania skopiowanego wyniku BMI z formularza
        resetBtn.style.display = 'none';    // ukrycie przycisku reset
    } else {
        //odwrotność powyższych opisów
        bmiClock.style.display = 'none';
        divRes.style.display = 'block';
        resetBtn.style.display = 'block';
    }
}

/////////////////////////////////////////////////////////////////////

// zdarzenie, które kopiuje wynik BMI, zaokrągla je i wyświetla opis w zależności od wyniku
btn.addEventListener('click', () => {
    divRes.innerText = parseFloat(res.value).toFixed(1);
    bmiClock.style.display = 'none';
    if(res.value < 18.5 && res.value != '') {
        descs[3].style.display = 'block';
        descs[5].style.display = 'none';
        descs[4].style.display = 'none';
    } else if(res.value > 25 && res.value != '') {
        descs[5].style.display = 'block';
        descs[3].style.display = 'none';
        descs[4].style.display = 'none';
    } else if (18.5 <= res.value <= 25 && res.value != '') { 
        descs[4].style.display = 'block';
        descs[3].style.display = 'none';
        descs[5].style.display = 'none';
    }
});

/////////////////////////////////////////////////////////////////////////


// zdarzenie kliknięcia przycisku Reset
resetBtn.addEventListener('click', () => {
    document.querySelector('form').reset();   // resetuje suwaki do pozycji wejściowej
    bmiClock.style.display = 'block';         // wyświetla tarcze wyników
    choice.scrollIntoView();                  // przesuwa stronę do sekcji zresetowanych suwaków 
    divRes.style.display = 'none';            // ukrywa miejsce wyświetlania skopiowanego wyniku z suwaków
    resetBtn.style.display = 'none';          // ukrywa przycisk Reset

    // ukrywanie poszczególnych opisów
    descs[4].style.display = 'none';          
    descs[3].style.display = 'none';
    descs[5].style.display = 'none';
});
