(function() {
  // get root pixel
  var rootPixel = document.querySelector("#root"),
      rootPixelX = rootPixel.getBoundingClientRect().top,
      rootPixelY = rootPixel.getBoundingClientRect().left,
      // determine width & height with vanillaJS http://codeblog.cz/vanilla/style.html#get-element-width
      rootPixelWidth = parseInt(getComputedStyle(rootPixel).width), 
      rootPixelHeight = parseInt(getComputedStyle(rootPixel).height);
  
  
  // get root pixel size and position
  console.log(rootPixel, rootPixelX, rootPixelY, rootPixelWidth, rootPixelHeight);
  
  
  
  
  // go around pixel to make more pixels
  var currentPixel = rootPixel;
  for ( var i = 0; i < 4; i++ ) {
    
    // width and height of new div to be half
    var newWidth = .5 * rootPixelWidth;
    var newHeight = .5 * rootPixelHeight;
    var newPos;

    // 0 = top pixel - x: rootPixelX + rootPixelWidth/2 - newWidth/2
    //                 y: rootPixelY - newHeight
    // 1 = right       x: rootPixelX + rootPixelWidth
    //                 y: rootPixelY + rootPixelHeight/2 - newHeight/2
    // 2 = bottom      x: rootPixelX + rootPixelWidth/2 - newWidth/2
    //                 y: rootPixelY + rootPixelHeight
    // 3 = left        x: rootPixelX - newWidth
    //                 y: rootPixelY + rootPixelHeight/2 - newHeight/2
    switch(i) {
      case 0:
        newPos = {
          x: rootPixelX + rootPixelWidth/2 - newWidth/2,
          y: rootPixelY - newHeight
        };
        break;
      case 1:
        newPos = {
          x: rootPixelX + rootPixelWidth,
          y: rootPixelY + rootPixelHeight/2 - newHeight/2
        };
        break;
      case 2:
        newPos = {
          x: rootPixelX + rootPixelWidth/2 - newWidth/2,
          y: rootPixelY + rootPixelHeight
        };
        break;
      case 3:
        newPos = {
          x: rootPixelX - newWidth,
          y: rootPixelY + rootPixelHeight/2 - newHeight/2
        };
        break;
      default:
        newPos = {
          x: 600,
          y: 600
        };
    }
    
    // 1. create div element https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    var newPixel = document.createElement("div");
    
    // 2. add to DOM
    document.body.appendChild(newPixel);

    // set class
    newPixel.setAttribute('class', 'fractalpixel');
    
    // 3. set position x and position y https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
    // 4. set width and height
    newPixel.setAttribute('style', 'left:' + parseInt(newPos.x) + 'px; ' + 'top:' + parseInt(newPos.y) + 'px; ' + 'width:' + newWidth + 'px; ' + 'height:' + newHeight +'px');
  }
  
})()
