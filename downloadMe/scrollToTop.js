"use strict";

var sttElem = document.querySelector('.stt');
var screanHeight = window.innerHeight;

var sttScroll = function sttScroll() {
  document.addEventListener('scroll', function (e) {
    if (screanHeight <= window.scrollY) {
      sttElem.classList.add('stt__active');
    } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
      sttElem.classList.remove('stt__active');
      sttElem.style.pointerEvents = 'auto';
    }
  });
};

var sttClick = function sttClick() {
  sttElem.addEventListener('click', function () {
    var docHeight = window.scrollY;
    var progress = 0;
    var position = docHeight;
    var speed = 5; // When increasing this value. The scrolling speed will increase

    sttElem.style.pointerEvents = 'none';

    var sttAnim = function sttAnim() {
      progress += 1;
      position -= progress * speed;
      window.scrollTo(0, position);

      if (position > 0) {
        requestAnimationFrame(sttAnim);
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