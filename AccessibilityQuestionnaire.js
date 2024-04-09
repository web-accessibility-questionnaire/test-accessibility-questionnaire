//defines function called calculateScore that calculates accessibility score.
function calculateScore() { 
    //gets the website link  entered by user and removes any extra spaces
    const websiteLink = document.getElementById('websiteLink').value.trim();
    //check if website link is empty
    if (websiteLink === '') {
        //if website link is empty then show alert.
        alert('Please enter a valid website link.');
        //exit function
        return;
    } 

    var totalPoints = 0; // variable to store total points.
    var totalQuestions = 0; // variable to store total number of questions
    var recommendationsArray = {}; // empty object to store recommendations in categories..

    // calculate score for brightness questions
    totalPoints += getPoints("Q1") + getPoints("Q2") + getPoints("Q3");
    totalQuestions += 3;

    // calculate score for tracking questions
    totalPoints += getPoints("Q4") + getPoints("Q5") + getPoints("Q6");
    totalQuestions += 3;

    // calculate score for perceiving questions
    totalPoints += getPoints("Q7") + getPoints("Q8") + getPoints("Q9");
    totalQuestions += 3;

    // calculate score for point of regard questions
    totalPoints += getPoints("Q10") + getPoints("Q11");
    totalQuestions += 2;

    // calculate score for user settings question
    totalPoints += getPoints("Q12");
    totalQuestions += 1;

    // calculate score for assistive technologies questions
    totalPoints += getPoints("Q13") + getPoints("Q14") + getPoints("Q15");
    totalQuestions += 3;

    // calculate final accessibility score
    var accessibilityScore = (totalPoints / totalQuestions) * 100;

    // categorise the accessibility score

    //variable to store the accessibility category.
    var accessibilityCategory;

    //check the value of accessibilityScore to determine the accessibility category.

    // if accessibilityScore is between 0 and 40 then set accessibility category to "poor accessibility."
    if (accessibilityScore >= 0 && accessibilityScore <= 40) {
        accessibilityCategory = "Poor accessibility";

    //if accessibilityScore is between 41 and 60 then set accessibility category to "fair accessibility."
    } else if (accessibilityScore > 40 && accessibilityScore <= 60) {
        accessibilityCategory = "Fair accessibility";

    //if accessibilityScore is between 60 and 80 then set accessibility category to "good accessibility."
    } else if (accessibilityScore > 60 && accessibilityScore <= 80) {
        accessibilityCategory = "Good accessibility";
    
    //if accessibilityScore is above 80 then set accessibility category to "excellent accessibility" 
    } else {
        accessibilityCategory = "Excellent accessibility";
    }

    // Display the final accessibility score

    //retrive the element that displays the result (Accessibility score + catgeory) using result ID
    var resultElement = document.getElementById("result");
    //set html content of result eleemnt to show the accessibility score
    resultElement.innerHTML = "<h4>Accessibility Score:</h4> <p>" + accessibilityScore.toFixed(2) + "</p>";
    //add html content to result element to show accessibility categeory
    resultElement.innerHTML += "<p>Accessibility Category: " + accessibilityCategory + "</p>";


    // Display recommendations for each question with a "no" answer
    // Recommendatins for category 1- Brightness & Colour
    
    // Recommendations for Q1- Users must be able to change the overall brightness of a display.
    displayRecommendations("Q1", ["Bright light from a screen or other sources prevents some people with low vision (including those with photophobia and with reading disabilities such as dyslexia) from reading and causes pain for some people. Some people turn down the brightness of their screen or use an overlay. <br> <br> Users must be able to adjust the overall brightness of the display. In order to improve this aspect of the website in terms of web accessibility for the visually imapired, provide an option to adjust brightness settings in the user preferences."], "Brightness & Colour", recommendationsArray, "Question 1") 

    // Recommendations for Q2- Users must be given preferences.
    displayRecommendations("Q2", "Ensure that your website supports users' ability to adjust the brightness of the display. This feature can significantly improve accessibility for users with low vision who may require different levels of brightness for comfortable viewing. <br> <br>  Offer a range of customisable settings beyond just brightness adjustment. This could include options for contrast, color temperature, and automatic adjustment based on ambient light conditions or time of day. Providing these options will allow users to tailor the display settings to their specific visual needs and preferences.", "Brightness & Colour", recommendationsArray, "Question 2");

    // Recommendations for Q3- Users must have alternative options to colour such as a black background option in addition to a white background.
    displayRecommendations("Q3", "Some people need low brightness, especially for backgrounds. Some people who need low brightness for backgrounds also need low brightness overall and thus need low brightness text. <br> <br> Other people need high contrast between text and background, including many older people who lose contrast sensitivity from ageing. Some read better with dark text on light background. <br> <br> For some people, common color combinations or colors from a limited color palette work perfectly. For example, black text on white background or the inverse with white text on black background. Other people need to select more specific background and text colors. For example, people who need low brightness overall, need to select the specific background and text colors that provide sufficient contrast for them yet not too high brightness. Readable and optimal color combinations differs vastly among individuals and can even vary for one individual depending on conditions such as fatigue and lighting.", "Brightness & Colour", recommendationsArray, "Question 3");

     // Recommendations for category 2- Tracking

     // Recommendations for Q4- Rewrap for One Direction Scrolling
    displayRecommendations("Q4", "For many people, with and without disabilities, it is difficult to read when they have to scroll back and forth to read a line of text. When people with low vision increase the text size and the text doesn't “reflow”, they sometimes have to scroll horizontally several screens to read a single line of text. <br> <br> Additionally, it is hard for some people to find the scrollbar and cursor. Getting from the end of a line of text, scrolling back left, and then finding the beginning of the next line can take considerable attention. This degrades reading flow and comprehension, sometimes significantly enough that effective reading is not possible when horizontal scrolling is required. <br> <br> Ensure that blocks of text are formatted to rewrap in a manner that requires only one direction of scrolling, typically vertical scrolling for languages written from left to right or right to left. This prevents the need for horizontal scrolling, improving readability and user experience. ", "Tracking", recommendationsArray, "Question 4");

     // Recommendations for Q5- Reflow to Single Column
    displayRecommendations("Q5", "For many people, with and without disabilities, it is more difficult to read when they have to scroll from the bottom of a column of text to the top of another column. For some people with low vision, with multiple columns, they have to scroll up several screens to get from the bottom of one column to the top of the next. Additionally, it is hard for some people to find the scrollbar and cursor. Getting from the bottom of a column and finding the top of the next column can take considerable attention. This degrades reading flow and comprehension, sometimes significantly. <br> <br> Users must have the option to arrange blocks of text as a single continuous block rather than dividing them into multiple columns.", "Tracking", recommendationsArray, "Question 5");

    // Recommendations for Q6- Hyphenation
    displayRecommendations("Q6", "For some people it is very difficult to understand words that are hyphenated (for exmaple check-in), and they need to turn off hyphenation. While this is primarily an issue for people with cognitive impairments, hyphenation becomes more of an issue when text size is increased, thus it is also related to low vision. Some people with very large text may prefer hyphenation on so that more characters fit on a line of text. <br> <br> Users must be given an option to turn hyphenation on or off based on their preferences.", "Tracking", recommendationsArray, "Question 6");

     // Recommendations for category 3- Perceiving 

     // Recommendations for Q7- Text Size
     displayRecommendations("Q7", "Some people need larger text in order to perceive letters. Although increasing size is most common, some people with tunnel vision and good visual acuity may prefer smaller letters so they can see more words at a time. <br> <br> Example issues: <br><br> - Text settings don't increase the text in tool-tip text and other pop-up text. <br> - Text settings don't increase the text in image. <br> - Text settings don't increase the text in maps. <br><br> The solution to this problem is that you must ensure that Users can change the text size (font size) of all text, without zooming the entire interface.", "Perceiving", recommendationsArray, "Question 7");

      // Recommendations for Q8- Font
     displayRecommendations("Q8", "Some fonts/typefaces are more readable than others. For example, some people cannot read fonts with sub-pixel rendering. <br><br> Users should be able to change the font face (also called font family or typeface) of all text, choosing from a wide range of fonts including serif and sans serif fonts.", "Perceiving", recommendationsArray, "Question 8");
    
     // Recommendations for Q9-  Size of All Elements
     displayRecommendations("Q9", "Some people need to increase the size of all interface elements in order to perceive information. Although increasing size is most common, some people with tunnel vision and good visual acuity may prefer to decrease the size so they can see more information at a time. <br> <br> For example, users need to: <br><br> - Zoom to make everything larger. <br> - Increase the width of the text cursor, which is usually done at the operating system level. <br> - Increase the size of the mouse pointer, which is usually done at the operating system level. <br><br> Provide an option to change the size of all interface elements to accommodate user perception needs.", "Perceiving", recommendationsArray, "Question 9");
    
    // Recommendations for category 4- Point of Regard and Proximity

    // Recommendations for Q10- Maintain Point of Regard
    displayRecommendations("Q10", "Sometimes people will be viewing content and need to change the display to read it better, for example, make the text larger. If the place where they are reading (known as “point of regard”) changes much, they lose their place and especially with a small visible area and large text, it can be very difficult to find their place again. <br><br> Example issues: <br><br> -Mouse hover changes point of regard, but is lost. <br><br> - Screen magnification user hovers over image, acronym, or other thing with pop-up. The pop-up is larger than their view. <br><br> - When the user scrolls to read it, it loses focus and disappears. <br><br> Ensure that the current reading position remains visible after making adjustments. ", "Point of Regard and Proximity", recommendationsArray, "Question 10");

    // Recommendations for Q11- Proximity of Related Information
    displayRecommendations("Q11", "People with limited field of vision or who use large text have little in their field of view at one time. If related information is not close together, they can have trouble knowing about it, seeing it, and using it. In most cases, it is best if: <br><br> - Related information such as labels and controls, or matching tests in two columns, or feedback is in close proximity. <br><br> - Feedback is in close proximity to the user’s visual focus. <br><br> - Dialog boxes and other such pop-up messages appear over the users point of regard. <br><br> - Users are informed of new information that may be outside of their view — such as a new browser tab opening in the background. <br><br> In short, related information such as labels and controls must be kept in close proximity.", "Point of Regard and Proximity.", recommendationsArray, "Question 11");

    // Recommendations for category 5- Work with User Settings

    // Recommendations for Q12-  Seeing All Interface Elements
    displayRecommendations("Q12", "When people increase text size, increase leading, or change other text display aspects through text-only zoom or other text settings, content that is poorly designed can become unusable. For example, with text areas in web pages, sometimes columns and sections overlap, the space between lines disappears, lines of text become too long, or text disappears. <br><br> Often it is best for text areas to automatically resize to fit the text, and for users to be able to change the size of text areas. When the areas cannot be resized to accommodate all content, usually a scrollbar should be available. <br><br> In short, Users must be able to see all interface elements that are intended for users to see, including when users have changed display settings such as text size.", "Work with User Settings", recommendationsArray, "Question 12");


    // Recommendations for category 5- Compatibility with Assistive Technologies

    // Recommendations for Q13-  Screen Reader
    displayRecommendations("Q13", "Sometimes, users with low vision rely on screen readers to navigate and understand content on websites. Screen readers are assistive technologies that audibly convey the text displayed on a webpage, allowing users to listen to the content rather than visually reading it. To ensure effective navigation for users relying on screen readers, website developers should consider the following recommendations: <br><br> - Provide Descriptive Text: Ensure that all images, buttons, links, and other interactive elements are accompanied by descriptive text, known as alternative text. This text should accurately convey the purpose or function of the element to users who are unable to see it. <br><br> - Semantic HTML Structure: Use semantic HTML markup to structure the content of the website. This helps screen readers interpret the layout and hierarchy of the page, making it easier for users to navigate through headings, paragraphs, lists, and other structural elements.", "Compatibility with Assistive Technologies", recommendationsArray, "Question 13");

    // Recommendations for Q14-  Keyboard Accessibility
    displayRecommendations("Q14", "Sometimes, users with low vision rely on keyboard controls to navigate websites effectively, especially if they encounter difficulties using a mouse. Ensuring keyboard accessibility is very important for these users to navigate through your website with ease. website developers should consider the following recommendations: <br><br> - Make sure all interactive elements, such as links, buttons, and form fields, are clearly visible when they receive keyboard focus. Providing a distinct visual indication, such as a highlighted outline or change in color, helps users with low vision track their navigation and understand where they are on the page. <br><br> - Arrange the tab order logically to guide users through the content in a meaningful sequence. Ensure that users can navigate through interactive elements, such as navigation menus and important links, without missing any crucial information. <br><br> - Design forms with keyboard accessibility in mind, ensuring that users can navigate through form fields, select options, and submit forms seamlessly using keyboard controls. Provide clear instructions and error messages to assist users with low vision in completing forms accurately and efficiently.", "Compatibility with Assistive Technologies", recommendationsArray, "Question 14");

    // Recommendations for Q15-  Text-to-Speech
    displayRecommendations("Q15", "Sometimes, users with low vision require text-to-speech functionality to effectively access and understand the content of a website. In order to cater to the needs of these users and ensure the accessibility of your website, consider the following recommendations for implementing and optimising text-to-speech functionality: <br><br> - Incorporate text-to-speech functionality into the website to allow users with low vision to listen to the content instead of relying solely on visual text. Ensure that this feature covers all relevant textual content, including main content, headings, links, and other important elements, to provide full accessibility. <br><br> - Provide users with control options to customise the text-to-speech experience according to their preferences. Allow users to adjust the speech rate, volume, and voice settings to optimise their listening experience. <br><br> - Ensure that the text-to-speech functionality is accessible via keyboard controls, allowing users to activate and control the feature without relying on a mouse.", "Compatibility with Assistive Technologies", recommendationsArray, "Question 15");

    // Display all recommendations storeed in recommendationsArray
    displayAllRecommendations(recommendationsArray);
}

//define funnction called getPoints- calculates points for specific questiion based on its name.
// it has a parameter called 'questionName which specifies the name of question.
function getPoints(questionName) {
    //retrieve value of the checked input element with specified name and store it in  variable 'value'. 
    var value = document.querySelector('input[name="' + questionName + '"]:checked').value;
    // return 1 if the value is 'yes' otherwise return 0.
    return value === "yes" ? 1 : 0;
}

// define function called displayRecommendation with parameters: questionNumber, recommendation, category, recommendationsArray and questionDescription
function displayRecommendations(questionNumber, recommendation, category, recommendationsArray, questionDescription) {
    // retrive the value of the input of the radio button corresponding to questionNumber
    var value = document.querySelector('input[name="' + questionNumber + '"]:checked').value;
    //check if value = no
    if (value === "no") {
        //check if there are no recommendations stored for the specified catgeory in the recommendationsArray
        if (!recommendationsArray[category]) {
            //if there are no recommendations for the category then initialise an empty array.
            recommendationsArray[category] = [];
        }
        // push new recommendation entry to recommendationArray under specified category
        recommendationsArray[category].push(`${questionDescription}: ${recommendation}`);
    }
}

//define function called displayAllRecommendations with parameter called recommendationsArray.
function displayAllRecommendations(recommendationsArray) {
    // Retrieve the element with ID "recommendations" and store it in recommendationElement
    var recommendationElement = document.getElementById("recommendations");

    // Clear any exisiting content within the recommendationElement
    recommendationElement.innerHTML = "";

    // Add the Recommendations heading to the recommendationElement
    recommendationElement.innerHTML += "<h4>Recommendations:</h4>";

    // Iterate over each category in recommendationsArray
    for (var category in recommendationsArray) {
        //retrive array of  reccomendations for current category from recommendations
        var categoryRecommendations = recommendationsArray[category];

        // If there are recommendations for this category
        if (categoryRecommendations.length > 0) {
            // Add the category heading to recommendationElement
            recommendationElement.innerHTML += `<div class="category-heading">${category}:</div>`;

            // Add the recommendation list as unordered list to recommendationElement
            recommendationElement.innerHTML += "<ul>";
            //iterate over each recommendation in the categoryRecommendations array
            categoryRecommendations.forEach(function (recommendation) {
                // add each recommendation as a list item with the class "recommendation-item" to the unordered list
                recommendationElement.innerHTML += `<li class="recommendation-item">${recommendation}</li>`;
            });

            // add a closing unordered list tag to the recommendationElement
            recommendationElement.innerHTML += "</ul>";
        }
    }

    //initlaise a boolean variable ismpty to true
    var isEmpty = true;
    // Iterate over each category in the recommendationsArray
    for (var category in recommendationsArray) {
        // if the length of recommendations in the curent category is greater than 0
        if (recommendationsArray[category].length > 0) {
            // set isEmpty to false and exit the loop
            isEmpty = false;
            break;
        }
    }
    // Check if isEmpty is true
    if (isEmpty) {
        // if true, display a mesage indicating no recommendations are present
        recommendationElement.innerHTML += "<p>No recommendations at this time. Your website is doing well in accessibility.</p>";
    }
    
}

// Add an event listner to the form to call calculateScore() when submitted
document.getElementById("questionForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Calculate the accessibility score and display recomendations
    calculateScore();

    // Set the value of the hidden input field with ID "accessibilityScore" to the accessibility score. round to 2 decimal places
    document.getElementById("accessibilityScore").value = accessibilityScore.toFixed(2);
    /// convert the recomendationsArray object into a JSON string
    const myJSON = JSON.stringify(recommendationsArray);
    // set the value of the HTML element with ID "recommendations" to the JSON string
    document.getElementById("recommendations").value = myJSON; // https://www.w3schools.com/js/js_json_stringify.asp

    // Submit the form
    this.submit();
});

// Add an event listener to the checkbox to enable/disable the "Send Results" button
document.getElementById("consentCheckbox").addEventListener("change", function() {
    // retrieve the sendResultsButton element by its ID
    var sendResultsButton = document.getElementById("sendResultsButton");
    // disable sendResultsButton if the consentCheckbox is unchecked, otherwise enable it..
    sendResultsButton.disabled = !this.checked;
});


// Add an event listener to the sendResultsButton to detect clicks
document.getElementById("sendResultsButton").addEventListener("click", function() {
    // retrieve the consentCheckbox element by its ID
    var consentCheckbox = document.getElementById("consentCheckbox");
    // check if the consentCheckbox is not checked
    if (!consentCheckbox.checked) {
        // display an alert message prompting the user to consent to participate in the research..
        alert("Please consent to participate in the research.");
        return; // Exit the function if the checkbox is not checked
    }

    //output form data to the console for debugging purposes
    console.log("Form data:", {
        //get value of accessibility score from the 'result' element and store it in the object
        accessibilityScore: document.getElementById("result").value,
        //get value of recommendations from the 'recommendations' element and store it in the object
        recommendations: document.getElementById("recommendations").value
    });

    // Submit the form
    document.getElementById("questionForm").submit();
});
