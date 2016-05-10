var dict = {
	MS: (1,99),
	IA: (27,73),
	WY: (98,2),
	IL: (49,51),
	OH: (46,54),
	NY: (6,94),
	ID: (87,13),
	NH: (99,1),
	AZ: (17,83),
	WI: (89,11),
	TX: (1,99),
	MI: (8,92),
	KS: (79,21),
	UT: (83,17),
	TN: (1,99),
	VA: (1,99),
	CO: (42,58),
	HI: (80,20),
	FL: (5,95),
	AL: (1,99),
	AK: (96,4),
	LA: (1,99),
	NE: (90,10),
	VT: (99,1),
	GA: (1,99),
	MO: (9,91),
	NC: (12,88),
	SC: (1,99),
	MA: (20,80),
	MN: (31,69),
	WA: (98,2),
	OK: (44,56),
	AR: (1,99),
	NV: (35,65),
	ME: (96,4),
	RI: (64,36),
	PA: (1,99),
	MD: (1,99),
	DE: (1,99),
	CT: (15,85),
	IN: (3,97)
};

$('#map1').usmap({
	useAllLabels: true,
	stateHoverStyles: {}, //Override to do Nothing
	stateSpecificStyles: {
		'MS' : { fill: 'blue' },
		'IA' : { fill: 'blue' },
		'WY' : { fill: 'green' },
		'IL' : { fill: 'blue' },
		'OH' : { fill: 'blue' },
		'NY' : { fill: 'blue' },
		'ID' : { fill: 'green' },
		'NH' : { fill: 'green' },
		'AZ' : { fill: 'blue' },
		'WI' : { fill: 'green' },
		'TX' : { fill: 'blue' },
		'MI' : { fill: 'darkgreen' },
		'KS' : { fill: 'green' },
		'UT' : { fill: 'green' },
		'TN' : { fill: 'blue' },
		'VA' : { fill: 'blue' },
		'CO' : { fill: 'darkgreen' },
		'HI' : { fill: 'green' },
		'FL' : { fill: 'blue' },
		'AL' : { fill: 'blue' },
		'AK' : { fill: 'green' },
		'LA' : { fill: 'blue' },
		'NE' : { fill: 'green' },
		'VT' : { fill: 'green' },
		'GA' : { fill: 'blue' },
		'MO' : { fill: 'blue' },
		'NC' : { fill: 'blue' },
		'SC' : { fill: 'blue' },
		'MA' : { fill: 'blue' },
		'MN' : { fill: 'darkgreen' },
		'WA' : { fill: 'green' },
		'OK' : { fill: 'darkgreen' },
		'AR' : { fill: 'blue' },
		'NV' : { fill: 'blue' },
		'ME' : { fill: 'green' },
		'RI' : { fill: 'green' },
		'PA' : { fill: 'blue' },
		'MD' : { fill: 'blue' },
		'DE' : { fill: 'blue' },
		'CT' : { fill: 'blue' },
		'IN' : { fill: 'blue' }
	}, 
	mouseover: function(event, data) {
		var prob = dict[data.name]
		if (prob != null){
			if(prob >50){
				$('#selected-state')
					.text("Hilary Clinton was expected to win " + data.name + " with probability of " + prob + "%")
					.css({"font-weight": "bold", "color": "blue"});
			} else{
				$('#selected-state')
					.text("Bernie Sanders was expected to win " + data.name + " with probability of " + (100-prob) + "%")
					.css({"font-weight": "bold", "color": "green"});
			}
      	}else{
      		$('#selected-state')
					.text(data.name + " has not held its primary elections yet")
					.css({"font-weight": "bold", "color": "black"});
      	}
    },

    mouseout: function(event, data) {
      $('#selected-state')
      	.text('Hover over states to find out its expected primary results according to Prediction Market')
      	.css({"font-weight": "bold", "color": "black"});
    }

});