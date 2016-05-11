var dict = {
	'AK' : 59098.04,
	'AL' : 857416.44,
	'AR' : 85378.79,
	'AZ' : 1102052.91,
	'CA' : 16699664.98,
	'CO' : 5264162.04,
	'CT' : 146040.88,
	'DC' : 11845026.54,
	'DE' : 336747.9,
	'FL' : 7018152.52,
	'GA' : 1956101.48,
	'HI' : 111893.59,
	'IA' : 655542.39,
	'ID' : 36817.63,
	'IL' : 26093213.68,
	'IN' : 641333.5,
	'KS' : 154693.56,
	'KY' : 149828.91,
	'LA' : 79480.79,
	'MA' : 8379045.04,
	'MD' : 8475246.98,
	'ME' : 43312.95,
	'MI' : 1398835.69,
	'MN' : 2887051.85,
	'MO' : 22589427.39,
	'MS' : 112463.56,
	'MT' : 251643.53,
	'NC' : 1453757.11,
	'ND' : 17551.68,
	'NE' : 469562.65,
	'NH' : 624586.29,
	'NJ' : 751708.49,
	'NM' : 425418.45,
	'NV' : 2407329,
	'NY' : 6304836.69,
	'OH' : 7943008.1,
	'OK' : 462157.39,
	'OR' : 222050.93,
	'PA' : 2604924.71,
	'RI' : 81233.38,
	'SC' : 679817.69,
	'SD' : 144520.55,
	'TN' : 562103.06,
	'TX' : 1793526.4,
	'UT' : 99158.42,
	'VA' : 6497828.26,
	'VT' : 33632.03,
	'WA' : 1923885.35,
	'WI' : 15278445.91,
	'WV' : 111439.39,
	'WY' : 52648.65
}



$('#map2').usmap({
	useAllLabels: true,
	stateHoverStyles: {}, //Override to do Nothing
	stateSpecificStyles: {
		'AK' : { fill: '#BFEFFF' },
		'AL' : { fill: '#BFEFFF' },
		'AR' : { fill: '#BFEFFF' },
		'AZ' : { fill: '#BFEFFF' },
		'CA' : { fill: '#23238E' },
		'CO' : { fill: '#BFEFFF' },
		'CT' : { fill: '#BFEFFF' },
		'DC' : { fill: '#0276FD' },
		'DE' : { fill: '#BFEFFF' },
		'FL' : { fill: '#BFEFFF' },
		'GA' : { fill: '#BFEFFF' },
		'HI' : { fill: '#BFEFFF' },
		'IA' : { fill: '#BFEFFF' },
		'ID' : { fill: '#BFEFFF' },
		'IL' : { fill: '#23238E' },
		'IN' : { fill: '#BFEFFF' },
		'KS' : { fill: '#BFEFFF' },
		'KY' : { fill: '#BFEFFF' },
		'LA' : { fill: '#BFEFFF' },
		'MA' : { fill: '#0276FD' },
		'MD' : { fill: '#0276FD' },
		'ME' : { fill: '#BFEFFF' },
		'MI' : { fill: '#BFEFFF' },
		'MN' : { fill: '#BFEFFF' },
		'MO' : { fill: '#23238E' },
		'MS' : { fill: '#BFEFFF' },
		'MT' : { fill: '#BFEFFF' },
		'NC' : { fill: '#BFEFFF' },
		'ND' : { fill: '#BFEFFF' },
		'NE' : { fill: '#BFEFFF' },
		'NH' : { fill: '#BFEFFF' },
		'NJ' : { fill: '#BFEFFF' },
		'NM' : { fill: '#BFEFFF' },
		'NV' : { fill: '#BFEFFF' },
		'NY' : { fill: '#BFEFFF' },
		'OH' : { fill: '#0276FD' },
		'OK' : { fill: '#BFEFFF' },
		'OR' : { fill: '#BFEFFF' },
		'PA' : { fill: '#BFEFFF' },
		'RI' : { fill: '#BFEFFF' },
		'SC' : { fill: '#BFEFFF' },
		'SD' : { fill: '#BFEFFF' },
		'TN' : { fill: '#BFEFFF' },
		'TX' : { fill: '#BFEFFF' },
		'UT' : { fill: '#BFEFFF' },
		'VA' : { fill: '#BFEFFF' },
		'VT' : { fill: '#BFEFFF' },
		'WA' : { fill: '#BFEFFF' },
		'WI' : { fill: '#0276FD' },
		'WV' : { fill: '#BFEFFF' },
		'WY' : { fill: '#BFEFFF' }

	},
	mouseover: function(event, data) {
		var exp = dict[data.name]
		if (exp != null){
			$('#selected-state')
				.text("Barack Obama spent a total of $" + numberWithCommas(exp) + " in " + data.name + " during his 2008 campaign")
				.css({"font-weight": "bold", "color": "blue"});
      	}else{
      		$('#selected-state')
				.text("There's no information on " + data.name)
				.css({"font-weight": "bold", "color": "black"});
      	}
	},
	mouseout: function(event, data) {
		$('#selected-state')
      		.text('Hover over states to find out how much Obama spent on that state in his 2008 campaign!')
      		.css({"font-weight": "bold", "color": "black"});
		
	}
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}