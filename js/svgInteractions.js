var state = 'load'

$(document).ready(()=> {

//----------------LOAD your files with jQuery $.get----------------------

	//add your svg compositions, svg secondary elements, and linked data (csv or json)
	var loadSvg = $.get('./img/sectionPlan-01.svg')
	var loadIcons = $.get('./img/opening-1.svg')
	var loadCSV = $.get('./data/test.csv')
	var loadJSON = $.get('./data/test.json')


	//this is asynchronous so we use $.when().done() to collect data once all are loaded
	//for more info on sync vs. async/callback strutures and the alternatives of defers (in jQuery) / promises see MDN promises

//----------------ONCE LOADED (defered) grab their data with $.when().done()----------------------


	$.when(loadSvg, loadIcons, loadCSV, loadJSON).done( (svgData, iconData, csvData, jsonData) => {

		//note the data structure from done includes 3 things... we want to work with [0]
			console.log("response structure",  svgData)

		//confirm what's in your files
			console.log("svg",  svgData[0].documentElement)
			console.log("icons",  iconData[0].documentElement)
			console.log("elements-csv",  csvData[0].split('\r').map(line=>line.split(',')) )
			console.log("elements-json",  jsonData[0])

			console.log("width",  $(window))

		//set up an initial styling
		var svg = svgData[0].documentElement
		svg.setAttribute('class', 'center-block')

		var menuTop=jsonData[0].menuTop

		//add svg to the html
		$('#svgHere').append(svg)

		manifesto()

		topMenuActions(menuTop)

		listening()


	}); //.done()

}); //.ready()


//---------------FUNCTIONS FOR TYPICAL/USEFUL BEHAVIOR------------------

/* These functions could be set in their own file and preloaded or defined here
the key idea is to simply break down typical tasks into smaller, reusable sections.

This approach should be familiar in that dot notation 'object.function(parameters)' is common in leaflet/mapbox
and simply holds those functions as methods held on a defined class .... var map = new mapBox(params) .... map.addLayers(params)
*/

//Task: reset all visibility to initial load state
const visInit = function(){
	$('g[id]').css('display', 'initial')
}

//Task: hide all layers with selections in array
const visHide = function (arr, sel){
	var prefix;
	if (sel==='id'){prefix='#'} else if (sel==='class'){prefix='.'} else if (sel==='tag'){prefix=''}

	arr.forEach(item=>{
		$(prefix+item).hide()
	})
}

//Task: fadeOut all layers with selections in array
const visFade = function (arr, sel){
	var prefix;
	if (sel==='id'){prefix='#'} else if (sel==='class'){prefix='.'} else if (sel==='tag'){prefix=''}

	arr.forEach(item=>{
		$(prefix+item).fadeOut(1000)
	})
}

//Task: add class to children of a group - makes for easier selection of items... esp. tooltip, click, and fill interactions
const visClass = function (group){

}

//Task: add tooltips to all layers with selections in array ... this is an array of objects
const visTool = function (arr, sel){
	var prefix;
	if (sel==='id'){prefix='#'} else if (sel==='class'){prefix='.'} else if (sel==='tag'){prefix=''}

	arr.forEach(item=>{
		$(prefix+item.id).attr('data-toggle','tooltip')
		$(prefix+item.id).attr('title', item.tooltitle)
	})
}

//-----------TASKS BY AREAS--------------------------

const topMenuActions = function (obj){
	var buttonIds = Object.keys(obj)

	buttonIds.forEach(btn=>{
		var interArr = obj[btn]

		$('#'+btn).click((event)=>{
			//here we want to reload the bottom options
			$('#pgChoice').text(btn.replace('Btn', ''))
			$('.bottomMenu').remove()

			interArr.forEach(item=>{
				var newDiv = document.createElement("div")
					newDiv.setAttribute('class', 'col text-center bottomMenu')

				var newBtn = document.createElement("button")
					newBtn.setAttribute('class', 'btn btn-outline-secondary btn-block')
					newBtn.setAttribute('id', item.id)
					if (!item.icon){
						newBtn.innerHTML = item.name
					} else if (item.icon){
						newBtn.innerHTML=`<i class="fa ${item.icon}" aria-hidden="true"></i>`
					}
				newDiv.append(newBtn)

				$('.footer').append(newDiv)
			})

		})
	})

}

const manifesto = function(){
		//turn everything on again within layered, named svg
		visInit()

		//initial layer manipulation - hide or fade off specific layers...
		$('#slideImage1').attr('xlink:href', "../img/manifesto.jpg")
		$('#slideImage1').click((event)=>{
			$('#bottomModalBody').text('explain the demo here')
			$('#bottomModal').modal('show')
		})
		//set up initial visibilities
		visHide(['plan', 'section1', 'section2', 'scale_and_north', 'slideImage2'], 'id')
}

const listening = function (){

	$('#homeBtn').click(event=>{
		manifesto()
	});

	$('#posterOpt').click(event=>{
		manifesto()
	});

	$('#aboutOpt').click(event=>{
		manifesto()
		$('#bottomModalBody').text('explain the demo here also')
		$('#bottomModal').modal('show')
	});

	$('#s1Opt').click(event=>{
		visInit()
		visHide(['images', 'section2', 'diagrams'], 'id')
	});

	$('#s2Opt').click(event=>{
		visInit()
		visHide(['images', 'section1', 'diagrams'], 'id')
	});

	$('#siteBtn').click(event=>{
		visInit()
		visHide(['section1', 'diagrams', 'plan', 'section2', 'scale_and_north'], 'id')
		$('#slideImage1').attr('xlink:href', "../img/slide01.jpg")

	});

}

//Task: get IDs of sublayers as array- useful for creating dropdown selections

//Task: show one layer, hide others in array

//

