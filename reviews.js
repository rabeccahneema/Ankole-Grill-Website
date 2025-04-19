const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const contentSections = document.querySelectorAll('.review');
let currentSectionIndex = 0;
prevButton.addEventListener('click', () => {
    handleNavigation(-1);
  });
  nextButton.addEventListener('click', () => {
    handleNavigation(1);
  });
  function handleNavigation(direction) {
    let newIndex = currentSectionIndex + direction;
    if (newIndex >= 0 && newIndex < contentSections.length) {
      contentSections[currentSectionIndex].style.display = 'none';
      contentSections[newIndex].style.display = 'block';
      currentSectionIndex = newIndex;
      updateButtonStates();
    }
  }
  function updateButtonStates() {
    if (currentSectionIndex === 0) {
      prevButton.disabled = true;
    } else if (currentSectionIndex === contentSections.length - 1) {
      nextButton.disabled = true;
    } else {
      prevButton.disabled = false;
      nextButton.disabled = false;
    }
  }
  contentSections.forEach((section, index) => {
    if (index !== 0) {
      section.style.display = 'none';
    }
  });
  updateButtonStates();