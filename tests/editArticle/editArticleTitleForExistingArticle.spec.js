import { test } from '../_fixtures/fixtures';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';


let article;

test.beforeEach(async ({ page, newUserData }) => {
  article = generateNewArticleData();


  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, article);
});

test('Edit the article title for the existing article', async ({
   editArticlePage,
  viewArticlePage,
}) => {
  
  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.assertTitleFieldHasValue(article.title);
  await editArticlePage.fillTitleField(article.title + ' Updated');
  await editArticlePage.assertTitleFieldHasValue(article.title + ' Updated');
  await editArticlePage.page.waitForTimeout(3000);
  await editArticlePage.clickUpdateArticleButton();

  await viewArticlePage.assertArticleTitleIsVisible(article.title + ' Updated');
  
});

