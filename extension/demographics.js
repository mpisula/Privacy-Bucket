function getPerTrackerDemographics(key){
	return getPerTrackerDemographicsStub(key);
}

stub = 
{ 
    	'All' : 
    	{
	    	network_id : -1, 
	    	text : 'All data',
	    	age : {
	    		'< 18' : 9,
				'18-24' : 16,
				'25-34' : 20, 
				'35-44': 25,
				'45-54' : 20,
				'55-64' : 7,
				'65+' : 3
	    	},
	    	income : {
				'$0-50k' : 17,
				'$50-100k' : 22,
				'$100-150k' : 27,
				'$150k+' : 34
	    	},
	    	gender : {
	    		'Male' : 54,
	    		'Female' : 46
	    	},
	    	education : {
		    	'No College' : 67,
		 		'College' : 10,
		 		'Grad School' : 4
	 		},
	    	family : {
	    		'No kids' : 73,
	    		'Has kids' : 27
	    	},
	    	etnithity : {
		    	'Caucasian' : 63,
				'African American':	 18,
				'Asian':	 8,
				'Hispanic':	 10,
				'Other': 1
	    	}
	    },
	    'DoubleClick' : 
    	{
	    	network_id : 37, 
	    	text : 'DoubleClick',
	    	age : {
	    		'< 18' : 9,
				'18-24' : 16,
				'25-34' : 20, 
				'35-44': 25,
				'45-54' : 20,
				'55-64' : 7,
				'65+' : 3
	    	},
	    	income : {
				'$0-50k' : 17,
				'$50-100k' : 22,
				'$100-150k' : 27,
				'$150k+' : 34
	    	},
	    	gender : {
	    		'Male' : 54,
	    		'Female' : 46
	    	},
	    	education : {
		    	'No College' : 67,
		 		'College' : 10,
		 		'Grad School' : 4
	 		},
	    	family : {
	    		'No kids' : 73,
	    		'Has kids' : 27
	    	},
	    	etnithity : {
		    	'Caucasian' : 63,
				'African American':	 18,
				'Asian':	 8,
				'Hispanic':	 10,
				'Other': 1
	    	}
	    },
	    'Acxiom' : 
    	{
	    	network_id : 3, 
	    	text : 'DoubleClick',
	    	age : {
	    		'< 18' : 9,
				'18-24' : 16,
				'25-34' : 20, 
				'35-44': 25,
				'45-54' : 20,
				'55-64' : 7,
				'65+' : 3
	    	},
	    	income : {
				'$0-50k' : 17,
				'$50-100k' : 22,
				'$100-150k' : 27,
				'$150k+' : 34
	    	},
	    	gender : {
	    		'Male' : 54,
	    		'Female' : 46
	    	},
	    	education : {
		    	'No College' : 67,
		 		'College' : 10,
		 		'Grad School' : 4
	 		},
	    	family : {
	    		'No kids' : 73,
	    		'Has kids' : 27
	    	},
	    	etnithity : {
		    	'Caucasian' : 63,
				'African American':	 18,
				'Asian':	 8,
				'Hispanic':	 10,
				'Other': 1
	    	}
	    },
	    'Acxiom' : 
    	{
	    	network_id : 16, 
	    	text : 'Acxiom',
	    	age : {
	    		'< 18' : 9,
				'18-24' : 16,
				'25-34' : 20, 
				'35-44': 25,
				'45-54' : 20,
				'55-64' : 7,
				'65+' : 3
	    	},
	    	income : {
				'$0-50k' : 17,
				'$50-100k' : 22,
				'$100-150k' : 27,
				'$150k+' : 34
	    	},
	    	gender : {
	    		'Male' : 54,
	    		'Female' : 46
	    	},
	    	education : {
		    	'No College' : 67,
		 		'College' : 10,
		 		'Grad School' : 4
	 		},
	    	family : {
	    		'No kids' : 73,
	    		'Has kids' : 27
	    	},
	    	etnithity : {
		    	'Caucasian' : 63,
				'African American':	 18,
				'Asian':	 8,
				'Hispanic':	 10,
				'Other': 1
	    	}
	    }
};

function getPerTrackerDemographicsStub(key){
	return stub[key];
}

function getAdvertisers(){
	var result = new Array();
	for(var o in stub) {
		result.push(o);
	}
	return result;	
}