const chordList = {"C":"C Dm Em F G Am Bm(♭5)",
				   "D":"D Em F#m G A Bm C#m(♭5)",
				   "E":"E F#m G#m A B C#m D#m(♭5)",
				   "F":"F Gm Am B♭ C Dm Em(♭5)",
				   }
//DOMConttentLoaded htmlを一旦読み終えたあと
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.select').addEventListener('change', function(){
		let getselect = document.querySelector('.select');
        const result = document.querySelector('.showchord');
  		result.textContent = chordList[getselect.value];
    });
}, false);



