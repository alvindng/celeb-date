$(function() {

  $('form').submit(function(event) {
    event.preventDefault();



    var food = $("input:radio[name=food]:checked").val();
    var color = $("input:radio[name=color]:checked").val();

    if (food === "a" && color === "a") {
      alert("Leo loves you!");
      $('img').hide();
      $("#leo").show()
    }

    else if (food === "a" && color === "b") {
      alert("Kate loves you!");
      $('img').hide();
      $("#kate").show()
    }

    else if (food === "b" && color === "a") {
      alert("Ricky loves you!");
      $('img').hide();
      $("#ricky").show()
    }

    else if (food === "b" && color === "b") {
      alert("Lucy loves you!");
      $('img').hide();
      $("#lucy").show()
    }

  });
});
