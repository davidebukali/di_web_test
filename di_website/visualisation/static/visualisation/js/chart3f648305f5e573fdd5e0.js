(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1253:function(e,t,r){"use strict";var a=r(627),n=r(207).line,i=r(59),o=r(150).hovertemplateAttrs,s=r(150).texttemplateAttrs,l=r(1490),c=r(32).extendFlat,u=r(57);function f(e){return{marker:{color:c({},a.marker.color,{arrayOk:!1,editType:"style",description:"Sets the marker color of all "+e+" values."}),line:{color:c({},a.marker.line.color,{arrayOk:!1,editType:"style",description:"Sets the line color of all "+e+" values."}),width:c({},a.marker.line.width,{arrayOk:!1,editType:"style",description:"Sets the line width of all "+e+" values."}),editType:"style"},editType:"style"},editType:"style"}}e.exports={measure:{valType:"data_array",dflt:[],role:"info",editType:"calc",description:["An array containing types of values.","By default the values are considered as 'relative'.","However; it is possible to use 'total' to compute the sums.","Also 'absolute' could be applied to reset the computed total","or to declare an initial value where needed."].join(" ")},base:{valType:"number",dflt:null,arrayOk:!1,role:"info",editType:"calc",description:["Sets where the bar base is drawn (in position axis units)."].join(" ")},x:a.x,x0:a.x0,dx:a.dx,y:a.y,y0:a.y0,dy:a.dy,hovertext:a.hovertext,hovertemplate:o({},{keys:l.eventDataKeys}),hoverinfo:c({},i.hoverinfo,{flags:["name","x","y","text","initial","delta","final"]}),textinfo:{valType:"flaglist",flags:["label","text","initial","delta","final"],extras:["none"],role:"info",editType:"plot",arrayOk:!1,description:["Determines which trace information appear on the graph.","In the case of having multiple waterfalls, totals","are computed separately (per trace)."].join(" ")},texttemplate:s({editType:"plot"},{keys:l.eventDataKeys.concat(["label"])}),text:a.text,textposition:a.textposition,insidetextanchor:a.insidetextanchor,textangle:a.textangle,textfont:a.textfont,insidetextfont:a.insidetextfont,outsidetextfont:a.outsidetextfont,constraintext:a.constraintext,cliponaxis:a.cliponaxis,orientation:a.orientation,offset:a.offset,width:a.width,increasing:f("increasing"),decreasing:f("decreasing"),totals:f("intermediate sums and total"),connector:{line:{color:c({},n.color,{dflt:u.defaultLine}),width:c({},n.width,{editType:"plot"}),dash:n.dash,editType:"plot"},mode:{valType:"enumerated",values:["spanning","between"],dflt:"between",role:"info",editType:"plot",description:["Sets the shape of connector lines."].join(" ")},visible:{valType:"boolean",dflt:!0,role:"info",editType:"plot",description:["Determines if connector lines are drawn. "].join(" ")},editType:"plot"},offsetgroup:a.offsetgroup,alignmentgroup:a.alignmentgroup}},1254:function(e,t,r){"use strict";e.exports={waterfallmode:{valType:"enumerated",values:["group","overlay"],dflt:"group",role:"info",editType:"calc",description:["Determines how bars at the same location coordinate","are displayed on the graph.","With *group*, the bars are plotted next to one another","centered around the shared location.","With *overlay*, the bars are plotted over one another,","you might need to an *opacity* to see multiple bars."].join(" ")},waterfallgap:{valType:"number",min:0,max:1,role:"style",editType:"calc",description:["Sets the gap (in plot fraction) between bars of","adjacent location coordinates."].join(" ")},waterfallgroupgap:{valType:"number",min:0,max:1,dflt:0,role:"style",editType:"calc",description:["Sets the gap (in plot fraction) between bars of","the same location coordinate."].join(" ")}}},1255:function(e,t,r){"use strict";var a=r(6),n=r(645).handleGroupingDefaults,i=r(645).handleText,o=r(647),s=r(1253),l=r(57),c=r(768),u=c.INCREASING.COLOR,f=c.DECREASING.COLOR;function d(e,t,r){e(t+".marker.color",r),e(t+".marker.line.color",l.defaultLine),e(t+".marker.line.width")}e.exports={supplyDefaults:function(e,t,r,n){function l(r,n){return a.coerce(e,t,s,r,n)}if(o(e,t,n,l)){l("measure"),l("orientation",t.x&&!t.y?"h":"v"),l("base"),l("offset"),l("width"),l("text"),l("hovertext"),l("hovertemplate");var c=l("textposition");if(i(e,t,n,l,c,{moduleHasSelected:!1,moduleHasUnselected:!1,moduleHasConstrain:!0,moduleHasCliponaxis:!0,moduleHasTextangle:!0,moduleHasInsideanchor:!0}),"none"!==t.textposition&&(l("texttemplate"),t.texttemplate||l("textinfo")),d(l,"increasing",u),d(l,"decreasing",f),d(l,"totals","#4499FF"),l("connector.visible"))l("connector.mode"),l("connector.line.width")&&(l("connector.line.color"),l("connector.line.dash"))}else t.visible=!1},crossTraceDefaults:function(e,t){var r,i;function o(e){return a.coerce(i._input,i,s,e)}if("group"===t.waterfallmode)for(var l=0;l<e.length;l++)r=(i=e[l])._input,n(r,i,t,o)}}},1489:function(e,t,r){"use strict";e.exports={attributes:r(1253),layoutAttributes:r(1254),supplyDefaults:r(1255).supplyDefaults,crossTraceDefaults:r(1255).crossTraceDefaults,supplyLayoutDefaults:r(1491),calc:r(1492),crossTraceCalc:r(1493),plot:r(1494),style:r(1495).style,hoverPoints:r(1496),eventData:r(1497),selectPoints:r(741),moduleType:"trace",name:"waterfall",basePlotModule:r(626),categories:["bar-like","cartesian","svg","oriented","showLegend","zoomScale"],meta:{description:["Draws waterfall trace which is useful graph to displays the","contribution of various elements (either positive or negative)","in a bar chart. The data visualized by the span of the bars is","set in `y` if `orientation` is set th *v* (the default) and the","labels are set in `x`.","By setting `orientation` to *h*, the roles are interchanged."].join(" ")}}},1490:function(e,t,r){"use strict";e.exports={eventDataKeys:["initial","delta","final"]}},1491:function(e,t,r){"use strict";var a=r(6),n=r(1254);e.exports=function(e,t,r){var i=!1;function o(r,i){return a.coerce(e,t,n,r,i)}for(var s=0;s<r.length;s++){var l=r[s];if(l.visible&&"waterfall"===l.type){i=!0;break}}i&&(o("waterfallmode"),o("waterfallgap",.2),o("waterfallgroupgap"))}},1492:function(e,t,r){"use strict";var a=r(105),n=r(6).mergeArray,i=r(631),o=r(25).BADNUM;function s(e){return"a"===e||"absolute"===e}function l(e){return"t"===e||"total"===e}e.exports=function(e,t){var r,c,u=a.getFromId(e,t.xaxis||"x"),f=a.getFromId(e,t.yaxis||"y");"h"===t.orientation?(r=u.makeCalcdata(t,"x"),c=f.makeCalcdata(t,"y")):(r=f.makeCalcdata(t,"y"),c=u.makeCalcdata(t,"x"));for(var d,p=Math.min(c.length,r.length),h=new Array(p),v=0,x=!1,m=0;m<p;m++){var g=r[m]||0,y=!1;(r[m]!==o||l(t.measure[m])||s(t.measure[m]))&&m+1<p&&(r[m+1]!==o||l(t.measure[m+1])||s(t.measure[m+1]))&&(y=!0);var b=h[m]={i:m,p:c[m],s:g,rawS:g,cNext:y};s(t.measure[m])?(v=b.s,b.isSum=!0,b.dir="totals",b.s=v):l(t.measure[m])?(b.isSum=!0,b.dir="totals",b.s=v):(b.isSum=!1,b.dir=b.rawS<0?"decreasing":"increasing",d=b.s,b.s=v+d,v+=d),"totals"===b.dir&&(x=!0),t.ids&&(b.id=String(t.ids[m])),b.v=(t.base||0)+v}return h.length&&(h[0].hasTotals=x),n(t.text,h,"tx"),n(t.hovertext,h,"htx"),i(h,t),h}},1493:function(e,t,r){"use strict";var a=r(739).setGroupPositions;e.exports=function(e,t){var r,n,i=e._fullLayout,o=e._fullData,s=e.calcdata,l=t.xaxis,c=t.yaxis,u=[],f=[],d=[];for(n=0;n<o.length;n++){var p=o[n];!0===p.visible&&p.xaxis===l._id&&p.yaxis===c._id&&"waterfall"===p.type&&(r=s[n],"h"===p.orientation?d.push(r):f.push(r),u.push(r))}var h={mode:i.waterfallmode,norm:i.waterfallnorm,gap:i.waterfallgap,groupgap:i.waterfallgroupgap};for(a(e,l,c,f,h),a(e,c,l,d,h),n=0;n<u.length;n++){r=u[n];for(var v=0;v<r.length;v++){var x=r[v];!1===x.isSum&&(x.s0+=0===v?0:r[v-1].s),v+1<r.length&&(r[v].nextP0=r[v+1].p0,r[v].nextS0=r[v+1].s0)}}}},1494:function(e,t,r){"use strict";var a=r(24),n=r(6),i=r(106),o=r(25).BADNUM,s=r(721),l=r(637).clearMinTextSize;e.exports=function(e,t,r,c){var u=e._fullLayout;l("waterfall",u),s.plot(e,t,r,c,{mode:u.waterfallmode,norm:u.waterfallmode,gap:u.waterfallgap,groupgap:u.waterfallgroupgap}),function(e,t,r,s){var l=t.xaxis,c=t.yaxis;n.makeTraceGroups(s,r,"trace bars").each((function(r){var s=a.select(this),u=r[0].trace,f=n.ensureSingle(s,"g","lines");if(u.connector&&u.connector.visible){var d="h"===u.orientation,p=u.connector.mode,h=f.selectAll("g.line").data(n.identity);h.enter().append("g").classed("line",!0),h.exit().remove();var v=h.size();h.each((function(r,s){if(s===v-1||r.cNext){var u=function(e,t,r,a){var n=[],i=[],o=a?t:r,s=a?r:t;return n[0]=o.c2p(e.s0,!0),i[0]=s.c2p(e.p0,!0),n[1]=o.c2p(e.s1,!0),i[1]=s.c2p(e.p1,!0),n[2]=o.c2p(e.nextS0,!0),i[2]=s.c2p(e.nextP0,!0),a?[n,i]:[i,n]}(r,l,c,d),f=u[0],h=u[1],x="";f[0]!==o&&h[0]!==o&&f[1]!==o&&h[1]!==o&&("spanning"===p&&!r.isSum&&s>0&&(x+=d?"M"+f[0]+","+h[1]+"V"+h[0]:"M"+f[1]+","+h[0]+"H"+f[0]),"between"!==p&&(r.isSum||s<v-1)&&(x+=d?"M"+f[1]+","+h[0]+"V"+h[1]:"M"+f[0]+","+h[1]+"H"+f[1]),f[2]!==o&&h[2]!==o&&(x+=d?"M"+f[1]+","+h[1]+"V"+h[2]:"M"+f[1]+","+h[1]+"H"+f[2])),""===x&&(x="M0,0Z"),n.ensureSingle(a.select(this),"path").attr("d",x).call(i.setClipUrl,t.layerClipId,e)}}))}else f.remove()}))}(e,t,r,c)}},1495:function(e,t,r){"use strict";var a=r(24),n=r(106),i=r(57),o=r(115).DESELECTDIM,s=r(653),l=r(637).resizeText,c=s.styleTextPoints;e.exports={style:function(e,t,r){var s=r||a.select(e).selectAll("g.waterfalllayer").selectAll("g.trace");l(e,s,"waterfall"),s.style("opacity",(function(e){return e[0].trace.opacity})),s.each((function(t){var r=a.select(this),s=t[0].trace;r.selectAll(".point > path").each((function(e){if(!e.isBlank){var t=s[e.dir].marker;a.select(this).call(i.fill,t.color).call(i.stroke,t.line.color).call(n.dashLine,t.line.dash,t.line.width).style("opacity",s.selectedpoints&&!e.selected?o:1)}})),c(r,s,e),r.selectAll(".lines").each((function(){var e=s.connector.line;n.lineGroupStyle(a.select(this).selectAll("path"),e.width,e.color,e.dash)}))}))}}},1496:function(e,t,r){"use strict";var a=r(105).hoverLabelText,n=r(57).opacity,i=r(740).hoverOnBars,o=r(768),s=o.INCREASING.SYMBOL,l=o.DECREASING.SYMBOL;e.exports=function(e,t,r,o){var c=i(e,t,r,o);if(c){var u=c.cd,f=u[0].trace,d="h"===f.orientation,p=d?e.xa:e.ya,h=u[c.index],v=h.isSum?h.b+h.s:h.rawS;if(!h.isSum){c.initial=h.b+h.s-v,c.delta=v,c.final=c.initial+c.delta;var x=T(Math.abs(c.delta));c.deltaLabel=v<0?"("+x+")":x,c.finalLabel=T(c.final),c.initialLabel=T(c.initial)}var m=h.hi||f.hoverinfo,g=[];if(m&&"none"!==m&&"skip"!==m){var y="all"===m,b=m.split("+"),w=function(e){return y||-1!==b.indexOf(e)};h.isSum||(!w("final")||w(d?"x":"y")||g.push(c.finalLabel),w("delta")&&(v<0?g.push(c.deltaLabel+" "+l):g.push(c.deltaLabel+" "+s)),w("initial")&&g.push("Initial: "+c.initialLabel))}return g.length&&(c.extraText=g.join("<br>")),c.color=function(e,t){var r=e[t.dir].marker,a=r.color,i=r.line.color,o=r.line.width;if(n(a))return a;if(n(i)&&o)return i}(f,h),[c]}function T(e){return a(p,e)}}},1497:function(e,t,r){"use strict";e.exports=function(e,t){return e.x="xVal"in t?t.xVal:t.x,e.y="yVal"in t?t.yVal:t.y,"initial"in t&&(e.initial=t.initial),"delta"in t&&(e.delta=t.delta),"final"in t&&(e.final=t.final),t.xa&&(e.xaxis=t.xa),t.ya&&(e.yaxis=t.ya),e}},252:function(e,t,r){"use strict";e.exports=r(1489)},627:function(e,t,r){"use strict";var a=r(207),n=r(150).hovertemplateAttrs,i=r(150).texttemplateAttrs,o=r(111),s=r(46),l=r(657),c=r(32).extendFlat,u=s({editType:"calc",arrayOk:!0,colorEditType:"style",description:""}),f=c({},a.marker.line.width,{dflt:0}),d=c({width:f,editType:"calc"},o("marker.line")),p=c({line:d,editType:"calc"},o("marker"),{opacity:{valType:"number",arrayOk:!0,dflt:1,min:0,max:1,role:"style",editType:"style",description:"Sets the opacity of the bars."}});e.exports={x:a.x,x0:a.x0,dx:a.dx,y:a.y,y0:a.y0,dy:a.dy,text:a.text,texttemplate:i({editType:"plot"},{keys:l.eventDataKeys}),hovertext:a.hovertext,hovertemplate:n({},{keys:l.eventDataKeys}),textposition:{valType:"enumerated",role:"info",values:["inside","outside","auto","none"],dflt:"none",arrayOk:!0,editType:"calc",description:["Specifies the location of the `text`.","*inside* positions `text` inside, next to the bar end","(rotated and scaled if needed).","*outside* positions `text` outside, next to the bar end","(scaled if needed), unless there is another bar stacked on","this one, then the text gets pushed inside.","*auto* tries to position `text` inside the bar, but if","the bar is too small and no bar is stacked on this one","the text is moved outside."].join(" ")},insidetextanchor:{valType:"enumerated",values:["end","middle","start"],dflt:"end",role:"info",editType:"plot",description:["Determines if texts are kept at center or start/end points in `textposition` *inside* mode."].join(" ")},textangle:{valType:"angle",dflt:"auto",role:"info",editType:"plot",description:["Sets the angle of the tick labels with respect to the bar.","For example, a `tickangle` of -90 draws the tick labels","vertically. With *auto* the texts may automatically be","rotated to fit with the maximum size in bars."].join(" ")},textfont:c({},u,{description:"Sets the font used for `text`."}),insidetextfont:c({},u,{description:"Sets the font used for `text` lying inside the bar."}),outsidetextfont:c({},u,{description:"Sets the font used for `text` lying outside the bar."}),constraintext:{valType:"enumerated",values:["inside","outside","both","none"],role:"info",dflt:"both",editType:"calc",description:["Constrain the size of text inside or outside a bar to be no","larger than the bar itself."].join(" ")},cliponaxis:c({},a.cliponaxis,{description:["Determines whether the text nodes","are clipped about the subplot axes.","To show the text nodes above axis lines and tick labels,","make sure to set `xaxis.layer` and `yaxis.layer` to *below traces*."].join(" ")}),orientation:{valType:"enumerated",role:"info",values:["v","h"],editType:"calc+clearAxisTypes",description:["Sets the orientation of the bars.","With *v* (*h*), the value of the each bar spans","along the vertical (horizontal)."].join(" ")},base:{valType:"any",dflt:null,arrayOk:!0,role:"info",editType:"calc",description:["Sets where the bar base is drawn (in position axis units).","In *stack* or *relative* barmode,","traces that set *base* will be excluded","and drawn in *overlay* mode instead."].join(" ")},offset:{valType:"number",dflt:null,arrayOk:!0,role:"info",editType:"calc",description:["Shifts the position where the bar is drawn","(in position axis units).","In *group* barmode,","traces that set *offset* will be excluded","and drawn in *overlay* mode instead."].join(" ")},width:{valType:"number",dflt:null,min:0,arrayOk:!0,role:"info",editType:"calc",description:["Sets the bar width (in position axis units)."].join(" ")},marker:p,offsetgroup:{valType:"string",role:"info",dflt:"",editType:"calc",description:["Set several traces linked to the same position axis","or matching axes to the same","offsetgroup where bars of the same position coordinate will line up."].join(" ")},alignmentgroup:{valType:"string",role:"info",dflt:"",editType:"calc",description:["Set several traces linked to the same position axis","or matching axes to the same","alignmentgroup. This controls whether bars compute their positional","range dependently or independently."].join(" ")},selected:{marker:{opacity:a.selected.marker.opacity,color:a.selected.marker.color,editType:"style"},textfont:a.selected.textfont,editType:"style"},unselected:{marker:{opacity:a.unselected.marker.opacity,color:a.unselected.marker.color,editType:"style"},textfont:a.unselected.textfont,editType:"style"},r:a.r,t:a.t,_deprecated:{bardir:{valType:"enumerated",role:"info",editType:"calc",values:["v","h"],description:"Renamed to `orientation`."}}}},631:function(e,t,r){"use strict";var a=r(6);e.exports=function(e,t){a.isArrayOrTypedArray(t.selectedpoints)&&a.tagSelected(e,t)}},637:function(e,t,r){"use strict";var a=r(24),n=r(6);function i(e){return"_"+e+"Text_minsize"}e.exports={recordMinTextSize:function(e,t,r){if(r.uniformtext.mode){var a=i(e),n=r.uniformtext.minsize,o=t.scale*t.fontSize;t.hide=o<n,r[a]=r[a]||1/0,t.hide||(r[a]=Math.min(r[a],Math.max(o,n)))}},clearMinTextSize:function(e,t){t[i(e)]=void 0},resizeText:function(e,t,r){var i=e._fullLayout,o=i["_"+r+"Text_minsize"];if(o){var s,l="hide"===i.uniformtext.mode;switch(r){case"funnelarea":case"pie":case"sunburst":s="g.slice";break;case"treemap":s="g.slice, g.pathbar";break;default:s="g.points > g.point"}t.selectAll(s).each((function(e){var t=e.transform;t&&(t.scale=l&&t.hide?0:o/t.fontSize,a.select(this).select("text").attr("transform",n.getTextTransform(t)))}))}}}},645:function(e,t,r){"use strict";var a=r(6),n=r(57),i=r(23),o=r(647),s=r(692),l=r(110).getAxisGroup,c=r(627),u=a.coerceFont;function f(e,t,r,a){var n=t.orientation,i=t[{v:"x",h:"y"}[n]+"axis"],o=l(r,i)+n,s=r._alignmentOpts||{},c=a("alignmentgroup"),u=s[o];u||(u=s[o]={});var f=u[c];f?f.traces.push(t):f=u[c]={traces:[t],alignmentIndex:Object.keys(u).length,offsetGroups:{}};var d=a("offsetgroup"),p=f.offsetGroups,h=p[d];d&&(h||(h=p[d]={offsetIndex:Object.keys(p).length}),t._offsetIndex=h.offsetIndex)}function d(e,t,r,n,i,o){var s=!(!1===(o=o||{}).moduleHasSelected),l=!(!1===o.moduleHasUnselected),c=!(!1===o.moduleHasConstrain),f=!(!1===o.moduleHasCliponaxis),d=!(!1===o.moduleHasTextangle),p=!(!1===o.moduleHasInsideanchor),h=!!o.hasPathbar,v=Array.isArray(i)||"auto"===i,x=v||"inside"===i,m=v||"outside"===i;if(x||m){var g=u(n,"textfont",r.font),y=a.extendFlat({},g),b=!(e.textfont&&e.textfont.color);if(b&&delete y.color,u(n,"insidetextfont",y),h){var w=a.extendFlat({},g);b&&delete w.color,u(n,"pathbar.textfont",w)}m&&u(n,"outsidetextfont",g),s&&n("selected.textfont.color"),l&&n("unselected.textfont.color"),c&&n("constraintext"),f&&n("cliponaxis"),d&&n("textangle"),n("texttemplate")}x&&p&&n("insidetextanchor")}e.exports={supplyDefaults:function(e,t,r,l){function u(r,n){return a.coerce(e,t,c,r,n)}if(o(e,t,l,u)){u("orientation",t.x&&!t.y?"h":"v"),u("base"),u("offset"),u("width"),u("text"),u("hovertext"),u("hovertemplate");var f=u("textposition");d(e,t,l,u,f,{moduleHasSelected:!0,moduleHasUnselected:!0,moduleHasConstrain:!0,moduleHasCliponaxis:!0,moduleHasTextangle:!0,moduleHasInsideanchor:!0}),s(e,t,u,r,l);var p=(t.marker.line||{}).color,h=i.getComponentMethod("errorbars","supplyDefaults");h(e,t,p||n.defaultLine,{axis:"y"}),h(e,t,p||n.defaultLine,{axis:"x",inherit:"y"}),a.coerceSelectionMarkerOpacity(t,u)}else t.visible=!1},crossTraceDefaults:function(e,t){var r;function n(e){return a.coerce(r._input,r,c,e)}if("group"===t.barmode)for(var i=0;i<e.length;i++)"bar"===(r=e[i]).type&&(r._input,f(0,r,t,n))},handleGroupingDefaults:f,handleText:d}},647:function(e,t,r){"use strict";var a=r(6),n=r(23);e.exports=function(e,t,r,i){var o,s=i("x"),l=i("y");if(n.getComponentMethod("calendars","handleTraceDefaults")(e,t,["x","y"],r),s){var c=a.minRowLength(s);l?o=Math.min(c,a.minRowLength(l)):(o=c,i("y0"),i("dy"))}else{if(!l)return 0;o=a.minRowLength(l),i("x0"),i("dx")}return t._length=o,o}},653:function(e,t,r){"use strict";var a=r(24),n=r(57),i=r(106),o=r(6),s=r(23),l=r(637).resizeText,c=r(627),u=c.textfont,f=c.insidetextfont,d=c.outsidetextfont,p=r(667);function h(e,t,r){i.pointStyle(e.selectAll("path"),t,r),v(e,t,r)}function v(e,t,r){e.selectAll("text").each((function(e){var n=a.select(this),s=o.ensureUniformFontSize(r,x(n,e,t,r));i.font(n,s)}))}function x(e,t,r,a){var n=a._fullLayout.font,i=r.textfont;if(e.classed("bartext-inside")){var o=w(t,r);i=g(r,t.i,n,o)}else e.classed("bartext-outside")&&(i=y(r,t.i,n));return i}function m(e,t,r){return b(u,e.textfont,t,r)}function g(e,t,r,a){var i=m(e,t,r);return(void 0===e._input.textfont||void 0===e._input.textfont.color||Array.isArray(e.textfont.color)&&void 0===e.textfont.color[t])&&(i={color:n.contrast(a),family:i.family,size:i.size}),b(f,e.insidetextfont,t,i)}function y(e,t,r){var a=m(e,t,r);return b(d,e.outsidetextfont,t,a)}function b(e,t,r,a){t=t||{};var n=p.getValue(t.family,r),i=p.getValue(t.size,r),o=p.getValue(t.color,r);return{family:p.coerceString(e.family,n,a.family),size:p.coerceNumber(e.size,i,a.size),color:p.coerceColor(e.color,o,a.color)}}function w(e,t){return"waterfall"===t.type?t[e.dir].marker.color:e.mc||t.marker.color}e.exports={style:function(e){var t=a.select(e).selectAll("g.barlayer").selectAll("g.trace");l(e,t,"bar");var r=t.size(),n=e._fullLayout;t.style("opacity",(function(e){return e[0].trace.opacity})).each((function(e){("stack"===n.barmode&&r>1||0===n.bargap&&0===n.bargroupgap&&!e[0].trace.marker.line.width)&&a.select(this).attr("shape-rendering","crispEdges")})),t.selectAll("g.points").each((function(t){h(a.select(this),t[0].trace,e)})),s.getComponentMethod("errorbars","style")(t)},styleTextPoints:v,styleOnSelect:function(e,t,r){var n=t[0].trace;n.selectedpoints?function(e,t,r){i.selectedPointStyle(e.selectAll("path"),t),function(e,t,r){e.each((function(e){var n,s=a.select(this);if(e.selected){n=o.ensureUniformFontSize(r,x(s,e,t,r));var l=t.selected.textfont&&t.selected.textfont.color;l&&(n.color=l),i.font(s,n)}else i.selectedTextStyle(s,t)}))}(e.selectAll("text"),t,r)}(r,n,e):(h(r,n,e),s.getComponentMethod("errorbars","style")(r))},getInsideTextFont:g,getOutsideTextFont:y,getBarColor:w,resizeText:l}},657:function(e,t,r){"use strict";e.exports={TEXTPAD:3,eventDataKeys:["value","label"]}},667:function(e,t,r){"use strict";var a=r(12),n=r(60),i=r(6).isArrayOrTypedArray;t.coerceString=function(e,t,r){if("string"==typeof t){if(t||!e.noBlank)return t}else if(("number"==typeof t||!0===t)&&!e.strict)return String(t);return void 0!==r?r:e.dflt},t.coerceNumber=function(e,t,r){if(a(t)){t=+t;var n=e.min,i=e.max;if(!(void 0!==n&&t<n||void 0!==i&&t>i))return t}return void 0!==r?r:e.dflt},t.coerceColor=function(e,t,r){return n(t).isValid()?t:void 0!==r?r:e.dflt},t.coerceEnumerated=function(e,t,r){return e.coerceNumber&&(t=+t),-1!==e.values.indexOf(t)?t:void 0!==r?r:e.dflt},t.getValue=function(e,t){var r;return Array.isArray(e)?t<e.length&&(r=e[t]):r=e,r},t.getLineWidth=function(e,t){return 0<t.mlw?t.mlw:i(e.marker.line.width)?0:e.marker.line.width}},692:function(e,t,r){"use strict";var a=r(57),n=r(79).hasColorscale,i=r(151);e.exports=function(e,t,r,o,s){r("marker.color",o),n(e,"marker")&&i(e,t,s,r,{prefix:"marker.",cLetter:"c"}),r("marker.line.color",a.defaultLine),n(e,"marker.line")&&i(e,t,s,r,{prefix:"marker.line.",cLetter:"c"}),r("marker.line.width"),r("marker.opacity"),r("selected.marker.color"),r("unselected.marker.color")}},721:function(e,t,r){"use strict";var a=r(24),n=r(12),i=r(6),o=r(108),s=r(57),l=r(106),c=r(23),u=r(105).tickText,f=r(637),d=f.recordMinTextSize,p=f.clearMinTextSize,h=r(653),v=r(667),x=r(657),m=r(627),g=m.text,y=m.textposition,b=r(215).appendArrayPointValue,w=x.TEXTPAD;function T(e){return e.id}function k(e){if(e.ids)return T}function S(e,t){return e<t?1:-1}function M(e,t,r,a){var n;return!t.uniformtext.mode&&A(r)?(a&&(n=a()),e.transition().duration(r.duration).ease(r.easing).each("end",(function(){n&&n()})).each("interrupt",(function(){n&&n()}))):e}function A(e){return e&&e.duration>0}function L(e){return"auto"===e?0:e}function D(e,t){var r=Math.PI/180*t,a=Math.abs(Math.sin(r)),n=Math.abs(Math.cos(r));return{x:e.width*n+e.height*a,y:e.width*a+e.height*n}}function _(e,t,r,a,n,i){var o=!!i.isHorizontal,s=!!i.constrained,l=i.angle||0,c=i.anchor||"end",u="end"===c,f="start"===c,d=((i.leftToRight||0)+1)/2,p=1-d,h=n.width,v=n.height,x=Math.abs(t-e),m=Math.abs(a-r),g=x>2*w&&m>2*w?w:0;x-=2*g,m-=2*g;var y=L(l);"auto"!==l||h<=x&&v<=m||!(h>x||v>m)||(h>m||v>x)&&h<v==x<m||(y+=90);var b=D(n,y),T=1;s&&(T=Math.min(1,x/b.x,m/b.y));var k=n.left*p+n.right*d,M=(n.top+n.bottom)/2,A=(e+w)*p+(t-w)*d,_=(r+a)/2,O=0,C=0;if(f||u){var z=(o?b.x:b.y)/2,I=o?S(e,t):S(r,a);o?f?(A=e+I*g,O=-I*z):(A=t-I*g,O=I*z):f?(_=r+I*g,C=-I*z):(_=a-I*g,C=I*z)}return{textX:k,textY:M,targetX:A,targetY:_,anchorX:O,anchorY:C,scale:T,rotate:y}}e.exports={plot:function(e,t,r,f,x,m){var T=t.xaxis,O=t.yaxis,C=e._fullLayout;x||(x={mode:C.barmode,norm:C.barmode,gap:C.bargap,groupgap:C.bargroupgap},p("bar",C));var z=i.makeTraceGroups(f,r,"trace bars").each((function(r){var c=a.select(this),f=r[0].trace,p="waterfall"===f.type,z="funnel"===f.type,I="bar"===f.type||z,N=0;p&&f.connector.visible&&"between"===f.connector.mode&&(N=f.connector.line.width/2);var P="h"===f.orientation,B=A(x),V=i.ensureSingle(c,"g","points"),H=k(f),j=V.selectAll("g.point").data(i.identity,H);j.enter().append("g").classed("point",!0),j.exit().remove(),j.each((function(c,p){var k,A,z=a.select(this),V=function(e,t,r,a){var n=[],i=[],o=a?t:r,s=a?r:t;return n[0]=o.c2p(e.s0,!0),i[0]=s.c2p(e.p0,!0),n[1]=o.c2p(e.s1,!0),i[1]=s.c2p(e.p1,!0),a?[n,i]:[i,n]}(c,T,O,P),H=V[0][0],j=V[0][1],R=V[1][0],E=V[1][1],F=0==(P?j-H:E-R);if(F&&I&&v.getLineWidth(f,c)&&(F=!1),F||(F=!(n(H)&&n(j)&&n(R)&&n(E))),c.isBlank=F,F&&(P?j=H:E=R),N&&!F&&(P?(H-=S(H,j)*N,j+=S(H,j)*N):(R-=S(R,E)*N,E+=S(R,E)*N)),"waterfall"===f.type){if(!F){var G=f[c.dir].marker;k=G.line.width,A=G.color}}else k=v.getLineWidth(f,c),A=c.mc||f.marker.color;function U(e){var t=a.round(k/2%1,2);return 0===x.gap&&0===x.groupgap?a.round(Math.round(e)-t,2):e}if(!e._context.staticPlot){var W=s.opacity(A)<1||k>.01?U:function(e,t,r){return r&&e===t?e:Math.abs(e-t)>=2?U(e):e>t?Math.ceil(e):Math.floor(e)};H=W(H,j,P),j=W(j,H,P),R=W(R,E,!P),E=W(E,R,!P)}var Y=M(i.ensureSingle(z,"path"),C,x,m);if(Y.style("vector-effect","non-scaling-stroke").attr("d",isNaN((j-H)*(E-R))?"M0,0Z":"M"+H+","+R+"V"+E+"H"+j+"V"+R+"Z").call(l.setClipUrl,t.layerClipId,e),!C.uniformtext.mode&&B){var X=l.makePointStyleFns(f);l.singlePointStyle(c,Y,f,X,e)}!function(e,t,r,a,n,s,c,f,p,x,m){var T,k=t.xaxis,A=t.yaxis,O=e._fullLayout;function C(t,r,a){return i.ensureSingle(t,"text").text(r).attr({class:"bartext bartext-"+T,"text-anchor":"middle","data-notex":1}).call(l.font,a).call(o.convertToTspans,e)}var z=a[0].trace,I="h"===z.orientation,N=function(e,t,r,a,n){var o,s=t[0].trace;o=s.texttemplate?function(e,t,r,a,n){var o=t[0].trace,s=i.castOption(o,r,"texttemplate");if(!s)return"";var l,c,f,d,p="waterfall"===o.type,h="funnel"===o.type;"h"===o.orientation?(l="y",c=n,f="x",d=a):(l="x",c=a,f="y",d=n);function v(e){return u(d,+e,!0).text}var x=t[r],m={};m.label=x.p,m.labelLabel=m[l+"Label"]=(g=x.p,u(c,g,!0).text);var g;var y=i.castOption(o,x.i,"text");(0===y||y)&&(m.text=y);m.value=x.s,m.valueLabel=m[f+"Label"]=v(x.s);var w={};b(w,o,x.i),p&&(m.delta=+x.rawS||x.s,m.deltaLabel=v(m.delta),m.final=x.v,m.finalLabel=v(m.final),m.initial=m.final-m.delta,m.initialLabel=v(m.initial));h&&(m.value=x.s,m.valueLabel=v(m.value),m.percentInitial=x.begR,m.percentInitialLabel=i.formatPercent(x.begR),m.percentPrevious=x.difR,m.percentPreviousLabel=i.formatPercent(x.difR),m.percentTotal=x.sumR,m.percenTotalLabel=i.formatPercent(x.sumR));var T=i.castOption(o,x.i,"customdata");T&&(m.customdata=T);return i.texttemplateString(s,m,e._d3locale,w,m,o._meta||{})}(e,t,r,a,n):s.textinfo?function(e,t,r,a){var n=e[0].trace,o="h"===n.orientation,s="waterfall"===n.type,l="funnel"===n.type;function c(e){return u(o?r:a,+e,!0).text}var f,d=n.textinfo,p=e[t],h=d.split("+"),v=[],x=function(e){return-1!==h.indexOf(e)};x("label")&&v.push((m=e[t].p,u(o?a:r,m,!0).text));var m;x("text")&&(0===(f=i.castOption(n,p.i,"text"))||f)&&v.push(f);if(s){var g=+p.rawS||p.s,y=p.v,b=y-g;x("initial")&&v.push(c(b)),x("delta")&&v.push(c(g)),x("final")&&v.push(c(y))}if(l){x("value")&&v.push(c(p.s));var w=0;x("percent initial")&&w++,x("percent previous")&&w++,x("percent total")&&w++;var T=w>1;x("percent initial")&&(f=i.formatPercent(p.begR),T&&(f+=" of initial"),v.push(f)),x("percent previous")&&(f=i.formatPercent(p.difR),T&&(f+=" of previous"),v.push(f)),x("percent total")&&(f=i.formatPercent(p.sumR),T&&(f+=" of total"),v.push(f))}return v.join("<br>")}(t,r,a,n):v.getValue(s.text,r);return v.coerceString(g,o)}(O,a,n,k,A);T=function(e,t){var r=v.getValue(e.textposition,t);return v.coerceEnumerated(y,r)}(z,n);var P="stack"===x.mode||"relative"===x.mode,B=a[n],V=!P||B._outmost;if(!N||"none"===T||(B.isBlank||s===c||f===p)&&("auto"===T||"inside"===T))return void r.select("text").remove();var H=O.font,j=h.getBarColor(a[n],z),R=h.getInsideTextFont(z,n,H,j),E=h.getOutsideTextFont(z,n,H),F=r.datum();I?"log"===k.type&&F.s0<=0&&(s=k.range[0]<k.range[1]?0:k._length):"log"===A.type&&F.s0<=0&&(f=A.range[0]<A.range[1]?A._length:0);var G,U,W,Y,X,K=Math.abs(c-s)-2*w,Z=Math.abs(p-f)-2*w;"outside"===T&&(V||B.hasB||(T="inside"));if("auto"===T)if(V){T="inside",X=i.ensureUniformFontSize(e,R),G=C(r,N,X),U=l.bBox(G.node()),W=U.width,Y=U.height;var J=W<=K&&Y<=Z,q=W<=Z&&Y<=K,Q=I?K>=W*(Z/Y):Z>=Y*(K/W);W>0&&Y>0&&(J||q||Q)?T="inside":(T="outside",G.remove(),G=null)}else T="inside";if(!G){X=i.ensureUniformFontSize(e,"outside"===T?E:R);var $=(G=C(r,N,X)).attr("transform");if(G.attr("transform",""),U=l.bBox(G.node()),W=U.width,Y=U.height,G.attr("transform",$),W<=0||Y<=0)return void G.remove()}var ee,te,re=z.textangle;"outside"===T?(te="both"===z.constraintext||"outside"===z.constraintext,ee=function(e,t,r,a,n,i){var o,s=!!i.isHorizontal,l=!!i.constrained,c=i.angle||0,u=n.width,f=n.height,d=Math.abs(t-e),p=Math.abs(a-r);o=s?p>2*w?w:0:d>2*w?w:0;var h=1;l&&(h=s?Math.min(1,p/f):Math.min(1,d/u));var v=L(c),x=D(n,v),m=(s?x.x:x.y)/2,g=(n.left+n.right)/2,y=(n.top+n.bottom)/2,b=(e+t)/2,T=(r+a)/2,k=0,M=0,A=s?S(t,e):S(r,a);s?(b=t-A*o,k=A*m):(T=a+A*o,M=-A*m);return{textX:g,textY:y,targetX:b,targetY:T,anchorX:k,anchorY:M,scale:h,rotate:v}}(s,c,f,p,U,{isHorizontal:I,constrained:te,angle:re})):(te="both"===z.constraintext||"inside"===z.constraintext,ee=_(s,c,f,p,U,{isHorizontal:I,constrained:te,angle:re,anchor:z.insidetextanchor}));ee.fontSize=X.size,d(z.type,ee,O),B.transform=ee,M(G,O,x,m).attr("transform",i.getTextTransform(ee))}(e,t,z,r,p,H,j,R,E,x,m),t.layerClipId&&l.hideOutsideRangePoint(c,z.select("text"),T,O,f.xcalendar,f.ycalendar)}));var R=!1===f.cliponaxis;l.setClipUrl(c,R?null:t.layerClipId,e)}));c.getComponentMethod("errorbars","plot")(e,z,t,x)},toMoveInsideBar:_}},739:function(e,t,r){"use strict";var a=r(12),n=r(6).isArrayOrTypedArray,i=r(25).BADNUM,o=r(23),s=r(105),l=r(110).getAxisGroup,c=r(883);function u(e,t,r,o,u){if(o.length){var b,w,T,k;switch(function(e,t){var r,i;for(r=0;r<t.length;r++){var o,s=t[r],l=s[0].trace,c="funnel"===l.type?l._base:l.base,u="h"===l.orientation?l.xcalendar:l.ycalendar,f="category"===e.type||"multicategory"===e.type?function(){return null}:e.d2c;if(n(c)){for(i=0;i<Math.min(c.length,s.length);i++)o=f(c[i],0,u),a(o)?(s[i].b=+o,s[i].hasB=1):s[i].b=0;for(;i<s.length;i++)s[i].b=0}else{o=f(c,0,u);var d=a(o);for(o=d?o:0,i=0;i<s.length;i++)s[i].b=o,d&&(s[i].hasB=1)}}}(r,o),u.mode){case"overlay":f(t,r,o,u);break;case"group":for(b=[],w=[],T=0;T<o.length;T++)void 0===(k=o[T])[0].trace.offset?w.push(k):b.push(k);w.length&&function(e,t,r,a,n){var o=new c(a,{sepNegVal:!1,overlapNoMerge:!n.norm});(function(e,t,r,a){for(var n=e._fullLayout,i=r.positions,o=r.distinctPositions,s=r.minDiff,c=r.traces,u=c.length,f=i.length!==o.length,d=s*(1-a.gap),x=l(n,t._id)+c[0][0].trace.orientation,m=n._alignmentOpts[x]||{},g=0;g<u;g++){var y,b,w=c[g],T=w[0].trace,k=m[T.alignmentgroup]||{},S=Object.keys(k.offsetGroups||{}).length,M=(y=S?d/S:f?d/u:d)*(1-(a.groupgap||0));b=S?((2*T._offsetIndex+1-S)*y-M)/2:f?((2*g+1-u)*y-M)/2:-M/2;var A=w[0].t;A.barwidth=M,A.poffset=b,A.bargroupwidth=d,A.bardelta=s}r.binWidth=c[0][0].t.barwidth/100,p(r),h(t,r),v(t,r,f)})(e,t,o,n),function(e){for(var t=e.traces,r=0;r<t.length;r++){var a=t[r];if(void 0===a[0].trace.base)for(var n=new c([a],{sepNegVal:!0,overlapNoMerge:!0}),o=0;o<a.length;o++){var s=a[o];if(s.p!==i){var l=n.put(s.p,s.b+s.s);l&&(s.b=l)}}}}(o),n.norm?(m(o),g(r,o,n)):x(r,o)}(e,t,r,w,u),b.length&&f(t,r,b,u);break;case"stack":case"relative":for(b=[],w=[],T=0;T<o.length;T++)void 0===(k=o[T])[0].trace.base?w.push(k):b.push(k);w.length&&function(e,t,r,a,n){var o=new c(a,{sepNegVal:"relative"===n.mode,overlapNoMerge:!(n.norm||"stack"===n.mode||"relative"===n.mode)});d(t,o,n),function(e,t,r){var a,n,o,l,c,u,f=y(e),d=t.traces;for(l=0;l<d.length;l++)if(a=d[l],"funnel"===(n=a[0].trace).type)for(c=0;c<a.length;c++)(u=a[c]).s!==i&&t.put(u.p,-.5*u.s);for(l=0;l<d.length;l++){a=d[l],n=a[0].trace,o="funnel"===n.type;var p=[];for(c=0;c<a.length;c++)if((u=a[c]).s!==i){var h;h=o?u.s:u.s+u.b;var v=t.put(u.p,h),x=v+h;u.b=v,u[f]=x,r.norm||(p.push(x),u.hasB&&p.push(v))}r.norm||(n._extremes[e._id]=s.findExtremes(e,p,{tozero:!0,padded:!0}))}}(r,o,n);for(var l=0;l<a.length;l++)for(var u=a[l],f=0;f<u.length;f++){var p=u[f];if(p.s!==i)p.b+p.s===o.get(p.p,p.s)&&(p._outmost=!0)}n.norm&&g(r,o,n)}(0,t,r,w,u),b.length&&f(t,r,b,u)}!function(e,t){var r,n,i,o=y(t),s={},l=1/0,c=-1/0;for(r=0;r<e.length;r++)for(i=e[r],n=0;n<i.length;n++){var u=i[n].p;a(u)&&(l=Math.min(l,u),c=Math.max(c,u))}var f=1e4/(c-l),d=s.round=function(e){return String(Math.round(f*(e-l)))};for(r=0;r<e.length;r++){(i=e[r])[0].t.extents=s;var p=i[0].t.poffset,h=Array.isArray(p);for(n=0;n<i.length;n++){var v=i[n],x=v[o]-v.w/2;if(a(x)){var m=v[o]+v.w/2,g=d(v.p);s[g]?s[g]=[Math.min(x,s[g][0]),Math.max(m,s[g][1])]:s[g]=[x,m]}v.p0=v.p+(h?p[n]:p),v.p1=v.p0+v.w,v.s0=v.b,v.s1=v.s0+v.s}}}(o,t)}}function f(e,t,r,a){for(var n=0;n<r.length;n++){var i=r[n],o=new c([i],{sepNegVal:!1,overlapNoMerge:!a.norm});d(e,o,a),a.norm?(m(o),g(t,o,a)):x(t,o)}}function d(e,t,r){for(var a=t.minDiff,n=t.traces,i=a*(1-r.gap),o=i*(1-(r.groupgap||0)),s=-o/2,l=0;l<n.length;l++){var c=n[l][0].t;c.barwidth=o,c.poffset=s,c.bargroupwidth=i,c.bardelta=a}t.binWidth=n[0][0].t.barwidth/100,p(t),h(e,t),v(e,t)}function p(e){var t,r,i=e.traces;for(t=0;t<i.length;t++){var o,s=i[t],l=s[0],c=l.trace,u=l.t,f=c._offset||c.offset,d=u.poffset;if(n(f)){for(o=Array.prototype.slice.call(f,0,s.length),r=0;r<o.length;r++)a(o[r])||(o[r]=d);for(r=o.length;r<s.length;r++)o.push(d);u.poffset=o}else void 0!==f&&(u.poffset=f);var p=c._width||c.width,h=u.barwidth;if(n(p)){var v=Array.prototype.slice.call(p,0,s.length);for(r=0;r<v.length;r++)a(v[r])||(v[r]=h);for(r=v.length;r<s.length;r++)v.push(h);if(u.barwidth=v,void 0===f){for(o=[],r=0;r<s.length;r++)o.push(d+(h-v[r])/2);u.poffset=o}}else void 0!==p&&(u.barwidth=p,void 0===f&&(u.poffset=d+(h-p)/2))}}function h(e,t){for(var r=t.traces,a=y(e),n=0;n<r.length;n++)for(var i=r[n],o=i[0].t,s=o.poffset,l=Array.isArray(s),c=o.barwidth,u=Array.isArray(c),f=0;f<i.length;f++){var d=i[f],p=d.w=u?c[f]:c;d[a]=d.p+(l?s[f]:s)+p/2}}function v(e,t,r){var a=t.traces,n=t.minDiff/2;s.minDtick(e,t.minDiff,t.distinctPositions[0],r);for(var i=0;i<a.length;i++){var o,l,c,u,f=a[i],d=f[0],p=d.trace,h=[];for(u=0;u<f.length;u++)l=(o=f[u]).p-n,c=o.p+n,h.push(l,c);if(p.width||p.offset){var v=d.t,x=v.poffset,m=v.barwidth,g=Array.isArray(x),y=Array.isArray(m);for(u=0;u<f.length;u++){o=f[u];var b=g?x[u]:x,w=y?m[u]:m;c=(l=o.p+b)+w,h.push(l,c)}}p._extremes[e._id]=s.findExtremes(e,h,{padded:!1})}}function x(e,t){for(var r=t.traces,a=y(e),n=0;n<r.length;n++){for(var i=r[n],o=i[0].trace,l=[],c=!1,u=0;u<i.length;u++){var f=i[u],d=f.b,p=d+f.s;f[a]=p,l.push(p),f.hasB&&l.push(d),f.hasB&&f.b||(c=!0)}o._extremes[e._id]=s.findExtremes(e,l,{tozero:c,padded:!0})}}function m(e){for(var t=e.traces,r=0;r<t.length;r++)for(var a=t[r],n=0;n<a.length;n++){var o=a[n];o.s!==i&&e.put(o.p,o.b+o.s)}}function g(e,t,r){var n=t.traces,o=y(e),l="fraction"===r.norm?1:100,c=l/1e9,u=e.l2c(e.c2l(0)),f="stack"===r.mode?l:u;function d(t){return a(e.c2l(t))&&(t<u-c||t>f+c||!a(u))}for(var p=0;p<n.length;p++){for(var h=n[p],v=h[0].trace,x=[],m=!1,g=!1,b=0;b<h.length;b++){var w=h[b];if(w.s!==i){var T=Math.abs(l/t.get(w.p,w.s));w.b*=T,w.s*=T;var k=w.b,S=k+w.s;w[o]=S,x.push(S),g=g||d(S),w.hasB&&(x.push(k),g=g||d(k)),w.hasB&&w.b||(m=!0)}}v._extremes[e._id]=s.findExtremes(e,x,{tozero:m,padded:g})}}function y(e){return e._id.charAt(0)}e.exports={crossTraceCalc:function(e,t){for(var r=t.xaxis,a=t.yaxis,n=e._fullLayout,i=e._fullData,s=e.calcdata,l=[],c=[],f=0;f<i.length;f++){var d=i[f];if(!0===d.visible&&o.traceIs(d,"bar")&&d.xaxis===r._id&&d.yaxis===a._id&&("h"===d.orientation?l.push(s[f]):c.push(s[f]),d._computePh))for(var p=e.calcdata[f],h=0;h<p.length;h++)"function"==typeof p[h].ph0&&(p[h].ph0=p[h].ph0()),"function"==typeof p[h].ph1&&(p[h].ph1=p[h].ph1())}var v={mode:n.barmode,norm:n.barnorm,gap:n.bargap,groupgap:n.bargroupgap};u(e,r,a,c,v),u(e,a,r,l,v)},setGroupPositions:u}},740:function(e,t,r){"use strict";var a=r(623),n=r(23),i=r(57),o=r(6).fillText,s=r(667).getLineWidth,l=r(105).hoverLabelText,c=r(25).BADNUM;function u(e,t,r,n){var i,s,u,f,d,p,h,v=e.cd,x=v[0].trace,m=v[0].t,g="closest"===n,y="waterfall"===x.type,b=e.maxHoverDistance;function w(e){return e[u]-e.w/2}function T(e){return e[u]+e.w/2}var k=g?w:function(e){return Math.min(w(e),e.p-m.bardelta/2)},S=g?T:function(e){return Math.max(T(e),e.p+m.bardelta/2)};function M(e,t){return a.inbox(e-i,t-i,b+Math.min(1,Math.abs(t-e)/h)-1)}function A(e){return M(k(e),S(e))}function L(e){var t=s,r=e.b,n=e[f];if(y){var i=Math.abs(e.rawS)||0;t>0?n+=i:t<0&&(n-=i)}return a.inbox(r-t,n-t,b+(n-t)/(n-r)-1)}"h"===x.orientation?(i=r,s=t,u="y",f="x",d=L,p=A):(i=t,s=r,u="x",f="y",p=L,d=A);var D=e[u+"a"],_=e[f+"a"];h=Math.abs(D.r2c(D.range[1])-D.r2c(D.range[0]));var O=a.getDistanceFunction(n,d,p,(function(e){return(d(e)+p(e))/2}));if(a.getClosest(v,O,e),!1!==e.index&&v[e.index].p!==c){g||(k=function(e){return Math.min(w(e),e.p-m.bargroupwidth/2)},S=function(e){return Math.max(T(e),e.p+m.bargroupwidth/2)});var C=v[e.index],z=x.base?C.b+C.s:C.s;e[f+"0"]=e[f+"1"]=_.c2p(C[f],!0),e[f+"LabelVal"]=z;var I=m.extents[m.extents.round(C.p)];return e[u+"0"]=D.c2p(g?k(C):I[0],!0),e[u+"1"]=D.c2p(g?S(C):I[1],!0),e[u+"LabelVal"]=C.p,e.labelLabel=l(D,e[u+"LabelVal"]),e.valueLabel=l(_,e[f+"LabelVal"]),e.spikeDistance=(L(C)+function(e){return M(w(e),T(e))}(C))/2-b,e[u+"Spike"]=D.c2p(C.p,!0),o(C,x,e),e.hovertemplate=x.hovertemplate,e}}function f(e,t){var r=t.mcc||e.marker.color,a=t.mlcc||e.marker.line.color,n=s(e,t);return i.opacity(r)?r:i.opacity(a)&&n?a:void 0}e.exports={hoverPoints:function(e,t,r,a){var i=u(e,t,r,a);if(i){var o=i.cd,s=o[0].trace,l=o[i.index];return i.color=f(s,l),n.getComponentMethod("errorbars","hoverInfo")(l,s,i),[i]}},hoverOnBars:u,getTraceColor:f}},741:function(e,t,r){"use strict";function a(e,t,r,a,n){var i=t.c2p(a?e.s0:e.p0,!0),o=t.c2p(a?e.s1:e.p1,!0),s=r.c2p(a?e.p0:e.s0,!0),l=r.c2p(a?e.p1:e.s1,!0);return n?[(i+o)/2,(s+l)/2]:a?[o,(s+l)/2]:[(i+o)/2,l]}e.exports=function(e,t){var r,n=e.cd,i=e.xaxis,o=e.yaxis,s=n[0].trace,l="funnel"===s.type,c="h"===s.orientation,u=[];if(!1===t)for(r=0;r<n.length;r++)n[r].selected=0;else for(r=0;r<n.length;r++){var f=n[r],d="ct"in f?f.ct:a(f,i,o,c,l);t.contains(d,!1,r,e)?(u.push({pointNumber:r,x:i.c2d(f.x),y:o.c2d(f.y)}),f.selected=1):f.selected=0}return u}},768:function(e,t,r){"use strict";e.exports={INCREASING:{COLOR:"#3D9970",SYMBOL:"▲"},DECREASING:{COLOR:"#FF4136",SYMBOL:"▼"}}},883:function(e,t,r){"use strict";e.exports=i;var a=r(6).distinctVals,n=r(25).BADNUM;function i(e,t){this.traces=e,this.sepNegVal=t.sepNegVal,this.overlapNoMerge=t.overlapNoMerge;for(var r=1/0,i=[],o=0;o<e.length;o++){for(var s=e[o],l=0;l<s.length;l++){var c=s[l];c.p!==n&&i.push(c.p)}s[0]&&s[0].width1&&(r=Math.min(s[0].width1,r))}this.positions=i;var u=a(i);this.distinctPositions=u.vals,1===u.vals.length&&r!==1/0?this.minDiff=r:this.minDiff=Math.min(u.minDiff,r),this.binWidth=this.minDiff,this.bins={}}i.prototype.put=function(e,t){var r=this.getLabel(e,t),a=this.bins[r]||0;return this.bins[r]=a+t,a},i.prototype.get=function(e,t){var r=this.getLabel(e,t);return this.bins[r]||0},i.prototype.getLabel=function(e,t){return(t<0&&this.sepNegVal?"v":"^")+(this.overlapNoMerge?e:Math.round(e/this.binWidth))}}}]);