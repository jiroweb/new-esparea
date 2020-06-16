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


   // $('.countdown').downCount({
    //     date: '03/28/2020 24:00:00',
    //     offset: +4
    // }, function () {
    //     alert('Время уже заполнено!');
    // });

    
    $('.video-play__bg').click(function () {
        var this_prt = $(this).parent()
        var parent_video = $(this_prt)
        var icon_video = $(parent_video).find(".video-play__bg")
        var video = $(parent_video).find(".video")
        $(video).trigger('play')
        $(video).attr("controls", "controls")
        $(icon_video).fadeOut()
    });

});

