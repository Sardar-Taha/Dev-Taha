var $cell = $(".card");

//open and close card when clicked on card
$cell.find(".js-expander").click(function () {
  var $thisCell = $(this).closest(".card");

  if ($thisCell.hasClass("is-collapsed")) {
    $cell
      .not($thisCell)
      .removeClass("is-expanded")
      .addClass("is-collapsed")
      .addClass("is-inactive");
    $thisCell.removeClass("is-collapsed").addClass("is-expanded");

    if ($cell.not($thisCell).hasClass("is-inactive")) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass("is-inactive");
    }
  } else {
    $thisCell.removeClass("is-expanded").addClass("is-collapsed");
    $cell.not($thisCell).removeClass("is-inactive");
  }
});

//close card when click on cross
$cell.find(".js-collapser").click(function () {
  var $thisCell = $(this).closest(".card");

  $thisCell.removeClass("is-expanded").addClass("is-collapsed");
  $cell.not($thisCell).removeClass("is-inactive");
});

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-90px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// Enable hidden nav bar

const navbar = document.querySelector("#navbar");
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};

let buttons = document.getElementsByClassName("myButton");
for (let button of buttons) {
  button.addEventListener("click", function () {
    window.location.href = "mailto:tahaabb1122@gmail.com";
  });
}

document.querySelectorAll(".myButton").forEach((button) => {
  button.addEventListener("click", function () {
    window.location.href = "tahaabb1122@gmail.com";
  });
});

// let elementsToAnimate = document.querySelectorAll(".li");

// window.addEventListener("scroll", function () {
//   for (let element of elementsToAnimate) {
//     let rect = element.getBoundingClientRect();
//     if (rect.top < window.innerHeight && rect.bottom > 0) {
//       element.classList.add("animated");
//     } else {
//       element.classList.remove("animated");
//     }
//   }
// });
