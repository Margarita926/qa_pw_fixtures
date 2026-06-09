import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';

let user;

test.beforeEach(async ({ newUserData, page }) => {
  user = newUserData;
  await signUpUser(page, user);
});

test('Successful `Sign in` flow test', async ({ homePage }) => {
  await homePage.assertYourFeedTabIsVisible();
});
