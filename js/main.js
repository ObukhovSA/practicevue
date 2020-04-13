
new Vue({
  el: "#user",
  data: {
    login: ' ',
    seen: true
  },
  methods: {
    setLogin: function(){
      this.seen = false;
      item.seen = true;
    }
  }
});

let app = new Vue({
  el: '#component',
  data: {
    items: [
     {
       name: 'Овощи для тестирования',
       done: false
     }
    ],
    itemName: '',
    feedback: ''
  },
  methods: {
    add(e) {
      e.preventDefault();
      this.items.push({
        name: this.itemName,
        done: false
      });
      this.feedback = `${this.itemName} added`;
      this.itemName = '';
    },
    remove(index, name) {
      this.items.splice(index, 1);
      document.getElementById('items-label').focus();
      this.feedback = `${name} deleted`;
    }
  },
  computed: {
    validity() {
      return this.itemName.trim() === '';
    }
  }
});


