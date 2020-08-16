Feature('toDo');

Scenario('test 1', (I) => {
    I.amOnPage('http://todomvc.com/examples/emberjs/');
    I.fillField('What needs to be done?', 'exampleTest');
    I.pressKey('Enter');
    I.see('exampleTest');
});

Scenario('test 2', (I) => {
    I.amOnPage('http://todomvc.com/examples/emberjs/');
    I.click('//a[contains(text(),"Miguel Camba")]')
    I.see('Miguel Camba');
});

Scenario('test 3', (I) => {
    I.amOnPage('http://todomvc.com/examples/emberjs/');
    I.fillField('//input[@id="new-todo"]', 'exampleTest');
    I.click('//input[@id="new-todo"]')
});

Scenario('test 4', (I) => {
    I.amOnPage('http://todomvc.com/examples/emberjs/');
    I.fillField('What needs to be done?', 'kyryl');
    I.pressKey('Enter');
    I.see('kyryl');

    I.fillField('//input[@id="new-todo"]', 'Dmitry');
    I.pressKey('Enter');
    I.see('Dmitry');

    I.click("//input[@id='toggle-all']")
});

Scenario('test 5', (I) => {
    I.amOnPage('http://todomvc.com/examples/emberjs/');
    I.click("//a[contains(text(),'TodoMVC')]")
    I.see('Helping you select an MV* framework')
});