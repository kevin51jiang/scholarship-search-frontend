from selenium import webdriver
import time
web = webdriver.Chrome()
web.get('https://sfsu.academicworks.com/opportunities/15902/applications/new')
time.sleep(2) # give enough time to load
#click sign in button
button = web.find_element('xpath', '//*[@id="applicants_and_administrators"]/div/a')
button.click()
time.sleep(2) # give enough time to load
email = "kamin@sfsu.edu"  # Replace with the actual email
email_input = web.find_element('css selector', '#i0116')
email_input.send_keys(email)

# click next after email
first_button = web.find_element('xpath', '//*[@id="idSIButton9"]')
first_button.click()

# Wait for 1 second
time.sleep(1)

# click next after placing password
second_button = web.find_element('xpath', '//*[@id="idSIButton9"]')
time.sleep(2.5) # give more time to put in password
second_button.click()

# wait for finger print here #

# THUMB PRINT
time.sleep(10) #this takes longer to load  
# yes thius is my devcie confirmation
trust_browser_button = web.find_element('xpath', '//*[@id="trust-browser-button"]')
trust_browser_button.click()


time.sleep(10) # give enough time to sign in

first_name="Kareem"
name = web.find_element('xpath','//*[@id="application_answers_attributes_77_raw_result"]')  
name.send_keys(first_name)
time.sleep(600) # keep browser open

# do the rest of the inputs here

# last name //*[@id="application_answers_attributes_8_raw_result"]
# sf state sstudent id //*[@id="application_answers_attributes_9_raw_result"]
# current address //*[@id="application_answers_attributes_1348_raw_result"]
# city //*[@id="application_answers_attributes_1349_raw_result"]
