$('.imgBox').mouseover(function (e) {
  $('.imgMax').css('display', 'block')
  $('.glass').css('display', 'block')
})
$('.imgBox').mousemove(function (e) {
  // 获得鼠标位置
  let pageX = e.pageX
  let pageY = e.pageY
  // 获取原图在整个文档的偏移位置
  let offSetX = $('.imgBox').offset().left
  let offSetY = $('.imgBox').offset().top
  // 计算鼠标在原图中的相对位置
  relativeX = pageX - offSetX
  relativeY = pageY - offSetY
  // 考虑到鼠标处于“放大镜”框的中心，我们要根据鼠标位置计算“放大镜”框的位置
  let glaOffSetX = $('.glass').width()/2
  let glaOffSetY = $('.glass').height()/2
  let y = relativeY - glaOffSetY
  let x = relativeX - glaOffSetX
  // 判断放大框是否超出边界
  if (x <= 0) {
    x = 0
  } else if (x >= $('.imgBox').width() - 2 * glaOffSetX) {
    x = $('.imgBox').width() - 2 * glaOffSetX
  }
  if (y <= 0) {
    y = 0
  } else if (y >= $('.imgBox').height() - 2 * glaOffSetY) {
    y = $('.imgBox').height() - 2 * glaOffSetY
  }
  $('.glass').css({top: y + 'px', left: x + 'px'})
  // 获取放大框的新位置
  let glaX = $('.glass').position().left
  let glaY = $('.glass').position().top

  // 放大图片
  let MaxX = -glaX * 4
  let MaxY = -glaY * 4
  $('.maxImg').css({top: MaxY + 'px', left: MaxX + 'px'})
})
$('.imgBox').mouseout(function () {
  $('.imgMax').css('display', 'none')
  $('.glass').css('display', 'none')
})
