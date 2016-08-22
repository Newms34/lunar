var cylRes = 15; //number of segs per cylinder (default, unless otherwise specified)
var numCyls = 0,
    numCones = 0,
    polyNum = 0,
    rcsNoz, //for easy reference later to shut them all OFF.
    ready = false, //just a boolean to let us know when all the polys are drawn!
    throttle = 0,//max 100, min 0.
    rot = {
        x:0,//pitch
        y:0,//yaw
        z:0//roll
    },
    dRot = {
        x:0,//change pitch
        y:0,//change yaw
        z:0//change roll
    },tran = {
        x:0,//left-right
        y:0,//up-down
        z:0//back-front
    },
    dTran = {
        x:0,//change left-right
        y:0,//change up-down
        z:0//change back-front
    },
    rotPwr = .2;//how 'powerful' the rcs engines are
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
    polyNum++;
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
        seg.style.borderBottom = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)) + 'px solid ' + hsl;
        seg.style.borderLeft = (sw / 2) + 1 + 'px solid transparent';
        seg.style.borderRight = (sw / 2) + 1 + 'px solid transparent';
        seg.style.animationDelay = i * 0.1 + 's';
        seg.style.transform = 'rotateY(' + (i * 360 / rez) + 'deg) translateZ(' + (w / 2) + 'px) rotateX(' + (Math.asin((w / 2) / Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2))) * 180 / Math.PI) + 'deg)';
        $('#cone' + numCones).append(seg);
        polyNum++;
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
    polyNum++;
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
        seg.style.animationDelay = i * 0.1 + 's';
        seg.style.transform = 'rotateY(' + (i * 360 / rez) + 'deg) translateZ(' + (w / 2) + 'px)';
        $('#cylinder' + numCyls).append(seg);
        polyNum++;
        document.querySelector('#cylinder' + numCyls).style.transform = 'translateX(' + t.x + 'px) translateY(' + t.y + 'px) translateZ(' + t.z + 'px) rotateX(' + r.x + 'deg) rotateY(' + r.y + 'deg) rotateZ(' + r.z + 'deg)';
    }
};
var totalObjs = rects.length + cyls.length,
    currObj = 0,
    buildIt = function() {
        if (rects[currObj]) {
            //build a rectangle
            var newDiv = document.createElement('div');
            if (rects[currObj].id) {
                newDiv.id = rects[currObj].id
            }
            if (rects[currObj].class) {
                newDiv.className = rects[currObj].class
            }
            $(rects[currObj].parent).append(newDiv)
            polyNum++;
        } else if (!cyls[currObj - rects.length][4]) {
            makeCyl(cyls[currObj - rects.length][0], cyls[currObj - rects.length][1], cyls[currObj - rects.length][2], cyls[currObj - rects.length][3], cyls[currObj - rects.length][4], cyls[currObj - rects.length][5], cyls[currObj - rects.length][6], cyls[currObj - rects.length][7])
        } else {
            makeCone(cyls[currObj - rects.length][0], cyls[currObj - rects.length][1], cyls[currObj - rects.length][2], cyls[currObj - rects.length][3], cyls[currObj - rects.length][4], cyls[currObj - rects.length][5], cyls[currObj - rects.length][6], cyls[currObj - rects.length][7])
        }
        currObj++;
        if (currObj < totalObjs) {
            setTimeout(function() {
                buildIt();
            }, 5)
        } else {
            drawFlames();
        }
    };

buildIt();
var rotOn = false;
window.onmousemove = function(e) {
    if (rotOn) {
        $('#cont').css('transform', ' translateZ(300px) rotateX(' + e.y + 'deg) rotateY(' + e.x + 'deg)');
    }

}
window.onkeyup = function(e) {
    console.log('keyup!')
    moveMe('off');
    if (e.which == 80) {
        rotOn = !rotOn;
        if (!rotOn) {
            $('#cont').css('transform', ' translateZ(300px) rotateX(' + rot.x + 'deg) rotateY(' + rot.y + 'deg) rotateZ(' + rot.z + 'deg)');
        }
    }
}
window.onkeydown = function(e) {
    //movement!
    console.log(e.which);
    switch (e.which) {
        case 35:
        case 97:
            e.preventDefault(); //we're sticking a prevent default in here so that pressing 'insert' or 'end' wont move the page or whatever!
            moveMe('rotate-yaw-left');
            break;
        case 45:
        case 96:
            e.preventDefault(); //we're sticking a prevent default in here so that pressing 'insert' or 'end' wont move the page or whatever!
            moveMe('rotate-yaw-right');
            break;
        case 38:
            moveMe('rotate-pitch-fwd');
            break;
        case 40:
            moveMe('rotate-pitch-back');
            break;
        case 37:
            moveMe('rotate-roll-left');
            break;
        case 39:
            moveMe('rotate-roll-right');
            break;
        case 87:
            moveMe('translate-forward');
            break;
        case 83:
            moveMe('translate-back');
            break;
        case 81:
            moveMe('translate-up');
            break;
        case 90:
            moveMe('translate-down');
            break;
        case 65:
            moveMe('translate-left');
            break;
        case 68:
            moveMe('translate-right');
            break;
        case 70:
            if (throttle<100){
                throttle+=5;
            }
            break;
        case 86:
            if (throttle && throttle>0){
                throttle-=5;
            }
            break;
    }
}
var drawFlames = function() {
    rcsNoz = [].slice.call($('.rcs-pod-wall .cone-cont'));
    rcsNoz.forEach(function(el) {
        var rfl = document.createElement('div');
        rfl.className = 'sm-flm';
        var rflx = document.createElement('div');
        rflx.className = 'sm-flm2';
        $(rfl).append(rflx);
        $(el).append(rfl);
        rfl.style.display = 'none';
    })
    ready = true;
}
var moveMe = function(d) {
    if (!ready) {
        return false;
    }
    //start by shutting all nozzles OFF:
    rcsNoz.forEach(function(el) {
        $(el).find('.sm-flm').css('display', 'none')
    })
    if (d == 'off') {
        return false;
    } else {
        var dirs = d.split('-');
        // can we do some sort of error checking here, to make sure the movement type and dir actually exist?
        if (dirs[0] == 'translate') {
            //straight translation
            //activate jets
            moves[dirs[0]][dirs[1]].forEach(function(n) {
                $(n).css('display', 'block');
            })
            //no translation movement for now, since I
            // dont want the craft zooming off the screen!
            // changePos(dirs);
        } else {
            //rotation
            //activate jets
            moves[dirs[0]][dirs[1]][dirs[2]].forEach(function(n) {
                $(n).css('display', 'block');
            })
            changePos(dirs);
        }
    }
}
var changePos = function(moveArr){
    //change the deltas for translation/rotation
    var ms = moveArr.join('-');
    switch(ms){
        case 'rotate-yaw-left':
            dRot.y+=rotPwr;
            break;
        case 'rotate-yaw-right':
            dRot.y-=rotPwr;
            break;
        case 'rotate-pitch-fwd':
            dRot.x+=rotPwr;
            break;
        case 'rotate-pitch-back':
            dRot.x-=rotPwr;
            break;
        case 'rotate-roll-left':
            dRot.z-=rotPwr;
            break;
        case 'rotate-roll-right':
            dRot.z+=rotPwr;
            break;
        
    }
}
var t = setInterval(function(){
    rot.x+=dRot.x;
    rot.y+=dRot.y;
    rot.z+=dRot.z;
    $('#cont').css('transform', ' translateZ(300px) rotateX(' + rot.x + 'deg) rotateY(' + rot.y + 'deg) rotateZ(' + rot.z + 'deg)');
    $('.flame').css({'height':throttle+'px','width':(20*throttle/100)+'px'});
},50)
