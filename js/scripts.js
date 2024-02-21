// Constants for query selector
const studentIdDisplay = document.getElementById('myStudentId');
const customNumberInput = document.getElementById('customNumber');
const custColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const displayedImage = document.getElementById('images');

const studentId = '200556069'; // Replace with your actual student ID
const imageArray = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg','./img/img4.jpg','./img/img5.jpg']; // Update with actual image paths

// Function to change bg color from user input and display student id
function changeCustomColor() {
    const number = parseInt(customNumberInput.value);
    document.body.style.backgroundColor = getColorFromNumber(number);
    studentIdDisplay.textContent = `Student ID: ${studentId}`;
}

// Function to change bg color from a random number
function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomNum; 
    document.body.style.backgroundColor = getColorFromNumber(randomNum);
    studentIdDisplay.textContent = `Student ID: ${studentId}`;
}

// Helper function to determine color from number
function getColorFromNumber(number) {
    if (number < 0 || number > 100) return 'red';
    if (number <= 20) return 'green';
    if (number <= 40) return 'blue';
    if (number <= 60) return 'orange';
    if (number <= 80) return 'purple';// Grabbing HTML elements for manipulation
    const studentIdDisplay = document.getElementById('myStudentId');
    const customNumberInput = document.getElementById('customNumber');
    const custColorButton = document.querySelector('.custColor');
    const randColorButton = document.querySelector('.randColor');
    const imageSelect = document.getElementById('imageSelect');
    const displayedImage = document.getElementById('images');
    
    // Predefined values for student ID and image paths
    const studentId = '200556069'; // Replace with your actual student ID
    const imageArray = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg', './img/img5.jpg']; // Image paths
    
    /**
     * Changes background color based on user input and displays student ID.
     */
    function changeCustomColor() {
        const number = parseInt(customNumberInput.value);
        document.body.style.backgroundColor = getColorFromNumber(number);
        studentIdDisplay.textContent = `Student ID: ${studentId}`;
    }
    
    /**
     * Changes the background color to a random value and updates the input field.
     */
    function changeRandomColor() {
        const randomNum = Math.floor(Math.random() * 100) + 1;
        customNumberInput.value = randomNum; 
        document.body.style.backgroundColor = getColorFromNumber(randomNum);
        studentIdDisplay.textContent = `Student ID: ${studentId}`;
    }
    
    /**
     * Determines the background color based on the given number.
     * @param {number} number - The number to determine the color for.
     * @return {string} The color determined.
     */
    function getColorFromNumber(number) {
        if (number < 0 || number > 100) return 'red';
        else if (number <= 20) return 'green';
        else if (number <= 40) return 'blue';
        else if (number <= 60) return 'orange';
        else if (number <= 80) return 'purple';
        else return 'yellow';
    }
    
    /**
     * Populates the image selection dropdown to prevent duplicate additions.
     */
    function addList() {
        if (imageSelect.options.length > 1) return; // Checks if options already exist
        imageArray.forEach((src, index) => {
            const option = document.createElement('option');
            option.value = src;
            option.textContent = `Image ${index + 1}`;
            imageSelect.appendChild(option);
        });
    }
    
    /**
     * Updates the displayed image based on the user's selection.
     */
    function changeImage() {
        const selectedImage = imageSelect.value;
        displayedImage.src = selectedImage;
        displayedImage.alt = 'Selected Image';
    }
    
    // Event listeners for buttons and select dropdown
    custColorButton.addEventListener('click', changeCustomColor);
    randColorButton.addEventListener('click', changeRandomColor);
    imageSelect.addEventListener('change', changeImage);
    
    // Initialize the select list with images on page load
    addList();
    
    return 'yellow';
}

// Function to generate options for select list
function addList() {
    if (imageSelect.options.length > 1) return; // Prevents adding duplicates
    imageArray.forEach((src, index) => {
        const option = document.createElement('option');
        option.value = src;
        option.textContent = `Image ${index + 1}`;
        imageSelect.appendChild(option);
    });
}

// Function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    displayedImage.src = selectedImage;
    displayedImage.alt = 'Selected Image';
}

// Event listeners
custColorButton.addEventListener('click', changeCustomColor);
randColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// Initialize image select list
addList();
