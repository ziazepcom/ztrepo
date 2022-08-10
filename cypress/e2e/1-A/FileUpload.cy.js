describe('File Upload Suite', () => {

//https://tus.io/demo.html
//https://cgi-lib.berkeley.edu/ex/fup.html
//http://automationpractice.com/index.php?controller=contact
//htps://css-tricks.com/examples/DragAndDropFileUploading/
//https://css-tricks.com/examples/DragAndDropFileUploading/
//https://davidwalsh.name/demo/multiple-file-upload.php
//https://practice.automationbro.com/cart/
//https://the-kitchen-applitools.netlify.app/ingredients/file-picker

const mf1 ='cypress/fixtures/APDocument.pdf'
const mf2 ='cypress/fixtures/Document1.docx'
const mf3 ='cypress/fixtures/File.txt'
const mf4 ='cypress/fixtures/GFile1.png'
const mf5 ='cypress/fixtures/ProductList.xlsx'
const mf6 ='cypress/fixtures/The-Internet.png'

const fl = [mf1,mf2,mf3,mf4,mf5,mf6]
const fu = ['https://the-internet.herokuapp.com/upload','#file-upload']
const fv = ['#file-submit','File Uploaded']

it('File Upload using Custom Command', () => {                      
    cy.CFileUpload(fu,fl,fv);
    cy.find
})

xit('multiple FileUpload using selectFile with constant path', () => {  // uploading multiple file using selectFile API
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    cy.get('#filesToUpload').selectFile([mf1,mf2,mf3])
});

xit('multiple FileUpload using selectFile with hard code path', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')    
    cy.get('#filesToUpload').selectFile(['cypress/fixtures/The-Internet.png','cypress/fixture/File.txt'])
});

//************************************** cypress-file-upload ****************************************************************
xit('davidwalsh.name/multifile', () => {                          //uploading multiple file using cypress-file-upload plugin
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    cy.get('#filesToUpload').attachFile(['APDocument.pdf','Document1.docx','File.txt','GFile1.png','ProductList.xlsx'])
      
});

xit('css-tricks.com/draganddrop', () => {                          //uploading a single file using on a Drag and Drop control
    cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
    cy.get('#file').attachFile('GFile1.png')
    cy.get('.box__success').should('contain.text','Done!')   
});

xit('the-internet.herokuapp.com/upload', () => {                 //uploading a single file using cypress-file-upload plugin
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile('File.txt')
    cy.get('#file-submit').click()
    cy.contains('File Uploaded')
    cy.get('#uploaded-files').contains('File.txt')  
});

xit('automationpractice.com/upload', () => {                     //uploading a single file using cypress-file-upload plugin
    cy.visit('http://automationpractice.com/index.php?controller=contact')
    cy.get('#fileUpload').attachFile('GFile1.png')    
});
});