
Feature('Testing Example Feature');

Scenario('test something', (I) => {
    I.amOnPage('https://www.w3schools.com/html/html_iframe.asp');
    I.seeInTitle('Iframes');
    I.amOnPage('https://www.w3schools.com/html/html_iframe.asp').within('a[href*=\'#1\']', function(){
        I.click('Start HTML Quiz!')
    },['iframe[src*=\default.asp\'']);
    ;    
});
