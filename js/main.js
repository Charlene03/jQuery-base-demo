var name="Clubtext";
var count=0;

$(

	function(){
	
	
  //print1(); 指下方print1印出二行文字
  //$("#typo").html("<div class='inner'>Hello JE Club Creative Classmates<br/>Creative Ms. Charlene</div>");
  $(".page-main > div:nth-child(1) .inner").css('opacity', 0.4);

/*
  $("#writer1").click(function(){
  	    count++;
  		name="test"+count;
  		name=$("#message").val();
  		print1();
	});
 */ 
}

);

function print1(){
	$("#typo").append("Creative Classmates<br/>");
  $("#typo").append("Creative " + name);
};


var reply_click = function()
{
    //name=$("#message").val();
    name=document.getElementById('message').value;
    print1();
    document.getElementById('message').value='your name';
}
document.getElementById('writer1').onclick = reply_click;