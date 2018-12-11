console.log('My app is alive!!!')

function First(){
Channel('Yummy','challenge-6-star');
}

function Second(){
	Channel('SevenContinents','challenge-6-star-o');
	}

	function Third(){
		Channel('KillerApp','challenge-6-star');
		}

		function Fourth(){
			Channel('FirstPersonOnMars','challenge-6-star-o');
			}

			function Fifth(){
				Channel('Octoberfest','challenge-6-star');
				}


function Channel(Name,image){
$('#bar').html('#' + Name + ' by <span id="ID"><a href="https://map.what3words.com/upgrading.never.helps" target="_blank"><small style="color:white">upgrading.never.helps</small></span>');
$('#Image').attr('src','img/' + image + '.png');
}


console.log(Channel)


