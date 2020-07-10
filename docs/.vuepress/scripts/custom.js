module.exports = {
	getHitokoto
}

function getHitokoto(){
	fetch('https://v1.hitokoto.cn?max_length=20')
		.then(response => response.json())
		.then(data => {
		 const hitokoto = document.getElementsByClassName('description')
		 // hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
		 var hitokotoContent = data.hitokoto
		 var i= 0
		 var timer
		 typing()
		 function typing() {
		     if (i <= hitokotoContent.length) {
		       hitokoto.innerHTML = hitokotoContent.slice(0, i++) + '🌈';
		       timer = setTimeout(typing, 400);
		     }else {
		     	hitokoto.innerHTML = hitokotoContent+ '🌈';
		     	clearTimeout(timer);
		     }
		 }
		 
		})
		.catch(console.error)
}