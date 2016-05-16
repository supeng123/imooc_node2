//$(function(){});是$(document).ready(function(){ })的简写.
$(function(){
	$(".comment").click(function(e){
		var target=$(this);
		var commentId=target.data("cid");
		var toId=target.data("tid");

		if($("#toId").length>0){
			$("#toId").val(toId);
		}else{
			$("<input>").attr({
				type:"hidden",
				id:"toId",
				name:"comment[tid]",
				value:toId
			}).appendTo("#commentForm");
		};
	
		if($("#commentId").length>0){
			$("#commentId").val(commentId);
		}else{
			$("<input>").attr({
				type:"hidden",
				id:"commentId",
				name:"comment[cid]",
				value:commentId
			}).appendTo("#commentForm");
		};
		
	});
});