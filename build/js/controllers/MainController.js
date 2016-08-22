var app = angular.module("lunApp", []);
var socket = io();

app.controller("MainController", function($scope, $window) {
    //set an initial username
    $scope.mobilecheck = function() {
        var check = false;
        (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;//check pls
    };
    if ($scope.mobilecheck()) {
        $window.location.href = '/mobile';
    }
    $scope.un = Math.floor(Math.random() * 99999999).toString(32);
    socket.on('getPicStart', function(getPicUsr) {
        if (getPicUsr.usr == $scope.un) {
            //if this user is the one we're requesting from
            //send the desiring user and the canvas data
            socket.emit('usrGivePic', {
                data: $scope.canv.toDataURL("image/png"),
                wants: getPicUsr.wants
            })
        }
    });

    var cylRes = 15; //number of segs per cylinder (default, unless otherwise specified)
    var numCyls = 0,
        numCones = 0,
        polyNum = 0,
        rcsNoz, //for easy reference later to shut them all OFF.
        ready = false; //just a boolean to let us know when all the polys are drawn!
    $scope.throttle = 0; //max 100, min 0.
    $scope.rot = {
        x: 0, //pitch
        y: 0, //yaw
        z: 0 //roll
    };
    $scope.dRot = {
        x: 0, //change pitch
        y: 0, //change yaw
        z: 0 //change roll
    };
    $scope.tran = {
        x: 0, //left-right
        y: 0, //up-down
        z: -1000 //back-front
    };
    $scope.dTran = {
        x: 0, //change left-right
        y: 0, //change up-down
        z: 0 //change back-front
    };
    $scope.rotPwr = .2; //how 'powerful' the rcs engines are
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
    window.onkeyup = function(e) {
        moveMe('off');
    }
    window.onkeydown = function(e) {
        //movement!
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
                if ($scope.throttle < 100) {
                    $scope.throttle += 5;
                }
                break;
            case 86:
                if ($scope.throttle && $scope.throttle > 0) {
                    $scope.throttle -= 5;
                }
                break;
            case 32:
                e.preventDefault();
                $scope.throttle = 0;
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
            polyNum++;
            $(el).append(rfl);
            polyNum++;
            rfl.style.display = 'none';
        })
        console.log('FINAL POLYGON NUMBER:',polyNum);
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
    var changePos = function(moveArr) {
        //change the deltas for translation/rotation
        var ms = moveArr.join('-');
        switch (ms) {
            case 'rotate-yaw-left':
                $scope.dRot.y += $scope.rotPwr;
                break;
            case 'rotate-yaw-right':
                $scope.dRot.y -= $scope.rotPwr;
                break;
            case 'rotate-pitch-fwd':
                $scope.dRot.x += $scope.rotPwr;
                break;
            case 'rotate-pitch-back':
                $scope.dRot.x -= $scope.rotPwr;
                break;
            case 'rotate-roll-left':
                $scope.dRot.z -= $scope.rotPwr;
                break;
            case 'rotate-roll-right':
                $scope.dRot.z += $scope.rotPwr;
                break;

        }
    }
    $scope.t = setInterval(function() {
        $scope.rot.x += $scope.dRot.x;
        $scope.rot.y += $scope.dRot.y;
        $scope.rot.z += $scope.dRot.z;
        // $('#cont').css('transform', ' translateZ(300px) rotateX(' + $scope.rot.x + 'deg) rotateY(' + $scope.rot.y + 'deg) rotateZ(' + $scope.rot.z + 'deg)');
        $('.flame').css({ 'height': $scope.throttle + 'px', 'width': (20 * $scope.throttle / 100) + 'px' });
        $scope.$digest();
    }, 50)
});
