document.addEventListener('DOMContentLoaded', () => {
    const autofillButton = document.getElementById('autofill');
    if (autofillButton) {
        autofillButton.addEventListener('click', () => {
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { 
                    name: document.getElementById("application_answers_attributes_77_raw_result").value, // Ensure the element with id "application_answers_attributes_77_raw_result" exists
                }, function(response) {
                    console.log(response.status);
                });
            });
        });
    } else {
        console.error('Button with id "autofill" not found.');
    }
});
// document.getElementById('autofill').addEventListener('click', () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { 
//             // name: document.getElementById("application_answers_attributes_77_raw_result").value
//             name: document.getElementById("name").value, // i think name is application_answers_attributes_77_raw_result but double check
//         }, function(response) {
//             console.log(response.status);
//         })
//     })
// })
