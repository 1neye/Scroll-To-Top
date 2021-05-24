"use strict";

var sttElem = document.querySelector('.stt');
var screanHeight = window.innerHeight;

var sttScroll = function sttScroll() {
  document.addEventListener('scroll', function (e) {
    if (screanHeight <= window.scrollY) {
      sttElem.classList.add('stt__active');
    } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
      sttElem.classList.remove('stt__active');
    }
  });
};

var sttClick = function sttClick() {
  sttElem.addEventListener('click', function () {
    var docHeight = window.scrollY;
    var progress = 0;
    var position = docHeight;
    var speed = 1; // When increasing this value. The scrolling speed will increase

    var sttAnim = function sttAnim() {
      progress += 1;
      position -= progress * speed;
      window.scrollTo(0, position);

      if (position > 0) {
        requestAnimationFrame(sttAnim);
      } else if (position < 0) {
        progress = 0;
        position = docHeight;
      }
    };

    requestAnimationFrame(sttAnim);
  });
};

var sttFunc = function sttFunc() {
  sttScroll();
  sttClick();
};

document.addEventListener('DOMContentLoaded', sttFunc);