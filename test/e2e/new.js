describe('angularjs homepage', function() {
//  it('should greet the named user', function() {
//    browser.get('#/new');
//
//    element(by.model('query')).sendKeys('nexus');
//    element(by.repeater('phone in phones')).length();
//
//    var phones = element(by.binding('phones'));
//
//    //expect(phones.length()).toBe(1);
//  });
    var ptor;
    
    beforeEach(function(){
        ptor = protractor.getInstance();
        ptor.get('#/new');
    });

    it('should filter phones', function() {

        ptor = protractor.getInstance();
        ptor.findElement(protractor.By.input('query')).sendKeys('nexus');
        
        ptor.findElements(protractor.By.repeater('phone in phones')).then(function(rows){
            expect(rows.length).toBe(1);
        });
        ptor.findElement(protractor.By.repeater("phone in phones").row(0).column("name")).getText().then(function(text){
            expect(text).toContain("Nexus S");
        });


    },10000);
    
   it('should be possible to control phone order via the drop down select box', function() {
        ptor = protractor.getInstance();
        ptor.findElements(protractor.By.repeater('phone in phones').column('phone.name')).then(function(rows){
            expect(rows[0].getText()).toEqual("Nexus S"); 
            expect(rows[1].getText()).toEqual("Motorola 2"); 
            expect(rows[2].getText()).toEqual("MOTOROLA"); 
        });
        
        ptor.findElement(protractor.By.model('orderProp')).sendKeys('Alphabetical');
        
        ptor.findElements(protractor.By.repeater('phone in phones').column('phone.name')).then(function(rows){
            expect(rows[0].getText()).toEqual("MOTOROLA"); 
            expect(rows[1].getText()).toEqual("Motorola 2"); 
            expect(rows[2].getText()).toEqual("Nexus S"); 
        });
        
 
   },10000);
   
});