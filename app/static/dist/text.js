map.on('load',function(){
	

	map.addLayer({
		'id': 'districtaSymbol',
		'source': 'areaSource',
		'source-layer':'dsitrict_2_shenzhen_a',
		'type': 'symbol',
		'maxzoom':11.5,
		"layout": {
			'text-field':"{districtna}",
			'text-size':16,
			'text-font':["MicrosoftYaHeiRegular"],
			'text-anchor':'top'
		},
		'paint': {
			'text-color':'rgb(0,0,0)',
			'text-halo-color':'rgb(245,245,245)',
			'text-halo-width':1,
			'text-halo-blur':1,
		},
	})
	map.addLayer({
		'id': 'text6_tour',//1:5万到1:2万
		'source': 'areaSource',
		'source-layer':'textfilter_jwp',
		'filter':[
			'all',
			['==','levelid',6],
			['>','typecode',16000000],
			['<','typecode',17000000]
			],
		'type': 'symbol',
		'minzoom':11.5,
		'maxzoom':12.5,
		"layout": {
			"icon-image": "point",
			'text-field':"{stext}",
			'text-size':12,
			'text-font':["MicrosoftYaHeiRegular"],
			'text-anchor':'top',
			"icon-size":0.006
		},
		'paint': {
			'text-color':'rgb(85,155,88)',
			'text-halo-color':'rgb(245,245,245)',
			'text-halo-width':1,
			'text-halo-blur':1,
		},
	})
	map.addLayer({
				'id': 'text6_traffic',//1:5万到1:2万
				'source': 'areaSource',
				'source-layer':'textfilter_jwp',
				'filter':[
					'all',
					['==','levelid',6],
					['>','typecode',19000000],
					['<','typecode',20000000]
					],
				'type': 'symbol',
				'minzoom':11.5,
				'maxzoom':12.5,
				"layout": {
					"icon-image": "point",
					'text-field':"{stext}",
					'text-size':12,
					'text-font':["MicrosoftYaHeiRegular"],
					'text-anchor':'top',
					"icon-size":0.006
				},
				'paint': {
					'text-color':'rgb(101,135,162)',
					'text-halo-color':'rgb(245,245,245)',
					'text-halo-width':1,
					'text-halo-blur':1,
				},
	})
	map.addLayer({
				'id': 'text5_tour',//1:2万到1:1.5万
				'source': 'areaSource',
				'source-layer':'textfilter_jwp',
				'filter':[
					'all',
					['==','levelid',5],
					['>','typecode',16000000],
					['<','typecode',17000000]
					],
				'type': 'symbol',
				'minzoom':12.5,
				'maxzoom':14.5,
				"layout": {
					"icon-image": "point",
					'text-field':"{stext}",
					'text-size':12,
					'text-font':["MicrosoftYaHeiRegular"],
					'text-anchor':'top',
					"icon-size":0.006
				},
				'paint': {
					'text-color':'rgb(101,135,162)',
					'text-halo-color':'rgb(245,245,245)',
					'text-halo-width':1,
					'text-halo-blur':1,
				},
	})
	map.addLayer({
				'id': 'text5_traffic',//1:2万到1:1.5万
				'source': 'areaSource',
				'source-layer':'textfilter_jwp',
				'filter':[
					'all',
					['==','levelid',5],
					['>','typecode',19000000],
					['<','typecode',20000000]
					],
				'type': 'symbol',
				'minzoom':12.5,
				'maxzoom':14.5,
				"layout": {
					"icon-image": "point",
					'text-field':"{stext}",
					'text-size':12,
					'text-font':["MicrosoftYaHeiRegular"],
					'text-anchor':'top',
					"icon-size":0.006
				},
				'paint': {
					'text-color':'rgb(101,135,162)',
					'text-halo-color':'rgb(245,245,245)',
					'text-halo-width':1,
					'text-halo-blur':1,
				},
	})
	map.addLayer({
				'id': 'text4_tour',//1:1万到1:1000
				'source': 'areaSource',
				'source-layer':'textfilter_jwp',
				'filter':[
					'all',
					['==','levelid',4],
					['>','typecode',16000000],
					['<','typecode',17000000]
					],
				'type': 'symbol',
				'minzoom':14.5,
				'maxzoom':18,
				"layout": {
					"icon-image": "point",
					'text-field':"{stext}",
					'text-size':12,
					'text-font':["MicrosoftYaHeiRegular"],
					'text-anchor':'top',
					"icon-size":0.006
				},
				'paint': {
					'text-color':'rgb(101,135,162)',
					'text-halo-color':'rgb(245,245,245)',
					'text-halo-width':1,
					'text-halo-blur':1,
				},
	})
	map.addLayer({
				'id': 'text4_traffic',//1:5万到1:2万
				'source': 'areaSource',
				'source-layer':'textfilter_jwp',
				'filter':[
					'all',
					['==','levelid',4],
					['>','typecode',19000000],
					['<','typecode',20000000]
					],
				'type': 'symbol',
				'minzoom':14.5,
				'maxzoom':18,
				"layout": {
					"icon-image": "point",
					'text-field':"{stext}",
					'text-size':12,
					'text-font':["MicrosoftYaHeiRegular"],
					'text-anchor':'top',
					"icon-size":0.006
				},
				'paint': {
					'text-color':'rgb(101,135,162)',
					'text-halo-color':'rgb(245,245,245)',
					'text-halo-width':1,
					'text-halo-blur':1,
				},
	})
	map.addLayer({
				'id': 'text3_tour',//1:1万到1:1000
				'source': 'areaSource',
				'source-layer':'textfilter_jwp',
				'filter':[
					'all',
					['==','levelid',3],
					['>','typecode',16000000],
					['<','typecode',17000000]
					],
				'type': 'symbol',
				'minzoom':15.5,
				'maxzoom':19,
				"layout": {
					"icon-image": "point",
					'text-field':"{stext}",
					'text-size':12,
					'text-font':["MicrosoftYaHeiRegular"],
					'text-anchor':'top',
					"icon-size":0.006
				},
				'paint': {
					'text-color':'rgb(101,135,162)',
					'text-halo-color':'rgb(245,245,245)',
					'text-halo-width':0.5,
					'text-halo-blur':1,
				},
	})
	map.addLayer({
				'id': 'text3_traffic',//1:5万到1:2万
				'source': 'areaSource',
				'source-layer':'textfilter_jwp',
				'filter':[
					'all',
					['==','levelid',3],
					['>','typecode',19000000],
					['<','typecode',20000000]
					],
				'type': 'symbol',
				'minzoom':15.5,
				'maxzoom':19,
				"layout": {
					"icon-image": "point",
					'text-field':"{stext}",
					'text-size':12,
					'text-font':["MicrosoftYaHeiRegular"],
					'text-anchor':'top',
					"icon-size":0.006
				},
				'paint': {
					'text-color':'rgb(101,135,162)',
					'text-halo-color':'rgb(245,245,245)',
					'text-halo-width':0.5,
					'text-halo-blur':1,
				},
	})
	map.addLayer({
					'id': 'roadSymbol',
					'source': 'areaSource',
					'source-layer':'m_roadfilter_jwl',
					'type': 'symbol',
					'minzoom':7,
					'maxzoom':17,
					'layout':{
						'symbol-placement':"line",
						'text-field':"{roadname}",
						'symbol-avoid-edges':true,
						'text-size':10,
						'text-font':["MicrosoftYaHeiRegular"],
						'text-offset':[0,0.2],
						'text-anchor':'top'
					},
					'paint': {
						'text-color':'#595959',
						'text-halo-color':'rgb(245,245,245)',
						'text-halo-width':1,
						'text-halo-blur':1,
					},
					"interactive":true,
					
	})
// 	map.addLayer({
// 		'id': 'roadSymbol_sn',
// 		'source': 'areaSource',
// 		'source-layer':'m_roadfilter_jwl_sn',
// 		'type': 'symbol',
// 		'minzoom':17,
// 		'maxzoom':22,
// 		'layout':{
// 			'symbol-placement':"line",
// 			'text-field':"{roadname}",
// 			'symbol-avoid-edges':true,
// 			'text-size':12,
// 			'text-font':["MicrosoftYaHeiBold"],
// 			'text-offset':[0,0.2],
// 			'text-anchor':'top'
// 		},
// 		'paint': {
// 			'text-color':'rgb(110,66,13)',
// 			'text-halo-color':'rgb(245,245,245)',
// 			'text-halo-width':1,
// 			'text-halo-blur':1,
// 		},
// 		"interactive":true,
// 					
// 	})
// })

})	