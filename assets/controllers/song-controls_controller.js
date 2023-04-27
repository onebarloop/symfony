import { Controller } from '@hotwired/stimulus';
import axios from "axios";

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {

    static values = {
        infoUrl: String
    }


    async play(event) {
        event.preventDefault();
        const response = await axios.get(this.infoUrlValue);
        const audio = new Audio(response.data.url)
        audio.play();
    }

}
