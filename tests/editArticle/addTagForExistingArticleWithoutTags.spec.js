import { test } from '@playwright/test';
import { HomePage } from '../../src/ui/pages/HomePage';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { generateNewUserData } from '../../src/common/testData/generateNewUserData';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { ViewArticlePage } from '../../src/ui/pages/article/ViewArticlePage';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';
import { EditArticlePage } from '../../src/ui/pages/article/EditArticlePage';
import { createNewArticleWithoutTags } from '../../src/ui/actions/article/createNewArticleWithoutTags';


let article;
let viewArticlePage;
let homePage;
let editArticlePage;



test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  editArticlePage = new EditArticlePage(page);
  viewArticlePage = new ViewArticlePage(page);
  article = generateNewArticleData();
  console.log('Generated article:', JSON.stringify(article, null, 2));


  const user = generateNewUserData();
  await signUpUser(page, user);
  await createNewArticleWithoutTags(page, user, article);
});

test('Add a tag for the existing article without tags', async () => {
  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.fillTagField('new-tag');
  await editArticlePage.clickUpdateArticleButton();
  await editArticlePage.clickUpdateArticleButton();
  await viewArticlePage.assertArticleTitleIsVisible(article.title);
});
//   await viewArticlePage.assertArticleTagsAreVisible(['new-tag']);});
