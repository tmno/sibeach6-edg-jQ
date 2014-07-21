/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'font-family: \'Port Lligat Slab\', serif']='<link href=\'http://fonts.googleapis.com/css?family=Port+Lligat+Slab\' rel=\'stylesheet\' type=\'text/css\'>';
   fonts['cursive']='';
   fonts['\'Port Ligat\'']='<script type=\"text/javascript\">  WebFontConfig = {    google: { families: [ \'Port+Lligat+Slab::latin\' ] }  };  (function() {    var wf = document.createElement(\'script\');    wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') +      \'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\';    wf.type = \'text/javascript\';    wf.async = \'true\';    var s = document.getElementsByTagName(\'script\')[0];    s.parentNode.insertBefore(wf, s);  })(); </script>';
   fonts['\'Autour One\'']='<link href=\'http://fonts.googleapis.com/css?family=Autour+One\' rel=\'stylesheet\' type=\'text/css\'>';


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Social',
            type:'text',
            rect:['83.7%','84.6%','auto','auto','131px','12.6%'],
            opacity:1,
            text:"Social",
            align:"left",
            font:['\'Autour One\'',25,"rgba(9,183,241,1.00)","500","none","normal"]
         },
         {
            id:'Contact',
            type:'text',
            rect:['82.7%','80.6%','auto','auto','167px','12.6%'],
            text:"Contact",
            align:"left",
            font:['\'Autour One\'',25,"rgba(153,148,148,1.00)","100","none","normal"]
         },
         {
            id:'About',
            type:'text',
            rect:['84%','76.7%','auto','auto','202px','12.6%'],
            text:"About",
            align:"left",
            font:['\'Autour One\'',25,"rgba(153,148,148,1.00)","100","none","normal"]
         },
         {
            id:'_3',
            type:'rect',
            rect:['67.1%','123','auto','auto','auto','auto']
         },
         {
            id:'_2',
            type:'rect',
            rect:['37.6%','123','auto','auto','auto','auto']
         },
         {
            id:'_1',
            type:'rect',
            rect:['8.8%','123','auto','auto','auto','auto']
         },
         {
            id:'Agency',
            type:'text',
            rect:['27.4%','108px','auto','auto','auto','auto'],
            opacity:1,
            text:"A g e n c y",
            align:"left",
            font:['Arial Black, Gadget, sans-serif',25,"rgba(0,0,0,1)","400","none","normal"]
         },
         {
            id:'Symbol_6',
            type:'rect',
            rect:['59.7%','auto','auto','auto','5.2%','73.6%']
         },
         {
            id:'Group',
            type:'group',
            rect:['13','13','749','161','auto','auto'],
            c:[
            {
               id:'lifeguard-logo-216w',
               type:'image',
               rect:['0px','0px','216px','216px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"lifeguard-logo-216w.jpg",'0px','0px']
            },
            {
               id:'digital',
               type:'text',
               rect:['24.1%','41px','638px','62px','auto','auto'],
               text:"{ d i g i t a l }",
               font:['Courier, \'Courier New\', monospace',65,"rgba(0,0,0,1)","900","none","normal"]
            }]
         }],
         symbolInstances: [
         {
            id:'_1',
            symbolName:'Symbol_3'
         },
         {
            id:'Symbol_6',
            symbolName:'Symbol_6'
         },
         {
            id:'_3',
            symbolName:'Symbol_1'
         },
         {
            id:'_2',
            symbolName:'Symbol_2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Social}": [
            ["style", "bottom", '191.27px'],
            ["color", "color", 'rgba(9,183,241,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", 'auto'],
            ["style", "font-size", '18px'],
            ["style", "top", 'auto'],
            ["style", "font-family", '\'Autour One\''],
            ["style", "right", '12.62%'],
            ["style", "opacity", '0']
         ],
         "${_lifeguard-logo-216w}": [
            ["style", "top", '0.02px'],
            ["style", "height", '161px'],
            ["style", "opacity", '0'],
            ["style", "left", '0.02px'],
            ["style", "width", '161px']
         ],
         "${_Contact}": [
            ["style", "bottom", '239.82px'],
            ["color", "color", 'rgba(153,148,148,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", 'auto'],
            ["style", "font-size", '18px'],
            ["style", "top", 'auto'],
            ["style", "font-family", '\'Autour One\''],
            ["style", "right", '12.62%'],
            ["style", "font-weight", '100']
         ],
         "${__2}": [
            ["style", "top", '240px'],
            ["style", "opacity", '0'],
            ["style", "left", '34.31%']
         ],
         "${_About}": [
            ["style", "bottom", '285.58px'],
            ["color", "color", 'rgba(153,148,148,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", 'auto'],
            ["style", "font-size", '18px'],
            ["style", "top", 'auto'],
            ["style", "font-family", '\'Autour One\''],
            ["style", "right", '12.62%'],
            ["style", "font-weight", '100']
         ],
         "${__1}": [
            ["style", "top", '240px'],
            ["style", "opacity", '0'],
            ["style", "left", '3.51%'],
            ["style", "width", '300px']
         ],
         "${_Symbol_6}": [
            ["style", "top", 'auto'],
            ["transform", "scaleY", '1'],
            ["style", "bottom", '73.61%'],
            ["style", "opacity", '0'],
            ["style", "left", 'auto'],
            ["style", "right", '5.21%']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '800px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '900px'],
            ["style", "max-width", '1529px'],
            ["style", "width", '100%']
         ],
         "${_digital}": [
            ["style", "font-weight", '900'],
            ["style", "left", '24.08%'],
            ["style", "font-size", '54px'],
            ["style", "top", '41.22px'],
            ["style", "width", '569.06px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '85.59px'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "text-decoration", 'none'],
            ["style", "opacity", '1']
         ],
         "${_Agency}": [
            ["style", "top", '114px'],
            ["style", "opacity", '0'],
            ["style", "font-weight", '400'],
            ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
            ["style", "left", '33.85%'],
            ["style", "font-size", '25px']
         ],
         "${__3}": [
            ["style", "top", '240px'],
            ["style", "opacity", '0'],
            ["style", "left", '66.59%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18443,
         autoPlay: true,
         timeline: [
            { id: "eid442", tween: [ "color", "${_Social}", "color", 'rgba(106,153,205,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(9,183,241,1)'}], position: 6072, duration: 6 },
            { id: "eid904", tween: [ "color", "${_Social}", "color", 'rgba(106,153,205,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(106,153,205,1.00)'}], position: 18443, duration: 0, easing: "easeOutQuad" },
            { id: "eid900", tween: [ "style", "${_Symbol_6}", "right", '5.1%', { fromValue: '5.21%'}], position: 0, duration: 18443, easing: "easeOutQuad" },
            { id: "eid896", tween: [ "style", "${_Social}", "bottom", '1400.27px', { fromValue: '191.27px'}], position: 5809, duration: 12634 },
            { id: "eid898", tween: [ "style", "${_About}", "bottom", '1515.57px', { fromValue: '285.58px'}], position: 5191, duration: 13252 },
            { id: "eid440", tween: [ "style", "${_Social}", "opacity", '1', { fromValue: '0'}], position: 6054, duration: 24 },
            { id: "eid807", tween: [ "style", "${_digital}", "width", '569.06px', { fromValue: '569.06px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid906", tween: [ "color", "${_Contact}", "color", 'rgba(153,148,148,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(153,148,148,1.00)'}], position: 18443, duration: 0, easing: "easeOutQuad" },
            { id: "eid805", tween: [ "style", "${_digital}", "font-size", '54px', { fromValue: '54px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid890", tween: [ "style", "${_Social}", "right", '15.49%', { fromValue: '12.62%'}], position: 5809, duration: 282 },
            { id: "eid891", tween: [ "style", "${_Social}", "right", '12.62%', { fromValue: '15.49%'}], position: 6091, duration: 27 },
            { id: "eid761", tween: [ "style", "${_lifeguard-logo-216w}", "height", '161px', { fromValue: '161px'}], position: 0, duration: 0 },
            { id: "eid844", tween: [ "style", "${_Contact}", "font-size", '22px', { fromValue: '18px'}], position: 5500, duration: 1250 },
            { id: "eid850", tween: [ "style", "${_Contact}", "font-size", '15px', { fromValue: '22px'}], position: 6750, duration: 75 },
            { id: "eid902", tween: [ "style", "${_Contact}", "font-size", '18px', { fromValue: '15px'}], position: 6825, duration: 11618, easing: "easeOutQuad" },
            { id: "eid849", tween: [ "style", "${__2}", "left", '34.31%', { fromValue: '34.31%'}], position: 0, duration: 0 },
            { id: "eid905", tween: [ "color", "${_About}", "color", 'rgba(153,148,148,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(153,148,148,1.00)'}], position: 18443, duration: 0, easing: "easeOutQuad" },
            { id: "eid897", tween: [ "style", "${_Contact}", "bottom", '1459.8px', { fromValue: '239.82px'}], position: 5500, duration: 12943 },
            { id: "eid142", tween: [ "style", "${_About}", "opacity", '1', { fromValue: '0'}], position: 5415, duration: 24 },
            { id: "eid846", tween: [ "style", "${_About}", "font-size", '22px', { fromValue: '18px'}], position: 5191, duration: 1559 },
            { id: "eid852", tween: [ "style", "${_About}", "font-size", '15px', { fromValue: '22px'}], position: 6750, duration: 75 },
            { id: "eid901", tween: [ "style", "${_About}", "font-size", '18px', { fromValue: '15px'}], position: 6825, duration: 11618, easing: "easeOutQuad" },
            { id: "eid877", tween: [ "style", "${_Stage}", "height", '2222px', { fromValue: '900px'}], position: 0, duration: 6054 },
            { id: "eid737", tween: [ "style", "${_lifeguard-logo-216w}", "opacity", '1', { fromValue: '0'}], position: 3439, duration: 1500 },
            { id: "eid894", tween: [ "style", "${_About}", "right", '15.49%', { fromValue: '12.62%'}], position: 5191, duration: 282 },
            { id: "eid895", tween: [ "style", "${_About}", "right", '12.62%', { fromValue: '15.49%'}], position: 5473, duration: 27 },
            { id: "eid723", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 1887, duration: 363 },
            { id: "eid727", tween: [ "style", "${__3}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 348 },
            { id: "eid718", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 387 },
            { id: "eid62", tween: [ "style", "${_Agency}", "opacity", '0.75423728813559', { fromValue: '0'}], position: 4439, duration: 486 },
            { id: "eid432", tween: [ "style", "${_Symbol_6}", "opacity", '1', { fromValue: '0.000000'}], position: 3439, duration: 571, easing: "easeOutQuad" },
            { id: "eid806", tween: [ "style", "${_digital}", "height", '85.59px', { fromValue: '85.59px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid152", tween: [ "style", "${_Contact}", "opacity", '0', { fromValue: '0'}], position: 5537, duration: 0 },
            { id: "eid137", tween: [ "style", "${_Contact}", "opacity", '1', { fromValue: '0.000000'}], position: 5733, duration: 24 },
            { id: "eid899", tween: [ "style", "${_Symbol_6}", "bottom", '88.52%', { fromValue: '73.61%'}], position: 0, duration: 18443, easing: "easeOutQuad" },
            { id: "eid762", tween: [ "style", "${_lifeguard-logo-216w}", "width", '161px', { fromValue: '161px'}], position: 0, duration: 0 },
            { id: "eid845", tween: [ "style", "${_Social}", "font-size", '22px', { fromValue: '18px'}], position: 5809, duration: 941 },
            { id: "eid851", tween: [ "style", "${_Social}", "font-size", '15px', { fromValue: '22px'}], position: 6750, duration: 75 },
            { id: "eid903", tween: [ "style", "${_Social}", "font-size", '18px', { fromValue: '15px'}], position: 6825, duration: 11618, easing: "easeOutQuad" },
            { id: "eid892", tween: [ "style", "${_Contact}", "right", '15.49%', { fromValue: '12.62%'}], position: 5500, duration: 282 },
            { id: "eid893", tween: [ "style", "${_Contact}", "right", '12.62%', { fromValue: '15.49%'}], position: 5782, duration: 27 }         ]
      }
   }
},
"Symbol_1": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','300px','400px','auto','auto'],
      id: '_153411955-art-addiction-typewriter-right',
      boxShadow: ['',0,0,10,3,'rgba(138,132,132,0.65)'],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/153411955-art-addiction-typewriter-right.jpeg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__153411955-art-addiction-typewriter-right}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["subproperty", "boxShadow.color", 'rgba(138,132,132,0.65)'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.spread", '3px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '300px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Symbol_2": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','300px','400px','auto','auto'],
      id: '_153411951-art-addiction-typewriter-center',
      boxShadow: ['',0,0,10,3,'rgba(159,155,155,0.65)'],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/153411951-art-addiction-typewriter-center.jpeg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__153411951-art-addiction-typewriter-center}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["subproperty", "boxShadow.color", 'rgba(159,155,155,0.65)'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.spread", '3px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '300px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Symbol_3": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','300px','400px','auto','auto'],
      id: '_153411947-art-addiction-typewriter-left',
      boxShadow: ['',0,0,10,3,'rgba(143,138,138,0.65)'],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/153411947-art-addiction-typewriter-left.jpeg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${__153411947-art-addiction-typewriter-left}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.inset", ''],
            ["subproperty", "boxShadow.color", 'rgba(143,138,138,0.65)'],
            ["subproperty", "boxShadow.blur", '10px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.spread", '3px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetV", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '300px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"tower-240": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['6px','86px','auto','auto','auto','auto'],
      font: ['Courier, Courier New, monospace',22,'rgba(131,127,127,1.00)','900','none','normal'],
      text: 'DEVELOPMENT',
      id: 'dev',
      opacity: 1,
      align: 'left',
      type: 'text'
   },
   {
      rect: ['50px','61px','auto','auto','auto','auto'],
      font: ['Courier, Courier New, monospace',22,'rgba(131,127,127,1.00)','900','none','normal'],
      text: 'DESIGN',
      id: 'des',
      opacity: 1,
      align: 'left',
      type: 'text'
   },
   {
      rect: ['162px','6px','auto','auto','auto','auto'],
      font: ['Courier, Courier New, monospace',22,'rgba(131,127,127,1.00)','900','none','normal'],
      text: 'MARKETING',
      id: 'mktg',
      opacity: 1,
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_des}": [
            ["style", "top", '61px'],
            ["style", "opacity", '0'],
            ["style", "height", '36.92333984375px'],
            ["style", "font-weight", '900'],
            ["color", "color", 'rgba(131,127,127,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '38px'],
            ["style", "font-size", '22px']
         ],
         "${_mktg}": [
            ["style", "top", '36px'],
            ["style", "opacity", '0'],
            ["style", "height", '43.099975585938px'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["color", "color", 'rgba(131,127,127,1.00)'],
            ["style", "font-weight", '900'],
            ["style", "left", '19px'],
            ["style", "font-size", '22px']
         ],
         "${_dev}": [
            ["style", "top", '86px'],
            ["style", "opacity", '0'],
            ["style", "height", '36.916667938232px'],
            ["style", "font-weight", '900'],
            ["color", "color", 'rgba(131,127,127,1.00)'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '3px'],
            ["style", "font-size", '22px']
         ],
         "${symbolSelector}": [
            ["style", "height", '148.86666870117px'],
            ["style", "width", '148.86666870117px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         labels: {
            "Label 1": 0
         },
         timeline: [
         ]
      }
   }
},
"Symbol_4": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '148.86666870117px'],
            ["style", "max-width", '214px'],
            ["style", "width", '355px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"tower": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'IMG_20111231_161630BW-grey_copy',
      type: 'image',
      rect: ['-641px','-14px','300px','300px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/IMG_20111231_161630BW-grey%20copy.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '200px']
         ],
         "${_IMG_20111231_161630BW-grey_copy}": [
            ["style", "height", '200px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '200px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3454,
         autoPlay: true,
         timeline: [
            { id: "eid236", tween: [ "style", "${_IMG_20111231_161630BW-grey_copy}", "height", '300px', { fromValue: '200px'}], position: 0, duration: 3454 },
            { id: "eid230", tween: [ "style", "${_IMG_20111231_161630BW-grey_copy}", "left", '-641px', { fromValue: '0px'}], position: 0, duration: 3454 },
            { id: "eid238", tween: [ "style", "${_IMG_20111231_161630BW-grey_copy}", "width", '300px', { fromValue: '200px'}], position: 0, duration: 3454 },
            { id: "eid232", tween: [ "style", "${_IMG_20111231_161630BW-grey_copy}", "top", '-14px', { fromValue: '0px'}], position: 0, duration: 3454 }         ]
      }
   }
},
"Symbol_5": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'img-tower',
      type: 'image',
      rect: ['-901px','-15px','300px','300px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/IMG_20111231_161630BW-grey%20copy2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_img-tower}": [
            ["style", "height", '200px'],
            ["style", "top", '-14.57px'],
            ["style", "left", '-901.05px'],
            ["style", "width", '200px']
         ],
         "${symbolSelector}": [
            ["style", "height", '200px'],
            ["style", "width", '200px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Symbol_6": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      rect: ['77px','137px','255px','auto','auto','auto'],
      align: 'left',
      id: 'mktg',
      text: 'M a r k e t i n g',
      cursor: ['pointer'],
      font: ['Autour One',32,'rgba(153,148,148,1)','600','none','normal']
   },
   {
      type: 'text',
      rect: ['24px','119px','auto','auto','auto','auto'],
      align: 'left',
      id: 'dev',
      text: 'Development',
      cursor: ['pointer'],
      font: ['Autour One',25,'rgba(153,148,148,1)','600','none','normal']
   },
   {
      type: 'text',
      rect: ['45px','-10px','auto','auto','auto','auto'],
      align: 'left',
      id: 'des',
      text: 'Design',
      cursor: ['pointer'],
      font: ['Autour One',80,'rgba(153,148,148,1)','600','none','italic']
   },
   {
      rect: ['-47px','-15px','678px','210px','auto','auto'],
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mktg}": [
            ["color", "color", 'rgba(153,148,148,1)'],
            ["style", "opacity", '0.33'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '32px'],
            ["style", "top", '137.46px'],
            ["style", "font-weight", '600'],
            ["style", "font-family", 'Autour One'],
            ["style", "left", '-17.22px'],
            ["style", "width", '369.47413936054px']
         ],
         "${symbolSelector}": [
            ["style", "height", '210px'],
            ["style", "width", '496px']
         ],
         "${_Rectangle}": [
            ["style", "top", '-40.45px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '300px'],
            ["style", "opacity", '0'],
            ["style", "left", '-47.05px'],
            ["style", "width", '677.65362548828px']
         ],
         "${_des}": [
            ["color", "color", 'rgba(153,148,148,1)'],
            ["style", "opacity", '0.33'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '80px'],
            ["style", "top", '-10px'],
            ["style", "width", '519.66644287109px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Autour One'],
            ["style", "font-weight", '600'],
            ["style", "left", '-100.23px']
         ],
         "${_dev}": [
            ["color", "color", 'rgba(153,148,148,1)'],
            ["style", "font-weight", '600'],
            ["style", "left", '33.12px'],
            ["style", "font-size", '48px'],
            ["style", "top", '77px'],
            ["style", "width", '450.265625px'],
            ["style", "font-family", 'Autour One'],
            ["style", "cursor", 'pointer'],
            ["style", "opacity", '0.3']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid867", tween: [ "style", "${_dev}", "width", '450.265625px', { fromValue: '450.265625px'}], position: 0, duration: 0 },
            { id: "eid869", tween: [ "style", "${_des}", "width", '519.66644287109px', { fromValue: '519.66644287109px'}], position: 0, duration: 0 },
            { id: "eid689", tween: [ "style", "${_dev}", "top", '77px', { fromValue: '77px'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid865", tween: [ "style", "${_mktg}", "left", '-17.22px', { fromValue: '-17.22px'}], position: 0, duration: 0 },
            { id: "eid863", tween: [ "style", "${_dev}", "left", '33.12px', { fromValue: '33.12px'}], position: 0, duration: 0 },
            { id: "eid868", tween: [ "style", "${_des}", "left", '-100.23px', { fromValue: '-100.23px'}], position: 0, duration: 0 },
            { id: "eid866", tween: [ "style", "${_mktg}", "width", '369.47413936054px', { fromValue: '369.47413936054px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Srcreen": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-51px','-688px','173.1%','200.6%','auto','auto'],
      id: 'sm-pano-201202',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/sm-pano-201202.jpg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sm-pano-201202}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "background-size", [97.5,87.900001525879], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "height", '100%'],
            ["style", "opacity", '0'],
            ["style", "background-position", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '161px'],
            ["style", "width", '830px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid799", tween: [ "style", "${_sm-pano-201202}", "background-position", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid795", tween: [ "style", "${_sm-pano-201202}", "background-size", [97.5,87.900001525879], { valueTemplate: '@@0@@% @@1@@%', fromValue: [97.5,87.900001525879]}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid786", tween: [ "style", "${_sm-pano-201202}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid785", tween: [ "style", "${_sm-pano-201202}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid775", tween: [ "style", "${_sm-pano-201202}", "height", '100%', { fromValue: '100%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid782", tween: [ "style", "${_sm-pano-201202}", "width", '100%', { fromValue: '100%'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid801", tween: [ "style", "${_sm-pano-201202}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-30661889");
