let movementCount=0;
 

function redirectToAnotherSite(){
	if (movementCount>=2) {
		window.location.href='index1.html'
	} else{
		alert('Please hover over the fucking damn button at least 2 times before clicking to redirect.');
	}
}
document.querySelector('.hover-button').addEventListener('mouseover',() => {
	movementCount++;
});