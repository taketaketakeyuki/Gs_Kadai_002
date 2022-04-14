var zangieflife = 100;
var guilelife = 100; 

$(".start-button").on("click", function () {
    $("#vs").get(0).play();
    $('.start-button').hide();
    setTimeout(function(){
        $("#stage").get(0).play();
   },4000);
   setTimeout(function(){
    $("#battlestart").get(0).play();
    },7000);
});

$(".start-button").on("click", function(e){
    setTimeout(function(){
    e.preventDefault();
    var count = 90;
    var id = setInterval(function(){
      count--;
      document.querySelector('#timer').textContent=count;
      if(count <= 0) clearInterval(id);
    },1000);
    $('.pa-button').show();
    $('.choki-button').show();
    $('.gu-button').show();
    },7000);
return false;
});



$(".pa-button").on("click", function () {
    $("#no-damage").get(0).play();
    $("#fight").show();
    $('#zan').show();
    $('#gui').show();
    $('#all').hide();
    $('.pa-button').hide();
    $('.choki-button').hide();
    $('.gu-button').hide();
    $('.dounaru-button').show();    
    $('.dounaru-button').text("どうなる");
    const zangief = Math.floor( Math.random() * 3);
    const damage = Math.floor( Math.random() * 30);
    console.log(zangief,"ランダム数字");
    
    if(zangief === 0){
    $("h2").text(">ガイルのサマソ！ザンギは掴み技を出した！");
    $('#zan').children('img').attr('src', 'img/zan-pa.png' + '?' + new Date().getTime());
    $('#zan').children('img').attr('width', '200px');
    $('#gui').children('img').attr('src', 'img/guile-pa.gif' + '?' + new Date().getTime());
    $('#gui').children('img').attr('width', '300px');

    console.log(zangieflife);
    console.log(guilelife);
    $(".dounaru-button").on("click", function () {
        if(zangieflife <= 0){
            $("#win").get(0).play();
            setTimeout(function(){
                $("#end").get(0).play();
                },3000);
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ガイルのかち！");
            $('#all').html('<img src="img/guile-win.png" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else if(guilelife <= 0){
            $("#uwa").get(0).play();
            setTimeout(function(){
                $("#end").get(0).play();
                },3000);
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ガイルのまけ！");
            $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else {
            $('#zan').show();
            $('#gui').show();
            $('#all').hide();
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('.pa-button').show();
            $('.choki-button').show();
            $('.gu-button').show();
            $('.dounaru-button').hide();
            $('#zan').children('img').attr('src', 'img/zan-nomal.gif' + '?' + new Date().getTime());
            $('#zan').children('img').attr('width', '150px');
            $('#gui').html('<img src="img/guile-nomal.gif" width="120px" alt="guile">');
            $("h2").text(">それぞれの攻撃が外れた！");
        }
    });

    } else if (zangief === 1){
        $("h2").text(">ガイルのサマソ！ザンギは飛び上がる、フライングプレス！");
        $('#zan').children('img').attr('src', 'img/zan-gu.gif' + '?' + new Date().getTime());
        $('#zan').children('img').attr('width', '250px');
        $('#gui').children('img').attr('src', 'img/guile-pa.gif' + '?' + new Date().getTime());
        $('#gui').children('img').attr('width', '300px');
        zangieflife = zangieflife - damage;
        console.log(zangieflife);
        console.log(guilelife);
        $(".dounaru-button").on("click", function () {
            if(zangieflife <= 0){
                $("#win").get(0).play();
                setTimeout(function(){
                    $("#end").get(0).play();
                    },3000);
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">サマーソルトキックで撃ち落とした！ガイルのかち！");
                $('#all').html('<img src="img/guile-win.png" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else if(guilelife <= 0){
                $("#uwa").get(0).play();
                setTimeout(function(){
                    $("#end").get(0).play();
                    },3000);
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのまけ！");
                $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else {
                $("#damage").get(0).play();
                $('#fight').show();
                $('#zan').show();
                $('#gui').show();
                $('#all').hide();
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('.pa-button').show();
                $('.choki-button').show();
                $('.gu-button').show();
                $('.dounaru-button').hide();
                $('#zan').html('<img src="img/zan-damage.gif" width="200px" style="transform: scale(-1, 1); alt="zangief">');
                $('#gui').html('<img src="img/guile-win.gif" width="150px"  alt="guile">');
                $("h2").text(">ガイル、サマソで撃ち落とす！");
            }
        });

    } else if (zangief === 2){
        $("h2").text(">ガイルのサマソ！ザンギ、バニシングフラットをくりだす！！");
        $('#zan').children('img').attr('src', 'img/zan-choki.gif' + '?' + new Date().getTime());
        $('#zan').children('img').attr('width', '250px');
        $('#gui').children('img').attr('src', 'img/guile-pa.gif' + '?' + new Date().getTime());
        $('#gui').children('img').attr('width', '300px');
        guilelife = guilelife - damage;
        console.log(zangieflife);
        console.log(guilelife);
        $(".dounaru-button").on("click", function () {
            if(zangieflife <= 0){
                $("#win").get(0).play();
                setTimeout(function(){
                    $("#end").get(0).play();
                    },3000);
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $("#fight").hide();
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのかち！");
                $('#all').html('<img src="img/guile-win.png" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else if(guilelife <= 0){
                $("#uwa").get(0).play();
                setTimeout(function(){
                    $("#end").get(0).play();
                    },3000);
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $("#fight").hide();
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">着地したガイルに攻撃が降り注ぐ！ガイルのまけ！");
                $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else {
                $("#damage").get(0).play();
                $('#fight').show();
                $('#zan').show();
                $('#gui').show();
                $('#all').hide();
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('.pa-button').show();
                $('.choki-button').show();
                $('.gu-button').show();
                $('.dounaru-button').hide();
                $('#zan').children('img').attr('src', 'img/zan-win.gif' + '?' + new Date().getTime());
                $('#zan').children('img').attr('width', '150px');
                $('#gui').children('img').attr('src', 'img/guile-damage.gif' + '?' + new Date().getTime());
                $('#gui').children('img').attr('width', '200px');
                $("h2").text(">ガイル、サマソの着地を狩られてダメージ！");
            }
        });

    }
});

$(".choki-button").on("click", function () {
    $("#sonibu").get(0).play();
    $("#fight").show();
    $('#zan').show();
    $('#gui').show();
    $('#all').hide();
    $('.pa-button').hide();
    $('.choki-button').hide();
    $('.gu-button').hide();
    $('.dounaru-button').show();    
    $('.dounaru-button').text("どうなる");
    const zangief = Math.floor( Math.random() * 3);
    const damage = Math.floor( Math.random() * 30);
    console.log(zangief,"ランダム数字");

    if(zangief === 0){
    $("h2").text(">ガイル、ソニックブーム！ザンギは掴み技を出した！");
    $('#zan').children('img').attr('src', 'img/zan-pa.png' + '?' + new Date().getTime());
    $('#zan').children('img').attr('width', '200px');
    $('#gui').children('img').attr('src', 'img/guile-choki.gif' + '?' + new Date().getTime());
    $('#gui').children('img').attr('width', '300px');
    zangieflife = zangieflife - damage;
    console.log(zangieflife);
    console.log(guilelife);
    $(".dounaru-button").on("click", function () {
        if(zangieflife <= 0){
            $("#win").get(0).play();
            setTimeout(function(){
                $("#end").get(0).play();
                },3000);
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $("#fight").hide();
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ソニックブーム直撃！ガイルのかち！");
            $('#all').html('<img src="img/guile-win.png" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else if(guilelife <= 0){
            $("#uwa").get(0).play();
            setTimeout(function(){
                $("#end").get(0).play();
                },3000);
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $("#fight").hide();
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $('h2').text(">ガイルのまけ！");
            $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else {
            $("#damage").get(0).play();
            $('#fight').show();
            $('#zan').show();
            $('#gui').show();
            $('#all').hide();
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('.pa-button').show();
            $('.choki-button').show();
            $('.gu-button').show();
            $('.dounaru-button').hide();
            $('#zan').html('<img src="img/zan-damage.gif" width="200px" style="transform: scale(-1, 1); alt="zangief">');
            $('#gui').html('<img src="img/guile-win.gif" width="150px" alt="guile">');
            $("h2").text(">ガイルのソニブがクリティカルヒット！");
        }
    });

    } else if (zangief === 1){
        $("h2").text(">ガイル、ソニックブーム！ザンギ飛び上がってボディプレス！");
        $('#zan').children('img').attr('src', 'img/zan-gu.gif' + '?' + new Date().getTime());
        $('#zan').children('img').attr('width', '250px');
        $('#gui').children('img').attr('src', 'img/guile-choki.gif' + '?' + new Date().getTime());
        $('#gui').children('img').attr('width', '300px');
        guilelife = guilelife - damage;
        console.log(zangieflife);
        console.log(guilelife);
        $(".dounaru-button").on("click", function () {
            if(zangieflife <= 0){
                $("#win").get(0).play();
                setTimeout(function(){
                    $("#end").get(0).play();
                    },3000);
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $("#fight").hide();
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのかち！");
                $('#all').html('<img src="img/guile-win.png" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else if(guilelife <= 0){
                $("#uwa").get(0).play();
                setTimeout(function(){
                    $("#end").get(0).play();
                    },3000);
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $("#fight").hide();
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ソニックブームをすり抜けたブレスが直撃！ガイルのまけ！");
                $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else {
                $("#damage").get(0).play();
                $('#fight').show();
                $('#zan').show();
                $('#gui').show();
                $('#all').hide();
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('.pa-button').show();
                $('.choki-button').show();
                $('.gu-button').show();
                $('.dounaru-button').hide();
                $('#zan').children('img').attr('src', 'img/zan-win.gif' + '?' + new Date().getTime());
                $('#zan').children('img').attr('width', '150px');
                $('#gui').children('img').attr('src', 'img/guile-damage.gif' + '?' + new Date().getTime());
                $('#gui').children('img').attr('width', '200px');
                $("h2").text(">ソニブ打ってたガイル、モロに食らった！");
            }
        });

    } else if (zangief === 2){
        $("h2").text(">ガイル、ソニックブーム！ザンギ、バニシングフラットで応酬！");
        $('#zan').children('img').attr('src', 'img/zan-choki.gif' + '?' + new Date().getTime());
        $('#zan').children('img').attr('width', '250px');
        $('#gui').children('img').attr('src', 'img/guile-choki.gif' + '?' + new Date().getTime());
        $('#gui').children('img').attr('width', '300px');
        console.log(zangieflife);
        console.log(guilelife);
        $(".dounaru-button").on("click", function () {
            if(zangieflife <= 0){
            $("#win").get(0).play();
            setTimeout(function(){
                $("#end").get(0).play();
                },3000);
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $("#fight").hide();
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ガイルのかち！");
            $('#all').html('<img src="img/guile-win.png" width="150px">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else if(guilelife <= 0){
            $("#uwa").get(0).play();
            setTimeout(function(){
                $("#end").get(0).play();
                },3000);
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $("#fight").hide();
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ガイルのまけ！");
            $('#all').html('<img src="img/guile-lose.jpeg" width="150px">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else {
            $('#fight').show();
            $('#zan').show();
            $('#gui').show();
            $('#all').hide();
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $('.pa-button').show();
            $('.choki-button').show();
            $('.gu-button').show();
            $('.dounaru-button').hide();
            $('#zan').children('img').attr('src', 'img/zan-nomal.gif' + '?' + new Date().getTime());
            $('#zan').children('img').attr('width', '150px');
            $('#gui').html('<img src="img/guile-nomal.gif" width="120px" alt="guile">');
            $("h2").text(">ソニックブーンが…消された…！相打ち！");
            }
        });

    }
});

$(".gu-button").on("click", function () {
    $("#no-damage").get(0).play();
    $("#fight").show();
    $('#zan').show();
    $('#gui').show();
    $('#all').hide();
    $('.pa-button').hide();
    $('.choki-button').hide();
    $('.gu-button').hide();
    $('.dounaru-button').show();    
    $('.dounaru-button').text("どうなる");
    const zangief = Math.floor( Math.random() * 3);
    const damage = Math.floor( Math.random() * 30);
    console.log(zangief,"ランダム数字");

    if(zangief === 0){
    $("h2").text(">ガイル足払い！ザンギは掴み技を出した！");
    $('#zan').children('img').attr('src', 'img/zan-pa.png' + '?' + new Date().getTime());
    $('#zan').children('img').attr('width', '200px');
    $('#gui').children('img').attr('src', 'img/guile-gu.gif' + '?' + new Date().getTime());
    $('#gui').children('img').attr('width', '250px');
    guilelife = guilelife - damage;
    console.log(zangieflife);
    console.log(guilelife);
    $(".dounaru-button").on("click", function () {
        if(zangieflife <= 0){
            $("#win").get(0).play();
            setTimeout(function(){
                $("#end").get(0).play();
                },3000);
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $("#fight").hide();
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">ガイルのかち！");
            $('#all').html('<img src="img/guile-win.png" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else if(guilelife <= 0){
            $("#uwa").get(0).play();
            setTimeout(function(){
                $("#end").get(0).play();
                },3000);
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $("#fight").hide();
            $('#all').show();
            $('#zan').hide();
            $('#gui').hide();
            $("h2").text(">つかまれてしまった！ガイルのまけ！");
            $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
            $('.dounaru-button').text("もういっかい！");
            $(".dounaru-button").on("click", function () {
                location.reload();
            });
        } else {
            $("#damage").get(0).play();
            $('#all').show();
            $('#glife').text(guilelife);
            $('#zlife').text(zangieflife);
            $("#fight").hide();
            $('.pa-button').show();
            $('.choki-button').show();
            $('.gu-button').show();
            $('.dounaru-button').hide();
            $('#zan').hide();
            $('#gui').hide();
            $('#all').html('<img src="img/tsukamare.png" width="100%" style="transform: scale(-1, 1); alt="guile">');
            $("h2").text(">つかまれた！");
        }
    });


    } else if (zangief === 1){
        $("h2").text(">ガイル足払い！ザンギ飛び上がってボディプレス！");
        $('#zan').children('img').attr('src', 'img/zan-gu.gif' + '?' + new Date().getTime());
        $('#zan').children('img').attr('width', '250px');
        $('#gui').children('img').attr('src', 'img/guile-gu.gif' + '?' + new Date().getTime());
        $('#gui').children('img').attr('width', '250px');
        console.log(zangieflife);
        console.log(guilelife);
        $(".dounaru-button").on("click", function () {
            if(zangieflife <= 0){
                $("#win").get(0).play();
                setTimeout(function(){
                    $("#end").get(0).play();
                    },3000);
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $("#fight").hide();
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのかち！");
                $('#all').html('<img src="img/guile-win.png" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else if(guilelife <= 0){
                $("#uwa").get(0).play();
                setTimeout(function(){
                    $("#end").get(0).play();
                    },3000);
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $("#fight").hide();
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのまけ！");
                $('#all').html('<img src="img/guile-lose.jpeg" width="100%">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else {
                $('#fight').show();
                $('#zan').show();
                $('#gui').show();
                $('#all').hide();
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('.pa-button').show();
                $('.choki-button').show();
                $('.gu-button').show();
                $('.dounaru-button').hide();
                $('#zan').children('img').attr('src', 'img/zan-nomal.gif' + '?' + new Date().getTime());
                $('#zan').children('img').attr('width', '150px');
                $('#gui').html('<img src="img/guile-nomal.gif" width="120px" alt="guile">');
                $("h2").text(">お互いが技をスカす！");
            }
        });

    } else if (zangief === 2){
        $("h2").text(">ガイル足払い！対するザンギはバニシングフラット！");
        $('#zan').children('img').attr('src', 'img/zan-choki.gif' + '?' + new Date().getTime());
        $('#zan').children('img').attr('width', '250px');
        $('#gui').children('img').attr('src', 'img/guile-gu.gif' + '?' + new Date().getTime());
        $('#gui').children('img').attr('width', '250px');
        console.log(zangieflife);
        console.log(guilelife);
        zangieflife = zangieflife - damage;
        $(".dounaru-button").on("click", function () {
            if(zangieflife <= 0){
                $("#win").get(0).play();
                setTimeout(function(){
                    $("#end").get(0).play();
                    },3000);
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $("#fight").hide();
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">足払い直撃！ガイルのかち！");
                $('#all').html('<img src="img/guile-win.png" width="150px">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else if(guilelife <= 0){
                $("#uwa").get(0).play();
                setTimeout(function(){
                    $("#end").get(0).play();
                    },3000);
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $("#fight").hide();
                $('#all').show();
                $('#zan').hide();
                $('#gui').hide();
                $("h2").text(">ガイルのまけ！");
                $('#all').html('<img src="img/guile-lose.jpeg" width="150px">');
                $('.dounaru-button').text("もういっかい！");
                $(".dounaru-button").on("click", function () {
                    location.reload();
                });
            } else {
                $("#damage").get(0).play();
                $('#fight').show();
                $('#zan').show();
                $('#gui').show();
                $('#all').hide();
                $('#glife').text(guilelife);
                $('#zlife').text(zangieflife);
                $('.pa-button').show();
                $('.choki-button').show();
                $('.gu-button').show();
                $('.dounaru-button').hide();
                $('#zan').html('<img src="img/zan-damage.gif" width="200px" style="transform: scale(-1, 1); alt="zangief">');
                $('#gui').html('<img src="img/guile-win.gif" width="150px"  alt="guile">');
                $("h2").text(">足元が、おるすだぜ！");
                }
        });


    }
});