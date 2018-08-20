var counter = (function(){
  // Приватные переменные
  var _number;  
  // Приватные методы
  var _isInteger = function (num) {
  return (num ^ 0) === num; // Проверяет целое число или нет  и возвращает  true или false
}  
  var setValue = function(num){
    
    if (_isInteger(num)){
      _number = num;
    } else {
      console.log ("Число не целое");
    }  
  }       
       
  var increaseCounter = function (){
    _number++;
  }   
  var decreaseCounter = function (){
    _number--;
  }
  var printCounter = function (){
    console.log(_number);
  }
  
  return {
    setValue,
    increaseCounter,
    decreaseCounter,
    printCounter
  }
    
}());

counter.setValue(5);
counter.printCounter();
counter.increaseCounter();
counter.increaseCounter();
counter.printCounter();
counter.printCounter();


counter.setValue(0.5);
counter.printCounter();

counter.increaseCounter();
counter.increaseCounter();
counter.printCounter();























