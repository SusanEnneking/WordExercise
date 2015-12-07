
/*

In the programming language of your choice, write a program that parses a sentence and replaces 
each word with the following: first letter, number of distinct characters between first and last
 character, and last letter.  For example, Smooth would become S3h.  Words are separated by 
 spaces or non-alphabetic characters and these separators should be maintained in their 
 original form and location in the answer.

*/
var SentenceExaminer = (function(){
	function examineSentence(sentence){
		var splitData = parseSentence(sentence);
		splitData.words = alterWords(splitData.words);
		return reassembleSentence(splitData);
	}

	function parseSentence(sentence){
		var words = new ItemHandler();
		var splitters = new ItemHandler();

    	for (i = 0; i < sentence.length; i++){
    		var char = sentence.charAt(i);
    		/^[a-zA-Z]+$/.test(char)?add(splitters, words, char):add(words, splitters, char);
    	};

    	splitters.commit();
    	words.commit();
    	return {words: words.items, splitters: splitters.items}
	}

	function add(first, second, char){
		first.commit();
		second.concat(char);
	}


	function alterWords(words){
		var alteredWords = [];
		words.forEach(function(word){
			alteredWords.push(alterWord(word));
		});
		return alteredWords;
	}

	function alterWord(word){
		var newWord = word[0];
		var distinct = [];
		for (i = 1; i < word.length - 1;  i++){
			if (distinct.indexOf(word[i]) === -1){
				distinct.push(word[i]);
			}
		}
		newWord = newWord.concat(distinct.length.toString());
		newWord = newWord.concat(word[word.length - 1]);
		return newWord;
	}

	function reassembleSentence(splitData){
		return splitData.words.length >= splitData.splitters.length?
			assemble(splitData.words, splitData.splitters):
			assemble(splitData.splitters, splitData.words);
	}

	function assemble(longList, shortList){
		var sentence = "";
		for (i = 0; i < longList.length; i++){
			sentence = sentence.concat(longList[i]);
			sentence = shortList[i]?sentence.concat(shortList[i]):sentence;
		}
		return sentence;
	}

	// return public functions
	return {
		examine : examineSentence
	};
})();
