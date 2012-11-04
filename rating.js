if(!Array.prototype.indexOf){Array.prototype.indexOf=function(elt){var len = this.length;var from = Number(arguments[1]) || 0;from = (from < 0)? Math.ceil(from): Math.floor(from);if (from < 0)from += len;for (; from < len; from++){if (from in this && this[from] === elt)return from;}return -1;};}

var rating = {
	check: false,
	element: null,
	callback: function(data){},
	run: function( id, callback ){
		this.callback = callback;
		this.element = document.getElementById(id);
		for( var i=1; i<=5; i++){
			this.element.innerHTML += '<span class="rating-star" id="rating-star-'+i+'" onmouseover="rating.over('+i+');" onclick="rating.change('+i+');" onmouseout="rating.out('+i+');"><input type="radio" name="rating" value="'+i+'" /></span>';
		}
	},
	checked: function(){
		this.check = false;
		if( this.element.className.split(' ').indexOf('rating-checked') >= 0 ) {
			this.check = true;
		}
		return this.check;
	},
	change: function(val ){
		if(this.checked()) return false;
		this.element.className += ' rating-checked';
		if([1,2,3,4,5].indexOf(val)>=0){
			for(var i=1; i<=val; i++){
				document.getElementById('rating-star-'+i).className += ' rating-star-active';
			}
			this.element.innerHTML += '<span class="rating-clear" id="rating-clear" onclick="return rating.clear();"></span>';
			this.callback(val);
		}
	},
	over: function( to ){
		if(this.checked()) return false;
		if([1,2,3,4,5].indexOf(to)>=0){
			for(var i=1; i<=to; i++){
				document.getElementById('rating-star-'+i).className += ' rating-star-active';
			}
		}
	},
	out: function( to ){
		if(this.checked()) return false;
		if([1,2,3,4,5].indexOf(to)>=0){
			for(var i=1; i<=to; i++){
				document.getElementById('rating-star-'+i).className = 'rating-star';
			}
		}
	},
	clear: function(){
		if(this.checked()){
			for(var i=1; i<=5; i++){
				document.getElementById('rating-star-'+i).className = 'rating-star';
			}
			this.element.className = 'rating';
			this.element.removeChild( document.getElementById('rating-clear') );
		}
	}
};