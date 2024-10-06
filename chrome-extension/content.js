chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(document.getElementById("application_answers_attributes_77_raw_result")); // debug
        try {
            document.getElementById("application_answers_attributes_77_raw_result").value = request.name;
            console.log("Success!");
            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            console.log("Exception occurred!content.js");
            sendResponse({status: "Exception occurred!"});
        }
    }
);