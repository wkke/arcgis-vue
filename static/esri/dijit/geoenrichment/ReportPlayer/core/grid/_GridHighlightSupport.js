// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/_GridHighlightSupport","dojo/_base/declare dojo/on dojo/dom-class dojo/dom-geometry esri/dijit/geoenrichment/utils/MouseUtil ./coreUtils/GridQueryUtil".split(" "),function(b,c,e,k,g,h){return b(null,{_highlightRowsOnHoverHandle:null,_setHighlightRowsOnHoverAttr:function(b){this._highlightRowsOnHoverHandle&&this._highlightRowsOnHoverHandle.remove();this._highlightRowsOnHoverHandle=null;if(b){var f=this;this._highlightRowsOnHoverHandle=c(this.domNode,
"mouseover",function(){var b=c(document.body,"mousemove",function(c){var d;f.getFieldCells().forEach(function(a){e.remove(a.domNode,"gridCellOver");g.isMouseOver(a&&a.domNode)&&(d=a)});d?(c=h.queryCells(f,{rowIndex:d.gridData.index}))&&c.forEach(function(a){e.add(a.domNode,"gridCellOver")}):b.remove()})})}}})});