
'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
  return headerBtnClicked = !headerBtnClicked;
});

function toggleSidebar() {
  const sidebar = document.querySelector('#my-info');
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

//add project video autoplay on mouseover
let projects = document.querySelectorAll('video.thumbnail');
for (let project of projects) {
  project.addEventListener('mouseenter', function(e) {
    //modified from MDN Autoplay guide for media and Web Audio APIs
    let startPlayPromise = e.target.play();

    if (startPlayPromise !== undefined) {
      startPlayPromise.then(() => {
        e.target.play();
      }).catch(error => {
        if (error.name === "NotAllowedError") {
          showPlayButton(videoElem);
        } else {
          // Handle a load or playback error
        }
      });
    }
  });

  project.addEventListener('mouseout', function(e){
    setTimeout(function(){
      e.target.pause();
    },500)
  });
}

function showErrorInfo() {
  const errorMessage = document.querySelector('.errorInfo');
  if (errorMessage.style.display === "none") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}