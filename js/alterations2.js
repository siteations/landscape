
//once window is ready... start
window.addEventListener('load', function(event) {

//------------import working svg and enable internal access ------------------------
	var e = document.getElementsByTagName("object")[0];

		embedSVG(e)
		.then(data => {
				console.log('load results: ', data);
				let svg = document.getElementsByTagName('svg')[0].className;
				var elements = collectIds(document.getElementsByTagName('g')); //groups for id
				console.log('named groups in svg: ', svg, elements);

//-----core manipulations here can always return for additional promises-----------







		})
		.catch(function (err) {
			console.error('Augh, there was an error!', err.statusText);
		});




	//------------housekeeping (turn off select layers by adding hidden class)------------------------

		// toggleHidden('plan', 'plan_section', 'plan_anno', 'section_anno', 'intervention2', 'people2', 'trees2', 'ground2');

		// editText({id:'main_title', content:'landscape.js'},{id:'section_title', content:'toggle to explore'});

		// pulseButtons('buttons');

 });

//------------- 00: PROMISIFIED LOADING OF SVG--------------------------

function embedSVG (object) {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
					xhr.open("GET", object.getAttribute("data"));
					xhr.onload = function () {
						if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
							object.outerHTML = xhr.responseText;
							resolve('svg ready');
						} else {
							reject({
								status: this.status,
								statusText: xhr.statusText
							});
						}
					};
					xhr.onerror = function () {
						reject({
							status: this.status,
							statusText: xhr.statusText
						});
					};
					xhr.send();
		});
}

//------------- 01: pull id's from groups--------------------------

function collectIds (objSVG){
	let len = objSVG.length;
	let keys = Object.keys(objSVG).slice(len);

	return (keys); //basic feedback
}

//----------------hide and show layers-------------------

const hideLayers = function(){
	var args = Array.from(arguments);

	args.forEach(layer=>{
		$('#'+layer).addClass('hidden');
	})
}

const removeFade = function(){
	var args = Array.from(arguments);

	args.forEach(layer=>{
		$('#'+layer).removeClass('fadein');
	})
}

const addFade = function(){
	var args = Array.from(arguments);

	args.forEach(layer=>{
		$('#'+layer).addClass('fadein');
	})
}

const fadeInLayers = function(){
	var args = Array.from(arguments);

	args.forEach(layer=>{
		$('#'+layer).toggleClass('fadein');
	})
}

const fadeOutLayers = function(){
	var args = Array.from(arguments);

	args.forEach(layer=>{
		$('#'+layer).toggleClass('fadeout');
	})
}

const toggleHidden = function(){
	var args = Array.from(arguments);

	args.forEach(layer=>{
		$curr = $('#'+layer).toggleClass('hidden');
	})
}

//---------------edit content/text----------------------

const editText = function (){
	var args = Array.from(arguments);

	args.forEach(layer=>{
		$curr = $('#'+layer.id).children();
		$curr[0].textContent = layer.content;
		console.log($curr[0].textContent);
	})

}

//----------------background animations-------------------

const pulseButtons = function (id){
		$curr = $('#'+id).children();
		$curr.addClass('pulse');

		$curr.mouseenter(e=>{

			if (e.target.nodeName==='circle'){
				$(e.target).parent().parent().toggleClass('pulse');
				let buttonId = $(e.target).parent().parent()[0].id;
				$hide = $('#'+id).children(`[id!=${buttonId}]`).addClass('fadeout');

			switch (buttonId) {
			case 'b0':
				editText({id:'section_title', content:'active articulations'});
				break;

			case 'b1':
				editText({id:'section_title', content:'enlarged audiences'});
				break;

			case 'b2':
				editText({id:'section_title', content:'thickened expression'});
				break;

			case 'b3':
				editText({id:'section_title', content:'expanded tools'});
				break;

			case 'b4':
				editText({id:'section_title', content:'5'});
				break;

			case 'b5':
				editText({id:'section_title', content:'6'});
				break;

			case 'b6':
				editText({id:'section_title', content:'7'});
				break;
			}

		} // if on circle

		})

		$curr.mouseleave(e=>{
			$(e.target).parent().parent().toggleClass('pulse');
			let buttonId = $(e.target).parent().parent()[0].id;
			$hide = $('#'+id).children(`[id!=${buttonId}]`).removeClass('fadeout');
		})

		$curr.click(e=>{
			if (e.target.nodeName==='circle'){
				$(e.target).parent().parent().toggleClass('pulse');
				let buttonId = $(e.target).parent().parent()[0].id;
				$hide = $('#'+id).children(`[id!=${buttonId}]`).toggle('hidden');
				removeFade('plan_anno','section_anno');

			switch (buttonId) {
			case 'b0': //simple modal only
				editText({id:'section_title', content:'active articulations'});
				break;

			case 'b1': //switch layers of section
				fadeInLayers('intervention2', 'people2', 'trees2');
				toggleHidden('ground2','intervention1', 'people1', 'trees1', 'ground1');
				break;

			case 'b2': //add plan
				//toggleHidden('plan', 'plan_section', 'plan_anno', 'section_anno');
				fadeInLayers('plan', 'plan_section');
				fadeInLayers('intervention2', 'people2', 'trees2');
				toggleHidden('intervention1', 'people1', 'trees1', 'ground1', 'ground2');

				$('#a-section').attr('cursor', 'pointer');
				$('#a-section').click(e=>{
				fadeInLayers('intervention1', 'people1', 'trees1');
				toggleHidden('intervention2', 'people2', 'trees2', 'ground1', 'ground2');
				})

				$('#plan').attr('cursor', 'pointer');
				$('#plan').click(e=>{
				addFade('plan_anno','section_anno');
				})

				break;

			case 'b3':
				editText({id:'section_title', content:'expanded tools'});
				break;

			case 'b4':
				editText({id:'section_title', content:'5'});
				break;

			case 'b5':
				editText({id:'section_title', content:'6'});
				break;

			case 'b6':
				editText({id:'section_title', content:'7'});
				break;
			}

			}
		})

}







//----------------modals-----------------------

const addModals = (elements) => {

	elements.forEach((item,i)=>{

		var itemClean = item.id.replace('#','');
		//modal content options should vary

		var modal=`<div id="mod${itemClean}" class="modal">
					<div class="modal-content">
						<h4>${item.title}</h4>
						<p>${item.text}</p>
					</div>
					<div class="modal-footer">
						<a class="modal-action modal-close btn-flat" onClick={$('#mod${itemClean}').modal('hide')}>Close</a>
					</div>
				</div>`

		$('body').append(modal);

				$more = $(item.id);
				$more.addClass(item.color), $more.addClass('pulseButton');
				var r = $more.attr('width');
				$more.attr('rx', r), $more.attr('ry', r);
				$more.click(e=>{
					var id = '#mod'+itemClean;
					$(id).modal('show');
				});
	})
};

const modalStructure = (type) =>{

}

//----------------hero text-----------------------
const addHero = (text) => {

	var hero = `<div class='hero'>${text}</div>`
	$('body').append(hero);


}
