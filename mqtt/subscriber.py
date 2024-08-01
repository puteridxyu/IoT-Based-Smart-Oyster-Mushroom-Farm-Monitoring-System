from asyncio import DatagramTransport
import paho.mqtt.client as mqtt
from operator import truediv
import paho.mqtt.client as mqtt
from random import randrange, uniform
import time

from threading import Timer

import pyrebase
import datetime
import requests
from firebase import firebase
import json

sensor_data = { 'timestamp': " ",
                'temperature': 0, 
                'humidity': 0, 
                'co2': 0, 
                'waterLevel': 0,
                'latitude': 0,
                'longitude': 0, 
                'temperatureStatus': " ", 
                'humidityStatus': " ", 
                'co2Status': " ",
                'humidifierStatus': " ", 
                'farmStatus': " "
              }


# firebase
firebaseConfig = {"apiKey": "AIzaSyAHlPAdRnupCdG9pDblTgM2JAGeNQioXpc",
                "authDomain": "capstone-project-bdfdb.firebaseapp.com",
                "databaseURL": "https://capstone-project-bdfdb-default-rtdb.asia-southeast1.firebasedatabase.app",
                "projectID": "capstone-project-bdfdb",
                "storageBucket": "gs://capstone-project-bdfdb.appspot.com/"}
firebase2 = pyrebase.initialize_app(firebaseConfig)
storage = firebase2.storage()
database = firebase2.database()


#api
url = "https://capstone-project-bdfdb-default-rtdb.asia-southeast1.firebasedatabase.app/"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

MQTT_Broker = "192.168.188.144"
MQTT_Port = 1883
Keep_Alive_Interval = 10

MQTT_Topic = "farm/#"


firebase = firebase.FirebaseApplication('https://capstone-project-bdfdb-default-rtdb.asia-southeast1.firebasedatabase.app/', None)

global timestamp1
global temperature1 
global humidity1
global co21 
global waterLevel1
global humidifier1
global longitude1
global latitude1
timestamp1  = ''
temperature1  = ''
humidity1 = ''
co21 = ''
waterLevel1 = ''
humidifier1 = ''
longitude1 = ''
latitude1 = ''

client = mqtt.Client()
#provide uname and pwd
client.username_pw_set(username="ayu", password="ayu123")

# on_connect function
def on_connect(client, userdata, flags, rc):
    print("Connected with result code " +str(rc))

    client.subscribe("farm/temperature")
    client.subscribe("farm/humidity")
    client.subscribe("farm/co2")
    client.subscribe("farm/waterLevel")
    client.subscribe("farm/longitude")
    client.subscribe("farm/latitude")

#on_publish if you are the publisher
def on_publish(client, userdata, mid):
    print("Message "+str(mid)+" published.")

#on_subscribe if you are the subscriber
def on_subscribe(client, userdata, mid, granted_qos):
    print("Subscribe with mid "+str(mid)+" received.")

#on_message if you are the broker
def on_message(client, userdata, msg):
    print("Message received on topic "+msg.topic+" with QoS "+str(msg.qos)+" and payload "+msg.payload)


# Connect
client.connect(MQTT_Broker, int(MQTT_Port), int(Keep_Alive_Interval))

#Subscribe to all Sensors at Base Topic
def on_connect(mosq, obj,flag, rc):
    client.subscribe((MQTT_Topic, 0))

#To print the subscribed message

def on_message(client, userdata, message):
    print("Received message '" + str(message.payload) + "' on topic '" + message.topic)

    #datetime
    now = datetime.datetime.now()
    global timestamp1 
    timestamp1 = (now.strftime("%Y-%m-%d %H:%M:%S"))

    humi = 0
    temp = 0
    co2 = 0
    water = 0
    longitude = 0
    latitude = 0
    humidifier = 0

    farmStatus = " "
    temperatureStatus = " "
    humidityStatus = " "
    co2Status = " "
    humidifierStatus = " "
    
    if message.topic == "farm/temperature":
        print("temperature updated to")
        temp = float(message.payload)
        #temp = temp.strip()
        #temp = 40
        print(temp)
        global temperature1
        temperature1 = temp
    
    if message.topic == "farm/humidity":
        print("\nhumidity updated to")
        humi = float(message.payload)
        #humi = humi.strip()
        #humi = 90
        print(humi)
        global humidity1
        humidity1 = humi

    if message.topic == "farm/co2":
        print("\nhumidity updated to")
        co2 = float(message.payload)
        #co2 = 3000
        print(co2)
        global co21
        co21 = co2

    if message.topic == "farm/waterLevel":
        print("\nwaterLevel updated to")
        water = float(message.payload)
        #water = 3.56
        print(water)
        global waterLevel1
        waterLevel1 = water

    if message.topic == "farm/longitude":
        print("\nlongitude updated to")
        longitude = float(message.payload)
        #longitude = 103.3901
        print(longitude)
        global longitude1
        longitude1 = longitude

    if message.topic == "farm/latitude":
        print("\latitude updated to")
        latitude = float(message.payload)
        #latitude = 3.5007
        print(latitude)
        global latitude1
        latitude1 = latitude
        
    if message.topic == "farm/humidifierStatus":
        print("\Humidifier status updated to")
        humidifier = float(message.payload)
        #humidifier = 0
        humidifier = int(humidifier)
        print(humidifier)
        global humidifier1
        humidifier1 = humidifier



    #firebase
    if temperature1 != '' and humidity1 != '' and co21 != '' and humidifier1 != '' and waterLevel1 != '' and latitude1 != '' and longitude1 != '': 
      
        #ConditionStatus : temperature
        if temperature1 > 38 :
            temperatureStatus = "High"
        elif temperature1 > 18:
            temperatureStatus = "Good"
        else :
            temperatureStatus = "Low"

        #ConditionStatus : humidity
        if humidity1 > 96 :
            humidityStatus = "High"
        elif humidity1 < 76:
            humidityStatus = "Low"
        else :
            humidityStatus = "Good"

        #ConditionStatus : co2
        if co21 > 1500 :
            co2Status = "High"
        elif co21 <= 300:
            co2Status = "Low"
        else :
            co2Status = "Good"
        

        #ConditionStatus : farm
        if co2Status == 'High' and humidityStatus == 'Low': 
            farmStatus = "Bad"
        elif co2Status == 'Good' and humidityStatus == 'Good' and temperatureStatus == 'Good':
            farmStatus = "Good"
        else :
            farmStatus = "Moderate"

        #ConditionStatus : humidifier
        if humidifier1 == 0 :
            humidifierStatus = "Off"
        else :
            humidifierStatus = "On"

        #location
        database.child("FarmLocation/location")
        data= {"latitude": latitude1, "longitude": longitude1,}
        database.set(data)
        #reportStatus
        database.child("DailyReport/current")
        data= { "timestamp": timestamp1,
                "farmStatus": farmStatus,
                "temperatureStatus": temperatureStatus,
                "humidityStatus": humidityStatus,
                "co2Status": co2Status,
                "humidifierStatus": humidifierStatus,
                "temperature": temperature1,
                "humidity": humidity1,
                "co2": co21,
                "waterLevel": waterLevel1
                }
        database.set(data)

        #farmData 
        print(temperature1, humidity1, co21, waterLevel1)
        data = {"timestamp": timestamp1,
            "temperature": temperature1, 
            "humidity": humidity1,
            "co2" : co21,
            "waterLevel" : waterLevel1}
        firebase.post('/FarmData',data)
        print("send to firebase")


        if co21 > 1500: #Alarm
            data = {"timestamp": timestamp1,
                "co2": co21, 
                "co2Status": "High"}
            firebase.post('/Alarm',data)
  

def on_subscribe(mosq, obj, mid, granted_qos):
    pass

def on_log(client, userdata, level, buf):
    print("log: ", buf)
    

# Assign event callbacks
client.on_message = on_message
client.on_connect = on_connect
client.on_subscribe = on_subscribe
client.on_log = on_log

client.loop_forever()

