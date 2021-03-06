

$(document).ready(function () {

    var fieldsEmpty = true;
$("#fnamn").keyup(function(event) {

    var input = $(this);
    var inputVal = input.val();

    if(inputVal){
        $("#errorFnamn").css("display", "none");
        fieldsEmpty = false;
        
    } else {
        $("#errorFnamn").empty();
        $("#errorFnamn").append('<li>Fältet förnamn får inte vara tomt.</li>');
        $("#errorFnamn").css("display", "block");
        fieldsEmpty = true;
    }

});

$("#enamn").keyup(function(event) {
    
        var input = $(this);
        var inputVal = input.val();
    
        if(inputVal){
            $("#errorEnamn").css("display", "none");
            input.removeClass("invalid").addClass("valid");
            fieldsEmpty = false;
        } else {
            $("#errorEnamn").empty();
            $("#errorEnamn").append('<li>Fältet efternamn får inte vara tomt.</li>');
            $("#errorEnamn").css("display", "block");
            fieldsEmpty = true;
        }
    
    });

    $("#eAdress").keyup(function(event) {
        
            var input = $(this);
            var inputVal = input.val();
            var regx = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            if(inputVal){
                $("#errorEmail").css("display", "none");
                fieldsEmpty = false;

                if(!regx.test(inputVal)) {
                    $("#errorEmail").css("display", "block");
                    $("#errorEmail").empty();
                    $("#errorEmail").append('<li>Fältet Epost är inte i rätt format.</li>');
                }

            } else {
                $("#errorEmail").css("display", "block");
                $("#errorEmail").empty();
                $("#errorEmail").append('<li>Fältet Epost får inte vara tomt.</li>');
                fieldsEmpty = true;
            }
        
        });
        $("#phoneNr").keyup(function(event) {
            
                var input = $(this);
                var inputVal = input.val();
                var regx = new RegExp("^[0-9]*$")
            
                if(inputVal){
                    $("#errorPhone").css("display", "none");
                    fieldsEmpty = false;

                    if(!regx.test(inputVal)) {
                        $("#errorPhone").css("display", "block");
                        $("#errorPhone").empty();
                        $("#errorPhone").append('<li>Fältet Telefonnummer får endast innehålla siffror.</li>');
                    }
                   

                } else {
                    $("#errorPhone").css("display", "block");
                    $("#errorPhone").empty();
                    $("#errorPhone").append('<li>Fältet Telefonnummer får inte vara tomt.</li>');
                    fieldsEmpty = true;
                }              
            
            });

            $("#meddelande").keyup(function(event) {
                
                    var input = $(this);
                    var inputVal = input.val();
                
                    if(inputVal){
                        $("#errorMessage").css("display", "none");
                        fieldsEmpty = false;
        
                    } else {
                        $("#errorMessage").css("display", "block");
                        $("#errorMessage").empty();
                        $("#errorMessage").append('<li>Fältet meddelande får inte vara tomt.</li>');
                        fieldsEmpty = true;
                    }
                
                });            

$("#submit").click(function () {
    if(!fieldsEmpty) {
        $("#errorSubmit").css("display", "none");
        return true;

    } else {
        
        $("#errorSubmit").css("display", "block");
        $("#errorSubmit").empty();
        $("#errorSubmit").append('<li>Alla fälten måste vara ifyllda.</li>');
        return false;
    }
});

    load();
    $(function (scrolls) {

        $("#bringMeUp").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 900);

        });

        $("#aboutUsButton").click(function () {
            $('html, body').animate({
                scrollTop: $('#omOss').offset().top
            }, 900);

        });

        $("#homeButton").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 900);

        });

        $("#projectsButton").click(function () {
            $('html, body').animate({
                scrollTop: $("#projects").offset().top
            }, 900);

        });

        $("#contactButton").click(function () {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top

            }, 900);

        });



    });

    $(window).scroll(function () {

        /* Kollar platsen av alla element .content */
        $('.content').each(function (i) {
            var objectTop = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).innerHeight();

            /* Om objektets topp syns i bild, visa elementet*/
            if (objectTop < bottom_of_window) {
                {
                    $(this).animate({
                        "opacity": "1"
                    }, 800);
                }
            }

        });
    });


    $("#submit").click(function () {

        var fnamn = $("#fnamn").val();
        var enamn = $("#enamn").val();
        var eAdress = $("#eAdress").val();
        var phoneNr = $("#phoneNr").val();

        localStorage.setItem("storeFnamn", fnamn);
        localStorage.setItem("storeEnamn", enamn);
        localStorage.setItem("storeeAdress", eAdress);
        localStorage.setItem("storephoneNr", phoneNr);

    });

    function load() {
        var localFnamn = localStorage.storeFnamn;
        var localEnamn = localStorage.storeEnamn;
        var localeAdress = localStorage.storeeAdress;
        var localphoneNr = localStorage.storephoneNr;

        if (localFnamn != null) {
            $("#fnamn").val(localFnamn);
        }

        if (localEnamn != null) {
            $("#enamn").val(localEnamn);
        }

        if (localEnamn != null) {
            $("#eAdress").val(localeAdress);
        }
        if (localEnamn != null) {
            $("#phoneNr").val(localphoneNr);
        }
    }


    $(document).ready(function () {
        $('#nav-icon1').click(function () {
            { } $(this).toggleClass('open');
            $("#header").toggleClass('open');
            $("#headerList").toggleClass('open');
            
        });
    });


});

var myIndex = 0;
var slideShowBool = true;
var isStopped = false;
slideShow();

function slideShow() {
    if (slideShowBool) {
        var i;
        var x = document.getElementsByClassName("bildspel");

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }

        x[myIndex - 1].style.display = "block";
        setTimeout(slideShow, 2000); // Change image every 2 seconds
    }
}

$(".bildspel").click(function () {
    if (!isStopped) {
        slideShowBool = false;
        isStopped = true;
    }
    else if (isStopped) {
        slideShowBool = true;
        isStopped = false;
        slideShow();
    }

});

function initMap() {
    var uluru = { lat: 59.254276, lng: 15.24923 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}


function date() {
    var today = new Date();
    today.setDate(today.getDate() - 7);
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    if (day < 10) {
        day = "0" + day;
    }

    if (month < 10) {
        month = "0" + month;
    }
    var finalDate = year + "-" + month + "-" + day;

    return finalDate;

}

$.ajax({ url: "https://api.github.com/search/repositories?q=language:javascript+created:>" + date() + "&sort=stars&order=desc" }).done(function (data, status) {
    if (status == 'success') {
        $("#JStrend").append("<strong>" + "JavaScript" + "</strong>" + "<br><br>");
        for (var i = 0; i < 5; i++) {
            var link = data.items[i].html_url;
            var name = data.items[i].name;
            var owner_name = data.items[i].owner.login;
            var amountStars = data.items[i].stargazers_count;
            var owner_link = data.items[i].owner.html_url;
            var owner_avatar = data.items[i].owner.avatar_url;
            var full_name = data.items[i].full_name;

            $.ajax({url: "https://api.github.com/repos/"+full_name+"/contributors"}).done(function (cData, status ){
                if (status == 'success') {

                    $.each(cData, function(j, item){
                        var contrAvatar = item.avatar_url;
                        var contrHtml = item.html_url;
                        var contrName = item.login;
                 
                        $("#gitTrendJS").append("<p id = 'contrNameJS'>" +contrName + "</p><br><a href = '"+contrHtml+"'><img id = 'contrCSSimg' src='"+contrAvatar+"'></a>").css("display", "none");                      
                    })
                }
            })

            $("#JStrend").append("<a href = '" + link + "'>" + "<strong>" + name + "</strong>" + "</a>" + " | Ägare: " + "<a href = '" + owner_link + "'>" + owner_name + "</a>" + " | ★x" + amountStars + "<br>" + "<img class = 'imgAvatar' src='" + owner_avatar + "' alt = 'avatar_bild'>" + "<br>");
            $(".imgAvatar").css("display", "none");

        }

    }
});

$.ajax({ url: "https://api.github.com/search/repositories?q=language%3Acss+created:>" + date() + "&sort=stars&order=desc" }).done(function (data, status) {
    if (status == 'success') {
        $("#CSStrend").append("<strong>" + "CSS" + "</strong>" + "<br><br>");
        
        for (var j = 0; j < 5; j++) {
            var link = data.items[j].html_url;
            var name = data.items[j].name;
            var owner_name = data.items[j].owner.login;
            var amountStars = data.items[j].stargazers_count;
            var owner_link = data.items[j].owner.html_url;
            var owner_avatar = data.items[j].owner.avatar_url;
            var full_name = data.items[j].full_name;
           

            $.ajax({url: "https://api.github.com/repos/"+full_name+"/contributors"}).done(function (cData, status ){
                if (status == 'success') {

                    $.each(cData, function(i, item){

                        var contrAvatar = item.avatar_url;
                        var contrHtml = item.html_url;
                        var contrName = item.login;
                 
                        $("#gitTrendCSS").append("<p id = 'contrNameCSS'>" +contrName +"</p><br><a href = '"+contrHtml+"'><img id = 'contrCSSimg' src='"+contrAvatar+"'></a>").css("display", "none");                      
                    })
                }
            })

            $("#CSStrend").append("<a href = '" + link + "'>" + "<strong>" + name + "</strong>" + "</a>" + " | Ägare: " + "<a href = '" + owner_link + "'>" + owner_name + "</a>" + " | ★x" + amountStars + "<br>" + "<img class = 'imgAvatar' src='" + owner_avatar + "' alt = 'avatar_bild'>" + "<br>");
            $(".imgAvatar").css("display", "none");
            

        }

    }
});
var picVisible = false;
$("#showMoreDevs").click(function () {

    if ($(window).width() < 769) {
        if (!picVisible) {
            $("#gitTrendCSS").css("display","inline");
            $("#gitTrendJS").css("display","inline");
            $('.imgAvatar').css("display", "block");
            picVisible = true;
            $("#showMoreDevs").text("Visa mindre");
            $(".slideshow").animate({
                width: "toggle",
            });

        } else {
            $("#gitTrendCSS").css("display","none");
            $("#gitTrendJS").css("display","none");
            $('.imgAvatar').css("display", "none");
            picVisible = false;
            $("#showMoreDevs").text("Visa mer");
            $(".slideshow").animate({
                width: "toggle",
            });

        }

    } else {
        if (!picVisible) {
            $("#gitTrendCSS").css("display","inline");
            $("#gitTrendJS").css("display","inline");
            $('.imgAvatar').css("display", "block");
            //$('.twoColumns#projekt').css("width", "100%");
            $('.twoColumns#projekt').css("float", "none");
            $("#CSStrend").css({
                'float': 'left',
                'width': '50%',
                'text-align' : 'center'});
            $("#JStrend").css({
                'float': 'left',
                'width': '50%',
                'text-align' : 'center'}); 
            $(".slideshow").animate({
                width: "toggle",
            });
            picVisible = true;
            $("#showMoreDevs").text("Visa mindre");
        }

        else {
            $("#gitTrendCSS").css("display","none");
            $("#gitTrendJS").css("display","none");
            $('.imgAvatar').css("display", "none");
            //$('.twoColumns#projekt').css("width", "50%");
            $('.twoColumns#projekt').css("float", "none");
            $("#CSStrend").css({
                'float': 'none',
                'width': '100%',
                'text-align' : 'center'});
            $("#JStrend").css({
                'float': 'none',
                'width': '100%',
                'text-align' : 'center'}); 
            $(".slideshow").animate({
                width: "toggle",
            });
            picVisible = false;
            $("#showMoreDevs").text("Visa mer");
        }

    }


});





