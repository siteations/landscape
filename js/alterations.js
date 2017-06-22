const contents =[
  {id: '#info', color: 'purple', title:'A Tool for Interactive Presentations', text:"Landscape architects (and urbanist) make re-presentations of tactical interventions, alterations, and amplifications of hybrid-ecologies and civic spaces. Unfortunately, novel propositions - for designs, futures, and/or regulatory regimes - are too often trapped in (gorgeous) paper plots, pay-walled journals, and static pdfs. Instead of building constituencies and agents for agitation in the age of climate change, we are making low-circulation napkin sketches... largely because too few in the discipline realize how easily our core drawing tools and types can be adapted for animated, information-rich web display." },
  {id: '#info_1', color: 'red', title:'A Mechanism for Enriched Animations', text:"This (eventual) library - Landscape.js - is a first step toward developing interactive and overlaid sections, plans, and models in svg and xyz. It is intended for designers with minimal exposure to code (html, js, css) and everyday experience with Adobe, Cad, and Rhino editing/design workflows. The core idea - a hybridization of Repton's 'Red-Books' with today's Data-Viz - is simply to enable users to a) specify layers (by id) of an optimized ai/psd/svg file which alter the visbility of b) additional layers of information - be it photographic specimens, vector highlights of food-webs or water-flows, or simple labels and modals like this. None of the code is novel or fancy. It's not capitalizing on emergence or the mystique of aggregate 'intelligence'; Rather, amidst the general rise of geo-visualization, there is a real need for more intimate, 'tactile' ways of showing ecological, corporeal, and spatial relationships... dynamically. Consider landscape.js an expressive mechanism to extend and enrich your drawings, a way to thicken how you portray 'umweults', interventions, and 'worlds' to a wider audience."},
  {id: '#info_2', color: 'mustard', title:'A Work in Progress', text:"Anticipate v1.0.0 to be released in ~2018, Landscape.js will include a core set of interactions, tutorials, and a focus on primarily planar drawing types - plan, sections, axons - in vector and raster. The integration of live 3d models - with webGL and three.js - will be part of a second release. In advance of either, this github site will host pages testing/demostrating various functions. I'm starting fairly simple - old demos from Landscape Media 101 - and will build-up to board-scale combinations of drawing types and more complex interaction choreography. Feel free to star and fork the code on github; hit me up with suggestions, questions, or opportunities for educational integration - in design, spatial humanities, or material culture; collaborators are always welcome as this is an open-source labor of (landscape) love."},
];


$(document).ready(function() {
      $e = $('#start');
      if ($e[0].contentDocument.documentElement) $e.replaceWith($($e[0].contentDocument.documentElement).clone());

      addHero("What is Landscape(.js) ?");
      addModals(contents);


 });


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
