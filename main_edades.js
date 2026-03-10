class Cl_persona {
    constructor(e) {
        this._edad = e;
    }
    get edad() {
        return this._edad;
    }
}

class Cl_personas {
    constructor() {
        this._acEdad = 0;
        this._contPersonas = 0;
    }

    procesarPersona(p) {
        this._contPersonas++;
        this._acEdad += p.edad;
    }

    edadPromedio() {
        if (this._contPersonas === 0) return 0;
        return this._acEdad / this._contPersonas;
    }
}

// Datos de prueba del ejercicio: 15, 14, 19, 20, 18
const grupo = new Cl_personas();
const datosEdades = [15, 14, 19, 20, 18];

datosEdades.forEach(e => {
    let p = new Cl_persona(e);
    grupo.procesarPersona(p);
});

// Mostrar el resultado en el HTML
document.getElementById("salida-edades").innerHTML = 
    `La edad promedio es ${grupo.edadPromedio().toFixed(0)}`;