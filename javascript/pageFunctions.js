function parseSentence(){
	document.getElementById("alteredSentence").innerHTML = 
		SentenceExaminer.examine(document.getElementById("sentence").value);
	savePrior(document.getElementById("sentence").value, 
			  document.getElementById("alteredSentence").innerHTML);
}

function savePrior(oldSentence, newSentence){
	var node = document.createElement("TR");  
	node.appendChild(createTD(oldSentence));
	node.appendChild(createTD(newSentence));                          
	document.getElementById("history").appendChild(node);
}

function createTD(sentence){
	var Node = document.createElement("TD");         
	var textnode = document.createTextNode(sentence);         
	Node.appendChild(textnode); 
	return Node;
}