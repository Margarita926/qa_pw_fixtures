import { test } from '../_fixtures/fixtures';
import {
  EMPTY_EMAIL_MESSAGE,
  EMPTY_PASSWORD_MESSAGE,
  INVALID_EMAIL_OR_PASSWORD_MESSAGE,
} from '../../src/ui/constants/authErrorMessages';

test.describe('Sign in negative tests', () => {
  test('Sign in with empty password', async ({ newUserData, signInPage, }) => {
    await signInPage.open();
    await signInPage.fillEmailField(newUserData.email);
    await signInPage.clickSignInButton();
    await signInPage.assertErrorMessageContainsText(EMPTY_PASSWORD_MESSAGE);
  });

  test('Sign in with empty email', async ({ newUserData, signInPage }) => {
    await signInPage.open();
    await signInPage.fillPasswordField(newUserData.password);
    await signInPage.clickSignInButton();
    await signInPage.assertErrorMessageContainsText(EMPTY_EMAIL_MESSAGE);
  });

  test('Sign in with wrong password', async ({ newUserData, signInPage }) => {
    await signInPage.open();
    await signInPage.fillEmailField(newUserData.email);
    await signInPage.fillPasswordField('1');
    await signInPage.clickSignInButton();
    await signInPage.assertErrorMessageContainsText(
      INVALID_EMAIL_OR_PASSWORD_MESSAGE,
    );
  });
});
