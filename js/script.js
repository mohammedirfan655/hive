function displaySpec(p1,p2,f,fp)
{
	var p1 = document.getElementById(p1);
	var p2 = document.getElementById(p2);
	var f = document.getElementById(f);
	var fp = document.getElementById(fp);
	var sound = document.getElementById('shutterOpen');
	
	sound.play();
	
	fp.style.visibility = "hidden";
	p1.style.zIndex = "5";
	p2.style.zIndex = "5";
	p1.style.transform = "translate(-50px,-100px)";
	p2.style.transform = "translate(50px,100px)";
	
	setTimeout(
	function(){
	f.style.zIndex = "10";
	f.style.transform = "scale(2,2)";
	},1000);
	
}
function hideSpec(p1,p2,f,fp)
{
	var p1 = document.getElementById(p1);
	var p2 = document.getElementById(p2);
	var f = document.getElementById(f);
	var fp = document.getElementById(fp);
	var sound = document.getElementById('shutterClose');


	f.style.transform = "scale(1,1)";
	f.style.zIndex = "0";
	
	setTimeout(
	function(){
	p1.style.transform = "translate(0px,0px)";
	p2.style.transform = "translate(0px,0px)";	
	p1.style.zIndex = "0";
	p2.style.zIndex = "0";
	sound.play();
	},1000);
	
	setTimeout(
	function(){
	fp.style.visibility = "visible";
	},2000);
}

$(document).ready(function(e) {

/*    
$('body').click(
function()
{
	hideSpec('p1','p2','f1');
}
);
 */
});
