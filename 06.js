class TV {
    constructor(brand){
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    upVolume(){
        if(this.volume <= 100){
            this.volume ++;
        }
    }
    downVolume(){
        if(this.volume >= 0){
            this.volume --;
        }
    }
    setChanne(channelCount = 1){
        if(channelCount <= 50){
            if(channelCount > 1){
                this.channel = channelCount;
            }else{
                this.channel += channelCount;
            }
        }
    }
    reset(){
        this.channel = 1;
        this.volume  = 50;
    }
    info(){
        return `${this.brand} \nVolume: ${this.volume}, Channel: ${this.channel} `;
    }
}
const tv = new TV("SAMSUNG");
tv.upVolume();
tv.setChanne();
tv.setChanne(36);
tv.reset();
console.log(tv.info());