import { test } from '../_fixtures/fixtures';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';


let article;

test.beforeEach(async ({ page, newUserData }) => {
  article = generateNewArticleData(1);

  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, article);
});

test('Remove the article `tag` for the existing article', async ({
   editArticlePage,
  viewArticlePage,
}) => {
  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.clickOnDeleteTag(article.tags[0]);
  await editArticlePage.clickUpdateArticleButton();
  await viewArticlePage.assertTagIsNotVisible();
  
});