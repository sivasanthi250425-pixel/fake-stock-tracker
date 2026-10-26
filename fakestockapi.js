export function getstock(){
    return{
        name:"Apple Inc.",
        symbol:"AAPL",
        price:(Math.random()*3).toFixed(2),
        time:new Date().toLocaleTimeString()
        


    }
    
}
