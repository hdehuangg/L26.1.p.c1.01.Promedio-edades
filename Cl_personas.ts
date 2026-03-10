class Cl_persona1 {
    private _edad: number;

    constructor(e: number) {
        this._edad = e;
    }

    set edad(e: number) {
        this._edad = e;
    }

    get edad(): number {
        return this._edad;
    }
}

class Cl_personasGrupo {
    private _acEdad: number;
    private _contPersonas: number;

    constructor() {
        this._acEdad = 0;
        this._contPersonas = 0;
    }

    procesarPersona(p: Cl_persona1): void {
        this._contPersonas++;
        this._acEdad += p.edad;
    }

    edadPromedio(): number {
        if (this._contPersonas === 0) {
            return 0;
        }
        return this._acEdad / this._contPersonas;
    }
}