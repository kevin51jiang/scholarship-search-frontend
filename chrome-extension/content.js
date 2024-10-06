console.log('helloooooo');
chrome.runtime.onMessage.addListener(

        function(request, sender, sendResponse) {
            try {
                document.getElementById("application_answers_attributes_77_raw_result").value = request.name 
                //#application_answers_attributes_8_raw_result
            } catch (error) {
                console.log(error)
                sendResponse({status: "Exception occurred in content.js"})

            }
        }
)

// // Autofill data (this should be loaded from storage in a real extension)
// let autofillData = {
//     firstName: "John",
//     lastName: "Doe",
//     studentId: "12345678",
//     address: "123 Main St",
//     city: "San Francisco",
//     state: "CA",
//     zip: "94132",
//     phoneNumber: "415-555-1234",
//     email: "jdoe@mail.sfsu.edu",
//     classLevel: "Junior",
//     major1: "Computer Science",
//     major2: "Mathematics",
//     minor: "Physics",
//     highSchoolGpa: "3.8",
//     cumulativeGpa: "3.5",
//     sfStateGpa: "3.6",
//     unitsCompleted: "60",
//     isVolunteering: "Yes",
//     heardAbout: "University Website",
//     signature: "John Doe",
//     todayDate: new Date().toLocaleDateString('en-US'),
//     isVeteran: "No",
//     isVeteranDependent: "No"
//   };
  
//   function autofillForm() {
//     console.log("Autofill function called");
//     const fields = [
//       { key: 'firstName', selectors: ['input[name="firstName"]', '#firstName', 'input[placeholder="First Name"]'] },
//       { key: 'lastName', selectors: ['input[name="lastName"]', '#lastName', 'input[placeholder="Last Name"]'] },
//       { key: 'studentId', selectors: ['input[name="studentId"]', '#studentId', 'input[placeholder="SF State Student ID Number"]'] },
//       { key: 'address', selectors: ['input[name="address"]', '#address', 'input[placeholder="Current Address"]'] },
//       { key: 'city', selectors: ['input[name="city"]', '#city'] },
//       { key: 'state', selectors: ['input[name="state"]', '#state', 'select[name="state"]'] },
//       { key: 'zip', selectors: ['input[name="zip"]', '#zip'] },
//       { key: 'phoneNumber', selectors: ['input[name="phoneNumber"]', '#phoneNumber', 'input[placeholder="Primary Phone Number"]'] },
//       { key: 'email', selectors: ['input[name="email"]', '#email', 'input[type="email"]'] },
//       { key: 'classLevel', selectors: ['select[name="classLevel"]', '#classLevel'] },
//       { key: 'major1', selectors: ['input[name="major1"]', '#major1', 'select[name="major1"]'] },
//       { key: 'major2', selectors: ['input[name="major2"]', '#major2', 'select[name="major2"]'] },
//       { key: 'minor', selectors: ['input[name="minor"]', '#minor', 'select[name="minor"]'] },
//       { key: 'highSchoolGpa', selectors: ['input[name="highSchoolGpa"]', '#highSchoolGpa'] },
//       { key: 'cumulativeGpa', selectors: ['input[name="cumulativeGpa"]', '#cumulativeGpa'] },
//       { key: 'sfStateGpa', selectors: ['input[name="sfStateGpa"]', '#sfStateGpa'] },
//       { key: 'unitsCompleted', selectors: ['input[name="unitsCompleted"]', '#unitsCompleted'] },
//       { key: 'isVolunteering', selectors: ['select[name="isVolunteering"]', 'input[name="isVolunteering"]'] },
//       { key: 'heardAbout', selectors: ['select[name="heardAbout"]', 'input[name="heardAbout"]'] },
//       { key: 'signature', selectors: ['input[name="signature"]', '#signature'] },
//       { key: 'todayDate', selectors: ['input[name="todayDate"]', '#todayDate', 'input[type="date"]'] },
//       { key: 'isVeteran', selectors: ['select[name="isVeteran"]', 'input[name="isVeteran"]'] },
//       { key: 'isVeteranDependent', selectors: ['select[name="isVeteranDependent"]', 'input[name="isVeteranDependent"]'] },
//     ];
  
//     fields.forEach(field => {
//       const element = field.selectors.map(selector => document.querySelector(selector)).find(el => el);
//       if (element && autofillData[field.key]) {
//         if (element.tagName === 'SELECT') {
//           const option = Array.from(element.options).find(opt => opt.text.toLowerCase().includes(autofillData[field.key].toLowerCase()));
//           if (option) element.value = option.value;
//         } else {
//           element.value = autofillData[field.key];
//         }
//         element.dispatchEvent(new Event('input', { bubbles: true }));
//         element.dispatchEvent(new Event('change', { bubbles: true }));
//       }
//     });
//   }
  
//   // Add autofill button to the page
//   function addAutofillButton() {
//     const button = document.createElement('button');
//     button.textContent = 'Autofill';
//     button.style.position = 'fixed';
//     button.style.top = '10px';
//     button.style.right = '10px';
//     button.style.zIndex = '9999';
//     button.addEventListener('click', autofillForm);
//     document.body.appendChild(button);
//   }
  
//   // Call the functions when the page is loaded
//   window.addEventListener('load', () => {
//     addAutofillButton();
//   });
  
//   // Listen for messages from the popup or options page
//   chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "updateAutofillData") {
//       autofillData = request.data;
//       sendResponse({status: "Autofill data updated"});
//     }
//   });
  