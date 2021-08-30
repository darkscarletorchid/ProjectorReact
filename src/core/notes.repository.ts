import { Note } from "./app.types";

export default class NotesRepository {

    readonly key: string = "notesList";
    notesList: Note[];
    

    constructor() {
        if (localStorage.getItem(this.key) != null) {
            this.notesList = JSON.parse(localStorage.getItem(this.key) || "")
        } 
        else {
            this.notesList = [];
        }
      }

    getAll(): Note[] {
        return this.notesList;
    };

    get(id: number): Note | null {
        return this.notesList.find(_ => _.id == id) || null;
    };

    create(item: Note) {
        item.id = this.notesList.length > 0 ? this.notesList[this.notesList.length - 1].id + 1 : 1;
        this.notesList.push(item);
        localStorage.setItem(this.key, JSON.stringify(this.notesList));
    };

    update(item: Note) {

        let index = this.notesList.findIndex(_ => _.id == item.id);
        this.notesList[index] = item;
        localStorage.setItem(this.key, JSON.stringify(this.notesList));
    };

    delete(id: number) {
        let index = this.notesList.findIndex(_ => _.id == id);
        this.notesList.splice(index, 1);
        localStorage.setItem(this.key, JSON.stringify(this.notesList));
    };
}