var jsonData = {
    "menuTop": {
        "homeBtn":[
            {"name": "poster", "id":"posterOpt"},
            {"name": "about", "id":"aboutOpt"},
            {"name": "dam shelter section 1", "id":"s1Opt"},
            {"name": "dam shelter section 2", "id":"s2Opt"}
            ],
        "siteBtn":[
            {"name": "dolly sods site slides", "id":"slideStart"},
            {"name": "last", "id":"slideLast", icon: 'fa-chevron-left'},
            {"name": "next", "id":"slideNext", icon: 'fa-chevron-right'},
            {"name": "above: captions desired with modals?", "id":"slideCaption"},
            ],
        "iconBtn":[
            {"name": "clear icons", "id":"iNone"},
            {"name": "show flora", "id":"iFlora"},
            {"name": "show fauna", "id":"iFauna"},
            {"name": "show process", "id":"iProcess"}
        ],
        "programBtn":[
            {"name": "clear diagrams", "id":"dNone"},
            {"name": "show water levels", "id":"dWater"},
            {"name": "show trails", "id":"dTrails"},
            {"name": "show occupancy", "id":"dCamp"}
            ],
        "seasonsBtn":[
            {"name": "diagram + spring", "id":"spring"},
            {"name": "daigram + fall", "id":"fall"},
            {"name": "seasonal juxtaposition", "id":"seasonal"},
            {"name": "diurnal juxtaposition", "id":"diurnal"}
            ]
    },
    menuBottom: {
        posterOpt: {
            fade: {layers:['plan', 'section1', 'section2', 'scale_and_north', 'slideImage2'], type:'id'},
            click: {layers:['slideImage1'], actions:[{show: 'bottomModal'}]},
            updates: {layers:['slideImage1', 'slideImage1', 'bottomModalBody', 'bottomModalLabel'], contents: [['xlink:href', "../img/manifesto.jpg"],['style', ""],'placeholder text for poster/project introduction', 'Dams & datums > manifesto' ]}
        },
        aboutOpt: {
            fade: {layers:['plan', 'section1', 'section2', 'scale_and_north', 'slideImage2'], type:'id'},
            show: 'bottomModal',
            updates: {layers:['slideImage1', 'bottomModalBody', 'bottomModalLabel'], contents: [['xlink:href', "../img/manifesto.jpg"],'placeholder text for about modal', 'Dams & datums > about']}
        },
        s1Opt: {
            fade: {layers:['images', 'section2', 'diagrams'], type:'id'},
        },
        s2Opt: {
            fade: {layers:['images', 'section1', 'diagrams'], type:'id'},
        },
        slideStart: {
            fade: {layers:['plan', 'section1', 'section2', 'scale_and_north', 'slideImage2'], type:'id'},
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
        slideCaption: {
            fade: {layers:['plan', 'section1', 'section2', 'scale_and_north'], type:'id'},
            click: {layers:['slideCaption'], actions:[{show: 'rightModal'}]},
        },
        slideNext: {
            fade: {layers:['plan', 'section1', 'section2', 'scale_and_north'], type:'id'},
            click: {layers:['slideNext', 'slideLast'], actions:[{advance: 'slideImage1'},{reverse: 'slideImage1'}]},
        },
        iNone: {
            fade: [],
            tooltip: [],
            click: []
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
        dNone: {
            fade: {layers:['d_saturation', 'd_camp', 'd_trails','section1', 'cut2', 'images', 'plan_annoTextures'], type:'id'},
        },
        dWater: {
            fade: {layers:['d_trails', 'd_camp','section1', 'cut2','images','plan_annoTextures'], type:'id'},
        },
        dTrails: {
            fade: {layers:['d_saturation', 'd_camp','section1', 'cut2','images', 'plan_annoTextures'], type:'id'},
        },
        dCamp: {
            fade: {layers:['d_trails', 'd_saturation','section1', 'cut2','images', 'plan_annoTextures'], type:'id'},
        },
        spring: {
            hide: [],
            fade: [],
            tooltip: [],
            click: []
        },
        fall: {
            hide: [],
            fade: [],
            tooltip: [],
            click: []
        },
        seasonal: {
            hide: [],
            fade: [],
            tooltip: [],
            click: []
        },
        diurnal: {
            hide: [],
            fade: [],
            tooltip: [],
            click: []
        },

    }
}
