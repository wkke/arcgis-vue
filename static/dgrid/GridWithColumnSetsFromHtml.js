//>>built
define("dgrid/GridWithColumnSetsFromHtml",["./GridFromHtml","./ColumnSet","dojo/_base/declare"],function(p,q,r){function t(f){function u(c){e+=c;b=v[d];e>=b&&(l[d][a]=g,e-=b,d++,g=[])}var l=[],v=[],h=[],k=f.getElementsByTagName("colgroup"),m=k.length,w=f.getElementsByTagName("tr"),q=w.length,r=p.utils.getNumFromAttr,t=p.utils.getColumnFromCell,e,d,g,n,a,c,b;if(2>m)return!1;for(a=0;a<m;a++)for(b=r(k[a],"span")||1,v[a]=b,l[a]=[],h[a]=[],c=0;c<b;c++)h[a][c]=0;for(a=0;a<q;a++){e=d=0;g=[];n=w[a];k=n.getElementsByTagName("th");
m=k.length;for(c=0;c<m;c++){for(;h[d][e];)h[d][e]--,u(1);b=t(k[c]);g.push(b);h[d][e]=b.rowSpan?b.rowSpan-1:0;u(b.colSpan||1)}g.length&&(l[d][a]=g)}n&&f.removeChild(n.parentNode);return l}return r("dgrid.GridWithColumnSetsFromHtml",[p,q],{configStructure:function(){var f;!this._checkedTrs&&(f=t(this.srcNodeRef))&&(this.columnSets=f,this._checkedTrs=!0);return this.inherited(arguments)}})});