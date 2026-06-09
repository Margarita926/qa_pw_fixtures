import { test } from '../_fixtures/fixtures';

import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';




test.beforeEach(async ({ page, newUserData, articleWithoutTags }) => {


  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, articleWithoutTags);
});

test('Edit the article text for the existing article', async ({
   editArticlePage,
  viewArticlePage,
  articleWithoutTags
}) => {
  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.fillTextField(articleWithoutTags.text + ' Updated');
  await editArticlePage.clickUpdateArticleButton();
  await viewArticlePage.assertArticleTextIsVisible(articleWithoutTags.text + ' Updated');
  
});