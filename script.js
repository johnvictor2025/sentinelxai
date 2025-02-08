document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.querySelector(".cta-button");
    
    if (ctaButton) {
        ctaButton.addEventListener("click", function(event) {
            event.preventDefault();
            alert("$SENTXAI Token Coming Soon! Stay Tuned.");
        });
    }
});
