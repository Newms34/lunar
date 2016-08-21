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
