import { test } from '../_fixtures/fixtures';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';



test.beforeEach(async ({ page, newUserData, articleWithoutTags }) => {

  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, articleWithoutTags);
});

test('Edit the article title for the existing article', async ({
   editArticlePage,
  viewArticlePage,
  articleWithoutTags
}) => {
  
  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.assertTitleFieldHasValue(articleWithoutTags.title);
  await editArticlePage.fillTitleField(articleWithoutTags.title + ' Updated');
  await editArticlePage.assertTitleFieldHasValue(articleWithoutTags.title + ' Updated');
  await editArticlePage.page.waitForTimeout(3000);
  await editArticlePage.clickUpdateArticleButton();

  await viewArticlePage.assertArticleTitleIsVisible(articleWithoutTags.title + ' Updated');
  
});

