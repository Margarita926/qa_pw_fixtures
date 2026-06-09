import { test } from '../_fixtures/fixtures';
import { expect} from '@playwright/test';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';


test.beforeEach(async ({ page,newUserData, articleWithTwoTags }) => {
  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, articleWithTwoTags);
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
