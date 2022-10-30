/* byShchaninBoris */
/* creating tabs */
let tab = document.querySelectorAll('.info-header-tab'),
info = document.querySelector('.info-header'),
tabContent = document.querySelectorAll('.info-tabcontent');

function hideTabContent(a) {
for (let i = a; i < tabContent.length; i++) {
  tabContent[i].classList.remove('show');
  tabContent[i].classList.add('hide');
}
}

hideTabContent(1);

function showTabContent(b) {
if (tabContent[b].classList.contains('hide')) {
  tabContent[b].classList.remove('hide');
  tabContent[b].classList.add('show');
}
}

info.addEventListener('click', (e) => {
let target = e.target;
if (target && target.classList.contains('info-header-tab')) {
  for (let i = 0; i < tab.length; i++) {
    if (target == tab[i]) {
      hideTabContent(0);
      showTabContent(i);
      break;
    }
  }
}
});
/* modal window */
let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    popup = document.querySelector('.popup');




  more.addEventListener('click', () => {
    overlay.style.display = 'block';
    if (navigator.userAgent.match(/MSIE|Edge/i)) {
      overlay.classList.add('fade');
      popup.classList.add('more-splash');
    } else if (isMobile()) {} else {
      let a = 0;
      popup.style.top = "50px";
      let timer = setInterval(() => {
        if (popup.style.top == '150px') {
          clearInterval(timer);
        } else {
          a += 2;
          popup.style.top = a + 'px';
        }
      }, 20)
    }
    document.body.style.overflow = 'hidden';
  });


  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    mainForm.style.display = '';
    statusMessage.innerHTML = '';
    document.body.style.overflow = '';
    if (navigator.userAgent.match(/MSIE|Edge/i)) {
      overlay.classList.remove('fade');
      popup.classList.remove('more-splash');
    }
  });

  let description = document.querySelectorAll('.description-btn');

  description.forEach(item => {
    item.addEventListener('click', () => {
      overlay.style.display = 'block';
      if (navigator.userAgent.match(/MSIE|Edge/i)) {
        overlay.classList.add('fade');
        popup.classList.add('more-splash');
      } else if (isMobile()) {} else {
        let a = 0;
        popup.style.top = "50px";
        let timer = setInterval(function () {
          if (popup.style.top == '150px') {
            clearInterval(timer);
          } else {
            a += 2;
            popup.style.top = a + 'px';
          }
        }, 20)
      }
      document.body.style.overflow = 'hidden';
    });
  });