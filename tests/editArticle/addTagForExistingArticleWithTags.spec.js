import { test } from '../_fixtures/fixtures';
import { expect} from '@playwright/test';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';

let article;

test.beforeEach(async ({ page,newUserData }) => {
  article = generateNewArticleData(1);
  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, article);
});

test('Add a tag for the existing article with tags', async ({
   editArticlePage,
  viewArticlePage,
}) => {
  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.fillTagField('new-tag');
    await editArticlePage.page.waitForTimeout(500);
await expect(editArticlePage.updateArticleButton).toBeEnabled();

  await editArticlePage.clickUpdateArticleButton();
    await viewArticlePage.page.waitForTimeout(1000);
      await viewArticlePage.page.reload();
      
  await viewArticlePage.clickEditArticleButton();
     await viewArticlePage.page.reload();
    await viewArticlePage.page.waitForTimeout(1000);
  await viewArticlePage.assertTagIsVisible('new-tag');
});
