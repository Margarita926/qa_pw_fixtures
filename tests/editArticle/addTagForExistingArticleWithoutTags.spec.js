import { test } from '../_fixtures/fixtures';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';


let article;

test.beforeEach(async ({ page, newUserData }) => {
  article = generateNewArticleData(0);
  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, article);
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

