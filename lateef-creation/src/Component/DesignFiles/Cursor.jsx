var circle = document.querySelector('#circle')

window.addEventListener("mousemove", function (dets) {
  console.log(dets.clientX)
  console.log(dets.clientY)
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.3,
    ease: Expo
  })
})