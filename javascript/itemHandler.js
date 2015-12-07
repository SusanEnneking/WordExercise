
function ItemHandler(){
	this.item = "";
	this.items = [];

	this.commit = function (){
		if (this.item.length > 0){
			this.items.push(this.item);
			this.item = "";
		}
	}

	this.concat = function(char){
		this.item = this.item.concat(char);
	}
};
