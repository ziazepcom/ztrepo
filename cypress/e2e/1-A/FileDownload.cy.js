// <reference types="cypress-downloadfile"/>

describe('fileDownload', () => {

it('', () => {   
    cy.log('File download has started') 
    cy.downloadFile('https://demo.nopcommerce.com/Themes/DefaultClean/Content/images/logo.png','cypress/downloads','nopcom.logo')
    cy.log('File has downloaded')
});

it('', () => {    
    cy.downloadFile('https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png','cypress/downloads','yahoo-logo.png')
});

xit('', () => {    
    cy.downloadFile('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png','cypress/downloads','google-logo.png')
});

xit('', () => {
    https://www.google.com/
    //https://library.concordia.ca/help/technology/recovering_saved_files.pdf
    cy.downloadFile('https://library.concordia.ca/includes/stylesheets/clientlibs/img/logo-concordia-university.png','cypress/downloads','logo-concordia-university.png')
});

xit('', () => {
    //cy.visit('https://www.hungama.com/new-releases/lang/hindi/popular/')
    cy.downloadFile('https://www.hungama.com/song/dil-galti-kar-baitha-hai-feat-mouni-roy/75154983/','cypress/downloads','Dil Galti Kar Baitha Hai -Feat. Mouni Roy.mp3')
});

/*
//******************************************************* *
it('WikiFileDownload',()=>{
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','./cypress/downloads','Wikipedia.jpg')
})

it('GoogleFileDownload', () => {
    //cy.visit('https://www.google.com/')
    cy.downloadFile('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png','./cypress/downloads','googlelogo_color_272x92dp.png')       
});


// https://library.concordia.ca/
    xit('accessURL', () => {
        cy.visit('https://www.google.com/')
        cy.downloadFile('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png','Downloads','googlelogo_color_272x92dp.png')
        .then(()=>{
            cy.task("getImageText",{fileName: "googlelogo_color_272x92dp.png",lang:"eng",logger:"false"})
            .then(text =>
            {
                expect(text).to.contains('This is an example image')
            })
          // cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','googlelogo_color_272x92dp.png') 
       // src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" srcset="/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png>       
    });    
});*/

});