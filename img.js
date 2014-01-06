$(document).ready(function(){
        function unmuteDraw(){
            var ctx .drawImage(imageObj, 69,50);
            unmuteDraw();xt("2d");
            var imageObj = new Image();
            imageObj.onload = function(){
                ctx.drawImage(imageObj, 69,50);
            }
            imageObj.src = "unmute.png";
        }
        unmuteDraw();
});
