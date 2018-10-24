import { observable, action } from 'mobx';
class commonStore {
  @observable title = 'this is about page';
  @observable is_login = localStorage.getItem('sess-id') && true
  @action changeLoginState(flag){
    this.is_login = flag
  }
}
export default new commonStore();