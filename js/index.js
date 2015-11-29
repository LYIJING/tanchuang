$(document).ready(function(){
	var flag = false;//点击button后flag=true
 	$(".main").hide();
 	$(".main").on("click",function(e){
 		event.stopPropagation();
 	})
 	$(".a").on("click",function(e){
 		if(flag == false)
 		{
 			event.stopPropagation();
 			$(".m-a").show();
 			flag = true;
 		}
 		else if(flag == true)
 		{
 			event.stopPropagation();
 			$(".m-b").hide();
 			$(".m-a").show();
 			flag = true;
 		}
 	})
 	$(".b").on("click",function(e){
 		if(flag == false)
 		{
 			event.stopPropagation();
 			$(".m-b").show();
 			flag = true;
 		}
 		else if(flag == true)
 		{
 			event.stopPropagation();
 			$(".m-a").hide();
 			$(".m-b").show();
 			flag = true;
 		}
 	})	
 	$(".close").on("click",function(){
 		$(".main").hide();
 	})
 	$(document).on("click",function(){
 		$(".main").hide();
 	})
});