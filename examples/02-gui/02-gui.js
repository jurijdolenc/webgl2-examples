import { GUI } from '../../lib/dat.gui.module.js'; //za spreminjanje barv (maš še sliderje, checkboxe)
import { Application } from '../../common/engine/Application.js';

class App extends Application {

    start() {
        this.color = [ 65, 105, 225 ];  //na zacetku nastavljena barva
    }

    render() {
        const gl = this.gl;

        const c = this.color;
        gl.clearColor(c[0] / 255, c[1] / 255, c[2] / 255, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const app = new App(canvas); //tukaj bom spreminjal  var color
    const gui = new GUI();
    gui.addColor(app, 'color');
});
