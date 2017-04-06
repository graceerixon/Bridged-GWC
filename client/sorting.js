function calculateSimilarity(teenInterests, seniorInterests) {
	var score = 0;
	for (var i = 0; i < seniorInterests.length; i++) {
		var point = teenInterests.indexOf(seniorInterests[i]);
		if (point == -1)
			score += 0;
		else
			score += 1;
	}
	return score;
};

export function assignment(teens, seniors, amount) {
	var groups = [];
	var num = seniors.length;
	
	
	
	// do I have a functional array of the seniors and teens?
	
	//run through loop for the number of seniors to calculate their score with each teen
	
	//find the highest score
	
	//return an array of that senior with their paired teen
	
	//remove that senior from the array seniors
}