function ScrollSlider(ele,height,speed){
	var curIndex = 0;
	var maxIndex = 0;
	var scrollHeight = height;
	
	var slider = $('#container ul').eq(0);
	maxIndex = $(slider).find("li").length - 1;

	$('#container').on('DOMMouseScroll mousewheel', function (e) {
	  if(!$(slider).is(":animated")){
		  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { 		    
			if(curIndex < maxIndex){
			    	$(slider).animate({ top:'-=' + scrollHeight + 'px' },speed);
			    	curIndex++;
			}else{
				return true;
			}
		  } else {
		  	if(curIndex > 0){
			    	$(slider).animate({ top:'+=' + scrollHeight + 'px' },speed);
			    	curIndex--;
			}else{
				return true;
			}	
		  }	  
	  }
	  
	  return false;
	  
	});
}
