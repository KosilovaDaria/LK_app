import {makeObservable, observable, flow, action, computed,} from 'mobx';

const getNotif = async () => {
  const res = await fetch('http://localhost:3000/notif')
    .then(res => {
      console.log(res)
      return res.json();
    })
  return res;
}

 class NotificationsStore {
  notifList = [];
  expanded = false;

  constructor(notifList) {
    makeObservable(this, {
      notifList: observable,
      expanded:observable,
      unreadCount: computed,
      fetch: flow.bound,
      expand: action,
    })
  }
   *fetch() {
    const notif = yield getNotif()
    
    this.notifList = notif;
   }
   expand(panel) {
     this.expanded = panel
   }
   get unreadCount() {
     return this.notifList.filter(notif => notif.new === true).length
   }
}
export default NotificationsStore;