import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

let user;

test.beforeEach(async ({ newUserData, page, context }) => {
  user = newUserData;
  await signUpUser(page, user);
  await page.waitForLoadState('networkidle');

  await page.goto('/settings');
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'Or click here to logout.' }).click();
  await page.waitForLoadState('networkidle');
  
  await context.clearCookies();
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.waitForLoadState('networkidle');
});

test('Successful `Sign in` flow test', async ({ signInPage, homePage, page }) => {
  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();
  await page.waitForLoadState('networkidle');

  await homePage.assertYourFeedTabIsVisible();
});
