const contents =[
  {id: '#m0', color: 'purple', title:'A Tool for Interactive Presentations', text:"Landscape architects (and urbanist) make re-presentations of tactical interventions, alterations, and amplifications of hybrid-ecologies and civic spaces. Unfortunately, novel propositions - for designs, futures, and/or regulatory regimes - are too often trapped in (gorgeous) paper plots, pay-walled journals, and static pdfs."},
  {id: '#m1', color: 'purple', title:'A Tool for Interactive Presentations', text:"Instead of building constituencies and agents for agitation in the age of climate change, we are making low-circulation napkin sketches... largely because too few in the discipline realize how easily our core drawing tools and types can be adapted for animated, information-rich web display." },
  {id: '#m2', color: 'red', title:'A Mechanism for Enriched Animations', text:"This (eventual) library - Landscape.js - is a first step toward developing interactive and overlaid sections, plans, and models in svg and xyz. It is intended for designers with minimal exposure to code and everyday experience with Adobe, Cad, and Rhino editing/design workflows. The core idea - a hybridization of Repton's 'Red-Books' with today's Data-Viz - is simply to enable users to a) specify layers (by id) of an optimized ai/psd/svg file which alter the visbility of b) additional layers of information - be it photographic specimens, vector highlights of food-webs or water-flows, and simple labels."},
  {id: '#m3', color: 'red', title:'A Mechanism for Enriched Animations', text:"None of the code is novel or fancy. It's not capitalizing on emergence or the mystique of aggregate 'intelligence'; Rather, amidst the general rise of geo-visualization, there is a real need for more intimate, 'tactile' ways of showing ecological, corporeal, and spatial relationships... dynamically. Consider landscape.js an expressive mechanism to extend and enrich your drawings, a way to thicken how you portray 'umweults' and interventions for a wider audience."},
  {id: '#info_2', color: 'mustard', title:'A Work in Progress', text:"Anticipate v1.0.0 to be released in ~2018, Landscape.js will include a core set of interactions, tutorials, and a focus on primarily planar drawing types - plan, sections, axons - in vector and raster. The integration of live 3d models - with webGL and three.js - will be part of a second release. In advance of either, this github site will host pages testing/demostrating various functions. I'm starting fairly simple - old demos from Landscape Media 101 - and will build-up to board-scale combinations of drawing types and more complex interaction choreography. Feel free to star and fork the code on github; hit me up with suggestions, questions, or opportunities for educational integration - in design, spatial humanities, or material culture; collaborators are always welcome as this is an open-source labor of (landscape) love."},
];


$(document).ready(function() {

//------------import working svg and enable internal access ------------------------

  $e = $("object");
  $.get($e.attr($e.prop("nodeName") === "OBJECT" ? "data" : "src"), function(data) {
    $e.replaceWith(data.documentElement);

  //------------housekeeping (turn off select layers by adding hidden class)------------------------

    toggleHidden('plan', 'plan_section', 'plan_anno', 'section_anno', 'intervention2', 'people2', 'trees2', 'ground2');

    editText({id:'main_title', content:'landscape.js'},{id:'section_title', content:'toggle to explore'});

    pulseButtons('buttons');

  });
 });

//------------------class setup--------------------------


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
