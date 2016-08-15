var cylRes = 15; //number of segs per cylinder
var numCyls = 0;
var makeCyl = function(targ, h, w, v, t, r,rez) {
    numCyls++;
    console.log('Cyl with rez:',rez)
    if(!rez){
        rez=cylRes;
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
        seg.style.transform = 'rotateY(' + (i * 360 / rez) + 'deg) translateZ(' + (w / 2) + 'px)';
        $('#cylinder' + numCyls).append(seg);
        document.querySelector('#cylinder' + numCyls).style.transform = 'translateX(' + t.x + 'px) translateY(' + t.y + 'px) translateZ(' + t.z + 'px) rotateX(' + r.x + 'deg) rotateY(' + r.y + 'deg) rotateZ(' + r.z + 'deg)';
    }
};
//(targ, height, width(diameter), val,trans,rot) 
cyls.forEach(function(c) {
    makeCyl(c[0], c[1], c[2], c[3], c[4], c[5],c[6])
})

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
