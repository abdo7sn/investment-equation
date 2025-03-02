$(function() {
  $('.wizard > .steps li a').click(function() {
      $(this).parent().addClass('checked');
      $(this).parent().prevAll().addClass('checked');
      $(this).parent().nextAll().removeClass('checked');
  });
  $(":checkbox").on('click', function(){
      $(this).parent().parent().toggleClass("checked");
  });
  // Custome Jquery Step Button
  $('.forward').click(function() {
      $("#wizard").steps('next');
  })
  $('.backward').click(function() {
      $("#wizard").steps('previous');
  })
  // Select Dropdown
  $('html').click(function() {
      $('.select .dropdown').hide();
  });
  $('.select').click(function(event) {
      event.stopPropagation();
  });
  $('.select .select-control').click(function() {
      $(this).parent().next().toggle();
  })
  $('.select .dropdown li').click(function() {
      $(this).parent().toggle();
      var text = $(this).attr('rel');
      $(this).parent().prev().find('div').text(text);
  })

  $('[data-toggle="tooltip"]').tooltip();

  $(".wizard-option-list ul li ").click(function() {
      $(".wizard-option-list ul li").removeClass("active");
      $(this).addClass("active");
  });
  $(".texable-option ").click(function() {
      $(".texable-option").removeClass("active");
      $(this).addClass("active");
  });

  updateContainer();
  $(window).resize(function() {
      updateContainer();
  });


})

function updateContainer() {
  //multi form ===================================
  //DOM elements
  const DOMstrings = {
      stepsBtnClass: 'multisteps-form__progress-btn',
      stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
      stepsBar: document.querySelector('.multisteps-form__progress'),
      stepsForm: document.querySelector('.multisteps-form__form'),
      stepFormPanelClass: 'multisteps-form__panel',
      stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
      stepPrevBtnClass: 'js-btn-prev',
      stepNextBtnClass: 'js-btn-next'
  };


  //remove class from a set of items
  const removeClasses = (elemSet, className) => {

      elemSet.forEach(elem => {

          elem.classList.remove(className);

      });

  };

  //return exect parent node of the element
  const findParent = (elem, parentClass) => {

      let currentNode = elem;

      while (!currentNode.classList.contains(parentClass)) {
          currentNode = currentNode.parentNode;
      }

      return currentNode;

  };

  //get active button step number
  const getActiveStep = elem => {
      return Array.from(DOMstrings.stepsBtns).indexOf(elem);
  };

  //set all steps before clicked (and clicked too) to active
  const setActiveStep = activeStepNum => {

      //remove active state from all the state
      removeClasses(DOMstrings.stepsBtns, 'js-active');

      //set picked items to active
      DOMstrings.stepsBtns.forEach((elem, index) => {

          if (index <= activeStepNum) {
              elem.classList.add('js-active');
          }

      });
  };

  //get active panel
  const getActivePanel = () => {

      let activePanel;

      DOMstrings.stepFormPanels.forEach(elem => {

          if (elem.classList.contains('js-active')) {

              activePanel = elem;

          }

      });

      return activePanel;

  };

  //open active panel (and close unactive panels)
  const setActivePanel = activePanelNum => {

      const animation = $(DOMstrings.stepFormPanels, 'js-active').attr("data-animation");

      //remove active class from all the panels
      removeClasses(DOMstrings.stepFormPanels, 'js-active');
      removeClasses(DOMstrings.stepFormPanels, animation);
      removeClasses(DOMstrings.stepFormPanels, 'animate__animated');

      //show active panel
      DOMstrings.stepFormPanels.forEach((elem, index) => {
          if (index === activePanelNum) {

              elem.classList.add('js-active');
              // stepFormPanels
              elem.classList.add('animate__animated', animation);

              setTimeout(function() {
                  removeClasses(DOMstrings.stepFormPanels, 'animate__animated', animation);
              }, 1200);

              setFormHeight(elem);

          }
      });

  };


  //set form height equal to current panel height
  const formHeight = activePanel => {

      const activePanelHeight = activePanel.offsetHeight;

      DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;

  };

  const setFormHeight = () => {
      const activePanel = getActivePanel();

      formHeight(activePanel);
  };

  //STEPS BAR CLICK FUNCTION
  DOMstrings.stepsBar.addEventListener('click', e => {

      //check if click target is a step button
      const eventTarget = e.target;

      if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
          return;
      }

      //get active button step number
      const activeStep = getActiveStep(eventTarget);

      //set all steps before clicked (and clicked too) to active
      setActiveStep(activeStep);

      //open active panel
      setActivePanel(activeStep);
  });

  //PREV/NEXT BTNS CLICK
  DOMstrings.stepsForm.addEventListener('click', e => {

      const eventTarget = e.target;

      //check if we clicked on `PREV` or NEXT` buttons
      if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`))) {
          return;
      }

      //find active panel
      const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);

      let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

      //set active step and active panel onclick
      if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
          activePanelNum--;

      } else {

          activePanelNum++;

      }

      setActiveStep(activePanelNum);
      setActivePanel(activePanelNum);

  });

  //SETTING PROPER FORM HEIGHT ONLOAD
  window.addEventListener('load', setFormHeight, true);

  //SETTING PROPER FORM HEIGHT ONRESIZE
  window.addEventListener('resize', setFormHeight, true);

};

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-form");

    const scoreValues = [1, 3, 5];

    function loadSavedChoices() {
        const savedChoices = JSON.parse(localStorage.getItem("quizChoices")) || {};

        document.querySelectorAll("input[type='radio']").forEach(radio => {
            if (savedChoices[radio.id] === radio.value) {
                radio.checked = true;
            }

            radio.addEventListener("change", function () {
                saveChoice(radio);
            });
        });

        const savedScore = localStorage.getItem("quizScore");
        if (savedScore !== null) {
            console.log("Previous Score Loaded:", savedScore);
            console.log("Your Choices: ", savedChoices);
        }
    }

    function saveChoice(radio) {
        let choices = JSON.parse(localStorage.getItem("quizChoices")) || {};
        choices[radio.id] = radio.value; 
        localStorage.setItem("quizChoices", JSON.stringify(choices));
    }

    function calculateTotalScore() {
        let totalScore = 0;
        let choices = {};

        document.querySelectorAll("input[type='radio']:checked").forEach(selectedOption => {
            const options = Array.from(selectedOption.closest("ul").querySelectorAll("input[type='radio']"));
            const selectedIndex = options.indexOf(selectedOption);
            totalScore += scoreValues[selectedIndex];

            choices[selectedOption.id] = selectedOption.value;
        });

        localStorage.setItem("quizScore", totalScore);
        localStorage.setItem("quizChoices", JSON.stringify(choices));

        console.log("Total Score Saved:", totalScore);
        console.log("Choices Saved:", choices);

        //alert(`Your Score is: ${totalScore}`);
    }

    loadSavedChoices();

    function sendEmail(){
        const saveEmailButton = document.querySelector('.save-email');
        saveEmailButton.replaceWith(saveEmailButton.cloneNode(true)); 
        document.querySelector('.save-email').addEventListener('click', function () {
            const emailInput = document.getElementById("userEmail");
            const email = emailInput.value.trim();
            const userNameInput = document.getElementById('userName');
            const userName = userNameInput.value.trim();

            let totalScore = 0;
            document.querySelectorAll("input[type='radio']:checked").forEach(selectedOption => {
                const options = Array.from(selectedOption.closest("ul").querySelectorAll("input[type='radio']"));
                const selectedIndex = options.indexOf(selectedOption);
                totalScore += scoreValues[selectedIndex];
    
            });  
            let riskLevel = "";
            let riskDescription = "";

            if (totalScore >= 5 && totalScore <= 9) {
            riskLevel = "Low Risk Appetite (1)";
            riskDescription = "Prefers safety and stability over returns. Suitable for conservative investments like bonds or savings accounts.";
            } else if (totalScore >= 10 && totalScore <= 14) {
            riskLevel = "Moderate Risk Appetite (3)";
            riskDescription = "Willing to take some risk for moderate growth. Suitable for balanced portfolios with a mix of stocks and bonds.";
            } else if (totalScore >= 15 && totalScore <= 25) {
            riskLevel = "High Risk Appetite (5)";
            riskDescription = "Comfortable with significant risk for higher returns. Suitable for aggressive portfolios with a focus on stocks or alternative investments.";
            } else {
                console.warn("Total Score is out of expected range:", totalScore);
            }

            if(!userName){
                alert("You must enter your username!");
            }else{
                fetch('https://script.google.com/macros/s/AKfycbzHA2wMhfu7-yR3cye3NDrF1MQYFiMdDbm-TREIId3fzJSHhntI5T3JCATncUM5TjY2/exec', {
                    method: "POST",
                    mode: "no-cors", 
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: email, username: userName, totalscore: totalScore, risklevel: riskLevel, riskdescription: riskDescription})
                })
                .then(response => console.log("Server Response:", response))
                
                .catch(error => console.error("Error:", error));
    
                alert("Results sent successfully!");
                emailInput.value = ""; 

            }
            modal.hide(); 
        });
    }

    function completedProgress(){
        const progress = document.getElementById("wizard-progressID");

        progress.innerHTML = `
        <span>5 of 5 Completed</span>
			<div class="progress" id="progressID">
			<div class="progress-bar" style="width: 100%;"></div>
		</div>`;
    }

    let modal = new bootstrap.Modal(document.getElementById("emailModal"));

    submitButton.addEventListener("click", function (event) {
        completedProgress();
        event.preventDefault(); 
        calculateTotalScore();

        // Popup Window Open
        setTimeout(() => {
            modal.show();
        }, 1000);

        sendEmail();
    });

    // Write Email Right
    document.getElementById("userEmail").addEventListener("input", function() {
        let email = this.value;
        let downloadBtn = document.getElementById("download-btn");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        downloadBtn.disabled = !emailPattern.test(email);
    });

    // Close Popup Window
    document.querySelector('.popup-close').addEventListener('click', function () { 
        if (modal) {
            modal.hide();
        }
    });

});



