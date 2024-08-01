
from operator import truediv
import paho.mqtt.client as mqtt
from random import randrange, uniform
import time
import json

# on_connect function
def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected successfully.")
    elif rc == 1:
        print("Connection refused, incorrect protocol version")
    elif rc == 2:
        print("Connection refused, invalid client identifier")
    elif rc == 3:
        print("Connection refused, server unavailable")
    elif rc == 4:
        print("Connection refused, bad username or password")
    elif rc == 5:
        print("Connection refused, not authorised")
    else:
        print("Connection failed. rc= "+str(rc))

#on_publish if you are the publisher
def on_publish(client, userdata, mid):
    print("Message "+str(mid)+" published.")

#on_subscribe if you are the subscriber
def on_subscribe(client, userdata, mid, granted_qos):
    print("Subscribe with mid "+str(mid)+" received.")

#on_message if you are the broker
def on_message(client, userdata, msg):
    print("Message received on topic "+msg.topic+" with QoS "+str(msg.qos)+" and payload "+msg.payload)


#provide port and ip address of the broker
port = 1883
mqttBroker = "192.168.43.6"
#'Suhu_Dalam' is the client name
client = mqtt.Client("farmData")
#provide uname and pwd
client.username_pw_set(username="ayu", password="ayu123")

# create mqtt connection to broker
client.connect(mqttBroker,port)
#rc is global variable that hold the callback return value
rc = 0
# loop while the connection is establish (rc==0)
while rc == 0:
    rc = client.loop()
    
    temperature = uniform(24.0,35.0)
    humidity = uniform(75.0,95.0)
    co2 = uniform(300.0,1500.0)
    waterLevel = uniform(1.0,10.0)
    humidifierStatus = randrange(1)

    client.publish("farm\temperature",temperature)
    client.publish("farm\humidity",humidity)
    client.publish("farm\co2",co2)
    client.publish("farm\waterLevel",waterLevel)
    client.publish("farm\humidifierStatus",humidifierStatus)

    #print the rc code. 0 means ok. 5 means not.
    print("rc: " + str(rc) + " publish " + str(temperature) + " to topic farm\temperature")
    print("rc: " + str(rc) + " publish " + str(humidity) + " to topic farm\humidity")
    print("rc: " + str(rc) + " publish " + str(co2) + " to topic farm\co2")
    print("rc: " + str(rc) + " publish " + str(waterLevel) + " to topic farm\waterLevel")
    print("rc: " + str(rc) + " publish " + str(humidifierStatus) + " to topic farm\humidifierStatus")
    time.sleep(5)