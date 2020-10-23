$("#sign").hide();
$("#log").hide();

let users = {};
let currentuser = "";
//-------------------------------------------------------------------
$("#choice2").click(() => {
  $("#choose").fadeOut();
  setTimeout(() => {
    $("#sign").fadeIn();
  }, 900);
});
//------------------------------------------------------------
$("#choice1").click(() => {
  $("#choose").fadeOut();
  setTimeout(() => {
    $("#log").fadeIn();
  }, 900);
});
//----------------------------------------------------------
$("#subsign").click(() => {
  if ($("#signuser").val() === "" || $("#signpass").val() === "") {
    alert("please type something");
  } else {
    alert("now you can login using the informations you provided");
    users[$("#signuser").val()] = $("#signpass").val();
    $(".input").val("");
    $("#sign").fadeOut();
    setTimeout(() => {
      $("#choose").fadeIn(1000);
    }, 1000);
  }
});
//-----------------------------------------------------------------
$("#sublog").click(() => {
  currentuser = $("#user").val();
  localStorage.setItem("current", currentuser);
  if (
    users.hasOwnProperty($("#user").val()) &&
    $("#pass").val() === users[$("#user").val()]
  ) {
    $(".flexcont").fadeOut();
    setTimeout(() => {
      window.location.href = "../html/forum.html";
    }, 1000);
  } else {
    $(".input").css("border-color", "red");
    $(".input").val("");
    alert("check your email and pass or signup ");
  }
});
//-------------------------------------------------------------------
$("#return").click(() => {
  $("#log").fadeOut();
  setTimeout(() => {
    $("#sign").fadeIn();
  }, 1000);
});
//-------------------------------------------------------------------------
//forum
