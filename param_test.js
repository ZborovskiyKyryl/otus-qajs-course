Feature('paramTest');



let accounts = new DataTable(['toDofiled']); 
accounts.add(['davert']); 
accounts.add(['admin']);
accounts.add(['chachacha']);
accounts.add(['aleluya']);
accounts.add(['Tramp']);
accounts.add(['@@(@(@(']);
accounts.add(['JIU#UH##']);
accounts.add(['czxczxc76']);


Data(accounts).Scenario('ToDo', (I, current) => {
  I.amOnPage('http://todomvc.com/examples/emberjs/');
  I.fillField('What needs to be done?', current.toDofiled); 
  
  I.pressKey('Enter');
  I.see(current.toDofiled);
});