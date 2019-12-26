"use strict"
/*
localStorage.JBL_T450BT_On_Ear = "";
localStorage.Beats_by_Dr_Dre_Studio3 = "";
localStorage.Beats_by_Dr_Dre_Studio5 = "";
localStorage.Sony_WH_CH700N_Over_Ear = "";
localStorage.Skullcandy_Jib = "";
localStorage.Skullcandy_Indy = "";
localStorage.Google_Pixel_USB_C_In_Ear_Headphones = "";
localStorage.iWalk_Earphones = "";
localStorage.X_Box_Controller = "";
localStorage.X_Box_Controller_2 = "";
localStorage.Play_Station_Console = "";
localStorage.X_Box_Controller_2 = "";*/
localStorage.electronicName = "";
var commentedPosition = 0;
var total = 0;
var tax = 0;
$(document).ready(function () {

    ////////////////////////VARIABLES////////////////////

    var headphone = $(".headphone");
    var headset = $(".headset");
    var console = $(".console");
    var cards = $(".items");
    var radioInput;
    var filterString = "";
    var price = "";
    var largest = 0;
    var smallest = 0;
    var swapped;
    var i;
    var commented = [];

    var inputComment = "";
    var inputRating = "";
    var commentFlag = 0;



    ////////////////////////////FUNCTIONS/////////////////

    var showHeadphone = function () {
        $(".headphone").css("display", "block");
        $(".headset").css("display", "none");
        $(".console").css("display", "none");

    }
    var showHeadset = function () {
        $(".headphone").css("display", "none");
        $(".headset").css("display", "block");
        $(".console").css("display", "none");

    }
    var showConsole = function () {
        $(".headphone").css("display", "none");
        $(".headset").css("display", "none");
        $(".console").css("display", "block");

    }
    $(function () {
        $("#tabs").tabs();
    });


    ////////////////////////////RANDOMIZE ITEMS//////////////////

    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }

    //////////////////////////////////////////CART////////////////////////////////////////
    




    ////////////////////RADIO INPUT//////////////////////
    $(".electronics").change(function () {
        var selected_value = $(this).val();
        radioInput = $(this).val();
        window.console.log(selected_value);
        if (selected_value == "headphone") {
            showHeadphone();
        } else if (selected_value == "headset") {
            showHeadset();
        } else if (selected_value == "console") {
            showConsole();
        }



    });




    ////////////////////////CHECK BOX///////////////////

    $("#filterButton").click(function () {

        $("#tabs-1").empty();
        $("#tabs-2").empty();
        $("#addComments").empty();

        var filter = [];
        var priceArray = [];
        var confirmedPrice = [];


        $(".rightItemsModified").css("display", "none");
        $(".rightItems").css("display", "grid");

        $.each($("input[name='price']:checked"), function () {
            filter.push($(this).val());
        });

        if (filter.length <= 0) {
            if (radioInput == "headphone") {
                showHeadphone();
            } else if (radioInput == "headset") {
                showHeadset();
            } else if (radioInput == "console") {
                showConsole();
            }
        } else {



            if (radioInput == "headphone") {

                filterString = "#head";

                price = ($(".headphone").find("p").text());
            } else if (radioInput == "headset") {

                filterString = "#ear";

                price = ($(".headset").find("p").text());
            } else if (radioInput == "console") {

                filterString = "#consoleDiv";

                price = ($(".console").find("p").text());
            }

            for (i = 0; i < 4; i++) {


                $(filterString + i).css("display", "none");
            }

            var priceArray = price.split("$", 4);

            do {
                swapped = false;
                for (i = 0; i < priceArray.length - 1; i++) {
                    if (priceArray[i] > priceArray[i + 1]) {
                        var temp = priceArray[i];
                        priceArray[i] = priceArray[i + 1];
                        priceArray[i + 1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);


            largest = parseInt(filter[filter.length - 1]);


            if (filter.length == 1) {
                smallest = largest - 25;
            } else {
                smallest = parseInt(filter[0]) - 25;
            }
            window.console.log(smallest);
            window.console.log(largest);

            for (i = 0; i < priceArray.length; i++) {
                if (parseInt(priceArray[i]) > smallest && parseInt(priceArray[i]) < largest) {
                    confirmedPrice.push(priceArray[i]);
                    window.console.log(priceArray[i]);
                }

            }
            for (i = 0; i < confirmedPrice.length; i++) {


                window.console.log(confirmedPrice[i]);
            }

            for (i = 0; i < confirmedPrice.length; i++) {


                for (var j = 0; j < priceArray.length; j++) {

                    if (parseInt(confirmedPrice[i]) == parseInt($(filterString + j).find("span").text())) {
                        $(filterString + j).css("display", "block");
                        window.console.log("YES");
                        j = priceArray.length;

                    }

                }

                window.console.log(i);
                window.console.log($(filterString + i).find("span").text());
            }

        }
    });









    /////////////////////////SEE DETAILS OF ELECTRONICS//////////////////////////


    $(".items").click(function () {
        $(".rightItems").css("display", "none");
        $(".rightItemsModified").css("display", "block");

        var itemId = $(this).find("h3").text();









        window.console.log(itemId);
        $.getJSON("information.JSON", function (data) {

            $.each(data, function () {

                window.console.log(itemId);

                $.each(this, function (key, value) {

                    window.console.log(itemId);
                    window.console.log(value.name);
                    window.console.log(value.image);


                    if (value.name == itemId) {
                        window.console.log("IN");

                        localStorage.electronicName = value.name;



                        ////comments///
                        /* if(localStorage.electronicName == "JBL_T450BT_On_Ear") {
                            var nameWithComment = localStorage.JBL_T450BT_On_Ear.split("#");
                            
                        }
                        
                        
                        else if(localStorage.electronicName=="Beats_by_Dr_Dre_Studio3") {
                        }
                        else if(localStorage.electronicName=="Beats_by_Dr_Dre_Studio5") {
                        }
                        else if(localStorage.electronicName=="Sony_WH_CH700N_Over_Ear") {
                        }
                        else if(localStorage.electronicName=="Skullcandy_Jib") {
                        }
                        else if(localStorage.electronicName=="Skullcandy_Indy") {
                        }
                        else if(localStorage.electronicName=="Google_Pixel_Headphones") {
                        }
                        else if(localStorage.electronicName=="iWalk_Earphones") {
                        }
                        else if(localStorage.electronicName=="X_Box_Controller") {
                        }
                        else if(localStorage.electronicName=="X_Box_Controller_2.0.2") {
                        }
                        else if(localStorage.electronicName=="Play_Station_Console") {
                        }
                        else if(localStorage.electronicName=="X_Box_Controller_2") {
                        }
        
        */


                        $("#priceOfCart").text(value.price);
                        $("#hiddenName").text(value.nameComment);


                        $("#descriptionImage").attr("src", value.image);


                        $("#tabs-1").append("<h1>Name: " + value.nameComment + "</h1><br>" + "<p>Description: " + value.description + "</p><br><br>");


                        $("#tabs-2").append(
                            "<table>" +
                            "<tr><td>Model Name</td><td>" + value.model_number + "</tr></td>" +
                            "<tr><td>Color</td><td>" + value.color + "</tr></td>" +
                            "<tr><td>Wireless Standby Time</td><td>" + value.wireless_standby_time + "</tr></td>" +
                            "<tr><td>Charge Time</td><td>" + value.charge_time + "</tr></td>" +
                            "<tr><td>Bluetooth</td><td>" + value.bluetooth + "</tr></td>" + "</table>"

                        );
                        $("#tabs-3").append(


                        );
                    } else {
                        window.console.log("ELSE");
                    }


                });
            });
        });




        //////////////////ONE COMMENT//////////////////////


    });





    ////////////////////////////////////ADDING TO CART//////////////////
    $("#addToCart").click(function () {
        window.console.log($("#hiddenName").text());
        window.console.log($("#priceOfCart").text());
        total += parseInt($("#priceOfCart").text());
        $("#cartImage").attr("src","images/cartadd.png");
        $("#fullCart").append(


            "<p class=" + "cartitems" + ">" + $("#hiddenName").text() + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" +
            +$("#priceOfCart").text() + "$</p><br>"


        );
        tax = Math.floor(total * 0.10);
        window.console.log(tax);
        total = total + tax;
        $("#totalPrice").text("YOUR TOTAL IS  : " + Math.ceil(total) + " $");


    });
    
    $("#showWholeCart").click(function(){
        $("#id03").css("display","block");
    })







    /////////////////////STAR RATING/////////////

    var starValue = "";
    var rating;

    $(".checked").click(function () {
        starValue = "";
        starValue = $(this).attr("class");
        rating = starValue.charAt(starValue.length - 1);
        window.console.log(rating);
        for (i = 0; i <= rating; i++) {
            $(".star" + i).css("color", "orange");
        }

    });

    $("#check").click(function () {
        window.console.log(localStorage.JBL_T450BT_On_Ear);
        window.console.log(localStorage.Beats_by_Dr_Dre_Studio3);
    });
    $("#check2").click(function () {
        localStorage.removeItem("JBL_T450BT_On_Ear");
        localStorage.removeItem("Beats_by_Dr_Dre_Studio3");
        localStorage.removeItem("Beats_by_Dr_Dre_Studio5");
        localStorage.removeItem("Sony_WH_CH700N_Over_Ear");
        localStorage.removeItem("Skullcandy_Jib");
        localStorage.removeItem("Skullcandy_Indy");
        localStorage.removeItem("iWalk_Earphones");
        localStorage.removeItem("X_Box_Controller");
        localStorage.removeItem("X_Box_Controller_2_0_2");
        localStorage.removeItem("Play_Station_Console");
        localStorage.removeItem("X_Box_Controller_2");
        localStorage.removeItem("Google_Pixel_Headphones");
        window.console.log(localStorage.JBL_T450BT_On_Ear);
        window.console.log(localStorage.Beats_by_Dr_Dre_Studio3);
        window.console.log(localStorage.Beats_by_Dr_Dre_Studio5);
        window.console.log(localStorage.Sony_WH_CH700N_Over_Ear);
        window.console.log(localStorage.Skullcandy_Jib);
        window.console.log(localStorage.Skullcandy_Indy);
        window.console.log(localStorage.iWalk_Earphones);
        window.console.log(localStorage.X_Box_Controller);
        window.console.log(localStorage.X_Box_Controller_2_0_2);
        window.console.log(localStorage.Play_Station_Console);
        window.console.log(localStorage.X_Box_Controller_2);
        window.console.log(localStorage.Google_Pixel_Headphones);
    });
    $("#submitComment").click(function () {

        inputComment = $("#inputComment").val();
        inputRating = $("#inputRating").val();/*
        $("#commentForum").css("display", "none");*/
        $(".hereIsComments").css("display", "block");

    });


    $(".hereIsComments").click(function () {
        hereIsComment();
    })


    //////////////////////////////////PLACED COMMENTS///////////////////////////////
    var hereIsComment = function () {



        window.console.log("IT IS INSIDE");
        /*
                $("#addComments").empty();*/
        /*        

                if(localStorage.names!=0){
                var allStoredNames =localStorage.names.split("$");
                allStoredNames.pop();
                }*/


        window.console.log(inputComment);
        window.console.log(localStorage.commentName);
        //$("#commentForum").css("display","none");






        var nameComment = localStorage.commentName + "$" + inputComment;
        localStorage.nameAndComment = nameComment + "#";
        /*
        sessionStorage.removeItem("commentName");*/
        window.console.log(localStorage.names);
        window.console.log(localStorage.emails);
        window.console.log(localStorage.electronicName);





        var fullArray = [];
        var actualArray = [];
        var arrayName = "";
        var arrayComment = "";
        var arrayRating = "";

        if (localStorage.electronicName == "JBL_T450BT_On_Ear") {

            $("#addComments").empty();
            window.console.log(localStorage.electronicName);

            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.JBL_T450BT_On_Ear == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.JBL_T450BT_On_Ear = "";
                }
                localStorage.JBL_T450BT_On_Ear += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.JBL_T450BT_On_Ear);
            
            
            
            if(typeof localStorage.JBL_T450BT_On_Ear != "undefined"){
            fullArray = localStorage.JBL_T450BT_On_Ear.split("#");

            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
              $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }

}
            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);

        } else if (localStorage.electronicName == "Beats_by_Dr_Dre_Studio3") {
            $("#addComments").empty();
            window.console.log(localStorage.electronicName);
            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.Beats_by_Dr_Dre_Studio3 == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.Beats_by_Dr_Dre_Studio3 = "";
                }
                localStorage.Beats_by_Dr_Dre_Studio3 += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.Beats_by_Dr_Dre_Studio3);
            
            if(typeof localStorage.Beats_by_Dr_Dre_Studio3 != "undefined"){
            fullArray = localStorage.Beats_by_Dr_Dre_Studio3.split("#");
            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
               $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }
            }

            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);
        } else if (localStorage.electronicName == "Beats_by_Dr_Dre_Studio5") {
            $("#addComments").empty();
            window.console.log(localStorage.electronicName);
            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.Beats_by_Dr_Dre_Studio5 == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.Beats_by_Dr_Dre_Studio5 = "";
                }
                localStorage.Beats_by_Dr_Dre_Studio5 += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.Beats_by_Dr_Dre_Studio5);
            if(typeof localStorage.Beats_by_Dr_Dre_Studio5 != "undefined"){
            fullArray = localStorage.Beats_by_Dr_Dre_Studio5.split("#");
            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
                $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }

            }
            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);
        } else if (localStorage.electronicName == "Sony_WH_CH700N_Over_Ear") {
            $("#addComments").empty();
            window.console.log(localStorage.electronicName);
            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.Sony_WH_CH700N_Over_Ear == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.Sony_WH_CH700N_Over_Ear = "";
                }
                localStorage.Sony_WH_CH700N_Over_Ear += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.Sony_WH_CH700N_Over_Ear);
            if(typeof localStorage.Sony_WH_CH700N_Over_Ear != "undefined"){
            fullArray = localStorage.Sony_WH_CH700N_Over_Ear.split("#");
            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
                $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }

            }
            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);
        } else if (localStorage.electronicName == "Skullcandy_Jib") {
            $("#addComments").empty();
            window.console.log(localStorage.electronicName);
            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.Skullcandy_Jib == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.Skullcandy_Jib = "";
                }
                localStorage.Skullcandy_Jib += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.Skullcandy_Jib);
            if(typeof localStorage.Skullcandy_Jib != "undefined"){
            fullArray = localStorage.Skullcandy_Jib.split("#");
            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
               $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }
            }

            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);
        } else if (localStorage.electronicName == "Skullcandy_Indy") {
            $("#addComments").empty();
            window.console.log(localStorage.electronicName);
            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.Skullcandy_Indy == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.Skullcandy_Indy = "";
                }
                localStorage.Skullcandy_Indy += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.Skullcandy_Indy);
            if(typeof localStorage.Skullcandy_Indy != "undefined"){
            fullArray = localStorage.Skullcandy_Indy.split("#");
            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
                 $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }

            }
            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);
        } else if (localStorage.electronicName == "Google_Pixel_Headphones") {
            $("#addComments").empty();
            window.console.log(localStorage.electronicName);
            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.Google_Pixel_Headphones == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.Google_Pixel_Headphones = "";
                }
                localStorage.Google_Pixel_Headphones += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.Google_Pixel_Headphones);
            if(typeof localStorage.Google_Pixel_Headphones != "undefined"){
            fullArray = localStorage.Google_Pixel_Headphones.split("#");
            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
                 $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }

            }
            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);
        } else if (localStorage.electronicName == "iWalk_Earphones") {
            $("#addComments").empty();
            window.console.log(localStorage.electronicName);
            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.iWalk_Earphones == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.iWalk_Earphones = "";
                }
                localStorage.iWalk_Earphones += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.iWalk_Earphones);
            if(typeof localStorage.iWalk_Earphones != "undefined"){
            fullArray = localStorage.iWalk_Earphones.split("#");
            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
                $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }

            }
            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);
        } else if (localStorage.electronicName == "X_Box_Controller") {
            $("#addComments").empty();
            window.console.log(localStorage.electronicName);
            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.X_Box_Controller == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.X_Box_Controller = "";
                }
                localStorage.X_Box_Controller += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.X_Box_Controller);
            if(typeof localStorage.X_Box_Controller != "undefined"){
            fullArray = localStorage.X_Box_Controller.split("#");
            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
                $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }

            }
            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);
        } else if (localStorage.electronicName == "X_Box_Controller_2_0_2") {
            $("#addComments").empty();
            window.console.log(localStorage.electronicName);
            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.X_Box_Controller_2_0_2 == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.X_Box_Controller_2_0_2 = "";
                }
                localStorage.X_Box_Controller_2_0_2 += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.X_Box_Controller_2_0_2);
            if(typeof localStorage.X_Box_Controller_2_0_2 != "undefined"){
            fullArray = localStorage.X_Box_Controller_2_0_2.split("#");
            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
                $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }

            }
            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);
        } else if (localStorage.electronicName == "Play_Station_Console") {
            $("#addComments").empty();
            window.console.log(localStorage.electronicName);
            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.Play_Station_Console == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.Play_Station_Console = "";
                }
                localStorage.Play_Station_Console += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.Play_Station_Console);
            if(typeof localStorage.Play_Station_Console != "undefined"){
            fullArray = localStorage.Play_Station_Console.split("#");
            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
                 $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }
            }

            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);
        } else if (localStorage.electronicName == "X_Box_Controller_2") {
            $("#addComments").empty();
            window.console.log(localStorage.electronicName);
            if (inputComment != "" && inputRating != "") {
                if(typeof localStorage.X_Box_Controller_2 == "undefined") {
                    window.console.log("UNDEFINED");
                    localStorage.X_Box_Controller_2 = "";
                }
                localStorage.X_Box_Controller_2 += localStorage.commentName + "$" + inputComment + "$" + inputRating + "#";
            }
            window.console.log(localStorage.X_Box_Controller_2);
            if(typeof localStorage.X_Box_Controller_2 != "undefined"){
            fullArray = localStorage.X_Box_Controller_2.split("#");
            fullArray.pop();


            for (var i = 0; i < fullArray.length; i++) {

                actualArray = fullArray[i].split("$");
                window.console.log(actualArray[i]);
                arrayName = actualArray.pop();
                arrayComment = actualArray.pop();
                arrayRating = actualArray.pop();
                 $("#addComments").append("<h1>" + arrayName +"&#11088;"+ "</h1>" + "<h1>Name: " + arrayRating + "</h1>" + "<p>Comment: " + arrayComment+ "</p><br>");

            }
            }

            window.console.log(arrayRating);
            window.console.log(arrayName);
            window.console.log(arrayComment);
        }


        inputComment = "";
        inputRating = "";




    }


$("#checkOut").click(function(){
    location.href = "products.html";
})






    //////////////////////////////////////////////////////////////////////////////////SIGN IN PAGE////////////////////////////////////////////////////////////////////////////

    $("#signupbtn").click(function (event) {
        var flag = 0;
        window.console.log(flag);


        /////////////////////////////////////////VARIABLES////////////////////////////////
        var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        var password_regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;

        var signName = $("#signName");
        var name = signName.val();



        var signEmail = $("#signEmail");
        var email = signEmail.val();




        var signPass = $("#signPass");
        var pass = signPass.val();

        var repeatPassword = $("#repeatPass");
        var repeatPass = repeatPassword.val();
        if (name == "") {

            $("#nameMatch").css("display", "inline");

            signName.focus();
        } else {
            $("#nameMatch").css("display", "none");
            flag++;
        }
        


        window.console.log(flag);
        if (!email_regex.test(email) || email == "") {
            $("#emailMatch").css("display", "inline");
            signEmail.focus();
        } else {
            $("#emailMatch").css("display", "none");
            flag++;
        }

        window.console.log(flag);
        if (pass === "" || !password_regex.test(pass)) {
            $("#passwordShow").css("display", "inline");
            signPass.focus();
        } else {
            $("#passwordShow").css("display", "none");
            flag++;
        }

        window.console.log(flag);
        if (pass != repeatPass) {
            $("#passwordMatch").css("display", "inline");
            repeatPassword.focus();
        } else {
            $("#passwordMatch").css("display", "none");
            flag++;
        }

        window.console.log(flag);




        //////////////////////////////////////////VALIDATION////////////////////////////////////////////////////
        if (flag >= 4) {



        
        var allStoredEmail = (typeof localStorage.emails != "undefined") ? localStorage.emails.split("$") : "";
        
        
        for (i = 0; i < allStoredEmail.length; i++) {
            window.console.log("IN");

            if (email != allStoredEmail[i]) {
                flag++;

            } else {
                window.alert("MAIL ALREADY EXISTS");
                break;
            }
        }




            //////////////////////////////////////////NAME/////////////////////////////////////


            var names = localStorage.names || ""; // default value of ""
            localStorage.names = names.concat(name, "$");
            /*
            signName.val( "" );
            $("#name_list").val( localStorage.names );*/



            //////////////////////////////////////////EMAIL/////////////////////////////////////

            var emails = localStorage.emails || ""; // default value of ""
            localStorage.emails = emails.concat(email, "$");
            /*
            signName.val( "" );
            $("#name_list").val( localStorage.names );*/

            signName.focus();



            //////////////////////////////////////////PASSWORD/////////////////////////////////////

            var passes = localStorage.passes || ""; // default value of ""
            localStorage.passes = passes.concat(pass, "$");
            /*
            signName.val( "" );
            $("#name_list").val( localStorage.names );*/







            $("#id01").css("display", "none");
            
                $(".content").css("z-index","2");
        }





    });

    ///////////////////////////////////////////
    $(".checkSession").click(function (event) {

        window.console.log(localStorage.emails);
        window.console.log(localStorage.passes);
        window.console.log(localStorage.names);
    });

    /////////////////////////////////////////////LOG IN PAGE///////////////////////////////////////////////

    $("#login").click(function (event) {




        var flag = 0;
        var position;

        window.console.log(localStorage.emails);
        window.console.log(localStorage.passes);
        window.console.log(localStorage.names);
        var email = $("#signEmail1").val();
        var pass = $("#signPass1").val();

        window.console.log(email);
        window.console.log(pass);


        var allStoredEmail = (typeof localStorage.emails != "undefined") ? localStorage.emails.split("$") : "";
        var allStoredPass = (typeof localStorage.passes != "undefined") ? localStorage.passes.split("$") : "";
        var allStoredName = (typeof localStorage.names != "undefined") ? localStorage.names.split("$") : "";

        /*    
            
            var allStoredEmail =localStorage.emails.split("$");
            var allStoredPass =localStorage.passes.split("$");
            var allStoredName =localStorage.names.split("$");*/



        for (i = 0; i < allStoredEmail.length; i++) {
            window.console.log(allStoredEmail[i]);
            window.console.log(allStoredPass[i]);
        }
        window.console.log("OUT OF LOOP");



        for (i = 0; i < allStoredEmail.length; i++) {

            if (email == allStoredEmail[i] && email!="") {

                $("#emailMatch1").css("display", "none");
                window.console.log("HEYO");
                flag++;
                position = i;

                window.console.log(flag);

            } else {
                window.console.log("ELSE");
                $("#emailMatch1").css("display", "inline");
            }
        }



        if (pass == allStoredPass[position] && pass!="") {
            flag++;
            $("#passwordShow1").css("display", "none");
            window.console.log("HEYO");
            window.console.log(flag);
        } else {
            $("#passwordShow1").css("display", "inline");
            window.console.log("ELSE2");
        }

        if (flag >= 2) {
            window.location.href = "products.html";
            localStorage.loggedIn = "true";
            localStorage.commentName = allStoredName[position];
        } else {
            /*
                        event.preventDefault();*/
        }
        window.console.log(localStorage.emails);
        window.console.log(localStorage.passes);
        window.console.log(localStorage.names);



    })
    
    
    
    //////////////////////////////////////////////////////LOG OUT//////////////////////////////////////////////
    $("#logOut").one("click",function(evt){
        if(total>0) {
            alert("LOGGING OUT WILL EMPTY YOUR CART! IF YOU WISH TO PROCEED CLICK ON THE LINK AGAIN");
            evt.preventDefault();
        }
        
    });



$(".btn2").on("click",function(){
    $(".content").css("z-index","0");
});

$(".btn").on("click",function(){
    $(".content").css("z-index","0");
});
$(".cancelbtn").on("click",function(){
    $(".content").css("z-index","2");
});
$(".close").on("click",function(){
    $(".content").css("z-index","2");
});





    $(".removeSession").click(function () {
        localStorage.removeItem("names");
        localStorage.removeItem("emails");
        localStorage.removeItem("passes");
    })


});
