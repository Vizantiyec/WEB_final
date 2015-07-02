/*
 Name: 			Agenzio Main
 Written by: 	Furaly - (http://www.furaly.com)
 Version: 		1.0
 */

$(document).ready(function() {

// scroll effect
    (function($) {
        $.scrollTo = $.fn.scrollTo = function(x, y, options) {
            if (!(this instanceof $))
                return $.fn.scrollTo.apply($('html, body'), arguments);

            options = $.extend({}, {
                gap: {
                    x: 0,
                    y: 0
                },
                animation: {
                    easing: 'swing',
                    duration: 800,
                    complete: $.noop,
                    step: $.noop
                }
            }, options);

            //This way we can scroll to one element
            y = y || x;

            return this.each(function() {
                var elem = $(this);
                elem.stop().animate({
                    scrollLeft: !isNaN(Number(x)) ? x : $(x).offset().left + options.gap.x,
                    scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
                }, options.animation);
            });
        };
    })(jQuery);

    $('nav a, .goto').click(function(e) {
        $('html,body').scrollTo(this.hash, this.hash);
        e.preventDefault();
    });

//start back to top button
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
            //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
            offset_opacity = 1200,
            //duration of the top scrolling animation (in ms)
            scroll_top_duration = 700,
            //grab the "back to top" link
            $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, scroll_top_duration
                );
    });

// setting preloader
    $('body').jpreLoader({
        splashID: "#jSplash"
    });

// header effect
    if ($("header").offset().top) {
        $("header").removeClass("large").addClass("small");
    }

    $(window).scroll(function() {

        if ($(document).scrollTop() > 100) {
            $("header").removeClass("large").addClass("small");
        }
        else {
            $("header").removeClass("small").addClass("large");
        }
    });

//swipe menu effect and mobile button effect
    $('[data-toggle=offcanvas]').click(function() {
        $('.sidebar-offcanvas').toggleClass('active', 1000);
    });

    var $lateral_menu_trigger = $('.x'),
            $content_wrapper = $('body');

    //mobile button effect
    $lateral_menu_trigger.on('click', function(event) {
        event.preventDefault();
        $lateral_menu_trigger.toggleClass('close');
    });

    //close lateral menu clicking outside the menu itself
    $content_wrapper.on('click', function(event) {
        if (!$(event.target).is('.x')) {
            $lateral_menu_trigger.removeClass('close');
            $('.sidebar-offcanvas').removeClass('active');
        }
    });

    //remove button effect on scroll event
    $(window).on('scroll', function() {
        if ($('.x').hasClass('close')) {
            var $delay = setTimeout(function() {
                $lateral_menu_trigger.removeClass('close');
                $('.sidebar-offcanvas').removeClass('active');
            }, 500);
        }
    });

// elements animation effects on window load
    $(window).load(function() {
        jQuery("body").delay(800).fadeIn("slow");

        setTimeout(function() {
            $("#particles h1").addClass("fadeIn");
        }, 500);
        setTimeout(function() {
            $("#particles p").addClass("fadeIn");
        }, 500);
        setTimeout(function() {
            $(".button-container").addClass("hatch");
        }, 1000);
        setTimeout(function() {
            $("#particles i").addClass("bounce");
        }, 1500);
    });

// effects when elements are visible on screen
    $(function() {

        var $bar = $('.bar');
        var allMods = $(".skills");
        var allitems = $(".masonry");

// isotope
        function isotopeanimation() {
            setTimeout(function() {
                var $alpha = $('#alpha');
                var $container = $('.masonry');
                $container.imagesLoaded(function() {
                    $container.isotope({
                        itemSelector: '.item',
                        animationEngine: 'best-available'
                    }).isotope('insert', $alpha.find('.item'));
                });
                $('#options a').click(function() {
                    var selector = $(this).attr('data-filter');
                    $container.isotope({filter: selector});
                    return false;
                });
            }, 400);
        }

// skill circular count
        function radialprogress() {
            setTimeout(function() {
                $('.chart').easyPieChart({
                    size: 85,
                    scaleColor: false,
                    barColor: '#1abc9c',
                    lineWidth: 10,
                    trackColor: '#ccc',
                    lineCap: 'circle',
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }, 200);
            setTimeout(function() {
                $('.chart2').easyPieChart({
                    size: 85,
                    scaleColor: false,
                    lineWidth: 10,
                    barColor: '#e74c3c',
                    trackColor: '#ccc',
                    lineCap: 'circle',
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }, 500);
            setTimeout(function() {
                $('.chart3').easyPieChart({
                    size: 85,
                    scaleColor: false,
                    lineWidth: 10,
                    trackColor: '#ccc',
                    barColor: '#3498db',
                    lineCap: 'circle',
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }, 800);
            setTimeout(function() {
                $('.chart4').easyPieChart({
                    size: 85,
                    scaleColor: false,
                    lineWidth: 10,
                    barColor: '#D2527F',
                    trackColor: '#ccc',
                    lineCap: 'circle',
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }, 1100);
        }

// progress bar animation
        function loadDaBars() {
            $('.bar').each(function() {
                var me = $(this);
                var perc = me.attr("data-percentage");

                var current_perc = 0;

                var progress = setInterval(function() {
                    if (current_perc >= perc) {
                        clearInterval(progress);
                    } else {
                        current_perc += 5;
                        me.css('width', (current_perc) + '%');
                    }

                    me.text((current_perc) + '%');

                }, 60);

            });
        }

        $(document).bind('scroll', function(ev) {
            var scrollOffset = $(document).scrollTop();
            var barOffset = $bar.offset().top - window.innerHeight;
            var radialOffset = allMods.offset().top - window.innerHeight;
            var isotopeOffset = allitems.offset().top - window.innerHeight;
            if (scrollOffset > isotopeOffset) {
                isotopeanimation();
            }
            if (scrollOffset > radialOffset) {
                radialprogress();
            }
            if (scrollOffset > barOffset) {
                loadDaBars();
                $(document).unbind('scroll');
            }
        });

    });

    (function($) {

        /**
         * Copyright 2012, Digital Fusion
         * Licensed under the MIT license.
         * http://teamdf.com/jquery-plugins/license/
         *
         * @author Sam Sehnert
         * @desc A small plugin that checks whether elements are within
         *     the user visible viewport of a web browser.
         *     only accounts for vertical position, not horizontal.
         */

        $.fn.visible = function(partial) {

            var $t = $(this),
                    $w = $(window),
                    viewTop = $w.scrollTop(),
                    viewBottom = viewTop + $w.height(),
                    _top = $t.offset().top,
                    _bottom = _top + $t.height(),
                    compareTop = partial === true ? _bottom : _top,
                    compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

        };

    })(jQuery);

// setting animations
    var win = $(window);
    var fromdown = $(".from-down");
    var fromup = $(".from-up");
    var fromleft = $(".from-left");
    var fromright = $(".from-right");
    var fadein = $(".fade-in");

    win.scroll(function(event) {

        fromdown.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function() {
                    el.addClass("FadeInUp");
                }, 200);
            }
        });

        fromup.each(function(i, il) {
            var il = $(il);
            if (il.visible(true)) {
                setTimeout(function() {
                    il.addClass("FadeInDown");
                }, 200);
            }
        });

        fromleft.each(function(i, il) {
            var il = $(il);
            if (il.visible(true)) {
                setTimeout(function() {
                    il.addClass("FadeInRight");
                }, 200);
            }
        });

        fromright.each(function(i, il) {
            var il = $(il);
            if (il.visible(true)) {
                setTimeout(function() {
                    il.addClass("FadeInLeft");
                }, 200);
            }
        });

        fadein.each(function(i, il) {
            var il = $(il);
            if (il.visible(true)) {
                setTimeout(function() {
                    il.addClass("fadeIn");
                }, 1200);
            }
        });

    });

// timer for each slide, in the testimonials section
    $('.carousel-interval').carousel({
        interval: 3000
    });

    //Events that reset and restart the timer animation when the slides change
    $("#transition-timer-carousel").on("slide.bs.carousel", function(event) {
        //The animate class gets removed so that it jumps straight back to 0%
        $(".transition-timer-carousel-progress-bar", this)
                .removeClass("animate").css("width", "0%");
    }).on("slid.bs.carousel", function(event) {
        //The slide transition finished, so re-add the animate class so that
        //the timer bar takes time to fill up
        $(".transition-timer-carousel-progress-bar", this)
                .addClass("animate").css("width", "100%");
    });

    //Kick off the initial slide animation when the document is ready
    $(".transition-timer-carousel-progress-bar", "#transition-timer-carousel")
            .css("width", "100%");

// ajax portfolio
    $("#project1").click(function() {
        $('#result').load('portfolio/project1.html');
    });
    $("#project2").click(function() {
        $('#result').load('portfolio/project2.html');
    });
    $("#project3").click(function() {
        $('#result').load('portfolio/project3.html');
    });
    $("#project4").click(function() {
        $('#result').load('portfolio/project4.html');
    });
    $("#project5").click(function() {
        $('#result').load('portfolio/project5.html');
    });
    $("#project6").click(function() {
        $('#result').load('portfolio/project6.html');
    });
    $("#project7").click(function() {
        $('#result').load('portfolio/project7.html');
    });
    $("#project8").click(function() {
        $('#result').load('portfolio/project8.html');
    });
    $("#project9").click(function() {
        $('#result').load('portfolio/project9.html');
    });
    $("#project10").click(function() {
        $('#result').load('portfolio/project10.html');
    });
    $("#project11").click(function() {
        $('#result').load('portfolio/project11.html');
    });
    $("#project12").click(function() {
        $('#result').load('portfolio/project12.html');
    });
    $("#project13").click(function() {
        $('#result').load('portfolio/project13.html');
    });
    $("#project14").click(function() {
        $('#result').load('portfolio/project14.html');
    });
    $("#project15").click(function() {
        $('#result').load('portfolio/project15.html');
    });
    $("#project16").click(function() {
        $('#result').load('portfolio/project16.html');
    });
    $("#project17").click(function() {
        $('#result').load('portfolio/project17.html');
    });
    $("#project18").click(function() {
        $('#result').load('portfolio/project18.html');
    });
    $("#project19").click(function() {
        $('#result').load('portfolio/project19.html');
    });
    $("#project20").click(function() {
        $('#result').load('portfolio/project20.html');
    });
    $("#project21").click(function() {
        $('#result').load('portfolio/project21.html');
    });
    $("#project22").click(function() {
        $('#result').load('portfolio/project22.html');
    });
    $("#project23").click(function() {
        $('#result').load('portfolio/project23.html');
    });
    $("#project24").click(function() {
        $('#result').load('portfolio/project24.html');
    });
    $("#project25").click(function() {
        $('#result').load('portfolio/project25.html');
    });
    $("#project26").click(function() {
        $('#result').load('portfolio/project26.html');
    });
    $("#project27").click(function() {
        $('#result').load('portfolio/project27.html');
    });
    $("#project28").click(function() {
        $('#result').load('portfolio/project28.html');
    });

// next and prev ajax portfolio
    // var currentPage = 1;
    // loadCurrentPage();

    $("#next, #prev").click(function() {
        currentPage =
                ($(this).attr('id') === 'next') ? currentPage + 1 : currentPage - 1;

        if (currentPage < 1) {
                currentPage = 28;
                loadCurrentPage();
        } //Check for min
            
        else if (currentPage > 28) {
            currentPage = 1;
            loadCurrentPage();
        }//Check for max
            
        else
            loadCurrentPage();
    });

    function loadCurrentPage() {

        $.ajax({
            url: "includes/load_page.php",
            data: 'page=' + currentPage + '&delay=1',
            type: 'POST',
            dataType: "html",
            success: function(data) {
                $('#result').html(data); //Update Div
            }
        });
    }

// disable overflow when a single project is open
    $('figcaption a').click(function() {
        $("body").toggleClass("overflow-hidden");
    });
    $('.overlay .overlay-close').click(function() {
        $("body").toggleClass("overflow-hidden");
    });

// script for ajax contact form
    $('form').submit(function(e) {
        var thisForm = $(this);
        //Prevent the default form action
        e.preventDefault();
        //Display the "loading" message
        $("#loading").fadeIn(function() {
            //Post the form to the send script
            $.ajax({
                type: 'POST',
                url: thisForm.attr("action"),
                data: thisForm.serialize(),
                //Wait for a successful response
                success: function(data) {
                    //Hide the "loading" message
                    $("#loading").fadeOut(function() {
                        //Display the "success" message
                        $("#success").text(data).fadeIn(function() {
                            //reset fields
                            $("form")[0].reset();
                        });
                        $("#success").delay(3000).fadeOut();
                    });
                }
            });
        });
    });

});

