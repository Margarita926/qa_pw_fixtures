import { test } from '../_fixtures/fixtures';
import { TITLE_CANNOT_BE_EMPTY } from '../../src/ui/constants/articleErrorMessages';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../src/ui/actions/auth/signUpUser';
import { createNewArticle } from '../../src/ui/actions/article/createNewArticle';

let article;

test.beforeEach(async ({ page, newUserData }) => {
  article = generateNewArticleData();
  await signUpUser(page, newUserData);
  await createNewArticle(page, newUserData, article);
});

test('Remove the article `title` for the existing article', async ({ viewArticlePage, editArticlePage }) => {

  await viewArticlePage.clickEditArticleButton();
  await editArticlePage.fillTitleField('');

  await editArticlePage.clickUpdateArticleButton();
  await editArticlePage.assertErrorMessageContainsText( TITLE_CANNOT_BE_EMPTY,);
  
});