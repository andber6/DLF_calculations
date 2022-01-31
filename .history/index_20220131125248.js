class Lonnskalkulasjoner {
    constructor(
        stKode, Lr, Alt, Ltr, Kronetillegg, Prioritering
        ){
            this.stKode = stKode;
            this.Lr = Lr;
            this.Alt = Alt;
            this.Ltr = Ltr;
            this.Kronetillegg = Kronetillegg;
            this.Prioritering = Prioritering
    }

    rekalkulerLonnsverdier() {
        // test values
        if(this.Kronetillegg >= 5000 && this.Kronetillegg < 10000) {
            this.Ltr = parseInt(this.Ltr) + 1;
            this.Kronetillegg = this.Kronetillegg - 5000;
        }
    }
}

module.exports = Lonnskalkulasjoner;