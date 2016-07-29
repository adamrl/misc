//Selecting the pins used on the LCD panel
LiquidCrystal lcd(8, 9, 4, 5, 6, 7);
#include <LiquidCrystal.h>
//Initialize LCD screen
lcd.begin(16, 2);
// define values used by the panel and buttons
int lcd_key = 0;
int adc_key_in = 0;
#define btnRIGHT 0
#define btnUP 1
#define btnDOWN 2
#define btnLEFT 3
#define btnSELECT 4
#define btnNONE 5

// read the buttons
int read_LCD_buttons()
{
adc_key_in = analogRead(0); // read the value from the sensor
if (adc_key_in > 1000) return btnNONE;
if (adc_key_in < 20) return btnRIGHT;
if (adc_key_in < 150) return btnUP;
if (adc_key_in < 350) return btnDOWN;
if (adc_key_in < 550) return btnLEFT;
if (adc_key_in < 750) return btnSELECT;

return btnNONE; // assume no button pressed when all values fail
}

void readKeys() {
lcd.setCursor(0, 0);
int lcd_key = read_LCD_buttons(); // read the buttons

switch (lcd_key) // depending on which button was pushed, we perform an action
{
case btnRIGHT:
{
lcd.setCursor(0, 0);
lcd.print("RIGHT ");
lcd.setCursor(0, 1);
lcd.print(" ");
break;
}
case btnLEFT:
{
lcd.setCursor(0, 0);
lcd.print("LEFT ");
lcd.setCursor(0, 1);
lcd.print(" ");
break;
}
case btnUP:
{
lcd.setCursor(0, 0);
lcd.print("UP ");
lcd.setCursor(0, 1);
lcd.print(" ");
break;
}
case btnDOWN:
{
lcd.setCursor(0, 0);
lcd.print("DOWN ");
lcd.setCursor(0, 1);
lcd.print(" ");
break;
}
case btnSELECT:
{
lcd.setCursor(0, 0);
lcd.print("IP Address: ");
lcd.setCursor(0, 1);
lcd.print(WiFi.localIP());
break;
}
case btnNONE:
{
lcd.setCursor(0, 0);
lcd.print("Uptime: ");
lcd.setCursor(0, 1);
lcd.print(millis() / 1000 / 60);
lcd.print(":");
lcd.print(millis() / 1000 % 60);
lcd.print(" ");
break;
}
}
}
