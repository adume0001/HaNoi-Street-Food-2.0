/* =========================================================
   JavaScript practice: hover preview
   upDate(previewPic) runs on mouseover / focus
   unDo() runs on mouseleave / blur
   addTabFocus() runs on load and makes every image keyboard focusable
   ========================================================= */

function upDate(previewPic) {
  /* Step 3a: check that the event is triggering */
  console.log("upDate() was triggered");

  /* Step 3b: print information about the previewPic variable */
  console.log("alt: " + previewPic.alt);
  console.log("src: " + previewPic.src);

  /* Step 3c: change the text of the element with the id of image */
  document.getElementById("image").innerHTML = previewPic.alt;

  /* Step 3e: change the background image of the element with the id of image */
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  /* Check that the event is triggering */
  console.log("unDo() was triggered");

  /* Step 4a: put the background image back to the original value */
  document.getElementById("image").style.backgroundImage = "url('')";

  /* Step 4b: put the text back to the original text */
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
  /* Step 9a: make sure the onload event triggers */
  console.log("onload event triggered: addTabFocus()");

  /* Step 9b: loop through each image */
  var images = document.getElementsByClassName("preview");
  for (var i = 0; i < images.length; i++) {
    /* Step 9c: add the tabindex attribute */
    images[i].setAttribute("tabindex", "0");
    console.log("tabindex added to image " + (i + 1));
  }
}
