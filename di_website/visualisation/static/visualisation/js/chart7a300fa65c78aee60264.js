(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1028:function(e,t,o){"use strict";var n=o(383),r=o(380),a=o(686),i=o(878).getTopojsonFeatures,c=o(472).findExtremes,l=o(879).style;e.exports={calcGeoJSON:function(e,t){for(var o=e[0].trace,n=t[o.geo],r=n._subplot,l=o.locationmode,s=o._length,p="geojson-id"===l?a.extractTraceFeature(e):i(o,r.topojson),d=[],u=[],h=0;h<s;h++){var f=e[h],y="geojson-id"===l?f.fOut:a.locationToFeature(l,f.loc,p);if(y){f.geojson=y,f.ct=y.properties.ct,f._polygons=a.feature2polygons(y);var m=a.computeBbox(y);d.push(m[0],m[2]),u.push(m[1],m[3])}else f.geojson=null}if("geojson"===n.fitbounds&&"geojson-id"===l){var x=a.computeBbox(a.getTraceGeojson(o));d=[x[0],x[2]],u=[x[1],x[3]]}var v={padded:!0};o._extremes.lon=c(n.lonaxis._ax,d,v),o._extremes.lat=c(n.lataxis._ax,u,v)},plot:function(e,t,o){var a=t.layers.backplot.select(".choroplethlayer");r.makeTraceGroups(a,o,"trace choropleth").each((function(t){var o=n.select(this).selectAll("path.choroplethlocation").data(r.identity);o.enter().append("path").classed("choroplethlocation",!0),o.exit().remove(),l(e,t)}))}}},1147:function(e,t,o){"use strict";e.exports=o(1188)},1188:function(e,t,o){"use strict";e.exports={attributes:o(685),supplyDefaults:o(1189),colorbar:o(524),calc:o(909),calcGeoJSON:o(1028).calcGeoJSON,plot:o(1028).plot,style:o(879).style,styleOnSelect:o(879).styleOnSelect,hoverPoints:o(910),eventData:o(911),selectPoints:o(912),moduleType:"trace",name:"choropleth",basePlotModule:o(1029),categories:["geo","noOpacity","showLegend"],meta:{description:["The data that describes the choropleth value-to-color mapping","is set in `z`.","The geographic locations corresponding to each value in `z`","are set in `locations`."].join(" ")}}},1189:function(e,t,o){"use strict";var n=o(380),r=o(403),a=o(685);e.exports=function(e,t,o,i){function c(o,r){return n.coerce(e,t,a,o,r)}var l=c("locations"),s=c("z");if(l&&l.length&&n.isArrayOrTypedArray(s)&&s.length){t._length=Math.min(l.length,s.length);var p,d=c("geojson");("string"==typeof d&&""!==d||n.isPlainObject(d))&&(p="geojson-id"),"geojson-id"===c("locationmode",p)&&c("featureidkey"),c("text"),c("hovertext"),c("hovertemplate"),c("marker.line.width")&&c("marker.line.color"),c("marker.opacity"),r(e,t,i,c,{prefix:"",cLetter:"z"}),n.coerceSelectionMarkerOpacity(t,c)}else t.visible=!1}},524:function(e,t,o){"use strict";e.exports={min:"zmin",max:"zmax"}},685:function(e,t,o){"use strict";var n=o(391).hovertemplateAttrs,r=o(585),a=o(396),i=o(399),c=o(408).defaultLine,l=o(387).extendFlat,s=r.marker.line;e.exports=l({locations:{valType:"data_array",editType:"calc",description:["Sets the coordinates via location IDs or names.","See `locationmode` for more info."].join(" ")},locationmode:r.locationmode,z:{valType:"data_array",editType:"calc",description:"Sets the color values."},geojson:l({},r.geojson,{description:["Sets optional GeoJSON data associated with this trace.","If not given, the features on the base map are used.","It can be set as a valid GeoJSON object or as a URL string.","Note that we only accept GeoJSONs of type *FeatureCollection* or *Feature*","with geometries of type *Polygon* or *MultiPolygon*."].join(" ")}),featureidkey:r.featureidkey,text:l({},r.text,{description:"Sets the text elements associated with each location."}),hovertext:l({},r.hovertext,{description:"Same as `text`."}),marker:{line:{color:l({},s.color,{dflt:c}),width:l({},s.width,{dflt:1}),editType:"calc"},opacity:{valType:"number",arrayOk:!0,min:0,max:1,dflt:1,role:"style",editType:"style",description:"Sets the opacity of the locations."},editType:"calc"},selected:{marker:{opacity:r.selected.marker.opacity,editType:"plot"},editType:"plot"},unselected:{marker:{opacity:r.unselected.marker.opacity,editType:"plot"},editType:"plot"},hoverinfo:l({},i.hoverinfo,{editType:"calc",flags:["location","z","text","name"]}),hovertemplate:n(),showlegend:l({},i.showlegend,{dflt:!1})},a("",{cLetter:"z",editTypeOverride:"calc"}))},879:function(e,t,o){"use strict";var n=o(383),r=o(382),a=o(386),i=o(402);function c(e,t){var o=t[0].trace,c=t[0].node3.selectAll(".choroplethlocation"),l=o.marker||{},s=l.line||{},p=i.makeColorScaleFuncFromTrace(o);c.each((function(e){n.select(this).attr("fill",p(e.z)).call(r.stroke,e.mlc||s.color).call(a.dashLine,"",e.mlw||s.width||0).style("opacity",l.opacity)})),a.selectedPointStyle(c,o,e)}e.exports={style:function(e,t){t&&c(e,t)},styleOnSelect:function(e,t){var o=t[0].node3,n=t[0].trace;n.selectedpoints?a.selectedPointStyle(o.selectAll(".choroplethlocation"),n,e):c(e,t)}}},909:function(e,t,o){"use strict";var n=o(385),r=o(390).BADNUM,a=o(421),i=o(414),c=o(416);function l(e){return e&&"string"==typeof e}e.exports=function(e,t){var o,s=t._length,p=new Array(s);o=t.geojson?function(e){return l(e)||n(e)}:l;for(var d=0;d<s;d++){var u=p[d]={},h=t.locations[d],f=t.z[d];o(h)&&n(f)?(u.loc=h,u.z=f):(u.loc=null,u.z=r),u.index=d}return i(p,t),a(e,t,{vals:t.z,containerStr:"",cLetter:"z"}),c(p,t),p}},910:function(e,t,o){"use strict";var n=o(384),r=o(685),a=o(380).fillText;e.exports=function(e,t,o){var i,c,l,s,p=e.cd,d=p[0].trace,u=e.subplot;for(c=0;c<p.length;c++)if(s=!1,(i=p[c])._polygons){for(l=0;l<i._polygons.length;l++)i._polygons[l].contains([t,o])&&(s=!s),i._polygons[l].contains([t+360,o])&&(s=!s);if(s)break}if(s&&i)return e.x0=e.x1=e.xa.c2p(i.ct),e.y0=e.y1=e.ya.c2p(i.ct),e.index=i.index,e.location=i.loc,e.z=i.z,e.zLabel=n.tickText(u.mockAxis,u.mockAxis.c2l(i.z),"hover").text,e.hovertemplate=i.hovertemplate,function(e,t,o){if(t.hovertemplate)return;var n=o.hi||t.hoverinfo,i=String(o.loc),c="all"===n?r.hoverinfo.flags:n.split("+"),l=-1!==c.indexOf("name"),s=-1!==c.indexOf("location"),p=-1!==c.indexOf("z"),d=-1!==c.indexOf("text"),u=[];!l&&s?e.nameOverride=i:(l&&(e.nameOverride=t.name),s&&u.push(i));p&&u.push(e.zLabel);d&&a(o,t,u);e.extraText=u.join("<br>")}(e,d,i,u.mockAxis),[e]}},911:function(e,t,o){"use strict";e.exports=function(e,t,o,n,r){e.location=t.location,e.z=t.z;var a=n[r];return a.fIn&&a.fIn.properties&&(e.properties=a.fIn.properties),e.ct=a.ct,e}},912:function(e,t,o){"use strict";e.exports=function(e,t){var o,n,r,a,i,c=e.cd,l=e.xaxis,s=e.yaxis,p=[];if(!1===t)for(o=0;o<c.length;o++)c[o].selected=0;else for(o=0;o<c.length;o++)(r=(n=c[o]).ct)&&(a=l.c2p(r),i=s.c2p(r),t.contains([a,i],null,o,e)?(p.push({pointNumber:o,lon:r[0],lat:r[1]}),n.selected=1):n.selected=0);return p}}}]);