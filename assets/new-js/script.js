$(document).ready(function () {



    $('.dropdown-click__open').on('click', function () {
        let parent = $(this).parent()
        let child = $(parent).find('.dropdown-modal')
        $(child).fadeToggle()
        $(parent).toggleClass('dropdown-modal__open')
    })

    $('.select-item').on('click', function () {
        let this_parent = $(this).parent()
        let parent_this = $(this_parent).parent()
        let parent = $(parent_this).parent()
        let child_select_input = $(parent).find('.select-zone__input')
        let select_text = $(this).text()
        $(child_select_input).val(select_text);
    })

    // function for window click
    $(window).on('click', function (e) {
        if (!$(e.target).closest('.window-click').length) {
            $('.dropdown-modal').hide();
            $('.dropdown').removeClass('dropdown-modal__open');
        }
    });



    // function for left sidebar
    $('.left-sidebar__close').on('click', function () {
        $('.h-wrapper').toggleClass('mini-sidebar');
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 70) {
            $('.h-sidebar-menu').addClass('h-sidebar-menu__scroll');
        } else {
            $('.h-sidebar-menu').removeClass('h-sidebar-menu__scroll');
        }
    });


    // function for change active in dask
    $('.links ul li').on('click', function () {
        let this_parent = $(this).parent()
        let this_inks = $(this_parent).parent()
        let this_links_first = $(this_parent).children()
        let parent = $(this_inks).parent()
        let blocks_children = $(parent).find('.blocks').children()
        let data_link = $(this).data('link')
        $(this_links_first).removeClass('active')
        $(this).addClass('active')

        $(blocks_children).each(function () {
            $(this).hide()
            if ($(this).data('box') === data_link) {
                $(this).fadeIn()
            }
        })
    })


    // function for play video
    $('.video-play__bg').click(function () {
        var this_prt = $(this).parent()
        var parent_video = $(this_prt)
        var icon_video = $(parent_video).find(".video-play__bg")
        var video = $(parent_video).find(".h-video")
        $(video).trigger('play')
        $(video).attr("controls", "controls")
        $(icon_video).fadeOut()
    });




    //** ======================== */

    $(function () {
        $('.datep_arrival').datepicker($.datepicker.regional["ru"]);
        $(".datep_arrival").datepicker().datepicker("setDate", new Date());
    });

    $(function (factory) {
        if (typeof define === "function" && define.amd) {

            define(["../widgets/datepicker"], factory);
        } else {

            factory(jQuery.datepicker);
        }
    }(function (datepicker) {


        datepicker.regional.ru = {
            closeText: "Закрыть",
            prevText: "",
            nextText: "",
            currentText: "Сегодня",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
            ],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
            ],
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        datepicker.setDefaults(datepicker.regional.ru);

        return datepicker.regional.ru;

    }));



    /*month/day/years*/

    (function ($) {

        $.fn.downCount = function (options, callback) {
            var settings = $.extend({
                date: null,
                offset: null
            }, options);

            if (!settings.date) {
                $.error('Date is not defined.');
            }

            if (!Date.parse(settings.date)) {
                $.error('Incorrect date format, it should look like this, 24/12/2012 12:00:00.');
            }

            var container = this;

            /**
             * @return {Object} Fixed Date object.
             */
            var currentDate = function () {
                var date = new Date();

                // turn date to utc
                var utc = date.getTime() + (date.getTimezoneOffset() * 60000);

                var new_date = new Date(utc + (3600000 * settings.offset))

                return new_date;
            };
          
            function countdown() {
                var target_date = new Date(settings.date), // set target date
                    current_date = currentDate(); // get fixed current date

                var difference = target_date - current_date;

                if (difference < 0) {
                    clearInterval(interval);

                    if (callback && typeof callback === 'function') callback();

                    return;
                }

                var _second = 1000,
                    _minute = _second * 60,
                    _hour = _minute * 60,
                    _day = _hour * 24;

                var days = Math.floor(difference / _day),
                    hours = Math.floor((difference % _day) / _hour),
                    minutes = Math.floor((difference % _hour) / _minute),
                    seconds = Math.floor((difference % _minute) / _second);

                container.find('.days').text(days);
                container.find('.hours').text(hours);
                container.find('.minutes').text(minutes);
                container.find('.seconds').text(seconds);
            };

            var interval = setInterval(countdown, 1000);
        };

    })(jQuery);


    // $('.countdown').downCount({
    //     date: '03/28/2020 24:00:00',
    //     offset: +4
    // }, function () {
    //     alert('Время уже заполнено!');
    // });

});