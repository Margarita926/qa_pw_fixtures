import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';


test.beforeEach(async ({ page, newUserData,articleWithOneTag }) => {


  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, articleWithOneTag);
});

test('Remove the article `tag` for the existing article', async ({
   editArticlePage,
  viewArticlePage,
  articleWithOneTag,
}) => {
  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.clickOnDeleteTag(articleWithOneTag.tags[0]);
  await editArticlePage.clickUpdateArticleButton();
  await viewArticlePage.assertTagIsNotVisible();
  
});