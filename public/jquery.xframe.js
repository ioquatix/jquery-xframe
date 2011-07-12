// This file is part of the "jQuery.XFrame" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>


jQuery.fn.xframe=function(src){$(this).addClass('xframe');if(src)
$(this).attr('src',src);$(this).xreload();};jQuery.fn.xreload=function(){$(this).each(function(){var cur=this;while(cur!=null){if($(cur).hasClass('xframe')){var src=$(cur).attr('src');$.ajax({url:src,cache:false,dataType:"html",success:function(data){$(cur).replaceWith(data);}});break;}
cur=cur.parentElement;}});};jQuery.xframe=function(options){jQuery('.xframe').xframe();};function xReload(e){return function(){$(e).xreload();}}