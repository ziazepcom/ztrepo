before('RootLevel', ()=> {
    console.log('RootLevel')
    //this.skip();
});

afterEach('ae', ()=>{
    console.log('This is after each')
});
describe('outermost',()=>{
    before('be', ()=> {
        console.log('Inside Suite')
    });

    context('firstlevel',()=>{

        specify('tc1', ()=>{
            console.log('I am test 1')
        })

        specify('t2',()=>{
            console.log('I am t2')
        })
        beforeEach('issuite', ()=>{
            console.log('This is before each insite a suite')
        });
        
    })

    specify('t4',()=>{
        console.log('I am t4')
    })
})

context('2ndSuite',()=>{

    specify('tc3',()=>{
        console.log('I am t3')
    })

    after('ah', ()=>{
        console.log('Ending Suite')
    });
})
after('afterOuter', ()=>{
    console.log('AfterOuter')
});
beforeEach('beout', ()=>{
    console.log('This is before each outer')
});