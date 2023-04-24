//const drawBtn=document.querySelector('#btn');
let drawCircle=document.querySelector('#draw');
let diceImg=document.querySelector('#diceImg');
let soundAnimation=document.querySelector('#sound');

let resultGame=document.querySelector('#result');
let firstPlayer=document.querySelector('#firstPlayer');
let secondPlayer=document.querySelector('#secondPlayer');
let drawBtn=document.querySelector('#gameBtn');

let drawnNumber=0;

drawBtn.addEventListener('click', function(){
	diceImg.classList.add('diceAnimation');
	drawCircle.classList.add('appear');

	soundAnimation.play();

	drawBtn.style.display='none';



	setTimeout(function(){
		drawnNumber=randomNumber(1,6);
		diceImg.setAttribute('src',+drawnNumber+'.png');
		console.log(diceImg);
		drawCircle.textContent=drawnNumber;

		drawBtn.style.display='inline-block';

		diceImg.classList.remove('diceAnimation');
		drawCircle.classList.remove('appear');

		game(drawnNumber);
	},1750)
})

function randomNumber(min, max){
	min=Math.ceil(min);
	max=Math.floor(max);
	return Math.floor(Math.random()* (max-min+1)) + min;
}

function game(num){
	let firstValue=firstPlayer.value;
	// let secondValue=secondPlayer.value;
	let secondValue= randomNumber(1,6);
	document.getElementById('secondPlayer').placeholder=secondValue

	console.log(secondValue)
	if(num!=firstValue && num!=secondPlayer){
		resultGame.textContent='No hits';
		resultGame.style.color='red';
	}
	if(num==firstValue && num==secondValue){
		resultGame.textContent='The game was tied.';
		resultGame.style.color='yellow';
	}
	if(num == firstValue){
		resultGame.textContent='Player 01 hits  and your new clue is : He is an Indian and related to sports';
		resultGame.style.color='white';
		
		// alert("your new clue is : He is an Indian Player ")
	}
	if(num == secondValue){
		resultGame.textContent='Player 02 hits';
		resultGame.style.color='white';
	}
}