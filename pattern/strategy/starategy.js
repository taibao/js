function Strategy()
{

}

Strategy.prototype.tactics = function(){
    console.log('基础策略');
}

function StrategyA(){

}

StrategyA.prototype = Object.create(Strategy.prototype);
StrategyA.prototype.tactics = function(){
    console.log('骚扰敌人打野');
}

function StrategyB(){

}

StrategyA.prototype = Object.create(Strategy.prototype);
StrategyA.prototype.tactics = function(){
    console.log('猥琐发育别浪');
}

StrategyB.prototype = Object.create(Strategy.prototype);
StrategyB.prototype.tactics = function(){
    console.log('中路开团');
}

