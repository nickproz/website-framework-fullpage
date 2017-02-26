/*
-----------------------------------------
|               General JS              |
-----------------------------------------
*/
$(document).ready(function() {

	// Fade body content in after page has loaded
    $('body').css('visibility','visible').hide().fadeIn('fast');

	/**
	 * Responsive utility for determining if the current window is a desktop viewport.
	 * @returns {boolean} whether or not the window is a desktop viewport
	 */
	var desktopBreakpoint = 1024;
	var isDesktop = function() {
		return $(window).width() > desktopBreakpoint;
	};
});
