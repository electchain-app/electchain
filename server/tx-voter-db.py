# -*- coding: utf-8 -*-
"""
Created on Mon Nov 23 04:44:53 2020

@author: rainey
"""

from selenium import webdriver
import csv 
import pandas as pd 
import openpyxl as xl

#Populate dict of Texas zip codes and their respective counties 
reader = csv.reader(open('texas_zip_codes.csv','r', encoding='utf-8-sig'))
zip_county_dict = {}
for row in reader:
    k, v = row
    zip_county_dict[k] = v

driver = webdriver.Chrome("C:/Users/janine/Downloads/chromedriver_win32/chromedriver.exe")

def check_voter_TDL(tdl_num,dob):
    #Navigate to Am I Registered? Webpage
    driver.get("https://teamrv-mvp.sos.texas.gov/MVP/mvp.do")
    selection_criteria = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/select')
    selection_criteria.send_keys("TDL, Date of Birth")
    
    #Find fields and buttons
    tdl_field = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[4]/td/table/tbody/tr[1]/td[2]/input')
    dob_field = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[4]/td/table/tbody/tr[2]/td[2]/input')
    submit_button = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[2]/td/table/tbody/tr/td[2]/div[1]')
    
    #Interact with fields and buttons
    tdl_field.send_keys(tdl_num)
    dob_field.send_keys(dob)
    submit_button.click()
    
    #Determine voter registration based on HTML output
    voter_info_string = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table[2]/tbody/tr[2]/td[1]/table/tbody/tr/td[3]/table/tbody/tr[3]/td/div/table/tbody/tr[2]/td').get_attribute('outerHTML')
    voter_status = (voter_info_string.split('Voter Status: ')[1]).split('</')[0]
    return voter_status
    
def check_voter_basic(firstname,lastname,dob,zipcode):
    #Navigate to Am I Registered? Webpage
    driver.get("https://teamrv-mvp.sos.texas.gov/MVP/mvp.do")
    selection_criteria = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/select')
    selection_criteria.send_keys("Name, County, Date of Birth")
    county = zip_county_dict[zipcode]
    
    #Find fields and buttons
    firstname_field = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[2]/td/table/tbody/tr[2]/td[2]/input')
    lastname_field = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[2]/td/table/tbody/tr[3]/td[2]/input')
    county_field = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[2]/td/table/tbody/tr[5]/td[2]/select')
    dob_field = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[2]/td/table/tbody/tr[6]/td[2]/input')
    zipcode_field = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[2]/td/table/tbody/tr[7]/td[2]/input')
    submit_button = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[2]/td/table/tbody/tr/td[2]/div[1]')
    
    #Interact with fields and buttons
    firstname_field.send_keys(firstname)
    lastname_field.send_keys(lastname)
    county_field.send_keys(county)
    dob_field.send_keys(dob)
    zipcode_field.send_keys(zipcode)
    submit_button.click()
    
    #Determine voter registration based on HTML output
    voter_info_string = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table[2]/tbody/tr[2]/td[1]/table/tbody/tr/td[3]/table/tbody/tr[3]/td/div/table/tbody/tr[2]/td').get_attribute('outerHTML')
    voter_status = (voter_info_string.split('Voter Status: ')[1]).split('</')[0]
    return voter_status
    
    
def check_voter_VUID(vuid,dob):
    #Navigate to Am I Registered? Webpage
    driver.get("https://teamrv-mvp.sos.texas.gov/MVP/mvp.do")
    selection_criteria = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/table/tbody/tr/td[2]/select')
    selection_criteria.send_keys("VUID, Date of Birth")
    
    #Find fields and buttons
    vuid_field = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td[2]/input')
    dob_field = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[1]/td/table/tbody/tr[3]/td/table/tbody/tr[2]/td[2]/input')
    submit_button = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table/tbody/tr[1]/td/table/tbody/tr[1]/td/div/table/tbody/tr/td/table/tbody/tr/td[3]/div/div[2]/table/tbody/tr[2]/td/table/tbody/tr/td[2]/div[1]')
    
    #Interact with fields and buttons
    vuid_field.send_keys(vuid)
    dob_field.send_keys(dob)
    submit_button.click()
    
    #Determine voter registration based on HTML output
    voter_info_string = driver.find_element_by_xpath('/html/body/form/div/div/div[3]/div[2]/table[2]/tbody/tr[2]/td[1]/table/tbody/tr/td[3]/table/tbody/tr[3]/td/div/table/tbody/tr[2]/td').get_attribute('outerHTML')
    voter_status = (voter_info_string.split('Voter Status: ')[1]).split('</')[0]
    return voter_status
    
#Read database of voters into a dataframe
voters_df = pd.read_excel("voter_db.xlsx")

#Create empty column for each voter's registration status 
voter_status_list = []

#Check status for each voter and populate respective column in DF 
#Iterates dataframe in order, therefore can append to status list 
for row in voters_df.itertuples(index=True,name='Pandas'):
    firstname = row[1]
    lastname = row[2]
    zipcode = str(row[3])
    dob = row[4]
    tdl_num = str(row[5])
    voter_status = check_voter_basic(firstname,lastname,dob,zipcode)
    voter_status_list.append(voter_status)

#Insert list of voter statuses as a column to the dataframe
voters_df['Voter Registration Status'] = voter_status_list

print(voters_df)