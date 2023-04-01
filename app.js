const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const menu = document.querySelector('.menu');
const headline = document.querySelector('.headline');

const tl = gsap.timeline();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
// 高さを0%から80%に緩急をつけて！
.fromTo(hero, 1.2, {width: "100%" }, { width: "80%", ease: Power2.easeInOut})
// 横幅を100%から80%に縮小。緩急をつけて！
.fromTo(slider, 1.2, { y: "-100%" }, { y: "0%", ease: Power2.easeInOut }, "-=1.2")
// 色付きの背景であるsliderをy軸-100%から0%に！つまり100%分上にずらして置いたものを元の位置に！
//そして横幅の縮小と同時に行いたいから-1.2sしている！
.fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
.fromTo(menu, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
.fromTo(headline, 0.5, { opacity: 0, x: 0 }, { opacity: 1, x: 30 }, "-=0.5");


// 上記より下記のような配置で書くとわかりやすい！！
// tl.fromTo(
//     hero,
//     1,
//     { height: "0%" },
//     { height: "80%", ease: Power2.easeInOut  }
// )
// .fromTo(
//     hero,
//     1.2,
//     { width: "100%" },
//     { width: "80%", ease: Power2.easeInOut }
// );


