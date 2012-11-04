rating
======

Pure JavaScript star rating

// Template
<div id="rating" class="rating"></div>

// Run
rating.run('rating',function(data){
  alert('checked value = ' + data);
});

// Css
.rating { width: 75px; height: 12px; padding: 0; }
.rating .rating-clear { width: 8px; height: 8px; margin: 2px 0 0 5px; display: block; float: left; overflow: hidden; background: url(/i/rating-clear.png) center center; }
.rating .rating-star { width: 12px; height: 10px; display: block; float: left; overflow: hidden; background-image: url(/i/rating-stars.png); background-position: center bottom; }
.rating .rating-star input { height: 10px; display: none; }
.rating .rating-star:hover, .rating .rating-star-active { background-position: center top; }
.rating-checked .rating-star:hover { background-position: center bottom; }
.rating-checked .rating-star-active:hover { background-position: center top; }