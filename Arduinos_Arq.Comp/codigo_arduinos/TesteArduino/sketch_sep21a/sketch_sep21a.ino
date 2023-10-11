int pinoSensor = 7;

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  if(digitalRead(pinoSensor) == LOW){
    Serial.println("0");
    Serial.print(",");
  }
  else{
  Serial.println("1");  
  Serial.print(",");  
}

 delay(2000);
}
