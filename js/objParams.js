/*Params, in order:
1. Targ: the target element selector
2. Height
3. Width (diameter);
4. Optional saturation value. If this is 0, element is gold foil.
5. transform object
6. rotate object
7. Optional cylinder resolution. If omitted, default to global cylRes.
*/
var cyls = [
    ['#descent-stage', 100, 60, 30, {
        x: 49,
        y: 90,
        z: -3
    }],
    ['#ds-d-1', 82, 5, 0, {
        x: 0,
        y: 2,
        z: 0
    }, {
        x: 80,
        y: 0,
        z: -47
    }, 6],
    ['#ds-d-1', 82, 5, 0, {
        x: 116,
        y: 2,
        z: 0
    }, {
        x: 80,
        y: 0,
        z: 47
    }, 6],
    ['#ds-d-1', 150, 5, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: -22
    }, 6],
    ['#ds-d-1', 150, 5, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: 22
    }, 6],
    ['#ds-d-1', 66, 3, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 30
    }, 6],
    ['#ds-d-1', 66, 3, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -30
    }, 6],
    ['#ds-d-1', 164, 5, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -69
    }, 6],
    ['#ds-d-1', 164, 5, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 69
    }, 6],
    ['#ds-d-1', 116, 5, 0, {
        x: -34,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: -52
    }, 6],
    ['#ds-d-1', 116, 5, 0, {
        x: 152,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: 52
    }, 6],
    ['#ds-d-1', 255, 7, 0, {
        x: 58,
        y: 8,
        z: 49
    }, {
        x: 27,
        y: 0,
        z: 0
    }, 6],
    ['#ds-d-3', 82, 5, 0, {
        x: 116,
        y: 2,
        z: 0
    }, {
        x: 80,
        y: 0,
        z: 43
    }, 6],
    ['#ds-d-3', 82, 5, 0, {
        x: 62,
        y: 10,
        z: 56
    }, {
        x: 80,
        y: 0,
        z: 133
    }, 6],
    ['#ds-d-3', 150, 5, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: -22
    }, 6],
    ['#ds-d-3', 150, 5, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: 22
    }, 6],
    ['#ds-d-3', 66, 3, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 30
    }, 6],
    ['#ds-d-3', 66, 3, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -30
    }, 6],
    ['#ds-d-3', 164, 5, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -69
    }, 6],
    ['#ds-d-3', 164, 5, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 69
    }, 6],
    ['#ds-d-3', 116, 5, 0, {
        x: -34,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: -52
    }, 6],
    ['#ds-d-3', 116, 5, 0, {
        x: 152,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: 52
    }, 6],
    ['#ds-d-3', 255, 7, 0, {
        x: 58,
        y: 8,
        z: 49
    }, {
        x: 27,
        y: 0,
        z: 0
    }, 6],
    ['#ds-d-2', 82, 5, 0, {
        x: 116,
        y: 2,
        z: 0
    }, {
        x: 80,
        y: 0,
        z: 43
    }, 6],
    ['#ds-d-2', 82, 5, 0, {
        x: 62,
        y: 10,
        z: 56
    }, {
        x: 80,
        y: 0,
        z: 133
    }, 6],
    ['#ds-d-2', 150, 5, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: -22
    }, 6],
    ['#ds-d-2', 150, 5, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: 22
    }, 6],
    ['#ds-d-2', 66, 3, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 30
    }, 6],
    ['#ds-d-2', 66, 3, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -30
    }, 6],
    ['#ds-d-2', 164, 5, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -69
    }, 6],
    ['#ds-d-2', 164, 5, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 69
    }, 6],
    ['#ds-d-2', 116, 5, 0, {
        x: -34,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: -52
    }, 6],
    ['#ds-d-2', 116, 5, 0, {
        x: 152,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: 52
    }, 6],
    ['#ds-d-2', 255, 7, 0, {
        x: 58,
        y: 8,
        z: 49
    }, {
        x: 27,
        y: 0,
        z: 0
    }, 6],
    ['#ds-d-4', 82, 5, 0, {
        x: 116,
        y: 2,
        z: 0
    }, {
        x: 80,
        y: 0,
        z: 43
    }, 6],
    ['#ds-d-4', 82, 5, 0, {
        x: 62,
        y: 10,
        z: 56
    }, {
        x: 80,
        y: 0,
        z: 133
    }, 6],
    ['#ds-d-4', 150, 5, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: -22
    }, 6],
    ['#ds-d-4', 150, 5, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 158,
        y: 0,
        z: 22
    }, 6],
    ['#ds-d-4', 66, 3, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 30
    }, 6],
    ['#ds-d-4', 66, 3, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -30
    }, 6],
    ['#ds-d-4', 164, 5, 0, {
        x: 0,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: -69
    }, 6],
    ['#ds-d-4', 164, 5, 0, {
        x: 116,
        y: 138,
        z: 0
    }, {
        x: 85,
        y: 0,
        z: 69
    }, 6],
    ['#ds-d-4', 116, 5, 0, {
        x: -34,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: -52
    }, 6],
    ['#ds-d-4', 116, 5, 0, {
        x: 152,
        y: 146,
        z: 60
    }, {
        x: 75,
        y: 0,
        z: 52
    }, 6],
    ['#ds-d-4', 255, 7, 0, {
        x: 58,
        y: 8,
        z: 49
    }, {
        x: 27,
        y: 0,
        z: 0
    }, 6],
    ['#ascent-stage', 243, 161, 70, {
        x: -44,
        y: -82,
        z: -74
    }, {
        x: 90,
        y: 0,
        z: -45
    }]
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
}]
