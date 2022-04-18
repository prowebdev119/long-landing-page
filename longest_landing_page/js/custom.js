$(document).on("scroll", function () {
    if ($(document).scrollTop() > 80) {
        $(".header_outer").addClass("shrink");
    } else {
        $(".header_outer").removeClass("shrink");
    };
});

$(document).ready( function () {
	$(".pop_btn").click( function () {
		$('#exampleModalLong').modal('show')
	});
	$(".opt_btn").click( function () {
		$('.opt_blk').toggleClass('open')
		$(this).toggleClass('chng_icon')
	});
	$(".close").click( function () {
		$('#exampleModalLong').modal('hide')
	});
	$(".tabs_outer>ul>li>a").click(function(){  
		$(".tabs_outer").toggleClass("hide_menu");  
	});  
	$(".back_to_menu").click(function(){  
		$(".tabs_outer").toggleClass("hide_menu");  
	});  
	$(".tabs_outer>ul>li>a").click(function(){  
		$(".tab-content").toggleClass("show_cnt");  
	});  
	$(".back_to_menu").click(function(){  
		$(".tab-content").toggleClass("show_cnt");  
	});



	$(".edit").click(function(){
      var $this = $(this);
      $(".inputDisabled").toggleClass("clear_fild");
      $this.toggleClass('cancle');
          if($this.hasClass('cancle')){
              $this.text('Cancle');         
          } else {
              $this.text('Edit');
          }
      });
	$("#msg_search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTab li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });



});

