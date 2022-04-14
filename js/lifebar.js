// ザンギ
let zgaugeMode = "full";
// let damagedTime  = new Date().getTime();
const zfrontGauge = document.getElementById("zfront-gauge");
const zbackGauge = document.getElementById("zback-gauge");
/* let zangieflife = 100; */
let zbackGaugeIsAnimation = false;

// fadeoutアニメーション開始時
zbackGauge.addEventListener("animationstart", () => {
    zbackGaugeIsAnimation = true;
});

// fadeoutアニメーション終了時
zbackGauge.addEventListener("animationend", () => {
    zbackGauge.style.width = zangieflife + "%";
    zbackGauge.classList.remove("fadeout");
    zbackGaugeIsAnimation = false;
});

// *** 攻撃ボタン *** //
$(".dounaru-button").on("click", function() {
    // ゲージ状態更新
    if ( zangieflife < 100  ){
        zfrontGauge.classList.remove("full");
        zbackGauge.classList.remove("full");
        zfrontGauge.classList.add("normal");
        zgaugeMode = "normal";
    }

    // ダメージ処理
    //  zangieflife < damage ? zangieflife = 0 : zangieflife -= damage;
    if ( zangieflife < 0  ){
    zfrontGauge.style.width = 0 + "%";
    damagedTime = new Date().getTime();
    } else {
    zfrontGauge.style.width = zangieflife + "%";
    damagedTime = new Date().getTime();    
    }
    // 進行中のfadeoutアニメーションを終了
    
    if ( zbackGaugeIsAnimation ){
        zbackGauge.classList.remove("fadeout");
        void zbackGauge.offsetWidth;
    }
    // fadeoutアニメーション開始
    zbackGauge.classList.add("fadeout");
});


// ガイル
let ggaugeMode = "full";
const gfrontGauge = document.getElementById("gfront-gauge");
const gbackGauge = document.getElementById("gback-gauge");
/* let zangieflife = 100; */
let gbackGaugeIsAnimation = false;

// fadeoutアニメーション開始時
gbackGauge.addEventListener("animationstart", () => {
    gbackGaugeIsAnimation = true;
});

// fadeoutアニメーション終了時
gbackGauge.addEventListener("animationend", () => {
    gbackGauge.style.width = guilelife + "%";
    gbackGauge.classList.remove("fadeout");
    gbackGaugeIsAnimation = false;
});

// *** 攻撃ボタン *** //
$(".dounaru-button").on("click", function() {
    // ゲージ状態更新
    if ( guilelife < 100 ){
        gfrontGauge.classList.remove("full");
        gbackGauge.classList.remove("full");
        gfrontGauge.classList.add("normal");
        ggaugeMode = "normal";
    }

    // ダメージ処理
    //  zangieflife < damage ? zangieflife = 0 : zangieflife -= damage;
    if ( guilelife < 0  ){
        gfrontGauge.style.width = 0 + "%";
        damagedTime = new Date().getTime();
        } else {
        gfrontGauge.style.width = guilelife + "%";
        damagedTime = new Date().getTime();    
        }
    // 進行中のfadeoutアニメーションを終了
    
    if ( gbackGaugeIsAnimation ){
        gbackGauge.classList.remove("fadeout");
        void gbackGauge.offsetWidth;
    }
    // fadeoutアニメーション開始
    gbackGauge.classList.add("fadeout");
});

