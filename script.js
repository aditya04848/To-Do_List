	
var html = "";
var count=0;
$(".fa-plus").click(function(){
	$(".add").fadeToggle();
});
$("input").keypress(function(event){
	if(event.which === 13)
	{
		var input = $("input").val();
		count++;
		if(count%2===0)
			$(".todoElements").append('<div class="entered darkbg" style="padding-top:0; word-wrap: break-word; padding-bottom:0;"><p style="margin:auto auto;font-size: 27px;"><i class="fa fa-trash" style="margin: auto auto;float:left; display:none; width:32px;height:32px;text-align:center; margin-left:0; ;margin-right:10px;"></i>'+input+'</p></div>');
		else
			$(".todoElements").append('<div class="entered lightbg" style="padding-top:0; word-wrap: break-word; padding-bottom:0;"><p style="margin:auto auto;font-size: 27px;"><i class="fa fa-trash" style="margin: auto auto;float:left; display:none; width:32px;height:32px;text-align:center; margin-left:0; margin-right:10px;"></i>'+input+'</p></div>');
		$("input").val("");
	}
});	

$('div.todoElements').delegate('p', 'click', function ()
{
    $(this).toggleClass('strike');
});

 $('div.todoElements').delegate('p', 'mouseover', function ()
 {
   $(this).children().fadeIn(200);
 });

 $('div.todoElements').delegate('p', 'mouseout', function ()
 {
   $(this).children().fadeOut(20);
 });

$('div.todoElements').delegate('i', 'click', function() {
	$(this).parent().fadeOut(function(){
		$(this).parent().remove();
	});
});