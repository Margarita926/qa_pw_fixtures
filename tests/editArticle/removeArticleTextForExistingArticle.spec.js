import { test } from '../_fixtures/fixtures';

import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';




test.beforeEach(async ({ page, newUserData, articleWithOneTag }) => {

  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, articleWithOneTag);
});

test('Remove the article `text` for the existing article', async ({
  viewArticlePage, editArticlePage
   }) => {

  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.fillTextField('');

  await editArticlePage.clickUpdateArticleButton();
  await viewArticlePage.assertTextFieldIsNotVisible();
});