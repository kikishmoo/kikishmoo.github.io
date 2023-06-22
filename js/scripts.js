/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

// The 'DOMContentLoaded' event is fired when the initial HTML document has been completely loaded and parsed
window.addEventListener('DOMContentLoaded', () => {
    // Initialize scrollPos to 0; this variable is used to keep track of where you last scrolled
    let scrollPos = 0;

    // Get the element with id 'mainNav'; this is presumably the main navigation bar
    const mainNav = document.getElementById('mainNav');

    // Get the height of the navigation bar
    const headerHeight = mainNav.clientHeight;

    // Add a scroll event listener to the window
    window.addEventListener('scroll', function() {
        // Get the current scroll position from the top of the page; 
        // the top position of the body rectangle is negated to get a positive value
        const currentTop = document.body.getBoundingClientRect().top * -1;

        // Check if the current scroll position is less than the previous one
        if (currentTop < scrollPos) {
            // User is scrolling up
            // Check if the current scroll position is greater than 0 and mainNav has the class 'is-fixed'
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                // If so, add the class 'is-visible' to mainNav
                mainNav.classList.add('is-visible');
            } else {
                // If not, remove 'is-visible' and 'is-fixed' classes from mainNav
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // User is scrolling down
            // Remove 'is-visible' class from mainNav
            mainNav.classList.remove(['is-visible']);

            // Check if the current scroll position is greater than the height of the header and mainNav does not have the class 'is-fixed'
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                // If so, add the class 'is-fixed' to mainNav
                mainNav.classList.add('is-fixed');
            }
        }

        // Update scrollPos with the current scroll position for the next scroll event
        scrollPos = currentTop;
    });
})
