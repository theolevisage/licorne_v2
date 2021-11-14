import axios, {AxiosStatic} from "axios";

export class Unicorn {
    private _nom: string;
    private _description: string;
    private _image: string;

    public constructor(nom :string, description :string, image :string) {
        this._nom = nom;
        this._description = description;
        this._image = image;
    }


    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }
}