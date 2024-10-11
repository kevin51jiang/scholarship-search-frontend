from selenium import webdriver
import time

# get this from local storage 
email = "kamin@sfsu.edu"  # for login
first_name = "Kareem"
last_name = "test"
student_id = "123456789"
current_address = "123 Main St"
city = "San Francisco"
state = "CA"
zip_code = "94132"

web = webdriver.Chrome()
web.get('https://sfsu.academicworks.com/opportunities/15902/applications/new')
time.sleep(1) # give enough time to load
#click sign in button
button = web.find_element('xpath', '//*[@id="applicants_and_administrators"]/div/a')
button.click()
time.sleep(1) # give enough time to load

email_input = web.find_element('css selector', '#i0116')
email_input.send_keys(email)

# click next after email
first_button = web.find_element('xpath', '//*[@id="idSIButton9"]')
first_button.click()

time.sleep(3.5)

# click next after placing password
second_button = web.find_element('xpath', '//*[@id="idSIButton9"]')
# time.sleep(3.5) # give more time to put in password
second_button.click()

# wait for finger print here #

# THUMB PRINT
time.sleep(10) #this takes longer to load  
# yes thius is my devcie confirmation
trust_browser_button = web.find_element('xpath', '//*[@id="trust-browser-button"]')
trust_browser_button.click()


time.sleep(10) # give enough time to sign in

# fill out form

name = web.find_element('xpath','//*[@id="application_answers_attributes_77_raw_result"]')  
name.send_keys(first_name)

last_name_input = web.find_element('xpath', '//*[@id="application_answers_attributes_8_raw_result"]')
last_name_input.send_keys(last_name)

student_id_input = web.find_element('xpath', '//*[@id="application_answers_attributes_9_raw_result"]')
student_id_input.send_keys(student_id)

current_address_input = web.find_element('xpath', '//*[@id="application_answers_attributes_1348_raw_result"]')
current_address_input.send_keys(current_address)

time.sleep(2) # give time for debug

# this breaks the program
# city_input = web.find_element('xpath', '//*[@id="application_answers_attributes_1349_raw_result"]')
# city_input.send_keys(city)

# time.sleep(2) # give time for debug

# state_input = web.find_element('xpath', '//*[@id="application_answers_attributes_12_raw_result"]')
# state_input.send_keys(state)
# time.sleep(2) # give time for debug

# zip_code_input = web.find_element('xpath', '//*[@id="application_answers_attributes_13_raw_result"]')
# zip_code_input.send_keys(zip_code)

# add more as needed here

# end of inputs

time.sleep(600) # keep browser open

# do the rest of the inputs here

# last name //*[@id="application_answers_attributes_8_raw_result"]
# sf state sstudent id //*[@id="application_answers_attributes_9_raw_result"]
# current address //*[@id="application_answers_attributes_1348_raw_result"]
# city //*[@id="application_answers_attributes_1349_raw_result"]
# state //*[@id="application_answers_attributes_12_raw_result"]
# zip //*[@id="application_answers_attributes_13_raw_result"]