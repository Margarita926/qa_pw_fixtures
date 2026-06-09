import { expect,testStep } from '../../common/helpers/pw';

export class SettingsPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.usernameField = page.getByPlaceholder('Username')
    this.bioField = page.getByPlaceholder('Short bio about you')
    this.emailField = page.getByPlaceholder('Email')
    this.passwordField = page.getByPlaceholder('New Password')
    this.urlPictureField = page.getByPlaceholder('URL of profile picture')
    this.updateButon = page.getByRole('button', { name: 'Update Settings' })
    this.logoutButton = page.getByRole('button', { name: 'Or click here to logout.' })
    


  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

   async open() {
    await this.step(`Open 'Settings' page`, async () => {
      await this.page.goto('/settings');
    });
  }
    async fillUsername(username){
        await this.step('Fill new username', async() => {
            await this.usernameField.fill(username);
       });
  }
    async fillEmail(email){
        await this.step('Fill new email', async() => {
            await this.emailField.fill(email);
       });
  }
    async fillPassword(password){
        await this.step('Fill new password', async() => {
            await this.passwordField.fill(password);
       });
  }
    async fillBio(text){
        await this.step('Fill new bio', async() => {
            await this.bioField.fill(text);
       });
  }
    async fillPictureURL(text){
        await this.step('Fill new URL for picture', async() => {
            await this.urlPictureField.fill(text);
       });
  }
    async clickUpdateButton(){
        await this.step('click on Update button', async() =>{
            await this.updateButon.click();
        
    });
  }

    async asserEmailIsVisible(email) {
      await this.step(`email is visible`, async () => {
         await expect(this.emailField).toBeVisible(email);
      });
    }
  
    

    async clickOnLogoutButton(){
      await this.step(`Click on Logout button`, async () => {
        await this.logoutButton.click();
     });
    }
    
    

   
  }