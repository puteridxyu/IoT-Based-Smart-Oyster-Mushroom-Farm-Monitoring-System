#include <WiFi.h>
#include <PubSubClient.h>
#include <Wire.h>

// DHT22
#include "DHT.h"
#define DHTPIN 4 
#define DHTTYPE DHT22 
DHT dht(DHTPIN, DHTTYPE);
#define humidifierPin  19   // LED2 is a Built-in LED.
float temperature = 0;
float humidity = 0;

//MQ135
#include "MQ135.h"
#include "MQ135.h"
#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
float co2;

//Ultrasonic
#define trigPin  25   // LED2 is a Built-in LED.
#define echoPin  26   // LED2 is a Built-in LED.
#define waterPump  18   // LED2 is a Built-in LED.
#define SOUND_SPEED 0.034
long duration;
float distanceCm;
float waterLevel = 0;
int humidifierStatus = 0;

// Replace the next variables with your SSID/Password combination
const char* ssid = "tido_jelah_korang";
const char* password = "ayu100451";

// Add your MQTT Broker IP address, example:
//const char* mqtt_server = "192.168.1.144";
const char* mqtt_server = "192.168.188.144";

WiFiClient espClient;
PubSubClient client(espClient);
long lastMsg = 0;
char msg[50];
int value = 0;





float longitude = 0;
float latitude = 0;

void setup() {
  Serial.begin(115200);
  pinMode(34, INPUT);        //Gas sensor
  pinMode(humidifierPin, OUTPUT);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(waterPump, OUTPUT);
  dht.begin();
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);

}

void setup_wifi() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* message, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");
  String messageTemp;
  
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
    messageTemp += (char)message[i];
  }
  Serial.println();

}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("ESP8266Client")) {
      Serial.println("connected");
      // Subscribe
      client.subscribe("esp32/output");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}
void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  long now = millis();
  if (now - lastMsg > 10000) {
    lastMsg = now;
    
    Serial.print("--------------------------------------\n");
    
    float temperature = dht.readTemperature();   
  
    // Convert the value to a char array
    char tempString[8];
    dtostrf(temperature, 1, 2, tempString);
    Serial.print("Temperature: ");
    Serial.println(tempString);
    client.publish("farm/temperature", tempString);

    float humidity = dht.readHumidity();
   
    
    // Convert the value to a char array
    char humString[8];
    dtostrf(humidity, 1, 2, humString);
    humidity = 56;
    Serial.print("Humidity: ");
    Serial.println(humString);
    client.publish("farm/humidity", humString);

    int humidifier = 0;  
    humidity = 80;
   
    Serial.print("--");
    //Water Pump
    if (humidity > 75) {
    digitalWrite(humidifierPin, LOW);
    Serial.print("\nHumidifier on : Off\n");
    humidifier = 0;
    } else if (humidity < 76) {
    digitalWrite(humidifierPin, HIGH);
    Serial.print("\nHumidifier : On\n");
    humidifier = 1;
    }
    
    // Convert the value to a char array
    char switchString[8];
    dtostrf(humidifier, 1, 0,switchString);
    Serial.print("Humidifier: ");
    Serial.println(switchString);
    client.publish("farm/humidifierStatus", switchString);
    
    //MQ135
    MQ135 gasSensor = MQ135(34);
    float co2 = gasSensor.getPPM()/100;
   
    
    // Convert the value to a char array
    char co2String[8];
    dtostrf(co2, 1, 2, co2String);
    Serial.print("Carbon Dioxide: ");
    Serial.println(co2String);
    client.publish("farm/co2", co2String);

    //waterLevel

    // Clears the trigPin
    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    // Sets the trigPin on HIGH state for 10 micro seconds
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    
    // Reads the echoPin, returns the sound wave travel time in microseconds
    duration = pulseIn(echoPin, HIGH);
    
    // Calculate the distance
    distanceCm = duration * SOUND_SPEED/2;
  
    float waterLevel = 10 - distanceCm;
   
    // Convert the value to a char array
    char watString[8];
    dtostrf(waterLevel, 1, 2, watString);
    Serial.print("Water Level: ");
    Serial.println(watString);
    client.publish("farm/waterLevel", watString);

    float longitude = 103.3901;
    
    // Convert the value to a char array
    char longString[8];
    dtostrf(longitude, 1, 4, longString);
    Serial.print("Longitude: ");
    Serial.println(longString);
    client.publish("farm/latitude", longString);

    float latitude = 3.5007;
    
    // Convert the value to a char array
    char latString[8];
    dtostrf(latitude, 1, 4, latString);
    Serial.print("Latitude: ");
    Serial.println(latString);
    client.publish("farm/longitude", latString);
    delay(3000);

    Serial.print("--");
    //Water Pump
    if (waterLevel > 3) {
    digitalWrite(waterPump, HIGH);
    Serial.print("\nWater pump : Off\n");
    } else if (waterLevel < 4) {
    digitalWrite(waterPump, LOW);
    Serial.print("\nWater pump : On\n");
    }
   

  }
}
