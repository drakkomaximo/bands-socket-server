const BandList = require("./band-list");


class Sockets {

    constructor( io ) {

        this.io = io;
        this.bandList = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('Cliente conectado');

            // Emitir al cliente conectado, todas las bandas actuales
            socket.emit('current-band-list', this.bandList.getBands())

            // Votar por la banda
            socket.on('vote-band', ( id )=>{
                this.bandList.increaseVotes( id )
                this.io.emit('current-band-list', this.bandList.getBands())
            })

            // Eliminar la banda
            socket.on('delete-band', ( id )=>{
                this.bandList.removeBand( id )
                this.io.emit('current-band-list', this.bandList.getBands())
            })

            // Cambiar nombre de la banda
            socket.on('change-band-name', ( data )=>{
                this.bandList.changeBandName( data.id, data.name )
                this.io.emit('current-band-list', this.bandList.getBands())
            })

            // Agregar nueva banda
            socket.on('add-new-band', ( data )=>{
                this.bandList.addBand( data.name )
                this.io.emit('current-band-list', this.bandList.getBands())
            })
            
        
        });
    }


}


module.exports = Sockets;