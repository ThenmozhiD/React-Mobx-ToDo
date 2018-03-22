import {observable} from 'mobx';

class store{
    @observable todoList = ["write","read"];
    @observable completedList = ["one"];

    
}

export default new store;