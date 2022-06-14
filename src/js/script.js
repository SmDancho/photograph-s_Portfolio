const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'phone' : 'phone',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message',
      'E-mail' : 'E-mail',
      'message' : 'message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'phone' : 'Телефон',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить',
      'E-mail' : 'почта',
      'message' : 'сообщения'
    }
  };


    const menu = document.querySelector('.nav'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_active');
        });
    });


    // translate language
    
   const input = document.querySelectorAll('.form__input');

    const getTranslate = (lang) => {
        const allData = document.querySelectorAll('[data-i18]');
        allData.forEach((i) => {
           i.textContent = i18Obj[lang][i.dataset.i18];
           i.placeholder = i18Obj[lang][i.dataset.i18];
        });
        
    };


const ruBtn = document.querySelector('.ru-btn');
const enBtn = document.querySelector('.en-btn');

ruBtn.addEventListener('click', () => {
    ruBtn.classList.add('btn_active');
    enBtn.classList.remove('btn_active');
        getTranslate('ru');
});

enBtn.addEventListener('click', () => {
    ruBtn.classList.remove('btn_active');
    enBtn.classList.add('btn_active');
        getTranslate('en');
});

// tabs 


const potrfolioBtn = document.querySelectorAll('.btn_portfolio');
const portfolioContent = document.querySelectorAll('.portfolio__content');



potrfolioBtn.forEach((item) => {
    item.addEventListener('click', () => {
       const tabId = item.dataset.season;
       const currentTab = document.querySelector(tabId);

        potrfolioBtn.forEach((item) => {
            item.classList.remove('btn_portfolio_active');
        });

        portfolioContent.forEach((i) => {
            i.classList.remove('portfolio__content_active');
        });

        
        item.classList.add('btn_portfolio_active');
        currentTab.classList.add('portfolio__content_active');
       
        

    });
});


// DarkTheme

const swither = document.querySelector('.switcher');

let theme;

swither.addEventListener('click', () => {
    swither.classList.toggle('switcher_active');
   if(swither.classList.contains('switcher_active')){
        document.documentElement.style.setProperty('--theme-color', '#fff'  );
        document.documentElement.style.setProperty('--main-switch', '#fff'  );
        document.documentElement.style.setProperty('--font-color', '#000'  );
        theme = 'Light';
        localStorage.setItem('pageTheme' , theme);
   
        
   }else {
        document.documentElement.style.setProperty('--theme-color', '#000'  );
        document.documentElement.style.setProperty('--main-switch', '#000'  );
        document.documentElement.style.setProperty('--font-color', '#fff'  );
        theme = 'dark';
        localStorage.setItem('pageTheme' , theme);
      
    
   }   
});

    // check for the theme
    let GETTHEME = localStorage.getItem('pageTheme'); // get theme mode
   
    if (GETTHEME == 'Light') {
        document.documentElement.style.setProperty('--theme-color', '#fff'  );
        document.documentElement.style.setProperty('--main-switch', '#fff'  );
        document.documentElement.style.setProperty('--font-color', '#000'  );
        swither.classList.add('switcher_active');
    }else {
        document.documentElement.style.setProperty('--theme-color', '#000'  );
        document.documentElement.style.setProperty('--main-switch', '#000'  );
        document.documentElement.style.setProperty('--font-color', '#fff'  );
        swither.classList.remove('switcher_active');
    }
    
  
 
 //videoPlayer 

const video = document.querySelector('#video');
const playBtn = document.querySelector('.video__play');



const playIcon = document.querySelector('.play__icon');
const videoProgress = document.querySelector('.progress');
const volumeBtn = document.querySelector('.volume__icon');
const volumeRange = document.querySelector('.volume_button');


const videoPlay = () => {
    if(video.paused){
        video.play();
        playBtn.classList.add('play__btn_inactive');
        playIcon.classList.add('play__icon_pause');
    }else{
       video.pause();
       playBtn.classList.remove('play__btn_inactive');
       playIcon.classList.remove('play__icon_pause');
    }
    
};

volumeRange.addEventListener('change', () => {
    const volumeValue = volumeRange.value;
    const colorValue = volumeValue * 100;
    let color = 'linear-gradient(90deg, rgb(189, 174, 130)' + colorValue + '%, rgb(189, 174, 130)' + colorValue + '%, rgb(200, 200, 200)' + colorValue + '%, rgb(200, 200, 200)' + colorValue + '%';
    volumeRange.style.background = color;
    video.volume = volumeValue;
    if(volumeValue == 0) {
        volumeBtn.classList.add('volume__icon_muted');
    }else {
        volumeBtn.classList.remove('volume__icon_muted');
    }
});

volumeBtn.addEventListener('click',() =>{
   if (video.volume > 0) {
    volumeBtn.classList.add('volume__icon_muted');
    video.volume = 0;
   } else {
    volumeBtn.classList.remove('volume__icon_muted');
    video.volume = video.volume + 0.5;
   }
        
 
});





videoProgress.addEventListener('change', () => {
    const value = videoProgress.value;
    const duration = video.duration;
    let color = 'linear-gradient(90deg, rgb(189, 174, 130)' + value + '%, rgb(189, 174, 130)' + value + '%, rgb(200, 200, 200)' + value + '%, rgb(200, 200, 200)' + value + '%';
    videoProgress.style.background = color;
    video.currentTime = (value * duration) / 100;
  

});



video.addEventListener('timeupdate', () => {
    const currentTime = video.currentTime;
    const duration = video.duration;
    const value = videoProgress.value;
    videoProgress.value = (currentTime / duration) * 100;
    let color = 'linear-gradient(90deg, rgb(189, 174, 130)' + value + '%, rgb(189, 174, 130)' + value + '%, rgb(200, 200, 200)' + value + '%, rgb(200, 200, 200)' + value + '%';
    videoProgress.style.background = color;

});


playIcon.addEventListener('click', videoPlay);
playBtn.addEventListener('click', videoPlay);
video.addEventListener('click', videoPlay);



