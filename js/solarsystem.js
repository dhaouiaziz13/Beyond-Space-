$(".infocont").hide();
$(".item").mouseenter(() => {
  $(".item").css({ cursor: "pointer" });
});
let i = 0;
let galaxies = [
  "EARTH",
  "MARS",
  "JUPITER",
  "MERCURY",
  "SATURN",
  "NEPTUNE",
  "URANUS",
];
i = 0;
$("#next").click(() => {
  if (i === galaxies.length) {
    i = 0;
  }
  $("#galaxci").hide();
  $("#galaxci").text(galaxies[i]);
  $("#galaxci").show();
  i++;
  console.log(i);
});
$(".close").click(() => {
  $(".infocont").fadeOut(1000);
  setTimeout(() => {
    $(".flexcont").fadeIn(1000);
  }, 1100);
});

$("#galaxci").click(() => {
  if (i === 1) {
    $(".flexcont").fadeOut(1000);
    setTimeout(() => {
      $("#EARTH").fadeIn(1000);
    }, 1100);
  } else if (i === 2) {
    $(".flexcont").fadeOut(1000);
    setTimeout(() => {
      $("#MARS").fadeIn(1000);
    }, 1100);
  } else if (i === 3) {
    $(".flexcont").hide();
    setTimeout(() => {
      $("#JUPITER").fadeIn(1000);
    }, 1100);
  } else if (i === 4) {
    $(".flexcont").hide();
    setTimeout(() => {
      $("#MERCURY").fadeIn(1000);
    }, 1100);
  } else if (i === 5) {
    $(".flexcont").hide();
    setTimeout(() => {
      $("#SATURN").fadeIn(1000);
    }, 1100);
  } else if (i === 6) {
    $(".flexcont").hide();
    setTimeout(() => {
      $("#NEPTUNE").fadeIn(1000);
    }, 1100);
  } else if (i === 7) {
    $(".flexcont").hide();
    setTimeout(() => {
      $("#URANUS").fadeIn(1000);
    }, 1100);
  }
});
