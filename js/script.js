(() => {

  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#burger-menu').classList.add('burger-menu_is-active');
      document.querySelector('#burger').classList.add('header__burger-btn_is-active');
    })
    document.querySelector('.header__close-burger').addEventListener('click', function() {
      document.querySelector('#burger-menu').classList.remove('burger-menu_is-active');
      document.querySelector('#burger').classList.remove('header__burger-btn_is-active');
    })
  })
  window.addEventListener('DOMContentLoaded', function() {
      let input = document.querySelector('.header_input-search-open');
      let form = document.querySelector('.header__search-form');
      let div = document.querySelector('.header__search-content');
      let buttomCloseMenu = document.querySelector('.header__close-search');
      document.querySelector('.search_tablet').addEventListener('click', function(e) {
        e.preventDefault()
        if (input.value.length === 0) {
          input.classList.toggle('is-active');
          form.classList.toggle('is-active');
          div.classList.toggle('is-active');
          buttomCloseMenu.classList.toggle('is-active');
          input.value = '';
        }
      })
      document.querySelector('.header__close-search').addEventListener('click', function(e) {
        e.preventDefault()
        input.classList.remove('is-active');
        form.classList.remove('is-active');
        div.classList.remove('is-active');
        buttomCloseMenu.classList.remove('is-active');
        input.value = '';
      })
    })
    // раскрывашки
  $(document).ready(function() {
      $('.header__buttom-button').click(function() {
        if ($(this).next('.menu').is(":hidden")) {
          $('.menu').slideUp();
          $('.header__buttom-button').removeClass('is-active')
          $(this).next('.menu').slideDown();
          $(this).addClass('is-active');
        } else {
          $(this).next('.menu').slideUp();
          $(this).removeClass('is-active');
        }
      });
    })
    // nav scroll
  $(document).ready(function() {
    $(document).on("click", "nav a", function(e) {
      e.preventDefault();
      var id = $(this).attr('href');
      var top = $(id).offset().top; // получаем координаты блока
      $('body, html').animate({ scrollTop: top }, 1200); // плавно переходим к блоку
    });
  })
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false,
    placeholderValue: true
  });
  const el = document.querySelector('#select-custom-gallery');
  const choi = new Choices(el, {
    searchEnabled: false,
    placeholderValue: true
  });
  tippy('#project-tooltip-one', {
    content: 'Пример современных тенденций - современная методология разработки',
    maxWidth: 264
  });

  tippy('#project-tooltip-two', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    maxWidth: 263
  });
  tippy('#project-tooltip-three', {
    content: 'В стремлении повысить качество ',
    maxWidth: 263
  });
  ymaps.ready(init);

  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.756826196010216, 37.608079397969256],
      autoFitToViewport: 'always',
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 15
    }, {
      // При сложных перестроениях можно выставить автоматическое
      // обновление карты при изменении размеров контейнера.
      // При простых изменениях размера контейнера рекомендуется обновлять карту программно.
      // autoFitToViewport: 'always'
      searchControlProvider: 'yandex#search'
    });
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.8, 37.8] // координаты точки
      }
    });
    var myPlacemark = new ymaps.Placemark([55.75706413350817, 37.60039978856202], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/point.png',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });
    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
  }
  // TABS
  function tabs(btnTab, btnTabActive, content, contentActive) {
    document.addEventListener('DOMContentLoaded', function() {

      document.querySelectorAll(btnTab).forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
          event.preventDefault();
          const path = event.currentTarget.dataset.path

          document.querySelectorAll(btnTab).forEach(element => { element.classList.remove(btnTabActive) });
          tabsBtn.classList.add(btnTabActive)
          document.querySelectorAll(content).forEach(function(tabContent) {
            tabContent.classList.remove(contentActive)
          })
          document.querySelector(`[data-target="${path}"]`).classList.add(contentActive);
          // доп задание 2.скролл
          let width = $(window).width();
          if (width <= 820) {
            $(tabsBtn).on('click', function() {
              $('html,body').animate({ scrollTop: $(`[data-target="${path}"]`).offset().top + "px" }, 1000);
            })
          }
        })
      })
    });
  }
  tabs('.section-catalog__list-btn', 'section-catalog__list-btn_active', '.section-catalog__content', 'section-catalog__content_active');
  tabs('.accordion-france-link', 'catalog-accordion__item-link_activ', '.france-group', 'section-catalog__left_active');
  tabs('.accordion-germany-link', 'catalog-accordion__item-link_activ', '.germany-group', 'section-catalog__left_active');
  tabs('.accordion-italy-link', 'catalog-accordion__item-link_activ', '.italy-group', 'section-catalog__left_active');
  tabs('.accordion-rus-link', 'catalog-accordion__item-link_activ', '.rus-group', 'section-catalog__left_active');
  tabs('.accordion-belg-link', 'catalog-accordion__item-link_activ', '.belg-group', 'section-catalog__left_active');

  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);
  new JustValidate('.contact__form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: {
        required: 'Как вас зовут?'
      },
      tel: {
        required: 'Укажите ваш телефон'
      },
    },
    submitHandler: function(form, values, ajax) {
      ajax({
        url: '../mail.php',
        method: 'POST',
        data: values,
        async: true,
        callback: function(response) {
          popupForm("Спасибо, письмо отправилось успешно");
          document.querySelectorAll(".contact__input").forEach(item => item.value = "");
        },
        error: function(response) {
          popupForm("Что-то пошло не так");
        }
      });

      function popupForm(response) {
        document.querySelector(".form-popup__message").classList.add("form-popup-active");
        document.querySelector(".form-popup-text").textContent = response;
        document.querySelector(".form-popup-btn").addEventListener('click', function() {
          document.querySelector('.form-popup__message').classList.remove('form-popup-active');
        })
      }
    }
  });
  // event all
  window.addEventListener('DOMContentLoaded', function() {
      document.querySelector('.event-section__button').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.event-card').forEach(element => element.style.display = 'flex');
        document.querySelector(".event-section__button").style.display = 'none'
      })
    })
    // $(document).ready(function() {
    //   $('.section-hero__fone').eq(0).addClass('active').fadeIn(2000);

  //   setInterval(blockAnimate, 4000);
  // });

  // function blockAnimate() {
  //   let length = $('.section-hero__fone').length - 1;
  //   $('.section-hero__fone').each(function(index) {
  //     if ($(this).hasClass('active') && index != length) {
  //       $(this).removeClass('active').fadeOut(2000).next('.section-hero__fone').addClass('active').fadeIn(2000);
  //       return false;
  //     } else if (index == length) {
  //       $(this).removeClass('active').fadeOut(2000);
  //       $('.section-hero__fone').eq(0).addClass('active').fadeIn(2000);
  //       return false;
  //     }
  //   });
  // }
  // window.addEventListener('DOMContentLoaded', function() {
  //   let iconButtom = document.querySelector('.section-edition__delete-result');

  //   function createItemsEditionresult(element) {
  //     function deleleButton() {
  //       element.removeChild(deleteButton);
  //       document.querySelector('.section-edition__left-list').append(element);
  //       element.querySelector('.checkbox').classList.add('checkbox-edition-mobile')
  //       element.querySelector('.checkbox').checked = false;
  //     }
  //     let deleteButton = document.createElement('button');
  //     deleteButton.classList.add('section-edition__delete-result');
  //     element.append(deleteButton);
  //     deleteButton.innerHTML = iconButtom.innerHTML;
  //     deleteButton.addEventListener('click', function(e) {
  //       e.preventDefault();
  //       deleleButton()
  //     })

  //   };
  //   document.querySelectorAll('.checkbox-edition-mobile').forEach(function(tabsBtn) {
  //     tabsBtn.addEventListener('click', function() {
  //       let a = document.querySelectorAll('.checkbox-edition-mobile');
  //       for (let elem of a) {
  //         if (elem.checked) {
  //           let b = tabsBtn.closest('.section-edition__left-item');
  //           elem.classList.remove('checkbox-edition-mobile')
  //           document.querySelector('.section-edition__select-result').append(b);
  //           createItemsEditionresult(b);
  //         }
  //       }
  //     })
  //   })
  // });

  window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-edition__item-mobile').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function() {
        let checkBox = tabsBtn.querySelector('.checkbox-edition-mobile');
        if (checkBox.checked) {
          document.querySelector('.section-edition__select-result').append(tabsBtn);
          tabsBtn.querySelector('.section-edition__delete-result').classList.remove('section-edition__delete-result--none');
        } else {
          document.querySelector('.section-edition__list-mobile').append(tabsBtn);
          tabsBtn.querySelector('.section-edition__delete-result').classList.add('section-edition__delete-result--none');
        }
      })
    })
    document.querySelectorAll('.section-edition__delete-result').forEach(function(btnDelete) {
      btnDelete.addEventListener('click', function(e) {
        e.preventDefault();
        const btn = btnDelete.closest('.section-edition__item-mobile');
        document.querySelector('.section-edition__list-mobile').append(btn);
        btn.querySelector('.checkbox-edition-mobile').checked = false;
      })
    })
  })
  document.addEventListener('DOMContentLoaded', function() {
    const swiperProject = new Swiper('.section-project__swipper-container', {
      centeredSlidesBounds: {
        centeredSlides: true
      },
      spaceBetween: 50,
      loop: false,
      pagination: {
        type: 'fraction',
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.section-project__swipper-next',
        prevEl: '.section-project__swipper-prev',
      },
      scrollbar: {
        hide: true,
      },
    });
  })
  document.addEventListener('DOMContentLoaded', function() {
    const swiperEdition = new Swiper('.section-edition__swiper-container', {
      centeredSlidesBounds: {
        centeredSlides: true
      },
      spaceBetween: 50,
      loop: false,
      slidesPerView: 'auto',
      pagination: {
        type: 'fraction',
        el: '.swiper-pagination',

      },
      navigation: {
        nextEl: '.section-edition__swipper-next',
        prevEl: '.section-edition__swipper-prev',
      },
      scrollbar: {
        hide: true,
      },
    });
  })
  document.addEventListener('DOMContentLoaded', function() {
    const swiperEvent = new Swiper('.section-event__swipper-container', {
      centeredSlidesBounds: {
        centeredSlides: true
      },
      spaceBetween: 50,
      loop: true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true'
      },
      scrollbar: {
        hide: true,
      },
    });
  })
  document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.section-gallery__swaper', {
      centeredSlidesBounds: {
        centeredSlides: true
      },
      spaceBetween: 50,
      loop: false,
      pagination: {
        type: 'fraction',
        el: '.swiper-pagination',

      },
      navigation: {
        nextEl: '.section-gallery__swipper-next',
        prevEl: '.section-gallery__swipper-prev',
      },
      scrollbar: {
        hide: true,
      },
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
      var expanded = false;
      document.querySelector(".selectBox").addEventListener('click', function() {
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
          checkboxes.style.display = "block";
          expanded = true;
        } else {
          checkboxes.style.display = "none";
          expanded = false;
        }
      })
    })
    // accordion
  $(function() {
    $("#accordion, #accordion-germany, #accordion-italy, #accordion-rus, #accordion-belg").accordion({
      icons: {
        "header": false,
        "activeHeader": false
      },
      collapsible: true,
      heightStyle: "content",
      active: 0
    });
  });

  // Доп задание 1. Модальное окно
  document.querySelectorAll('.section-gallery__slide-item').forEach(function(card) {
    card.addEventListener('click', function() {
      let data = this.dataset.target;
      document.querySelector(data).style.display = 'flex';
    })
  });
  document.querySelectorAll('.modal__button-close').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      btn.closest('.modal').style.display = 'none';

    })
  });

  // Доп задание 2. Скролл. Смотреть в табах

  // Доп задание 3.

  // Доп задание 4. Смена фона
  document.addEventListener('DOMContentLoaded', function() {
    const swiperHero = new Swiper('.section-hero__swipper', {
      slidesPerView: 'auto',
      allowTouchMove: false,
      centeredSlidesBounds: {
        centeredSlides: true
      },
      loop: true,
      autoplay: {
        delay: 3000,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: false
      },
    });
  })

})();
