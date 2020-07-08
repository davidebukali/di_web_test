(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1097:function(t,e,i){"use strict";t.exports={solid:[[],0],dot:[[.5,1],200],dash:[[.5,1],50],longdash:[[.5,1],10],dashdot:[[.5,.625,.875,1],50],longdashdot:[[.5,.7,.8,1],10]}},1098:function(t,e,i){"use strict";var r=i(398),s=i(396),a=i(391).hovertemplateAttrs,o=i(391).texttemplateAttrs,n=i(399),h=i(1097),l=i(904),c=i(387).extendFlat,p=i(394).overrideAll,u=r.line,f=r.marker,d=f.line,v=c({width:u.width,dash:{valType:"enumerated",values:Object.keys(h),dflt:"solid",role:"style",description:"Sets the dash style of the lines."}},s("line"));function g(t){return{show:{valType:"boolean",role:"info",dflt:!1,description:["Sets whether or not projections are shown along the",t,"axis."].join(" ")},opacity:{valType:"number",role:"style",min:0,max:1,dflt:1,description:"Sets the projection color."},scale:{valType:"number",role:"style",min:0,max:10,dflt:2/3,description:["Sets the scale factor determining the size of the","projection marker points."].join(" ")}}}var y=t.exports=p({x:r.x,y:r.y,z:{valType:"data_array",description:"Sets the z coordinates."},text:c({},r.text,{description:["Sets text elements associated with each (x,y,z) triplet.","If a single string, the same string appears over","all the data points.","If an array of string, the items are mapped in order to the","this trace's (x,y,z) coordinates.","If trace `hoverinfo` contains a *text* flag and *hovertext* is not set,","these elements will be seen in the hover labels."].join(" ")}),texttemplate:o({},{}),hovertext:c({},r.hovertext,{description:["Sets text elements associated with each (x,y,z) triplet.","If a single string, the same string appears over","all the data points.","If an array of string, the items are mapped in order to the","this trace's (x,y,z) coordinates.","To be seen, trace `hoverinfo` must contain a *text* flag."].join(" ")}),hovertemplate:a(),mode:c({},r.mode,{dflt:"lines+markers"}),surfaceaxis:{valType:"enumerated",role:"info",values:[-1,0,1,2],dflt:-1,description:["If *-1*, the scatter points are not fill with a surface","If *0*, *1*, *2*, the scatter points are filled with","a Delaunay surface about the x, y, z respectively."].join(" ")},surfacecolor:{valType:"color",role:"style",description:"Sets the surface fill color."},projection:{x:g("x"),y:g("y"),z:g("z")},connectgaps:r.connectgaps,line:v,marker:c({symbol:{valType:"enumerated",values:Object.keys(l),role:"style",dflt:"circle",arrayOk:!0,description:"Sets the marker symbol type."},size:c({},f.size,{dflt:8}),sizeref:f.sizeref,sizemin:f.sizemin,sizemode:f.sizemode,opacity:c({},f.opacity,{arrayOk:!1,description:["Sets the marker opacity.","Note that the marker opacity for scatter3d traces","must be a scalar value for performance reasons.","To set a blending opacity value","(i.e. which is not transparent), set *marker.color*","to an rgba color and use its alpha channel."].join(" ")}),colorbar:f.colorbar,line:c({width:c({},d.width,{arrayOk:!1})},s("marker.line"))},s("marker")),textposition:c({},r.textposition,{dflt:"top center"}),textfont:{color:r.textfont.color,size:r.textfont.size,family:c({},r.textfont.family,{arrayOk:!1})},hoverinfo:c({},n.hoverinfo)},"calc","nested");y.x.editType=y.y.editType=y.z.editType="calc+clearAxisTypes"},1169:function(t,e,i){"use strict";t.exports=i(1398)},1398:function(t,e,i){"use strict";t.exports={plot:i(1399),attributes:i(1098),markerSymbols:i(904),supplyDefaults:i(1427),colorbar:[{container:"marker",min:"cmin",max:"cmax"},{container:"line",min:"cmin",max:"cmax"}],calc:i(916),moduleType:"trace",name:"scatter3d",basePlotModule:i(559),categories:["gl3d","symbols","showLegend","scatter-like"],meta:{hrName:"scatter_3d",description:["The data visualized as scatter point or lines in 3D dimension","is set in `x`, `y`, `z`.","Text (appearing either on the chart or on hover only) is via `text`.","Bubble charts are achieved by setting `marker.size` and/or `marker.color`","Projections are achieved via `projection`.","Surface fills are achieved via `surfaceaxis`."].join(" ")}}},1399:function(t,e,i){"use strict";var r=i(1400),s=i(1402),a=i(1406),o=i(753),n=i(862),h=i(380),l=i(453),c=i(489).formatColor,p=i(847),u=i(1097),f=i(904),d=i(384),v=i(473).appendArrayPointValue,g=i(1426);function y(t,e){this.scene=t,this.uid=e,this.linePlot=null,this.scatterPlot=null,this.errorBars=null,this.textMarkers=null,this.delaunayMesh=null,this.color=null,this.mode="",this.dataPoints=[],this.axesBounds=[[-1/0,-1/0,-1/0],[1/0,1/0,1/0]],this.textLabels=null,this.data=null}var x=y.prototype;function m(t){return null==t?0:t.indexOf("left")>-1?-1:t.indexOf("right")>-1?1:0}function A(t){return null==t?0:t.indexOf("top")>-1?-1:t.indexOf("bottom")>-1?1:0}function b(t,e){return e(4*t)}function k(t){return f[t]}function S(t,e,i,r,s){var a=null;if(h.isArrayOrTypedArray(t)){a=[];for(var o=0;o<e;o++)void 0===t[o]?a[o]=r:a[o]=i(t[o],s)}else a=i(t,h.identity);return a}function w(t,e){var i,r,s,a,o,n,u=[],f=t.fullSceneLayout,y=t.dataScale,x=f.xaxis,w=f.yaxis,j=f.zaxis,z=e.marker,P=e.line,M=e.x||[],B=e.y||[],L=e.z||[],C=M.length,O=e.xcalendar,T=e.ycalendar,W=e.zcalendar;for(o=0;o<C;o++)i=x.d2l(M[o],0,O)*y[0],r=w.d2l(B[o],0,T)*y[1],s=j.d2l(L[o],0,W)*y[2],u[o]=[i,r,s];if(Array.isArray(e.text))n=e.text;else if(void 0!==e.text)for(n=new Array(C),o=0;o<C;o++)n[o]=e.text;function I(t,e){var i=f[t];return d.tickText(i,i.d2l(e),!0).text}var _=e.texttemplate;if(_){var N=t.fullLayout._d3locale,R=Array.isArray(_),F=R?Math.min(_.length,C):C,E=R?function(t){return _[t]}:function(){return _};for(n=new Array(F),o=0;o<F;o++){var H={x:M[o],y:B[o],z:L[o]},D={xLabel:I("xaxis",M[o]),yLabel:I("yaxis",B[o]),zLabel:I("zaxis",L[o])},G={};v(G,e,o);var q=e._meta||{};n[o]=h.texttemplateString(E(o),D,N,G,H,q)}}if(a={position:u,mode:e.mode,text:n},"line"in e&&(a.lineColor=c(P,1,C),a.lineWidth=P.width,a.lineDashes=P.dash),"marker"in e){var V=p(e);a.scatterColor=c(z,1,C),a.scatterSize=S(z.size,C,b,20,V),a.scatterMarker=S(z.symbol,C,k,"●"),a.scatterLineWidth=z.line.width,a.scatterLineColor=c(z.line,1,C),a.scatterAngle=0}"textposition"in e&&(a.textOffset=function(t){var e=[0,0];if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=[0,0],t[i]&&(e[i][0]=m(t[i]),e[i][1]=A(t[i]));else e[0]=m(t),e[1]=A(t);return e}(e.textposition),a.textColor=c(e.textfont,1,C),a.textSize=S(e.textfont.size,C,h.identity,12),a.textFont=e.textfont.family,a.textAngle=0);var U=["x","y","z"];for(a.project=[!1,!1,!1],a.projectScale=[1,1,1],a.projectOpacity=[1,1,1],o=0;o<3;++o){var J=e.projection[U[o]];(a.project[o]=J.show)&&(a.projectOpacity[o]=J.opacity,a.projectScale[o]=J.scale)}a.errorBounds=g(e,y,f);var Y=function(t){for(var e=[0,0,0],i=[[0,0,0],[0,0,0],[0,0,0]],r=[1,1,1],s=0;s<3;s++){var a=t[s];a&&!1!==a.copy_zstyle&&!1!==t[2].visible&&(a=t[2]),a&&a.visible&&(e[s]=a.width/2,i[s]=l(a.color),r[s]=a.thickness)}return{capSize:e,color:i,lineWidth:r}}([e.error_x,e.error_y,e.error_z]);return a.errorColor=Y.color,a.errorLineWidth=Y.lineWidth,a.errorCapSize=Y.capSize,a.delaunayAxis=e.surfaceaxis,a.delaunayColor=l(e.surfacecolor),a}function j(t){if(Array.isArray(t)){var e=t[0];return Array.isArray(e)&&(t=e),"rgb("+t.slice(0,3).map((function(t){return Math.round(255*t)}))+")"}return null}x.handlePick=function(t){if(t.object&&(t.object===this.linePlot||t.object===this.delaunayMesh||t.object===this.textMarkers||t.object===this.scatterPlot)){var e=t.index=t.data.index;return t.object.highlight&&t.object.highlight(null),this.scatterPlot&&(t.object=this.scatterPlot,this.scatterPlot.highlight(t.data)),t.textLabel="",this.textLabels&&(Array.isArray(this.textLabels)?(this.textLabels[e]||0===this.textLabels[e])&&(t.textLabel=this.textLabels[e]):t.textLabel=this.textLabels),t.traceCoordinate=[this.data.x[e],this.data.y[e],this.data.z[e]],!0}},x.update=function(t){var e,i,h,l,c=this.scene.glplot.gl,p=u.solid;this.data=t;var f=w(this.scene,t);"mode"in f&&(this.mode=f.mode),"lineDashes"in f&&f.lineDashes in u&&(p=u[f.lineDashes]),this.color=j(f.scatterColor)||j(f.lineColor),this.dataPoints=f.position,e={gl:this.scene.glplot.gl,position:f.position,color:f.lineColor,lineWidth:f.lineWidth||1,dashes:p[0],dashScale:p[1],opacity:t.opacity,connectGaps:t.connectgaps},-1!==this.mode.indexOf("lines")?this.linePlot?this.linePlot.update(e):(this.linePlot=r(e),this.linePlot._trace=this,this.scene.glplot.add(this.linePlot)):this.linePlot&&(this.scene.glplot.remove(this.linePlot),this.linePlot.dispose(),this.linePlot=null);var d=t.opacity;if(t.marker&&t.marker.opacity&&(d*=t.marker.opacity),i={gl:this.scene.glplot.gl,position:f.position,color:f.scatterColor,size:f.scatterSize,glyph:f.scatterMarker,opacity:d,orthographic:!0,lineWidth:f.scatterLineWidth,lineColor:f.scatterLineColor,project:f.project,projectScale:f.projectScale,projectOpacity:f.projectOpacity},-1!==this.mode.indexOf("markers")?this.scatterPlot?this.scatterPlot.update(i):(this.scatterPlot=s(i),this.scatterPlot._trace=this,this.scatterPlot.highlightScale=1,this.scene.glplot.add(this.scatterPlot)):this.scatterPlot&&(this.scene.glplot.remove(this.scatterPlot),this.scatterPlot.dispose(),this.scatterPlot=null),l={gl:this.scene.glplot.gl,position:f.position,glyph:f.text,color:f.textColor,size:f.textSize,angle:f.textAngle,alignment:f.textOffset,font:f.textFont,orthographic:!0,lineWidth:0,project:!1,opacity:t.opacity},this.textLabels=t.hovertext||t.text,-1!==this.mode.indexOf("text")?this.textMarkers?this.textMarkers.update(l):(this.textMarkers=s(l),this.textMarkers._trace=this,this.textMarkers.highlightScale=1,this.scene.glplot.add(this.textMarkers)):this.textMarkers&&(this.scene.glplot.remove(this.textMarkers),this.textMarkers.dispose(),this.textMarkers=null),h={gl:this.scene.glplot.gl,position:f.position,color:f.errorColor,error:f.errorBounds,lineWidth:f.errorLineWidth,capSize:f.errorCapSize,opacity:t.opacity},this.errorBars?f.errorBounds?this.errorBars.update(h):(this.scene.glplot.remove(this.errorBars),this.errorBars.dispose(),this.errorBars=null):f.errorBounds&&(this.errorBars=a(h),this.errorBars._trace=this,this.scene.glplot.add(this.errorBars)),f.delaunayAxis>=0){var v=function(t,e,i){var r,s=(i+1)%3,a=(i+2)%3,o=[],h=[];for(r=0;r<t.length;++r){var l=t[r];!isNaN(l[s])&&isFinite(l[s])&&!isNaN(l[a])&&isFinite(l[a])&&(o.push([l[s],l[a]]),h.push(r))}var c=n(o);for(r=0;r<c.length;++r)for(var p=c[r],u=0;u<p.length;++u)p[u]=h[p[u]];return{positions:t,cells:c,meshColor:e}}(f.position,f.delaunayColor,f.delaunayAxis);v.opacity=t.opacity,this.delaunayMesh?this.delaunayMesh.update(v):(v.gl=c,this.delaunayMesh=o(v),this.delaunayMesh._trace=this,this.scene.glplot.add(this.delaunayMesh))}else this.delaunayMesh&&(this.scene.glplot.remove(this.delaunayMesh),this.delaunayMesh.dispose(),this.delaunayMesh=null)},x.dispose=function(){this.linePlot&&(this.scene.glplot.remove(this.linePlot),this.linePlot.dispose()),this.scatterPlot&&(this.scene.glplot.remove(this.scatterPlot),this.scatterPlot.dispose()),this.errorBars&&(this.scene.glplot.remove(this.errorBars),this.errorBars.dispose()),this.textMarkers&&(this.scene.glplot.remove(this.textMarkers),this.textMarkers.dispose()),this.delaunayMesh&&(this.scene.glplot.remove(this.delaunayMesh),this.delaunayMesh.dispose())},t.exports=function(t,e){var i=new y(t,e.uid);return i.update(e),i}},1400:function(t,e,i){"use strict";t.exports=function(t){var e=t.gl||t.scene&&t.scene.gl,i=p(e);i.attributes.position.location=0,i.attributes.nextPosition.location=1,i.attributes.arcLength.location=2,i.attributes.lineWidth.location=3,i.attributes.color.location=4;var o=u(e);o.attributes.position.location=0,o.attributes.nextPosition.location=1,o.attributes.arcLength.location=2,o.attributes.lineWidth.location=3,o.attributes.color.location=4;for(var n=r(e),h=s(e,[{buffer:n,size:3,offset:0,stride:48},{buffer:n,size:3,offset:12,stride:48},{buffer:n,size:1,offset:24,stride:48},{buffer:n,size:1,offset:28,stride:48},{buffer:n,size:4,offset:32,stride:48}]),c=l(new Array(1024),[256,1,4]),f=0;f<1024;++f)c.data[f]=255;var d=a(e,c);d.wrap=e.REPEAT;var v=new y(e,i,o,n,h,d);return v.update(t),v};var r=i(413),s=i(477),a=i(542),o=new Uint8Array(4),n=new Float32Array(o.buffer);var h=i(425),l=i(433),c=i(1401),p=c.createShader,u=c.createPickShader,f=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function d(t,e){for(var i=0,r=0;r<3;++r){var s=t[r]-e[r];i+=s*s}return Math.sqrt(i)}function v(t){for(var e=[[-1e6,-1e6,-1e6],[1e6,1e6,1e6]],i=0;i<3;++i)e[0][i]=Math.max(t[0][i],e[0][i]),e[1][i]=Math.min(t[1][i],e[1][i]);return e}function g(t,e,i,r){this.arcLength=t,this.position=e,this.index=i,this.dataCoordinate=r}function y(t,e,i,r,s,a){this.gl=t,this.shader=e,this.pickShader=i,this.buffer=r,this.vao=s,this.clipBounds=[[-1/0,-1/0,-1/0],[1/0,1/0,1/0]],this.points=[],this.arcLength=[],this.vertexCount=0,this.bounds=[[0,0,0],[0,0,0]],this.pickId=0,this.lineWidth=1,this.texture=a,this.dashScale=1,this.opacity=1,this.hasAlpha=!1,this.dirty=!0,this.pixelRatio=1}var x=y.prototype;x.isTransparent=function(){return this.hasAlpha},x.isOpaque=function(){return!this.hasAlpha},x.pickSlots=1,x.setPickBase=function(t){this.pickId=t},x.drawTransparent=x.draw=function(t){if(this.vertexCount){var e=this.gl,i=this.shader,r=this.vao;i.bind(),i.uniforms={model:t.model||f,view:t.view||f,projection:t.projection||f,clipBounds:v(this.clipBounds),dashTexture:this.texture.bind(),dashScale:this.dashScale/this.arcLength[this.arcLength.length-1],opacity:this.opacity,screenShape:[e.drawingBufferWidth,e.drawingBufferHeight],pixelRatio:this.pixelRatio},r.bind(),r.draw(e.TRIANGLE_STRIP,this.vertexCount),r.unbind()}},x.drawPick=function(t){if(this.vertexCount){var e=this.gl,i=this.pickShader,r=this.vao;i.bind(),i.uniforms={model:t.model||f,view:t.view||f,projection:t.projection||f,pickId:this.pickId,clipBounds:v(this.clipBounds),screenShape:[e.drawingBufferWidth,e.drawingBufferHeight],pixelRatio:this.pixelRatio},r.bind(),r.draw(e.TRIANGLE_STRIP,this.vertexCount),r.unbind()}},x.update=function(t){var e,i;this.dirty=!0;var r=!!t.connectGaps;"dashScale"in t&&(this.dashScale=t.dashScale),this.hasAlpha=!1,"opacity"in t&&(this.opacity=+t.opacity,this.opacity<1&&(this.hasAlpha=!0));var s=[],a=[],o=[],n=0,c=0,p=[[1/0,1/0,1/0],[-1/0,-1/0,-1/0]],u=t.position||t.positions;if(u){var f=t.color||t.colors||[0,0,0,1],v=t.lineWidth||1,g=!1;t:for(e=1;e<u.length;++e){var y,x,m,A=u[e-1],b=u[e];for(a.push(n),o.push(A.slice()),i=0;i<3;++i){if(isNaN(A[i])||isNaN(b[i])||!isFinite(A[i])||!isFinite(b[i])){if(!r&&s.length>0){for(var k=0;k<24;++k)s.push(s[s.length-12]);c+=2,g=!0}continue t}p[0][i]=Math.min(p[0][i],A[i],b[i]),p[1][i]=Math.max(p[1][i],A[i],b[i])}Array.isArray(f[0])?(y=f.length>e-1?f[e-1]:f.length>0?f[f.length-1]:[0,0,0,1],x=f.length>e?f[e]:f.length>0?f[f.length-1]:[0,0,0,1]):y=x=f,3===y.length&&(y=[y[0],y[1],y[2],1]),3===x.length&&(x=[x[0],x[1],x[2],1]),!this.hasAlpha&&y[3]<1&&(this.hasAlpha=!0),m=Array.isArray(v)?v.length>e-1?v[e-1]:v.length>0?v[v.length-1]:[0,0,0,1]:v;var S=n;if(n+=d(A,b),g){for(i=0;i<2;++i)s.push(A[0],A[1],A[2],b[0],b[1],b[2],S,m,y[0],y[1],y[2],y[3]);c+=2,g=!1}s.push(A[0],A[1],A[2],b[0],b[1],b[2],S,m,y[0],y[1],y[2],y[3],A[0],A[1],A[2],b[0],b[1],b[2],S,-m,y[0],y[1],y[2],y[3],b[0],b[1],b[2],A[0],A[1],A[2],n,-m,x[0],x[1],x[2],x[3],b[0],b[1],b[2],A[0],A[1],A[2],n,m,x[0],x[1],x[2],x[3]),c+=4}}if(this.buffer.update(s),a.push(n),o.push(u[u.length-1].slice()),this.bounds=p,this.vertexCount=c,this.points=o,this.arcLength=a,"dashes"in t){var w=t.dashes.slice();for(w.unshift(0),e=1;e<w.length;++e)w[e]=w[e-1]+w[e];var j=l(new Array(1024),[256,1,4]);for(e=0;e<256;++e){for(i=0;i<4;++i)j.set(e,0,i,0);1&h.le(w,w[w.length-1]*e/255)?j.set(e,0,0,0):j.set(e,0,0,255)}this.texture.setPixels(j)}},x.dispose=function(){this.shader.dispose(),this.vao.dispose(),this.buffer.dispose()},x.pick=function(t){if(!t)return null;if(t.id!==this.pickId)return null;var e=function(t,e,i,r){return o[0]=r,o[1]=i,o[2]=e,o[3]=t,n[0]}(t.value[0],t.value[1],t.value[2],0),i=h.le(this.arcLength,e);if(i<0)return null;if(i===this.arcLength.length-1)return new g(this.arcLength[this.arcLength.length-1],this.points[this.points.length-1].slice(),i);for(var r=this.points[i],s=this.points[Math.min(i+1,this.points.length-1)],a=(e-this.arcLength[i])/(this.arcLength[i+1]-this.arcLength[i]),l=1-a,c=[0,0,0],p=0;p<3;++p)c[p]=l*r[p]+a*s[p];var u=Math.min(a<.5?i:i+1,this.points.length-1);return new g(e,c,u,this.points[u])}},1401:function(t,e,i){var r=i(415),s=i(420),a=r("../shaders/vertex.glsl"),o=r("../shaders/fragment.glsl"),n=r("../shaders/pick.glsl"),h=[{name:"position",type:"vec3"},{name:"nextPosition",type:"vec3"},{name:"arcLength",type:"float"},{name:"lineWidth",type:"float"},{name:"color",type:"vec4"}];e.createShader=function(t){return s(t,a,o,null,h)},e.createPickShader=function(t){return s(t,a,n,null,h)}},1402:function(t,e,i){"use strict";var r=i(1515),s=i(413),a=i(477),o=i(404),n=i(560),h=i(1403),l=i(1404),c=i(1405),p=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function u(t,e){var i=t[0],r=t[1],s=t[2],a=t[3];return t[0]=e[0]*i+e[4]*r+e[8]*s+e[12]*a,t[1]=e[1]*i+e[5]*r+e[9]*s+e[13]*a,t[2]=e[2]*i+e[6]*r+e[10]*s+e[14]*a,t[3]=e[3]*i+e[7]*r+e[11]*s+e[15]*a,t}function f(t,e,i,r){return u(r,r),u(r,r),u(r,r)}function d(t,e){this.index=t,this.dataCoordinate=this.position=e}function v(t){return!0===t||t>1?1:t}function g(t,e,i,r,s,a,o,n,h,l,c,p){this.gl=t,this.pixelRatio=1,this.shader=e,this.orthoShader=i,this.projectShader=r,this.pointBuffer=s,this.colorBuffer=a,this.glyphBuffer=o,this.idBuffer=n,this.vao=h,this.vertexCount=0,this.lineVertexCount=0,this.opacity=1,this.hasAlpha=!1,this.lineWidth=0,this.projectScale=[2/3,2/3,2/3],this.projectOpacity=[1,1,1],this.projectHasAlpha=!1,this.pickId=0,this.pickPerspectiveShader=l,this.pickOrthoShader=c,this.pickProjectShader=p,this.points=[],this._selectResult=new d(0,[0,0,0]),this.useOrtho=!0,this.bounds=[[1/0,1/0,1/0],[-1/0,-1/0,-1/0]],this.axesProject=[!0,!0,!0],this.axesBounds=[[-1/0,-1/0,-1/0],[1/0,1/0,1/0]],this.highlightId=[1,1,1,1],this.highlightScale=2,this.clipBounds=[[-1/0,-1/0,-1/0],[1/0,1/0,1/0]],this.dirty=!0}t.exports=function(t){var e=t.gl,i=h.createPerspective(e),r=h.createOrtho(e),o=h.createProject(e),n=h.createPickPerspective(e),l=h.createPickOrtho(e),c=h.createPickProject(e),p=s(e),u=s(e),f=s(e),d=s(e),v=a(e,[{buffer:p,size:3,type:e.FLOAT},{buffer:u,size:4,type:e.FLOAT},{buffer:f,size:2,type:e.FLOAT},{buffer:d,size:4,type:e.UNSIGNED_BYTE,normalized:!0}]),y=new g(e,i,r,o,p,u,f,d,v,n,l,c);return y.update(t),y};var y=g.prototype;y.pickSlots=1,y.setPickBase=function(t){this.pickId=t},y.isTransparent=function(){if(this.hasAlpha)return!0;for(var t=0;t<3;++t)if(this.axesProject[t]&&this.projectHasAlpha)return!0;return!1},y.isOpaque=function(){if(!this.hasAlpha)return!0;for(var t=0;t<3;++t)if(this.axesProject[t]&&!this.projectHasAlpha)return!0;return!1};var x=[0,0],m=[0,0,0],A=[0,0,0],b=[0,0,0,1],k=[0,0,0,1],S=p.slice(),w=[0,0,0],j=[[0,0,0],[0,0,0]];function z(t){return t[0]=t[1]=t[2]=0,t}function P(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=1,t}function M(t,e,i,r){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[i]=r,t}function B(t,e,i,r){var s,a=e.axesProject,o=e.gl,h=t.uniforms,l=i.model||p,c=i.view||p,u=i.projection||p,d=e.axesBounds,v=function(t){for(var e=j,i=0;i<2;++i)for(var r=0;r<3;++r)e[i][r]=Math.max(Math.min(t[i][r],1e8),-1e8);return e}(e.clipBounds);s=e.axes&&e.axes.lastCubeProps?e.axes.lastCubeProps.axis:[1,1,1],x[0]=2/o.drawingBufferWidth,x[1]=2/o.drawingBufferHeight,t.bind(),h.view=c,h.projection=u,h.screenSize=x,h.highlightId=e.highlightId,h.highlightScale=e.highlightScale,h.clipBounds=v,h.pickGroup=e.pickId/255,h.pixelRatio=r;for(var g=0;g<3;++g)if(a[g]){h.scale=e.projectScale[g],h.opacity=e.projectOpacity[g];for(var y=S,B=0;B<16;++B)y[B]=0;for(B=0;B<4;++B)y[5*B]=1;y[5*g]=0,s[g]<0?y[12+g]=d[0][g]:y[12+g]=d[1][g],n(y,l,y),h.model=y;var L=(g+1)%3,C=(g+2)%3,O=z(m),T=z(A);O[L]=1,T[C]=1;var W=f(0,0,0,P(b,O)),I=f(0,0,0,P(k,T));if(Math.abs(W[1])>Math.abs(I[1])){var _=W;W=I,I=_,_=O,O=T,T=_;var N=L;L=C,C=N}W[0]<0&&(O[L]=-1),I[1]>0&&(T[C]=-1);var R=0,F=0;for(B=0;B<4;++B)R+=Math.pow(l[4*L+B],2),F+=Math.pow(l[4*C+B],2);O[L]/=Math.sqrt(R),T[C]/=Math.sqrt(F),h.axes[0]=O,h.axes[1]=T,h.fragClipBounds[0]=M(w,v[0],g,-1e8),h.fragClipBounds[1]=M(w,v[1],g,1e8),e.vao.bind(),e.vao.draw(o.TRIANGLES,e.vertexCount),e.lineWidth>0&&(o.lineWidth(e.lineWidth*r),e.vao.draw(o.LINES,e.lineVertexCount,e.vertexCount)),e.vao.unbind()}}var L=[[-1e8,-1e8,-1e8],[1e8,1e8,1e8]];function C(t,e,i,r,s,a,o){var n=i.gl;if((a===i.projectHasAlpha||o)&&B(e,i,r,s),a===i.hasAlpha||o){t.bind();var h=t.uniforms;h.model=r.model||p,h.view=r.view||p,h.projection=r.projection||p,x[0]=2/n.drawingBufferWidth,x[1]=2/n.drawingBufferHeight,h.screenSize=x,h.highlightId=i.highlightId,h.highlightScale=i.highlightScale,h.fragClipBounds=L,h.clipBounds=i.axes.bounds,h.opacity=i.opacity,h.pickGroup=i.pickId/255,h.pixelRatio=s,i.vao.bind(),i.vao.draw(n.TRIANGLES,i.vertexCount),i.lineWidth>0&&(n.lineWidth(i.lineWidth*s),i.vao.draw(n.LINES,i.lineVertexCount,i.vertexCount)),i.vao.unbind()}}function O(t,e,i,s){var a;a=Array.isArray(t)?e<t.length?t[e]:void 0:t,a=c(a);var o=!0;r(a)&&(a="▼",o=!1);var n=l(a,i,s);return{mesh:n[0],lines:n[1],bounds:n[2],visible:o}}y.draw=function(t){C(this.useOrtho?this.orthoShader:this.shader,this.projectShader,this,t,this.pixelRatio,!1,!1)},y.drawTransparent=function(t){C(this.useOrtho?this.orthoShader:this.shader,this.projectShader,this,t,this.pixelRatio,!0,!1)},y.drawPick=function(t){C(this.useOrtho?this.pickOrthoShader:this.pickPerspectiveShader,this.pickProjectShader,this,t,1,!0,!0)},y.pick=function(t){if(!t)return null;if(t.id!==this.pickId)return null;var e=t.value[2]+(t.value[1]<<8)+(t.value[0]<<16);if(e>=this.pointCount||e<0)return null;var i=this.points[e],r=this._selectResult;r.index=e;for(var s=0;s<3;++s)r.position[s]=r.dataCoordinate[s]=i[s];return r},y.highlight=function(t){if(t){var e=t.index,i=255&e,r=e>>8&255,s=e>>16&255;this.highlightId=[i/255,r/255,s/255,0]}else this.highlightId=[1,1,1,1]},y.update=function(t){if("perspective"in(t=t||{})&&(this.useOrtho=!t.perspective),"orthographic"in t&&(this.useOrtho=!!t.orthographic),"lineWidth"in t&&(this.lineWidth=t.lineWidth),"project"in t)if(Array.isArray(t.project))this.axesProject=t.project;else{var e=!!t.project;this.axesProject=[e,e,e]}if("projectScale"in t)if(Array.isArray(t.projectScale))this.projectScale=t.projectScale.slice();else{var i=+t.projectScale;this.projectScale=[i,i,i]}if(this.projectHasAlpha=!1,"projectOpacity"in t){if(Array.isArray(t.projectOpacity))this.projectOpacity=t.projectOpacity.slice();else{i=+t.projectOpacity;this.projectOpacity=[i,i,i]}for(var r=0;r<3;++r)this.projectOpacity[r]=v(this.projectOpacity[r]),this.projectOpacity[r]<1&&(this.projectHasAlpha=!0)}this.hasAlpha=!1,"opacity"in t&&(this.opacity=v(t.opacity),this.opacity<1&&(this.hasAlpha=!0)),this.dirty=!0;var s,a,n=t.position,h=t.font||"normal",l=t.alignment||[0,0];if(2===l.length)s=l[0],a=l[1];else{s=[],a=[];for(r=0;r<l.length;++r)s[r]=l[r][0],a[r]=l[r][1]}var c=[1/0,1/0,1/0],p=[-1/0,-1/0,-1/0],u=t.glyph,f=t.color,d=t.size,g=t.angle,y=t.lineColor,x=-1,m=0,A=0,b=0;if(n.length){b=n.length;t:for(r=0;r<b;++r){for(var k=n[r],S=0;S<3;++S)if(isNaN(k[S])||!isFinite(k[S]))continue t;var w=(F=O(u,r,h,this.pixelRatio)).mesh,j=F.lines,z=F.bounds;m+=3*w.cells.length,A+=2*j.edges.length}}var P=m+A,M=o.mallocFloat(3*P),B=o.mallocFloat(4*P),L=o.mallocFloat(2*P),C=o.mallocUint32(P);if(P>0){var T=0,W=m,I=[0,0,0,1],_=[0,0,0,1],N=Array.isArray(f)&&Array.isArray(f[0]),R=Array.isArray(y)&&Array.isArray(y[0]);t:for(r=0;r<b;++r){x+=1;for(k=n[r],S=0;S<3;++S){if(isNaN(k[S])||!isFinite(k[S]))continue t;p[S]=Math.max(p[S],k[S]),c[S]=Math.min(c[S],k[S])}w=(F=O(u,r,h,this.pixelRatio)).mesh,j=F.lines,z=F.bounds;var F,E=F.visible;if(E)if(Array.isArray(f)){if(3===(H=N?r<f.length?f[r]:[0,0,0,0]:f).length){for(S=0;S<3;++S)I[S]=H[S];I[3]=1}else if(4===H.length){for(S=0;S<4;++S)I[S]=H[S];!this.hasAlpha&&H[3]<1&&(this.hasAlpha=!0)}}else I[0]=I[1]=I[2]=0,I[3]=1;else I=[1,1,1,0];if(E)if(Array.isArray(y)){var H;if(3===(H=R?r<y.length?y[r]:[0,0,0,0]:y).length){for(S=0;S<3;++S)_[S]=H[S];_[S]=1}else if(4===H.length){for(S=0;S<4;++S)_[S]=H[S];!this.hasAlpha&&H[3]<1&&(this.hasAlpha=!0)}}else _[0]=_[1]=_[2]=0,_[3]=1;else _=[1,1,1,0];var D=.5;E?Array.isArray(d)?D=r<d.length?+d[r]:12:d?D=+d:this.useOrtho&&(D=12):D=0;var G=0;Array.isArray(g)?G=r<g.length?+g[r]:0:g&&(G=+g);var q=Math.cos(G),V=Math.sin(G);for(k=n[r],S=0;S<3;++S)p[S]=Math.max(p[S],k[S]),c[S]=Math.min(c[S],k[S]);var U=s,J=a;U=0;Array.isArray(s)?U=r<s.length?s[r]:0:s&&(U=s);J=0;Array.isArray(a)?J=r<a.length?a[r]:0:a&&(J=a);var Y=[U*=U>0?1-z[0][0]:U<0?1+z[1][0]:1,J*=J>0?1-z[0][1]:J<0?1+z[1][1]:1],K=w.cells||[],Q=w.positions||[];for(S=0;S<K.length;++S)for(var X=K[S],Z=0;Z<3;++Z){for(var $=0;$<3;++$)M[3*T+$]=k[$];for($=0;$<4;++$)B[4*T+$]=I[$];C[T]=x;var tt=Q[X[Z]];L[2*T]=D*(q*tt[0]-V*tt[1]+Y[0]),L[2*T+1]=D*(V*tt[0]+q*tt[1]+Y[1]),T+=1}for(K=j.edges,Q=j.positions,S=0;S<K.length;++S)for(X=K[S],Z=0;Z<2;++Z){for($=0;$<3;++$)M[3*W+$]=k[$];for($=0;$<4;++$)B[4*W+$]=_[$];C[W]=x;tt=Q[X[Z]];L[2*W]=D*(q*tt[0]-V*tt[1]+Y[0]),L[2*W+1]=D*(V*tt[0]+q*tt[1]+Y[1]),W+=1}}}this.bounds=[c,p],this.points=n,this.pointCount=n.length,this.vertexCount=m,this.lineVertexCount=A,this.pointBuffer.update(M),this.colorBuffer.update(B),this.glyphBuffer.update(L),this.idBuffer.update(C),o.free(M),o.free(B),o.free(L),o.free(C)},y.dispose=function(){this.shader.dispose(),this.orthoShader.dispose(),this.pickPerspectiveShader.dispose(),this.pickOrthoShader.dispose(),this.vao.dispose(),this.pointBuffer.dispose(),this.colorBuffer.dispose(),this.glyphBuffer.dispose(),this.idBuffer.dispose()}},1403:function(t,e,i){var r=i(420),s=i(415),a=s("./perspective.glsl"),o=s("./orthographic.glsl"),n=s("./projection.glsl"),h=s("./draw-fragment.glsl"),l=s("./pick-fragment.glsl"),c=[{name:"position",type:"vec3"},{name:"color",type:"vec4"},{name:"glyph",type:"vec2"},{name:"id",type:"vec4"}],p={vertex:a,fragment:h,attributes:c},u={vertex:o,fragment:h,attributes:c},f={vertex:n,fragment:h,attributes:c},d={vertex:a,fragment:l,attributes:c},v={vertex:o,fragment:l,attributes:c},g={vertex:n,fragment:l,attributes:c};function y(t,e){var i=r(t,e),s=i.attributes;return s.position.location=0,s.color.location=1,s.glyph.location=2,s.id.location=3,i}e.createPerspective=function(t){return y(t,p)},e.createOrtho=function(t){return y(t,u)},e.createProject=function(t){return y(t,f)},e.createPickPerspective=function(t){return y(t,d)},e.createPickOrtho=function(t){return y(t,v)},e.createPickProject=function(t){return y(t,g)}},1404:function(t,e,i){"use strict";var r=i(698);t.exports=function(t,e,i){var a=s[e];a||(a=s[e]={});if(t in a)return a[t];var o={textAlign:"center",textBaseline:"middle",lineHeight:1,font:e,lineSpacing:1.25,styletags:{breaklines:!0,bolds:!0,italics:!0,subscripts:!0,superscripts:!0},triangles:!0},n=r(t,o);o.triangles=!1;var h,l,c=r(t,o);if(i&&1!==i){for(h=0;h<n.positions.length;++h)for(l=0;l<n.positions[h].length;++l)n.positions[h][l]/=i;for(h=0;h<c.positions.length;++h)for(l=0;l<c.positions[h].length;++l)c.positions[h][l]/=i}var p=[[1/0,1/0],[-1/0,-1/0]],u=c.positions.length;for(h=0;h<u;++h){var f=c.positions[h];for(l=0;l<2;++l)p[0][l]=Math.min(p[0][l],f[l]),p[1][l]=Math.max(p[1][l],f[l])}return a[t]=[n,c,p]};var s={}},1405:function(t,e,i){"use strict";t.exports=function(t){return t||0===t?t.toString():""}},1406:function(t,e,i){"use strict";t.exports=function(t){var e=t.gl,i=r(e),o=s(e,[{buffer:i,type:e.FLOAT,size:3,offset:0,stride:40},{buffer:i,type:e.FLOAT,size:4,offset:12,stride:40},{buffer:i,type:e.FLOAT,size:3,offset:28,stride:40}]),h=a(e);h.attributes.position.location=0,h.attributes.color.location=1,h.attributes.offset.location=2;var l=new n(e,i,o,h);return l.update(t),l};var r=i(413),s=i(477),a=i(1407),o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function n(t,e,i,r){this.gl=t,this.shader=r,this.buffer=e,this.vao=i,this.pixelRatio=1,this.bounds=[[1/0,1/0,1/0],[-1/0,-1/0,-1/0]],this.clipBounds=[[-1/0,-1/0,-1/0],[1/0,1/0,1/0]],this.lineWidth=[1,1,1],this.capSize=[10,10,10],this.lineCount=[0,0,0],this.lineOffset=[0,0,0],this.opacity=1,this.hasAlpha=!1}var h=n.prototype;function l(t,e){for(var i=0;i<3;++i)t[0][i]=Math.min(t[0][i],e[i]),t[1][i]=Math.max(t[1][i],e[i])}h.isOpaque=function(){return!this.hasAlpha},h.isTransparent=function(){return this.hasAlpha},h.drawTransparent=h.draw=function(t){var e=this.gl,i=this.shader.uniforms;this.shader.bind();var r=i.view=t.view||o,s=i.projection=t.projection||o;i.model=t.model||o,i.clipBounds=this.clipBounds,i.opacity=this.opacity;var a=r[12],n=r[13],h=r[14],l=r[15],c=(t._ortho||!1?2:1)*this.pixelRatio*(s[3]*a+s[7]*n+s[11]*h+s[15]*l)/e.drawingBufferHeight;this.vao.bind();for(var p=0;p<3;++p)e.lineWidth(this.lineWidth[p]*this.pixelRatio),i.capSize=this.capSize[p]*c,this.lineCount[p]&&e.drawArrays(e.LINES,this.lineOffset[p],this.lineCount[p]);this.vao.unbind()};var c=function(){for(var t=new Array(3),e=0;e<3;++e){for(var i=[],r=1;r<=2;++r)for(var s=-1;s<=1;s+=2){var a=[0,0,0];a[(r+e)%3]=s,i.push(a)}t[e]=i}return t}();function p(t,e,i,r){for(var s=c[r],a=0;a<s.length;++a){var o=s[a];t.push(e[0],e[1],e[2],i[0],i[1],i[2],i[3],o[0],o[1],o[2])}return s.length}h.update=function(t){"lineWidth"in(t=t||{})&&(this.lineWidth=t.lineWidth,Array.isArray(this.lineWidth)||(this.lineWidth=[this.lineWidth,this.lineWidth,this.lineWidth])),"capSize"in t&&(this.capSize=t.capSize,Array.isArray(this.capSize)||(this.capSize=[this.capSize,this.capSize,this.capSize])),this.hasAlpha=!1,"opacity"in t&&(this.opacity=+t.opacity,this.opacity<1&&(this.hasAlpha=!0));var e=t.color||[[0,0,0],[0,0,0],[0,0,0]],i=t.position,r=t.error;if(Array.isArray(e[0])||(e=[e,e,e]),i&&r){var s=[],a=i.length,o=0;this.bounds=[[1/0,1/0,1/0],[-1/0,-1/0,-1/0]],this.lineCount=[0,0,0];for(var n=0;n<3;++n){this.lineOffset[n]=o;t:for(var h=0;h<a;++h){for(var c=i[h],u=0;u<3;++u)if(isNaN(c[u])||!isFinite(c[u]))continue t;var f=r[h],d=e[n];if(Array.isArray(d[0])&&(d=e[h]),3===d.length?d=[d[0],d[1],d[2],1]:4===d.length&&(d=[d[0],d[1],d[2],d[3]],!this.hasAlpha&&d[3]<1&&(this.hasAlpha=!0)),!isNaN(f[0][n])&&!isNaN(f[1][n])){var v;if(f[0][n]<0)(v=c.slice())[n]+=f[0][n],s.push(c[0],c[1],c[2],d[0],d[1],d[2],d[3],0,0,0,v[0],v[1],v[2],d[0],d[1],d[2],d[3],0,0,0),l(this.bounds,v),o+=2+p(s,v,d,n);if(f[1][n]>0)(v=c.slice())[n]+=f[1][n],s.push(c[0],c[1],c[2],d[0],d[1],d[2],d[3],0,0,0,v[0],v[1],v[2],d[0],d[1],d[2],d[3],0,0,0),l(this.bounds,v),o+=2+p(s,v,d,n)}}this.lineCount[n]=o-this.lineOffset[n]}this.buffer.update(s)}},h.dispose=function(){this.shader.dispose(),this.buffer.dispose(),this.vao.dispose()}},1407:function(t,e,i){"use strict";var r=i(415),s=i(420),a=r("./vertex.glsl"),o=r("./fragment.glsl");t.exports=function(t){return s(t,a,o,null,[{name:"position",type:"vec3"},{name:"color",type:"vec4"},{name:"offset",type:"vec3"}])}},1426:function(t,e,i){"use strict";var r=i(381);function s(t,e,i,s){if(!e||!e.visible)return null;for(var a=r.getComponentMethod("errorbars","makeComputeError")(e),o=new Array(t.length),n=0;n<t.length;n++){var h=a(+t[n],n);if("log"===s.type){var l=s.c2l(t[n]),c=t[n]-h[0],p=t[n]+h[1];if(o[n]=[(s.c2l(c,!0)-l)*i,(s.c2l(p,!0)-l)*i],c>0){var u=s.c2l(c);s._lowerLogErrorBound||(s._lowerLogErrorBound=u),s._lowerErrorBound=Math.min(s._lowerLogErrorBound,u)}}else o[n]=[-h[0]*i,h[1]*i]}return o}t.exports=function(t,e,i){var r=[s(t.x,t.error_x,e[0],i.xaxis),s(t.y,t.error_y,e[1],i.yaxis),s(t.z,t.error_z,e[2],i.zaxis)],a=function(t){for(var e=0;e<t.length;e++)if(t[e])return t[e].length;return 0}(r);if(0===a)return null;for(var o=new Array(a),n=0;n<a;n++){for(var h=[[0,0,0],[0,0,0]],l=0;l<3;l++)if(r[l])for(var c=0;c<2;c++)h[c][l]=r[l][n][c];o[n]=h}return o}},1427:function(t,e,i){"use strict";var r=i(381),s=i(380),a=i(389),o=i(431),n=i(435),h=i(436),l=i(1098);t.exports=function(t,e,i,c){function p(i,r){return s.coerce(t,e,l,i,r)}if(function(t,e,i,s){var a=0,o=i("x"),n=i("y"),h=i("z");r.getComponentMethod("calendars","handleTraceDefaults")(t,e,["x","y","z"],s),o&&n&&h&&(a=Math.min(o.length,n.length,h.length),e._length=e._xlength=e._ylength=e._zlength=a);return a}(t,e,p,c)){p("text"),p("hovertext"),p("hovertemplate"),p("mode"),a.hasLines(e)&&(p("connectgaps"),n(t,e,i,c,p)),a.hasMarkers(e)&&o(t,e,i,c,p,{noSelect:!0}),a.hasText(e)&&(p("texttemplate"),h(t,e,c,p,{noSelect:!0}));var u=(e.line||{}).color,f=(e.marker||{}).color;p("surfaceaxis")>=0&&p("surfacecolor",u||f);for(var d=["x","y","z"],v=0;v<3;++v){var g="projection."+d[v];p(g+".show")&&(p(g+".opacity"),p(g+".scale"))}var y=r.getComponentMethod("errorbars","supplyDefaults");y(t,e,u||f||i,{axis:"z"}),y(t,e,u||f||i,{axis:"y",inherit:"z"}),y(t,e,u||f||i,{axis:"x",inherit:"z"})}else e.visible=!1}},414:function(t,e,i){"use strict";var r=i(380);t.exports=function(t,e){for(var i=0;i<t.length;i++)t[i].i=i;r.mergeArray(e.text,t,"tx"),r.mergeArray(e.texttemplate,t,"txt"),r.mergeArray(e.hovertext,t,"htx"),r.mergeArray(e.customdata,t,"data"),r.mergeArray(e.textposition,t,"tp"),e.textfont&&(r.mergeArrayCastPositive(e.textfont.size,t,"ts"),r.mergeArray(e.textfont.color,t,"tc"),r.mergeArray(e.textfont.family,t,"tf"));var s=e.marker;if(s){r.mergeArrayCastPositive(s.size,t,"ms"),r.mergeArrayCastPositive(s.opacity,t,"mo"),r.mergeArray(s.symbol,t,"mx"),r.mergeArray(s.color,t,"mc");var a=s.line;s.line&&(r.mergeArray(a.color,t,"mlc"),r.mergeArrayCastPositive(a.width,t,"mlw"));var o=s.gradient;o&&"none"!==o.type&&(r.mergeArray(o.type,t,"mgt"),r.mergeArray(o.color,t,"mgc"))}}},422:function(t,e,i){"use strict";var r=i(401).hasColorscale,s=i(421),a=i(389);t.exports=function(t,e){a.hasLines(e)&&r(e,"line")&&s(t,e,{vals:e.line.color,containerStr:"line",cLetter:"c"}),a.hasMarkers(e)&&(r(e,"marker")&&s(t,e,{vals:e.marker.color,containerStr:"marker",cLetter:"c"}),r(e,"marker.line")&&s(t,e,{vals:e.marker.line.color,containerStr:"marker.line",cLetter:"c"}))}},431:function(t,e,i){"use strict";var r=i(382),s=i(401).hasColorscale,a=i(403),o=i(389);t.exports=function(t,e,i,n,h,l){var c=o.isBubble(t),p=(t.line||{}).color;(l=l||{},p&&(i=p),h("marker.symbol"),h("marker.opacity",c?.7:1),h("marker.size"),h("marker.color",i),s(t,"marker")&&a(t,e,n,h,{prefix:"marker.",cLetter:"c"}),l.noSelect||(h("selected.marker.color"),h("unselected.marker.color"),h("selected.marker.size"),h("unselected.marker.size")),l.noLine||(h("marker.line.color",p&&!Array.isArray(p)&&e.marker.color!==p?p:c?r.background:r.defaultLine),s(t,"marker.line")&&a(t,e,n,h,{prefix:"marker.line.",cLetter:"c"}),h("marker.line.width",c?1:0)),c&&(h("marker.sizeref"),h("marker.sizemin"),h("marker.sizemode")),l.gradient)&&("none"!==h("marker.gradient.type")&&h("marker.gradient.color"))}},435:function(t,e,i){"use strict";var r=i(380).isArrayOrTypedArray,s=i(401).hasColorscale,a=i(403);t.exports=function(t,e,i,o,n,h){var l=(t.marker||{}).color;(n("line.color",i),s(t,"line"))?a(t,e,o,n,{prefix:"line.",cLetter:"c"}):n("line.color",!r(l)&&l||i);n("line.width"),(h||{}).noDash||n("line.dash")}},436:function(t,e,i){"use strict";var r=i(380);t.exports=function(t,e,i,s,a){a=a||{},s("textposition"),r.coerceFont(s,"textfont",i.font),a.noSelect||(s("selected.textfont.color"),s("unselected.textfont.color"))}},862:function(t,e,i){"use strict";var r=i(1023),s=i(478);function a(t,e){this.point=t,this.index=e}function o(t,e){for(var i=t.point,r=e.point,s=i.length,a=0;a<s;++a){var o=r[a]-i[a];if(o)return o}return 0}t.exports=function(t,e){var i=t.length;if(0===i)return[];var n=t[0].length;if(n<1)return[];if(1===n)return function(t,e,i){if(1===t)return i?[[-1,0]]:[];var r=e.map((function(t,e){return[t[0],e]}));r.sort((function(t,e){return t[0]-e[0]}));for(var s=new Array(t-1),a=1;a<t;++a){var o=r[a-1],n=r[a];s[a-1]=[o[1],n[1]]}i&&s.push([-1,s[0][1]],[s[t-1][1],-1]);return s}(i,t,e);for(var h=new Array(i),l=1,c=0;c<i;++c){for(var p=t[c],u=new Array(n+1),f=0,d=0;d<n;++d){var v=p[d];u[d]=v,f+=v*v}u[n]=f,h[c]=new a(u,c),l=Math.max(f,l)}s(h,o),i=h.length;var g=new Array(i+n+1),y=new Array(i+n+1),x=(n+1)*(n+1)*l,m=new Array(n+1);for(c=0;c<=n;++c)m[c]=0;m[n]=x,g[0]=m.slice(),y[0]=-1;for(c=0;c<=n;++c){(u=m.slice())[c]=1,g[c+1]=u,y[c+1]=-1}for(c=0;c<i;++c){var A=h[c];g[c+n+1]=A.point,y[c+n+1]=A.index}var b=r(g,!1);b=e?b.filter((function(t){for(var e=0,i=0;i<=n;++i){var r=y[t[i]];if(r<0&&++e>=2)return!1;t[i]=r}return!0})):b.filter((function(t){for(var e=0;e<=n;++e){var i=y[t[e]];if(i<0)return!1;t[e]=i}return!0}));if(1&n)for(c=0;c<b.length;++c){u=(A=b[c])[0];A[0]=A[1],A[1]=u}return b}},904:function(t,e,i){"use strict";t.exports={circle:"●","circle-open":"○",square:"■","square-open":"□",diamond:"◆","diamond-open":"◇",cross:"+",x:"❌"}},916:function(t,e,i){"use strict";var r=i(414),s=i(422);t.exports=function(t,e){var i=[{x:!1,y:!1,trace:e,t:{}}];return r(i,e),s(t,e),i}}}]);