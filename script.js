// Get all the radio buttons and screen sections
const heroRadio = document.getElementById('hero');
const contactRadio = document.getElementById('contact');
const skillsRadio = document.getElementById('skills');
const imgRadio = document.getElementById('img');

const mainSection = document.querySelector('.mainS');
const contactSection = document.querySelector('.contactS');
const skillsSection = document.querySelector('.skillsS');
const imgSection = document.querySelector('.meS');

// Function to show the correct section based on the checked radio button
function updateScreen() {
    if (heroRadio.checked) {
        mainSection.style.display = 'block';
        contactSection.style.display = 'none';
        skillsSection.style.display = 'none';
        imgSection.style.display = 'none';
    } else if (contactRadio.checked) {
        mainSection.style.display = 'none';
        contactSection.style.display = 'block';
        skillsSection.style.display = 'none';
        imgSection.style.display = 'none';
    } else if (skillsRadio.checked) {
        mainSection.style.display = 'none';
        contactSection.style.display = 'none';
        skillsSection.style.display = 'block';
        imgSection.style.display = 'none';
    } else if (imgRadio.checked) {
        mainSection.style.display = 'none';
        contactSection.style.display = 'none';
        skillsSection.style.display = 'none';
        imgSection.style.display = 'block';
    }
}


// Add event listeners to the radio buttons
heroRadio.addEventListener('change', updateScreen);
contactRadio.addEventListener('change', updateScreen);
skillsRadio.addEventListener('change', updateScreen);
imgRadio.addEventListener('change', updateScreen);

// Initial setup to show the correct section on page load
updateScreen();