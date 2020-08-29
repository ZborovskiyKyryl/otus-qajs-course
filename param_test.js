Feature('paramTest');

// Define data table inside a test or load from another module

let accounts = new DataTable(['toDofiled']); //
accounts.add(['davert']); // adding records to a table
accounts.add(['admin']);
accounts.add(['chachacha']);
accounts.add(['aleluya']);
accounts.add(['Tramp']);
accounts.add(['@@(@(@(']);
accounts.add(['JIU#UH##']);
accounts.add(['czxczxc76']);

// You can skip some data. But add them to report as skipped (just like with usual scenarios):
//accounts.xadd(['admin', '23456'])

// Pass dataTable to Data()
// Use special param `current` to get current data set
Data(accounts).Scenario('ToDo', (I, current) => {
  I.amOnPage('http://todomvc.com/examples/emberjs/');
  I.fillField('What needs to be done?', current.toDofiled); // current is reserved!
  //I.fillField('Password', current.password);
  I.pressKey('Enter');
  I.see(current.toDofiled);
});