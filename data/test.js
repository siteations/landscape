var jsonData = {
    "menuTop": {
        "homeBtn":[
            {"name": "poster", "id":"posterOpt"},
            {"name": "about", "id":"aboutOpt"},
            {"name": "dam shelter design", "id":"s1Opt"}
            ],
        "siteBtn":[
            {"name": "dolly sods site slides", "id":"slideStart"},
            {"name": "last", "id":"slideLast", icon: 'fa-chevron-left'},
            {"name": "next", "id":"slideNext", icon: 'fa-chevron-right'}
            ],
        "iconBtn":[
            {"name": "show flora", "id":"iFlora"},
            {"name": "show fauna", "id":"iFauna"},
            {"name": "show process", "id":"iProcess"}
        ],
        "programBtn":[
            {"name": "show water levels", "id":"dWater"},
            {"name": "show trails", "id":"dTrails"},
            {"name": "show occupancy", "id":"dCamp"}
            ],
        "seasonsBtn":[
            {"name": "diagram + spring", "id":"spring"},
            {"name": "diagram + fall", "id":"fall"},
            {"name": "diurnal juxtaposition", "id":"diurnal"}
            ]
    },
    menuBottom: {
        posterOpt: {
            fade: {layers:['plan', 'section1', 'section2', 'scale_and_north', 'slideImage2', 'overlays'], type:'id'},
            click: {layers:['slideImage1'], actions:[{show: 'bottomModal'}]},
            updates: {layers:['slideImage1', 'slideImage1', 'bottomModalBody', 'bottomModalLabel'], contents: [['xlink:href', "../img/manifesto.jpg"],['style', ""],'placeholder text for poster/project introduction', 'Dams & datums > manifesto' ]}
        },
        aboutOpt: {
            fade: {layers:['plan', 'section1', 'section2', 'scale_and_north', 'slideImage2', 'overlays'], type:'id'},
            show: 'bottomModal',
            updates: {layers:['slideImage1', 'bottomModalBody', 'bottomModalLabel'], contents: [['xlink:href', "../img/manifesto.jpg"],'placeholder text for about modal', 'Dams & datums > about']}
        },
        s1Opt: {
            fade: {layers:['slideImage2', 'section2', 'icons1','scale_and_north', 'trees1', 'cut1', 'diagrams', 'overlays'], type:'id'},
            updates: {layers:['slideImage1', 'slideImage1'], contents: [['xlink:href', "../img/model3.jpg"],['style', ""]]}
        },
        slideStart: {
            fade: {layers:['plan', 'section1', 'section2', 'scale_and_north', 'slideImage2', 'overlays'], type:'id'},
            click: {layers:['slideImage1', 'slideImage2'], actions:[{advance: 'slideImage1'},{advance: 'slideImage1'}]},
            photos:{img:
                    ["../img/slide01.jpg", "../img/slide02.jpg", "../img/slide03.jpg", "../img/slide04.jpg", "../img/slide05.jpg", "../img/slide06.jpg", "../img/slide07.jpg", "../img/slide08.jpg", "../img/slide09.jpg","../img/slide10.jpg"],
                captions:
                    ["random caption 1", "random caption 2", "random caption 3", "random caption 4", "random caption 5", "random caption 6", "random caption 7", "random caption 8", "random caption 9","random caption 10"],
                modals:
                    ["random modal content 1", "random modal content 2", "random modal content 3", "random modal content 4", "random modal content 5", "random modal content 6", "random modal content 7", "random modal content 8", "random modal content 9","random modal content 10"]
                },
            updates: {layers:['slideImage1','slideImage1', 'slideCaption'], contents: [['xlink:href', "../img/slide01.jpg"],['style', ""], "random caption 1"]}
        },
        slideNext: {
            fade: {layers:['plan', 'section1', 'section2', 'scale_and_north','overlays'], type:'id'},
            click: {layers:['slideNext', 'slideLast'], actions:[{advance: 'slideImage1'},{reverse: 'slideImage1'}]},
        },
        iFlora: {
            fade: [],
            tooltip: [],
            click: []
        },
        iFauna: {
            fade: [],
            tooltip: [],
            click: []
        },
        iProcess: {
            fade: [],
            tooltip: [],
            click: []
        },
        dWater: {
            fade: {layers:['d_trails', 'd_camp','section1', 'cut2','images','plan_annoTextures','overlays'], type:'id'},
        },
        dTrails: {
            fade: {layers:['d_saturation', 'd_camp','section1', 'cut2','images', 'plan_annoTextures','overlays'], type:'id'},
            animateClip: 'clip_trails',
        },
        dCamp: {
            fade: {layers:['d_trails', 'd_saturation','section1', 'cut2','images', 'plan_annoTextures', 'overlays'], type:'id'},
        },
        spring: {
            fade: {layers:['images', 'section2', 'icons1','cut1','diagrams', 'plan', 'render2', 'scale_and_north'], type:'id'},
            animateMPosition: 'clip_renders',
            updates: {layers:['render1'], contents: [['xlink:href', "../img/sect1_SpringDay.jpg"]]}
        },
        fall: {
            fade: {layers:['images', 'section1', 'cut2','diagrams', 'plan', 'render2', 'scale_and_north'], type:'id'},
            animateMPosition: 'clip_renders',
            updates: {layers:['render1'], contents: [['xlink:href', "../img/sect2_FallDay.jpg"]]}
        },
        diurnal: {
            fade: {layers:['images', 'section1', 'section2','diagrams', 'plan','scale_and_north'], type:'id'},
            animateMPosition: 'clip_renders',
            updates: {layers:['render1','render2','render2'], contents: [['xlink:href', "../img/sect2_FallDay.jpg"],['xlink:href', "../img/sect2_FallNight.jpg"], ['style', '']]}
        },

    }
}
