'use strict;'
//crypto to generate the person id

var crypto = require('crypto');

module.exports = function(){
  return{
    peopleList: [],
    save(person){
      person.id = crypto.randomBytes(20).toString('hex');
      this.peopleList.push(person);
      return 1;
    },
    find(id){
      if(id){
        return this.peopleList.find(element =>{
          return element.id === id;
        });
      }else{
        return this.peopleList;
      }
    },
    remove(id){
      var found = 0;
      this.peopleList = this.peopleList.filter(element =>{
        if(element.id === id){
          found = 1;
        }else{
          return element.id !== id;
        }
      });
      return found;
    },
    update(id,person){
      var personIndex = this.peopleList.findIndex(element => {
        return element.id===id;
      });
      if(personIndex !== -1){
        this.peopleList[personIndex].fname = person.fname;
        this.peopleList[personIndex].lname = person.lname;
        return 1;
      }else{
        return 0;
      }
    }
  }
};
