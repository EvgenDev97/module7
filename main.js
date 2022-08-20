const { defaultMaxListeners } = require('prompt');

const prompt = require('prompt-sync')(); 

//first task
function someObject(Object){
    for(let key in Object){
        if(Object.hasOwnProperty(key)){
          if(typeof Object[key] === 'object'){
            console.log([key])
            someObject(Object[key]);
          }else{
            console.log(`${key}: ${Object[key]}`)
          } 

        }
      }
    }   
/*
someObject({ 
    firstName: "Alex",
    lastName: "NAV",
    "user-adress": {   
      country: "Russia",
      sity: "Moscow",
      'animals':{
        cat:'Tom',
        mouse:'Jerry'
      }

    },
  })*/

//second task

function someStringObject(str, Object){
  for(let key in Object){
    console.log(Object[key])
    if( Object[key] === str){
      console.log(`${Object[key]}: ${true} `)          
    }else{
      console.log(`${Object[key]}: ${false} `)
    }
  }
  
}
const someObj = {
  lastName:'Smith',
  firstName: 'Alex',
}
//someStringObject('Alex', someObj)




//third task

function createObject(someObjectTwo){
  someObjectTwo = Object.create(null)
  return someObjectTwo
}

//console.log(createObject())


//fours task
/*
function Device(type){
  this.type = 'electro'
}

function PC(type, power){
  this.type = 'electro',
  this.power = 'power'
}

function Lamp(type, light){
  this.type = 'electro'
  this.light = "illumination"
}

PC.prototype = new Device()
Lamp.prototype = new Device()

Device.prototype.getPower = function(type, size, power){
  console.log(`Device type is ${type} , PC size is ${size}sm and PC power consumption is ${power} watt`)
}

Lamp.prototype.getPower = function(size, light){
  console.log(`Lamp size is ${size}sm and the Lamp give ${light} lux of light `)
}

const comp = new PC('type','size','power')
const bulb = new Lamp('size', 'light')
comp.getPower('electro', 50, 70)
bulb.getPower(70, 120)*/

//fifth task

class Device {
  constructor(type){
    this.type = type || 'Electro';
  }
  powerType(){
    return `my type of power is ${this.type}`
  }
}


class PC extends Device{
  constructor(power, type){
    super(type);
    this.power = power
    
  }
  powerType(){
    if(this.power){
      return `my power consumption is ${this.power} watt`
    }else{
      return super.powerType()
    }
  }
}

class Lamp extends Device{
  constructor(light, type) {
    super(type);
    this.light = light
  }
  powerType(){
    if(this.light){
      return `lamp gives ${this.light} of lux`
    }else{
      return super.powerType()
    }
  }
}

const propOne = new PC('50');
const propTwo = new PC()
const bulb = new Lamp('50')
console.log(`${propTwo.powerType()}  and ${propOne.powerType()}` )
console.log(bulb.powerType())