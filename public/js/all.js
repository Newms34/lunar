
// movement associations:
// which pod gets activated with which particular 'direction' of movement
var moves = {
	translate:{
		up:['#rcs1 .rcs-pod-t .cone-cont .sm-flm','#rcs2 .rcs-pod-t .cone-cont .sm-flm','#rcs3 .rcs-pod-t .cone-cont .sm-flm','#rcs4 .rcs-pod-t .cone-cont .sm-flm'],
		down:['#rcs1 .rcs-pod-b .cone-cont .sm-flm','#rcs2 .rcs-pod-b .cone-cont .sm-flm','#rcs3 .rcs-pod-b .cone-cont .sm-flm','#rcs4 .rcs-pod-b .cone-cont .sm-flm'],
		left:['#rcs3 .rcs-pod-f .cone-cont .sm-flm','#rcs4 .rcs-pod-l .cone-cont .sm-flm'],
		right:['#rcs1 .rcs-pod-f .cone-cont .sm-flm','#rcs2 .rcs-pod-l .cone-cont .sm-flm'],
		forward:['#rcs2 .rcs-pod-f .cone-cont .sm-flm','#rcs3 .rcs-pod-l .cone-cont .sm-flm'],
		back:['#rcs1 .rcs-pod-l .cone-cont .sm-flm','#rcs4 .rcs-pod-f .cone-cont .sm-flm']
	},
	rotate:{
		yaw:{
			left:['#rcs1 .rcs-pod-l .cone-cont .sm-flm','#rcs2 .rcs-pod-l .cone-cont .sm-flm','#rcs3 .rcs-pod-l .cone-cont .sm-flm','#rcs4 .rcs-pod-l .cone-cont .sm-flm'],
			right:['#rcs1 .rcs-pod-f .cone-cont .sm-flm','#rcs2 .rcs-pod-f .cone-cont .sm-flm','#rcs3 .rcs-pod-f .cone-cont .sm-flm','#rcs4 .rcs-pod-f .cone-cont .sm-flm']
		},
		pitch:{
			fwd:['#rcs1 .rcs-pod-b .cone-cont .sm-flm','#rcs2 .rcs-pod-t .cone-cont .sm-flm','#rcs3 .rcs-pod-t .cone-cont .sm-flm','#rcs4 .rcs-pod-b .cone-cont .sm-flm'],
			back:['#rcs1 .rcs-pod-t .cone-cont .sm-flm','#rcs2 .rcs-pod-b .cone-cont .sm-flm','#rcs3 .rcs-pod-b .cone-cont .sm-flm','#rcs4 .rcs-pod-t .cone-cont .sm-flm'],
		},
		roll:{
			left:['#rcs1 .rcs-pod-b .cone-cont .sm-flm','#rcs2 .rcs-pod-b .cone-cont .sm-flm','#rcs3 .rcs-pod-t .cone-cont .sm-flm','#rcs4 .rcs-pod-t .cone-cont .sm-flm'],
			right:['#rcs1 .rcs-pod-t .cone-cont .sm-flm','#rcs2 .rcs-pod-t .cone-cont .sm-flm','#rcs3 .rcs-pod-b .cone-cont .sm-flm','#rcs4 .rcs-pod-b .cone-cont .sm-flm']
		}
	},
}

/*Params, in order:
1. Targ: the target element selector
2. Height
3. Width (diameter);
4. Optional saturation value. If this is 0, element is gold foil.
5. Is object cone?
6. transform object
7. rotate object
8. Optional cylinder resolution. If omitted, default to global cylRes.
*/
var cyls = [['#ds-s-1', 82, 3, 20,false, {
        x: 0,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -23,
        z: -71
    }, 3],
    ['#ds-s-1', 82, 3, 20,false, {
        x: 129.5,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -158,
        z: -71
    }, 3],
    ['#ds-s-1', 82, 3, 20,false, {
        x: 0,
        y: 40,
        z: 0
    }, {
        x: 0,
        y: -23,
        z: -109
    }, 3],
    ['#ds-s-1', 82, 3, 20,false, {
        x: 129.5,
        y: 40,
        z: 0
    }, {
        x: 0,
        y: -158,
        z: -109
    }, 3],
    ['#ds-s-1', 95, 3, 20,false, {
        x: 0,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -11,
        z: -135
    }, 3],['#ds-s-1', 95, 3, 20,false, {
        x: 129.5,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -169,
        z: -132
    }, 3],
    ['#ds-s-2', 82, 3, 20,false, {
        x: 0,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -23,
        z: -71
    }, 3],
    ['#ds-s-2', 82, 3, 20,false, {
        x: 129.5,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -158,
        z: -71
    }, 3],
    ['#ds-s-2', 82, 3, 20,false, {
        x: 0,
        y: 40,
        z: 0
    }, {
        x: 0,
        y: -23,
        z: -109
    }, 3],
    ['#ds-s-2', 82, 3, 20,false, {
        x: 129.5,
        y: 40,
        z: 0
    }, {
        x: 0,
        y: -158,
        z: -109
    }, 3],
    ['#ds-s-2', 95, 3, 20,false, {
        x: 0,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -11,
        z: -135
    }, 3],['#ds-s-2', 95, 3, 20,false, {
        x: 129.5,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -169,
        z: -132
    }, 3],
    ['#ds-s-3', 82, 3, 20,false, {
        x: 0,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -23,
        z: -71
    }, 3],
    ['#ds-s-3', 82, 3, 20,false, {
        x: 129.5,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -158,
        z: -71
    }, 3],
    ['#ds-s-3', 82, 3, 20,false, {
        x: 0,
        y: 40,
        z: 0
    }, {
        x: 0,
        y: -23,
        z: -109
    }, 3],
    ['#ds-s-3', 82, 3, 20,false, {
        x: 129.5,
        y: 40,
        z: 0
    }, {
        x: 0,
        y: -158,
        z: -109
    }, 3],
    ['#ds-s-3', 95, 3, 20,false, {
        x: 0,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -11,
        z: -135
    }, 3],['#ds-s-3', 95, 3, 20,false, {
        x: 129.5,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -169,
        z: -132
    }, 3],
    ['#ds-s-4', 82, 3, 20,false, {
        x: 0,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -23,
        z: -71
    }, 3],
    ['#ds-s-4', 82, 3, 20,false, {
        x: 129.5,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -158,
        z: -71
    }, 3],
    ['#ds-s-4', 82, 3, 20,false, {
        x: 0,
        y: 40,
        z: 0
    }, {
        x: 0,
        y: -23,
        z: -109
    }, 3],
    ['#ds-s-4', 82, 3, 20,false, {
        x: 129.5,
        y: 40,
        z: 0
    }, {
        x: 0,
        y: -158,
        z: -109
    }, 3],
    ['#ds-s-4', 95, 3, 20,false, {
        x: 0,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -11,
        z: -135
    }, 3],['#ds-s-4', 95, 3, 20,false, {
        x: 129.5,
        y: 0,
        z: 0
    }, {
        x: 0,
        y: -169,
        z: -132
    }, 3],
    ['#descent-stage', 130, 90, 30,true, {
        x: 49,
        y: 46,
        z: -3
    }],
    ['#ds-d-1', 82, 5, 0,false, {
        x: 0,
        y: 2,
        z: 0
    }, {
        x: 80,
        y: 0,
        z: -47
    }, 5],
    ['#ds-d-1', 82, 5, 0,false, {
        x: 116,
        y: 2,
        z: 0
    }, {
        x: 80,
        y: 0,
        z: 47
    }, 5],
    ['#ds-d-1', 150, 5, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: -22
    }, 5],
    ['#ds-d-1', 150, 5, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: 22
    }, 5],
    ['#ds-d-1', 66, 3, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 30
    }, 5],
    ['#ds-d-1', 66, 3, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -30
    }, 5],
    ['#ds-d-1', 164, 5, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -69
    }, 5],
    ['#ds-d-1', 164, 5, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 69
    }, 5],
    ['#ds-d-1', 116, 5, 0,false, {
        x: -34,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: -52
    }, 5],
    ['#ds-d-1', 116, 5, 0,false, {
        x: 152,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: 52
    }, 5],
    ['#ds-d-1', 255, 7, 0,false, {
        x: 58,
        y: 8,
        z: 49
    }, {
        x: 27,
        y: 0,
        z: 0
    }, 5],
    ['#ds-d-3', 82, 5, 0,false, {
        x: 116,
        y: 2,
        z: 0
    }, {
        x: 80,
        y: 0,
        z: 43
    }, 5],
    ['#ds-d-3', 82, 5, 0,false, {
        x: 62,
        y: 10,
        z: 56
    }, {
        x: 80,
        y: 0,
        z: 133
    }, 5],
    ['#ds-d-3', 150, 5, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: -22
    }, 5],
    ['#ds-d-3', 150, 5, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: 22
    }, 5],
    ['#ds-d-3', 66, 3, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 30
    }, 5],
    ['#ds-d-3', 66, 3, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -30
    }, 5],
    ['#ds-d-3', 164, 5, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -69
    }, 5],
    ['#ds-d-3', 164, 5, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 69
    }, 5],
    ['#ds-d-3', 116, 5, 0,false, {
        x: -34,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: -52
    }, 5],
    ['#ds-d-3', 116, 5, 0,false, {
        x: 152,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: 52
    }, 5],
    ['#ds-d-3', 255, 7, 0,false, {
        x: 58,
        y: 8,
        z: 49
    }, {
        x: 27,
        y: 0,
        z: 0
    }, 5],
    ['#ds-d-2', 82, 5, 0,false, {
        x: 116,
        y: 2,
        z: 0
    }, {
        x: 80,
        y: 0,
        z: 43
    }, 5],
    ['#ds-d-2', 82, 5, 0,false, {
        x: 62,
        y: 10,
        z: 56
    }, {
        x: 80,
        y: 0,
        z: 133
    }, 5],
    ['#ds-d-2', 150, 5, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: -22
    }, 5],
    ['#ds-d-2', 150, 5, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: 22
    }, 5],
    ['#ds-d-2', 66, 3, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 30
    }, 5],
    ['#ds-d-2', 66, 3, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -30
    }, 5],
    ['#ds-d-2', 164, 5, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -69
    }, 5],
    ['#ds-d-2', 164, 5, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 69
    }, 5],
    ['#ds-d-2', 116, 5, 0,false, {
        x: -34,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: -52
    }, 5],
    ['#ds-d-2', 116, 5, 0,false, {
        x: 152,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: 52
    }, 5],
    ['#ds-d-2', 255, 7, 0,false, {
        x: 58,
        y: 8,
        z: 49
    }, {
        x: 27,
        y: 0,
        z: 0
    }, 5],
    ['#ds-d-4', 82, 5, 0,false, {
        x: 116,
        y: 2,
        z: 0
    }, {
        x: 80,
        y: 0,
        z: 43
    }, 5],
    ['#ds-d-4', 82, 5, 0,false, {
        x: 62,
        y: 10,
        z: 56
    }, {
        x: 80,
        y: 0,
        z: 133
    }, 5],
    ['#ds-d-4', 150, 5, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: -22
    }, 5],
    ['#ds-d-4', 150, 5, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: 22
    }, 5],
    ['#ds-d-4', 66, 3, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 30
    }, 5],
    ['#ds-d-4', 66, 3, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -30
    }, 5],
    ['#ds-d-4', 164, 5, 0,false, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -69
    }, 5],
    ['#ds-d-4', 164, 5, 0,false, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 69
    }, 5],
    ['#ds-d-4', 116, 5, 0,false, {
        x: -34,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: -52
    }, 5],
    ['#ds-d-4', 116, 5, 0,false, {
        x: 152,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: 52
    }, 5],
    ['#ds-d-4', 255, 7, 0,false, {
        x: 58,
        y: 8,
        z: 49
    }, {
        x: 27,
        y: 0,
        z: 0
    }, 5],
    ['#ascent-stage', 243, 161, 70,false, {
        x: -44,
        y: -82,
        z: -74
    }, {
        x: 90,
        y: 0,
        z: -45
    }],['#rcs1 .rcs-pod-t', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs1 .rcs-pod-b', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs1 .rcs-pod-l', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs1 .rcs-pod-f', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs2 .rcs-pod-t', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs2 .rcs-pod-b', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs2 .rcs-pod-l', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs2 .rcs-pod-f', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs3 .rcs-pod-t', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs3 .rcs-pod-b', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs3 .rcs-pod-l', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs3 .rcs-pod-f', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs4 .rcs-pod-t', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs4 .rcs-pod-b', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs4 .rcs-pod-l', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9],['#rcs4 .rcs-pod-f', 19, 10, 20,true, {
        x: 8,
        y: 10,
        z: 0
    }, {
        x: 90,
        y: 0,
        z: 0
    },9]
]

var rects = [{
    'parent': '#ascent-stage',
    'class': null,
    'id': 'main-cabin'
}, {
    'parent': '#main-cabin',
    'class': 'mc-wall',
    'id': 'mc-left'
}, {
    'parent': '#main-cabin',
    'class': 'mc-wall',
    'id': 'mc-right'
}, {
    'parent': '#main-cabin',
    'class': 'mc-wall',
    'id': 'mc-top'
}, {
    'parent': '#main-cabin',
    'class': 'mc-wall',
    'id': 'mc-front'
}, {
    'parent': '#main-cabin',
    'class': 'mc-wall',
    'id': 'mc-back'
}, {
    'parent': '#main-cabin',
    'class': 'mc-wall',
    'id': 'mc-tl'
}, {
    'parent': '#main-cabin',
    'class': 'mc-wall',
    'id': 'mc-tr'
}, {
    'parent': '#main-cabin',
    'class': 'mc-cyl-wall',
    'id': 'mc-c-f'
}, {
    'parent': '#main-cabin',
    'class': 'mc-cyl-wall',
    'id': 'mc-c-r'
}, {
    'parent': '#descent-stage',
    'class': 'ds-diag-panel',
    'id': 'ds-d-1'
}, {
    'parent': '#descent-stage',
    'class': 'ds-str-panel',
    'id': 'ds-s-1'
}, {
    'parent': '#descent-stage',
    'class': 'ds-diag-panel',
    'id': 'ds-d-2'
}, {
    'parent': '#descent-stage',
    'class': 'ds-str-panel',
    'id': 'ds-s-2'
}, {
    'parent': '#descent-stage',
    'class': 'ds-diag-panel',
    'id': 'ds-d-3'
}, {
    'parent': '#descent-stage',
    'class': 'ds-str-panel',
    'id': 'ds-s-3'
}, {
    'parent': '#descent-stage',
    'class': 'ds-diag-panel',
    'id': 'ds-d-4'
}, {
    'parent': '#descent-stage',
    'class': 'ds-str-panel',
    'id': 'ds-s-4'
}, {
    'parent': '#descent-stage',
    'class': 'ds-oct-out',
    'id': 'ds-top'
}, {
    'parent': '#ds-top',
    'class': 'ds-oct-in',
    'id': null
}, {
    'parent': '#descent-stage',
    'class': 'flame',
    'id': null
}, {
    'parent': '#descent-stage',
    'class': 'flame',
    'id': 'flame2'
}, {
    'parent': '#descent-stage',
    'class': 'ds-oct-out',
    'id': 'ds-bot'
}, {
    'parent': '#ds-bot',
    'class': 'ds-oct-in',
    'id': null
}, {
    'parent': '#descent-stage',
    'class': 'pad',
    'id': 'pad1'
}, {
    'parent': '#descent-stage',
    'class': 'pad',
    'id': 'pad2'
}, {
    'parent': '#descent-stage',
    'class': 'pad',
    'id': 'pad3'
}, {
    'parent': '#descent-stage',
    'class': 'pad',
    'id': 'pad4'
}, {
    'parent': '#mc-left',
    'class': 'pod',
    'id': 'pod-left'
}, {
    'parent': '#mc-right',
    'class': 'pod',
    'id': 'pod-right'
}, {
    'parent': '#pod-right',
    'class': 'pod-sec-f',
    'id': null
}, {
    'parent': '#pod-right .pod-sec-f',
    'class': 'pod-sec-d-t',
    'id': null
}, {
    'parent': '#pod-right .pod-sec-f',
    'class': 'pod-sec-d-b',
    'id': null
}, {
    'parent': '#pod-right .pod-sec-f',
    'class': 'pod-sec-d-r',
    'id': null
},{
    'parent': '#pod-right .pod-sec-f',
    'class': 'pod-sec-d-br',
    'id': null
},  {
    'parent': '#pod-right .pod-sec-f',
    'class': 'pod-sec-d-tr',
    'id': null
}, {
    'parent': '#pod-right',
    'class': 'pod-sec-b',
    'id': null
}, {
    'parent': '#pod-right .pod-sec-b',
    'class': 'pod-sec-d-t',
    'id': null
}, {
    'parent': '#pod-right .pod-sec-b',
    'class': 'pod-sec-d-b',
    'id': null
}, {
    'parent': '#pod-right .pod-sec-b',
    'class': 'pod-sec-d-r',
    'id': null
},{
    'parent': '#pod-right .pod-sec-b',
    'class': 'pod-sec-d-br',
    'id': null
},  {
    'parent': '#pod-right .pod-sec-b',
    'class': 'pod-sec-d-tr',
    'id': null
}, {
    'parent': '#pod-right',
    'class': 'pod-sec-s-t',
    'id': null
}, {
    'parent': '#pod-right',
    'class': 'pod-sec-s-b',
    'id': null
}, {
    'parent': '#pod-right',
    'class': 'pod-sec-s-s',
    'id': null
}, {
    'parent': '#pod-right',
    'class': 'pod-sec-s-ts',
    'id': null
}, {
    'parent': '#pod-right',
    'class': 'pod-sec-s-bs',
    'id': null
},{
    'parent': '#pod-left',
    'class': 'pod-sec-f',
    'id': null
}, {
    'parent': '#pod-left .pod-sec-f',
    'class': 'pod-sec-d-t',
    'id': null
}, {
    'parent': '#pod-left .pod-sec-f',
    'class': 'pod-sec-d-b',
    'id': null
}, {
    'parent': '#pod-left .pod-sec-f',
    'class': 'pod-sec-d-r',
    'id': null
},{
    'parent': '#pod-left .pod-sec-f',
    'class': 'pod-sec-d-br',
    'id': null
},  {
    'parent': '#pod-left .pod-sec-f',
    'class': 'pod-sec-d-tr',
    'id': null
}, {
    'parent': '#pod-left',
    'class': 'pod-sec-b',
    'id': null
}, {
    'parent': '#pod-left .pod-sec-b',
    'class': 'pod-sec-d-t',
    'id': null
}, {
    'parent': '#pod-left .pod-sec-b',
    'class': 'pod-sec-d-b',
    'id': null
}, {
    'parent': '#pod-left .pod-sec-b',
    'class': 'pod-sec-d-r',
    'id': null
},{
    'parent': '#pod-left .pod-sec-b',
    'class': 'pod-sec-d-br',
    'id': null
},  {
    'parent': '#pod-left .pod-sec-b',
    'class': 'pod-sec-d-tr',
    'id': null
}, {
    'parent': '#pod-left',
    'class': 'pod-sec-s-t',
    'id': null
}, {
    'parent': '#pod-left',
    'class': 'pod-sec-s-b',
    'id': null
}, {
    'parent': '#pod-left',
    'class': 'pod-sec-s-s',
    'id': null
}, {
    'parent': '#pod-left',
    'class': 'pod-sec-s-ts',
    'id': null
}, {
    'parent': '#pod-left',
    'class': 'pod-sec-s-bs',
    'id': null
}, {
    'parent': '#pod-left .pod-sec-b',
    'class': 'pod-sec-fp',
    'id': null
}, {
    'parent': '#pod-left .pod-sec-f',
    'class': 'pod-sec-fp',
    'id': null
}, {
    'parent': '#pod-right .pod-sec-b',
    'class': 'pod-sec-fp',
    'id': null
}, {
    'parent': '#pod-right .pod-sec-f',
    'class': 'pod-sec-fp',
    'id': null
}, {
    'parent': '#mc-c-f',
    'class': null,
    'id': 'atrium'
}, {
    'parent': '#atrium',
    'class': null,
    'id': 'at-f'
}, {
    'parent': '#atrium',
    'class': null,
    'id': 'at-t'
}, {
    'parent': '#atrium',
    'class': null,
    'id': 'at-r'
}, {
    'parent': '#atrium',
    'class': null,
    'id': 'at-l'
}, {
    'parent': '#atrium',
    'class': null,
    'id': 'at-b'
}, {
    'parent': '#atrium',
    'class': null,
    'id': 'at-r'
}, {
    'parent': '#ds-s-1',
    'class': 'rcs-shield',
    'id': null
}, {
    'parent': '#ds-s-2',
    'class': 'rcs-shield',
    'id': null
}, {
    'parent': '#ds-s-3',
    'class': 'rcs-shield',
    'id': null
}, {
    'parent': '#ds-s-4',
    'class': 'rcs-shield',
    'id': null
}, {
    'parent': '#mc-top',
    'class': null,
    'id': 'dock-port'
}, {
    'parent': '#at-f',
    'class': null,
    'id': 'door'
}, {
    'parent': '#mc-c-f',
    'class': 'f-window',
    'id': 'wind1'
}, {
    'parent': '#mc-c-f',
    'class': 'f-window',
    'id': 'wind2'
}, {
    'parent': '#mc-left',
    'class': 'rcs-pod',
    'id': 'rcs1'
}, {
    'parent': '#rcs1',
    'class': 'rcs-pod-wall rcs-pod-t',
    'id': null
}, {
    'parent': '#rcs1',
    'class': 'rcs-pod-wall rcs-pod-l',
    'id': null
}, {
    'parent': '#rcs1',
    'class': 'rcs-pod-wall rcs-pod-b',
    'id': null
}, {
    'parent': '#rcs1',
    'class': 'rcs-pod-wall rcs-pod-r',
    'id': null
}, {
    'parent': '#rcs1',
    'class': 'rcs-pod-wall rcs-pod-a',
    'id': null
}, {
    'parent': '#rcs1',
    'class': 'rcs-pod-wall rcs-pod-f',
    'id': null
}, {
    'parent': '#mc-front',
    'class': 'rcs-pod',
    'id': 'rcs2'
}, {
    'parent': '#rcs2',
    'class': 'rcs-pod-wall rcs-pod-t',
    'id': null
}, {
    'parent': '#rcs2',
    'class': 'rcs-pod-wall rcs-pod-l',
    'id': null
}, {
    'parent': '#rcs2',
    'class': 'rcs-pod-wall rcs-pod-b',
    'id': null
}, {
    'parent': '#rcs2',
    'class': 'rcs-pod-wall rcs-pod-r',
    'id': null
}, {
    'parent': '#rcs2',
    'class': 'rcs-pod-wall rcs-pod-a',
    'id': null
}, {
    'parent': '#rcs2',
    'class': 'rcs-pod-wall rcs-pod-f',
    'id': null
}, {
    'parent': '#mc-right',
    'class': 'rcs-pod',
    'id': 'rcs3'
}, {
    'parent': '#rcs3',
    'class': 'rcs-pod-wall rcs-pod-t',
    'id': null
}, {
    'parent': '#rcs3',
    'class': 'rcs-pod-wall rcs-pod-l',
    'id': null
}, {
    'parent': '#rcs3',
    'class': 'rcs-pod-wall rcs-pod-b',
    'id': null
}, {
    'parent': '#rcs3',
    'class': 'rcs-pod-wall rcs-pod-r',
    'id': null
}, {
    'parent': '#rcs3',
    'class': 'rcs-pod-wall rcs-pod-a',
    'id': null
}, {
    'parent': '#rcs3',
    'class': 'rcs-pod-wall rcs-pod-f',
    'id': null
}, {
    'parent': '#mc-back',
    'class': 'rcs-pod',
    'id': 'rcs4'
}, {
    'parent': '#rcs4',
    'class': 'rcs-pod-wall rcs-pod-t',
    'id': null
}, {
    'parent': '#rcs4',
    'class': 'rcs-pod-wall rcs-pod-l',
    'id': null
}, {
    'parent': '#rcs4',
    'class': 'rcs-pod-wall rcs-pod-b',
    'id': null
}, {
    'parent': '#rcs4',
    'class': 'rcs-pod-wall rcs-pod-r',
    'id': null
}, {
    'parent': '#rcs4',
    'class': 'rcs-pod-wall rcs-pod-a',
    'id': null
}, {
    'parent': '#rcs4',
    'class': 'rcs-pod-wall rcs-pod-f',
    'id': null
}]
var app = angular.module("lunApp", []);
var socket = io();

app.controller("MainController", function($scope, $window) {
    //set an initial username
    $scope.inf=true;
    $scope.mobilecheck = function() {
        $scope.grav = 99.546;
        $scope.rcsThrust = 1.815131578947368 / 10;
        var check = false;
        (function(a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check; //check pls
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
    $scope.throttle = 50; //max 100, min 0.
    $scope.thirdPerson = true; //if this is true, the ship moves. if its not, the MOON moves!
    $scope.activeGame = false;
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
        z: -300 //back-front
    };
    $scope.tranV = {
        x: 0, //vel left-right
        y: 0, //vel up-down
        z: 0 //vel back-front
    };
    $scope.tranA = {
        x: 0, //accel left-right
        y: 0, //accel up-down
        z: 0 //accel back-front
    }
    $scope.tranAV = {
        x: 0, //accel left-right
        y: 0, //accel up-down
        z: 0 //accel back-front
    }
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
                //build a cylinder
                makeCyl(cyls[currObj - rects.length][0], cyls[currObj - rects.length][1], cyls[currObj - rects.length][2], cyls[currObj - rects.length][3], cyls[currObj - rects.length][4], cyls[currObj - rects.length][5], cyls[currObj - rects.length][6], cyls[currObj - rects.length][7])
            } else {
                //build a cone
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
        $scope.tranAV.x = 0;
        $scope.tranAV.y = 0;
        $scope.tranAV.z = 0;
    }
    window.onkeydown = function(e) {
        //movement!
        console.log(e.which)
            //zero the rcs accel
        $scope.tranAV.x = 0;
        $scope.tranAV.y = 0;
        $scope.tranAV.z = 0;
        switch (e.which) {
            case 35:
            case 97:
                e.preventDefault(); //we're sticking a prevent default in here so that pressing 'insert' or 'end' wont move the page or whatever!
                moveMe('rotate-yaw-left');
                break;
            case 45:
            case 98:
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
            case 71:
                e.preventDefault();
                $scope.activeGame = !$scope.activeGame;
                if ($scope.activeGame) {
                    $scope.tranV.y = 0;
                }
                break;
            case 80:
                $scope.thirdPerson = !$scope.thirdPerson;
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
        console.log('FINAL POLYGON NUMBER:', polyNum);
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

                changePos(dirs);
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
            case 'translate-up':
                $scope.tranAV.y = $scope.rcsThrust * -4;
                break;
            case 'translate-down':
                $scope.tranAV.y = $scope.rcsThrust * 4;
                break;
            case 'translate-left':
                $scope.tranAV.x = $scope.rcsThrust * -4;
                break;
            case 'translate-right':
                $scope.tranAV.x = $scope.rcsThrust * 4;
                break;
            case 'translate-forward':
                $scope.tranAV.z = $scope.rcsThrust * -4;
                break;
            case 'translate-back':
                $scope.tranAV.z = $scope.rcsThrust * 4;
                break;
        }
    }
    $scope.t = setInterval(function() {
        $scope.rot.x += $scope.dRot.x;
        $scope.rot.y += $scope.dRot.y;
        $scope.rot.z += $scope.dRot.z;
        //use rot.x, rot.z to get change in x,y,z dirs
        var xyzPercs = fromAngles($scope.rot.x, $scope.rot.z);
        //note that somehow x and y axes are SWITCHED!
        $scope.tranA.x = (xyzPercs.y * ($scope.throttle / 100) * 184.16 / 80) + $scope.tranAV.x;
        $scope.tranA.y = ((xyzPercs.x * ($scope.throttle / 100) * -184.16 / 80) + $scope.grav / 80) + $scope.tranAV.y;
        $scope.tranA.z = (xyzPercs.z * ($scope.throttle / 100) * -184.16 / 80) + $scope.tranAV.z;

        //accel --> velocity
        $scope.tranV.x += $scope.tranA.x;
        $scope.tranV.y += $scope.tranA.y;
        $scope.tranV.z += $scope.tranA.z;

        //velocity to pos
        $scope.tran.x += $scope.tranV.x;
        $scope.tran.z += $scope.tranV.z;
        if ($scope.activeGame && $scope.activeGame != false) {
            $scope.tran.y += $scope.tranV.y;
            // $scope.tran.y += 20;
        } else {
            $scope.tran.y = 0;
        }
        //adjust main engine flame height
        $('.flame').css({ 'height': $scope.throttle + 'px', 'width': (20 * $scope.throttle / 100) + 'px' });
        $scope.$digest();
        $scope.checkBounds(); //check to see if we're outside the boundaries!
    }, 50)
    $scope.checkBounds = function() {
        //out of bounds
        if ($scope.tran.x > 4000 || $scope.tran.x < -4000 || $scope.tran.z > 4000 || $scope.tran.z < -4000) {
            clearInterval($scope.t);
            bootbox.confirm('You\'ve drifted too far from the landing site! Wanna try again?', function(r) {
                if (r && r != null) {
                    window.location.reload();
                }
            })
        }
        if (5000 - $scope.tran.y < -4429) {
            if ($scope.tranV.y > 15) {
                clearInterval($scope.t);
                bootbox.confirm('You\'ve landed too hard, and crashed! Wanna try again?', function(r) {
                    if (r && r != null) {
                        window.location.reload();
                    }
                })
            }else{
                clearInterval($scope.t);
                bootbox.confirm('Congrats. Ya landed. Wanna try again?', function(r) {
                    if (r && r != null) {
                        window.location.reload();
                    }
                })
            }
        }
    }
    $scope.round = function(n) {
        return Math.floor(n);
    }
});

function Vector(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
}
var fromAngles = function(theta, phi) {
    theta = (theta) * Math.PI / 180;
    phi = (phi) * Math.PI / 180;
    return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
};

var mobCon = app.controller('mob-con',function($scope){
	$scope.rotLowerLim=20;//how much the phone must be twisted before the craft moves. Prevents over-sensitivity!
	$scope.currX = 0;
	$scope.currY = 0;
	$scope.currZ = 0;
})
app.factory('socket', function ($rootScope) {
  console.log('socket factory!');
  var socket = io.connect();
  console.log('socket factory!');
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () { 
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});