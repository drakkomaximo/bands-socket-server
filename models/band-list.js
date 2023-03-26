const Band = require("./band")

class BandList {
    constructor(){
        this.bands = [
            new Band('Metallica'),
            new Band('Iron Maiden'),
            new Band('Helloween'),
            new Band('AC/DC')
        ]
    }

    addBand( name ){
        const newBand = new Band( name )
        this.bands.push( newBand )
        return this.bands
    }

    removeBand( id ){
        this.bands = this.bands.filter( band => band.id !== id)
    }

    getBands(){
        return this.bands
    }

    increaseVotes( id ){
        this.bands = this.bands.map( band =>{
            if( band.id === id){
                band.vote += 1
            }
            return band
        })
    }

    changeBandName( id, newBandName ){
        this.bands = this.bands.map( band =>{
            if( band.id === id){
                band.name = newBandName
            }

            return band
        })
    }
}

module.exports = BandList