window.addEventListener('scroll', function (e) { updateHeader() });
window.addEventListener('load', function (e) { start() });

function start () {
  // Adjust header styles ("stickiness")
  updateHeader();
  // Wait for header styles to fade in before displaying page
  setTimeout (function () {
    document.body.classList.add("loaded");
  }, 250);
}

function updateHeader (e) {
  var maxLogoWidth = 90;
  var scrollTop = window.scrollY;

  // Shrink main USER1 logo as the page scrolls
  if (scrollTop > 125) {
      maxLogoWidth = 50;
  } else {
      maxLogoWidth = 90 - (40 * (scrollTop / 125));
  }
  document.getElementById('user1logo').style['width'] = maxLogoWidth + "px";

  // If the page scrolls past 40px, add a background behind the main header
  if (scrollTop > 40) {
    document.getElementById("topHeader").style["background-color"] = '#504651f5';
  } else {
    document.getElementById("topHeader").style["background-color"] = '';
  }

  // If the page scrolls past 70px, make the subheader "sticky"
  if (document.getElementById("subHeaderPlaceholder").getBoundingClientRect().top < 70) {
    document.getElementById("subHeader").classList.add("sticky");
    document.getElementById("subHeader").style["margin-top"] = '70px';
    document.getElementById("subHeader").style["background-color"] = '#5e5363fc';
  } else {
    document.getElementById("subHeader").classList.remove("sticky");
    document.getElementById("subHeader").style["margin-top"] = '0';
    document.getElementById("subHeader").style["background-color"] = '';
  }
  console.log("hero bottom: " + document.getElementById("hero").getBoundingClientRect().bottom + ", subhead top: "
                + document.getElementById("subHeaderPlaceholder").getBoundingClientRect().top)
}