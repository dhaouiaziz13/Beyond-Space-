$(".infocont").hide();
$(".item").mouseenter(() => {
  $(".item").css({ cursor: "pointer" });
});
let i = 0;
let galaxies = ["ANDROMEDA", "CIGAR_GALAXY", "LMC", "PINWHEEL"];
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
      $("#andromeda").fadeIn(1000);
    }, 1100);
  } else if (i === 2) {
    $(".flexcont").fadeOut(1000);
    setTimeout(() => {
      $("#CIGAR_GALAXY").fadeIn(1000);
    }, 1100);
  } else if (i === 3) {
    $(".flexcont").hide();
    setTimeout(() => {
      $("#LMC").fadeIn(1000);
    }, 1100);
  } else if (i === 4) {
    $(".flexcont").hide();
    setTimeout(() => {
      $("#PINWHEEL").fadeIn(1000);
    }, 1100);
  }
});
