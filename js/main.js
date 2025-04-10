// js/main.js

(function($) {

    "use strict";

    // ... [Keep all existing code in main.js like AOS, scrollax, carousel init, etc.] ...

    // Typing Animation Functionality
    var typingAnimation = function() {
        const typingAnimationElement = document.getElementById('typing-animation');
        if (!typingAnimationElement) return; // Exit if element not found

        const typingTexts = [
            'Stats & ML Instructor', // Removed extra spaces
            'Data Analyst',          // Changed 'Analysis' to 'Analyst' role
            'Data Scientist',        // Changed 'Science' to 'Scientist' role
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typeSpeed = 150; // Speed of typing
        const deleteSpeed = 100; // Speed of deleting
        const delayBetweenTexts = 1500; // Pause before starting to delete/type next

        function type() {
            const currentText = typingTexts[textIndex];
            let displayText = '';

            if (isDeleting) {
                // Deleting
                displayText = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Typing
                displayText = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            typingAnimationElement.textContent = displayText;
            typingAnimationElement.setAttribute('aria-label', displayText); // Accessibility

            let typeDelay = isDeleting ? deleteSpeed : typeSpeed;

            if (!isDeleting && charIndex === currentText.length) {
                // Finished typing word
                typeDelay = delayBetweenTexts;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Finished deleting word
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
                typeDelay = typeSpeed / 2; // Short pause before typing next
            }

            setTimeout(type, typeDelay);
        }

        // Start the animation only if the element exists
        if (typingAnimationElement) {
           setTimeout(type, typeSpeed); // Initial start delay
        }
    };
    typingAnimation(); // Call the function to start it


    // ... [Rest of your existing code in main.js] ...


})(jQuery);