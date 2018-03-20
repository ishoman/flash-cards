$(function() {
  // $(".other1").click(function() {
  //   $(".show1").toggle();
  // });
  // $(".show1").click(function(){
  //   $(".show1").toggle();
  // });

  $(".other1").click(function() {
    $(".show1", this).toggle();
    $(".hide1", this).toggle();
  });
});
