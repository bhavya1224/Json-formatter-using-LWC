import { LightningElement } from 'lwc';

export default class JSONFormatterApp extends LightningElement {

    json ="";
    output =""
    handleChange(Event){
        this.json = Event.target.value;

    }
    handleClick(){
        const formatted = JSON.stringify(JSON.parse(this.json),null,2);
        this.output = formatted;
    }
}