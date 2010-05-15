/* 
	This file is part of the "jQuery.XFrame" project, and is licensed under the GNU AGPLv3.

	Copyright 2010 Samuel Williams. All rights reserved.

	For more information, please see http://www.oriontransfer.co.nz/software/jquery-xframe

	This program is free software: you can redistribute it and/or modify it under the terms
	of the GNU Affero General Public License as published by the Free Software Foundation,
	either version 3 of the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
	without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
	See the GNU General Public License for more details.

	You should have received a copy of the GNU Affero General Public License along with this
	program. If not, see <http://www.gnu.org/licenses/>.
*/

jQuery.fn.xframe = function (src) {
	$(this).addClass('xframe');
	
	if (src)
		$(this).attr('src', src);
	
	$(this).xreload();
};

jQuery.fn.xreload = function () {
	$(this).each(function() {
		var cur = this;
		
		while (cur != null) {
			if ($(cur).hasClass('xframe')) {
				var src = $(cur).attr('src');
				var attrs = $(cur).attr('attrs') || {};
				
				$.get(src, attrs, function(data) {
					$(cur).replaceWith($(data));
				});
				
				break;
			}
			
			cur = cur.parentElement;
		}
	});
};

jQuery.xframe = function (options) {
	jQuery('.xframe').xframe();
};

function xReload (e) {
	return function () {
		$(e).xreload();
	}
}
