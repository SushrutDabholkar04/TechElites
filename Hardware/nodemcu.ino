#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

const char* ssid = "your_wifi_ssid";
const char* password = "your_wifi_password"; 

const char* serverName = "https://data.mongodb-api.com/app/data-abcde/endpoint/data/v1/action/insertOne";

const char* apiKey = "your_mongodb_api_key";

String distance;

void setup() {
  Serial.begin(9600);
  WiFi.begin(ssid, password);   
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("Connected to WiFi");
}

void loop() {
  if (Serial.available()) {
    distance = Serial.readStringUntil('\n');
    
    if (distance.length() > 0) {
      sendDataToServer(distance);
    }
  }
}

void sendDataToServer(String distanceValue) {
  if (WiFi.status() == WL_CONNECTED) { 
    
    HTTPClient http;
    http.begin(serverName); 
    http.addHeader("Content-Type", "application/json");
    http.addHeader("api-key", apiKey); /

    String jsonData = "{\"collection\":\"sensorData\",\"database\":\"yourDatabase\",\"dataSource\":\"Cluster0\",\"document\":{\"distance\":\"" + distanceValue + "\"}}";
    
    int httpResponseCode = http.POST(jsonData); 
    
    if (httpResponseCode > 0) {
      String response = http.getString(); 
      Serial.println(httpResponseCode); 
      Serial.println(response); 
    } else {
      Serial.print("Error on sending POST: ");
      Serial.println(httpResponseCode);
    }

    http.end(); 
  }
}