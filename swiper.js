var mySwiper = new Swiper(".swiper-container", {
    // オプションパラメータ(一部のみ抜粋)
    loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
    loopedSlides:4,
    speed: 600, // スライドが切り替わるトランジション時間(ミリ秒)。
    slidesPerView: 1, // 何枚のスライドを表示するか
    spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
    direction: "horizontal", // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: "slide", // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
    // スライダーの自動再生
    // autoplay: true 　のみなら既定値での自動再生
  
    // レスポンシブ化条件
    breakpoints: {
      // 980ピクセル幅以下になったら
      980: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // 640ピクセル幅以下になったら
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    },
    pagination: { 
        el: '.swiper-pagination', //ページネーションの要素
        type: 'bullets', //ページネーションの種類
        clickable: true, //クリックに反応させる
      },
       // 前後スライドへのナビゲーションを表示する場合
    navigation: {
        nextEl: '.swiper-button-next', // 次のスライドボタンのセレクタ
        prevEl: '.swiper-button-prev', // 前のスライドボタンのセレクタ
      },  
    // ページネーションを表示する場合
    pagination: {
      el: ".swiper-pagination" // ページネーションを表示するセレクタ
    }
  
  });
  