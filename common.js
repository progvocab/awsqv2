var index = 0;
var emoarr=["&#128528;","&#128578;","&#127773;","&#128512;","&#128515","&#128516;","&#128513;","&#128522;","&#128519;","&#128526;","&#129321;","&#128571;"];
function afterLoad(){
    document.onkeypress = function() {myFunction(event)};
    document.getElementById('bulb').style.display = "none";
    document.getElementById('11').style= 'display:none';
                    document.getElementById('22').style= 'display:none';
                    document.getElementById('33').style= 'display:none';
                    document.getElementById('44').style= 'display:none';
                    score = 0;
            document.getElementById("title").innerHTML=title;
            var emoarr=["&#128528;","&#128578;","&#127773;","&#128512;","&#128515","&#128516;","&#128513;","&#128522;","&#128519;","&#128526;","&#129321;","&#128571;"];
            document.getElementById('sc').innerHTML = score;
            
            var index = 0;
            document.getElementById('q1').innerHTML = req[index].question;
            document.getElementById('a').innerHTML = req[index].optiona;
            document.getElementById('b').innerHTML = req[index].optionb;
            document.getElementById('c').innerHTML = req[index].optionc;
            document.getElementById('d').innerHTML = req[index].optiond;
            document.getElementById('e').style.display = "none";
            document.getElementById('f').style.display = "none";
}
$('#main').load(  'blog.html'  ,  afterLoad );

function changeBgToGrey(elemId){
    document.getElementById( elemId).parentElement.parentElement.parentElement.parentElement.style.backgroundColor= '#f3f3f3';
}
function changeBgToWhite(elemId){
    document.getElementById( elemId).parentElement.parentElement.parentElement.parentElement.style.backgroundColor= '#ffffff';
}

//$('#1').html( $('#circle').html());

function myFunction(event) {
   switch (event.keyCode )  {
	   case 97 :
	   case 49 :
			document.getElementById("a").click();
	   break;
	   case 98 :
	   case 50 :
			document.getElementById("b").click();
	   break;
	   case 99 :
	   case 51 :
			document.getElementById("c").click();
	   break;
	   case 100 :
	   case 52 :
			document.getElementById("d").click();
	   break;
	   case 110 :
	   case 53 :
	   case 46 :
			document.getElementById("f").click();
	   break;
   } 
}



 
            function correct(val) {
                if (req[index].answer == val) score++;
				score1 = score ;
				var emo  = ( emoarr[  emoarr.length -1] ).repeat(Math.floor(score / emoarr.length));
				 emo  +=  emoarr[score % emoarr.length];
				 
				document.getElementById('emotion').innerHTML = emo;
                document.getElementById('sc').innerHTML = score;
                
                document.getElementById('11').style= 'display:none';
                document.getElementById('22').style= 'display:none';
                document.getElementById('33').style= 'display:none';
                document.getElementById('44').style= 'display:none';
                $('#a1').html( $('#cross').html());
                $('#b1').html( $('#cross').html());
                $('#c1').html( $('#cross').html());
                $('#d1').html( $('#cross').html());
                $('#'+req[index].answer+'1').html( $('#circle').html());
                document.getElementById('e').innerHTML = req[index].info;
                if($.trim(document.getElementById('e').innerHTML)  != "" ) {
                    document.getElementById('bulb').style.display = "inline";
                }else{
                    document.getElementById('bulb').style.display = "none";
                }
                document.getElementById('e').style.display = "block";
                document.getElementById('f').style.display = "block";

            }
            function next() {
                try {
                    index++;
                    document.getElementById('e').style.display = "none";
                    document.getElementById('f').style.display = "none";
                    $('#a1').html('');
                    $('#b1').html('');
                    $('#c1').html('');
                    $('#d1').html('');
                    document.getElementById('q1').innerHTML = req[index].question;
                    document.getElementById('a').innerHTML = req[index].optiona;
                    document.getElementById('b').innerHTML = req[index].optionb;
                    document.getElementById('c').innerHTML = req[index].optionc;
                    document.getElementById('d').innerHTML = req[index].optiond;
                    document.getElementById('e').innerHTML = "";
                    document.getElementById('bulb').style.display = "none";
                } catch (e) {
                    document.getElementById('q1').innerHTML = 'Thats all Folks  &#127875; ';
                    document.getElementById('e').style.display = "none";
                    document.getElementById('f').style.display = "none";
                    document.getElementById('a').style.display = "none";
                    document.getElementById('b').style.display = "none";
                    document.getElementById('c').style.display = "none";
                    document.getElementById('d').style.display = "none";
                }
            }