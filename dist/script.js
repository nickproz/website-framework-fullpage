/*
-------------------------------------------
|               Navbar Logic              |
-------------------------------------------
*/
$(document).ready(function() {
    /*
    ----------------------------------------
    |               Variables              |
    ----------------------------------------
    */
    // JQuery nodes
    var $nav = $('.navigation');
    var $navLink = $('.nav-link-container');

    // Other variables
    var activeNavLinkClass = 'nav-active';
    var navLinks = ['#home', '#about', '#experience', '#skills', '#contact'];

    /*
     ----------------------------------------
     |               Functions              |
     ----------------------------------------
     */
    /**
     * Strips out hashes that are not menu items, and makes the hash home if no hash is set
     */
    var resetHash = function() {
        var hash = window.location.hash;
        if(hash === '' || navLinks.indexOf(hash) === -1) {
            window.location.hash = 'home';
        }
    };

    /**
     * Updates our menu by updating the active nav link item and updating the opacity
     * of our navbar based on where on the page we are.
     */
    var updateMenu = function() {
        var hash = window.location.hash;
        updateNavActiveItem(hash);
    };

    /**
     * Updates the active link in our menu. Finds the <a> tag corresponding to the hash and adds the active class to its parent.
     */
    var updateNavActiveItem = function(hash) {
        if(navLinks.indexOf(hash) >= 0) {
            $navLink.removeClass(activeNavLinkClass);
            var linkQuery = "a[href='" + hash + "']";
            $(linkQuery).parent().addClass(activeNavLinkClass);
        }
    }

    /**
     * Listener for a hash change, updates our menu.
     */
    var hashListener = function() {
        $(window).on('hashchange', function() {
            updateMenu();
        });
    };

    /**
     * Initialize our menu by resetting our hash if necessary, updating our menu, and calling our hash listener.
     */
    (function() {
        resetHash();
        updateMenu();

        // Comment in when not using the FullPage onLeave event
        // hashListener();
    })();

    /**
     * Full Page Plugin Settings.
     */
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'experience', 'skills', 'contact'],
        menu: '#menu',
        fixedElements: '',
        verticalCentered: true
        // Comment the following two lines out for auto scroll to be disabled
        ,autoScrolling: false,
        onLeave: function(index, nextIndex){
            updateMenu(nextIndex);
        }
    });
});

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
