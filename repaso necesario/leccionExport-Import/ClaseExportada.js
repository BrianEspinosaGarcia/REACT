export default class VideoJuego {
    constructor( title, players, type){
        this.title = title;
        this.players = players;
        this.type = type;
    }
    showData() {
        return `
            "Este es el videojuego sacado de la gabeta de Blockbuster"
            => Name : ${this.title}
            => Available Players = ${this.players}
            => Type-Videogame = ${this.type}
        `;
    }
}