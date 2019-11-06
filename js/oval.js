
var txt=document.getElementById('txt');
var music=document.getElementById('music');
var imgs=document.getElementById('box').children;

for(var i=0;i<imgs.length;i++){
	imgs[i].onclick=function(){
	music.src='music/'+this.name;
	txt.innerText=this.name;
		}
	}