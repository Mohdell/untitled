TM1650.on()
ModuleWorld_PWM.RGB(229, 155, 70)
basic.forever(function () {
    TM1650.showNumber(ModuleWorld_Digatal.dht11value(ModuleWorld_Digatal.DHT11Type.DHT11_temperature_C, ModuleWorld_Digatal.mwDigitalNum.P0P1))
})
