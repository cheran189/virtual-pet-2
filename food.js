class Food {
    constructor(){
        this.image = loadImage("Milk.png");
        this.lastFed;
        this.foodStock = 20;
    }
    updateFoodStock(foodStock){
        this.foodStock=this.foodStock;
    }
getFeedTime(lastFed){
    this.lastFed=lastFed;
}
deductFood(){
    if(this.foodStock > 0)(
        this.foodStock = this.foodStock - 1
    )
    return this.foodStock
}
getFoodStock(){
    return this.foodStock;
}
display(){
  //  background(46, 139, 87);

    var x=80,y=100;
    
    imageMode(CENTER);
    image(this.image, 720, 220, 70, 70);
    if(this.foodStock != 0){
        for(var i = 0;i < this.foodStock;i++){
            if(i%10===0){
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x = x+ 30;
        }
    }
}
}