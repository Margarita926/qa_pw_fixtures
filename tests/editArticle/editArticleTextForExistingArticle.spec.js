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

test('Edit the article text for the existing article', async ({
   editArticlePage,
  viewArticlePage,
}) => {
  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.fillTextField(article.text + ' Updated');
  await editArticlePage.clickUpdateArticleButton();
  await viewArticlePage.assertArticleTextIsVisible(article.text + ' Updated');
  
});