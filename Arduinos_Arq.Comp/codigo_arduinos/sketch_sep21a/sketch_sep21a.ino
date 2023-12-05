#include "DHT.h"
#define dht_type DHT11 
 int dht_pin = A2;
DHT dht_1 = DHT(dht_pin, dht_type);
int pinoSensor = 7; 

const int LM35 = A0;
float temperatura2;

void setup()
{
  Serial.begin(9600);
  dht_1.begin();
  pinMode(pinoSensor, INPUT);
  Serial.begin(9600);
}

void loop()
{
  if(digitalRead(pinoSensor) == LOW){
    Serial.print("0");
    Serial.print(",");
  }
  else{
  Serial.print("1");  
  Serial.print(",");  
  }
  float umidade = dht_1.readHumidity();
  temperatura2 = (float(analogRead(LM35))*5/(1023))/0.01;
  float temperatura = dht_1.readTemperature();
  
  if (isnan(temperatura) or isnan(umidade))
{
    Serial.println("Erro ao ler o DHT");
}
 else
 {
  // Serial.print("Umidade: ");
   Serial.print(umidade);
   Serial.print(",");
   Serial.println(temperatura2);
   //Serial.print(",");
   //Serial.print(" Temperatura: ");
   //Serial.println(temperatura);
   //Serial.print(" °C");
 }
 delay(1000);
}
