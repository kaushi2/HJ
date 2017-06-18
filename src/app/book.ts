export class Book {
    id: number;
    date: string;
    title: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);

/*        let book = new Book({
            title: "",
            id: 343
        });*/
    }
}
