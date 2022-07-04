document.addEventListener("DOMContentLoaded", function(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    const container = document.querySelectorAll("main div");
    const text = document.querySelectorAll("main div p");
    var containerCount = container.length;
    
    //numbering
    for (var i=0; i<containerCount; i++) {
        var insertNum = document.createElement("p");
        insertNum.innerHTML = (containerCount - i + 1) + "/" + (containerCount + 1);
        insertNum.style.marginTop = 1 + "em";
        insertNum.style.textAlign = "right";
        container[i].appendChild(insertNum);
    }

    function selectTarget() {
        var targetText = Math.floor(Math.random()*containerCount);
        //display
        for (var i=0; i<containerCount; i++) {
            container[i].style.display = "none";
        }
        container[targetText].style.display = "block";

        //positoin
        var targetWidth = container[targetText].getBoundingClientRect().width;
        var targetHeight = container[targetText].getBoundingClientRect().height;
        var targetMargin = windowWidth/10;
        var targetTop = Math.random()*(windowHeight - targetMargin - targetHeight);
        var targetLeft = Math.random()*(windowWidth - targetMargin - targetWidth);
            // var targetTop = 1*(windowHeight - targetMargin - targetHeight);
            // var targetLeft = 1*(windowWidth - targetMargin - targetWidth);
        container[targetText].style.top = targetTop + "px";
        container[targetText].style.left = targetLeft + "px";

    }

    // selectTarget();

    setInterval(() => {
        selectTarget();
      }, 4000);

}, false);