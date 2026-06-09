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

test('Remove the article `text` for the existing article', async ({
  viewArticlePage, editArticlePage
   }) => {

  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.fillTextField('');

  await editArticlePage.clickUpdateArticleButton();
  await viewArticlePage.assertTextFieldIsNotVisible();
});