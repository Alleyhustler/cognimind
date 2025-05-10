
// ------------------------------ OPEN WB TAB!! ------------------------------ //

          function Slide() {
          document.getElementById("MyWorld").classList.toggle("Open");
          }
          
          const buttonElement = document.getElementById("button");
          if (buttonElement) {
              // If the element exists, add the event listener
              buttonElement.addEventListener("keydown", function(event) {
                  // Check if the key pressed is Enter (key code 13)
                  if (event.keyCode === 13) {
                      // Simulate a click event on the button
                      this.click();
                  }
              });
          }
// ------------------------------ OPEN WB TAB!! ------------------so------------ //
// ------------------------------ ADD FOOTER!! ------------------------------ //

      fetch ("https://pandurso.neocities.org/footer")
        .then(x => x.text())
        .then(y => document.getElementById("footer").innerHTML = y);

// ------------------------------ ADD FOOTER!! ------------------------------ //
// -------------------------------- ADD NAV!! -------------------------------- //

document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Verifique se existe um elemento <nav>
        const navElement = document.querySelector('nav');
        if (navElement) {
            // Fetch o conteúdo HTML
            const response = await fetch("nav.html");
            if (response.ok) {
                const content = await response.text();
                navElement.innerHTML = content;

                // Percorra os links do menu
                const currentPageUrl = document.URL;
                const navLinks = navElement.querySelectorAll('a');
                navLinks.forEach(link => {
                    if (link.href === currentPageUrl) {
                        // Adicione a classe "current" ao link da página atual
                        link.classList.add('currentPage');
                        // Desative o link redundante
                        link.removeAttribute('href');
                    }
                });
            } else {
                console.error("Error on fetching nav.html:", response.status);
            }
        }
    } catch (error) {
        console.error("Error on fetching or inserting:", error);
    }
});

// -------------------------------- ADD NAV!! -------------------------------- //

// ------------------------------ ADD TOP TAB!! ------------------------------ //

    // Add font stylesheets
    Object.entries(fontLinks).forEach(([font, url]) => {
      if (font === 'openDyslexic') {
        // For OpenDyslexic, we add the CSS differently
        const style = document.createElement('style');
        style.textContent = `
          @font-face {
            font-family: 'OpenDyslexic';
            src: url('https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/fonts/OpenDyslexic-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
        `;
        document.head.appendChild(style);
      } else {
        const link = document.createElement('link');
        link.href = url;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
    });
    
    // Elements
    const fontSizeSlider = document.getElementById('fontSizeSlider');
    const contrastSlider = document.getElementById('contrastSlider');
    const spacingSlider = document.getElementById('spacingSlider');
    const fontSelect = document.getElementById('fontSelect');
    const toggleCursorsBtn = document.getElementById('toggleCursors');
    const contentExample = document.getElementById('contentExample');
    
    // Button controls
    document.getElementById('decreaseFont').addEventListener('click', () => {
      fontSizeSlider.value = Math.max(parseFloat(fontSizeSlider.value) - 0.1, fontSizeSlider.min);
      updateFontSize();
    });
    
    document.getElementById('increaseFont').addEventListener('click', () => {
      fontSizeSlider.value = Math.min(parseFloat(fontSizeSlider.value) + 0.1, fontSizeSlider.max);
      updateFontSize();
    });
    
    document.getElementById('decreaseContrast').addEventListener('click', () => {
      contrastSlider.value = Math.max(parseFloat(contrastSlider.value) - 0.3, contrastSlider.min);
      updateContrast();
    });
    
    document.getElementById('increaseContrast').addEventListener('click', () => {
      contrastSlider.value = Math.min(parseFloat(contrastSlider.value) + 0.3, contrastSlider.max);
      updateContrast();
    });
    
    document.getElementById('decreaseSpacing').addEventListener('click', () => {
      spacingSlider.value = Math.max(parseFloat(spacingSlider.value) - 0.1, spacingSlider.min);
      updateSpacing();
    });
    
    document.getElementById('increaseSpacing').addEventListener('click', () => {
      spacingSlider.value = Math.min(parseFloat(spacingSlider.value) + 0.1, spacingSlider.max);
      updateSpacing();
    });
    
    // Slider updates
    fontSizeSlider.addEventListener('input', updateFontSize);
    contrastSlider.addEventListener('input', updateContrast);
    spacingSlider.addEventListener('input', updateSpacing);
    fontSelect.addEventListener('change', updateFont);
    
    // Cursor highlighting
    let cursorHighlighting = false;
    toggleCursorsBtn.addEventListener('click', () => {
      cursorHighlighting = !cursorHighlighting;
      toggleCursorsBtn.textContent = cursorHighlighting ? 'Turn Off Cursor Highlighting' : 'Turn On Cursor Highlighting';
      document.body.style.cursor = cursorHighlighting ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'14\' fill=\'rgba(74, 144, 226, 0.3)\' stroke=\'%234a90e2\' stroke-width=\'2\'/%3E%3C/svg%3E"), auto' : 'default';
    });
    
    // Update functions
    function updateFontSize() {
      const size = fontSizeSlider.value;
      document.body.style.fontSize = `${size}rem`;
      saveSettings();
    }
    
    function updateContrast() {
      const contrast = contrastSlider.value;
      if (contrast < 1) {
        // Lower contrast
        const bgColor = `rgba(0, 0, 0, ${0.1 * contrast})`;
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = `rgba(0, 0, 0, ${0.7 + (0.3 * contrast)})`;
      } else if (contrast > 1) {
        // Higher contrast
        const contrastLevel = (contrast - 1) / 2; // 0 to 1 scale
        document.body.style.backgroundColor = contrastLevel > 0.5 ? 'black' : `rgba(0, 0, 0, ${contrastLevel * 2})`;
        document.body.style.color = 'white';
      } else {
        // Normal contrast
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
      }
      saveSettings();
    }
    
    function updateSpacing() {
      const spacing = spacingSlider.value;
      document.body.style.letterSpacing = `${spacing}em`;
      saveSettings();
    }
    
    function updateFont() {
      const font = fontSelect.value;
      switch(font) {
        case 'lexend':
          document.body.style.fontFamily = 'Lexend, sans-serif';
          break;
        case 'atkinson':
          document.body.style.fontFamily = 'Atkinson Hyperlegible, sans-serif';
          break;
        case 'openDyslexic':
          document.body.style.fontFamily = 'OpenDyslexic, sans-serif';
          break;
        default:
          document.body.style.fontFamily = '';
      }
      saveSettings();
    }
    
    // Save and load settings
    function saveSettings() {
      const settings = {
        fontSize: fontSizeSlider.value,
        contrast: contrastSlider.value,
        spacing: spacingSlider.value,
        font: fontSelect.value,
        cursorHighlighting: cursorHighlighting
      };
      localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    }
    
    function loadSettings() {
      const savedSettings = localStorage.getItem('accessibilitySettings');
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        
        // Apply font size
        fontSizeSlider.value = settings.fontSize;
        updateFontSize();
        
        // Apply contrast
        contrastSlider.value = settings.contrast;
        updateContrast();
        
        // Apply spacing
        spacingSlider.value = settings.spacing;
        updateSpacing();
        
        // Apply font
        fontSelect.value = settings.font;
        updateFont();
        
        // Apply cursor highlighting
        cursorHighlighting = settings.cursorHighlighting;
        toggleCursorsBtn.textContent = cursorHighlighting ? 'Turn Off Cursor Highlighting' : 'Turn On Cursor Highlighting';
        document.body.style.cursor = cursorHighlighting ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'14\' fill=\'rgba(74, 144, 226, 0.3)\' stroke=\'%234a90e2\' stroke-width=\'2\'/%3E%3C/svg%3E"), auto' : 'default';
      }
    }

// ------------------------------ FONT AND FILTER!! ------------------------------ //

        
          const displayText = document.getElementById("Body");
          
          const decreaseFontButton = document.getElementById("decreaseFont");
          const increaseFontButton = document.getElementById("increaseFont");
          const fontSizeSlider = document.getElementById("font-size-slider");
          
          const decreaseContrastButton = document.getElementById("decreaseContrast");
          const increaseContrastButton = document.getElementById("increaseContrast");
          const contrastSlider = document.getElementById("contrast-slider");
          
          const decreaseSpacingButton = document.getElementById("decreaseSpacing");
          const increaseSpacingButton = document.getElementById("increaseSpacing");
          const spacingSlider = document.getElementById("spacing-slider");
          
          const fontSelect = document.getElementById("font-select")

          // FONT SIZE CHANGING
          function updateFontSize() {
            const fontSize = fontSizeSlider.value;
            displayText.style.fontSize = `${fontSize}rem`;
          }
          decreaseFontButton.addEventListener("click", function() {
            fontSizeSlider.stepDown();
            updateFontSize();
          });
          increaseFontButton.addEventListener("click", function() {
            fontSizeSlider.stepUp();
            updateFontSize();
          });
          fontSizeSlider.addEventListener("input", updateFontSize);
          // FONT SIZE CHANGING
          
          // CONTRAST CHANGING
          function updateContrast() {
            const Contrast = contrastSlider.value;
            displayText.style.filter = `contrast(${Contrast})`;
          }
          decreaseContrastButton.addEventListener("click", function() {
            contrastSlider.stepDown();
            updateContrast();
          });
          increaseContrastButton.addEventListener("click", function() {
            contrastSlider.stepUp();
            updateContrast();
          });
          contrastSlider.addEventListener("input", updateContrast);
          // CONTRAST CHANGING
          
          // SPACING CHANGING
          function updateSpacing() {
            const Spacing = spacingSlider.value;
            displayText.style.letterSpacing = `${Spacing}rem`;
          }
          decreaseSpacingButton.addEventListener("click", function() {
            spacingSlider.stepDown();
            updateSpacing();
          });
          increaseSpacingButton.addEventListener("click", function() {
            spacingSlider.stepUp();
            updateSpacing();
          });
          spacingSlider.addEventListener("input", updateSpacing);
          
          // SPACING CHANGING
          function setFont() {
            var varFont = document.getElementById("font-select").value;
            let arrayTemp = varFont.split('_')
            let sNomeFonte = arrayTemp[0]
            let sTamanhoFonte = arrayTemp[1]
            let sLetterSpace = arrayTemp[2]
            let sWordSpace = arrayTemp[3]
            displayText.style.fontFamily = sNomeFonte;
            displayText.style.fontSize = sTamanhoFonte;
            displayText.style.letterSpacing = sLetterSpace;
            displayText.style.wordSpacing = sWordSpace;
          }
          fontSelect.addEventListener("input", setFont)
        

// ------------------------------ FONT AND FILTER!! ------------------------------ //
// --------------------------- cursor testing --------------------------- //
          const toggleCursor = document.getElementById('toggleCursors');
          const cssVariables = [
              '--default', '--pointer', '--grab', '--grabbing', '--text'
              // Add more variables here
          ];
          
          toggleCursor.addEventListener('click', () => {
          
            cssVariables.forEach(variable => {
              const currentStyle = getComputedStyle(document.documentElement);
              const currentValue = currentStyle.getPropertyValue(variable);
          
              const newValue = currentValue.startsWith('url(c') ? `url(a${currentValue.substr(4)}` : `url(${currentValue.substr(5)}`;
              toggleCursor.innerText = toggleCursor.innerText.endsWith('Off') ? "Toggle Cursors On" : "Toggle Cursors Off";
              document.documentElement.style.setProperty(variable, newValue);
              
            });
          });
// --------------------------- pointer testing --------------------------- //


      } catch (error) {
          console.error('Error fetching HTML:', error);
      }
    });
  
// ------------------------------ ADD TOP TAB!! ------------------------------ //

// ------------------------------ COLLAPSIBLE TABS!! ------------------------------ //


            var coll = document.getElementsByClassName("collapsible");
            var i;
            
            for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight === "50em") {
                  content.style.maxHeight = "0";
                } else {
                  content.style.maxHeight = "50em";
                }
              });
            }

// ------------------------------ COLLAPSIBLE TABS!! ------------------------------ //
// ------------------------------ ANSWERS SIDE TAB!! ------------------------------ //


            var coll = document.getElementsByClassName("answers");
            var i;
            
            for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.minWidth === "270px") {
                  content.style.minWidth = "0";
                  content.style.maxHeight = "35em";
                } else {
                  content.style.minWidth = "270px";
                  content.style.maxHeight = "76em";
                }
              });
            }

// ------------------------------ ANSWERS SIDE TAB!! ------------------------------ //
// ------------------------------ NEOCITIES DATA!! ------------------------------ //

              var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  var site_data = JSON.parse(this.responseText);
                  var num_arr = site_data.info.views.toString().split("");
                  var num_str = "";
                  for (i = 0; i < num_arr.length; i++) {
                    num_str += num_arr[i];
                    if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
                  0}
                  document.getElementById("hitcount").innerHTML = num_str;
                  var date_str = site_data.info.last_updated;
                  var date_obj = new Date(site_data.info.last_updated);
                  var month = date_obj.getMonth() + 1;
                  
                  if (month > 12) {
                    var month_str = month.toString();
                    var corrected_month = 0;
                    for (var j = 0; j < month_str.length; j++) {
                        corrected_month += parseInt(month_str[j], 10);
                    }
                    month = corrected_month;
                  }
                  
                  document.getElementById("lastupdate").innerHTML = date_obj.getFullYear() + "-" + (month < 10 ? "0" + month : month) + "-" + (date_obj.getDate() < 10 ? "0" + date_obj.getDate() : date_obj.getDate());
                }
              };
              xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=pandurso", true);
              xhttp.send();

// ------------------------------ NEOCITIES DATA!! ------------------------------ //
// ------------------------------ CHANGING TITLE!! ------------------------------ //

      var originalTitle;
      var offFocusTitles = ["Sleeping.", "Sleeping..", "Sleeping..."];
      var interval;
      var currentIndex = 0;
    
      document.addEventListener('visibilitychange', event => {
        if (document.hidden) {
          // Document is hidden
          originalTitle = document.title;
          document.title = offFocusTitles[currentIndex];
    
          interval = setInterval(function () {
            currentIndex = (currentIndex + 1) % offFocusTitles.length;
            document.title = offFocusTitles[currentIndex];
          }, 1000);
        } else {
          // Document is not hidden
          document.title = originalTitle;
          clearInterval(interval);
        }
      });

// ------------------------------ CHANGING TITLE!! ------------------------------ //
// ------------------------------ TAMANOTCHI HERE!! ------------------------------ //

            jQuery(document).ready(function($) {
              	var thisPet = {}
              	thisPet.age = 0
  
                var petHolder = {};
  
                petHolder.html = {};
                petHolder.html.pet = $("#petholder img").get(0);
                petHolder.moveStep = 12;
                petHolder.petX = 0;
                petHolder.petY = 50;
                petHolder.petRotateStep = 1;
  
                if (petHolder.html.pet) {
                  // Register interaction events
                  petHolder.html.pet.addEventListener("pointerover", function () {
                    petHolder.html.pet.style.animation = "wobble 0.21s ease-in-out infinite";
                  });
                  petHolder.html.pet.addEventListener("pointerout", function () {
                    petHolder.html.pet.style.animation = "inherit";
                  });
                }
  
                // Pet Move Style
                if (thisPet.age > 9) {
                  $("#petholder img").css("transform-origin", "center 45%");
                  petHolder.mainInterval = setInterval(walkPet, 900);
                } else {
                  $("#petholder img").css("transform-origin", "center 80%");
                  petHolder.mainInterval = setInterval(wobblePet, 900);
                }
  
                // ++ Functions ++
                
                // Egg Wobble
                function wobblePet() {
                  switch (petHolder.petRotateStep) {
                    case 0:
                      $("#petholder img").css("transform", "rotate(0deg)");
                      petHolder.petRotateStep++;
                      break;
                    case 1:
                      $("#petholder img").css("transform", "rotate(-9deg)");
                      petHolder.petRotateStep++;
                      break;
                    case 2:
                      $("#petholder img").css("transform", "rotate(0deg)");
                      petHolder.petRotateStep++;
                      break;
                    case 3:
                      $("#petholder img").css("transform", "rotate(11deg)");
                      petHolder.petRotateStep = 0;
                      break;
                  }
                }
  
                // Walking
                function walkPet() {
                  // X Axis
                  if (random100() < 50) {
                    petHolder.petX += petHolder.moveStep;
                    if (moveCheck(petHolder.petX, petHolder.petY) === false) {
                        petHolder.petX -= petHolder.moveStep * 2;
                    }
                  } else {
                    petHolder.petX -= petHolder.moveStep;
            
                    if (moveCheck(petHolder.petX, petHolder.petY) === false) {
                        petHolder.petX += petHolder.moveStep * 2;
                    }
                  }
                  // Y Axis
                  if (random100() < 50) {
                    petHolder.petY += petHolder.moveStep;
                    if (moveCheck(petHolder.petX, petHolder.petY) === false) {
                        petHolder.petY -= petHolder.moveStep * 2;
                    }
                  } else {
                    petHolder.petY -= petHolder.moveStep;
                    if (moveCheck(petHolder.petX, petHolder.petY) === false) {
                        petHolder.petY += petHolder.moveStep * 2;
                    }
                  }
                  // Set pet position
                  petHolder.html.pet.style.left = petHolder.petX + "px";
                  petHolder.html.pet.style.top = petHolder.petY + "px";
                }
  
                // Checks if the pet is within map bounds
                function moveCheck(petX, petY) {
                  if (petX > -65 && petX < 65) {
                    if (petY > 0 && petY < 80) {
                        return true;
                    }
                  }
                  return false;
                }
  
                // Returns a random number 0 to 100
                function random100() {
                  return Math.floor(Math.random() * 100 + 1);
                }
            });

// ------------------------------ TAMANOTCHI HERE!! ------------------------------ //
// ------------------------------ DISCORD MESSAGE!! ------------------------------ //

                function sendMessage() {
                  var request = new XMLHttpRequest();
                  request.open("POST", "https://discord.com/api/webhooks/1191819285698445382/YWaf2-VqfrvLbjA355qe3ppRnZFpn8T80bFi3vW7EO_zZOCUBxbPEjpwKAZkqoOzPOFW");
                  request.setRequestHeader('Content-type', 'application/json');
                  var name = document.getElementById("name").value;
                  var message = document.getElementById("message").value;
                  var contact = document.getElementById("contact").value
          
                  var date = new Date();
                  var f_date = date.toLocaleDateString("en-US");
                  var username = name;
                  var msg = "[" + date + "]" + "\n\n"  + message + "\n\n" + "Contact me by: " + contact;
                  var params = {
                      username: username,
                      content: msg,
                  };
                  // Handle success and error scenarios
                  request.onload = function() {
                    if (request.status === 200) {
                      console.log("Message sent successfully!");
                      var popup = document.getElementById("sent");
                      popup.style.opacity = "1";
                      popup.style.transform = "translateY(5.5em)";
    
                      document.getElementById("message").value = '';
                      
                      setTimeout(function() {
                        popup.style.opacity = "0";
                        popup.style.transform = "translateY(1.5em)";
                      }, 4000);
                      // Handle successful message sending here (optional)
                    } else {
                      console.error("Error sending message:", request.statusText);
                    }
                  };
                
                  request.onerror = function() {
                    console.error("Network error occurred during message sending.");
                    var popup = document.getElementById("error");
                    popup.style.opacity = "1";
                    popup.style.transform = "translateY(3em)";
  
                    document.getElementById("message").value = '';
                    
                    setTimeout(function() {
                      popup.style.opacity = "0";
                      popup.style.transform = "translateY(-2em)";
                    }, 4000);
                  };
                  request.send(JSON.stringify(params));
          
                  if (soundsEnabled) {
                    var sendSound = new Audio('https://www.rickshriver.net/sounds/keromong/gong%20D5.wav');
                    sendSound.play().catch(error => console.error("Error playing send sound:", error));
                  }
                  
                }

// ------------------------------ DISCORD MESSAGE!! ------------------------------ //
// ------------------------------ LIGHTBOX MODAL!! ------------------------------ //

            $(document).ready(function(){
              $('.lightbox').click(function(){
                
                var src = $(this).attr('src');
                var altText = $(this).attr('alt');
                var titleText = $(this).attr('title');
                
                
                $('#img01').attr('src', src);
                $('#title').text(titleText);
                $('#description').text(altText);
                
                $('#myModal').css('display', 'block');
              });
              $('.close').click(function(){
                $('#myModal').css('display', 'none');
              });
            });
            document.addEventListener('keydown', function(event) {
              if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
                  $('#myModal').css('display', 'none');
            }
            });

// ------------------------------ LIGHTBOX MODAL!! ------------------------------ //
// -------------------------------- SOUNDS HERE!! -------------------------------- //

    var soundsEnabled = false;

    function toggleSounds() {
      soundsEnabled = !soundsEnabled;
      updateSoundsButton();
        
      // Add event listeners to elements with class 'soundly' after button press
      var soundElements = document.querySelectorAll('.soundly');
  
      soundElements.forEach(function (element) {
        element.addEventListener('mouseover', playHoverSound);
        element.addEventListener('focus', playHoverSound);
        element.addEventListener('click', function (event) {
          playClickSound(event);
        });
      });

      // Add event listeners to elements with class 'link-button' after button press
      var linkButtons = document.querySelectorAll('.link-button');
  
      linkButtons.forEach(function (element) {
        element.addEventListener('click', function (event) {
          playLinkButton(event);
        });
      });
    }

    function updateSoundsButton() {
      var button = document.querySelector('.enable-sounds');
      if (soundsEnabled) {
        button.classList.add('sounds-enabled');
        button.innerText = 'Sounds Enabled';
      } else {
        button.classList.remove('sounds-enabled');
        button.innerText = 'Sounds Disabled';
      }
    }

    // Function to create and play click sound
    function playClickSound(event) {
    event.preventDefault();  // Prevent the default behavior of the click event
      if (soundsEnabled) {
        var clickSound = new Audio('https://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/35-woodblock.wav');
        
        clickSound.addEventListener('ended', function() {
          // Delay the navigation until after the sound has finished playing
          window.location.href = event.target.href;
        });
        
        clickSound.play().catch(error => console.error("Error playing click sound:", error));
      }
    }
    // Function to create and play hover sound
    function playHoverSound() {
      if (soundsEnabled) {
        var hoverSound = new Audio('https://www.muppetlabs.com/~breadbox/software/tworld/wav/click.wav');
          
        hoverSound.addEventListener('ended', function() {
          // Delay the navigation until after the sound has finished playing
          window.location.href = event.target.href;
        });
          
        hoverSound.play().catch(error => console.error("Error playing hover sound:", error));
      }
    }
    // Function to create and play click sound
    function playLinkButton(event) {
  
      if (soundsEnabled) {
        var linkButtonSound = new Audio('https://www.cs.tlu.ee/~rinde/media/soundid/klipid/nupp_alla_01_01.mp3');
        linkButtonSound.play().catch(error => console.error("Error playing link button sound:", error));
      }
    }
  
// -------------------------------- SOUNDS HERE!! -------------------------------- //

// ------------------------------ COUNTRIES STUFF!! ------------------------------ //
    // functionality:
    // display a list of buttons which are tags at the top
    // below the tags, display list of articles in div
    // when a tag is clicked, hide the articles in the div and only display entry links which have a class that matches the tag

const areas = document.querySelectorAll('#areas > ul > li > a');
const country = document.querySelectorAll('#country > ul > li');

console.log(country.length);

for (let i = 0 ; i < areas.length; i++) {
  // when a tag button is clicked...
  areas[i].addEventListener('click', event => {
    // identify which classes belong to button
    const buttonTag = areas[i].getAttribute('class');
    
    // loop through post tags
    for (let j = 0 ; j < country.length; j++) {  // Use 'j' to avoid conflict with outer loop variable 'i'
      // get post tags
      const countryTag = country[j].getAttribute('class');  // Use country[j] instead of areas[i]
      
      // if the "all" button is clicked, display everything
      if (buttonTag === "all" || countryTag === buttonTag) {  // added 'all' condition
        // display posts
        country[j].style.display = "block";
      } else {
        // hide the other posts
        country[j].style.display = "none";
      }
    }
  });
}
// ------------------------------ COUNTRIES STUFF!! ------------------------------ //
