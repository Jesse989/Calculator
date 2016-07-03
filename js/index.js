$(document).ready(function() {
  var answer = "";
  var totalDiv = "";
  var memory = "";
  var dec = false;

  totalDiv = $("#answer");
  totalDiv.text("0");

  $("#CE").on("click", function() {
    answer = "";
    totalDiv.text("0");
    dec = false;
  });

  $("#mem").on("click", function() {
    answer = answer.concat(memory);
    totalDiv.text(answer);

  });

  $("#back").on("click", function() {
    answer = answer.slice(0, -1);
    totalDiv.text(answer);
  });

  $("#decimal").on("click", function() {
    if (dec !== true) {
      answer += ".";
      dec = true;
    }
  });

  $("#divide, #x, #plus, #minus").on("click", function() {
    answer += $(this).text();
    totalDiv.text(answer);
    if ($(this).attr("id") === "divide" || $(this).attr("id") === "x" || $(this).attr("id") === "plus" || $(this).attr("id") === "minus") {
      dec = false;

    }
  });
  $("#pow").on("click", function(){
    answer = answer*answer;
    totalDiv.text(answer);
  })

  $("#0, #1, #2, #3, #4, #5, #6, #7, #8, #9").on("click", function() {
    if (answer.length < 21) {
      answer += $(this).text();
      totalDiv.text(answer);

    }
  });

  $("#equals").click(function() {
    answer = answer.replace(/x/g, "*").replace(/÷/g, "/");
    answer = eval(answer);
    totalDiv.text(answer);
    memory = answer;

  });

});