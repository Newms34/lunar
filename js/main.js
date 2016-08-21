var cylRes = 15; //number of segs per cylinder (default, unless otherwise specified)
var numCyls = 0,numCones=0;
var makeCone = function(targ, h, w, v, isCone, t, r, rez) {
    numCones++;
    console.log('cone with rez:', rez)
    if (!rez) {
        rez = cylRes;
    }
    var sw = 2 * Math.PI * (w / 2) * (1 / rez); //segment width (bottom!)
    if (!t) {
        var t = {
            x: 0,
            y: 0,
            z: 0
        };
    }
    if (!r) {
        var r = {
            x: 0,
            y: 0,
            z: 0
        };
    }
    var theCone = document.createElement('div');
    theCone.className = 'cone-cont';
    theCone.id = 'cone' + numCones;
    $(targ).append(theCone);
    $(targ).css('transform-style', 'preserve-3d')
    for (var i = 0; i < rez; i++) {
        var val, hsl;
        if (v && v != 0) {
            val = (((i < (rez / 2) ? i : Math.abs(i - rez)) / (rez / 2)) * 20) + v;
            hsl = 'hsl(0,0%,' + val + '%)'
        } else {
            val = (((i < (rez / 2) ? i : Math.abs(i - rez)) / (rez / 2)) * 20) + 39;
            hsl = 'hsl(43,74%,' + val + '%)';
        }

        var seg = document.createElement('div');
        seg.className = 'conSeg';
        seg.style.width = '0px';
        seg.style.height = '0px';
        seg.style.borderBottom = Math.sqrt(Math.pow(w,2)+Math.pow(h,2))+'px solid '+hsl;
        seg.style.borderLeft = (sw/2)+1+'px solid transparent';
        seg.style.borderRight = (sw/2)+1+'px solid transparent';
        seg.style.animationDelay = i*0.1+'s';
        seg.style.transform = 'rotateY(' + (i * 360 / rez) + 'deg) translateZ(' + (w / 2) + 'px) rotateX('+(Math.asin((w/2)/Math.sqrt(Math.pow(w,2)+Math.pow(h,2)))*180/Math.PI)+'deg)';
        //'+(Math.atan((w/2)/h)*180/Math.PI)+'
        //+(Math.acos((w/2)/Math.sqrt(Math.pow(w,2)+Math.pow(h,2)))*180/Math.PI)
        $('#cone' + numCones).append(seg);
        document.querySelector('#cone' + numCones).style.transform = 'translateX(' + t.x + 'px) translateY(' + t.y + 'px) translateZ(' + t.z + 'px) rotateX(' + r.x + 'deg) rotateY(' + r.y + 'deg) rotateZ(' + r.z + 'deg)';
    }
};
var makeCyl = function(targ, h, w, v, isCone, t, r, rez) {
    numCyls++;
    console.log('Cyl with rez:', rez)
    if (!rez) {
        rez = cylRes;
    }
    var sw = 2 * Math.PI * (w / 2) * (1 / rez); //segment width
    if (!t) {
        var t = {
            x: 0,
            y: 0,
            z: 0
        };
    }
    if (!r) {
        var r = {
            x: 0,
            y: 0,
            z: 0
        };
    }
    var theCyl = document.createElement('div');
    theCyl.className = 'cyl-cont';
    theCyl.id = 'cylinder' + numCyls;
    $(targ).append(theCyl);
    $(targ).css('transform-style', 'preserve-3d')
    for (var i = 0; i < rez; i++) {
        var val, hsl;
        if (v && v != 0) {
            val = (((i < (rez / 2) ? i : Math.abs(i - rez)) / (rez / 2)) * 20) + v;
            hsl = 'hsl(0,0%,' + val + '%)'
        } else {
            val = (((i < (rez / 2) ? i : Math.abs(i - rez)) / (rez / 2)) * 20) + 39;
            hsl = 'hsl(43,74%,' + val + '%)';
        }

        var seg = document.createElement('div');
        seg.className = 'cylSeg';
        seg.style.width = sw + 1 + 'px';
        seg.style.height = h + 'px';
        seg.style.background = hsl;
        seg.style.animationDelay = i*0.1+'s';
        seg.style.transform = 'rotateY(' + (i * 360 / rez) + 'deg) translateZ(' + (w / 2) + 'px)';
        $('#cylinder' + numCyls).append(seg);
        document.querySelector('#cylinder' + numCyls).style.transform = 'translateX(' + t.x + 'px) translateY(' + t.y + 'px) translateZ(' + t.z + 'px) rotateX(' + r.x + 'deg) rotateY(' + r.y + 'deg) rotateZ(' + r.z + 'deg)';
    }
};
var totalObjs = rects.length + cyls.length,
    currObj = 0,
    buildIt = function() {
        if(rects[currObj]){
            //build a rectangle
            var newDiv = document.createElement('div');
            if (rects[currObj].id){
                newDiv.id = rects[currObj].id
            }
            if (rects[currObj].class){
                newDiv.className = rects[currObj].class
            }
            $(rects[currObj].parent).append(newDiv)
        }else if(!cyls[currObj-rects.length][4]){
            makeCyl(cyls[currObj-rects.length][0], cyls[currObj-rects.length][1], cyls[currObj-rects.length][2], cyls[currObj-rects.length][3], cyls[currObj-rects.length][4], cyls[currObj-rects.length][5], cyls[currObj-rects.length][6], cyls[currObj-rects.length][7])
        }else{
            makeCone(cyls[currObj-rects.length][0], cyls[currObj-rects.length][1], cyls[currObj-rects.length][2], cyls[currObj-rects.length][3], cyls[currObj-rects.length][4], cyls[currObj-rects.length][5], cyls[currObj-rects.length][6], cyls[currObj-rects.length][7])
        }
        currObj++;
        if (currObj<totalObjs){
            setTimeout(function(){
                buildIt();
            },5)
        }
    };

buildIt();
var rotOn = true;
window.onmousemove = function(e) {
    if (rotOn) {
        $('#cont').css('transform', ' translateZ(300px) rotateX(' + e.y + 'deg) rotateY(' + e.x + 'deg)');
    }

}
window.onkeyup = function(e) {
    if (e.which == 83) {
        rotOn = !rotOn;
    }
}
