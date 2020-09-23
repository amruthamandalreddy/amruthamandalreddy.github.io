
   window.onload = function(){
   function setupTypewriter(t) {
        var HTML = t.innerHTML.trim();

        t.innerHTML = "";

        var cursorPosition = 0,
            tag = "",
            writingTag = false,
            tagOpen = false,
            typeSpeed = 100,
        tempTypeSpeed = 0;

        var type = function() {
        
            if (writingTag === true) {
                tag += HTML[cursorPosition];
            }

            if (HTML[cursorPosition] === "<") {
                tempTypeSpeed = 0;
                if (tagOpen) {
                    tagOpen = false;
                    writingTag = true;
                } else {
                    tag = "";
                    tagOpen = true;
                    writingTag = true;
                    tag += HTML[cursorPosition];
                }
            }
            if (!writingTag && tagOpen) {
                tag.innerHTML += HTML[cursorPosition];
            }
            if (!writingTag && !tagOpen) {
                if (HTML[cursorPosition] === " ") {
                    tempTypeSpeed = 0;
                }
                else {
                    t.innerHTML += HTML[cursorPosition];
                    tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                }
                
            }
            if (writingTag === true && HTML[cursorPosition] === ">") {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                writingTag = false;
                if (tagOpen) {
                    var newSpan = document.createElement("span");
                    t.appendChild(newSpan);
                    newSpan.innerHTML = tag;
                    tag = newSpan.firstChild;
                }
            }

            cursorPosition += 1;
            if (cursorPosition < HTML.length - 1) {
                setTimeout(type, tempTypeSpeed);
            }

        };

        return {
            type: type
        };
    }

    var typewriter = document.getElementById('typewriter');

    typewriter = setupTypewriter(typewriter);

    typewriter.type();
  }

$(document).ready(function(){




    function hoverEffect(){
        var outerHover = Math.floor(Math.random() * 3) + 1;
        var InnerHover = Math.floor(Math.random() * 5) + 1;

        $('.skills-section-block .my-block ul li a').addClass('animated');

        $('.skills-section-block .my-block ul li a').removeClass('hover');
        $('.skills-section-block .my-block:nth-child(' + outerHover + ') ul li:nth-child(' + InnerHover + ') a').addClass('hover');

        $('.skills-section-block .my-block ul li a').removeClass('bounce');
        $('.skills-section-block .my-block:nth-child(' + outerHover + ') ul li:nth-child(' + InnerHover + ') a').addClass('bounce');
    }

    setInterval(hoverEffect,1500);
    console.log($(document).width());

    $('#intro').delay(800);

    // $('.code-animate h1 em').on('click', function(){
    //     if ($(document).width() > 640) {
    //         $('.first_name').text('Prashanth');
    //         $('.last_name').text('Kothapalli');
    //         $('.code-animate h1 a').css({'width' : '312px', 'border-radius' : '30px'});
    //         $('.first_name').css({'left': '15px'});
    //         $('.last_name').css({'left': 'auto', 'right' : '15px'});
    //     }
    // });


});
