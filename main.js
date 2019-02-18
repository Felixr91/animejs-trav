// @ts-ignore
anime({
  targets: 'div.box',
  // translateX: 250,
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 500 }
  ],
  rotate: {
    value: '1turn',
    easing: 'easeInOutSine'
  },
  // backgroundColor: '#FFF',
  // duration: 800
  backgroundColor: '#000',
  opacity: '0.3',
  delay: function (el, i, l) { return i * 1000 }
});

// // @ts-ignore
// anime({
//   targets: 'div.box.blue',
//   translateY: [
//     { value: 200, duration: 500, delay: 1000 },
//     { value: 0, duration: 500 }
//   ],
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 1000
//   }
// });

// // @ts-ignore
// anime({
//   targets: 'div.box.green',
//   translateY: [
//     { value: 200, duration: 500, delay: 2000 },
//     { value: 0, duration: 500 }
//   ],
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 2000
//   }
// });

// // @ts-ignore
// anime({
//   targets: 'div.box.yellow',
//   translateY: [
//     { value: 200, duration: 500, delay: 3000 },
//     { value: 0, duration: 500 }
//   ],
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine',
//     delay: 3000
//   }
// });