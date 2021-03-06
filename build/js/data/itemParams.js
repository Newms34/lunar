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