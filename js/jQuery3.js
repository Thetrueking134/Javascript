function updateWeatherHtml () {
  	// Change the src attribute of the icon image using jQuery .attr()
  	$('#iconimage').attr('src', 'img/rain.png')
  	$('#summary').html('Rain in the evening');
    $('#temperature').html('8° C');
    $('#winddisplay').html('8 km/h');
    $('#humiditydisplay').html('68%');
  	$('#datedisplay').html('Tomorrow');
	$('#buttonDateRight').hide();
}