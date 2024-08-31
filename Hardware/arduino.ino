#include<arduino.h>
const int trigPin = 9;
const int echoPin = 10;
const int gasSensorPin = A0;
const int tempSensorPin = A1;  

void setup() {
  
  Serial.begin(9600);
  
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duration = pulseIn(echoPin, HIGH);
  int distance = duration * 0.034 / 2;
  
 
  int gasValue = analogRead(gasSensorPin);
  
 
  int tempValue = analogRead(tempSensorPin);
  float temperatureC = tempValue * (5.0 / 1023.0) * 100;
  
  
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  Serial.print("Gas Sensor Value: ");
  Serial.println(gasValue);
  
  Serial.print("Temperature (LM35): ");
  Serial.print(temperatureC);
  Serial.println(" C");
  
  delay(1000);  
}