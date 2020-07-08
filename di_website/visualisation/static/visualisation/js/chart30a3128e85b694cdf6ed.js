(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1154:function(e,t,r){"use strict";e.exports=r(1312)},1312:function(e,t,r){"use strict";e.exports={attributes:r(484),supplyDefaults:r(913),calc:r(564),plot:r(700),colorbar:r(524),style:r(701),hoverPoints:r(719),moduleType:"trace",name:"heatmap",basePlotModule:r(409),categories:["cartesian","svg","2dMap","showLegend"],meta:{description:["The data that describes the heatmap value-to-color mapping","is set in `z`.","Data in `z` can either be a {2D array} of values (ragged or not)","or a 1D array of values.","In the case where `z` is a {2D array},","say that `z` has N rows and M columns.","Then, by default, the resulting heatmap will have N partitions along","the y axis and M partitions along the x axis.","In other words, the i-th row/ j-th column cell in `z`","is mapped to the i-th partition of the y axis","(starting from the bottom of the plot) and the j-th partition","of the x-axis (starting from the left of the plot).","This behavior can be flipped by using `transpose`.","Moreover, `x` (`y`) can be provided with M or M+1 (N or N+1) elements.","If M (N), then the coordinates correspond to the center of the","heatmap cells and the cells have equal width.","If M+1 (N+1), then the coordinates correspond to the edges of the","heatmap cells.","In the case where `z` is a 1D {array}, the x and y coordinates must be","provided in `x` and `y` respectively to form data triplets."].join(" ")}}},474:function(e,t,r){"use strict";var n=r(380);e.exports=function(e,t){for(var r=0;r<e.length;r++)e[r].i=r;n.mergeArray(t.text,e,"tx"),n.mergeArray(t.hovertext,e,"htx");var a=t.marker;if(a){n.mergeArray(a.opacity,e,"mo",!0),n.mergeArray(a.color,e,"mc");var i=a.line;i&&(n.mergeArray(i.color,e,"mlc"),n.mergeArrayCastPositive(i.width,e,"mlw"))}}},484:function(e,t,r){"use strict";var n=r(398),a=r(399),i=r(391).hovertemplateAttrs,o=r(396),s=r(485).FORMAT_LINK,l=r(387).extendFlat;e.exports=l({z:{valType:"data_array",editType:"calc",description:"Sets the z data."},x:l({},n.x,{impliedEdits:{xtype:"array"}}),x0:l({},n.x0,{impliedEdits:{xtype:"scaled"}}),dx:l({},n.dx,{impliedEdits:{xtype:"scaled"}}),y:l({},n.y,{impliedEdits:{ytype:"array"}}),y0:l({},n.y0,{impliedEdits:{ytype:"scaled"}}),dy:l({},n.dy,{impliedEdits:{ytype:"scaled"}}),text:{valType:"data_array",editType:"calc",description:"Sets the text elements associated with each z value."},hovertext:{valType:"data_array",editType:"calc",description:"Same as `text`."},transpose:{valType:"boolean",dflt:!1,role:"info",editType:"calc",description:"Transposes the z data."},xtype:{valType:"enumerated",values:["array","scaled"],role:"info",editType:"calc+clearAxisTypes",description:["If *array*, the heatmap's x coordinates are given by *x*","(the default behavior when `x` is provided).","If *scaled*, the heatmap's x coordinates are given by *x0* and *dx*","(the default behavior when `x` is not provided)."].join(" ")},ytype:{valType:"enumerated",values:["array","scaled"],role:"info",editType:"calc+clearAxisTypes",description:["If *array*, the heatmap's y coordinates are given by *y*","(the default behavior when `y` is provided)","If *scaled*, the heatmap's y coordinates are given by *y0* and *dy*","(the default behavior when `y` is not provided)"].join(" ")},zsmooth:{valType:"enumerated",values:["fast","best",!1],dflt:!1,role:"style",editType:"calc",description:["Picks a smoothing algorithm use to smooth `z` data."].join(" ")},hoverongaps:{valType:"boolean",dflt:!0,role:"style",editType:"none",description:["Determines whether or not gaps","(i.e. {nan} or missing values)","in the `z` data have hover labels associated with them."].join(" ")},connectgaps:{valType:"boolean",role:"info",editType:"calc",description:["Determines whether or not gaps","(i.e. {nan} or missing values)","in the `z` data are filled in.","It is defaulted to true if `z` is a","one dimensional array and `zsmooth` is not false;","otherwise it is defaulted to false."].join(" ")},xgap:{valType:"number",dflt:0,min:0,role:"style",editType:"plot",description:"Sets the horizontal gap (in pixels) between bricks."},ygap:{valType:"number",dflt:0,min:0,role:"style",editType:"plot",description:"Sets the vertical gap (in pixels) between bricks."},zhoverformat:{valType:"string",dflt:"",role:"style",editType:"none",description:["Sets the hover text formatting rule using d3 formatting mini-languages","which are very similar to those in Python. See:",s].join(" ")},hovertemplate:i(),showlegend:l({},a.showlegend,{dflt:!1})},{transforms:void 0},o("",{cLetter:"z",autoColorDflt:!1}))},499:function(e,t,r){"use strict";var n=r(385);e.exports={count:function(e,t,r){return r[e]++,1},sum:function(e,t,r,a){var i=a[t];return n(i)?(i=Number(i),r[e]+=i,i):0},avg:function(e,t,r,a,i){var o=a[t];return n(o)&&(o=Number(o),r[e]+=o,i[e]++),0},min:function(e,t,r,a){var i=a[t];if(n(i)){if(i=Number(i),!n(r[e]))return r[e]=i,i;if(r[e]>i){var o=i-r[e];return r[e]=i,o}}return 0},max:function(e,t,r,a){var i=a[t];if(n(i)){if(i=Number(i),!n(r[e]))return r[e]=i,i;if(r[e]<i){var o=i-r[e];return r[e]=i,o}}return 0}}},500:function(e,t,r){"use strict";e.exports={percent:function(e,t){for(var r=e.length,n=100/t,a=0;a<r;a++)e[a]*=n},probability:function(e,t){for(var r=e.length,n=0;n<r;n++)e[n]/=t},density:function(e,t,r,n){var a=e.length;n=n||1;for(var i=0;i<a;i++)e[i]*=r[i]*n},"probability density":function(e,t,r,n){var a=e.length;n&&(t/=n);for(var i=0;i<a;i++)e[i]*=r[i]/t}}},501:function(e,t,r){"use strict";e.exports=function(e,t){for(var r=e.length,n=0,a=0;a<r;a++)t[a]?(e[a]/=t[a],n+=e[a]):e[a]=null;return n}},502:function(e,t,r){"use strict";var n=r(390),a=n.ONEAVGYEAR,i=n.ONEAVGMONTH,o=n.ONEDAY,s=n.ONEHOUR,l=n.ONEMIN,c=n.ONESEC,u=r(384).tickIncrement;function h(e,t,r,n){if(e*t<=0)return 1/0;for(var a=Math.abs(t-e),i="date"===r.type,o=f(a,i),s=0;s<10;s++){var l=f(80*o,i);if(o===l)break;if(!d(l,e,t,i,r,n))break;o=l}return o}function f(e,t){return t&&e>c?e>o?e>1.1*a?a:e>1.1*i?i:o:e>s?s:e>l?l:c:Math.pow(10,Math.floor(Math.log(e)/Math.LN10))}function d(e,t,r,n,i,s){if(n&&e>o){var l=p(t,i,s),c=p(r,i,s),u=e===a?0:1;return l[u]!==c[u]}return Math.floor(r/e)-Math.floor(t/e)>.1}function p(e,t,r){var n=t.c2d(e,a,r).split("-");return""===n[0]&&(n.unshift(),n[0]="-"+n[0]),n}e.exports=function(e,t,r,n,i){var s,l,c=-1.1*t,f=-.1*t,d=e-f,p=r[0],y=r[1],v=Math.min(h(p+f,p+d,n,i),h(y+f,y+d,n,i)),g=Math.min(h(p+c,p+f,n,i),h(y+c,y+f,n,i));if(v>g&&g<Math.abs(y-p)/4e3?(s=v,l=!1):(s=Math.min(v,g),l=!0),"date"===n.type&&s>o){var m=s===a?1:6,x=s===a?"M12":"M1";return function(t,r){var o=n.c2d(t,a,i),s=o.indexOf("-",m);s>0&&(o=o.substr(0,s));var c=n.d2c(o,0,i);if(c<t){var h=u(c,x,!1,i);(c+h)/2<t+e&&(c=h)}return r&&l?u(c,x,!0,i):c}}return function(t,r){var n=s*Math.round(t/s);return n+s/10<t&&n+.9*s<t+e&&(n+=s),r&&l&&(n-=s),n}}},524:function(e,t,r){"use strict";e.exports={min:"zmin",max:"zmax"}},544:function(e,t,r){"use strict";var n=r(380),a=[[-1,0],[1,0],[0,-1],[0,1]];function i(e){return.5-.25*Math.min(1,.5*e)}function o(e,t,r){var n,i,o,s,l,c,u,h,f,d,p,y,v,g=0;for(s=0;s<t.length;s++){for(i=(n=t[s])[0],o=n[1],p=e[i][o],d=0,f=0,l=0;l<4;l++)(u=e[i+(c=a[l])[0]])&&void 0!==(h=u[o+c[1]])&&(0===d?y=v=h:(y=Math.min(y,h),v=Math.max(v,h)),f++,d+=h);if(0===f)throw"iterateInterp2d order is wrong: no defined neighbors";e[i][o]=d/f,void 0===p?f<4&&(g=1):(e[i][o]=(1+r)*e[i][o]-r*p,v>y&&(g=Math.max(g,Math.abs(e[i][o]-p)/(v-y))))}return g}e.exports=function(e,t){var r,a=1;for(o(e,t),r=0;r<t.length&&!(t[r][2]<4);r++);for(t=t.slice(r),r=0;r<100&&a>.01;r++)a=o(e,t,i(a));return a>.01&&n.log("interp2d didn't converge quickly",a),e}},545:function(e,t,r){"use strict";var n=r(380).maxRowLength;e.exports=function(e){var t,r,a,i,o,s,l,c,u=[],h={},f=[],d=e[0],p=[],y=[0,0,0],v=n(e);for(r=0;r<e.length;r++)for(t=p,p=d,d=e[r+1]||[],a=0;a<v;a++)void 0===p[a]&&((s=(void 0!==p[a-1]?1:0)+(void 0!==p[a+1]?1:0)+(void 0!==t[a]?1:0)+(void 0!==d[a]?1:0))?(0===r&&s++,0===a&&s++,r===e.length-1&&s++,a===p.length-1&&s++,s<4&&(h[[r,a]]=[r,a,s]),u.push([r,a,s])):f.push([r,a]));for(;f.length;){for(l={},c=!1,o=f.length-1;o>=0;o--)(s=((h[[(r=(i=f[o])[0])-1,a=i[1]]]||y)[2]+(h[[r+1,a]]||y)[2]+(h[[r,a-1]]||y)[2]+(h[[r,a+1]]||y)[2])/20)&&(l[i]=[r,a,s],f.splice(o,1),c=!0);if(!c)throw"findEmpties iterated with no new neighbors";for(i in l)h[i]=l[i],u.push(l[i])}return u.sort((function(e,t){return t[2]-e[2]}))}},556:function(e,t,r){"use strict";var n=r(385),a=r(380),i=r(390).BADNUM;e.exports=function(e,t,r,o){var s,l,c,u,h,f;function d(e){if(n(e))return+e}if(t&&t.transpose){for(s=0,h=0;h<e.length;h++)s=Math.max(s,e[h].length);if(0===s)return!1;c=function(e){return e.length},u=function(e,t,r){return(e[r]||[])[t]}}else s=e.length,c=function(e,t){return e[t].length},u=function(e,t,r){return(e[t]||[])[r]};var p=function(e,t,r){return t===i||r===i?i:u(e,t,r)};function y(e){if(t&&"carpet"!==t.type&&"contourcarpet"!==t.type&&e&&"category"===e.type&&t["_"+e._id.charAt(0)].length){var r=e._id.charAt(0),n={},o=t["_"+r+"CategoryMap"]||t[r];for(h=0;h<o.length;h++)n[o[h]]=h;return function(t){var r=n[e._categories[t]];return r+1?r:i}}return a.identity}var v=y(r),g=y(o);o&&"category"===o.type&&(s=o._categories.length);var m=new Array(s);for(h=0;h<s;h++)for(l=r&&"category"===r.type?r._categories.length:c(e,h),m[h]=new Array(l),f=0;f<l;f++)m[h][f]=d(p(e,g(h),v(f)));return m}},557:function(e,t,r){"use strict";var n=r(380),a=r(390).BADNUM;e.exports=function(e,t,r,i,o,s){var l,c,u,h,f=e._length,d=t.makeCalcdata(e,i),p=r.makeCalcdata(e,o),y=e.text,v=void 0!==y&&n.isArray1D(y),g=e.hovertext,m=void 0!==g&&n.isArray1D(g),x=n.distinctVals(d),b=x.vals,_=n.distinctVals(p),M=_.vals,z=[],A=M.length,w=b.length;for(l=0;l<s.length;l++)z[l]=n.init2dArray(A,w);v&&(u=n.init2dArray(A,w)),m&&(h=n.init2dArray(A,w));var k=n.init2dArray(A,w);for(l=0;l<f;l++)if(d[l]!==a&&p[l]!==a){var I=n.findBin(d[l]+x.minDiff/2,b),T=n.findBin(p[l]+_.minDiff/2,M);for(c=0;c<s.length;c++){var F=e[s[c]];z[c][T][I]=F[l],k[T][I]=l}v&&(u[T][I]=y[l]),m&&(h[T][I]=g[l])}for(e["_"+i]=b,e["_"+o]=M,c=0;c<s.length;c++)e["_"+s[c]]=z[c];v&&(e._text=u),m&&(e._hovertext=h),t&&"category"===t.type&&(e["_"+i+"CategoryMap"]=b.map((function(e){return t._categories[e]}))),r&&"category"===r.type&&(e["_"+o+"CategoryMap"]=M.map((function(e){return r._categories[e]}))),e._after2before=k}},564:function(e,t,r){"use strict";var n=r(381),a=r(380),i=r(384),o=r(699),s=r(421),l=r(557),c=r(556),u=r(544),h=r(545),f=r(612),d=r(390).BADNUM;function p(e){for(var t=[],r=e.length,n=0;n<r;n++){var a=e[n];a!==d&&t.push(a)}return t}e.exports=function(e,t){var r,y,v,g,m,x,b,_,M,z=i.getFromId(e,t.xaxis||"x"),A=i.getFromId(e,t.yaxis||"y"),w=n.traceIs(t,"contour"),k=n.traceIs(t,"histogram"),I=n.traceIs(t,"gl2d"),T=w?"best":t.zsmooth;if(z._minDtick=0,A._minDtick=0,k)r=(M=o(e,t)).x,y=M.x0,v=M.dx,g=M.y,m=M.y0,x=M.dy,b=M.z;else{var F=t.z;a.isArray1D(F)?(l(t,z,A,"x","y",["z"]),r=t._x,g=t._y,F=t._z):(r=t._x=t.x?z.makeCalcdata(t,"x"):[],g=t._y=t.y?A.makeCalcdata(t,"y"):[]),y=t.x0,v=t.dx,m=t.y0,x=t.dy,b=c(F,t,z,A)}function D(e){T=t._input.zsmooth=t.zsmooth=!1,a.warn('cannot use zsmooth: "fast": '+e)}if((z.rangebreaks||A.rangebreaks)&&(b=function(e,t,r){for(var n=[],a=-1,i=0;i<r.length;i++)if(t[i]!==d){a++,n[a]=[];for(var o=0;o<r[i].length;o++)e[o]!==d&&n[a].push(r[i][o])}return n}(r,g,b),k||(r=p(r),g=p(g),t._x=r,t._y=g)),k||!w&&!t.connectgaps||(t._emptypoints=h(b),u(b,t._emptypoints)),"fast"===T)if("log"===z.type||"log"===A.type)D("log axis found");else if(!k){if(r.length){var N=(r[r.length-1]-r[0])/(r.length-1),O=Math.abs(N/100);for(_=0;_<r.length-1;_++)if(Math.abs(r[_+1]-r[_]-N)>O){D("x scale is not linear");break}}if(g.length&&"fast"===T){var B=(g[g.length-1]-g[0])/(g.length-1),L=Math.abs(B/100);for(_=0;_<g.length-1;_++)if(Math.abs(g[_+1]-g[_]-B)>L){D("y scale is not linear");break}}}var C=a.maxRowLength(b),E="scaled"===t.xtype?"":r,R=f(t,E,y,v,C,z),S="scaled"===t.ytype?"":g,G=f(t,S,m,x,b.length,A);I||(t._extremes[z._id]=i.findExtremes(z,R),t._extremes[A._id]=i.findExtremes(A,G));var j={x:R,y:G,z:b,text:t._text||t.text,hovertext:t._hovertext||t.hovertext};if(E&&E.length===R.length-1&&(j.xCenter=E),S&&S.length===G.length-1&&(j.yCenter=S),k&&(j.xRanges=M.xRanges,j.yRanges=M.yRanges,j.pts=M.pts),w||s(e,t,{vals:b,cLetter:"z"}),w&&t.contours&&"heatmap"===t.contours.coloring){var P={type:"contour"===t.type?"heatmap":"histogram2d",xcalendar:t.xcalendar,ycalendar:t.ycalendar};j.xfill=f(P,E,y,v,C,z),j.yfill=f(P,S,m,x,b.length,A)}return[j]}},565:function(e,t,r){"use strict";var n=r(385),a=r(380),i=r(381),o=r(384),s=r(474),l=r(499),c=r(500),u=r(501),h=r(502);function f(e,t,r,s,l){var c,u,h,d,p,y,v,g=s+"bins",m=e._fullLayout,x=t["_"+s+"bingroup"],b=m._histogramBinOpts[x],_="overlay"===m.barmode,M=function(e){return r.r2c(e,0,d)},z=function(e){return r.c2r(e,0,d)},A="date"===r.type?function(e){return e||0===e?a.cleanDate(e,null,d):null}:function(e){return n(e)?Number(e):null};function w(e,t,r){t[e+"Found"]?(t[e]=A(t[e]),null===t[e]&&(t[e]=r[e])):(y[e]=t[e]=r[e],a.nestedProperty(u[0],g+"."+e).set(r[e]))}if(t["_"+s+"autoBinFinished"])delete t["_"+s+"autoBinFinished"];else{u=b.traces;var k=[],I=!0,T=!1,F=!1;for(c=0;c<u.length;c++)if((h=u[c]).visible){var D=b.dirs[c];p=h["_"+D+"pos0"]=r.makeCalcdata(h,D),k=a.concat(k,p),delete h["_"+s+"autoBinFinished"],!0===t.visible&&(I?I=!1:(delete h._autoBin,h["_"+s+"autoBinFinished"]=1),i.traceIs(h,"2dMap")&&(T=!0),"histogram2dcontour"===h.type&&(F=!0))}d=u[0][s+"calendar"];var N=o.autoBin(k,r,b.nbins,T,d,b.sizeFound&&b.size),O=u[0]._autoBin={};if(y=O[b.dirs[0]]={},F&&(b.size||(N.start=z(o.tickIncrement(M(N.start),N.size,!0,d))),void 0===b.end&&(N.end=z(o.tickIncrement(M(N.end),N.size,!1,d)))),_&&!i.traceIs(t,"2dMap")&&0===N._dataSpan&&"category"!==r.type&&"multicategory"!==r.type){if(l)return[N,p,!0];N=function(e,t,r,n,i){var o,s,l,c=e._fullLayout,u=function(e,t){for(var r=t.xaxis,n=t.yaxis,a=t.orientation,i=[],o=e._fullData,s=0;s<o.length;s++){var l=o[s];"histogram"===l.type&&!0===l.visible&&l.orientation===a&&l.xaxis===r&&l.yaxis===n&&i.push(l)}return i}(e,t),h=!1,d=1/0,p=[t];for(o=0;o<u.length;o++)if((s=u[o])===t)h=!0;else if(h){var y=f(e,s,r,n,!0),v=y[0],g=y[2];s["_"+n+"autoBinFinished"]=1,s["_"+n+"pos0"]=y[1],g?p.push(s):d=Math.min(d,v.size)}else l=c._histogramBinOpts[s["_"+n+"bingroup"]],d=Math.min(d,l.size||s[i].size);var m=new Array(p.length);for(o=0;o<p.length;o++)for(var x=p[o]["_"+n+"pos0"],b=0;b<x.length;b++)if(void 0!==x[b]){m[o]=x[b];break}isFinite(d)||(d=a.distinctVals(m).minDiff);for(o=0;o<p.length;o++){var _=(s=p[o])[n+"calendar"],M={start:r.c2r(m[o]-d/2,0,_),end:r.c2r(m[o]+d/2,0,_),size:d};s._input[i]=s[i]=M,(l=c._histogramBinOpts[s["_"+n+"bingroup"]])&&a.extendFlat(l,M)}return t[i]}(e,t,r,s,g)}(v=h.cumulative||{}).enabled&&"include"!==v.currentbin&&("decreasing"===v.direction?N.start=z(o.tickIncrement(M(N.start),N.size,!0,d)):N.end=z(o.tickIncrement(M(N.end),N.size,!1,d))),b.size=N.size,b.sizeFound||(y.size=N.size,a.nestedProperty(u[0],g+".size").set(N.size)),w("start",b,N),w("end",b,N)}p=t["_"+s+"pos0"],delete t["_"+s+"pos0"];var B=t._input[g]||{},L=a.extendFlat({},b),C=b.start,E=r.r2l(B.start),R=void 0!==E;if((b.startFound||R)&&E!==r.r2l(C)){var S=R?E:a.aggNums(Math.min,null,p),G={type:"category"===r.type||"multicategory"===r.type?"linear":r.type,r2l:r.r2l,dtick:b.size,tick0:C,calendar:d,range:[S,o.tickIncrement(S,b.size,!1,d)].map(r.l2r)},j=o.tickFirst(G);j>r.r2l(S)&&(j=o.tickIncrement(j,b.size,!0,d)),L.start=r.l2r(j),R||a.nestedProperty(t,g+".start").set(L.start)}var P=b.end,V=r.r2l(B.end),U=void 0!==V;if((b.endFound||U)&&V!==r.r2l(P)){var H=U?V:a.aggNums(Math.max,null,p);L.end=r.l2r(H),U||a.nestedProperty(t,g+".start").set(L.end)}var q="autobin"+s;return!1===t._input[q]&&(t._input[g]=a.extendFlat({},t[g]||{}),delete t._input[q],delete t[q]),[L,p]}e.exports={calc:function(e,t){var r,i,d,p,y=[],v=[],g=o.getFromId(e,"h"===t.orientation?t.yaxis:t.xaxis),m="h"===t.orientation?"y":"x",x={x:"y",y:"x"}[m],b=t[m+"calendar"],_=t.cumulative,M=f(e,t,g,m),z=M[0],A=M[1],w="string"==typeof z.size,k=[],I=w?k:z,T=[],F=[],D=[],N=0,O=t.histnorm,B=t.histfunc,L=-1!==O.indexOf("density");_.enabled&&L&&(O=O.replace(/ ?density$/,""),L=!1);var C,E="max"===B||"min"===B?null:0,R=l.count,S=c[O],G=!1,j=function(e){return g.r2c(e,0,b)};for(a.isArrayOrTypedArray(t[x])&&"count"!==B&&(C=t[x],G="avg"===B,R=l[B]),r=j(z.start),d=j(z.end)+(r-o.tickIncrement(r,z.size,!1,b))/1e6;r<d&&y.length<1e6&&(i=o.tickIncrement(r,z.size,!1,b),y.push((r+i)/2),v.push(E),D.push([]),k.push(r),L&&T.push(1/(i-r)),G&&F.push(0),!(i<=r));)r=i;k.push(r),w||"date"!==g.type||(I={start:j(I.start),end:j(I.end),size:I.size}),e._fullLayout._roundFnOpts||(e._fullLayout._roundFnOpts={});var P=t["_"+m+"bingroup"],V={leftGap:1/0,rightGap:1/0};P&&(e._fullLayout._roundFnOpts[P]||(e._fullLayout._roundFnOpts[P]=V),V=e._fullLayout._roundFnOpts[P]);var U,H=v.length,q=!0,J=V.leftGap,Y=V.rightGap,K={};for(r=0;r<A.length;r++){var $=A[r];(p=a.findBin($,I))>=0&&p<H&&(N+=R(p,r,v,C,F),q&&D[p].length&&$!==A[D[p][0]]&&(q=!1),D[p].push(r),K[r]=p,J=Math.min(J,$-k[p]),Y=Math.min(Y,k[p+1]-$))}V.leftGap=J,V.rightGap=Y,q||(U=function(t,r){return function(){var n=e._fullLayout._roundFnOpts[P];return h(n.leftGap,n.rightGap,k,g,b)(t,r)}}),G&&(N=u(v,F)),S&&S(v,N,T),_.enabled&&function(e,t,r){var n,a,i;function o(t){i=e[t],e[t]/=2}function s(t){a=e[t],e[t]=i+a/2,i+=a}if("half"===r)if("increasing"===t)for(o(0),n=1;n<e.length;n++)s(n);else for(o(e.length-1),n=e.length-2;n>=0;n--)s(n);else if("increasing"===t){for(n=1;n<e.length;n++)e[n]+=e[n-1];"exclude"===r&&(e.unshift(0),e.pop())}else{for(n=e.length-2;n>=0;n--)e[n]+=e[n+1];"exclude"===r&&(e.push(0),e.shift())}}(v,_.direction,_.currentbin);var Q=Math.min(y.length,v.length),W=[],X=0,Z=Q-1;for(r=0;r<Q;r++)if(v[r]){X=r;break}for(r=Q-1;r>=X;r--)if(v[r]){Z=r;break}for(r=X;r<=Z;r++)if(n(y[r])&&n(v[r])){var ee={p:y[r],s:v[r],b:0};_.enabled||(ee.pts=D[r],q?ee.ph0=ee.ph1=D[r].length?A[D[r][0]]:y[r]:(t._computePh=!0,ee.ph0=U(k[r]),ee.ph1=U(k[r+1],!0))),W.push(ee)}return 1===W.length&&(W[0].width1=o.tickIncrement(W[0].p,z.size,!1,b)-W[0].p),s(W,t),a.isArrayOrTypedArray(t.selectedpoints)&&a.tagSelected(W,t,K),W},calcAllAutoBins:f}},612:function(e,t,r){"use strict";var n=r(381),a=r(380).isArrayOrTypedArray;e.exports=function(e,t,r,i,o,s){var l,c,u,h=[],f=n.traceIs(e,"contour"),d=n.traceIs(e,"histogram"),p=n.traceIs(e,"gl2d");if(a(t)&&t.length>1&&!d&&"category"!==s.type){var y=t.length;if(!(y<=o))return f?t.slice(0,o):t.slice(0,o+1);if(f||p)h=t.slice(0,o);else if(1===o)h=[t[0]-.5,t[0]+.5];else{for(h=[1.5*t[0]-.5*t[1]],u=1;u<y;u++)h.push(.5*(t[u-1]+t[u]));h.push(1.5*t[y-1]-.5*t[y-2])}if(y<o){var v=h[h.length-1],g=v-h[h.length-2];for(u=y;u<o;u++)v+=g,h.push(v)}}else{var m=e[s._id.charAt(0)+"calendar"];if(d)l=s.r2c(r,0,m);else if(a(t)&&1===t.length)l=t[0];else if(void 0===r)l=0;else{l=("log"===s.type?s.d2c:s.r2c)(r,0,m)}for(c=i||1,u=f||p?0:-.5;u<o;u++)h.push(l+c*u)}return h}},678:function(e,t,r){"use strict";var n=r(385),a=r(380),i=r(381);function o(e,t){var r=t(e);return"scaled"===(r?t(e+"type","array"):"scaled")&&(t(e+"0"),t("d"+e)),r}e.exports=function(e,t,r,s,l,c){var u,h,f=r("z");if(l=l||"x",c=c||"y",void 0===f||!f.length)return 0;if(a.isArray1D(e.z)){u=r(l),h=r(c);var d=a.minRowLength(u),p=a.minRowLength(h);if(0===d||0===p)return 0;t._length=Math.min(d,p,f.length)}else{if(u=o(l,r),h=o(c,r),!function(e){for(var t,r=!0,i=!1,o=!1,s=0;s<e.length;s++){if(t=e[s],!a.isArrayOrTypedArray(t)){r=!1;break}t.length>0&&(i=!0);for(var l=0;l<t.length;l++)if(n(t[l])){o=!0;break}}return r&&i&&o}(f))return 0;r("transpose"),t._length=null}return i.getComponentMethod("calendars","handleTraceDefaults")(e,t,[l,c],s),!0}},699:function(e,t,r){"use strict";var n=r(380),a=r(384),i=r(499),o=r(500),s=r(501),l=r(502),c=r(565).calcAllAutoBins;function u(e,t,r,n){var a,i=new Array(e);if(n)for(a=0;a<e;a++)i[a]=1/(t[a+1]-t[a]);else{var o=1/r;for(a=0;a<e;a++)i[a]=o}return i}function h(e,t){return{start:e(t.start),end:e(t.end),size:t.size}}function f(e,t,r,n,a,i){var o,s=e.length-1,c=new Array(s),u=l(r,n,e,a,i);for(o=0;o<s;o++){var h=(t||[])[o];c[o]=void 0===h?[u(e[o]),u(e[o+1],!0)]:[h,h]}return c}e.exports=function(e,t){var r,l,d,p,y=a.getFromId(e,t.xaxis),v=a.getFromId(e,t.yaxis),g=t.xcalendar,m=t.ycalendar,x=function(e){return y.r2c(e,0,g)},b=function(e){return v.r2c(e,0,m)},_=c(e,t,y,"x"),M=_[0],z=_[1],A=c(e,t,v,"y"),w=A[0],k=A[1],I=t._length;z.length>I&&z.splice(I,z.length-I),k.length>I&&k.splice(I,k.length-I);var T=[],F=[],D=[],N="string"==typeof M.size,O="string"==typeof w.size,B=[],L=[],C=N?B:M,E=O?L:w,R=0,S=[],G=[],j=t.histnorm,P=t.histfunc,V=-1!==j.indexOf("density"),U="max"===P||"min"===P?null:0,H=i.count,q=o[j],J=!1,Y=[],K=[],$="z"in t?t.z:"marker"in t&&Array.isArray(t.marker.color)?t.marker.color:"";$&&"count"!==P&&(J="avg"===P,H=i[P]);var Q=M.size,W=x(M.start),X=x(M.end)+(W-a.tickIncrement(W,Q,!1,g))/1e6;for(r=W;r<X;r=a.tickIncrement(r,Q,!1,g))F.push(U),B.push(r),J&&D.push(0);B.push(r);var Z,ee=F.length,te=(r-W)/ee,re=(Z=W+te/2,y.c2r(Z,0,g)),ne=w.size,ae=b(w.start),ie=b(w.end)+(ae-a.tickIncrement(ae,ne,!1,m))/1e6;for(r=ae;r<ie;r=a.tickIncrement(r,ne,!1,m)){T.push(F.slice()),L.push(r);var oe=new Array(ee);for(l=0;l<ee;l++)oe[l]=[];G.push(oe),J&&S.push(D.slice())}L.push(r);var se=T.length,le=(r-ae)/se,ce=function(e){return v.c2r(e,0,m)}(ae+le/2);V&&(Y=u(F.length,C,te,N),K=u(T.length,E,le,O)),N||"date"!==y.type||(C=h(x,C)),O||"date"!==v.type||(E=h(b,E));var ue=!0,he=!0,fe=new Array(ee),de=new Array(se),pe=1/0,ye=1/0,ve=1/0,ge=1/0;for(r=0;r<I;r++){var me=z[r],xe=k[r];d=n.findBin(me,C),p=n.findBin(xe,E),d>=0&&d<ee&&p>=0&&p<se&&(R+=H(d,r,T[p],$,S[p]),G[p][d].push(r),ue&&(void 0===fe[d]?fe[d]=me:fe[d]!==me&&(ue=!1)),he&&(void 0===de[p]?de[p]=xe:de[p]!==xe&&(he=!1)),pe=Math.min(pe,me-B[d]),ye=Math.min(ye,B[d+1]-me),ve=Math.min(ve,xe-L[p]),ge=Math.min(ge,L[p+1]-xe))}if(J)for(p=0;p<se;p++)R+=s(T[p],S[p]);if(q)for(p=0;p<se;p++)q(T[p],R,Y,K[p]);return{x:z,xRanges:f(B,ue&&fe,pe,ye,y,g),x0:re,dx:te,y:k,yRanges:f(L,he&&de,ve,ge,v,m),y0:ce,dy:le,z:T,pts:G}}},700:function(e,t,r){"use strict";var n=r(383),a=r(411),i=r(381),o=r(380),s=r(402).makeColorScaleFuncFromTrace,l=r(429);function c(e,t){var r=t.length-2,n=o.constrain(o.findBin(e,t),0,r),a=t[n],i=t[n+1],s=o.constrain(n+(e-a)/(i-a)-.5,0,r),l=Math.round(s),c=Math.abs(s-l);return s&&s!==r&&c?{bin0:l,frac:c,bin1:Math.round(l+c/(s-l))}:{bin0:l,bin1:l,frac:0}}function u(e,t){var r=t.length-1,n=o.constrain(o.findBin(e,t),0,r),a=t[n],i=(e-a)/(t[n+1]-a)||0;return i<=0?{bin0:n,bin1:n,frac:0}:i<.5?{bin0:n,bin1:n+1,frac:i}:{bin0:n+1,bin1:n,frac:1-i}}function h(e,t,r){e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=Math.round(255*r[3])}e.exports=function(e,t,r,f){var d=t.xaxis,p=t.yaxis;o.makeTraceGroups(f,r,"hm").each((function(t){var r,f,y,v,g,m,x=n.select(this),b=t[0],_=b.trace,M=b.z,z=b.x,A=b.y,w=b.xCenter,k=b.yCenter,I=i.traceIs(_,"contour"),T=I?"best":_.zsmooth,F=M.length,D=o.maxRowLength(M),N=!1,O=!1;for(m=0;void 0===r&&m<z.length-1;)r=d.c2p(z[m]),m++;for(m=z.length-1;void 0===f&&m>0;)f=d.c2p(z[m]),m--;for(f<r&&(y=f,f=r,r=y,N=!0),m=0;void 0===v&&m<A.length-1;)v=p.c2p(A[m]),m++;for(m=A.length-1;void 0===g&&m>0;)g=p.c2p(A[m]),m--;if(g<v&&(y=v,v=g,g=y,O=!0),I&&(w=z,k=A,z=b.xfill,A=b.yfill),"fast"!==T){var B="best"===T?0:.5;r=Math.max(-B*d._length,r),f=Math.min((1+B)*d._length,f),v=Math.max(-B*p._length,v),g=Math.min((1+B)*p._length,g)}var L=Math.round(f-r),C=Math.round(g-v);if(L<=0||C<=0){x.selectAll("image").data([]).exit().remove()}else{var E,R;"fast"===T?(E=D,R=F):(E=L,R=C);var S=document.createElement("canvas");S.width=E,S.height=R;var G,j,P=S.getContext("2d"),V=s(_,{noNumericCheck:!0,returnArray:!0});"fast"===T?(G=N?function(e){return D-1-e}:o.identity,j=O?function(e){return F-1-e}:o.identity):(G=function(e){return o.constrain(Math.round(d.c2p(z[e])-r),0,L)},j=function(e){return o.constrain(Math.round(p.c2p(A[e])-v),0,C)});var U,H,q,J,Y,K=j(0),$=[K,K],Q=N?0:1,W=O?0:1,X=0,Z=0,ee=0,te=0;if(T){var re,ne=0;try{re=new Uint8Array(L*C*4)}catch(e){re=new Array(L*C*4)}if("best"===T){var ae,ie,oe,se=w||z,le=k||A,ce=new Array(se.length),ue=new Array(le.length),he=new Array(L),fe=w?u:c,de=k?u:c;for(m=0;m<se.length;m++)ce[m]=Math.round(d.c2p(se[m])-r);for(m=0;m<le.length;m++)ue[m]=Math.round(p.c2p(le[m])-v);for(m=0;m<L;m++)he[m]=fe(m,ce);for(H=0;H<C;H++)for(ie=M[(ae=de(H,ue)).bin0],oe=M[ae.bin1],m=0;m<L;m++,ne+=4)h(re,ne,Y=Ae(ie,oe,he[m],ae))}else for(H=0;H<F;H++)for(J=M[H],$=j(H),m=0;m<L;m++)Y=ze(J[m],1),h(re,ne=4*($*L+G(m)),Y);var pe=P.createImageData(L,C);try{pe.data.set(re)}catch(e){var ye=pe.data,ve=ye.length;for(H=0;H<ve;H++)ye[H]=re[H]}P.putImageData(pe,0,0)}else{var ge=_.xgap,me=_.ygap,xe=Math.floor(ge/2),be=Math.floor(me/2);for(H=0;H<F;H++)if(J=M[H],$.reverse(),$[W]=j(H+1),$[0]!==$[1]&&void 0!==$[0]&&void 0!==$[1])for(U=[q=G(0),q],m=0;m<D;m++)U.reverse(),U[Q]=G(m+1),U[0]!==U[1]&&void 0!==U[0]&&void 0!==U[1]&&(Y=ze(J[m],(U[1]-U[0])*($[1]-$[0])),P.fillStyle="rgba("+Y.join(",")+")",P.fillRect(U[0]+xe,$[0]+be,U[1]-U[0]-ge,$[1]-$[0]-me))}Z=Math.round(Z/X),ee=Math.round(ee/X),te=Math.round(te/X);var _e=a("rgb("+Z+","+ee+","+te+")");e._hmpixcount=(e._hmpixcount||0)+X,e._hmlumcount=(e._hmlumcount||0)+X*_e.getLuminance();var Me=x.selectAll("image").data(t);Me.enter().append("svg:image").attr({xmlns:l.svg,preserveAspectRatio:"none"}),Me.attr({height:C,width:L,x:r,y:v,"xlink:href":S.toDataURL("image/png")})}function ze(e,t){if(void 0!==e){var r=V(e);return r[0]=Math.round(r[0]),r[1]=Math.round(r[1]),r[2]=Math.round(r[2]),X+=t,Z+=r[0]*t,ee+=r[1]*t,te+=r[2]*t,r}return[0,0,0,0]}function Ae(e,t,r,n){var a=e[r.bin0];if(void 0===a)return ze(void 0,1);var i,o=e[r.bin1],s=t[r.bin0],l=t[r.bin1],c=o-a||0,u=s-a||0;return i=void 0===o?void 0===l?0:void 0===s?2*(l-a):2*(2*l-s-a)/3:void 0===l?void 0===s?0:2*(2*a-o-s)/3:void 0===s?2*(2*l-o-a)/3:l+a-o-s,ze(a+r.frac*c+n.frac*(u+r.frac*i))}}))}},701:function(e,t,r){"use strict";var n=r(383);e.exports=function(e){n.select(e).selectAll(".hm image").style("opacity",(function(e){return e.trace.opacity}))}},719:function(e,t,r){"use strict";var n=r(397),a=r(380),i=r(384),o=r(402).extractOpts;e.exports=function(e,t,r,s,l,c){var u,h,f,d,p=e.cd[0],y=p.trace,v=e.xa,g=e.ya,m=p.x,x=p.y,b=p.z,_=p.xCenter,M=p.yCenter,z=p.zmask,A=y.zhoverformat,w=m,k=x;if(!1!==e.index){try{f=Math.round(e.index[1]),d=Math.round(e.index[0])}catch(t){return void a.error("Error hovering on heatmap, pointNumber must be [row,col], found:",e.index)}if(f<0||f>=b[0].length||d<0||d>b.length)return}else{if(n.inbox(t-m[0],t-m[m.length-1],0)>0||n.inbox(r-x[0],r-x[x.length-1],0)>0)return;if(c){var I;for(w=[2*m[0]-m[1]],I=1;I<m.length;I++)w.push((m[I]+m[I-1])/2);for(w.push([2*m[m.length-1]-m[m.length-2]]),k=[2*x[0]-x[1]],I=1;I<x.length;I++)k.push((x[I]+x[I-1])/2);k.push([2*x[x.length-1]-x[x.length-2]])}f=Math.max(0,Math.min(w.length-2,a.findBin(t,w))),d=Math.max(0,Math.min(k.length-2,a.findBin(r,k)))}var T=v.c2p(m[f]),F=v.c2p(m[f+1]),D=g.c2p(x[d]),N=g.c2p(x[d+1]);c?(F=T,u=m[f],N=D,h=x[d]):(u=_?_[f]:(m[f]+m[f+1])/2,h=M?M[d]:(x[d]+x[d+1])/2,v&&"category"===v.type&&(u=m[f]),g&&"category"===g.type&&(h=x[d]),y.zsmooth&&(T=F=v.c2p(u),D=N=g.c2p(h)));var O=b[d][f];if(z&&!z[d][f]&&(O=void 0),void 0!==O||y.hoverongaps){var B;Array.isArray(p.hovertext)&&Array.isArray(p.hovertext[d])?B=p.hovertext[d][f]:Array.isArray(p.text)&&Array.isArray(p.text[d])&&(B=p.text[d][f]);var L=o(y),C={type:"linear",range:[L.min,L.max],hoverformat:A,_separators:v._separators,_numFormat:v._numFormat},E=i.tickText(C,O,"hover").text;return[a.extendFlat(e,{index:y._after2before?y._after2before[d][f]:[d,f],distance:e.maxHoverDistance,spikeDistance:e.maxSpikeDistance,x0:T,x1:F,y0:D,y1:N,xLabelVal:u,yLabelVal:h,zLabelVal:O,zLabel:E,text:B})]}}},840:function(e,t,r){"use strict";e.exports=function(e,t,r){!1===r("zsmooth")&&(r("xgap"),r("ygap")),r("zhoverformat")}},913:function(e,t,r){"use strict";var n=r(380),a=r(678),i=r(840),o=r(403),s=r(484);e.exports=function(e,t,r,l){function c(r,a){return n.coerce(e,t,s,r,a)}a(e,t,c,l)?(c("text"),c("hovertext"),c("hovertemplate"),i(e,t,c,l),c("hoverongaps"),c("connectgaps",n.isArray1D(t.z)&&!1!==t.zsmooth),o(e,t,l,c,{prefix:"",cLetter:"z"})):t.visible=!1}}}]);