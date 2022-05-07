var horoscope = document.getElementsByClassName('horoscope');
var navLink = document.querySelectorAll('.nav-link');
for (let k = 0; k < navLink.length; k++) {
	navLink[k].addEventListener('click',dateFromNav)
}
function dateFromNav(e){
	var dtn = e.currentTarget.querySelector('span').innerHTML.toLowerCase();
	sessionStorage.setItem('dtn',dtn);
}

var horoscopeTitle;
for (let i = 0; i < horoscope.length; i++) {
    horoscope[i].addEventListener('click',title);  
}

function title(e){
    horoscopeTitle =e.currentTarget.querySelector('h4').innerHTML.toLowerCase();
    console.log(horoscopeTitle);
    sessionStorage.setItem('horoscopeTitle',horoscopeTitle);
}
var horoscopeName = document.querySelector('.horoscope-name');
if (sessionStorage.getItem('horoscopeTitle') != null ){
	horoscopeName.innerHTML = sessionStorage.getItem('horoscopeTitle');
}

var horoscopeDescription = document.querySelector('.description');
var horoscopeDate = document.querySelector('.horoscope-date');


const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'b64ade9ec4msh96e62756db80443p11a4ccjsn87c6846b108f'
	}
};

if(sessionStorage.getItem('horoscopeTitle') == undefined && sessionStorage.getItem('dtn') == null){
	fetch('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today', options)
	.then(response => response.json())
	.then(response => x(response))
	.catch(err => console.error(err));
}
else if(sessionStorage.getItem('horoscopeTitle') == undefined){
	fetch('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day='+sessionStorage.getItem('dtn'), options)
	.then(response => response.json())
	.then(response => x(response))
	.catch(err => console.error(err));
}
else if(sessionStorage.getItem('dtn') == null){
	fetch('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign='+sessionStorage.getItem('horoscopeTitle')+'&day=today', options)
	.then(response => response.json())
	.then(response => x(response))
	.catch(err => console.error(err));

}else{
	fetch('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign='+sessionStorage.getItem('horoscopeTitle')+'&day='+sessionStorage.getItem('dtn'), options)
	.then(response => response.json())
	.then(response => x(response))
	.catch(err => console.error(err));
}

function x(result){
    horoscopeDescription.innerHTML = result.description;
    horoscopeDate.innerHTML = result.date_range;
}
var date = document.querySelector('li');

