import { test } from '../_fixtures/fixtures';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';



test.beforeEach(async ({ page, newUserData, articleWithoutTags }) => {
  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, articleWithoutTags);
});

test('Add a tag for the existing article without tags', async ({
  editArticlePage,
  viewArticlePage,

}) => {
  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.fillTagField('new-tag');
  await editArticlePage.clickUpdateArticleButton();
  await editArticlePage.clickUpdateArticleButton();
  await viewArticlePage.page.waitForTimeout(1000);
  await viewArticlePage.page.reload();
  await viewArticlePage.assertTagIsVisible('new-tag');
});

