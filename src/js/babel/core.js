const sttElem = document.querySelector('.stt');
const screanHeight = window.innerHeight;

const sttScroll = () => {
  document.addEventListener('scroll', (e) => {
    if (screanHeight <= window.scrollY) {
      sttElem.classList.add('stt__active');
    } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
      sttElem.classList.remove('stt__active');
    }
  });
};

const sttClick = () => {
  sttElem.addEventListener('click', () => {
    const docHeight = window.scrollY;
    let progress = 0;
    let position = docHeight;
    const speed = 1; // When increasing this value. The scrolling speed will increase

    const sttAnim = () => {
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

const sttFunc = () => {
  sttScroll();
  sttClick();
};

document.addEventListener('DOMContentLoaded', sttFunc);