<!DOCTYPE html>
<html>
    <head>
        <title>Super Mario!</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <style type=‘type/css’>
img {
    position: relative;
    left: 0;
    top: 0;
}
        </style>
        <script>
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('img').animate({left: "-=10px"}, 'fast');
            break;
            // Up Arrow Pressed
            case 38:
                $('img').animate({top: "-=10px"}, 'fast');
            break;
            // Right Arrow Pressed
            case 39:
                $('img').animate({left: "+=10px"}, 'fast');
            break;
            // Down Arrow Pressed
            case 40:
                $('img').animate({top: "+=10px"}, 'fast');
            break;
        }
    });
});
        </script>

        
    </head>
    <body>
        <img src="http://i1061.photobucket.com/albums/t480/ericqweinstein/mario.jpg"/>
    </body>
</html>
